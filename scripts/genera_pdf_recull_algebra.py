"""Genera el recull d'enunciats d'àlgebra lineal en PDF (edició ordinària i en lletra gran).

Font: docs/algebra-lineal/per-practicar/exercicis_algebra.md, la pàgina de pràctica amb enunciats i
solucions desplegables. L'script en fa una còpia només amb els enunciats
(sources/generated/recull-enunciats-algebra.md): treu les solucions (`??? example`), el requadre que
remet a una eina del web i els recursos finals, i fa començar els problemes PAU en una pàgina nova.

Després segueix el mateix procediment que el recull de càlcul: crea una pàgina temporal al costat de la
pàgina de pràctica, compila el web, la imprimeix amb Edge i la munta amb scripts/munta_recull_pdf.py
(portada i índex de sources/llibre/portada_recull_algebra.tex, peu de pàgina i marcadors). L'edició en
lletra gran fa servir l'estil de scripts/genera_pdf_recull_calcul_lletra_gran.py.

Ús, des de l'arrel del repositori:

    .venv\\Scripts\\python.exe scripts\\genera_pdf_recull_algebra.py               # les dues edicions
    .venv\\Scripts\\python.exe scripts\\genera_pdf_recull_algebra.py --ordinari    # només l'ordinària
    .venv\\Scripts\\python.exe scripts\\genera_pdf_recull_algebra.py --lletra-gran # només la de lletra gran
    .venv\\Scripts\\python.exe scripts\\genera_pdf_recull_algebra.py --nomes-md    # només el Markdown d'enunciats

Resultat: output/pdf/recull_enunciats_algebra[_lletra_gran].pdf i les còpies publicables a
docs/assets/exercicis/. En publicar, puja el ?v=n dels enllaços de la pàgina d'exercicis d'àlgebra.
"""

from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

PYTHON = ROOT / ".venv" / "Scripts" / "python.exe"
ZENSICAL = ROOT / ".venv" / "Scripts" / "zensical.exe"
EDGE = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
FONT = ROOT / "docs" / "algebra-lineal" / "per-practicar" / "exercicis_algebra.md"
RECULL_MD = ROOT / "sources" / "generated" / "recull-enunciats-algebra.md"
PORTADA = ROOT / "sources" / "llibre" / "portada_recull_algebra.tex"
OUTPUT_DIR = ROOT / "output" / "pdf"
WEB_DIR = ROOT / "docs" / "assets" / "exercicis"

TITOL = "# Recull d'enunciats d'àlgebra lineal {.pdf-exercise-collection}"
EXERCICI = re.compile(r"^\*\*(?:\d+\.\d+|PAU\.AL\.\d+)\.\*\*")

# No separar d'una pàgina a l'altra un paràgraf de la fórmula, llista, taula o requadre que introdueix,
# ni el títol d'un problema PAU de la procedència (en cursiva) que el segueix.
ESTIL = """
<style>
@media print {
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ div.arithmatex),
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ ul),
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ ol),
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ table),
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ .admonition),
  body:has(.pdf-exercise-collection) .md-typeset p:has(+ p > em:first-child),
  body:has(.pdf-exercise-collection) .md-typeset .admonition { break-after: avoid; }
}
</style>
"""

EDICIONS = {
    "ordinari": {
        "fitxer": "recull_enunciats_algebra.pdf",
        "pagina": "__pdf-recull-enunciats",
        "port": 8770,
        "munta": [],
    },
    "lletra-gran": {
        "fitxer": "recull_enunciats_algebra_lletra_gran.pdf",
        "pagina": "__pdf-recull-lletra-gran",
        "port": 8771,
        "munta": ["--edicio", "Edició en lletra gran", "--index-gran"],
    },
}


def pagina_recull(text: str | None = None) -> str:
    """El Markdown del recull: els enunciats de la pàgina de pràctica, sense solucions."""
    text = FONT.read_text(encoding="utf-8") if text is None else text
    linies = text.replace("\r\n", "\n").split("\n")
    inici = next(n for n, l in enumerate(linies) if l.startswith("## "))
    sortida: list[str] = []
    saltant = False
    for linia in linies[inici:]:
        if linia.startswith("??? ") or linia.startswith('!!! tip "Comprova-ho"'):
            saltant = True
            continue
        if linia.startswith('!!! note "Recursos per continuar practicant"'):
            break
        if saltant:
            if linia.startswith("    ") or not linia.strip():
                continue
            saltant = False
        if linia.strip() == "---":
            continue
        if linia == "## Problemes PAU":
            sortida += ['<div class="pdf-page-break"></div>', ""]
        sortida.append(linia)
    cos = re.sub(r"\n{3,}", "\n\n", "\n".join(sortida)).strip()
    return f"{TITOL}\n\n---\n\n{cos}\n"


def escriu_md() -> None:
    RECULL_MD.parent.mkdir(parents=True, exist_ok=True)
    RECULL_MD.write_text(pagina_recull(), encoding="utf-8", newline="\n")


def pagina_lletra_gran(text: str) -> str:
    from genera_pdf_recull_calcul_lletra_gran import STYLE

    text = text.replace(TITOL, TITOL.replace("}", " .pdf-lletra-gran}"), 1)
    linies = []
    for linia in text.splitlines():
        if EXERCICI.match(linia):
            linies += ['<div class="lg-exercici"></div>', ""]
        linies.append(linia)
    return STYLE + "\n" + "\n".join(linies) + "\n"


def executa(*args) -> None:
    resultat = subprocess.run([str(a) for a in args], cwd=ROOT)
    if resultat.returncode != 0:
        raise SystemExit(f"Ha fallat: {' '.join(str(a) for a in args)}")


def espera(url: str) -> None:
    for _ in range(50):
        try:
            with urllib.request.urlopen(url, timeout=1) as resposta:
                if resposta.status == 200:
                    return
        except OSError:
            time.sleep(0.2)
    raise SystemExit(f"El servidor temporal no respon a {url}")


def munta(origen: Path, desti: Path, extra: list[str]) -> None:
    import munta_recull_pdf

    munta_recull_pdf.COVER_SOURCE = PORTADA
    argv = sys.argv
    sys.argv = [
        "munta_recull_pdf.py", str(origen), str(desti), "--md", str(RECULL_MD),
        "--titol", "Recull d'enunciats d'àlgebra lineal",
        "--tema", "Exercicis dels temes 4 i 5 i problemes PAU d'àlgebra lineal",
        "--peu", "Matemàtiques Aplicades a les Ciències Socials II · Enunciats d'àlgebra lineal",
        *extra,
    ]
    try:
        munta_recull_pdf.main()
    finally:
        sys.argv = argv


def genera(edicio: str) -> None:
    conf = EDICIONS[edicio]
    text = RECULL_MD.read_text(encoding="utf-8")
    pagina = FONT.parent / f"{conf['pagina']}.md"
    contingut = text if edicio == "ordinari" else pagina_lletra_gran(text)
    pagina.write_text(ESTIL + "\n" + contingut, encoding="utf-8", newline="\n")
    servidor = None
    tmp = Path(tempfile.mkdtemp(prefix="recull-algebra-"))
    try:
        executa(ZENSICAL, "build", "--clean")
        servidor = subprocess.Popen(
            [str(PYTHON), "-m", "http.server", str(conf["port"]), "--bind", "127.0.0.1"],
            cwd=ROOT / "site", stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
        )
        url = f"http://127.0.0.1:{conf['port']}/algebra-lineal/per-practicar/{conf['pagina']}/"
        espera(url)
        cru = tmp / "cru.pdf"
        subprocess.run(
            [
                str(EDGE), "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                "--run-all-compositor-stages-before-draw", "--generate-pdf-document-outline",
                "--virtual-time-budget=8000", f"--user-data-dir={tmp / 'edge-profile'}",
                f"--print-to-pdf={cru}", url,
            ],
            cwd=ROOT,
        )
        for _ in range(150):
            if cru.exists():
                break
            time.sleep(0.2)
        if not cru.exists():
            raise SystemExit("Edge no ha generat el PDF.")
        OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
        sortida = OUTPUT_DIR / conf["fitxer"]
        munta(cru, sortida, conf["munta"])
        WEB_DIR.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(sortida, WEB_DIR / conf["fitxer"])
        print(f"PDF generat: {sortida.relative_to(ROOT)}")
        print(f"Còpia publicable: {(WEB_DIR / conf['fitxer']).relative_to(ROOT)}")
    finally:
        if servidor:
            servidor.terminate()
        pagina.unlink(missing_ok=True)
        shutil.rmtree(tmp, ignore_errors=True)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    grup = parser.add_mutually_exclusive_group()
    grup.add_argument("--ordinari", action="store_true", help="només l'edició ordinària")
    grup.add_argument("--lletra-gran", action="store_true", help="només l'edició en lletra gran")
    grup.add_argument("--nomes-md", action="store_true", help="només el Markdown d'enunciats")
    args = parser.parse_args()

    escriu_md()
    print(f"Enunciats: {RECULL_MD.relative_to(ROOT)}")
    if args.nomes_md:
        return
    for tool in (PYTHON, ZENSICAL, EDGE):
        if not tool.exists():
            raise SystemExit(f"No s'ha trobat {tool}")
    edicions = ["ordinari"] if args.ordinari else ["lletra-gran"] if args.lletra_gran else ["ordinari", "lletra-gran"]
    try:
        for edicio in edicions:
            genera(edicio)
    finally:
        executa(ZENSICAL, "build", "--clean")


if __name__ == "__main__":
    main()
