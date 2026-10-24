from __future__ import annotations

import re
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE = PROJECT_ROOT / "docs" / "algebra-lineal" / "per-practicar" / "solucionari.md"
OUTPUT = PROJECT_ROOT / "docs" / "algebra-lineal" / "recull-enunciats-algebra-lineal.md"


def extract_statements(markdown: str) -> str:
    lines = markdown.splitlines()
    result: list[str] = []
    capture = False

    for line in lines:
        if line.startswith("### "):
            result.extend([line, ""])
            continue
        if re.fullmatch(r"\*\*3\.\d+\.\*\*", line):
            capture = True
        if capture and line.startswith("??? example "):
            capture = False
            result.extend(["", "---", ""])
            continue
        if capture:
            result.append(line)

    while result and not result[-1].strip():
        result.pop()
    if result[-1:] == ["---"]:
        result.pop()
    return "\n".join(result).strip()


def main() -> None:
    source = SOURCE.read_text(encoding="utf-8-sig")
    statements = extract_statements(source)
    statements = statements.replace(
        "**3.6.**",
        '<div class="pdf-page-break"></div>\n\n**3.6.**',
    )
    document = f"""<!-- Fitxer generat automàticament per scripts/genera_recull_exercicis_algebra.py. -->

# Recull d'enunciats d'àlgebra lineal {{.pdf-exercise-collection}}

## Tema 3. Sistemes i mètode de Gauss

{statements}
"""
    OUTPUT.write_text(document, encoding="utf-8", newline="\n")
    print(f"Recull generat: {OUTPUT}")


if __name__ == "__main__":
    main()
