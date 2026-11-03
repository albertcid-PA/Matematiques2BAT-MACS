#!/usr/bin/env python3
"""Genera el PDF de la teoria d'un tema amb LaTeX a partir del Markdown del web.

El contingut surt sempre dels fitxers de docs/. Aquest script els converteix a
LaTeX amb l'estil de sources/llibre/apunts.sty i compila el PDF amb XeLaTeX.

La conversió i l'estil s'han adaptat del generador de «Matemàtiques I» de Jordi i
Ignasi Irazuzta (https://github.com/irazuzta/Matematiques1BAT, CC BY-NC-SA 4.0).

Els temes i les seves pàgines es llegeixen del menú de zensical.toml: és tema
qualsevol entrada del menú que comenci per un número («5. Probabilitat…»).

Ús, des de l'arrel del repositori:

    .venv\\Scripts\\python.exe scripts\\genera_pdf_tema.py --llista
    .venv\\Scripts\\python.exe scripts\\genera_pdf_tema.py 2
    .venv\\Scripts\\python.exe scripts\\genera_pdf_tema.py 2 --publica
    .venv\\Scripts\\python.exe scripts\\genera_pdf_tema.py --tots
    .venv\\Scripts\\python.exe scripts\\genera_pdf_tema.py 1 3 4 --nomes-tex

Sense opcions, el PDF queda a tmp/llibre/pdf/ per revisar-lo, amb uns fulls de
revisió a tmp/llibre/revisio/, i no es toca res del que es publica.
Amb --publica, el PDF es copia a docs/assets/apunts/ i a output/pdf/, i s'incrementa
el ?v=n dels enllaços. Amb --tots, es processen tots els temes que ja tenen contingut.
Amb --nomes-tex, només es fa la conversió a LaTeX, sense compilar res.
"""
import html
import os
import re
import shutil
import subprocess
import sys
import tomllib
import unicodedata
from pathlib import Path

ARREL = Path(__file__).resolve().parents[1]
DOCS = ARREL / "docs"
ESTIL = ARREL / "sources" / "llibre"
OBRA = ARREL / "tmp" / "llibre"
FIG_PDF = OBRA / "figures"
ASSIGNATURA = "Matemàtiques Aplicades a les Ciències Socials II"

PARAULES_BUIDES = {"i", "de", "del", "la", "el", "les", "els", "a", "amb", "per", "en", "d", "l"}
RE_ENLLAC_PDF = r"assets/apunts/([\w.-]+\.pdf)"

# Percentatge de reducció a partir del qual s'avisa que una taula pot costar de llegir
AVIS_TAULA = 80

CAIXES = {  # tipus de requadre del web -> entorn d'apunts.sty
    "abstract": "definicio",
    "example": "exemple",
    "note": "nota",
    "info": "nota",
    "tip": "propietat",
    "success": "propietat",
    "warning": "compte",
    "danger": "compte",
}

ESC = {"\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "#": r"\#", "_": r"\_",
       "{": r"\{", "}": r"\}", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}"}

RE_ITEM = re.compile(r"^( *)([-*+]|\d+\.)\s+(.*)$")
RE_ADM = re.compile(r'^(!!!|\?\?\?\+?)\s+(\w+)(?:\s+"(.*)")?\s*$')

# Figures TikZ que necessita el tema que s'està convertint: {nom: .tex d'origen}
FIGURES = {}


# ---------------------------------------------------------------- temes del menú

def _pagines(entrada):
    """Totes les pàgines d'una entrada del menú, en ordre."""
    if isinstance(entrada, str):
        return [entrada]
    if isinstance(entrada, dict):
        return [p for valor in entrada.values() for p in _pagines(valor)]
    return [p for valor in entrada for p in _pagines(valor)]


def _nom_pdf(num, titol, index):
    """El nom de l'enllaç de l'índex; si encara no n'hi ha, es deriva del títol."""
    m = re.search(RE_ENLLAC_PDF, index.read_text(encoding="utf-8-sig"))
    if m:
        return m.group(1)
    net = unicodedata.normalize("NFKD", titol).encode("ascii", "ignore").decode().lower()
    paraules = [p for p in re.findall(r"[a-z0-9]+", net) if p not in PARAULES_BUIDES]
    return f"tema_{num}_{'_'.join(paraules)}.pdf"


def temes_del_menu():
    """Llegeix els temes del menú de zensical.toml: {número: dades del tema}."""
    with open(ARREL / "zensical.toml", "rb") as f:
        menu = tomllib.load(f)["project"]["nav"]
    temes = {}

    def recorre(entrades):
        for entrada in entrades:
            if not isinstance(entrada, dict):
                continue
            for clau, valor in entrada.items():
                m = re.match(r"^(\d+)\.\s+(.*)$", clau)
                if m:
                    num, titol = int(m.group(1)), m.group(2).strip()
                    pagines = [DOCS / p for p in _pagines(valor)]
                    index = next((p for p in pagines if p.name == "index.md"), pagines[0])
                    if num in temes:
                        raise SystemExit(f"El tema {num} surt dues vegades al menú de zensical.toml.")
                    temes[num] = {
                        "titol": titol,
                        "index": index,
                        "fonts": [p for p in pagines if p != index],
                        "pdf": _nom_pdf(num, titol, index),
                    }
                elif isinstance(valor, list):
                    recorre(valor)

    recorre(menu)
    return temes


def en_preparacio(tema):
    """Un tema sense pàgines pròpies amb l'avís «En preparació» encara no té contingut."""
    return not tema["fonts"] and '"En preparació"' in tema["index"].read_text(encoding="utf-8-sig")


# ---------------------------------------------------------------- text en línia

def _math_split(s):
    """Separa el text en trossos de text i de fórmula ($...$)."""
    parts, i, buf = [], 0, ""
    while i < len(s):
        c = s[i]
        if c == "\\" and i + 1 < len(s) and s[i + 1] == "$":
            buf += "$"
            i += 2
            continue
        if c == "$":
            j = s.find("$", i + 1)
            while j != -1 and s[j - 1] == "\\":
                j = s.find("$", j + 1)
            if j == -1:
                buf += c
                i += 1
                continue
            parts.append(("t", buf))
            buf = ""
            parts.append(("m", s[i:j + 1]))
            i = j + 1
            continue
        buf += c
        i += 1
    parts.append(("t", buf))
    return parts


def _esc(t):
    return "".join(ESC.get(c, c) for c in t)


def inline(s):
    """Converteix una línia de text Markdown (amb fórmules) a LaTeX."""
    s = re.sub(r"</span>\s*<span[^>]*>", " ", s)  # les parts d'una capçalera no s'enganxen
    s = re.sub(r"</?span[^>]*>", "", s)
    s = html.unescape(s)
    out = []
    for kind, piece in _math_split(s):
        if kind == "m":
            out.append(piece)
            continue
        t = re.sub(r"\[([^\]]+)\]\([^)]+\)(\{[^}]*\})?", r"\1", piece)  # enllaços: només el text
        codes = []
        t = re.sub(r"`([^`]+)`", lambda m: codes.append(m.group(1)) or f"\x01{len(codes)-1}\x01", t)
        t = _esc(t)
        t = re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", t)
        t = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\\emph{\1}", t)
        t = re.sub(r"\x01(\d+)\x01", lambda m: r"\texttt{" + _esc(codes[int(m.group(1))]) + "}", t)
        out.append(t)
    res = "".join(out)
    # La negreta pot englobar fórmules: **...$x$...**
    res = re.sub(r"\*\*(.+?)\*\*", r"\\textbf{\1}", res)
    return res.replace("<u>", r"\underline{").replace("</u>", "}")


def plain(s):
    """Versió sense format (per als marcadors del PDF)."""
    s = re.sub(r"\$([^$]*)\$", lambda m: re.sub(r"[\\{}^_]", "", m.group(1)), s)
    return _esc(re.sub(r"[*`]", "", s))


def heading(cmd, title):
    t = inline(title)
    if "$" in title:
        cos = "\\%s{\\texorpdfstring{%s}{%s}}" % (cmd, t, plain(title))
    else:
        cos = "\\%s{%s}" % (cmd, t)
    if cmd == "chapter":
        return cos
    # Reserva lloc perquè el títol no quedi separat del que ve després
    return "\\needspace{10\\baselineskip}\n" + cos


# ---------------------------------------------------------------- taules

def _cells(line):
    """Separa les cel·les d'una fila de taula sense trencar les fórmules."""
    line = line.strip()
    if line.startswith("|"):
        line = line[1:]
    if line.endswith("|"):
        line = line[:-1]
    cells, buf, inmath = [], "", False
    i = 0
    while i < len(line):
        c = line[i]
        if c == "\\" and i + 1 < len(line):
            buf += line[i:i + 2]
            i += 2
            continue
        if c == "$":
            inmath = not inmath
        if c == "|" and not inmath:
            cells.append(buf.strip())
            buf = ""
        else:
            buf += c
        i += 1
    cells.append(buf.strip())
    return cells


def _llarg(c):
    c = re.sub(r"</?span[^>]*>", "", c)
    return len(re.sub(r"\$[^$]*\$", "xxxx", c))


def table(lines):
    """Les taules amples s'ajusten a l'amplada disponible, sense desbordar."""
    head = _cells(lines[0])
    sep = _cells(lines[1])
    n = len(head)
    rows = [(_cells(l) + [""] * n)[:n] for l in lines[2:]]
    aligns = []
    for s in sep:
        s = s.strip()
        aligns.append("c" if s.startswith(":") and s.endswith(":") else "r" if s.endswith(":") else "l")
    allrows = [head] + rows
    text_llarg = max(_llarg(c) for r in allrows for c in r)

    def cel(c):
        # A les taules molt amples, els textos llargs es parteixen en línies
        if n >= 6 and _llarg(c) > 20:
            return "\\parbox[c]{2.6cm}{\\centering\\strut %s\\strut}" % inline(c)
        return inline(c)

    cos = ["\\toprule"]
    if any(c.strip() for c in head):
        def cap(c):
            if not c.strip():
                return ""
            if n >= 6 and _llarg(c) > 20:
                return "\\parbox[c]{2.6cm}{\\centering\\strut\\textbf{%s}\\strut}" % inline(c)
            return "\\textbf{%s}" % inline(c)

        cos += [" & ".join(cap(c) for c in head) + " \\\\", "\\midrule"]
    cos += [" & ".join(cel(c) for c in r) + " \\\\" for r in rows]
    cos.append("\\bottomrule")
    if n <= 4 and text_llarg > 45:
        prim = "l" if max(_llarg(r[0]) for r in allrows) < 28 else "Y"
        spec = prim + "Y" * (n - 1)
        return "\n".join(["\\begin{center}", "\\begin{tabularx}{\\linewidth}{%s}" % spec, *cos,
                          "\\end{tabularx}", "\\end{center}"])
    mida = "\\footnotesize\\setlength{\\tabcolsep}{3.5pt}" if n >= 6 else "\\small" if n >= 4 else ""
    return "\n".join(["\\begin{center}", mida, "\\sbox{\\caixataula}{%",
                      "\\begin{tabular}{%s}" % "".join(aligns), *cos, "\\end{tabular}}%",
                      "\\informataula", "\\adjustbox{max width=\\linewidth}{\\usebox{\\caixataula}}",
                      "\\end{center}"])


# ---------------------------------------------------------------- figures

def _registra_figura(ruta_svg, src):
    """Localitza el .tex d'un SVG i en retorna el camí al PDF de la figura."""
    svg = (src / ruta_svg.split("?")[0]).resolve()
    rel = svg.relative_to(DOCS / "img")
    tex = ARREL / "figures" / "tikz" / rel.with_suffix(".tex")
    if not tex.exists():
        raise SystemExit(f"Falta la font de la figura: {tex}")
    FIGURES[svg.stem] = tex
    return "../figures/" + svg.stem + ".pdf"


def figura(bloc, src):
    img = re.search(r"\]\(([^)\s]+\.svg[^)\s]*)", bloc)
    if not img:
        raise SystemExit("Figura sense SVG: " + bloc[:120])
    ruta = _registra_figura(img.group(1), src)
    peu = re.search(r"<figcaption>(.*?)</figcaption>", bloc, re.S)
    m = re.match(r'\s*<strong><a href="([^"]+)">(.*?)</a></strong>\s*(.*)$', peu.group(1), re.S) if peu else None
    if not m:
        raise SystemExit("Peu de figura inesperat: " + bloc[:160])
    url, etiqueta, text = m.groups()
    url = url.replace("%", r"\%").replace("#", r"\#")
    return "\\figuraprojecte{%s}{\\href{%s}{%s}}{%s}" % (ruta, url, inline(etiqueta), inline(text))


# ---------------------------------------------------------------- blocs Markdown

def _dedent(lines, n=4):
    return [l[n:] if l.startswith(" " * n) else l.lstrip() for l in lines]


def _indented_block(lines, i, n=4):
    """Línies que pertanyen a un bloc sagnat que comença a la línia i."""
    body = []
    while i < len(lines):
        l = lines[i]
        if l.strip() == "" or l.startswith(" " * n):
            body.append(l)
            i += 1
        else:
            break
    while body and body[-1].strip() == "":
        body.pop()
        i -= 1
    return body, i


def lists(lines, src):
    """Converteix un bloc de llista (amb subllistes sagnades)."""
    first = RE_ITEM.match(lines[0])
    base = len(first.group(1))
    env = "enumerate" if first.group(2)[0].isdigit() else "itemize"
    items, cur = [], None
    for l in lines:
        m = RE_ITEM.match(l)
        if m and len(m.group(1)) == base:
            cur = [m.group(3)]
            items.append(cur)
        else:
            cur.append(l[base:] if l.startswith(" " * base) else l)
    out = ["\\begin{%s}" % env]
    for it in items:
        head, rest = it[0], it[1:]
        rest = _dedent(rest, 4) if any(r.startswith("    ") for r in rest) else [r.strip() for r in rest]
        out.append("\\item " + blocks([head] + rest, src).strip())
    out.append("\\end{%s}" % env)
    return "\n".join(out)


def blocks(lines, src):
    out = []
    i = 0
    para = []

    def flush():
        if para:
            out.append(inline(" ".join(p.strip() for p in para)))
            para.clear()

    while i < len(lines):
        l = lines[i]
        s = l.strip()
        if s == "":
            flush()
            i += 1
            continue
        m = re.match(r"^(#{1,4})\s+(.*)$", l)
        if m:
            flush()
            cmd = {1: "section", 2: "subsection", 3: "subsubsection", 4: "paragraph"}[len(m.group(1))]
            out.append(heading(cmd, m.group(2).strip()))
            i += 1
            continue
        m = RE_ADM.match(l)
        if m:
            flush()
            env = CAIXES.get(m.group(2), "nota")
            body, i = _indented_block(lines, i + 1)
            out.append("\\begin{%s}{%s}\n%s\n\\end{%s}" % (env, inline(m.group(3) or ""), blocks(_dedent(body), src), env))
            continue
        if s.startswith("$$"):
            flush()
            if s.endswith("$$") and len(s) > 4:
                formula = s[2:-2]
                i += 1
            else:
                j = i + 1
                cos = []
                while not lines[j].strip().endswith("$$"):
                    cos.append(lines[j].strip())
                    j += 1
                ultima = lines[j].strip()[:-2]
                if ultima:
                    cos.append(ultima)
                primera = s[2:]
                formula = "\n".join(([primera] if primera else []) + cos)
                i = j + 1
            out.append("\\[\n%s\n\\]" % formula.strip())
            continue
        if s.startswith("|") and i + 1 < len(lines) and re.match(r"^\s*\|?\s*:?-{2,}", lines[i + 1]):
            flush()
            j = i
            while j < len(lines) and lines[j].strip().startswith("|"):
                j += 1
            out.append(table([x.strip() for x in lines[i:j]]))
            i = j
            continue
        if s.startswith("<figure"):
            flush()
            j = i
            while "</figure>" not in lines[j]:
                j += 1
            out.append(figura(" ".join(x.strip() for x in lines[i:j + 1]), src))
            i = j + 1
            continue
        if s.startswith("<div"):
            flush()
            depth, j, buf = 0, i, []
            while j < len(lines):
                buf.append(lines[j])
                depth += lines[j].count("<div") - lines[j].count("</div>")
                j += 1
                if depth <= 0:
                    break
            primera = buf[0]
            if "practice-actions" in primera or "no-print" in primera:
                pass  # navegació del web: no entra al llibre
            elif 'markdown="1"' in primera:
                sagnat = len(primera) - len(primera.lstrip())
                out.append(blocks(_dedent(buf[1:-1], sagnat), src))
            else:
                raise SystemExit("Bloc HTML sense conversió: " + primera[:100])
            i = j
            continue
        if RE_ITEM.match(l):
            flush()
            base = len(RE_ITEM.match(l).group(1))
            j = i + 1
            while j < len(lines):
                lj = lines[j]
                if lj.strip() == "":
                    k = j
                    while k < len(lines) and lines[k].strip() == "":
                        k += 1
                    if k < len(lines) and (lines[k].startswith(" " * (base + 2)) or
                                           (RE_ITEM.match(lines[k]) and len(RE_ITEM.match(lines[k]).group(1)) == base)):
                        j = k
                        continue
                    break
                if RE_ITEM.match(lj) or lj.startswith(" " * (base + 2)):
                    j += 1
                    continue
                break
            out.append(lists([x for x in lines[i:j] if x.strip()], src))
            i = j
            continue
        if s.startswith(">"):
            flush()
            j = i
            q = []
            while j < len(lines) and lines[j].strip().startswith(">"):
                q.append(lines[j].strip()[1:].lstrip())
                j += 1
            out.append("\\begin{quote}\n%s\n\\end{quote}" % blocks(q, src))
            i = j
            continue
        if re.match(r"^!\[", s):
            raise SystemExit("Imatge fora de <figure>: " + s[:100])
        if re.match(r"^(-{3,}|\*{3,})$", s):
            flush()
            out.append("\\medskip")
            i += 1
            continue
        para.append(l)
        i += 1
    flush()
    return "\n\n".join(x for x in out if x)


# ---------------------------------------------------------------- documents

def llegeix(path):
    text = path.read_text(encoding="utf-8-sig")
    text = re.sub(r"\A---\n.*?\n---\n", "", text, flags=re.S)  # capçalera YAML
    text = re.sub(r"<!--.*?-->", "", text, flags=re.S)  # comentaris
    # LaTeX ja numera els títols
    return [re.sub(r"^(#{1,6}\s+)\d+(?:\.\d+)*\.?\s+", r"\1", l) for l in text.split("\n")]


def capitol(tema):
    carpeta = tema["index"].parent
    index = llegeix(tema["index"])
    titol = re.match(r"^#\s+(.*)$", index[0]).group(1).strip()
    k = next((n for n, x in enumerate(index) if x.startswith("## ")), len(index))
    parts = [heading("chapter", titol) + "\n\n" + blocks(index[1:k], carpeta)]
    if tema["fonts"]:
        # L'índex només aporta el títol i la introducció; la resta és navegació del web
        parts += [blocks(llegeix(p), p.parent) for p in tema["fonts"]]
    else:
        # Tema d'una sola pàgina: els seus «##» fan el paper dels apartats
        parts.append(blocks([re.sub(r"^#(#+\s)", r"\1", l) for l in index[k:]], carpeta))
    cos = "\n\n".join(parts) + "\n"
    # Entre dos títols seguits no es reserva lloc: el primer quedaria sol a la pàgina
    cos = re.sub(r"(\\(?:section|subsection|subsubsection)\{[^\n]*\})\n\n\\needspace\{10\\baselineskip\}\n",
                 r"\1\n\n", cos)
    # Un rètol en negreta («Pas 7…») no queda sol al final d'una pàgina
    cos = re.sub(r"(?m)^(\\textbf\{[^\n]*\})\n\n", lambda m: m.group(1) + "\\par\\nopagebreak\n\n", cos)
    return titol, cos


PRINCIPAL = r"""%% Document generat per scripts/genera_pdf_tema.py. No l'editis a mà.
\documentclass[11pt,a4paper,oneside,openany]{book}
\usepackage{apunts}
\hypersetup{pdftitle={%(assignatura)s. Tema %(num)d: %(titol)s},pdfauthor={Albert Cid},pdflang={ca}}
\begin{document}
\frontmatter
\portada{%(num)d}{%(titol)s}{2n de Batxillerat}
\begingroup
\pagestyle{plain}
\tableofcontents
\clearpage
\endgroup
\mainmatter
\setcounter{chapter}{%(previ)d}
\input{capitol}
\end{document}
"""

PREAMBUL_FIGURA = r"""\usepackage{fontspec}
\usepackage{unicode-math}
\setmainfont{texgyrepagella}[Extension=.otf, UprightFont=*-regular, BoldFont=*-bold, ItalicFont=*-italic, BoldItalicFont=*-bolditalic]
\setmathfont{texgyrepagella-math.otf}
% Aquesta lletra és més ampla: el marge del gràfic només ha de retallar les corbes, no les etiquetes
\makeatletter\@ifpackageloaded{pgfplots}{\pgfplotsset{every axis/.append style={clip mode=individual}}}{}\makeatother
"""


def executa(args, cwd, env=None):
    return subprocess.run(args, cwd=cwd, env=env, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                          encoding="utf-8", errors="replace")


def compila_figures():
    """Compila a PDF les figures noves o modificades, amb la lletra del llibre."""
    obra = FIG_PDF / "_obra"
    obra.mkdir(parents=True, exist_ok=True)
    for nom, tex in sorted(FIGURES.items()):
        desti = FIG_PDF / (nom + ".pdf")
        if desti.exists() and desti.stat().st_mtime >= tex.stat().st_mtime:
            continue
        font = tex.read_text(encoding="utf-8-sig")
        if "\\begin{document}" not in font:
            raise SystemExit("Figura sense \\begin{document}: " + nom)
        font = font.replace("\\begin{document}", PREAMBUL_FIGURA + "\\begin{document}", 1)
        (obra / (nom + ".tex")).write_text(font, encoding="utf-8", newline="\n")
        r = executa(["xelatex", "-interaction=nonstopmode", "-halt-on-error", nom + ".tex"], obra)
        if r.returncode != 0:
            print(r.stdout[-1500:])
            raise SystemExit("Error en compilar la figura " + nom)
        shutil.copy(obra / (nom + ".pdf"), desti)
        print("Figura compilada:", nom, flush=True)


def compila(num, tema, dest):
    env = dict(os.environ)
    env["TEXINPUTS"] = str(ESTIL) + os.pathsep + env.get("TEXINPUTS", "")
    nom = f"tema_{num}"
    for passada in range(3):  # índex, marcadors i números de pàgina
        r = executa(["xelatex", "-interaction=nonstopmode", "-halt-on-error", nom + ".tex"], dest, env)
        if r.returncode != 0:
            print(r.stdout[-3000:])
            raise SystemExit(f"Error en compilar el tema {num} (passada {passada + 1})")
    log = (dest / (nom + ".log")).read_text(encoding="utf-8", errors="replace")
    falten = sorted(set(re.findall(r"Missing character: There is no (.*?) in font", log)))
    if falten:
        raise SystemExit(f"Falten caràcters a les lletres: {falten}")
    grans = [float(x) for x in re.findall(r"Overfull \\hbox \(([\d.]+)pt", log)]
    print("Línies que desborden més de 5 pt:", sum(1 for g in grans if g > 5))
    reduides = sorted(set(re.findall(r"TAULA-REDUIDA (\d+) pagina (\w+)", log)), key=lambda x: int(x[0]))
    for percent, pagina in reduides:
        if int(percent) < AVIS_TAULA:
            print(f"AVÍS: taula reduïda al {percent} % prop de la pàgina {pagina}; comprova que es llegeix.")
    sortida = OBRA / "pdf" / tema["pdf"]
    sortida.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy(dest / (nom + ".pdf"), sortida)
    return sortida


def comprova_text(sortida):
    """Avisa si al PDF hi ha restes de Markdown o d'HTML sense convertir."""
    if not shutil.which("pdftotext"):
        print("AVÍS: no s'ha trobat pdftotext; no es comproven les restes de Markdown.")
        return
    r = subprocess.run(["pdftotext", "-layout", str(sortida), "-"], stdout=subprocess.PIPE,
                       stderr=subprocess.DEVNULL, encoding="utf-8", errors="replace")
    restes = [l.strip() for l in r.stdout.splitlines() if re.search(r"\*\*|!!!|\$\$|</|\{ ?width|\]\(", l)]
    for linia in restes[:10]:
        print("AVÍS: possible resta sense convertir:", linia[:90])


def fulls_de_revisio(num, sortida):
    """Posa totes les pàgines en fulls de 4 x 2 per revisar-les de pressa."""
    if not shutil.which("pdftoppm"):
        print("AVÍS: no s'ha trobat pdftoppm; no es generen els fulls de revisió.")
        return
    try:
        from pypdf import PageObject, PdfReader, PdfWriter, Transformation
    except ImportError:
        print("AVÍS: no s'ha trobat pypdf; no es generen els fulls de revisió.")
        return
    carpeta = OBRA / "revisio" / f"tema-{num}"
    shutil.rmtree(carpeta, ignore_errors=True)
    carpeta.mkdir(parents=True)
    lector = PdfReader(sortida)
    escriptor = PdfWriter()
    ample, alt, columnes, files, escala = 595.28, 841.89, 4, 2, 0.5
    for i in range(0, len(lector.pages), columnes * files):
        full = PageObject.create_blank_page(width=ample * escala * columnes, height=alt * escala * files)
        for k, pagina in enumerate(lector.pages[i:i + columnes * files]):
            x = (k % columnes) * ample * escala
            y = (files - 1 - k // columnes) * alt * escala
            full.merge_transformed_page(pagina, Transformation().scale(escala).translate(x, y))
        escriptor.add_page(full)
    fulls = carpeta / "fulls.pdf"
    escriptor.write(fulls)
    subprocess.run(["pdftoppm", "-r", "85", "-png", str(fulls), str(carpeta / "full")], check=True)
    fulls.unlink()
    print("Fulls de revisió:", carpeta.relative_to(ARREL))


def incrementa_enllacos(nom_pdf):
    """Puja una unitat el ?v=n de tots els enllaços al PDF. Retorna quants n'ha trobat."""
    trobats = 0
    for md in DOCS.rglob("*.md"):
        with open(md, encoding="utf-8", newline="") as f:
            text = f.read()
        if nom_pdf not in text:
            continue
        nou, canvis = re.subn(re.escape(nom_pdf) + r"\?v=(\d+)",
                              lambda m: f"{nom_pdf}?v={int(m.group(1)) + 1}", text)
        if canvis:
            with open(md, "w", encoding="utf-8", newline="") as f:
                f.write(nou)
            trobats += canvis
            print("Enllaç actualitzat:", md.relative_to(ARREL))
    return trobats


def publica(sortida, tema):
    for carpeta in (ARREL / "docs" / "assets" / "apunts", ARREL / "output" / "pdf"):
        carpeta.mkdir(parents=True, exist_ok=True)
        shutil.copy(sortida, carpeta / sortida.name)
        print("Copiat a:", (carpeta / sortida.name).relative_to(ARREL))
    if not incrementa_enllacos(sortida.name):
        rel = os.path.relpath(DOCS / "assets" / "apunts" / sortida.name, tema["index"].parent).replace(os.sep, "/")
        print(f"AVÍS: cap pàgina enllaça aquest PDF. Afegeix a {tema['index'].relative_to(ARREL)}:")
        print(f'  <div class="practice-actions" markdown="1">\n\n'
              f'  [**Descarrega {num_i_titol(tema)}**]({rel}?v=1){{ target="_blank" rel="noopener" }}\n\n  </div>')


def num_i_titol(tema):
    return re.match(r"^#\s+(.*)$", tema["index"].read_text(encoding="utf-8-sig").split("\n")[0]).group(1).strip()


def main(argv):
    opcions = {"--publica", "--nomes-tex", "--tots", "--llista"}
    desconeguts = [a for a in argv if not a.isdigit() and a not in opcions]
    if desconeguts or not argv:
        sys.exit(__doc__)
    disponibles = temes_del_menu()
    if "--llista" in argv:
        for num, tema in sorted(disponibles.items()):
            pagines = len(tema["fonts"]) or 1
            estat = "en preparació" if en_preparacio(tema) else f"{pagines} {'pàgina' if pagines == 1 else 'pàgines'}"
            print(f"{num}. {tema['titol']} ({estat}) -> {tema['pdf']}")
        return
    if "--tots" in argv:
        temes = [n for n, t in sorted(disponibles.items()) if not en_preparacio(t)]
    else:
        temes = [int(a) for a in argv if a.isdigit()]
    if not temes:
        sys.exit(__doc__)
    for num in temes:
        if num not in disponibles:
            sys.exit(f"El tema {num} no surt al menú de zensical.toml. Temes: {sorted(disponibles)}")
        if en_preparacio(disponibles[num]):
            sys.exit(f"El tema {num} encara té l'avís «En preparació» i no té contingut per generar.")
    for num in temes:
        tema = disponibles[num]
        FIGURES.clear()
        dest = OBRA / f"tema-{num}"
        dest.mkdir(parents=True, exist_ok=True)
        titol, cos = capitol(tema)
        (dest / "capitol.tex").write_text(cos, encoding="utf-8", newline="\n")
        principal = PRINCIPAL % dict(assignatura=ASSIGNATURA, num=num, previ=num - 1, titol=titol)
        (dest / f"tema_{num}.tex").write_text(principal, encoding="utf-8", newline="\n")
        print(f"Tema {num}: LaTeX generat, amb {len(FIGURES)} figures.", flush=True)
        if "--nomes-tex" in argv:
            continue
        compila_figures()
        sortida = compila(num, tema, dest)
        print("PDF:", sortida.relative_to(ARREL))
        comprova_text(sortida)
        fulls_de_revisio(num, sortida)
        if "--publica" in argv:
            publica(sortida, tema)


if __name__ == "__main__":
    main(sys.argv[1:])
