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

El procés de conversió afegeix automàticament un fons blanc a l'SVG. No cal definir-lo a cada document TikZ.

## Numeració

Les figures es numeren amb el número del tema i el seu ordre d'aparició dins del tema:

- tema 1: **Figura 1.1**, **Figura 1.2**, **Figura 1.3**...
- tema 2: **Figura 2.1**, **Figura 2.2**, **Figura 2.3**...

La numeració i el títol s'escriuen al peu de la figura dins del document Markdown. El text **Figura tema.número** enllaça amb el fitxer `.tex` corresponent del repositori. El fitxer font es modifica a l'ordinador, dins de `figures/tikz`, amb VS Code.

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
