# Instruccions del projecte

Aquest repositori conté els apunts web de **Matemàtiques Aplicades a les Ciències Socials II**. Aquestes instruccions s'han de seguir en qualsevol conversa nova oberta dins del projecte.

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

## Preparació d'exàmens

- Desa aquestes pàgines dins de `docs/preparacio-examens/`.
- Utilitza el nom complet que indiqui el professor per a cada prova.
- Presenta el temari vigent i permet preparar qualsevol contingut inclòs. No reprodueixis l'estructura d'un examen anterior llevat que el professor ho demani explícitament.
- Separa amb claredat què entra i què no entra.
- Les instruccions d'un tutor d'IA han de fer que proposi una pregunta cada vegada, esperi el procediment de l'alumne i ofereixi pistes graduals abans de mostrar la solució.
- Quan una pàgina d'examen inclogui NotebookLM, dona a l'alumnat unes instruccions breus per crear el quadern, afegir-hi les fonts del web i començar l'entrenament amb un compte personal.
- No publiquis un enllaç de NotebookLM fins que s'hagi comprovat que el quadern és accessible amb un compte personal d'alumne.

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

- No descartis ni sobreescriguis canvis del professor.
- Revisa `git status` abans de començar i abans de fer el commit.
- Fes commits petits amb missatges descriptius en català.
- Quan s'hagi demanat actualitzar el web, envia els canvis a `main`; GitHub Actions construeix i publica Zensical.
- Després del `push`, comprova la URL pública amb una dada concreta del canvi. No donis la publicació per acabada només perquè el `push` hagi funcionat.

## Criteri de finalització

Una modificació està acabada quan el contingut és matemàticament correcte, manté el format del projecte, compila sense incidències, s'ha revisat visualment i, si correspon, és visible al web públic.
