from __future__ import annotations

import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
CALCUL = DOCS / "calcul"
PRACTICA = CALCUL / "per-practicar"


def read(path: Path) -> str:
    return path.read_text(encoding="utf-8").replace("\r\n", "\n")


def body_after_separator(path: Path) -> str:
    text = read(path)
    parts = re.split(r"\n---\n", text, maxsplit=1)
    if len(parts) != 2:
        raise ValueError(f"No s'ha trobat el separador de contingut a {path}")
    return parts[1].strip()


def fix_relative_assets(text: str) -> str:
    return text.replace("](../img/", "](../../img/")


def demote_headings(text: str) -> str:
    lines = []
    for line in text.splitlines():
        match = re.match(r"^(#{2,5})(\s+.*)$", line)
        if match:
            line = f"{match.group(1)}#{match.group(2)}"
        lines.append(line)
    return "\n".join(lines)


def exercise_marker(line: str) -> tuple[str, str] | None:
    bold = re.match(r"^\*\*((?:[12]\.\d+|PAU\.C\.\d+)\.)(?:\s+([^*]+?))?\*\*(.*)$", line)
    if bold:
        number = bold.group(1).rstrip(".")
        title = (bold.group(2) or "").strip()
        remainder = bold.group(3).strip()
        label = f"{number}. {title}".strip()
        return label, remainder

    html = re.match(
        r'^<p class="exercise-result-lead"><strong>((?:[12]\.\d+)\.)</strong>(.*?)</p>$',
        line,
    )
    if html:
        return html.group(1).rstrip("."), html.group(2).strip()

    return None


def statement_blocks(path: Path) -> dict[str, list[str]]:
    lines = body_after_separator(path).splitlines()
    statements: dict[str, list[str]] = {}
    current_number: str | None = None
    current_body: list[str] = []

    def flush() -> None:
        nonlocal current_number, current_body
        if current_number is None:
            return
        while current_body and not current_body[0].strip():
            current_body.pop(0)
        while current_body and not current_body[-1].strip():
            current_body.pop()
        statements[current_number] = current_body
        current_number = None
        current_body = []

    for line in lines:
        marker = exercise_marker(line)
        if marker:
            flush()
            label, remainder = marker
            number_match = re.match(r"^(PAU\.C\.\d+|[12]\.\d+)", label)
            if number_match is None:
                raise ValueError(f"No s'ha pogut identificar l'exercici: {line}")
            current_number = number_match.group(1)
            title = label[len(current_number) :].lstrip(". ")
            if title:
                current_body.append(f"**{title}**")
                current_body.append("")
            if remainder:
                current_body.append(remainder)
            continue

        if line.startswith("##"):
            flush()
            continue

        if line.startswith('!!! info "Preparació') or line.startswith('!!! info "Recursos'):
            flush()
            continue

        if current_number is not None:
            current_body.append(line)

    flush()
    return statements


def developed_solution_blocks(path: Path) -> dict[str, list[str]]:
    lines = read(path).splitlines()
    solutions: dict[str, list[str]] = {}
    current_number: str | None = None
    current_body: list[str] = []

    def flush() -> None:
        nonlocal current_number, current_body
        if current_number is None:
            return
        while current_body and not current_body[0].strip():
            current_body.pop(0)
        while current_body and not current_body[-1].strip():
            current_body.pop()
        solutions[current_number] = current_body
        current_number = None
        current_body = []

    for line in lines:
        marker = exercise_marker(line)
        if marker:
            flush()
            label, remainder = marker
            number_match = re.match(r"^(PAU\.C\.\d+|[12]\.\d+)", label)
            if number_match is None:
                raise ValueError(f"No s'ha pogut identificar la solució desenvolupada: {line}")
            current_number = number_match.group(1)
            if remainder:
                current_body.append(remainder)
            continue
        if current_number is not None:
            current_body.append(line)

    flush()
    return solutions


def solution_details(
    path: Path,
    statements: dict[str, list[str]],
    developed: dict[str, list[str]],
    *,
    pau: bool = False,
) -> str:
    lines = read(path).splitlines()
    output: list[str] = []
    current_label: str | None = None
    current_body: list[str] = []

    def flush() -> None:
        nonlocal current_label, current_body
        if current_label is None:
            return
        while current_body and not current_body[0].strip():
            current_body.pop(0)
        while current_body and not current_body[-1].strip():
            current_body.pop()
        if current_label.startswith("PAU.C."):
            summary = f"Solució del problema {current_label}"
        else:
            summary = f"Solució de l'exercici {current_label.rstrip('.')}"
        number_match = re.match(r"^(PAU\.C\.\d+|[12]\.\d+)", current_label)
        if number_match is None:
            raise ValueError(f"No s'ha pogut identificar la solució: {current_label}")
        number = number_match.group(1)
        if number not in statements:
            raise ValueError(f"Falta l'enunciat de {number}")
        output.append(f'??? example "{summary}"')
        output.append('    !!! abstract "Enunciat"')
        output.extend(
            f"        {line}" if line else ""
            for line in statements[number]
        )
        output.append("")
        output.append("    **Resolució que cal justificar**")
        output.append("")
        solution_body = developed.get(number, current_body)
        if solution_body:
            output.extend(f"    {line}" if line else "" for line in solution_body)
        else:
            output.append("    Consulta el resultat i comprova el procediment escrit al quadern.")
        output.append("")
        current_label = None
        current_body = []

    content_started = False
    for line in lines:
        if not content_started:
            if line.startswith("## "):
                content_started = True
            else:
                continue

        marker = exercise_marker(line)
        if marker:
            flush()
            current_label, remainder = marker
            if remainder:
                current_body.append(remainder)
            continue

        if line.startswith("##"):
            flush()
            if pau:
                line = f"#{line}"
            output.append(line)
            output.append("")
            continue

        if current_label is not None:
            current_body.append(line)
        elif line.strip():
            output.append(line)

    flush()
    return fix_relative_assets("\n".join(output).strip())


def generate_practice_page() -> str:
    exercises = fix_relative_assets(body_after_separator(CALCUL / "exercicis.md"))
    exercises = exercises.replace("(problemes-pau.md)", "(#problemes-pau)")
    pau = demote_headings(fix_relative_assets(body_after_separator(CALCUL / "problemes-pau.md")))
    return f"""# Per practicar

En aquesta pàgina tens reunits els **exercicis per temes** i els **problemes PAU de càlcul**. Intenta resoldre cada activitat abans d'obrir-ne la solució.

<div class="practice-actions" markdown="1">

[Consulta el solucionari desplegable](solucionari.md){{ .md-button .md-button--primary }}

</div>

## Documents PDF

<div class="practice-download-grid">
  <section class="practice-download-card">
    <h3>Exercicis per temes</h3>
    <ul>
      <li><a href="../../assets/exercicis/exercicis_calcul.pdf?v=9">Enunciats en PDF</a></li>
      <li><a href="../../assets/exercicis/resultats_exercicis_calcul.pdf?v=9">Resultats en PDF</a></li>
    </ul>
  </section>
  <section class="practice-download-card">
    <h3>Problemes PAU</h3>
    <ul>
      <li><a href="../../assets/exercicis/problemes_pau_calcul.pdf?v=1">Enunciats en PDF</a></li>
      <li><a href="../../assets/exercicis/resultats_problemes_pau_calcul.pdf?v=2">Resultats en PDF</a></li>
    </ul>
  </section>
</div>

!!! tip "Com treballar"

    Resol l'exercici al quadern, justifica cada pas i consulta després el [solucionari desplegable](solucionari.md). Els PDF de resultats serveixen per fer una comprovació ràpida.

---

{exercises}

---

## Problemes PAU

Els problemes següents combinen diversos continguts. S'indica si provenen d'una convocatòria real, si estan adaptats o si són d'entrenament de tipus PAU.

{pau}
"""


def generate_solution_page() -> str:
    exercise_statements = statement_blocks(CALCUL / "exercicis.md")
    pau_statements = statement_blocks(CALCUL / "problemes-pau.md")
    developed = developed_solution_blocks(CALCUL / "solucions-pas-a-pas.md")
    exercise_solutions = solution_details(
        CALCUL / "resultats-exercicis.md",
        exercise_statements,
        developed,
    )
    pau_solutions = solution_details(
        CALCUL / "resultats-problemes-pau.md",
        pau_statements,
        developed,
        pau=True,
    )
    return f"""# Solucionari desplegable

Busca l'exercici que has resolt i desplega'n la solució. Abans de mirar-la, deixa escrit el teu procediment: en una prova, el resultat final sense justificació pot no ser suficient.

<div class="practice-actions" markdown="1">

[Torna als enunciats](index.md){{ .md-button }}

</div>

## Documents PDF de resultats

<div class="practice-download-grid">
  <section class="practice-download-card">
    <h3>Exercicis per temes</h3>
    <p><a href="../../assets/exercicis/resultats_exercicis_calcul.pdf?v=9">Resultats en PDF</a></p>
  </section>
  <section class="practice-download-card">
    <h3>Problemes PAU</h3>
    <p><a href="../../assets/exercicis/resultats_problemes_pau_calcul.pdf?v=2">Resultats en PDF</a></p>
  </section>
</div>

!!! note "Ús del solucionari"

    Les solucions estan tancades inicialment perquè puguis provar cada exercici sense veure'n el resultat. Obre només l'exercici que vulguis comprovar i compara'l amb els passos del teu quadern.

{exercise_solutions}

## Problemes PAU

{pau_solutions}
"""


def main() -> None:
    PRACTICA.mkdir(parents=True, exist_ok=True)
    (PRACTICA / "index.md").write_text(generate_practice_page(), encoding="utf-8", newline="\n")
    (PRACTICA / "solucionari.md").write_text(generate_solution_page(), encoding="utf-8", newline="\n")


if __name__ == "__main__":
    main()
