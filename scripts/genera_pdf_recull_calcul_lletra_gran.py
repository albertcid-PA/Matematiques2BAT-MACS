"""Genera una edició en lletra gran del recull d'enunciats de càlcul, per imprimir.

El contingut és el mateix que el del recull ordinari (`sources/generated/recull-enunciats-calcul.md`);
només canvia la maquetació, pensada per facilitar la lectura:

- lletra sense serifa (Verdana) de 12 pt, interlineat 1,5 i una mica més d'espai entre lletres i paraules;
- text alineat a l'esquerra, sense justificar, sense cursiva ni subratllats;
- cada exercici separat per una línia i espai, sense separar l'enunciat de la seva fórmula o figura;
- la mateixa portada i el mateix índex que el recull ordinari (`scripts/munta_recull_pdf.py`).

Es publica al web al costat del recull ordinari, amb un enllaç discret a la pàgina d'exercicis.

Ús:  .venv/Scripts/python.exe scripts/genera_pdf_recull_calcul_lletra_gran.py

Resultat: output/pdf/recull_enunciats_calcul_lletra_gran.pdf i la còpia publicable a
          docs/assets/exercicis/recull_enunciats_calcul_lletra_gran.pdf (en publicar, puja el ?v=n de l'enllaç
          a scripts/genera_pagines_practica.py).
"""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PYTHON = ROOT / ".venv" / "Scripts" / "python.exe"
ZENSICAL = ROOT / ".venv" / "Scripts" / "zensical.exe"
EDGE = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
SOURCE = ROOT / "sources" / "generated" / "recull-enunciats-calcul.md"
PRINT_PAGE = ROOT / "docs" / "calcul" / "__pdf-recull-lletra-gran.md"
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT = OUTPUT_DIR / "recull_enunciats_calcul_lletra_gran.pdf"
WEB_COPY = ROOT / "docs" / "assets" / "exercicis" / "recull_enunciats_calcul_lletra_gran.pdf"
PORT = 8769

EXERCISE_LINE = re.compile(r"^\*\*(?:\d+\.\d+|PAU\.C\.\d+)\.")

STYLE = """
<style>
@media print {
  @page { size: A4; margin: 16mm 18mm 18mm; }

  body:has(.pdf-lletra-gran) .md-typeset {
    font-family: Verdana, "Segoe UI", Arial, sans-serif;
    font-size: 12pt;
    line-height: 1.5;
    letter-spacing: 0.02em;
    word-spacing: 0.12em;
    text-align: left;
    hyphens: none;
    color: #1a1a1a;
  }
  html:has(.pdf-lletra-gran),
  body:has(.pdf-lletra-gran),
  body:has(.pdf-lletra-gran) .md-container,
  body:has(.pdf-lletra-gran) .md-main,
  body:has(.pdf-lletra-gran) .md-main__inner,
  body:has(.pdf-lletra-gran) .md-content,
  body:has(.pdf-lletra-gran) .md-content__inner,
  body:has(.pdf-lletra-gran) .md-typeset { background: transparent !important; }
  body:has(.pdf-lletra-gran) .md-typeset em,
  body:has(.pdf-lletra-gran) .md-typeset i,
  body:has(.pdf-lletra-gran) .md-typeset figcaption { font-style: normal; }
  body:has(.pdf-lletra-gran) .md-typeset h1 { font-size: 22pt; margin: 0 0 0.6rem; }
  body:has(.pdf-lletra-gran) .md-typeset h2 {
    font-size: 17pt; margin: 1.2rem 0 0.5rem; padding-bottom: 0.2rem;
    border-bottom: 1.2pt solid #1a1a1a;
  }
  body:has(.pdf-lletra-gran) .md-typeset h3 { font-size: 14pt; margin: 1rem 0 0.4rem; break-after: avoid; }
  body:has(.pdf-lletra-gran) .md-typeset h4 { font-size: 12.5pt; margin: 0.8rem 0 0.3rem; break-after: avoid; }
  body:has(.pdf-lletra-gran) .md-typeset hr { display: none; }
  body:has(.pdf-lletra-gran) .md-typeset p,
  body:has(.pdf-lletra-gran) .md-typeset ul,
  body:has(.pdf-lletra-gran) .md-typeset ol { margin-block: 0.45rem; }
  body:has(.pdf-lletra-gran) .md-typeset li { margin-block: 0.25rem; }
  body:has(.pdf-lletra-gran) .md-typeset div.arithmatex,
  body:has(.pdf-lletra-gran) .md-typeset .katex-display { margin-block: 0.45rem; }
  body:has(.pdf-lletra-gran) .md-typeset .katex { font-size: 1.12em; letter-spacing: 0; word-spacing: 0; }
  body:has(.pdf-lletra-gran) .md-typeset table { font-size: 11pt; }
  body:has(.pdf-lletra-gran) .md-typeset table td,
  body:has(.pdf-lletra-gran) .md-typeset table th { padding: 0.45em 0.7em; }
  body:has(.pdf-lletra-gran) .md-typeset .exercise-monotonia-tables table { font-size: 9pt; }
  body:has(.pdf-lletra-gran) .md-typeset figure { margin-block: 0.6rem; }
  body:has(.pdf-lletra-gran) .md-typeset figure img { max-height: 95mm; }
  body:has(.pdf-lletra-gran) .md-typeset figure.exercise-statement-figure--compact img {
    width: 90% !important; max-height: 95mm;
  }
  body:has(.pdf-lletra-gran) .md-typeset figure figcaption { font-size: 10pt; }
  body:has(.pdf-lletra-gran) .md-typeset .admonition { font-size: 11pt; }

  body:has(.pdf-lletra-gran) .md-typeset .lg-exercici {
    break-before: auto;
    break-after: avoid;
    height: 0;
    margin: 1.1rem 0 0.7rem;
    border-top: 1pt solid #9a9a9a;
  }
  body:has(.pdf-lletra-gran) .md-typeset .lg-exercici + p { break-before: avoid; }
  body:has(.pdf-lletra-gran) .md-typeset .lg-exercici + p strong:first-child {
    display: inline-block;
    padding: 0.05em 0.45em;
    border-radius: 0.3em;
    background: #e3e9f6;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body:has(.pdf-lletra-gran) .md-typeset p { orphans: 3; widows: 3; }
  body:has(.pdf-lletra-gran) .md-typeset p:has(+ div.arithmatex),
  body:has(.pdf-lletra-gran) .md-typeset p:has(+ figure),
  body:has(.pdf-lletra-gran) .md-typeset p:has(+ table) { break-after: avoid; }
}
</style>
"""


def build_page() -> str:
    text = SOURCE.read_text(encoding="utf-8")
    text = text.replace(
        "# Recull d'enunciats de càlcul {.pdf-exercise-collection}",
        "# Recull d'enunciats de càlcul {.pdf-exercise-collection .pdf-lletra-gran}",
        1,
    )
    if ".pdf-lletra-gran" not in text:
        raise SystemExit("No s'ha trobat el títol esperat al recull generat.")
    lines = []
    for line in text.splitlines():
        if EXERCISE_LINE.match(line):
            lines.append('<div class="lg-exercici"></div>')
            lines.append("")
        lines.append(line)
    return STYLE + "\n" + "\n".join(lines) + "\n"


def run(*args: Path | str) -> None:
    result = subprocess.run([str(a) for a in args], cwd=ROOT)
    if result.returncode != 0:
        raise SystemExit(f"Ha fallat: {' '.join(str(a) for a in args)}")


def wait_for(url: str) -> None:
    for _ in range(50):
        try:
            with urllib.request.urlopen(url, timeout=1) as response:
                if response.status == 200:
                    return
        except OSError:
            time.sleep(0.2)
    raise SystemExit(f"El servidor temporal no respon a {url}")


def main() -> None:
    for tool in (PYTHON, ZENSICAL, EDGE):
        if not tool.exists():
            raise SystemExit(f"No s'ha trobat {tool}")
    run(PYTHON, ROOT / "scripts" / "genera_pagines_practica.py")
    PRINT_PAGE.write_text(build_page(), encoding="utf-8")
    server = None
    tmp = Path(tempfile.mkdtemp(prefix="recull-lletra-gran-"))
    try:
        run(ZENSICAL, "build", "--clean")
        server = subprocess.Popen(
            [str(PYTHON), "-m", "http.server", str(PORT), "--bind", "127.0.0.1"],
            cwd=ROOT / "site",
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        url = f"http://127.0.0.1:{PORT}/calcul/__pdf-recull-lletra-gran/"
        wait_for(url)
        raw = tmp / "raw.pdf"
        subprocess.run(
            [
                str(EDGE), "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
                "--run-all-compositor-stages-before-draw", "--generate-pdf-document-outline", "--virtual-time-budget=8000",
                f"--user-data-dir={tmp / 'edge-profile'}", f"--print-to-pdf={raw}", url,
            ],
            cwd=ROOT,
        )
        for _ in range(150):
            if raw.exists():
                break
            time.sleep(0.2)
        if not raw.exists():
            raise SystemExit("Edge no ha generat el PDF.")
        run(
            PYTHON, ROOT / "scripts" / "munta_recull_pdf.py", raw, OUTPUT, "--md", SOURCE,
            "--edicio", "Edició en lletra gran", "--index-gran",
        )
        shutil.copyfile(OUTPUT, WEB_COPY)
        print(f"PDF generat: {OUTPUT.relative_to(ROOT)}")
        print(f"Còpia publicable: {WEB_COPY.relative_to(ROOT)}")
    finally:
        if server:
            server.terminate()
        PRINT_PAGE.unlink(missing_ok=True)
        run(ZENSICAL, "build", "--clean")
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
