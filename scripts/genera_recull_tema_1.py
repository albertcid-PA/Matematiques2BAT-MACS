from __future__ import annotations

import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
TOPIC_DIR = PROJECT_ROOT / "docs" / "calcul" / "repas-limits-derivades"
OUTPUT = TOPIC_DIR / "recull-tema-1.md"
SOURCES = (
    TOPIC_DIR / "01_limits.md",
    TOPIC_DIR / "02_derivades.md",
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
    content = re.sub(r"\((?:01_limits|02_derivades)\.md#", "(#", content)
    return content


def main() -> None:
    limits, derivatives = (prepare_source(path) for path in SOURCES)
    document = f"""<!-- Fitxer generat automàticament per scripts/genera_recull_tema_1.py. -->

<div class="pdf-topic-cover" markdown="1">

# 1. Repàs de límits i derivades {{.pdf-topic-collection}}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Repàs de límits](#repas-de-limits)
2. [Repàs de derivades](#repas-de-derivades)

</div>

</div>

{limits}

<div class="pdf-topic-section-break"></div>

{derivatives}
"""
    OUTPUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Recull generat: {OUTPUT}")


if __name__ == "__main__":
    main()
