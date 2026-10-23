from __future__ import annotations

import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
TOPIC_DIR = PROJECT_ROOT / "docs" / "calcul" / "aplicacions-derivades"
OUTPUT = TOPIC_DIR / "recull-tema-2.md"
SOURCES = (
    TOPIC_DIR / "01_derivabilitat.md",
    TOPIC_DIR / "02_creixement-extrems.md",
    TOPIC_DIR / "03_representacio-funcions.md",
    TOPIC_DIR / "04_optimitzacio.md",
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
    source_names = "|".join(re.escape(source.stem) for source in SOURCES)
    content = re.sub(rf"\((?:{source_names})\.md#", "(#", content)
    return content


def main() -> None:
    sections = [prepare_source(path) for path in SOURCES]
    section_break = '\n\n<div class="pdf-topic-section-break"></div>\n\n'
    content = section_break.join(sections)
    document = f"""<!-- Fitxer generat automàticament per scripts/genera_recull_tema_2.py. -->

<div class="pdf-topic-cover" markdown="1">

# 2. Aplicacions de les derivades {{.pdf-topic-collection}}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Derivabilitat](#derivabilitat)
2. [Creixement, decreixement i extrems](#creixement-decreixement-i-extrems)
3. [Representació de funcions](#representacio-de-funcions)
4. [Optimització de funcions](#optimitzacio-de-funcions)

</div>

</div>

{content}
"""
    OUTPUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Recull generat: {OUTPUT}")


if __name__ == "__main__":
    main()
