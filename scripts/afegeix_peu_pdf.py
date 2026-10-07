from __future__ import annotations

import io
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas


def add_footer(source: Path, destination: Path) -> None:
    reader = PdfReader(str(source))
    writer = PdfWriter()
    total = len(reader.pages)

    for index, page in enumerate(reader.pages, start=1):
        width = float(page.mediabox.width)
        height = float(page.mediabox.height)
        layer = io.BytesIO()
        footer = canvas.Canvas(layer, pagesize=(width, height))
        footer.setFillColorRGB(0.35, 0.35, 0.35)
        footer.setFont("Helvetica", 7.5)
        footer.drawString(36, 17, "Matemàtiques Aplicades a les Ciències Socials II · Exercicis de càlcul")
        footer.drawRightString(width - 36, 17, f"{index} / {total}")
        footer.save()
        layer.seek(0)
        page.merge_page(PdfReader(layer).pages[0])
        writer.add_page(page)

    writer.add_metadata(
        {
            "/Title": "Exercicis de càlcul",
            "/Author": "Matemàtiques Aplicades a les Ciències Socials II",
            "/Subject": "Recull d'exercicis dels temes 1 i 2",
        }
    )
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Ús: afegeix_peu_pdf.py origen.pdf destinacio.pdf")
    add_footer(Path(sys.argv[1]), Path(sys.argv[2]))
