# Estat del projecte

Data de l'inventari inicial: **1 de novembre de 2026**. Aquest document és un punt de continuació i s'ha d'actualitzar quan canviï l'estat del treball. No substitueix la comprovació dels fitxers ni de Git.

## Traspàs

Apartat de relleu entre assistents (vegeu «Relleu entre assistents» a [AGENTS.md](AGENTS.md)).

- **Darrer torn:** Claude Code, 9 de novembre de 2026, després d'un torn de Codex el mateix dia.
- **Reescriptura de l'historial (Codex, 9 de novembre de 2026, a petició del professor):** s'ha afegit `Co-Authored-By: Codex <noreply@openai.com>` als 27 commits de setembre posteriors a `c2515fe` i s'ha fet `push --force` a `main` (ara `b9e0b3d`, 346 commits). Els 16 commits anteriors i `c2515fe` no han canviat, per conservar la signatura verificada de GitHub de `c2515fe`; per això aquests 16 continuen sense coautoria. Han canviat tots els hashes posteriors a `c2515fe`.
- **Comprovat per Claude Code:** els 346 commits tenen els mateixos arbres, autors i dates que a la branca `backup-abans-coautor`; només difereix el missatge dels 27 commits, amb la línia afegida. `c2515fe` continua verificat a GitHub. GitHub Actions 42660510169 ha acabat bé sobre `b9e0b3d` i el web públic respon. Els hashes citats a aquest fitxer i a `GUIA_MANTENIMENT.md` s'han substituït pels nous.
- **Branca de seguretat:** `backup-abans-coautor` (historial anterior, a `b4a155e`) s'ha esborrat després de la verificació.
- **Feina anterior publicada a `origin/main` (Claude Code, 7 de novembre de 2026):**
  - `ddf0ac5`: instruccions simplificades (patch del professor). `AGENTS.md` conserva els criteris i remet a les guies; la norma d'informar per separat del que s'ha modificat, comprovat i pendent hi passa des de `CLAUDE.md`.
  - `1934225`: Zensical 0.1.0 fixat a `.venv` i a `.github/workflows/docs.yml` (abans el flux instal·lava la darrera versió). Verificat: el flux instal·la la 0.1.0, compila amb `No issues found` i el web públic respon.
  - `3876f82`: `scripts/compila_figures.ps1` puja sol el `?v=n` dels SVG que canvien i regenera la pràctica de càlcul si cal.
  - `383b59d`: `scripts/comprova_sincronia.py` avisa de `.tex` sense SVG, `?v=n` sense pujar, pràctica de càlcul desfasada i PDF de tema o recull sense regenerar.
  - `7a09047`: hook versionat `.githooks/pre-commit`, activat en aquesta carpeta amb `git config core.hooksPath .githooks`. En un altre clon cal tornar-lo a activar.
  - `b365c74`: `scripts/revisa_figures.py` (full de revisió a `tmp/revisio-figures/`: abans, ara i mode fosc) i `scripts/comprova_figures.py` (peus, enllaços als `.tex`, numeració, `?v=n` i fitxers sense parella), que el hook també executa.
- **Per a Codex:** el hook pot aturar un commit; cal corregir el que indiqui i no saltar-lo amb `--no-verify` sense permís del professor. Les eines són a «Comprovació i publicació» de `GUIA_MANTENIMENT.md` i a «Revisió i comprovació» de `GUIA_GRAFIQUES.md`.
- **Comprovat:** cada eina s'ha provat amb errors simulats (després restaurats) i sense falsos positius en trams reals de l'historial; el hook atura commits incorrectes i deixa passar els correctes des de Git Bash i PowerShell; `zensical build --clean` sense incidències; les publicacions de GitHub Actions han acabat bé.
- **`?v=n`:** es manté com a enter que s'incrementa, com proposava l'assistent; el professor ha aprovat l'script que el puja, però no ha decidit expressament descartar una versió calculada a partir del contingut.
- **Material de consulta:** `materials/` és local i ignorada per Git. El criteri d'ús és a `AGENTS.md` i l'inventari, a `materials/INVENTARI.md`.
- **Fora del repositori:** l'examen «2_PP1.2 Domini, valor absolut, funcions a trossos i optimització» i el seu solucionari són a Google Drive. Les fonts del solucionari són a `tmp/solucionari_2_PP1.2/` i la còpia a `output/pdf/`, totes dues ignorades per Git. El professor revisa l'examen abans de donar-lo per bo.
- **Recull de càlcul (Claude Code, 12 de novembre de 2026):** el recull d'enunciats té portada i índex d'una pàgina amb números de pàgina i marcadors (`sources/llibre/portada_recull_calcul.tex`, `scripts/munta_recull_pdf.py`). A la pàgina d'exercicis hi ha també un enllaç discret a l'«edició en lletra gran» (`scripts/genera_pdf_recull_calcul_lletra_gran.py`); per indicació del professor no s'hi esmenta la dislèxia. Es publica en el commit d'aquesta tasca.
- **Exercicis del tema 4 (Claude Code, 12 i 13 de novembre de 2026):** implementats, comprovats en local i publicats a petició del professor el 13 de novembre de 2026, en el commit d'aquesta tasca. Detall a «Darrera tasca».
- **Pròxim pas:** el professor continuarà la revisió dels exercicis del tema 4 el 14 de novembre de 2026. Queda pendent la seva decisió sobre PAU.AL.25 (inversa en funció d'un paràmetre).
- **Decisions pendents del professor:** les indicades a «Darrera tasca» i l'ordre de la figura 2.28: a la pàgina de pràctica de càlcul surt a l'enunciat de l'exercici 2.33, després de les figures 2.29–2.41 de les solucions anteriors, perquè els números segueixen l'ordre del recull d'enunciats. `comprova_figures.py` no controla l'ordre a les pàgines de pràctica.

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
| Recull d'exercicis d'àlgebra | No hi ha cap PDF d'exercicis d'àlgebra ni generador, i la pàgina no té l'enllaç inicial ni la classe de recull que demana `AGENTS.md`. El professor havia indicat (2 de novembre de 2026) que es faria en acabar els exercicis d'àlgebra; el 12 de novembre de 2026, amb els del tema 4 ja fets, ha indicat que de moment només es faci el web. Queda pendent fins que ho demani. |
| Desenvolupament dels temes 5–7 | Contingut previst, sense encàrrec actiu per redactar-lo en aquesta conversa. Desenvolupar-lo quan el professor ho demani. |
| Nou format dels PDF de teoria | Acordat amb el professor el 3 de novembre de 2026: `scripts/genera_pdf_tema.py` i `sources/llibre/apunts.sty`, adaptats dels apunts de Matemàtiques I de Jordi i Ignasi Irazuzta. Els quatre temes s'han generat i revisat en local (18, 61, 20 i 32 pàgines) i s'han publicat el 3 de novembre de 2026 (commit `86cd48b`). Verificat al web públic: els quatre enllaços amb la versió nova i els quatre PDF idèntics als locals. La portada porta el correu del professor, com ha indicat. El generador detecta els temes des de `zensical.toml`, incrementa el `?v=n` en publicar i genera fulls de revisió; provat amb temes de mentida en una còpia, encara no amb cap tema real nou. Els scripts antics dels temes amb Edge i el seu CSS s'han retirat. |
| Figures del tema 2 | Etiquetes de les figures 2.12, 2.14–2.18 i 2.23–2.25 corregides als `.tex`, amb els SVG regenerats i `?v=n` incrementat. Comprovat en local, al web i al PDF. Queden sense tocar la figura 2.11, amb $x=1$ molt a prop de la corba, i l'espai en blanc de la pàgina 37 del PDF, perquè la figura 2.19 no hi cap. |
| Mode fosc de les figures | Implementat i publicat el 2 de novembre de 2026 (commit `11a8561`; criteri a `GUIA_GRAFIQUES.md`). En mode fosc els colors són els que dona el filtre i no coincideixen exactament amb els de la referència: la corba surt més lila i el verd, més fosc. Els PDF dels apunts conserven el fons de figura `#f1f4fa`. |
| Figures del tema 1 | Etiquetes de les figures 1.2, 1.3, 1.6, 1.7, 1.9, 1.10 i 1.11 corregides als `.tex`, amb els SVG regenerats i `?v=n` incrementat. Comprovat en local, al web i al PDF. Les figures 1.5 i 1.8 tenen alguna etiqueta justa, però llegible. |
| Converses de Codex | Abans d'esborrar-les, conservar els adjunts o els acords que no s'hagin recuperat. |
| Revisió d'emmagatzematge de GitHub Actions | La cerca ha recuperat una comprovació que va quedar pendent a la conversa del 29 d'octubre de 2026: l'espai dels artefactes d'Actions. No s'ha comprovat en aquesta tasca. Les xifres històriques de consum o mida d'aquella conversa no descriuen necessàriament l'estat actual. |

### Abast del context recuperat

La segona cerca ha aclarit que les recomanacions del 28 d'octubre de 2026 sobre repartir contingut matemàtic, codi i PDF entre models eren propostes de l'assistent; no s'han convertit en instruccions del professor. Tampoc s'han traslladat restriccions de programacions antigues o d'altres cursos que no es poden atribuir al web actual.

## Darrera tasca

- **Objectiu:** exercicis del tema 4 (matrius) i problemes PAU de matrius dels darrers anys, a partir de la teoria del web (12 de novembre de 2026). Per indicació del professor, només el web: cap PDF.
- **Fitxers afectats:** `docs/algebra-lineal/per-practicar/exercicis_algebra.md` (secció «Tema 4. Matrius» i subsecció «Matrius» dins de «Problemes PAU») i `docs/algebra-lineal/matrius/index.md` (apartat «Per practicar» amb enllaç a `#tema-4-matrius`).
- **Exercicis propis 4.1–4.22**, ordenats com la teoria, sense determinants ni estudi del rang en funció d'un paràmetre (sí que hi ha coeficients desconeguts, com a les PAU): tipus, transposada i $a_{ij}$ (4.1); igualtat (4.2); dimensions i operacions (4.3); $(A+B)^2$ i no commutativitat (4.4); elements desconeguts del producte (4.5); matrius que commuten (4.6); coeficients desconeguts amb $AB=BA$ i $D^2$ donada (4.7); potències fins a $A^{12}$ i inversa (4.8); comprovar per producte quina matriu és la inversa i per què no s'inverteix element a element (4.9); inversa per coeficients (4.10); Gauss-Jordan amb dues matrius $2\times2$ invertibles (una amb intercanvi de files), una $2\times2$ sense inversa i una $3\times3$ (4.11); decidir si quatre matrius $2\times2$ tenen inversa (4.12); inversa a partir d'$A^2=7A-2I$ (4.13); equacions sense inversa, $X+A=B$ i $3X-2A=5B$ (4.14); aïllament simbòlic de $X$ en sis equacions, sense matrius concretes (4.15); $AX=B$ i $XA=B$ (4.16); $AX+B=3X$ i $XA-X=C$ (4.17); sistema matricial (4.18); sistema lineal amb la inversa i dos termes independents (4.19); problemes: empresa de càtering (4.20), quotes de mercat amb $M^2$ i $M^{-1}$ (4.21) i missatge xifrat (4.22). Els exercicis 4.9, 4.10 i 4.14 s'han afegit després de comparar amb el llistat del curs 2025-26 (diari de classe de `materials/programació d'aula 25-26/`). Les solucions efectuen els productes dins la matriu resultat i, quan una igualtat de matrius dona equacions, mostren la matriu amb les expressions abans del sistema (indicacions del professor del 12 i el 13 de novembre de 2026). El professor ha fet treure un exercici d'inversa en funció d'un paràmetre i un càlcul d'$A^{100}$, perquè no entren a les PAU; els coeficients desconeguts sí que hi entren. Els enunciats són propis. Les matrius dels enunciats s'han comparat amb el text del solucionari (`materials/Solucionari 2n BAT/`, sobretot la unitat 2, de matrius) i s'han canviat les que hi coincidien, sense tenir en compte els signes; el context de prestatgeries i fusta de l'exercici del càtering (4.20) s'ha substituït perquè s'assemblava al problema inicial de la unitat 2. La comparació és automàtica sobre el text extret, que perd els signes i la disposició de les matrius $3\times3$; el llibre (`2n BAT MACS.pdf`) no té text i no s'ha comparat directament.
- **Problemes PAU de matrius**, enunciat literal amb apartats i puntuació originals. Del 2025 i el 2026 només hi ha apartats de matrius dins d'exercicis mixtos (exercici 4); s'han deixat fora els de 2025 extraordinària, sèrie 3 (cotxes, barreja matrius i probabilitat al mateix apartat) i de la sèrie 0 de 2025 (depèn d'una funció de l'apartat a).

  | Problema | Procedència |
  |:--|:--|
  | PAU.AL.15 | 2026 ordinària, sèrie 1, ex. 4, opció A, 4.2 |
  | PAU.AL.16 | 2026 extraordinària, sèrie 2, ex. 4, opció B, 4.2 |
  | PAU.AL.17 | 2025 ordinària, sèrie 1, ex. 4, opció B, a) |
  | PAU.AL.18 | 2025 ordinària, sèrie 4, ex. 4, opció A, a) |
  | PAU.AL.19 | 2024 ordinària, sèrie 1, q. 4 |
  | PAU.AL.20 | 2024 ordinària, sèrie 5, q. 4 |
  | PAU.AL.21 | 2024 extraordinària, sèrie 3, q. 4 |
  | PAU.AL.22 | 2023 ordinària, sèrie 1, q. 2 |
  | PAU.AL.23 | 2023 ordinària, sèrie 5, q. 5 |
  | PAU.AL.24 | 2023 extraordinària, sèrie 2, q. 5 |
  | PAU.AL.25 | 2022 ordinària, sèrie 2, q. 5 |
  | PAU.AL.26 | 2022 ordinària, sèrie 5, q. 3 |
  | PAU.AL.27 | 2022 extraordinària, sèrie 3, q. 5 |

- **Fonts:** enunciats transcrits de les imatges de `materials/Recopilació PAU/Pauccss.pdf` (Toomates, versió del 6 de setembre de 2026). A examenselectivitat.cat el tema «Matrius» comença per 2026 ordinària, sèrie 1, i el web té les mateixes sèries per any; no s'hi ha recorregut problema per problema.
- **Procedència de PAU.AL.1–14** (tasca del 2 de novembre de 2026): 2026 ord. S1 ex. 2; 2026 extr. S2 ex. 2; 2026 ord. S1 ex. 4 B 4.2; 2026 extr. S2 ex. 4 A 4.2; 2025 ord. S1 ex. 1; 2025 ord. S4 ex. 1; 2025 extr. S3 ex. 2; 2024 ord. S1 q. 2 (= sèrie 0 de 2025, ex. 2); 2024 ord. S5 q. 2; 2024 extr. S3 q. 2; 2023 ord. S1 q. 3; 2023 ord. S5 q. 3; 2023 extr. S2 q. 1; 2022 ord. S2 q. 1.
- **Comprovacions:** tots els resultats i les transformacions de fila verificats amb Python (fraccions exactes); `zensical.exe build --clean` acaba amb `No issues found`; `git diff --check`, `comprova_sincronia.py` i `comprova_figures.py` correctes; pàgina revisada al navegador local: 61 desplegables tancats, cap error de KaTeX, cap fórmula ni taula més ampla que la columna a 1024 px ni a 1280 px, ordre de pestanyes correcte i enllaç de l'índex del tema 4 cap a `#tema-4-matrius`.
- **Pendent de decisió del professor:** mantenir o treure PAU.AL.25, que estudia la invertibilitat en funció d'un paràmetre; incorporar o no l'exercici 4, opció B, a) de la sèrie 4 de 2025 (fàbrica de pasta, sistemes); aplicar o no l'enunciat literal als PAU de càlcul. Per verificar el web públic, cal buscar-hi «missatge xifrat» o «PAU.AL.27».
