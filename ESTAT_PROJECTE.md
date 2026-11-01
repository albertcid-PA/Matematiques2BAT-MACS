# Estat del projecte

Data de l'inventari inicial: **1 de novembre de 2026**. Aquest document és un punt de continuació i s'ha d'actualitzar quan canviï l'estat del treball. No substitueix la comprovació dels fitxers ni de Git.

## Context que es conserva

- [AGENTS.md](AGENTS.md): criteris docents, estil, navegació, figures, PDF, comprovació i publicació.
- [GUIA_MANTENIMENT.md](GUIA_MANTENIMENT.md): fonts originals, fitxers generats, dependències i comandes.
- [GUIA_GRAFIQUES.md](GUIA_GRAFIQUES.md): procediment específic d'edició de figures.
- [README.md](README.md): presentació del projecte, URL pública i llicència.

## Inventari verificat al repositori

| Bloc | Contingut observat |
|:--|:--|
| Càlcul, temes 1 i 2 | Pàgines de teoria, pràctica amb solucions desplegables, problemes PAU, eines interactives i PDF dels apunts i dels enunciats. |
| Àlgebra lineal, temes 3 i 4 | Pàgines de sistemes i Gauss, matrius, pràctica amb solucions desplegables, eines interactives i PDF dels apunts. |
| Probabilitat i estadística, temes 5–7 | Les pàgines de probabilitat, distribucions i inferència indiquen «En preparació» i enumeren el contingut previst. No assumir que aquest temari ja està desenvolupat. |
| Preparació d'exàmens | Pàgines de la «Prova parcial del 1r trimestre núm. 1: Càlcul» i de la «Prova parcial del 1r trimestre núm. 2: Càlcul». |
| Publicació configurada | Branca `main`, flux `.github/workflows/docs.yml` i URL pública a `zensical.toml`. Aquest inventari no acredita una comprovació del web públic. |

La presència dels fitxers no implica una auditoria completa del seu contingut matemàtic ni de la sincronització de tots els PDF.

## Criteris específics que cal preservar

- La preparació de la segona prova parcial de càlcul presenta els temes 1 i 2 sencers com a coneixements previs. Preveu preguntes majoritàriament contextualitzades, amb especial atenció a l'optimització, les funcions a trossos, el valor absolut i el domini. La font del detall és `docs/preparacio-examens/pp1-2.md`; no extrapolis aquest format a altres proves sense indicació del professor.
- La pràctica de càlcul es reconstrueix des de `sources/calcul/`. Els enunciats, els resultats breus i les solucions desenvolupades tenen fitxers diferents.
- GitHub Actions publica els recursos generats localment; no els torna a generar.

## Pendents i límits coneguts

| Element | Estat i pròxim pas |
|:--|:--|
| Context exclusiu de converses antigues | L'1 de novembre de 2026 s'han fet dues cerques dirigides de context d'aquest projecte. No han identificat criteris docents nous confirmats pel professor que faltessin als documents. La recuperació és parcial i no equival a llegir íntegrament totes les converses ni a conservar-ne els adjunts. No donar el traspàs per exhaustiu. |
| Recull d'exercicis d'àlgebra | No hi ha un PDF d'exercicis d'àlgebra entre els fitxers versionats consultats, ni un generador específic identificat. La pàgina tampoc inclou l'enllaç inicial ni la classe de recull que demana `AGENTS.md`. Si el professor encarrega aquest recull, caldrà crear-lo i aplicar-hi la maquetació comuna; no s'ha implementat en aquesta tasca. |
| Desenvolupament dels temes 5–7 | Contingut previst, sense encàrrec actiu per redactar-lo en aquesta conversa. Desenvolupar-lo quan el professor ho demani. |
| Còpies temporals de l'entorn antic | `tmp/venv-antic/` (l'entorn `.venv` anterior) i `tmp/context-git-20261101/` (còpia de Codex que no es va enviar) ja no són necessàries. Es poden esborrar quan el professor ho vulgui; `tmp/` no es versiona. |
| PDF dels temes 1, 2 i 4 i del recull | Només s'ha provat de punta a punta el script del tema 3 amb l'entorn nou. Els altres quatre tenen els mateixos canvis, però encara no s'han executat. |
| Revisió d'emmagatzematge de GitHub Actions | La cerca ha recuperat una comprovació que va quedar pendent a la conversa del 29 d'octubre de 2026: l'espai dels artefactes d'Actions. No s'ha comprovat en aquesta tasca. Les xifres històriques de consum o mida d'aquella conversa no descriuen necessàriament l'estat actual. |

### Abast del context recuperat

La segona cerca ha aclarit que les recomanacions del 28 d'octubre de 2026 sobre repartir contingut matemàtic, codi i PDF entre models eren propostes de l'assistent; no s'han convertit en instruccions del professor. Tampoc s'han traslladat restriccions de programacions antigues o d'altres cursos que no es poden atribuir al web actual.

## Darrera tasca

- **Objectiu:** traspassar el manteniment del projecte de Codex a Claude Code (1 de novembre de 2026).
- **Fitxers afectats:** `AGENTS.md`, `CLAUDE.md`, `GUIA_MANTENIMENT.md`, aquest document i els cinc `scripts/genera_pdf_*.ps1`.
- **Implementat:**
  - a partir de l'inventari inicial fet amb Codex, s'ha afegit `CLAUDE.md`, que importa `AGENTS.md`;
  - s'ha recreat `.venv` a la carpeta actual, amb les mateixes versions i amb `pypdf` i `reportlab`, i `zensical.exe` torna a funcionar;
  - els scripts de PDF utilitzen el Python de `.venv` en lloc del de Codex;
  - s'ha afegit el BOM UTF-8 als cinc scripts de PDF, perquè Windows PowerShell 5.1 no espatlli els accents del peu de pàgina;
  - el treball es fa directament al repositori principal.
- **Comprovacions:**
  - `zensical.exe build --clean` acaba amb `No issues found`;
  - `git fetch origin` funciona;
  - `genera_pdf_tema_3.ps1` genera un PDF amb les mateixes 16 pàgines i el mateix text, peu de pàgina inclòs, que el publicat; el PDF publicat s'ha restaurat i no s'ha canviat;
  - no hi ha canvis al contingut de l'alumnat.
- **Pròxim pas:** abans d'esborrar converses de Codex, conservar els adjunts o els acords que no s'hagin recuperat.

## Com registrar una tasca incompleta

Substitueix l'apartat de la darrera tasca o afegeix un pendent concret amb: objectiu acordat, fitxers afectats, feina feta, feina que falta, comprovacions executades, bloqueig real si n'hi ha i pròxim pas. Registra el commit i la URL comprovada si s'ha publicat. Elimina els pendents resolts i evita mantenir un diari de tota la conversa.
