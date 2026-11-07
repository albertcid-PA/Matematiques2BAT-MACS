#!/usr/bin/env python3
"""Comprova que els fitxers generats estan al dia respecte de les seves fonts.

Compara els fitxers canviats amb un commit de referència (HEAD, per defecte) i avisa:

1. si un .tex de figures/tikz ha canviat i el seu SVG no s'ha regenerat;
2. si un SVG o un PDF publicat ha canviat i alguna referència conserva el mateix ?v=n;
3. si la pràctica de càlcul no coincideix amb el que generen les fonts de sources/calcul;
4. si han canviat les pàgines, les figures o l'estil d'un tema i el seu PDF no s'ha regenerat;
5. si han canviat els enunciats o les figures del recull de càlcul i el PDF no s'ha regenerat.

Ús, des de l'arrel del repositori:

    .venv\\Scripts\\python.exe scripts\\comprova_sincronia.py             # canvis sense commit
    .venv\\Scripts\\python.exe scripts\\comprova_sincronia.py --staged    # només el que s'ha afegit amb git add
    .venv\\Scripts\\python.exe scripts\\comprova_sincronia.py --des origin/main   # tot el que encara no s'ha publicat

Acaba amb codi 0 si tot és coherent i amb codi 1 si troba algun problema.
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

ARREL = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ARREL / "scripts"))

import genera_pagines_practica as practica  # noqa: E402
import genera_pdf_tema as tema_pdf  # noqa: E402

PRACTICA_WEB = "docs/calcul/per-practicar/exercicis_calcul.md"
PRACTICA_RECULL = "sources/generated/recull-enunciats-calcul.md"
PDF_RECULL = "docs/assets/exercicis/recull_enunciats_calcul.pdf"
FONTS_RECULL = ["sources/calcul/exercicis.md", "sources/calcul/problemes-pau.md",
                PRACTICA_RECULL, "scripts/genera_pdf_recull_calcul.ps1"]
FONTS_TOTS_ELS_TEMES = ["sources/llibre/apunts.sty", "scripts/genera_pdf_tema.py"]
CARPETES_REFERENCIES = ["docs", "sources", "scripts"]
RE_VERSIO = re.compile(r"\?v=\d+")
RE_SVG = re.compile(r"([\w./-]+\.svg)")


def git(*args):
    r = subprocess.run(["git", *args], cwd=ARREL, capture_output=True)
    return r.returncode, r.stdout.decode("utf-8", "replace")


class Estat:
    """Els fitxers canviats i com llegir-ne la versió antiga i l'actual."""

    def __init__(self, staged, base):
        self.staged = staged
        self.base = base
        if staged:
            _, sortida = git("diff", "--cached", "--name-only", "--no-renames", base)
        else:
            _, sortida = git("diff", "--name-only", "--no-renames", base)
            _, noves = git("ls-files", "--others", "--exclude-standard")
            sortida += "\n" + noves
        self.canviats = {l.strip() for l in sortida.splitlines() if l.strip()}

    def antic(self, ruta):
        codi, text = git("show", f"{self.base}:{ruta}")
        return text if codi == 0 else None

    def actual(self, ruta):
        if self.staged:
            codi, text = git("show", f":{ruta}")
            return text if codi == 0 else None
        p = ARREL / ruta
        return p.read_text(encoding="utf-8-sig", errors="replace") if p.exists() else None

    def versions(self, nom, antic):
        """{fitxer: {versions}} de totes les referències nom?v=n."""
        patro = re.escape(nom) + r"\?v=[0-9]+"
        if antic:
            args = ["grep", "-o", "-E", patro, self.base, "--"]
        elif self.staged:
            args = ["grep", "--cached", "-o", "-E", patro, "--"]
        else:
            args = ["grep", "--untracked", "-o", "-E", patro, "--"]
        _, sortida = git(*args, *CARPETES_REFERENCIES)
        refs = {}
        for linia in sortida.splitlines():
            if antic:
                linia = linia.split(":", 1)[1]  # treu el «commit:» del davant
            fitxer, coincidencia = linia.rsplit(":", 1)
            refs.setdefault(fitxer, set()).add(int(coincidencia.rsplit("=", 1)[1]))
        return refs


def rel(path):
    return Path(path).resolve().relative_to(ARREL).as_posix()


def figures_citades(text, carpeta):
    """Rutes relatives dels SVG citats en un text i dels .tex corresponents."""
    rutes = set()
    for svg in RE_SVG.findall(text or ""):
        cami = (carpeta / svg).resolve()
        try:
            dins_img = cami.relative_to(ARREL / "docs" / "img")
        except ValueError:
            continue
        rutes.add(rel(cami))
        rutes.add(("figures/tikz" / dins_img.with_suffix(".tex")).as_posix())
    return rutes


def comprova_figures(estat, problemes):
    for ruta in sorted(estat.canviats):
        if ruta.startswith("figures/tikz/") and ruta.endswith(".tex") and estat.actual(ruta) is not None:
            svg = "docs/img/" + ruta[len("figures/tikz/"):-len(".tex")] + ".svg"
            if svg not in estat.canviats:
                problemes.append(f"{ruta} ha canviat, però {svg} no s'ha regenerat "
                                 "(scripts/compila_figures.ps1).")


def comprova_versions(estat, problemes):
    for ruta in sorted(estat.canviats):
        es_svg = ruta.startswith("docs/img/") and ruta.endswith(".svg")
        es_pdf = ruta.startswith("docs/assets/") and ruta.endswith(".pdf")
        if not (es_svg or es_pdf) or estat.antic(ruta) is None or estat.actual(ruta) is None:
            continue
        nom = ruta.rsplit("/", 1)[1]
        abans, ara = estat.versions(nom, antic=True), estat.versions(nom, antic=False)
        for fitxer, versions in sorted(ara.items()):
            if fitxer in abans and min(versions) <= max(abans[fitxer]):
                problemes.append(f"{nom} ha canviat, però {fitxer} encara el cita amb "
                                 f"?v={min(versions)}: cal pujar-lo.")


def comprova_practica(estat, problemes):
    implicats = {PRACTICA_WEB, PRACTICA_RECULL, "scripts/genera_pagines_practica.py"}
    if estat.staged and not any(p.startswith("sources/calcul/") or p in implicats for p in estat.canviats):
        return  # el commit no toca la pràctica: no el bloquegen canvis locals que no s'hi inclouen
    esperat = {PRACTICA_WEB: practica.generate_solution_page(),
               PRACTICA_RECULL: practica.generate_pdf_collection_page()}
    for ruta, text in esperat.items():
        disc = (ARREL / ruta).read_text(encoding="utf-8").replace("\r\n", "\n")
        if disc != text:
            problemes.append(f"{ruta} no coincideix amb les fonts de sources/calcul: "
                             "executa scripts/genera_pagines_practica.py.")
        elif estat.staged and (estat.actual(ruta) or "").replace("\r\n", "\n") != text:
            problemes.append(f"{ruta} està regenerat, però no s'ha afegit al commit (git add).")


def text_comparable(text):
    return RE_VERSIO.sub("", text or "").replace("\r\n", "\n")


def introduccio(text):
    """El títol i la introducció de l'índex del tema, que és el que surt al PDF."""
    linies = text_comparable(text).split("\n")
    k = next((n for n, l in enumerate(linies) if l.startswith("## ")), len(linies))
    return "\n".join(linies[:k])


def comprova_pdf(estat, problemes, pdf, motius):
    if motius and pdf not in estat.canviats:
        llista = ", ".join(sorted(motius)[:4]) + (" i més" if len(motius) > 4 else "")
        problemes.append(f"{pdf} no s'ha regenerat, però han canviat: {llista}.")


def comprova_temes(estat, problemes):
    for num, tema in sorted(tema_pdf.temes_del_menu().items()):
        if tema_pdf.en_preparacio(tema):
            continue
        index = rel(tema["index"])
        pagines = [rel(p) for p in tema["fonts"]] or [index]
        motius = {p for p in pagines + FONTS_TOTS_ELS_TEMES if p in estat.canviats}
        if index not in pagines and introduccio(estat.antic(index)) != introduccio(estat.actual(index)):
            motius.add(index)
        figures = set()
        for p in pagines:
            figures |= figures_citades(estat.actual(p), (ARREL / p).parent)
        motius |= figures & estat.canviats
        comprova_pdf(estat, problemes, f"docs/assets/apunts/{tema['pdf']}", motius)


def comprova_recull(estat, problemes):
    motius = {p for p in FONTS_RECULL if p in estat.canviats}
    if PRACTICA_RECULL in motius and \
            text_comparable(estat.antic(PRACTICA_RECULL)) == text_comparable(estat.actual(PRACTICA_RECULL)):
        motius.discard(PRACTICA_RECULL)  # només hi ha canviat algun ?v=n
    figures = figures_citades(estat.actual(PRACTICA_RECULL), ARREL / "docs" / "calcul" / "per-practicar")
    motius |= figures & estat.canviats
    comprova_pdf(estat, problemes, PDF_RECULL, motius)


def main(argv):
    parser = argparse.ArgumentParser(description="Comprova que els fitxers generats estan al dia.")
    parser.add_argument("--staged", action="store_true", help="comprova només el que s'ha afegit amb git add")
    parser.add_argument("--des", default="HEAD", metavar="REF", help="commit de referència (per defecte, HEAD)")
    args = parser.parse_args(argv)

    if git("rev-parse", "--verify", "--quiet", args.des)[0] != 0:
        raise SystemExit(f"No existeix la referència {args.des}.")

    estat = Estat(args.staged, args.des)
    problemes = []
    comprova_figures(estat, problemes)
    comprova_versions(estat, problemes)
    comprova_practica(estat, problemes)
    comprova_temes(estat, problemes)
    comprova_recull(estat, problemes)

    abast = "els canvis afegits amb git add" if args.staged else f"els canvis respecte de {args.des}"
    if problemes:
        print(f"Problemes de sincronia en {abast}:")
        for p in problemes:
            print(f"  - {p}")
        return 1
    print(f"Sincronia correcta en {abast} ({len(estat.canviats)} fitxers canviats).")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
