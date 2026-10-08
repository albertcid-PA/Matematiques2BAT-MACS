# Resultats dels exercicis de càlcul {.pdf-exercise-collection}

Aquest document permet comprovar els resultats del recull d'exercicis. Abans de consultar-lo, resol l'exercici i deixa escrit el procediment: en una prova, el resultat final sense justificació pot no ser suficient.

## Tema 1. Repàs de límits i derivades

### Límits i continuïtat

**1.1.**

- **a)** $+\infty$, $+\infty$, $-1$ i $+\infty$.
- **b)** $4$, $-1$, $1$ i $2$.

**1.2.** **a)** $3$; **b)** $1$; **c)** $-1$; **d)** no existeix; **e)** $3$; **f)** $0$; **g)** $+\infty$; **h)** $+\infty$; **i)** $-2$.

**1.3.** **a)** $3$; **b)** $+\infty$; **c)** $\frac12$; **d)** $4$; **e)** $0$; **f)** $\frac32$; **g)** $+\infty$; **h)** $1$; **i)** $+\infty$; **j)** $+\infty$; **k)** $3$; **l)** $-\infty$.

**1.4.**

| Apartat | Resultat |
|:--|:--|
| **a)** | $3$ |
| **b)** | $-2$ |
| **c)** | $\lim_{x\to2^-}=-\infty$, $\lim_{x\to2^+}=+\infty$; el límit no existeix. |
| **d)** | $+\infty$ pels dos costats. |
| **e)** | $1$ |
| **f)** | $-1$ |
| **g)** | $0$ |
| **h)** | $\lim_{x\to3^-}=-\infty$, $\lim_{x\to3^+}=+\infty$; el límit no existeix. |

**1.5.** $D_f=\mathbb{R}\setminus\{-2,1\}$. $f(0)=-1$; $\lim_{x\to-2}f(x)=-\frac13$; $\lim_{x\to1^-}f(x)=-\infty$ i $\lim_{x\to1^+}f(x)=+\infty$; $\lim_{x\to\pm\infty}f(x)=0$. Hi ha una discontinuïtat evitable a $x=-2$, amb forat $(-2,-\frac13)$, una asímptota vertical $x=1$ i una asímptota horitzontal $y=0$.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfica de la funció de l'exercici 1.5, amb un forat i les asímptotes vertical i horitzontal](../img/calcul/fig_1_14_resultat_exercici_1_5.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_14_resultat_exercici_1_5.tex">Figura 1.14.</a></strong> Representació de la funció de l'exercici 1.5.</figcaption>
</figure>

**1.6.** $D_g=\mathbb{R}\setminus\{0,4\}$. A $x=0$, els límits laterals són $-\infty$ i $+\infty$; a $x=4$, $\lim g(x)=2$. Hi ha una asímptota vertical $x=0$, un forat $(4,2)$ i una asímptota horitzontal $y=1$.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfica de la funció de l'exercici 1.6, amb un forat i les asímptotes vertical i horitzontal](../img/calcul/fig_1_15_resultat_exercici_1_6.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_15_resultat_exercici_1_6.tex">Figura 1.15.</a></strong> Representació de la funció de l'exercici 1.6.</figcaption>
</figure>

**1.7.** $\lim_{x\to2^-}f(x)=0$ i $\lim_{x\to2^+}f(x)=-\infty$: discontinuïtat infinita i asímptota vertical $x=2$ pel costat dret. A més, $\lim_{x\to-\infty}f(x)=0$ i $\lim_{x\to+\infty}f(x)=1$.

**1.8.** $A(60)=e^{1{,}8}\approx6{,}050$ i $\lim_{t\to60^+}A(t)=6$: hi ha un salt d'uns $0{,}050$ milers de litres. $A(t)=4$ quan $t=\frac{\ln4}{0{,}03}\approx46{,}21$ dies i quan $t=120$ dies.

### Derivades

**1.9.** **a)** $f'(x)=3x^2$; **b)** $f'(x)=2x-3$ i $f'(2)=1$; **c)** $f'(x)=\frac1{2\sqrt{x+5}}$ i $f'(4)=\frac16$; **d)** $f'(x)=2e^{2x}$ i $f'(0)=2$.

**1.10.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $20x^3-6x$ | **b)** | $-\frac{12}{x^4}+2$ |
| **c)** | $\frac{3}{2\sqrt{x}}+\frac5{x^2}$ | **d)** | $4x^5+\frac8{x^3}$ |
| **e)** | $7e^x-\frac3x$ | **f)** | $2\cdot5^x\ln5+\frac1{x\ln2}$ |

**1.11.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $e^x(x+1)^2$ | **b)** | $x^2(3\ln x+1)$ |
| **c)** | $6x^2-2x+6$ | **d)** | $\frac{x^2+2x+4}{(x+1)^2}$ |
| **e)** | $\frac{-3x^2-4x+3}{(x^2+1)^2}$ | **f)** | $\frac{1-2\ln x}{x^3}$ |

**1.12.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $14(2x-3)^6$ | **b)** | $\frac{x}{\sqrt{x^2+5}}$ |
| **c)** | $-\frac{12}{(3x+1)^5}$ | **d)** | $(2x-2)e^{x^2-2x}$ |
| **e)** | $\frac{8x}{4x^2+1}$ | **f)** | $-\frac{6x^2}{(x^3+1)^3}$ |
| **g)** | $-\frac{e^x}{2\sqrt{1-e^x}}$ | **h)** | $2\ln3\cdot3^{2x+1}$ |

**1.13.** **a)** $f'(x)=2x+2$, $x\ne0$; **b)** $f'(x)=3x^2$, $x\ne0$; **c)** $f'(x)=\frac52x^{3/2}$; **d)** $f'(x)=1$, $x\ne3$; **e)** $f'(x)=\frac3x$, $x>0$; **f)** $f'(x)=1$, $x>0$.

**1.14.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $\frac{16x}{(x^2+4)^2}$ | **b)** | $\frac{x-1}{(3-x)^3}$ |
| **c)** | $\frac{2\sqrt{x}(2\sqrt{x}+3)}{(\sqrt{x}+1)^2}$ | **d)** | $-\frac56\left(\frac34-\frac{x}{6}\right)^4$ |
| **e)** | $\frac{3\sqrt[4]{2}}{4\sqrt[4]{x}}$ | **f)** | $\frac{9(3\sqrt{x}+2)^5}{\sqrt{x}}$ |

**1.15.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $\frac{x^3(x-8)}{(x-2)^4}$ | **b)** | $\frac{4(x^2-3)^3(x^2+3)}{x^5}$ |
| **c)** | $-\frac{2x(3x+1)}{(3x-1)^5}$ | **d)** | $\frac{2(3x-4)}{(x-3)^3}$ |
| **e)** | $-\frac{6}{(x+2)^2}\sqrt{\frac{2-x}{2+x}}$ | **f)** | $-\frac3{x^2}+\frac{x}{2}$ |

**1.16.** **a)** $\frac{2x}{x^2+3}$; **b)** $-\frac1{2(2-x)}$; **c)** $e^{-2x}\left(\frac1x-2\ln x\right)$; **d)** $6xe^{3x^2-2}$; **e)** $\frac{2x}{(x^2+1)\ln3}$; **f)** $-\frac1{x\ln(2/x)}$.

**1.17.**

| | $f'(x)$ | $f''(x)$ | $f'''(x)$ |
|:--|:--|:--|:--|
| **a)** | $3x^2-4x+4$ | $6x-4$ | $6$ |
| **b)** | $3e^{3x}$ | $9e^{3x}$ | $27e^{3x}$ |
| **c)** | $(x-1)e^x$ | $xe^x$ | $(x+1)e^x$ |
| **d)** | $\frac1{x+3}$ | $-\frac1{(x+3)^2}$ | $\frac2{(x+3)^3}$ |
| **e)** | $-\frac1{(x+2)^2}$ | $\frac2{(x+2)^3}$ | $-\frac6{(x+2)^4}$ |

### Càlcul de coeficients

**1.18.** $a=2$, $b=1$.

**1.19.** $a=1$, $b=2$.

**1.20.** $a=2$, $b=-2$; $h(x)=2x^2-2x+3$.

**1.21.** $a=0$, $b=-3$, $c=2$; $p(x)=x^3-3x+2$. El punt $Q=(1,0)$ és un mínim relatiu perquè $p''(1)=6>0$.

## Tema 2. Aplicacions de les derivades

### Derivabilitat

**2.1.** **a)** no és derivable a $x=-1$ ni a $x=1$; **b)** és derivable en tot $\mathbb{R}$; **c)** no és derivable a $x=1$; **d)** no és derivable a $x=-2$ ni a $x=1$; **e)** no és derivable a $x=-1$; **f)** no és derivable a $x=1$.

**2.2.** $f'(-2)=0$, $f'(1)=0$ i $f'(4)=2$. No és derivable a $x=0$, $x=2$ ni $x=3$.

**2.3.** És contínua i derivable a $x=1$; $f(1)=0$ i $f'(1)=3$.

**2.4.** És contínua a $x=-1$, però no és derivable: $f'_-( -1)=2$ i $f'_+( -1)=1$.

**2.5.** És contínua a $x=2$, però no és derivable: les derivades laterals tendeixen a $-\infty$ i $+\infty$.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfica de la funció de l'exercici 2.5, amb tangent vertical en el punt d'unió](../img/calcul/fig_2_27_resultat_exercici_2_5.svg?v=1){ width="56%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_27_resultat_exercici_2_5.tex">Figura 2.27.</a></strong> Interpretació gràfica de la continuïtat i la no derivabilitat a $x=2$.</figcaption>
</figure>

**2.6.** A $x=-2$ és contínua però no derivable ($f'_- =1$, $f'_+=2$). A $x=1$ presenta una discontinuïtat de salt. $f'(x)=2x+5$ si $x<-2$, $f'(x)=2$ si $-2<x<1$ i $f'(x)=1$ si $x>1$.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfiques de la funció i de la seva derivada en l'exercici 2.6](../img/calcul/fig_2_28_resultat_exercici_2_6.svg?v=1){ width="88%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_28_resultat_exercici_2_6.tex">Figura 2.28.</a></strong> Representació de $f$ i de $f'$ en l'exercici 2.6.</figcaption>
</figure>

**2.7.** **a)** És contínua en tot $\mathbb{R}$ i derivable excepte a $x=2$; $f'(x)=0$ si $x<0$, $f'(0)=0$, $f'(x)=2x$ si $0<x<2$ i $f'(x)=2$ si $x>2$. **b)** És contínua i derivable en tot $\mathbb{R}$; $g'(x)=2e^{2x}$ si $x<0$, $g'(0)=2$ i $g'(x)=2$ si $x>0$.

**2.8.** Qualsevol $k\in\mathbb{R}$.

**2.9.** $m=0$, $n=4$.

**2.10.** $a=3$, $b=-3$.

**2.11.** $m=8$, $n=4$; $f'(x)=0$ només quan $x=2$.

**2.12.** **a)** $a=2$, $b=-4$; **b)** $a=2$, $b=0$.

**2.13.** $a=5$, $b=3$.

**2.14.** $a=\frac13$, $b=1$.

**2.15.**

- **a)** $|x+4|=-(x+4)$ si $x<-4$ i $x+4$ si $x\geq-4$; no és derivable a $x=-4$.
- **b)** $|-2x+4|=-2x+4$ si $x\leq2$ i $2x-4$ si $x>2$; no és derivable a $x=2$.
- **c)** $h(x)=x+1$ si $x<1$ i $h(x)=3x-1$ si $x\geq1$; no és derivable a $x=1$.

### Creixement i extrems

**2.16.**

| Apartat | Creixement i decreixement | Extrems relatius |
|:--|:--|:--|
| **a)** | Creix a $(-\infty,-1)\cup(3,+\infty)$; decreix a $(-1,3)$. | Màxim $(-1,9)$; mínim $(3,-23)$. |
| **b)** | Decreix a $(-\infty,-\sqrt5)\cup(0,\sqrt5)$; creix a $(-\sqrt5,0)\cup(\sqrt5,+\infty)$. | Mínims $(\pm\sqrt5,-16)$; màxim $(0,9)$. |
| **c)** | Creix a $(-\infty,1-\sqrt3)\cup(1+\sqrt3,+\infty)$; decreix a $(1-\sqrt3,1)\cup(1,1+\sqrt3)$. | Màxim $(1-\sqrt3,2-2\sqrt3)$; mínim $(1+\sqrt3,2+2\sqrt3)$. |
| **d)** | Creix a $(-\infty,2)$; decreix a $(2,+\infty)$. | Màxim $(2,e^{-2})$. |
| **e)** | Creix a $(0,\sqrt e)$; decreix a $(\sqrt e,+\infty)$. | Màxim $(\sqrt e,\frac1{2e})$. |
| **f)** | Creix en tot $\mathbb{R}$. | $f'(0)=0$, però no hi ha cap extrem. |
| **g)** | Creix en tot $\mathbb{R}$. | $f'(1)=0$, però no hi ha cap extrem. |

**2.17.**

- **a)** Creix a $(-\infty,-2)\cup(2,+\infty)$ i decreix a $(-2,2)$; màxim $(-2,17)$ i mínim $(2,-15)$.
- **b)** Decreix a $(-\infty,-\sqrt2)\cup(0,\sqrt2)$ i creix a $(-\sqrt2,0)\cup(\sqrt2,+\infty)$; mínims $(\pm\sqrt2,-4)$ i màxim $(0,0)$.
- **c)** Decreix a $(-\infty,0)$ i creix a $(0,+\infty)$; mínim $(0,-4)$.
- **d)** Creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.

### Representació de funcions

<p class="exercise-result-lead"><strong>2.18.</strong> Totes tenen domini $\mathbb{R}$.</p>

| Apartat | Talls i comportament | Monotonia i extrems |
|:--|:--|:--|
| **a)** | Talls $x=\pm1,\pm\sqrt5$; tall $Y=5$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,-\sqrt3)\cup(0,\sqrt3)$; creix a $(-\sqrt3,0)\cup(\sqrt3,+\infty)$. Mínims $(\pm\sqrt3,-4)$ i màxim $(0,5)$. |
| **b)** | Talls $x\approx-3{,}262,-1{,}340,1{,}602$; tall $Y=-2$; branques $-\infty$ i $+\infty$. | Creix a $(-\infty,-3)\cup(1,+\infty)$ i decreix a $(-3,1)$. Màxim $(-3,25)$ i mínim $(1,-7)$. |
| **c)** | Talls $x=-1,1,2\pm\sqrt3$; tall $Y=4$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,3)$ i creix a $(3,+\infty)$; mínim $(3,-23)$. $x=0$ és estacionari, però no és un extrem. |
| **d)** | Talls $x=-3,-1,0,1,3$; tall $Y=0$; branques $-\infty$ i $+\infty$. | Posem $\alpha\approx0{,}563$ i $\beta\approx2{,}384$. Creix a $(-\infty,-\beta)\cup(-\alpha,\alpha)\cup(\beta,+\infty)$ i decreix a $(-\beta,-\alpha)\cup(\alpha,\beta)$. Màxims $(-\beta,-21{,}880)$ i $(\alpha,3{,}880)$; mínims $(-\alpha,3{,}880)$ i $(\beta,-21{,}880)$. |
| **e)** | Talls $x=2-\sqrt3,2,2+\sqrt3$; tall $Y=-2$; branques $-\infty$ i $+\infty$. | Creix a $(-\infty,1)\cup(3,+\infty)$ i decreix a $(1,3)$. Màxim $(1,2)$ i mínim $(3,-2)$. |
| **f)** | Talls $x=0$ i $x=3$; tall $Y=0$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,0)\cup(\frac32,3)$ i creix a $(0,\frac32)\cup(3,+\infty)$. Mínims $(0,0)$ i $(3,0)$; màxim $(\frac32,\frac{81}{16})$. |

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions de les sis funcions polinòmiques de l'exercici 2.18](../img/calcul/fig_2_29_resultat_exercici_2_18.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_29_resultat_exercici_2_18.tex">Figura 2.29.</a></strong> Representacions de les funcions polinòmiques de l'exercici 2.18.</figcaption>
</figure>

<p class="exercise-result-lead"><strong>2.19.</strong></p>

| Apartat | Domini, discontinuïtats i asímptotes | Monotonia i punts destacats |
|:--|:--|:--|
| **a)** | $D=\mathbb{R}\setminus\{-1,2\}$; forat $(-1,\frac23)$; AV $x=2$; AH $y=1$. Tall $X$: $x=1$; tall $Y$: $\frac12$. | Decreix en cada interval del domini; sota $y=1$ si $x<2$ i damunt si $x>2$. |
| **b)** | $D=\mathbb{R}\setminus\{-1,1\}$; AV $x=\pm1$; AH $y=2$. Talls $X$: $x=\pm\sqrt2$; tall $Y=4$. | Decreix si $x<0$ i creix si $x>0$; mínim $(0,4)$ en $(-1,1)$. Damunt $y=2$ si $|x|<1$. |
| **c)** | $D=\mathbb{R}\setminus\{-2,2\}$; forat $(-2,-\frac54)$; AV $x=2$; AH $y=-1$. Tall $X$: $x=3$; tall $Y=-\frac32$. | Decreix en cada interval; sota $y=-1$ si $x<2$ i damunt si $x>2$. |
| **d)** | $D=\mathbb{R}\setminus\{-2,2\}$; AV $x=\pm2$; AH $y=3$. No talla l'eix $X$; tall $Y=-1$. | Creix si $x<0$ i decreix si $x>0$; màxim $(0,-1)$ en $(-2,2)$. |
| **e)** | $D=\mathbb{R}\setminus\{-1,2\}$; AV $x=-1,2$; AH $y=0$; tall $Y=-\frac12$. | Creix fins a $x=\frac12$ i decreix després, separant pels punts exclosos; màxim $(\frac12,-\frac49)$. |
| **f)** | $D=\mathbb{R}\setminus\{1\}$; AV $x=1$; asímptota obliqua $y=x+1$; tall $(0,0)$. | Creix a $(-\infty,0)\cup(2,+\infty)$ i decreix a $(0,1)\cup(1,2)$; màxim $(0,0)$ i mínim $(2,4)$. |
| **g)** | $D=\mathbb{R}\setminus\{-1\}$; AV $x=-1$; asímptota obliqua $y=-x+1$; tall $(0,0)$. | Decreix a $(-\infty,-2)\cup(0,+\infty)$ i creix a $(-2,-1)\cup(-1,0)$; mínim $(-2,4)$ i màxim $(0,0)$. |

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions de les quatre primeres funcions racionals de l'exercici 2.19](../img/calcul/fig_2_30_resultat_exercici_2_19_1.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_30_resultat_exercici_2_19_1.tex">Figura 2.30.</a></strong> Representacions dels apartats a–d de l'exercici 2.19.</figcaption>
</figure>

<figure markdown="span" class="exercise-solution-figure">
  ![Representacions de les tres darreres funcions racionals de l'exercici 2.19](../img/calcul/fig_2_31_resultat_exercici_2_19_2.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_31_resultat_exercici_2_19_2.tex">Figura 2.31.</a></strong> Representacions dels apartats e–g de l'exercici 2.19.</figcaption>
</figure>

**2.20.**

- **a)** Discontinuïtat de salt a $x=1$. Creix als dos trams i té un mínim relatiu a $(1,2)$.
- **b)** És contínua però no derivable a $x=0$. Creix a $(-\infty,-1)\cup(1,+\infty)$ i decreix a $(-1,1)$; màxim $(-1,4)$ i mínim $(1,1)$.
- **c)** És contínua però no derivable a $x=1$. Creix a $(-\infty,1)$ i decreix a $(1,+\infty)$; màxim $(1,3)$.
- **d)** Discontinuïtat de salt a $x=0$. Creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions de les quatre funcions a trossos de l'exercici 2.20](../img/calcul/fig_2_32_resultat_exercici_2_20.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_32_resultat_exercici_2_20.tex">Figura 2.32.</a></strong> Representacions de les funcions a trossos de l'exercici 2.20.</figcaption>
</figure>

**2.21.** **a)** $[-4,+\infty)$; **b)** $(-\infty,1)\cup(3,+\infty)$.

**2.22.**

- **a)** $D=\mathbb{R}$; talls $x=\pm3$ i $y=\sqrt[3]{9}$; no és derivable a $x=\pm3$.
- **b)** $D=(-\infty,0]\cup[4,+\infty)$. Val $0$ als extrems; per $x\to-\infty$, $g(x)\sim-x+2$, i per $x\to+\infty$, $g(x)\sim x-2$.
- **c)** $D=(-\infty,-2)\cup(2,+\infty)$; talls $x=\pm\sqrt5$; AV $x=\pm2$.
- **d)** $D=\mathbb{R}$ i l'únic tall és $(0,0)$.
- **e)** $\lim_{x\to\pm\infty}q(x)=0$; creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.
- **f)** $\lim_{x\to-\infty}r(x)=+\infty$ i $\lim_{x\to+\infty}r(x)=0$; decreix a $(-\infty,0)\cup(1,+\infty)$ i creix a $(0,1)$; mínim $(0,0)$ i màxim $(1,e^{-2})$.
- **g)** $D=(0,1)\cup(1,+\infty)$; AV $x=1$; decreix a $(0,1)\cup(1,\sqrt e)$ i creix a $(\sqrt e,+\infty)$; mínim $(\sqrt e,2e)$.
- **h)** $D=(-\infty,-3)\cup(3,+\infty)$; AV $x=\pm3$; decreix al primer interval i creix al segon; no té extrems relatius.

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions dels quatre primers apartats de l'exercici 2.22](../img/calcul/fig_2_33_resultat_exercici_2_22_1.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_33_resultat_exercici_2_22_1.tex">Figura 2.33.</a></strong> Representacions dels apartats a–d de l'exercici 2.22.</figcaption>
</figure>

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions dels quatre darrers apartats de l'exercici 2.22](../img/calcul/fig_2_34_resultat_exercici_2_22_2.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_34_resultat_exercici_2_22_2.tex">Figura 2.34.</a></strong> Representacions dels apartats e–h de l'exercici 2.22.</figcaption>
</figure>

**2.23.**

- **a)** $6-2x$ si $x<3$ i $2x-6$ si $x\geq3$; no derivable a $x=3$.
- **b)** $4x+1$ si $x<-1$ i $2x-1$ si $x\geq-1$; no derivable a $x=-1$.
- **c)** $-2x+1$ si $x<-1$, $3$ si $-1\leq x<2$ i $2x-1$ si $x\geq2$; no derivable a $x=-1,2$.
- **d)** $-x^2-x+2$ si $x<-2$ i $x^2+x-2$ si $x\geq-2$; no derivable a $x=-2$.

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions de les quatre funcions amb valor absolut de l'exercici 2.23](../img/calcul/fig_2_35_resultat_exercici_2_23.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_35_resultat_exercici_2_23.tex">Figura 2.35.</a></strong> Representacions de les funcions de l'exercici 2.23.</figcaption>
</figure>

**2.24.**

- **a)** Zeros $x=1,3$; màxim central $(2,1)$ i mínims $(1,0)$, $(3,0)$.
- **b)** Zeros $x=-2,4$; màxim central $(1,9)$ i mínims $(-2,0)$, $(4,0)$.
- **c)** Zeros $x=\pm3$; màxim central $(0,9)$ i mínims $(\pm3,0)$.
- **d)** Zeros $x=2,3$; màxim central $(\frac52,\frac14)$ i mínims $(2,0)$, $(3,0)$.

<figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
  ![Representacions de les quatre funcions de l'exercici 2.24](../img/calcul/fig_2_36_resultat_exercici_2_24.svg?v=1){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_36_resultat_exercici_2_24.tex">Figura 2.36.</a></strong> Representacions de les funcions de l'exercici 2.24.</figcaption>
</figure>

### Síntesi

**2.25.**

| | Resultat | | Resultat |
|:--|:--|:--|:--|
| **a)** | $x^3+\frac{15}{2}x^{3/2}$ | **b)** | $\frac43x^{1/3}+\frac4{x^3}$ |
| **c)** | $2^x\ln2+\frac1{x\ln3}$ | **d)** | $8x^3+x^2(x+3)e^x$ |
| **e)** | $\frac{4x}{2x^2+7}$ | **f)** | $6x(x^2-1)^2e^{(x^2-1)^3}$ |

**2.26.** $D_f=\mathbb{R}\setminus\{-3,3\}$. Talls $x=\pm\sqrt2$ i $y=\frac23$. AV $x=\pm3$ i AH $y=3$. Límits: a $-3$, $+\infty$ per l'esquerra i $-\infty$ per la dreta; a $3$, $-\infty$ per l'esquerra i $+\infty$ per la dreta. Creix per $x<0$ i decreix per $x>0$, separant pels punts exclosos; màxim relatiu $(0,\frac23)$.

<figure markdown="span" class="exercise-solution-figure">
  ![Representació completa de la funció racional de l'exercici 2.26](../img/calcul/fig_2_37_resultat_exercici_2_26.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_37_resultat_exercici_2_26.tex">Figura 2.37.</a></strong> Representació completa de la funció de l'exercici 2.26.</figcaption>
</figure>

**2.27.** $D_g=\mathbb{R}\setminus\{1\}$. AV $x=1$, amb límits $-\infty$ i $+\infty$; AH $y=0$ quan $x\to-\infty$, mentre que $g(x)\to+\infty$ quan $x\to+\infty$. $g'(x)=\frac{e^x(x-2)}{(x-1)^2}$: decreix a $(-\infty,1)\cup(1,2)$ i creix a $(2,+\infty)$; mínim $(2,e^2)$. Tall amb l'eix $Y$: $(0,-1)$; no talla l'eix $X$.

<figure markdown="span" class="exercise-solution-figure">
  ![Representació completa de la funció exponencial racional de l'exercici 2.27](../img/calcul/fig_2_38_resultat_exercici_2_27.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_38_resultat_exercici_2_27.tex">Figura 2.38.</a></strong> Representació completa de la funció de l'exercici 2.27.</figcaption>
</figure>

<p class="exercise-result-lead"><strong>2.28.</strong></p>

$$
p(x)=
\begin{cases}
-3x-3, & x<-2,\\
x+5, & -2\leq x<1,\\
3x+3, & x\geq1.
\end{cases}
$$

És contínua en tot $\mathbb{R}$ i no és derivable a $x=-2$ ni a $x=1$.

<figure markdown="span" class="exercise-solution-figure">
  ![Representació de la funció amb valor absolut de l'exercici 2.28](../img/calcul/fig_2_39_resultat_exercici_2_28.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_39_resultat_exercici_2_28.tex">Figura 2.39.</a></strong> Representació de la funció de l'exercici 2.28.</figcaption>
</figure>

### Optimització

**2.29.** Costat perpendicular al mur: $30\,\text{m}$; costat paral·lel: $60\,\text{m}$; àrea màxima: $1.800\,\text{m}^2$.

**2.30.** Costats horitzontals: $2\sqrt3\,\text{m}$; costats verticals: $\frac{4\sqrt3}{3}\,\text{m}$. Cost mínim: $32\sqrt3\,€\approx55{,}43\,€$.

**2.31.** $r=10\,\text{cm}$, $h=20\,\text{cm}$; volum màxim $2.000\pi\,\text{cm}^3$.

**2.32.** $r=5\sqrt6\,\text{cm}$, $h=5\sqrt3\,\text{cm}$; capacitat màxima $250\pi\sqrt3\,\text{cm}^3$.

**2.33.** Ha de començar a nedar en un punt situat a $15\sqrt2\approx21{,}21\,\text{m}$ d'$O$; per tant, corre uns $78{,}79\,\text{m}$. Temps mínim: $\frac{50}{3}+20\sqrt2\approx44{,}95\,\text{s}$. Córrer fins a $O$ dona $46{,}67\,\text{s}$ i nedar immediatament, aproximadament $58{,}31\,\text{s}$.

**2.34.** En el model continu, el preu òptim és $47\,€$, es venen $430$ entrades i el benefici màxim és $16.490\,€$. Si el preu només pot variar de $2$ en $2\,€$, tant $46\,€$ com $48\,€$ donen un benefici de $16.480\,€$.

**2.35.** $B(x)=-0{,}07x^2+46x-180$. Òptim continu: $x=\frac{2.300}{7}\approx328{,}57$. Cal fabricar **329 unitats**; benefici màxim enter: $7.377{,}13\,€$.

**2.36.** $C_m(x)=0{,}4x+12+\frac{3.600}{x}$. Òptim continu: $x=30\sqrt{10}\approx94{,}87$ i $C_m=12+24\sqrt{10}\approx87{,}895\,€$. Si la producció és entera, cal fabricar **95 unitats**, amb un cost mitjà d'uns $87{,}895\,€$.

**2.37.** El benefici màxim és de $38$ milers d'euros i s'obté amb una inversió de $5$ milers d'euros. Al punt d'unió, $B(4)=36$; als extrems, $B(0)=B(8)=20$.

<figure markdown="span" class="exercise-solution-figure">
  ![Representació de la funció de benefici a trossos de l'exercici 2.37](../img/calcul/fig_2_40_resultat_exercici_2_37.svg?v=1){ width="62%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_40_resultat_exercici_2_37.tex">Figura 2.40.</a></strong> Representació del benefici de l'exercici 2.37.</figcaption>
</figure>
