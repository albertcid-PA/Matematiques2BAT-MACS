# Guia de manteniment

Aquesta guia descriu el funcionament verificable del repositori. Els criteris docents i de treball són a [AGENTS.md](AGENTS.md); els pendents i la darrera comprovació són a [ESTAT_PROJECTE.md](ESTAT_PROJECTE.md).

## Fonts i fitxers generats

| Element | Font que cal editar | Resultat o procediment |
|:--|:--|:--|
| Apunts dels temes 1–4 | Markdown de cada tema dins de `docs/` | Web i PDF del tema corresponent. |
| Pràctica de càlcul | `sources/calcul/` | `scripts/genera_pagines_practica.py` genera `docs/calcul/per-practicar/exercicis_calcul.md` i `sources/generated/recull-enunciats-calcul.md`. |
| Textos fixos i enllaç al PDF de la pràctica de càlcul | `scripts/genera_pagines_practica.py` | Cal regenerar la pàgina després de canviar-los. La versió `?v=n` està escrita al generador. |
| Pràctica d'àlgebra lineal | `docs/algebra-lineal/per-practicar/exercicis_algebra.md` | Edició directa; no té un generador equivalent identificat al repositori. |
| Figures | `.tex` dins de `figures/tikz/` | SVG a la mateixa ruta relativa dins de `docs/img/`; consulta [GUIA_GRAFIQUES.md](GUIA_GRAFIQUES.md). |
| Navegació i configuració | `zensical.toml` | Menús, tema, extensions i càrrega dels recursos. |
| Estils comuns i impressió | `docs/stylesheets/extra.css` | Estils de pantalla i del recull d'exercicis en PDF. Els PDF de teoria fan servir `sources/llibre/apunts.sty`. |
| Eines interactives | `docs/javascripts/` i pàgines de `docs/calcul/eines/` o `docs/algebra-lineal/eines/` | Revisa també els carregadors i la inclusió dels scripts quan modifiquis una eina. |

No editis manualment `sources/generated/` ni `site/`. Els resultats de `sources/generated/` i els recursos publicables estan versionats; `site/`, `tmp/` i `output/` estan ignorats per Git.

### Fonts de la pràctica de càlcul

| Fitxer de `sources/calcul/` | Funció |
|:--|:--|
| `exercicis.md` | Enunciats dels temes 1 i 2. |
| `problemes-pau.md` | Enunciats PAU i recursos per continuar practicant. |
| `resultats-exercicis.md` | Resultats breus i figures de les solucions dels exercicis. |
| `resultats-problemes-pau.md` | Resultats breus i figures de les solucions PAU. |
| `solucions-pas-a-pas.md` | Desenvolupament de les solucions. |

Mantén coordinats els identificadors dels enunciats i les solucions. No canviïs els separadors ni els marcadors que utilitza el generador sense revisar-ne el codi. Comprova el procediment i el resultat matemàtic de totes les solucions afectades.

## Entorn local

Executa les comandes des de l'arrel del repositori, en PowerShell. Comprova les rutes i les dependències abans d'executar els scripts: no pressuposis que les rutes locals de Python o Edge seran vàlides en un altre entorn. El web utilitza l'entorn `.venv` i Zensical; no donis per fet que l'ordre genèrica `python` està disponible (la de `WindowsApps` és el redirector de Microsoft Store).

Estat comprovat l'1 de novembre de 2026, amb Claude Code a `C:\Users\acid8\Documents\ClaudeGPT\Apunts 2n BAT`:

| Element | Ruta | Estat |
|:--|:--|:--|
| Entorn `.venv` | `.venv\Scripts\python.exe` (Python 3.14.7) i `.venv\Scripts\zensical.exe` | Recreat a la carpeta actual. Conté Zensical 0.1.0 (la mateixa versió fixada a `.github/workflows/docs.yml`; si s'actualitza, canvia-la als dos llocs i a l'ordre de recreació de sota), `pypdf` i `reportlab`. Els scripts de PDF l'utilitzen tant per a Zensical com per a Python. |
| Python base | `C:\Users\acid8\AppData\Local\Python\pythoncore-3.14-64\python.exe` | Serveix per recrear `.venv`. |
| Edge | `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` | Existeix. |
| MiKTeX i Git | pdfLaTeX, XeLaTeX, latexmk i `pdftoppm`; Git | Disponibles. |

Els llançadors `.exe` de `.venv`, com `zensical.exe`, porten escrita la ruta absoluta de la carpeta on es va crear l'entorn. Si el projecte es torna a moure, deixen de funcionar sense cap missatge (codi de sortida 1). Ja va passar quan la carpeta es va moure de `Documents\ChatGPT` a `Documents\ClaudeGPT`. Mentrestant, `& ".\.venv\Scripts\python.exe" -m zensical ...` continua funcionant, i la solució és recrear l'entorn:

```powershell
Move-Item .venv tmp\venv-antic
& "C:\Users\acid8\AppData\Local\Python\pythoncore-3.14-64\python.exe" -m venv .venv
& ".\.venv\Scripts\python.exe" -m pip install zensical==0.1.0 pypdf reportlab
& ".\.venv\Scripts\zensical.exe" build --clean
```

Quan la compilació hagi passat, es pot esborrar `tmp\venv-antic`. Els scripts de PDF ja no utilitzen el Python del runtime de Codex.

En aquest ordinador, PowerShell és Windows PowerShell 5.1, que llegeix com a ANSI els `.ps1` UTF-8 sense BOM. Per això, els scripts amb text accentuat es desen en UTF-8 **amb BOM**. Altrament, el peu de pàgina dels PDF surt amb caràcters malmesos (per exemple, «MatemÃ tiques»). Quan executis un script, no en redirigeixis la sortida amb `2>&1`: amb `$ErrorActionPreference = "Stop"`, el missatge `No issues found` que Zensical escriu per stderr es convertiria en un error i aturaria el script.

Els generadors de Markdown utilitzen la biblioteca estàndard de Python. `scripts/afegeix_peu_pdf.py` necessita `pypdf` i `reportlab` en el Python que executen els scripts. El recull d'enunciats de càlcul es crea amb Edge en mode sense interfície, a partir del web compilat; els PDF de teoria, amb XeLaTeX. Les figures necessiten `latex` i `dvisvgm`, amb TikZ i PGFPlots instal·lats.

## Generació de la pràctica de càlcul

Després d'editar les fonts o el generador:

```powershell
& ".\.venv\Scripts\python.exe" ".\scripts\genera_pagines_practica.py"
```

El generador només utilitza la biblioteca estàndard. El script de PDF del recull també l'executa.

Revisa el diff de la pàgina i del recull generats. L'execució sobreescriu els dos resultats; comprova abans si contenen canvis locals que cal conservar a les fonts.

## Generació dels PDF

| PDF | Fonts del contingut | Script | Destinació publicable |
|:--|:--|:--|:--|
| Enunciats de càlcul | Enunciats de `sources/calcul/` | `scripts/genera_pdf_recull_calcul.ps1` | `docs/assets/exercicis/recull_enunciats_calcul.pdf` |
| Tema 1 | `01_limits.md` i `02_derivades.md` de `docs/calcul/repas-limits-derivades/` | `scripts/genera_pdf_tema.py 1` | `docs/assets/apunts/tema_1_repas_limits_derivades.pdf` |
| Tema 2 | Les quatre pàgines de contingut de `docs/calcul/aplicacions-derivades/` | `scripts/genera_pdf_tema.py 2` | `docs/assets/apunts/tema_2_aplicacions_derivades.pdf` |
| Tema 3 | Les tres pàgines de contingut de `docs/algebra-lineal/sistemes-gauss/` | `scripts/genera_pdf_tema.py 3` | `docs/assets/apunts/tema_3_sistemes_metode_gauss.pdf` |
| Tema 4 | Les cinc pàgines de contingut de `docs/algebra-lineal/matrius/` | `scripts/genera_pdf_tema.py 4` | `docs/assets/apunts/tema_4_matrius.pdf` |

### PDF de teoria dels temes

`scripts/genera_pdf_tema.py` llegeix els temes del menú de `zensical.toml`: és tema qualsevol entrada que comenci per un número, com «5. Probabilitat i teorema de Bayes». Pren el títol i la introducció de l'`index.md` i les pàgines de l'entrada, ho converteix a LaTeX amb l'estil de `sources/llibre/apunts.sty` i compila amb XeLaTeX. Necessita MiKTeX amb les lletres TeX Gyre; per als fulls de revisió, també `pypdf` i `pdftoppm`.

```powershell
& ".\.venv\Scripts\python.exe" scripts\genera_pdf_tema.py --llista      # temes detectats i estat
& ".\.venv\Scripts\python.exe" scripts\genera_pdf_tema.py 2             # PDF de revisió a tmp\llibre\pdf\
& ".\.venv\Scripts\python.exe" scripts\genera_pdf_tema.py 2 --publica   # també a docs\assets\apunts\ i output\pdf\, i puja el ?v=n
& ".\.venv\Scripts\python.exe" scripts\genera_pdf_tema.py --tots        # tots els temes amb contingut
& ".\.venv\Scripts\python.exe" scripts\genera_pdf_tema.py 1 3 4 --nomes-tex   # només la conversió, sense compilar
```

- **Tema nou:** n'hi ha prou que surti al menú de `zensical.toml` amb el seu número i que hagi perdut l'avís `"En preparació"`. Pot tenir diverses pàgines o una de sola. El nom del PDF surt de l'enllaç de l'índex; si encara no n'hi ha, es deriva del títol i, en publicar, l'script indica el text de l'enllaç que cal afegir.
- **Revisió:** cada execució deixa a `tmp/llibre/revisio/tema-N/` uns fulls amb totes les pàgines. L'script també avisa de les taules reduïdes per sota del 80 % i de possibles restes de Markdown, però això no substitueix la revisió visual.
- **Publicació:** `--publica` no fa commit ni `push`. Fes-los quan hagis revisat el resultat.
- Les figures es compilen des de `figures/tikz/` amb la lletra del llibre i es guarden a `tmp/llibre/figures/`. Només es recompilen les noves o modificades. Els SVG del web no intervenen.
- El generador treu els números escrits als títols del Markdown perquè LaTeX numera els apartats. Per això la numeració del PDF (2.2.1) no coincideix amb la del web.
- Si troba un bloc HTML o una imatge que no sap convertir, s'atura amb un missatge. Cal afegir-hi la conversió, no editar el LaTeX generat.

### Recull d'enunciats de càlcul

El script PowerShell crida el generador de Markdown corresponent; no cal executar-lo prèviament. Comparteix `site/` i recompila amb `--clean`:

```powershell
& ".\scripts\genera_pdf_recull_calcul.ps1"
```

Crea una pàgina temporal `__pdf-...md` dins de `docs/`, serveix `site/`, imprimeix amb Edge, afegeix el peu de pàgina i desa també una còpia amb el mateix nom a `output/pdf/`. En acabar elimina la pàgina temporal i torna a compilar.

El port temporal és el `8768`. Comprova que estigui disponible; no aturis processos aliens per alliberar-lo. Si una execució s'interromp, comprova si ha quedat una pàgina temporal abans de fer la compilació final.

### Maquetació i comprovació

| Tipus | Maquetació | Tipografia del cos |
|:--|:--|:--|
| Recull d'exercicis | Classe `.pdf-exercise-collection` d'`extra.css` | Latin Modern Roman, 9 pt, interlineat compacte i marges A4 reduïts. |
| Apunts d'un tema | `sources/llibre/apunts.sty` | TeX Gyre Pagella, 11 pt, una sola cara, amb portada, índex i capçaleres. |

Als reculls, reutilitza les regles d'impressió d'`extra.css` i les fonts locals de `docs/assets/fonts/latin-modern/`. Després de regenerar un PDF:

1. Incrementa `?v=n` en tots els enllaços que hi apunten. Si l'enllaç pertany a una pàgina generada, modifica el generador i torna a generar-la.
2. Renderitza totes les pàgines del PDF i revisa-les visualment: fórmules, figures i etiquetes llegibles, sense text tallat, encavalcaments ni pàgines buides inesperades.
3. Comprova que la còpia de `output/pdf/` i la publicable corresponen a la mateixa generació.

Un canvi exclusiu en una solució que no apareix al recull d'enunciats no obliga a regenerar aquest PDF. Un canvi en una figura compartida pot afectar més d'un PDF: localitza'n totes les referències.

## Figures i memòria cau

Consulta primer [GUIA_GRAFIQUES.md](GUIA_GRAFIQUES.md). Per regenerar una sola figura:

```powershell
& ".\scripts\compila_figures.ps1" -Source ".\figures\tikz\calcul\fig_1_4_ordre_infinits_exponencial.tex"
```

Sense `-Source`, el script regenera totes les figures. Només puja el `?v=n` de les que han canviat: compara cada SVG abans i després, suma 1 al número a totes les referències de `docs/` i `sources/` (excepte els resultats generats) i, si ha tocat `sources/calcul/`, executa `genera_pagines_practica.py`. Al final mostra un resum. Revisa l'SVG i, si la figura surt en un PDF, regenera'l després.

Quan canviïs CSS o JavaScript amb una versió `?v=n` a la configuració o als carregadors, actualitza també la versió corresponent per evitar recursos antics al navegador.

## Comprovació i publicació

```powershell
& ".\.venv\Scripts\zensical.exe" build --clean
git diff --check
& ".\.venv\Scripts\python.exe" scripts\comprova_sincronia.py
```

La compilació ha d'acabar amb `No issues found`. A PowerShell 5.1, Zensical escriu aquest missatge per stderr i pot aparèixer com un `NativeCommandError` vermell; el que compta és el codi de sortida 0. Per revisar canvis del web:

```powershell
& ".\.venv\Scripts\zensical.exe" serve -a 127.0.0.1:8000
```

### Sincronia dels fitxers generats

`scripts/comprova_sincronia.py` compara els fitxers canviats amb `HEAD` i acaba amb codi 1 si troba algun d'aquests problemes:

| Comprovació | Avisa quan |
|:--|:--|
| Figures | Un `.tex` de `figures/tikz/` ha canviat i el seu SVG no. |
| `?v=n` | Un SVG o un PDF de `docs/` ha canviat i alguna referència conserva el número anterior. |
| Pràctica de càlcul | `exercicis_calcul.md` o `recull-enunciats-calcul.md` no coincideixen amb el que genera `sources/calcul/`. |
| PDF dels temes | Han canviat les pàgines del tema, el títol o la introducció de l'índex, les figures que hi surten, `apunts.sty` o `genera_pdf_tema.py`, i el PDF no. |
| Recull de càlcul | Han canviat els enunciats, les figures que hi surten o el seu script, i el PDF no. |

Amb `--staged` només comprova el que s'ha afegit amb `git add`; amb `--des origin/main`, tot el que encara no s'ha publicat. Treballa a partir dels fitxers canviats, de manera que no detecta un PDF que ja estigués desfasat en un commit anterior. Tampoc detecta els canvis d'`extra.css` que afecten la impressió del recull ni si el contingut d'un PDF regenerat és correcte: la revisió visual continua sent necessària.

### Comprovació automàtica en fer un commit

El hook versionat [`.githooks/pre-commit`](.githooks/pre-commit) executa `git diff --cached --check` i `scripts/comprova_sincronia.py --staged`, i atura el commit si alguna comprovació falla. No compila el web: `build --clean` continua sent un pas manual. Si no troba l'entorn `.venv`, ho avisa i deixa fer el commit sense comprovar la sincronia.

S'activa una sola vegada per còpia del repositori (comprovat el 7 de novembre de 2026 a la carpeta de treball):

```powershell
git config core.hooksPath .githooks
```

`.gitattributes` obliga el hook a tenir finals de línia LF, perquè `sh` no l'executaria amb CRLF. Si el hook atura un commit, corregeix el problema que indica; no el saltis amb `git commit --no-verify` sense el permís del professor.

### Revisió i enviament

Reutilitza el servidor existent si és del projecte. Executar `build --clean` amb el servidor engegat buida `site/` un moment i pot donar errors 404 temporals; el 2 de novembre de 2026 `site/` va quedar buida després d'una compilació i es va resoldre tornant-la a executar. Revisa al navegador les pàgines modificades, els enllaços principals, l'ordre de pestanyes, les fórmules, les taules, les figures i els errors de consola. Si el canvi només afecta documentació de manteniment fora de `docs/`, no hi ha una pàgina d'alumnat modificada per revisar visualment.

La publicació funciona així:

1. Revisa `git status` i el diff; inclou les fonts i els resultats generats afectats, conservant els canvis del professor.
2. Fes commits descriptius en català. Si el professor ha demanat actualitzar el web, envia els canvis a `main`.
3. El flux [`.github/workflows/docs.yml`](.github/workflows/docs.yml) instal·la Zensical, compila i publica a GitHub Pages. **No regenera la pràctica, els SVG ni els PDF.**
4. Comprova el desplegament i una dada concreta del canvi al [web públic](https://albertcid-pa.github.io/Matematiques2BAT-MACS/). Un `push` reeixit no acredita per si sol la publicació.

Repositori: <https://github.com/albertcid-PA/Matematiques2BAT-MACS>.

Amb Claude Code es treballa directament al repositori principal: l'1 de novembre de 2026, `git status` i `git fetch origin` hi han funcionat sense opcions especials, i `main` coincidia amb `origin/main`. El `push` també hi ha funcionat (commit `9304002`, 2 de novembre de 2026). Amb Codex, el relleu és a la mateixa carpeta; el 4 de novembre de 2026 s'hi han fet servir Git i el `push`, però no consta que s'hi hagi comprovat l'entorn `.venv`. Si el `push` falla per autenticació, no canviïs credencials ni la configuració global: informa'n el professor perquè l'executi des d'un terminal propi. No forcis mai el `push`, llevat que el professor demani explícitament reescriure l'historial publicat; si el remot ha avançat, integra'n abans els canvis.

## Manteniment del context

Actualitza aquesta guia quan canviïn les fonts, els generadors, les rutes o el desplegament. Actualitza `AGENTS.md` quan s'acordi una regla estable i `ESTAT_PROJECTE.md` quan hi hagi nous pendents, avenços o comprovacions. Conserva només el context útil per continuar; no hi copiïs converses senceres ni dades personals d'alumnes.
