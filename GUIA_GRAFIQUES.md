# Com editar les gràfiques

Les gràfiques matemàtiques del projecte tenen dos fitxers relacionats:

- `figures/tikz/.../nom.tex`: codi font editable amb TikZ i PGFPlots.
- `docs/img/.../nom.svg`: resultat que mostra el navegador.

## Actualització automàtica

1. Obre tota la carpeta `Apunts 2n BAT` amb Visual Studio Code.
2. Obre el fitxer `.tex` de la gràfica.
3. Modifica el codi TikZ o PGFPlots.
4. Desa'l amb `Ctrl+S`.

LaTeX Workshop executarà automàticament la recepta **TikZ a SVG per al web**. El fitxer SVG s'actualitzarà dins de `docs/img` i, si el servidor de Zensical està actiu, el navegador mostrarà el canvi.

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

## Compilació manual de reserva

Des de l'arrel del projecte pots regenerar totes les figures amb:

```powershell
& ".\scripts\compila_figures.ps1"
```

Per regenerar només una figura:

```powershell
& ".\scripts\compila_figures.ps1" -Source ".\figures\tikz\calcul\fig_1_4_definicio_derivada.tex"
```

Els fitxers temporals de LaTeX es guarden dins de `tmp`, una carpeta ignorada per Git.
