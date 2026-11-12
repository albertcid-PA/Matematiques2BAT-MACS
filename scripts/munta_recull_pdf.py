"""Munta el PDF final d'un recull d'enunciats: portada, índex, contingut amb peu de pàgina i marcadors.

Rep el PDF que imprimeix Edge (amb `--generate-pdf-document-outline`, perquè porti l'esquema dels
títols) i el Markdown d'on surt. Els títols de l'índex es prenen del Markdown (`##`, `###`, `####`)
i el número de pàgina, de l'esquema del PDF. La portada i l'índex es compilen amb XeLaTeX des de
`sources/llibre/portada_recull_calcul.tex`, amb l'estil de les portades dels temes. La numeració
del peu comença a la primera pàgina d'exercicis.

Ús:
  munta_recull_pdf.py origen.pdf destinacio.pdf --md recull.md
                      [--titol T] [--tema T] [--peu T] [--edicio T] [--index-gran]
"""

from __future__ import annotations

import argparse
import io
import os
import re
import subprocess
import tempfile
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
COVER_SOURCE = ROOT / "sources" / "llibre" / "portada_recull_calcul.tex"
HEADING = re.compile(r"^(#{2,4})\s+(.*?)\s*(?:\{[^}]*\})?\s*$")


def headings(markdown: Path) -> list[tuple[int, str]]:
    result = []
    for line in markdown.read_text(encoding="utf-8").splitlines():
        match = HEADING.match(line)
        if match:
            result.append((len(match.group(1)), match.group(2)))
    return result


def latex_text(title: str) -> str:
    parts = re.split(r"(\$[^$]+\$)", title)
    out = []
    for part in parts:
        if part.startswith("$"):
            out.append(part)
        else:
            out.append(re.sub(r"([&%#_])", r"\\\1", part))
    return "".join(out)


def outline_pages(reader: PdfReader) -> list[tuple[int, int]]:
    """Retorna (nivell, pàgina) de cada entrada de l'esquema, en ordre."""
    entries: list[tuple[int, int]] = []

    def walk(items, level):
        for item in items:
            if isinstance(item, list):
                walk(item, level + 1)
            else:
                entries.append((level, reader.get_destination_page_number(item)))

    walk(reader.outline, 1)
    return entries


def front_matter(entries, workdir: Path, edition: str, large: bool) -> Path:
    lines = [
        r"\renewcommand{\edicio}{%s}" % edition,
        r"\renewcommand{\midaindex}{%s}" % (r"\large" if large else r"\normalsize"),
    ]
    (workdir / "parametres_recull.tex").write_text("\n".join(lines) + "\n", encoding="utf-8")
    rows = [r"\entradaindex{%d}{%s}{%d}" % (level, latex_text(title), page) for level, title, page in entries]
    (workdir / "index_recull.tex").write_text("\n".join(rows) + "\n", encoding="utf-8")
    env = dict(os.environ)
    env["TEXINPUTS"] = os.pathsep.join([str(workdir), str(COVER_SOURCE.parent), ""])
    result = subprocess.run(
        ["xelatex", "-interaction=nonstopmode", "-halt-on-error",
         f"-output-directory={workdir}", COVER_SOURCE.name],
        cwd=COVER_SOURCE.parent, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
        encoding="utf-8", errors="replace",
    )
    pdf = workdir / (COVER_SOURCE.stem + ".pdf")
    if result.returncode != 0 or not pdf.exists():
        raise SystemExit("No s'ha pogut compilar la portada:\n" + result.stdout[-2000:])
    return pdf


def footer_layer(width: float, height: float, text: str, number: str, size: float) -> PdfReader:
    layer = io.BytesIO()
    c = canvas.Canvas(layer, pagesize=(width, height))
    c.setFillColorRGB(0.35, 0.35, 0.35)
    c.setFont("Helvetica", size)
    c.drawString(36, 17, text)
    c.drawRightString(width - 36, 17, number)
    c.save()
    layer.seek(0)
    return PdfReader(layer)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("origen", type=Path)
    parser.add_argument("destinacio", type=Path)
    parser.add_argument("--md", type=Path, required=True, help="Markdown d'on surt el recull")
    parser.add_argument("--titol", default="Recull d'enunciats de càlcul")
    parser.add_argument("--tema", default="Exercicis dels temes 1 i 2 i problemes PAU de càlcul")
    parser.add_argument("--peu", default="Matemàtiques Aplicades a les Ciències Socials II · Enunciats de càlcul")
    parser.add_argument("--edicio", default="", help="text discret per a la portada (p. ex. «Edició en lletra gran»)")
    parser.add_argument("--index-gran", action="store_true", help="índex amb lletra més gran")
    args = parser.parse_args()

    reader = PdfReader(str(args.origen))
    titles = headings(args.md)
    outline = [(level, page) for level, page in outline_pages(reader) if level > 1]
    if len(outline) != len(titles):
        raise SystemExit(
            f"L'esquema del PDF té {len(outline)} títols i el Markdown en té {len(titles)}. "
            "Comprova que Edge s'ha cridat amb --generate-pdf-document-outline."
        )
    entries = [(level, title, page + 1) for (level, title), (_, page) in zip(titles, outline)]

    with tempfile.TemporaryDirectory(prefix="munta-recull-") as tmp:
        front = PdfReader(str(front_matter(entries, Path(tmp), args.edicio, args.index_gran)))
        writer = PdfWriter()
        for page in front.pages:
            writer.add_page(page)
        offset = len(front.pages)
        total = len(reader.pages)
        for index, page in enumerate(reader.pages, start=1):
            width = float(page.mediabox.width)
            height = float(page.mediabox.height)
            page.merge_page(footer_layer(width, height, args.peu, f"{index} / {total}", 7.5).pages[0])
            writer.add_page(page)

        writer.add_outline_item("Portada", 0)
        if offset > 1:
            writer.add_outline_item("Índex", 1)
        parents = {}
        for (level, title, page), (_, _) in zip(entries, outline):
            plain = re.sub(r"\$([^$]*)\$", r"\1", title).replace("\\", "")
            parent = parents.get(level - 1) if level > 2 else None
            parents[level] = writer.add_outline_item(plain, offset + page - 1, parent=parent)
            for deeper in [k for k in parents if k > level]:
                del parents[deeper]
        writer.page_mode = "/UseOutlines"
        writer.add_metadata(
            {
                "/Title": args.titol,
                "/Author": "Albert Cid",
                "/Subject": args.tema,
            }
        )
        args.destinacio.parent.mkdir(parents=True, exist_ok=True)
        with args.destinacio.open("wb") as stream:
            writer.write(stream)
    print(f"Índex: {len(entries)} entrades; portada i índex: {offset} pàgines; contingut: {total} pàgines.")


if __name__ == "__main__":
    main()
