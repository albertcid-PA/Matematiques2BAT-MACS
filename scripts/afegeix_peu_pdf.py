from __future__ import annotations

import io
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas


def add_footer(
    source: Path,
    destination: Path,
    title: str = "Exercicis de càlcul",
    subject: str = "Recull d'exercicis dels temes 1 i 2",
    footer_text: str = "Matemàtiques Aplicades a les Ciències Socials II · Exercicis de càlcul",
) -> None:
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
        footer.drawString(36, 17, footer_text)
        footer.drawRightString(width - 36, 17, f"{index} / {total}")
        footer.save()
        layer.seek(0)
        page.merge_page(PdfReader(layer).pages[0])
        writer.add_page(page)

    writer.add_metadata(
        {
            "/Title": title,
            "/Author": "Matemàtiques Aplicades a les Ciències Socials II",
            "/Subject": subject,
        }
    )
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    if not 3 <= len(sys.argv) <= 6:
        raise SystemExit(
            "Ús: afegeix_peu_pdf.py origen.pdf destinacio.pdf [títol] [tema] [text del peu]"
        )
    add_footer(
        Path(sys.argv[1]),
        Path(sys.argv[2]),
        *(sys.argv[3:]),
    )
