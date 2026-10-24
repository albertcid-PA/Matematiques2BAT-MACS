from __future__ import annotations

import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
TOPIC_DIR = PROJECT_ROOT / "docs" / "algebra-lineal" / "sistemes-gauss"
OUTPUT = TOPIC_DIR / "recull-tema-3.md"
SOURCES = (
    TOPIC_DIR / "01_sistemes-equacions-lineals.md",
    TOPIC_DIR / "02_metode-gauss.md",
)


def lower_heading_levels(markdown: str) -> str:
    """Converteix cada títol en un subtítol del recull sense tocar blocs de codi."""
    result: list[str] = []
    in_fence = False
    for line in markdown.splitlines():
        if line.lstrip().startswith("```"):
            in_fence = not in_fence
        if not in_fence:
            match = re.match(r"^(#{1,5})(\s+.*)$", line)
            if match:
                line = f"#{match.group(1)}{match.group(2)}"
        result.append(line)
    return "\n".join(result).strip()


def prepare_source(path: Path) -> str:
    content = path.read_text(encoding="utf-8-sig")
    content = lower_heading_levels(content)
    page_break = '<div class="pdf-topic-section-break"></div>\n\n'
    if path.name == "01_sistemes-equacions-lineals.md":
        content = content.replace(
            "#### 3.3 Sistema incompatible",
            f"{page_break}#### 3.3 Sistema incompatible",
        )
        content = content.replace(
            "### 5. Sistemes esglaonats",
            f"{page_break}### 5. Sistemes esglaonats",
        )
    if path.name == "02_metode-gauss.md":
        content = content.replace(
            "### 5. Quan cal intercanviar files",
            f"{page_break}### 5. Quan cal intercanviar files",
        )
    return content


def main() -> None:
    sections = [prepare_source(path) for path in SOURCES]
    section_break = '\n\n<div class="pdf-topic-section-break"></div>\n\n'
    content = section_break.join(sections)
    document = f"""<!-- Fitxer generat automàticament per scripts/genera_recull_tema_3.py. -->

<div class="pdf-topic-cover" markdown="1">

# 3. Sistemes i mètode de Gauss {{.pdf-topic-collection}}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Sistemes d'equacions lineals](#sistemes-dequacions-lineals)
2. [Mètode de Gauss](#metode-de-gauss)

</div>

</div>

{content}
"""
    OUTPUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Recull generat: {OUTPUT}")


if __name__ == "__main__":
    main()
