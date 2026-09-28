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

## Edició des de GitHub

També pots editar un fitxer `.tex` directament al web de GitHub. Quan confirmis el canvi, GitHub Actions compilarà totes les figures TikZ abans de construir i publicar el web amb Zensical. La publicació pot trigar uns minuts perquè el servidor ha de preparar LaTeX.

## Compilació manual de reserva

Des de l'arrel del projecte pots regenerar totes les figures amb:

```powershell
& ".\scripts\compila_figures.ps1"
```

Per regenerar només una figura:

```powershell
& ".\scripts\compila_figures.ps1" -Source ".\figures\tikz\analisi\definicio_derivada.tex"
```

Els fitxers temporals de LaTeX es guarden dins de `tmp`, una carpeta ignorada per Git.
