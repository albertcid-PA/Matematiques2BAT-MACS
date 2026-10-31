from __future__ import annotations

import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
TOPIC_DIR = PROJECT_ROOT / "docs" / "algebra-lineal" / "matrius"
OUTPUT = PROJECT_ROOT / "sources" / "generated" / "recull-tema-4.md"
SOURCES = (
    TOPIC_DIR / "01_concepte-tipus.md",
    TOPIC_DIR / "02_operacions.md",
    TOPIC_DIR / "03_matriu-inversa.md",
    TOPIC_DIR / "04_equacions-sistemes-matricials.md",
    TOPIC_DIR / "05_problemes-matrius.md",
)


def lower_heading_levels(markdown: str) -> str:
    """Converteix cada títol en un subtítol del recull sense tocar blocs de codi."""
    result: list[str] = []
    in_fence = False
    for line in markdown.splitlines():
        if line.lstrip().startswith(chr(96) * 3):
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
    source_names = "|".join(re.escape(source.stem) for source in SOURCES)
    content = re.sub(rf"\((?:{source_names})\.md#", "(#", content)
    page_break = '<div class="pdf-topic-section-break"></div>\n\n'
    if path.name == "01_concepte-tipus.md":
        content = content.replace(
            "### 3. Tipus de matrius",
            f"{page_break}### 3. Tipus de matrius",
        )
        content = content.replace(
            "#### 3.1 Matrius triangulars",
            f"{page_break}#### 3.1 Matrius triangulars",
        )
    if path.name == "04_equacions-sistemes-matricials.md":
        content = content.replace(
            "### 1. Equacions matricials",
            f"{page_break}### 1. Equacions matricials",
        )
    return content


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    sections = [prepare_source(path) for path in SOURCES]
    section_break = '\n\n<div class="pdf-topic-section-break"></div>\n\n'
    content = section_break.join(sections)
    document = f"""<!-- Fitxer generat automàticament per scripts/genera_recull_tema_4.py. -->

<div class="pdf-topic-cover" markdown="1">

# 4. Matrius {{.pdf-topic-collection}}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Concepte i tipus de matrius](#concepte-i-tipus-de-matrius)
2. [Operacions amb matrius](#operacions-amb-matrius)
3. [Matriu inversa](#matriu-inversa)
4. [Equacions i sistemes matricials](#equacions-i-sistemes-matricials)
5. [Problemes de matrius](#problemes-de-matrius)

</div>

</div>

{content}
"""
    OUTPUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Recull generat: {OUTPUT}")


if __name__ == "__main__":
    main()
