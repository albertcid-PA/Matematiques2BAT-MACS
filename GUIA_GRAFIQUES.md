# Com editar les gràfiques

Les gràfiques matemàtiques del projecte tenen dos fitxers relacionats:

- `figures/tikz/.../nom.tex`: codi font editable amb TikZ i PGFPlots.
- `docs/img/.../nom.svg`: resultat que mostra el navegador.

## Criteris

- Mantén una escala coherent, etiquetes llegibles i cap text a sobre de les corbes o de les acotacions.
- En figures geomètriques, dibuixa amb línia discontínua només les arestes realment ocultes.
- Després de regenerar una figura, revisa visualment el resultat abans de publicar.
- Totes les referències a l'SVG dins del Markdown porten `?v=n`, perquè el navegador no reutilitzi una versió antiga. `scripts/compila_figures.ps1` el puja sol: compara l'SVG abans i després de compilar i, si ha canviat, suma 1 al número a totes les referències de `docs/` i `sources/`. Si n'ha tocat alguna font de `sources/calcul/`, regenera també la pràctica de càlcul. Una figura nova s'ha de citar a mà amb `?v=1`. Si la figura surt en un PDF, regenera'l.

## Actualització automàtica

1. Obre tota la carpeta `Apunts 2n BAT` amb Visual Studio Code.
2. Obre el fitxer `.tex` de la gràfica.
3. Modifica el codi TikZ o PGFPlots.
4. Desa'l amb `Ctrl+S`.

LaTeX Workshop executarà automàticament la recepta **TikZ a SVG per al web**. El fitxer SVG s'actualitzarà dins de `docs/img`, el `?v=n` de les referències pujarà si la figura ha canviat (cada desada amb canvis el torna a pujar) i, si el servidor de Zensical està actiu, el navegador mostrarà el canvi.

No cal editar mai l'SVG manualment.

El procés de conversió conserva el fons transparent de l'SVG, i el web mostra la figura directament sobre el fons de la pàgina. No cal definir el fons a cada document TikZ.

## Colors i mode fosc

Cada figura té un sol SVG, dibuixat per al mode dia. En mode fosc, `docs/stylesheets/extra.css` l'adapta amb el filtre `invert(1) hue-rotate(180deg)`: el negre passa a clar i els colors conserven la tonalitat. Als PDF i en imprimir, la figura es manté en la versió de dia.

| Element | Color |
|:--|:--|
| Corba principal | `#3F51B5` |
| Segona corba o tram | `#2E9D5B`; per al text, `!80!black` perquè tingui prou contrast |
| Punts destacats, màxims, assímptotes en vermell | `#D32F2F` |
| Accent i guies | `#526CFE` |
| Tercer color, si cal | `#D97706` |
| Guies neutres | `#6B7280` |
| Eixos i marques | `black!55` |
| Quadrícula | `black!15` |

El gràfic de l'analitzador de funcions segueix el mateix criteri: `docs/javascripts/function-analyzer.js` dibuixa el canvas amb aquests colors, sense fons, i el mateix filtre l'adapta al mode fosc. Dibuixa'l sempre amb els colors de dia i no hi afegeixis colors específics per al mode fosc.

No facis servir `opacity` a TikZ: en passar per `dvisvgm`, la transparència s'encomana als elements dibuixats després i les corbes gairebé desapareixen. Fes servir colors opacs.

## Numeració

Les figures es numeren amb el número del tema i el seu ordre d'aparició dins del tema:

- tema 1: **Figura 1.1**, **Figura 1.2**, **Figura 1.3**...
- tema 2: **Figura 2.1**, **Figura 2.2**, **Figura 2.3**...
- problemes PAU de càlcul: **Figura PAU.C.1**, **Figura PAU.C.2**, **Figura PAU.C.3**...
- problemes PAU d'àlgebra lineal: **Figura PAU.AL.1**, **Figura PAU.AL.2**, **Figura PAU.AL.3**...
- problemes PAU de probabilitat i estadística: **Figura PAU.PE.1**, **Figura PAU.PE.2**, **Figura PAU.PE.3**...

La numeració és consecutiva i utilitza només nombres enters. Si una figura es divideix en diverses figures independents, cal assignar un número nou a cadascuna i renumerar les figures posteriors; no s'hi afegeixen lletres com ara `2.13a` o `2.13b`.

La numeració i el títol s'escriuen al peu de la figura dins del document Markdown. El text **Figura tema.número**, **Figura PAU.C.número**, **Figura PAU.AL.número** o **Figura PAU.PE.número** enllaça amb el fitxer `.tex` corresponent del repositori. El fitxer font es modifica a l'ordinador, dins de `figures/tikz`, amb VS Code.

## Publicació

LaTeX, TikZ i PGFPlots només s'executen a l'ordinador. Abans de publicar cal comprovar que cada `.tex` modificat hagi generat el seu `.svg` actualitzat.

Git desa i publica tots dos fitxers:

- el `.tex`, perquè la figura continuï sent editable;
- l'`.svg`, perquè Zensical la pugui mostrar al web.

El servidor de GitHub no instal·la ni executa LaTeX. GitHub Actions construeix directament el web de Zensical amb els SVG generats localment.

## Revisió i comprovació

Després de regenerar figures, prepara un full de revisió:

```powershell
& ".\.venv\Scripts\python.exe" scripts\revisa_figures.py
```

Per a cada SVG modificat respecte de l'últim commit, mostra en una fila la versió anterior, la nova i la nova en mode fosc, amb el peu de la figura. Ho desa a `tmp\revisio-figures\`: `index.html` i, amb Edge, imatges `revisio_n.png` de vuit figures cadascuna. Amb `--totes` inclou totes les figures; amb `--des origin/main`, totes les que encara no s'han publicat.

`scripts/comprova_figures.py` revisa totes les figures de `docs/`: que cada una tingui un peu «Figura n.» enllaçat al seu `.tex`, que el número coincideixi amb el nom del fitxer (`fig_2_19_…` ↔ 2.19, `fig_pau_c_3_…` ↔ PAU.C.3), que la referència porti `?v=n`, que no hi hagi números repetits ni forats, que a les pàgines de teoria els números vagin en ordre d'aparició i que no quedin `.tex` sense SVG, SVG sense `.tex` ni SVG sense citar. El hook `pre-commit` l'executa en cada commit.

## Compilació manual de reserva

Des de l'arrel del projecte pots regenerar totes les figures amb:

```powershell
& ".\scripts\compila_figures.ps1"
```

Per regenerar només una figura:

```powershell
& ".\scripts\compila_figures.ps1" -Source ".\figures\tikz\calcul\fig_1_11_definicio_derivada.tex"
```

Els fitxers temporals de LaTeX es guarden dins de `tmp`, una carpeta ignorada per Git.
