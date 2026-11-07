#!/usr/bin/env python3
"""Comprova la numeració i les referències de totes les figures del web.

Revisa les pàgines de docs/ i avisa:

1. si una figura no té peu, o el peu no comença per «Figura n.» enllaçat al .tex;
2. si l'enllaç del peu no apunta al .tex de la mateixa figura o aquest .tex no existeix;
3. si el número del peu no coincideix amb el del nom del fitxer (fig_2_19 ↔ 2.19, fig_pau_c_3 ↔ PAU.C.3);
4. si una referència a l'SVG no porta ?v=n;
5. si dues figures diferents tenen el mateix número o falta algun número d'una sèrie;
6. si, a les pàgines de teoria, els números no van en ordre d'aparició;
7. si hi ha un .tex sense SVG, un SVG sense .tex o un SVG que no se cita enlloc.

Ús, des de l'arrel del repositori:

    .venv\\Scripts\\python.exe scripts\\comprova_figures.py

Acaba amb codi 0 si tot és coherent i amb codi 1 si troba algun problema.
"""
import re
import sys
import tomllib
from pathlib import Path

ARREL = Path(__file__).resolve().parents[1]
DOCS = ARREL / "docs"
IMG = DOCS / "img"
TIKZ = ARREL / "figures" / "tikz"
URL_TEX = "https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/"

RE_IMATGE = re.compile(r"!\[[^\]]*\]\(([^)\s]+\.svg)(\?v=\d+)?\)")
RE_BLOC = re.compile(r"<figure\b.*?</figure>", re.S)
RE_PEU = re.compile(r'<figcaption>\s*<strong><a href="([^"]+)">Figura ([^<]*?)\.?</a></strong>')
RE_NOM = re.compile(r"^fig_(?:(\d+)_(\d+)|pau_([a-z]+)_(\d+))_")
RE_NUMERO = re.compile(r"^(?:(\d+)\.(\d+)|PAU\.([A-Z]+)\.(\d+))$")


def pagines_del_menu():
    with open(ARREL / "zensical.toml", "rb") as f:
        menu = tomllib.load(f)["project"]["nav"]

    def recorre(x):
        if isinstance(x, str):
            return [x]
        if isinstance(x, dict):
            return [p for v in x.values() for p in recorre(v)]
        return [p for v in x for p in recorre(v)]

    return [DOCS / p for p in recorre(menu) if p.endswith(".md")]


def serie_i_ordre(numero):
    """«2.19» -> ("2", 19); «PAU.C.3» -> ("PAU.C", 3)."""
    m = RE_NUMERO.match(numero)
    if not m:
        return None
    return (m.group(1), int(m.group(2))) if m.group(1) else (f"PAU.{m.group(3)}", int(m.group(4)))


def numero_del_nom(nom):
    m = RE_NOM.match(nom)
    if not m:
        return None
    return f"{m.group(1)}.{m.group(2)}" if m.group(1) else f"PAU.{m.group(3).upper()}.{m.group(4)}"


def rel(path):
    return path.relative_to(ARREL).as_posix()


def main():
    problemes = []
    menu = pagines_del_menu()
    altres = sorted(p for p in DOCS.rglob("*.md") if p not in menu and not p.name.startswith("__"))
    citats = set()
    figures = []  # (pàgina, número, svg)

    for pagina in menu + altres:
        text = pagina.read_text(encoding="utf-8-sig")
        nom_pagina = rel(pagina)
        dins_blocs = 0
        for bloc in RE_BLOC.findall(text):
            imatges = RE_IMATGE.findall(bloc)
            if not imatges:
                continue
            dins_blocs += len(imatges)
            ruta_svg, versio = imatges[0]
            svg = (pagina.parent / ruta_svg).resolve()
            nom = svg.name
            citats.add(svg)
            if not svg.exists():
                problemes.append(f"{nom_pagina}: cita {ruta_svg}, que no existeix.")
            if not versio:
                problemes.append(f"{nom_pagina}: {nom} es cita sense ?v=n.")
            peu = RE_PEU.search(bloc)
            if not peu:
                problemes.append(f"{nom_pagina}: {nom} no té un peu «Figura n.» enllaçat al .tex.")
                continue
            href, numero = peu.group(1), peu.group(2).strip()
            try:
                tex_esperat = (TIKZ / svg.relative_to(IMG)).with_suffix(".tex")
            except ValueError:
                problemes.append(f"{nom_pagina}: {nom} no és dins de docs/img.")
                continue
            if href != URL_TEX + tex_esperat.relative_to(TIKZ).as_posix():
                problemes.append(f"{nom_pagina}: el peu de la figura {numero} enllaça a {href}, "
                                 f"però hauria d'enllaçar a {rel(tex_esperat)}.")
            if not tex_esperat.exists():
                problemes.append(f"{nom_pagina}: falta {rel(tex_esperat)}, la font de {nom}.")
            if serie_i_ordre(numero) is None:
                problemes.append(f"{nom_pagina}: «Figura {numero}» no segueix la numeració tema.n o PAU.X.n.")
                continue
            if numero_del_nom(nom) != numero:
                problemes.append(f"{nom_pagina}: el peu diu «Figura {numero}», però el fitxer és {nom}.")
            figures.append((pagina, numero, svg))
        if dins_blocs != len(RE_IMATGE.findall(text)):
            problemes.append(f"{nom_pagina}: hi ha SVG fora d'un bloc <figure> amb peu.")

    # Números repetits i forats de cada sèrie
    per_numero, series = {}, {}
    for pagina, numero, svg in figures:
        per_numero.setdefault(numero, set()).add(svg)
        serie, ordre = serie_i_ordre(numero)
        series.setdefault(serie, set()).add(ordre)
    for numero, svgs in sorted(per_numero.items()):
        if len(svgs) > 1:
            problemes.append(f"La figura {numero} correspon a més d'un fitxer: "
                             + ", ".join(sorted(s.name for s in svgs)) + ".")
    for serie, ordres in sorted(series.items()):
        falten = sorted(set(range(1, max(ordres) + 1)) - ordres)
        if falten:
            problemes.append(f"A la sèrie {serie} falten les figures " + ", ".join(f"{serie}.{n}" for n in falten) + ".")

    # Ordre d'aparició a les pàgines de teoria (les de pràctica alternen enunciats i solucions)
    darrer = {}
    for pagina, numero, svg in figures:
        if pagina not in menu or "per-practicar" in pagina.parts:
            continue
        serie, ordre = serie_i_ordre(numero)
        if ordre <= darrer.get(serie, (0, None))[0]:
            problemes.append(f"{rel(pagina)}: la figura {numero} surt després de la "
                             f"{serie}.{darrer[serie][0]} ({rel(darrer[serie][1])}).")
        darrer[serie] = (max(ordre, darrer.get(serie, (0, None))[0]), pagina)

    # Fitxers sense parella o sense citar
    svgs = {p.resolve() for p in IMG.rglob("*.svg")}
    texs = {p.resolve() for p in TIKZ.rglob("*.tex")}
    for tex in sorted(texs):
        if (IMG / tex.relative_to(TIKZ)).with_suffix(".svg").resolve() not in svgs:
            problemes.append(f"{rel(tex)} no té SVG: executa scripts/compila_figures.ps1.")
    for svg in sorted(svgs):
        if (TIKZ / svg.relative_to(IMG)).with_suffix(".tex").resolve() not in texs:
            problemes.append(f"{rel(svg)} no té font .tex a figures/tikz.")
        elif svg not in citats:
            problemes.append(f"{rel(svg)} no se cita a cap pàgina.")

    if problemes:
        print("Problemes amb les figures:")
        for p in problemes:
            print(f"  - {p}")
        return 1
    print(f"Figures correctes: {len(figures)} figures, numeració i referències coherents.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
