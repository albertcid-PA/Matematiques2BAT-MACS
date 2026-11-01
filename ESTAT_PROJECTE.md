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
- Pràctica de sistemes (tema 3), criteris del professor de l'1 de novembre de 2026: pocs exercicis mecànics, que obliguin a pivotar (intercanviar files) i a combinar files amb els dos coeficients per no treballar amb fraccions; problemes contextualitzats amb percentatges (borsa, parts del preu i benefici, trams de facturació, IVA...), amb resultats percentuals exactes i no aproximats; paràmetre $\lambda$ a les solucions dels SCI, com a la teoria.

## Pendents i límits coneguts

| Element | Estat i pròxim pas |
|:--|:--|
| Context exclusiu de converses antigues | L'1 de novembre de 2026 s'han fet dues cerques dirigides de context d'aquest projecte. No han identificat criteris docents nous confirmats pel professor que faltessin als documents. La recuperació és parcial i no equival a llegir íntegrament totes les converses ni a conservar-ne els adjunts. No donar el traspàs per exhaustiu. |
| Recull d'exercicis d'àlgebra | No hi ha un PDF d'exercicis d'àlgebra entre els fitxers versionats consultats, ni un generador específic identificat. La pàgina tampoc inclou l'enllaç inicial ni la classe de recull que demana `AGENTS.md`. Si el professor encarrega aquest recull, caldrà crear-lo i aplicar-hi la maquetació comuna; no s'ha implementat en aquesta tasca. |
| Desenvolupament dels temes 5–7 | Contingut previst, sense encàrrec actiu per redactar-lo en aquesta conversa. Desenvolupar-lo quan el professor ho demani. |
| Còpies temporals de l'entorn antic | `tmp/venv-antic/` (l'entorn `.venv` anterior) i `tmp/context-git-20261101/` (còpia de Codex que no es va enviar) ja no són necessàries. Es poden esborrar quan el professor ho vulgui; `tmp/` no es versiona. |
| PDF dels temes 1, 2 i 4 i del recull | Només s'ha provat de punta a punta el script del tema 3 amb l'entorn nou. Els altres quatre tenen els mateixos canvis, però encara no s'han executat. |
| Converses de Codex | Abans d'esborrar-les, conservar els adjunts o els acords que no s'hagin recuperat. |
| Revisió d'emmagatzematge de GitHub Actions | La cerca ha recuperat una comprovació que va quedar pendent a la conversa del 29 d'octubre de 2026: l'espai dels artefactes d'Actions. No s'ha comprovat en aquesta tasca. Les xifres històriques de consum o mida d'aquella conversa no descriuen necessàriament l'estat actual. |

### Abast del context recuperat

La segona cerca ha aclarit que les recomanacions del 28 d'octubre de 2026 sobre repartir contingut matemàtic, codi i PDF entre models eren propostes de l'assistent; no s'han convertit en instruccions del professor. Tampoc s'han traslladat restriccions de programacions antigues o d'altres cursos que no es poden atribuir al web actual.

## Darrera tasca

- **Objectiu:** refer la pràctica de sistemes d'equacions del tema 3 segons les indicacions del professor (1 de novembre de 2026). Una primera versió amb els exercicis 3.8–3.14 es va publicar al commit `f9d395b`; després el professor va demanar menys exercicis mecànics i problemes amb percentatges.
- **Fitxer afectat:** `docs/algebra-lineal/per-practicar/exercicis_algebra.md` (edició directa, sense generador).
- **Implementat:** 3.1–3.3 sense canvis. Els mecànics de Gauss queden reduïts a quatre de nous (3.4 i 3.5 SCD, 3.6 SCI, 3.7 SI), tots amb intercanvi de files o combinacions amb els dos coeficients. Els problemes 3.8–3.11 són tots amb percentatges: borsa amb validació d'una solució negativa (3.8), parts del preu amb IVA i benefici, i efecte d'un descompte sobre el benefici (3.9), trams horaris de la factura de la llum, SCI per percentatges complementaris i després SCD (3.10), i tipus d'IVA d'una compra, on una dada diferent dona SCD, SCI o SI (3.11). El consell «Com treballar» explica el pivot zero i la combinació amb dos coeficients.
- **Comprovacions:** sistemes i transformacions de fila verificats amb Python; `zensical.exe build --clean` acaba amb `No issues found`; `git diff --check` net; pàgina revisada al navegador local (11 desplegables tancats, cap fórmula més ampla que la columna, cap recurs amb error).
- **Publicació:** el professor ha demanat publicar-ho; s'envia a `main` en el commit d'aquesta tasca. Per verificar el web públic, cal buscar-hi el problema 3.11 de l'IVA.
- **Pròxim pas:** el professor continuarà més endavant; no hi ha cap encàrrec pendent en aquesta pàgina.

## Com registrar una tasca incompleta

Substitueix l'apartat de la darrera tasca o afegeix un pendent concret amb: objectiu acordat, fitxers afectats, feina feta, feina que falta, comprovacions executades, bloqueig real si n'hi ha i pròxim pas. Registra el commit i la URL comprovada si s'ha publicat. Elimina els pendents resolts i evita mantenir un diari de tota la conversa.
