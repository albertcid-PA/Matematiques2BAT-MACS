# Instruccions del projecte

Aquest repositori conté els apunts web de **Matemàtiques Aplicades a les Ciències Socials II**. Aquestes instruccions s'han de seguir en qualsevol conversa nova oberta dins del projecte.

## Continuïtat entre converses

- En començar una tasca, llegeix aquest fitxer i [ESTAT_PROJECTE.md](ESTAT_PROJECTE.md), i revisa `git status`. Consulta [GUIA_MANTENIMENT.md](GUIA_MANTENIMENT.md) per identificar les fonts, els generadors i les comprovacions que corresponen al canvi.
- Les converses anteriors no són una dependència del projecte. Conserva els criteris estables en aquest fitxer, els procediments tècnics a la guia de manteniment i els pendents a l'estat del projecte.
- Quan el professor acordi un criteri nou que hagi de continuar vigent, incorpora'l al document corresponent. No converteixis una proposta de l'agent en una decisió del professor.
- Mantén `ESTAT_PROJECTE.md` breu i actualitzat quan canviï l'estat del treball. Si una tasca queda incompleta, indica l'objectiu, els fitxers afectats, què s'ha fet, què falta, les comprovacions executades i el pròxim pas concret.
- Distingeix entre implementat, comprovat en local i verificat al web públic. No registris com a comprovació una acció que només s'ha proposat.
- Si un acord o material només existeix en una conversa que no pots consultar, declara aquesta mancança i no en reconstrueixis el contingut per suposició.
- Aquests documents són de manteniment del repositori: no els incorporis a la navegació de l'alumnat.

## Relleu entre assistents

El professor alterna Claude Code i Codex en aquesta mateixa carpeta. Els assistents no es comuniquen directament: el canal és el repositori.

- Treballa un sol assistent alhora. L'altre no modifica res a la carpeta fins que el primer ha tancat el torn.
- Quan el professor digui **«Tanca el torn»**, actualitza l'apartat «Traspàs» de [ESTAT_PROJECTE.md](ESTAT_PROJECTE.md), sobreescrivint-ne el contingut, i informa de què queda sense commit. Aquesta ordre no autoritza cap commit ni cap `push`.
- Quan el professor digui **«Reprèn la feina»**, llegeix aquest fitxer i el traspàs, revisa `git status` i `git log`, resumeix l'estat al professor i espera la seva indicació abans de modificar res.
- Si el traspàs no coincideix amb Git o amb els fitxers, preval el que hi ha a Git i als fitxers; indica la diferència al professor. Els canvis sense commit que no constin al traspàs no es descarten ni es sobreescriuen.
- Els criteris del projecte es desen als documents del repositori. La memòria privada de cada assistent només pot contenir detalls de la seva pròpia eina.
- Cada assistent s'identifica als seus commits amb una línia final `Co-Authored-By`.

## Objectiu i llengua

- Escriu el contingut adreçat a l'alumnat en català estàndard, amb frases clares i vocabulari matemàtic precís.
- Mantén el nivell de segon de batxillerat de Matemàtiques Aplicades a les Ciències Socials.
- Conserva la intenció didàctica indicada pel professor. No ampliïs el temari ni introdueixis tècniques no demanades.
- Quan una petició sigui prou concreta, implementa-la, comprova-la en local i publica-la si el professor ha demanat actualitzar el web.

## Fonts del web

- `docs/` conté el Markdown, les imatges i els recursos publicables.
- `zensical.toml` defineix la navegació, el tema i les extensions Markdown.
- `docs/stylesheets/extra.css` conté els ajustos visuals comuns.
- `figures/tikz/` conté el codi font de les figures matemàtiques.
- `docs/img/` conté els SVG que mostra el navegador.
- `sources/calcul/` conté les fonts dels enunciats, resultats i solucions de la pàgina de pràctica de càlcul. Modifica aquestes fonts i regenera amb `scripts/genera_pagines_practica.py`; no editis directament `docs/calcul/per-practicar/exercicis_calcul.md`.
- Els textos fixos, els enllaços i la versió del PDF de la pàgina generada de càlcul es defineixen al mateix generador. Canvia'ls allí perquè no es perdin en regenerar.
- `sources/generated/` conté Markdown generat. Modifica les fonts originals o el generador corresponent, no aquests resultats manualment.
- `site/` és una sortida generada. **No l'editis manualment ni la versionis.**
- Consulta `GUIA_GRAFIQUES.md` abans de crear o modificar una figura.

## Estructura i navegació

- Mantén aquest ordre de pestanyes principals:
  1. Inici
  2. Càlcul
  3. Àlgebra lineal
  4. Probabilitat i estadística
  5. Preparació d'exàmens
- `Preparació d'exàmens` ha de continuar sent la pestanya situada més a la dreta.
- La navegació instantània està desactivada expressament per evitar que el navegador conservi pàgines antigues després d'una publicació. No tornis a activar `navigation.instant` sense una petició explícita.
- Quan afegeixis una pàgina, incorpora-la a `zensical.toml` i enllaça-la des de l'índex del bloc corresponent.
- Utilitza enllaços relatius dins del Markdown. Comprova que els fitxers i els identificadors de secció existeixen després de compilar.

## Estil dels apunts

- Mantén la jerarquia `#`, `##`, `###` existent i no saltis nivells.
- Escriu les expressions en línia amb `$...$` i les fórmules destacades amb `$$...$$`.
- Utilitza coma decimal i separació tipogràfica d'unitats: `$2{,}5$`, `$500\,€$`, `$20\,\text{cm}^2$`.
- Usa taules per comparar procediments o resumir casos, sense sobrecarregar-les.
- Usa els requadres existents segons la funció:
  - `abstract`: definicions o informació central;
  - `note`: recordatoris i observacions;
  - `example`: exemples desenvolupats;
  - `tip`: consells de procediment;
  - `warning`: errors habituals o restriccions.
- Conserva el mateix estil visual i la mida de text del web. Reutilitza les classes de `extra.css` abans de crear-ne de noves.
- Els passos d'un procediment han de ser concrets i ordenats. En l'estudi de la monotonia, inclou tots els punts importants: discontinuïtats, extrems del domini, punts d'unió i candidats a extrem.
- A les taules de monotonia, posa els punts importants en columnes pròpies entre els intervals. Indica-hi si cada punt és un màxim, un mínim, una discontinuïtat o un punt d'unió sense extrem, segons correspongui.

## Exercicis i problemes

- Els exercicis de cada tema segueixen la numeració `tema.exercici`: `1.1`, `1.2`, `2.1`...
- Els problemes PAU del bloc de càlcul segueixen `PAU.C.n` i mantenen numeració consecutiva.
- Distingeix clarament entre una pregunta real o adaptada de PAU i un problema d'entrenament de tipus PAU.
- No atribueixis una convocatòria o procedència si no s'ha verificat.
- Evita sèries repetitives: combina càlcul, interpretació, justificació i representació.
- Les solucions han de valorar el procediment, no només el resultat.
- A les pàgines de pràctica de càlcul i àlgebra lineal, conserva els enunciats visibles i les solucions pas a pas dins de desplegables `??? example`, tancats inicialment.

## Reculls d'exercicis en PDF

- Presenta al començament de cada pàgina d'exercicis un enllaç al recull complet en PDF.
- Afegeix `?v=n` a l'enllaç del PDF i incrementa'n el número cada vegada que regeneris el recull, per evitar que el navegador mostri una versió antiga.
- Marca el títol principal de la pàgina amb la classe `.pdf-exercise-collection` perquè s'hi apliqui la maquetació d'impressió comuna definida a `docs/stylesheets/extra.css`.
- Els reculls utilitzen Latin Modern Roman, cos de 9 pt, interlineat compacte, marges A4 reduïts i títols proporcionats. Conserva aquesta configuració en els futurs blocs.
- Inclou fórmules, taules i figures necessàries, però evita espais sobrers i salts de pàgina innecessaris. No redueixis les figures fins al punt que les etiquetes deixin de ser llegibles.
- Desa el PDF publicable a `docs/assets/exercicis/` i una còpia de treball a `output/pdf/`.
- Després de generar-lo, renderitza totes les pàgines i revisa visualment que no hi hagi text tallat, encavalcaments, pàgines buides ni fórmules o figures il·legibles.

## PDF dels apunts i sincronització

- Els PDF de teoria dels temes es generen amb `scripts/genera_pdf_tema.py`, que converteix el Markdown del web a LaTeX i el compila amb XeLaTeX. L'estil és a `sources/llibre/apunts.sty`. El recull d'enunciats de càlcul es genera amb `scripts/genera_pdf_recull_calcul.ps1`. Consulta les correspondències i les dependències a `GUIA_MANTENIMENT.md`.
- Desa els PDF dels apunts a `docs/assets/apunts/` i els d'exercicis a `docs/assets/exercicis/`, amb còpia de treball a `output/pdf/`.
- Conserva la maquetació específica dels apunts, adaptada dels apunts de Matemàtiques I de Jordi i Ignasi Irazuzta: TeX Gyre Pagella d'11 pt, una sola cara, portada, índex amb números de pàgina, capçaleres amb el tema i l'apartat i caixes amb franja de títol. Els exemples es poden partir entre pàgines; les altres caixes es mantenen senceres. Mantén el crèdit a la maquetació al costat de la llicència de la portada. La configuració de 9 pt anterior correspon als reculls d'exercicis.
- Quan canviïn textos, fórmules, taules o figures inclosos en un PDF, regenera els PDF afectats i incrementa `?v=n` en tots els enllaços corresponents, inclosos els definits als generadors.
- Aplica als PDF dels apunts la mateixa revisió visual de totes les pàgines que als reculls d'exercicis.
- Comprova les rutes i les dependències abans d'executar els scripts; no pressuposis que les rutes locals de Python o Edge seran vàlides en un altre entorn.

## Preparació d'exàmens

- Desa aquestes pàgines dins de `docs/preparacio-examens/`.
- Utilitza el nom complet que indiqui el professor per a cada prova.
- Presenta el temari vigent i permet preparar qualsevol contingut inclòs. No reprodueixis l'estructura d'un examen anterior llevat que el professor ho demani explícitament.
- Separa amb claredat què entra i què no entra.
- Les instruccions d'un tutor d'IA han de fer que proposi una pregunta cada vegada, esperi el procediment de l'alumne i ofereixi pistes graduals abans de mostrar la solució.
- Quan una pàgina d'examen inclogui NotebookLM, dona a l'alumnat unes instruccions breus per crear el quadern, afegir-hi les fonts del web i començar l'entrenament amb un compte personal.
- No publiquis un enllaç de NotebookLM fins que s'hagi comprovat que el quadern és accessible amb un compte personal d'alumne.

## Exàmens a Google Docs

- Escriu les fórmules amb l'editor d'equacions de Google Docs sempre que es pugui, perquè quedin editables.
- Escriu les funcions a trossos per al complement Auto-LaTeX: codi LaTeX entre `$$` i `$$`, en una sola línia.
- El professor revisa i retoca cada examen abans de donar-lo per bo.

## Figures i gràfiques

- Edita el fitxer `.tex` de `figures/tikz/`; no modifiquis l'SVG manualment.
- Mantén el `.tex` i l'SVG corresponent sincronitzats.
- Numera les figures amb el tema i l'ordre d'aparició: `Figura 1.1`, `Figura 2.17`...
- Les figures dels problemes PAU tenen una numeració pròpia i consecutiva dins de cada bloc: `Figura PAU.C.n` per a càlcul, `Figura PAU.AL.n` per a àlgebra lineal i `Figura PAU.PE.n` per a probabilitat i estadística.
- El peu de figura ha d'enllaçar amb el `.tex` del repositori.
- Mantén una escala coherent, etiquetes llegibles i cap text a sobre de les corbes o de les acotacions.
- En figures geomètriques, dibuixa amb línia discontínua només les arestes realment ocultes.
- Regenera una figura amb `scripts/compila_figures.ps1` i revisa visualment el resultat abans de publicar.
- Totes les referències a SVG dins del Markdown han d'incloure `?v=n`. Quan regeneris una figura, incrementa aquest número perquè el navegador no reutilitzi una versió antiga de la memòria cau.

## Comprovació local

Des de l'arrel del projecte, compila sempre amb:

```powershell
& ".\.venv\Scripts\zensical.exe" build --clean
```

La compilació ha d'acabar amb `No issues found`. Executa també:

```powershell
git diff --check
```

Per servir el web en local:

```powershell
& ".\.venv\Scripts\zensical.exe" serve -a 127.0.0.1:8000
```

- Reutilitza el servidor existent si el port `8000` ja està ocupat pel projecte.
- Comprova la pàgina modificada i els enllaços principals al navegador.
- Revisa l'ordre del menú, les fórmules, les taules, les figures i l'absència d'errors de consola.

## Git i publicació

- Repositori: <https://github.com/albertcid-PA/Matematiques2BAT-MACS>. Branca de publicació: `main`. Web públic: <https://albertcid-pa.github.io/Matematiques2BAT-MACS/>.
- El flux `.github/workflows/docs.yml` construeix i publica el web. No executa els generadors de pràctica, figures ni PDF: cal generar i versionar els resultats afectats abans del `push`.
- No descartis ni sobreescriguis canvis del professor.
- Revisa `git status` abans de començar i abans de fer el commit.
- Fes commits petits amb missatges descriptius en català.
- Quan s'hagi demanat actualitzar el web, envia els canvis a `main`; GitHub Actions construeix i publica Zensical.
- Després del `push`, comprova la URL pública amb una dada concreta del canvi. No donis la publicació per acabada només perquè el `push` hagi funcionat.

## Criteri de finalització

Una modificació està acabada quan el contingut és matemàticament correcte, manté el format del projecte, compila sense incidències, s'ha revisat visualment i, si correspon, és visible al web públic.
