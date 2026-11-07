#!/usr/bin/env python3
"""Prepara un full de revisió visual de les figures SVG modificades.

Per a cada SVG de docs/img que ha canviat respecte d'un commit de referència
(HEAD, per defecte), mostra en una fila la versió anterior, la nova i la nova en
mode fosc, amb el número i el peu de la figura. El resultat es desa a
tmp/revisio-figures/: una pàgina index.html i, si hi ha Edge, unes imatges PNG.

Ús, des de l'arrel del repositori:

    .venv\\Scripts\\python.exe scripts\\revisa_figures.py               # canvis sense commit
    .venv\\Scripts\\python.exe scripts\\revisa_figures.py --staged      # només el que s'ha afegit amb git add
    .venv\\Scripts\\python.exe scripts\\revisa_figures.py --des origin/main   # tot el que no s'ha publicat
    .venv\\Scripts\\python.exe scripts\\revisa_figures.py --totes       # totes les figures
"""
import argparse
import html
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ARREL = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ARREL / "scripts"))

from comprova_sincronia import Estat, git  # noqa: E402

SORTIDA = ARREL / "tmp" / "revisio-figures"
FILES_PER_IMATGE = 8
ALCADA_FILA = 500
EDGE = [Path(os.environ.get("ProgramFiles(x86)", r"C:\Program Files (x86)")) / "Microsoft/Edge/Application/msedge.exe",
        Path(os.environ.get("ProgramFiles", r"C:\Program Files")) / "Microsoft/Edge/Application/msedge.exe"]
RE_FIGURA = re.compile(r'!\[[^\]]*\]\(([^)\s]+\.svg)(?:\?v=\d+)?\).*?<figcaption>(.*?)</figcaption>', re.S)

CSS = f"""
body {{ font-family: Segoe UI, Arial, sans-serif; margin: 16px; background: #fff; color: #222; }}
h1 {{ font-size: 20px; margin: 0 0 12px; }}
.fila {{ display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 18px;
        border-top: 1px solid #ccc; padding-top: 8px; }}
.titol {{ grid-column: 1 / 4; font-size: 14px; }}
.cel {{ height: {ALCADA_FILA - 70}px; display: flex; flex-direction: column; border: 1px solid #ddd; }}
.cel span {{ font-size: 12px; color: #666; padding: 2px 6px; }}
.cel div {{ flex: 1; min-height: 0; display: flex; align-items: center; justify-content: center; }}
.cel img {{ max-width: 100%; max-height: 100%; object-fit: contain; }}
.fosc {{ background: #1e2129; }}
.fosc span {{ color: #aaa; }}
.fosc img {{ filter: invert(1) hue-rotate(180deg); }}
.buit {{ color: #999; font-size: 13px; }}
"""


def peus_de_figura():
    """{ruta de l'SVG: text del peu} a partir de les pàgines de docs/."""
    peus = {}
    for pagina in (ARREL / "docs").rglob("*.md"):
        text = pagina.read_text(encoding="utf-8-sig")
        for svg, peu in RE_FIGURA.findall(text):
            try:
                ruta = (pagina.parent / svg).resolve().relative_to(ARREL).as_posix()
            except ValueError:
                continue
            peus[ruta] = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", peu)).strip()
    return peus


def cel(classe, etiqueta, src):
    contingut = f'<img src="{src}">' if src else '<p class="buit">No existia</p>'
    return f'<div class="cel {classe}"><span>{etiqueta}</span><div>{contingut}</div></div>'


def pagina_html(files, titol):
    cos = "\n".join(files) or '<p class="buit">No hi ha cap figura per revisar.</p>'
    return (f'<!doctype html><html lang="ca"><head><meta charset="utf-8"><title>{titol}</title>'
            f'<style>{CSS}</style></head><body><h1>{titol}</h1>\n{cos}\n</body></html>\n')


def captura(edge, html_path, png_path, n_files):
    perfil = SORTIDA / "edge-profile"
    alcada = 60 + n_files * ALCADA_FILA
    subprocess.run([str(edge), "--headless=new", "--disable-gpu", "--hide-scrollbars",
                    f"--user-data-dir={perfil}", f"--window-size=1500,{alcada}",
                    f"--screenshot={png_path}", html_path.as_uri()],
                   capture_output=True, timeout=120)
    return png_path.exists()


def main(argv):
    parser = argparse.ArgumentParser(description="Prepara un full de revisió de les figures modificades.")
    parser.add_argument("--staged", action="store_true", help="només el que s'ha afegit amb git add")
    parser.add_argument("--des", default="HEAD", metavar="REF", help="commit de referència (per defecte, HEAD)")
    parser.add_argument("--totes", action="store_true", help="inclou totes les figures, no només les canviades")
    args = parser.parse_args(argv)

    if git("rev-parse", "--verify", "--quiet", args.des)[0] != 0:
        raise SystemExit(f"No existeix la referència {args.des}.")
    estat = Estat(args.staged, args.des)

    if args.totes:
        svgs = sorted(p.relative_to(ARREL).as_posix() for p in (ARREL / "docs" / "img").rglob("*.svg"))
    else:
        svgs = sorted(p for p in estat.canviats
                      if p.startswith("docs/img/") and p.endswith(".svg") and estat.actual(p) is not None)

    if SORTIDA.exists():
        shutil.rmtree(SORTIDA, ignore_errors=True)
    for carpeta in ("antic", "ara"):
        (SORTIDA / carpeta).mkdir(parents=True, exist_ok=True)

    peus = peus_de_figura()
    files = []
    for ruta in svgs:
        nom = ruta.rsplit("/", 1)[1]
        (SORTIDA / "ara" / nom).write_text(estat.actual(ruta), encoding="utf-8")
        antic = None if args.totes else estat.antic(ruta)
        if antic is not None:
            (SORTIDA / "antic" / nom).write_text(antic, encoding="utf-8")
        peu = html.escape(peus.get(ruta, "Sense peu: no se cita a cap pàgina de docs/."))
        files.append(f'<div class="fila"><div class="titol"><b>{html.escape(nom)}</b> · {peu}</div>'
                     + ("" if args.totes else cel("", f"Abans ({html.escape(args.des)})", f"antic/{nom}" if antic else None))
                     + cel("", "Ara", f"ara/{nom}")
                     + cel("fosc", "Ara, mode fosc", f"ara/{nom}")
                     + ("" if not args.totes else '<div></div>')
                     + "</div>")

    titol = "Revisió de figures"
    principal = SORTIDA / "index.html"
    principal.write_text(pagina_html(files, f"{titol} ({len(files)})"), encoding="utf-8")

    if not files:
        print("No hi ha cap SVG modificat per revisar.")
        return 0

    print(f"Full de revisió amb {len(files)} figures: {principal.relative_to(ARREL)}")
    edge = next((e for e in EDGE if e.exists()), None)
    if edge is None:
        print("No s'ha trobat Edge: obre l'index.html al navegador per revisar-les.")
        return 0

    for i in range(0, len(files), FILES_PER_IMATGE):
        tros = files[i:i + FILES_PER_IMATGE]
        num = i // FILES_PER_IMATGE + 1
        html_tros = SORTIDA / f"revisio_{num}.html"
        html_tros.write_text(pagina_html(tros, f"{titol}, full {num}"), encoding="utf-8")
        png = SORTIDA / f"revisio_{num}.png"
        if captura(edge, html_tros, png, len(tros)):
            print(f"  {png.relative_to(ARREL)}")
        else:
            print(f"  No s'ha pogut crear {png.name}; obre {html_tros.name} al navegador.")
    shutil.rmtree(SORTIDA / "edge-profile", ignore_errors=True)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
