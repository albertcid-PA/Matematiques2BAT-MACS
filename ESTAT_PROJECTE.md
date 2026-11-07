# Estat del projecte

Data de l'inventari inicial: **1 de novembre de 2026**. Aquest document és un punt de continuació i s'ha d'actualitzar quan canviï l'estat del treball. No substitueix la comprovació dels fitxers ni de Git.

## Traspàs

Apartat de relleu entre assistents (vegeu «Relleu entre assistents» a [AGENTS.md](AGENTS.md)).

- **Darrer torn:** Claude Code, 5 de novembre de 2026.
- **Darrers commits:** `07858de` (exercicis 2.23, 2.30 i 2.34 de càlcul, ja publicat abans d'aquest traspàs), `d0cfc18` (criteris d'ús del material de consulta local) i el commit que actualitza aquest traspàs, tots enviats a `origin/main`.
- **Torn anterior de Codex (4 de novembre de 2026):** va afegir `Co-Authored-By: Codex <noreply@openai.com>` als 268 commits d'octubre i va reescriure l'historial publicat a petició del professor. Les dates, els arbres i les identitats es van preservar. Les branques `backup-*` es van esborrar.
- **Hashes corregits:** els documents citaven commits anteriors a la reescriptura. S'han substituït pels de `main`: `9304002` (calculadora de matrius), `722173c` (gràfiques en mode dia i fosc) i `cedcf71` (nou format dels PDF de teoria).
- **Material de consulta:** `materials/` és local i ignorada per Git. El criteri d'ús és a `AGENTS.md` i l'inventari, a `materials/INVENTARI.md`.
- **Fora del repositori:** l'examen «2_PP1.2 Domini, valor absolut, funcions a trossos i optimització» i el seu solucionari són a Google Drive. Les fonts del solucionari són a `tmp/solucionari_2_PP1.2/` i la còpia a `output/pdf/`, totes dues ignorades per Git. El professor revisa l'examen abans de donar-lo per bo.
- **Sense commit:** res dels fitxers versionats.
- **Comprovat:** els hashes citats als documents són a `origin/main`; `git diff --check` net. Els commits d'aquest traspàs no modifiquen el web.
- **Pròxim pas:** cap d'immediat; esperar les indicacions del professor.
- **Decisions pendents del professor:** les indicades a «Darrera tasca».

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
- Pràctica de sistemes (tema 3), criteris del professor de l'1 de novembre de 2026: pocs exercicis mecànics, que obliguin a pivotar (intercanviar files) i a combinar files amb els dos coeficients per no treballar amb fraccions; problemes contextualitzats amb percentatges (borsa, parts del preu i benefici, trams de facturació, IVA...), amb resultats percentuals exactes i no aproximats; paràmetre $\lambda$ a les solucions dels SCI, com a la teoria. Els problemes PAU d'àlgebra van en una secció pròpia «Problemes PAU» de `exercicis_algebra.md`, amb numeració `PAU.AL.n`. Criteri del professor: enunciat literal de la PAU (sense «basat en»), amb els apartats i la puntuació originals; només s'adapta la tipografia (fórmules, unitats, separació de milers). Falta decidir si s'aplica el mateix criteri als PAU de càlcul, que ara són adaptats.

## Pendents i límits coneguts

| Element | Estat i pròxim pas |
|:--|:--|
| Context exclusiu de converses antigues | L'1 de novembre de 2026 s'han fet dues cerques dirigides de context d'aquest projecte. No han identificat criteris docents nous confirmats pel professor que faltessin als documents. La recuperació és parcial i no equival a llegir íntegrament totes les converses ni a conservar-ne els adjunts. No donar el traspàs per exhaustiu. |
| Recull d'exercicis d'àlgebra | No hi ha un PDF d'exercicis d'àlgebra entre els fitxers versionats consultats, ni un generador específic identificat. La pàgina tampoc inclou l'enllaç inicial ni la classe de recull que demana `AGENTS.md`. El professor ha indicat (2 de novembre de 2026) que es farà quan s'acabin els exercicis d'àlgebra; llavors caldrà crear-lo i aplicar-hi la maquetació comuna. |
| Desenvolupament dels temes 5–7 | Contingut previst, sense encàrrec actiu per redactar-lo en aquesta conversa. Desenvolupar-lo quan el professor ho demani. |
| Nou format dels PDF de teoria | Acordat amb el professor el 3 de novembre de 2026: `scripts/genera_pdf_tema.py` i `sources/llibre/apunts.sty`, adaptats dels apunts de Matemàtiques I de Jordi i Ignasi Irazuzta. Els quatre temes s'han generat i revisat en local (18, 61, 20 i 32 pàgines) i s'han publicat el 3 de novembre de 2026 (commit `cedcf71`). Verificat al web públic: els quatre enllaços amb la versió nova i els quatre PDF idèntics als locals. La portada porta el correu del professor, com ha indicat. El generador detecta els temes des de `zensical.toml`, incrementa el `?v=n` en publicar i genera fulls de revisió; provat amb temes de mentida en una còpia, encara no amb cap tema real nou. Els scripts antics dels temes amb Edge i el seu CSS s'han retirat. |
| Figures del tema 2 | Etiquetes de les figures 2.12, 2.14–2.18 i 2.23–2.25 corregides als `.tex`, amb els SVG regenerats i `?v=n` incrementat. Comprovat en local, al web i al PDF. Queden sense tocar la figura 2.11, amb $x=1$ molt a prop de la corba, i l'espai en blanc de la pàgina 37 del PDF, perquè la figura 2.19 no hi cap. |
| Mode fosc de les figures | Implementat i publicat el 2 de novembre de 2026 (commit `722173c`; criteri a `GUIA_GRAFIQUES.md`). En mode fosc els colors són els que dona el filtre i no coincideixen exactament amb els de la referència: la corba surt més lila i el verd, més fosc. Els PDF dels apunts conserven el fons de figura `#f1f4fa`. |
| Figures del tema 1 | Etiquetes de les figures 1.2, 1.3, 1.6, 1.7, 1.9, 1.10 i 1.11 corregides als `.tex`, amb els SVG regenerats i `?v=n` incrementat. Comprovat en local, al web i al PDF. Les figures 1.5 i 1.8 tenen alguna etiqueta justa, però llegible. |
| Converses de Codex | Abans d'esborrar-les, conservar els adjunts o els acords que no s'hagin recuperat. |
| Revisió d'emmagatzematge de GitHub Actions | La cerca ha recuperat una comprovació que va quedar pendent a la conversa del 29 d'octubre de 2026: l'espai dels artefactes d'Actions. No s'ha comprovat en aquesta tasca. Les xifres històriques de consum o mida d'aquella conversa no descriuen necessàriament l'estat actual. |

### Abast del context recuperat

La segona cerca ha aclarit que les recomanacions del 28 d'octubre de 2026 sobre repartir contingut matemàtic, codi i PDF entre models eren propostes de l'assistent; no s'han convertit en instruccions del professor. Tampoc s'han traslladat restriccions de programacions antigues o d'altres cursos que no es poden atribuir al web actual.

## Darrera tasca

- **Objectiu:** refer la pràctica de sistemes del tema 3 i començar els problemes PAU d'àlgebra, segons les indicacions del professor (1 i 2 de novembre de 2026).
- **Fitxers afectats:** `docs/algebra-lineal/per-practicar/exercicis_algebra.md` (edició directa, sense generador), `docs/algebra-lineal/index.md` i `docs/algebra-lineal/sistemes-gauss/index.md`.
- **Exercicis 3.1–3.12:** 3.1 lineals; 3.2 i 3.3 amb sistemes propis, diferents dels de la teoria. Mecànics de Gauss: 3.4 SCD amb la fila de pivot $1$ a la tercera posició, 3.5 i 3.6 SCD, 3.7 SCI i 3.8 SI. Problemes amb percentatges: borsa amb validació d'una solució negativa (3.9), parts del preu amb IVA i benefici (3.10), trams de la factura de la llum (3.11) i tipus d'IVA d'una compra, on la dada afegida dona SCD, SCI o SI (3.12).
- **Problemes PAU:** a continuació dels exercicis, a la mateixa pàgina, sense paràgraf de presentació i amb el quadre final «Recursos per continuar practicant», com a càlcul.

  | Problema | Procedència |
  |:--|:--|
  | PAU.AL.1 | 2026 ordinària, sèrie 1, ex. 2 |
  | PAU.AL.2 | 2026 extraordinària, sèrie 2, ex. 2 |
  | PAU.AL.3 | 2026 ordinària, sèrie 1, ex. 4, opció B, 4.2 |
  | PAU.AL.4 | 2026 extraordinària, sèrie 2, ex. 4, opció A, 4.2 |
  | PAU.AL.5 | 2025 ordinària, sèrie 1, ex. 1 |
  | PAU.AL.6 | 2025 ordinària, sèrie 4, ex. 1 |
  | PAU.AL.7 | 2025 extraordinària, sèrie 3, ex. 2 |
  | PAU.AL.8 | 2024 ordinària, sèrie 1, q. 2, igual que la sèrie 0 de 2025, ex. 2 |
  | PAU.AL.9 | 2024 ordinària, sèrie 5, q. 2 |
  | PAU.AL.10 | 2024 extraordinària, sèrie 3, q. 2 |
  | PAU.AL.11 | 2023 ordinària, sèrie 1, q. 3 |
  | PAU.AL.12 | 2023 ordinària, sèrie 5, q. 3 |
  | PAU.AL.13 | 2023 extraordinària, sèrie 2, q. 1 |
  | PAU.AL.14 | 2022 ordinària, sèrie 2, q. 1 |

- **Fonts:** els enunciats surten del recull de Toomates `materials/Recopilació PAU/Pauccss.pdf` (versió del 6 de setembre de 2026). Les imatges del document de Google «Problemes de Sistemes PAU» no es poden obrir (error 403): la correspondència es basa en l'any, la convocatòria i la sèrie, i els enunciats no s'han comparat amb les imatges.
- **Comprovacions:** solucions i transformacions de fila verificades amb Python; cerca automàtica sense sistemes repetits entre els exercicis i la teoria; `zensical.exe build --clean` acaba amb `No issues found`; `git diff --check` net; pàgina revisada al navegador local (26 desplegables tancats, numeració correcta, cap fórmula més ampla que la columna a 1280 px, cap recurs amb error).
- **Publicació:** el professor ha demanat publicar-ho; s'envia a `main` en el commit d'aquesta tasca.
- **Pendent de decisió del professor:** incorporar o no l'exercici 4, opció B, a) de la sèrie 4 de 2025 (fàbrica de pasta), que podria ser l'entrada opcional de la seva llista; aplicar o no l'enunciat literal als PAU de càlcul. Per verificar el web públic, cal buscar-hi «Activitats d'una associació».
