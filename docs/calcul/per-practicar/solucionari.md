# Solucionari desplegable

Busca l'exercici que has resolt i desplega'n la solució. Abans de mirar-la, deixa escrit el teu procediment: en una prova, el resultat final sense justificació pot no ser suficient.

<div class="practice-actions" markdown="1">

[Torna als enunciats](index.md){ .md-button }

</div>

## Documents PDF de resultats

<div class="practice-download-grid">
  <section class="practice-download-card">
    <h3>Exercicis per temes</h3>
    <p><a href="../../assets/exercicis/resultats_exercicis_calcul.pdf?v=9">Resultats en PDF</a></p>
  </section>
  <section class="practice-download-card">
    <h3>Problemes PAU</h3>
    <p><a href="../../assets/exercicis/resultats_problemes_pau_calcul.pdf?v=2">Resultats en PDF</a></p>
  </section>
</div>

!!! note "Ús del solucionari"

    Les solucions estan tancades inicialment perquè puguis provar cada exercici sense veure'n el resultat. Obre només l'exercici que vulguis comprovar i compara'l amb els passos del teu quadern.

## Tema 1. Repàs de límits i derivades

### Límits i continuïtat

??? example "Solució de l'exercici 1.1"
    - **a)** $+\infty$, $+\infty$, $-1$ i $+\infty$.
    - **b)** $4$, $-1$, $1$ i $2$.

??? example "Solució de l'exercici 1.2"
    **a)** $3$; **b)** $1$; **c)** $-1$; **d)** no existeix; **e)** $3$; **f)** $0$; **g)** $+\infty$; **h)** $+\infty$; **i)** $-2$.

??? example "Solució de l'exercici 1.3"
    **a)** $3$; **b)** $+\infty$; **c)** $\frac12$; **d)** $4$; **e)** $0$; **f)** $\frac32$; **g)** $+\infty$; **h)** $1$; **i)** $+\infty$; **j)** $+\infty$; **k)** $3$; **l)** $-\infty$.

??? example "Solució de l'exercici 1.4"
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

??? example "Solució de l'exercici 1.5"
    $D_f=\mathbb{R}\setminus\{-2,1\}$. $f(0)=-1$; $\lim_{x\to-2}f(x)=-\frac13$; $\lim_{x\to1^-}f(x)=-\infty$ i $\lim_{x\to1^+}f(x)=+\infty$; $\lim_{x\to\pm\infty}f(x)=0$. Hi ha una discontinuïtat evitable a $x=-2$, amb forat $(-2,-\frac13)$, una asímptota vertical $x=1$ i una asímptota horitzontal $y=0$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfica de la funció de l'exercici 1.5, amb un forat i les asímptotes vertical i horitzontal](../../img/calcul/fig_1_14_resultat_exercici_1_5.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_14_resultat_exercici_1_5.tex">Figura 1.14.</a></strong> Representació de la funció de l'exercici 1.5.</figcaption>
    </figure>

??? example "Solució de l'exercici 1.6"
    $D_g=\mathbb{R}\setminus\{0,4\}$. A $x=0$, els límits laterals són $-\infty$ i $+\infty$; a $x=4$, $\lim g(x)=2$. Hi ha una asímptota vertical $x=0$, un forat $(4,2)$ i una asímptota horitzontal $y=1$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfica de la funció de l'exercici 1.6, amb un forat i les asímptotes vertical i horitzontal](../../img/calcul/fig_1_15_resultat_exercici_1_6.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_15_resultat_exercici_1_6.tex">Figura 1.15.</a></strong> Representació de la funció de l'exercici 1.6.</figcaption>
    </figure>

??? example "Solució de l'exercici 1.7"
    $\lim_{x\to2^-}f(x)=0$ i $\lim_{x\to2^+}f(x)=-\infty$: discontinuïtat infinita i asímptota vertical $x=2$ pel costat dret. A més, $\lim_{x\to-\infty}f(x)=0$ i $\lim_{x\to+\infty}f(x)=1$.

??? example "Solució de l'exercici 1.8"
    $A(60)=e^{1{,}8}\approx6{,}050$ i $\lim_{t\to60^+}A(t)=6$: hi ha un salt d'uns $0{,}050$ milers de litres. $A(t)=4$ quan $t=\frac{\ln4}{0{,}03}\approx46{,}21$ dies i quan $t=120$ dies.

### Derivades

??? example "Solució de l'exercici 1.9"
    **a)** $f'(x)=3x^2$; **b)** $f'(x)=2x-3$ i $f'(2)=1$; **c)** $f'(x)=\frac1{2\sqrt{x+5}}$ i $f'(4)=\frac16$; **d)** $f'(x)=2e^{2x}$ i $f'(0)=2$.

??? example "Solució de l'exercici 1.10"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $20x^3-6x$ | **b)** | $-\frac{12}{x^4}+2$ |
    | **c)** | $\frac{3}{2\sqrt{x}}+\frac5{x^2}$ | **d)** | $4x^5+\frac8{x^3}$ |
    | **e)** | $7e^x-\frac3x$ | **f)** | $2\cdot5^x\ln5+\frac1{x\ln2}$ |

??? example "Solució de l'exercici 1.11"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $e^x(x+1)^2$ | **b)** | $x^2(3\ln x+1)$ |
    | **c)** | $6x^2-2x+6$ | **d)** | $\frac{x^2+2x+4}{(x+1)^2}$ |
    | **e)** | $\frac{-3x^2-4x+3}{(x^2+1)^2}$ | **f)** | $\frac{1-2\ln x}{x^3}$ |

??? example "Solució de l'exercici 1.12"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $14(2x-3)^6$ | **b)** | $\frac{x}{\sqrt{x^2+5}}$ |
    | **c)** | $-\frac{12}{(3x+1)^5}$ | **d)** | $(2x-2)e^{x^2-2x}$ |
    | **e)** | $\frac{8x}{4x^2+1}$ | **f)** | $-\frac{6x^2}{(x^3+1)^3}$ |
    | **g)** | $-\frac{e^x}{2\sqrt{1-e^x}}$ | **h)** | $2\ln3\cdot3^{2x+1}$ |

??? example "Solució de l'exercici 1.13"
    **a)** $f'(x)=2x+2$, $x\ne0$; **b)** $f'(x)=3x^2$, $x\ne0$; **c)** $f'(x)=\frac52x^{3/2}$; **d)** $f'(x)=1$, $x\ne3$; **e)** $f'(x)=\frac3x$, $x>0$; **f)** $f'(x)=1$, $x>0$.

??? example "Solució de l'exercici 1.14"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $\frac{16x}{(x^2+4)^2}$ | **b)** | $\frac{x-1}{(3-x)^3}$ |
    | **c)** | $\frac{2\sqrt{x}(2\sqrt{x}+3)}{(\sqrt{x}+1)^2}$ | **d)** | $-\frac56\left(\frac34-\frac{x}{6}\right)^4$ |
    | **e)** | $\frac{3\sqrt[4]{2}}{4\sqrt[4]{x}}$ | **f)** | $\frac{9(3\sqrt{x}+2)^5}{\sqrt{x}}$ |

??? example "Solució de l'exercici 1.15"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $\frac{x^3(x-8)}{(x-2)^4}$ | **b)** | $\frac{4(x^2-3)^3(x^2+3)}{x^5}$ |
    | **c)** | $-\frac{2x(3x+1)}{(3x-1)^5}$ | **d)** | $\frac{2(3x-4)}{(x-3)^3}$ |
    | **e)** | $-\frac{6}{(x+2)^2}\sqrt{\frac{2-x}{2+x}}$ | **f)** | $-\frac3{x^2}+\frac{x}{2}$ |

??? example "Solució de l'exercici 1.16"
    **a)** $\frac{2x}{x^2+3}$; **b)** $-\frac1{2(2-x)}$; **c)** $e^{-2x}\left(\frac1x-2\ln x\right)$; **d)** $6xe^{3x^2-2}$; **e)** $\frac{2x}{(x^2+1)\ln3}$; **f)** $-\frac1{x\ln(2/x)}$.

??? example "Solució de l'exercici 1.17"
    | | $f'(x)$ | $f''(x)$ | $f'''(x)$ |
    |:--|:--|:--|:--|
    | **a)** | $3x^2-4x+4$ | $6x-4$ | $6$ |
    | **b)** | $3e^{3x}$ | $9e^{3x}$ | $27e^{3x}$ |
    | **c)** | $(x-1)e^x$ | $xe^x$ | $(x+1)e^x$ |
    | **d)** | $\frac1{x+3}$ | $-\frac1{(x+3)^2}$ | $\frac2{(x+3)^3}$ |
    | **e)** | $-\frac1{(x+2)^2}$ | $\frac2{(x+2)^3}$ | $-\frac6{(x+2)^4}$ |

### Càlcul de coeficients

??? example "Solució de l'exercici 1.18"
    $a=2$, $b=1$.

??? example "Solució de l'exercici 1.19"
    $a=1$, $b=2$.

??? example "Solució de l'exercici 1.20"
    $a=2$, $b=-2$; $h(x)=2x^2-2x+3$.

??? example "Solució de l'exercici 1.21"
    $a=0$, $b=-3$, $c=2$; $p(x)=x^3-3x+2$. El punt $Q=(1,0)$ és un mínim relatiu perquè $p''(1)=6>0$.

## Tema 2. Aplicacions de les derivades

### Derivabilitat

??? example "Solució de l'exercici 2.1"
    **a)** no és derivable a $x=-1$ ni a $x=1$; **b)** és derivable en tot $\mathbb{R}$; **c)** no és derivable a $x=1$; **d)** no és derivable a $x=-2$ ni a $x=1$; **e)** no és derivable a $x=-1$; **f)** no és derivable a $x=1$.

??? example "Solució de l'exercici 2.2"
    $f'(-2)=0$, $f'(1)=0$ i $f'(4)=2$. No és derivable a $x=0$, $x=2$ ni $x=3$.

??? example "Solució de l'exercici 2.3"
    És contínua i derivable a $x=1$; $f(1)=0$ i $f'(1)=3$.

??? example "Solució de l'exercici 2.4"
    És contínua a $x=-1$, però no és derivable: $f'_-( -1)=2$ i $f'_+( -1)=1$.

??? example "Solució de l'exercici 2.5"
    És contínua a $x=2$, però no és derivable: les derivades laterals tendeixen a $-\infty$ i $+\infty$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfica de la funció de l'exercici 2.5, amb tangent vertical en el punt d'unió](../../img/calcul/fig_2_29_resultat_exercici_2_5.svg?v=1){ width="56%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_29_resultat_exercici_2_5.tex">Figura 2.29.</a></strong> Interpretació gràfica de la continuïtat i la no derivabilitat a $x=2$.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.6"
    A $x=-2$ és contínua però no derivable ($f'_- =1$, $f'_+=2$). A $x=1$ presenta una discontinuïtat de salt. $f'(x)=2x+5$ si $x<-2$, $f'(x)=2$ si $-2<x<1$ i $f'(x)=1$ si $x>1$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfiques de la funció i de la seva derivada en l'exercici 2.6](../../img/calcul/fig_2_30_resultat_exercici_2_6.svg?v=1){ width="88%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_30_resultat_exercici_2_6.tex">Figura 2.30.</a></strong> Representació de $f$ i de $f'$ en l'exercici 2.6.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.7"
    **a)** És contínua en tot $\mathbb{R}$ i derivable excepte a $x=2$; $f'(x)=0$ si $x<0$, $f'(0)=0$, $f'(x)=2x$ si $0<x<2$ i $f'(x)=2$ si $x>2$. **b)** És contínua i derivable en tot $\mathbb{R}$; $g'(x)=2e^{2x}$ si $x<0$, $g'(0)=2$ i $g'(x)=2$ si $x>0$.

??? example "Solució de l'exercici 2.8"
    Qualsevol $k\in\mathbb{R}$.

??? example "Solució de l'exercici 2.9"
    $m=0$, $n=4$.

??? example "Solució de l'exercici 2.10"
    $a=3$, $b=-3$.

??? example "Solució de l'exercici 2.11"
    $m=8$, $n=4$; $f'(x)=0$ només quan $x=2$.

??? example "Solució de l'exercici 2.12"
    **a)** $a=2$, $b=-4$; **b)** $a=2$, $b=0$.

??? example "Solució de l'exercici 2.13"
    $a=5$, $b=3$.

??? example "Solució de l'exercici 2.14"
    $a=\frac13$, $b=1$.

??? example "Solució de l'exercici 2.15"
    - **a)** $|x+4|=-(x+4)$ si $x<-4$ i $x+4$ si $x\geq-4$; no és derivable a $x=-4$.
    - **b)** $|-2x+4|=-2x+4$ si $x\leq2$ i $2x-4$ si $x>2$; no és derivable a $x=2$.
    - **c)** $h(x)=x+1$ si $x<1$ i $h(x)=3x-1$ si $x\geq1$; no és derivable a $x=1$.

### Creixement i extrems

<div class="exercise-monotonia-tables" markdown="1">
??? example "Solució de l'exercici 2.16"
    **a)** $f'(x)=3(x+1)(x-3)$.

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Comportament de $f$ | creix | màxim $(-1,9)$ | decreix | mínim $(3,-23)$ | creix |

    **b)** $f'(x)=4x(x^2-5)$.

    | Valor de $x$ | $(-\infty,-\sqrt5)$ | $-\sqrt5$ | $(-\sqrt5,0)$ | $0$ | $(0,\sqrt5)$ | $\sqrt5$ | $(\sqrt5,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $-$ | $0$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Comportament de $f$ | decreix | mínim $(-\sqrt5,-16)$ | creix | màxim $(0,9)$ | decreix | mínim $(\sqrt5,-16)$ | creix |

    **c)** $D_f=\mathbb{R}\setminus\{1\}$ i

    $$
    f'(x)=\frac{x^2-2x-3}{(x-1)^2}=\frac{(x+1)(x-3)}{(x-1)^2}.
    $$

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,1)$ | $1$ | $(1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $-$ | no existeix | $-$ | $0$ | $+$ |
    | Comportament de $f$ | creix | màxim $(-1,-2)$ | decreix | asímptota vertical | decreix | mínim $(3,6)$ | creix |

    **d)** $f'(x)=e^{-x}(2-x)$.

    | Valor de $x$ | $(-\infty,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $-$ |
    | Comportament de $f$ | creix | màxim $(2,e^{-2})$ | decreix |

    **e)** $D_f=(0,+\infty)$ i

    $$
    f'(x)=\frac{1-2\ln x}{x^3}.
    $$

    | Valor de $x$ | $0$ | $(0,\sqrt e)$ | $\sqrt e$ | $(\sqrt e,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | no existeix | $+$ | $0$ | $-$ |
    | Comportament de $f$ | extrem del domini no inclòs | creix | màxim $\left(\sqrt e,\frac1{2e}\right)$ | decreix |

    **f)**

    $$
    f'(x)=\frac{x^2(x^2+3)}{(x^2+1)^2}.
    $$

    | Valor de $x$ | $(-\infty,0)$ | $0$ | $(0,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $+$ |
    | Comportament de $f$ | creix | punt estacionari $(0,0)$, sense extrem | creix |

    Per tant, $f$ creix en tot $\mathbb{R}$, encara que $f'(0)=0$.

    **g)** $f'(x)=3(x-1)^2$.

    | Valor de $x$ | $(-\infty,1)$ | $1$ | $(1,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $+$ |
    | Comportament de $f$ | creix | punt estacionari $(1,1)$, sense extrem | creix |

    Per tant, $f$ creix en tot $\mathbb{R}$, encara que $f'(1)=0$.

    </div>

??? example "Solució de l'exercici 2.17"
    - **a)** Creix a $(-\infty,-2)\cup(2,+\infty)$ i decreix a $(-2,2)$; màxim $(-2,17)$ i mínim $(2,-15)$.
    - **b)** Decreix a $(-\infty,-\sqrt2)\cup(0,\sqrt2)$ i creix a $(-\sqrt2,0)\cup(\sqrt2,+\infty)$; mínims $(\pm\sqrt2,-4)$ i màxim $(0,0)$.
    - **c)** Decreix a $(-\infty,0)$ i creix a $(0,+\infty)$; mínim $(0,-4)$.
    - **d)** Creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.

### Representació de funcions

??? example "Solució de l'exercici 2.18"
    Totes tenen domini $\mathbb{R}$.

    | Apartat | Talls i comportament | Monotonia i extrems |
    |:--|:--|:--|
    | **a)** | Talls $x=\pm1,\pm\sqrt5$; tall $Y=5$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,-\sqrt3)\cup(0,\sqrt3)$; creix a $(-\sqrt3,0)\cup(\sqrt3,+\infty)$. Mínims $(\pm\sqrt3,-4)$ i màxim $(0,5)$. |
    | **b)** | Talls $x=-2$ (doble) i $x=4$; tall $Y=-16$; branques $-\infty$ i $+\infty$. | Creix a $(-\infty,-2)\cup(2,+\infty)$ i decreix a $(-2,2)$. Màxim $(-2,0)$ i mínim $(2,-32)$. |
    | **c)** | Talls $x=0$ (triple) i $x=4$; tall $Y=0$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,3)$ i creix a $(3,+\infty)$; mínim $(3,-27)$. $x=0$ és estacionari, però no és un extrem. |
    | **d)** | Talls $x=0$ (doble) i $x=5$ (triple); tall $Y=0$; branques $-\infty$ i $+\infty$. | Creix a $(-\infty,0)\cup(2,+\infty)$ i decreix a $(0,2)$. Màxim $(0,0)$ i mínim $(2,-108)$. $x=5$ és estacionari, però no és un extrem. |
    | **e)** | Talls $x=\frac12$ (doble) i $x=2$; tall $Y=-2$; branques $-\infty$ i $+\infty$. | Creix a $(-\infty,\frac12)\cup(\frac32,+\infty)$ i decreix a $(\frac12,\frac32)$. Màxim $(\frac12,0)$ i mínim $(\frac32,-2)$. |
    | **f)** | Talls $x=0$ i $x=4$; tall $Y=0$; $f(x)\to+\infty$ als dos infinits. | Decreix a $(-\infty,0)\cup(2,4)$ i creix a $(0,2)\cup(4,+\infty)$. Mínims $(0,0)$ i $(4,0)$; màxim $(2,16)$. |

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions de les sis funcions polinòmiques de l'exercici 2.18](../../img/calcul/fig_2_31_resultat_exercici_2_18.svg?v=2){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_31_resultat_exercici_2_18.tex">Figura 2.31.</a></strong> Representacions de les funcions polinòmiques de l'exercici 2.18.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.19"
    | Apartat | Domini, discontinuïtats i asímptotes | Monotonia i punts destacats |
    |:--|:--|:--|
    | **a)** | $D=\mathbb{R}\setminus\{-1,2\}$; forat $(-1,\frac23)$; AV $x=2$; AH $y=1$. Tall $X$: $x=1$; tall $Y$: $\frac12$. | Decreix en cada interval del domini; sota $y=1$ si $x<2$ i damunt si $x>2$. |
    | **b)** | $D=\mathbb{R}\setminus\{-1,1\}$; AV $x=\pm1$; AH $y=2$. Talls $X$: $x=\pm\sqrt2$; tall $Y=4$. | Decreix si $x<0$ i creix si $x>0$; mínim $(0,4)$ en $(-1,1)$. Damunt $y=2$ si $\lvert x\rvert<1$. |
    | **c)** | $D=\mathbb{R}\setminus\{-2,2\}$; forat $(-2,-\frac54)$; AV $x=2$; AH $y=-1$. Tall $X$: $x=3$; tall $Y=-\frac32$. | Decreix en cada interval; sota $y=-1$ si $x<2$ i damunt si $x>2$. |
    | **d)** | $D=\mathbb{R}\setminus\{-2,2\}$; AV $x=\pm2$; AH $y=3$. No talla l'eix $X$; tall $Y=-1$. | Creix si $x<0$ i decreix si $x>0$; màxim $(0,-1)$ en $(-2,2)$. |
    | **e)** | $D=\mathbb{R}\setminus\{-1,2\}$; AV $x=-1,2$; AH $y=0$; tall $Y=-\frac12$. | Creix fins a $x=\frac12$ i decreix després, separant pels punts exclosos; màxim $(\frac12,-\frac49)$. |
    | **f)** | $D=\mathbb{R}\setminus\{1\}$; AV $x=1$; asímptota obliqua $y=x+1$; tall $(0,0)$. | Creix a $(-\infty,0)\cup(2,+\infty)$ i decreix a $(0,1)\cup(1,2)$; màxim $(0,0)$ i mínim $(2,4)$. |
    | **g)** | $D=\mathbb{R}\setminus\{-1\}$; AV $x=-1$; asímptota obliqua $y=-x+1$; tall $(0,0)$. | Decreix a $(-\infty,-2)\cup(0,+\infty)$ i creix a $(-2,-1)\cup(-1,0)$; mínim $(-2,4)$ i màxim $(0,0)$. |

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions de les quatre primeres funcions racionals de l'exercici 2.19](../../img/calcul/fig_2_32_resultat_exercici_2_19_1.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_32_resultat_exercici_2_19_1.tex">Figura 2.32.</a></strong> Representacions dels apartats a–d de l'exercici 2.19.</figcaption>
    </figure>

    <figure markdown="span" class="exercise-solution-figure">
      ![Representacions de les tres darreres funcions racionals de l'exercici 2.19](../../img/calcul/fig_2_33_resultat_exercici_2_19_2.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_33_resultat_exercici_2_19_2.tex">Figura 2.33.</a></strong> Representacions dels apartats e–g de l'exercici 2.19.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.20"
    - **a)** Discontinuïtat de salt a $x=1$. Creix als dos trams i té un mínim relatiu a $(1,2)$.
    - **b)** És contínua però no derivable a $x=0$. Creix a $(-\infty,-1)\cup(1,+\infty)$ i decreix a $(-1,1)$; màxim $(-1,4)$ i mínim $(1,1)$.
    - **c)** És contínua però no derivable a $x=1$. Creix a $(-\infty,1)$ i decreix a $(1,+\infty)$; màxim $(1,3)$.
    - **d)** Discontinuïtat de salt a $x=0$. Creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions de les quatre funcions a trossos de l'exercici 2.20](../../img/calcul/fig_2_34_resultat_exercici_2_20.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_34_resultat_exercici_2_20.tex">Figura 2.34.</a></strong> Representacions de les funcions a trossos de l'exercici 2.20.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.21"
    **a)** $[-4,+\infty)$; **b)** $(-\infty,1)\cup(3,+\infty)$; **c)** $(-\infty,2]\cup[3,+\infty)$; **d)** $(3,+\infty)$.

??? example "Solució de l'exercici 2.22"
    - **a)** $D=\mathbb{R}$; talls $x=\pm3$ i $y=\sqrt[3]{9}$; no és derivable a $x=\pm3$.
    - **b)** $D=(-\infty,0]\cup[4,+\infty)$. Val $0$ als extrems; per $x\to-\infty$, $g(x)\sim-x+2$, i per $x\to+\infty$, $g(x)\sim x-2$.
    - **c)** $D=(-\infty,-2)\cup(2,+\infty)$; talls $x=\pm\sqrt5$; AV $x=\pm2$.
    - **d)** $D=\mathbb{R}$ i l'únic tall és $(0,0)$.
    - **e)** $\lim_{x\to\pm\infty}q(x)=0$; creix a $(-\infty,0)$ i decreix a $(0,+\infty)$; màxim $(0,1)$.
    - **f)** $\lim_{x\to-\infty}r(x)=+\infty$ i $\lim_{x\to+\infty}r(x)=0$; decreix a $(-\infty,0)\cup(1,+\infty)$ i creix a $(0,1)$; mínim $(0,0)$ i màxim $(1,e^{-2})$.
    - **g)** $D=(0,1)\cup(1,+\infty)$; AV $x=1$; decreix a $(0,1)\cup(1,\sqrt e)$ i creix a $(\sqrt e,+\infty)$; mínim $(\sqrt e,2e)$.
    - **h)** $D=(-\infty,-3)\cup(3,+\infty)$; AV $x=\pm3$; decreix al primer interval i creix al segon; no té extrems relatius.
    - **i)** $\lim_{x\to-\infty}u(x)=0$ i $\lim_{x\to+\infty}u(x)=+\infty$; té l'asímptota horitzontal $y=0$ només quan $x\to-\infty$. Com que $u'(x)=e^x(x-1)(x+1)$, creix a $(-\infty,-1)\cup(1,+\infty)$ i decreix a $(-1,1)$; màxim $(-1,4/e)$ i mínim $(1,0)$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions dels quatre primers apartats de l'exercici 2.22](../../img/calcul/fig_2_35_resultat_exercici_2_22_1.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_35_resultat_exercici_2_22_1.tex">Figura 2.35.</a></strong> Representacions dels apartats a–d de l'exercici 2.22.</figcaption>
    </figure>

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions dels cinc darrers apartats de l'exercici 2.22](../../img/calcul/fig_2_36_resultat_exercici_2_22_2.svg?v=2){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_36_resultat_exercici_2_22_2.tex">Figura 2.36.</a></strong> Representacions dels apartats e–i de l'exercici 2.22.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.23"
    - **a)** $6-2x$ si $x<3$ i $2x-6$ si $x\geq3$; no derivable a $x=3$.
    - **b)** $4x+1$ si $x<-1$ i $2x-1$ si $x\geq-1$; no derivable a $x=-1$.
    - **c)** $-2x+1$ si $x<-1$, $3$ si $-1\leq x<2$ i $2x-1$ si $x\geq2$; no derivable a $x=-1,2$.
    - **d)** $-x^2-x+2$ si $x<-2$ i $x^2+x-2$ si $x\geq-2$; no derivable a $x=-2$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions de les quatre funcions amb valor absolut de l'exercici 2.23](../../img/calcul/fig_2_37_resultat_exercici_2_23.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_37_resultat_exercici_2_23.tex">Figura 2.37.</a></strong> Representacions de les funcions de l'exercici 2.23.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.24"
    - **a)** Zeros $x=1,3$; màxim central $(2,1)$ i mínims $(1,0)$, $(3,0)$.
    - **b)** Zeros $x=-2,4$; màxim central $(1,9)$ i mínims $(-2,0)$, $(4,0)$.
    - **c)** Zeros $x=\pm3$; màxim central $(0,9)$ i mínims $(\pm3,0)$.
    - **d)** Zeros $x=2,3$; màxim central $(\frac52,\frac14)$ i mínims $(2,0)$, $(3,0)$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--multi">
      ![Representacions de les quatre funcions de l'exercici 2.24](../../img/calcul/fig_2_38_resultat_exercici_2_24.svg?v=1){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_38_resultat_exercici_2_24.tex">Figura 2.38.</a></strong> Representacions de les funcions de l'exercici 2.24.</figcaption>
    </figure>

### Síntesi

??? example "Solució de l'exercici 2.25"
    | | Resultat | | Resultat |
    |:--|:--|:--|:--|
    | **a)** | $x^3+\frac{15}{2}x^{3/2}$ | **b)** | $\frac43x^{1/3}+\frac4{x^3}$ |
    | **c)** | $2^x\ln2+\frac1{x\ln3}$ | **d)** | $8x^3+x^2(x+3)e^x$ |
    | **e)** | $\frac{4x}{2x^2+7}$ | **f)** | $6x(x^2-1)^2e^{(x^2-1)^3}$ |

??? example "Solució de l'exercici 2.26"
    $D_f=\mathbb{R}\setminus\{-3,3\}$. Talls $x=\pm\sqrt2$ i $y=\frac23$. AV $x=\pm3$ i AH $y=3$. Límits: a $-3$, $+\infty$ per l'esquerra i $-\infty$ per la dreta; a $3$, $-\infty$ per l'esquerra i $+\infty$ per la dreta. Creix per $x<0$ i decreix per $x>0$, separant pels punts exclosos; màxim relatiu $(0,\frac23)$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--compact">
      ![Representació completa de la funció racional de l'exercici 2.26](../../img/calcul/fig_2_39_resultat_exercici_2_26.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_39_resultat_exercici_2_26.tex">Figura 2.39.</a></strong> Representació completa de la funció de l'exercici 2.26.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.27"
    $D_g=\mathbb{R}\setminus\{1\}$. AV $x=1$, amb límits $-\infty$ i $+\infty$; AH $y=0$ quan $x\to-\infty$, mentre que $g(x)\to+\infty$ quan $x\to+\infty$. $g'(x)=\frac{e^x(x-2)}{(x-1)^2}$: decreix a $(-\infty,1)\cup(1,2)$ i creix a $(2,+\infty)$; mínim $(2,e^2)$. Tall amb l'eix $Y$: $(0,-1)$; no talla l'eix $X$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--compact">
      ![Representació completa de la funció exponencial racional de l'exercici 2.27](../../img/calcul/fig_2_40_resultat_exercici_2_27.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_40_resultat_exercici_2_27.tex">Figura 2.40.</a></strong> Representació completa de la funció de l'exercici 2.27.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.28"
    $$
    p(x)=
    \begin{cases}
    -3x-3, & x<-2,\\
    x+5, & -2\leq x<1,\\
    3x+3, & x\geq1.
    \end{cases}
    $$

    És contínua en tot $\mathbb{R}$ i no és derivable a $x=-2$ ni a $x=1$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--compact">
      ![Representació de la funció amb valor absolut de l'exercici 2.28](../../img/calcul/fig_2_41_resultat_exercici_2_28.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_41_resultat_exercici_2_28.tex">Figura 2.41.</a></strong> Representació de la funció de l'exercici 2.28.</figcaption>
    </figure>

### Optimització

??? example "Solució de l'exercici 2.29"
    Costat perpendicular al mur: $30\,\text{m}$; costat paral·lel: $60\,\text{m}$; àrea màxima: $1.800\,\text{m}^2$.

??? example "Solució de l'exercici 2.30"
    Costats horitzontals: $2\sqrt3\,\text{m}$; costats verticals: $\frac{4\sqrt3}{3}\,\text{m}$. Cost mínim: $32\sqrt3\,€\approx55{,}43\,€$.

??? example "Solució de l'exercici 2.31"
    $r=10\,\text{cm}$, $h=20\,\text{cm}$; volum màxim $2.000\pi\,\text{cm}^3$.

??? example "Solució de l'exercici 2.32"
    $r=5\sqrt6\,\text{cm}$, $h=5\sqrt3\,\text{cm}$; capacitat màxima $250\pi\sqrt3\,\text{cm}^3$.

??? example "Solució de l'exercici 2.33"
    Ha de començar a nedar en un punt situat a $15\sqrt2\approx21{,}21\,\text{m}$ d'$O$; per tant, corre uns $78{,}79\,\text{m}$. Temps mínim: $\frac{50}{3}+20\sqrt2\approx44{,}95\,\text{s}$. Córrer fins a $O$ dona $46{,}67\,\text{s}$ i nedar immediatament, aproximadament $58{,}31\,\text{s}$.

??? example "Solució de l'exercici 2.34"
    En el model continu, el preu òptim és $47\,€$, es venen $430$ entrades i el benefici màxim és $16.490\,€$. Si el preu només pot variar de $2$ en $2\,€$, tant $46\,€$ com $48\,€$ donen un benefici de $16.480\,€$.

??? example "Solució de l'exercici 2.35"
    $B(x)=-0{,}07x^2+46x-180$. Òptim continu: $x=\frac{2.300}{7}\approx328{,}57$. Cal fabricar **329 unitats**; benefici màxim enter: $7.377{,}13\,€$.

??? example "Solució de l'exercici 2.36"
    $C_m(x)=0{,}4x+12+\frac{3.600}{x}$. Òptim continu: $x=30\sqrt{10}\approx94{,}87$ i $C_m=12+24\sqrt{10}\approx87{,}895\,€$. Si la producció és entera, cal fabricar **95 unitats**, amb un cost mitjà d'uns $87{,}895\,€$.

??? example "Solució de l'exercici 2.37"
    El benefici màxim és de $38$ milers d'euros i s'obté amb una inversió de $5$ milers d'euros. Al punt d'unió, $B(4)=36$; als extrems, $B(0)=B(8)=20$.

    <figure markdown="span" class="exercise-solution-figure exercise-solution-figure--compact">
      ![Representació de la funció de benefici a trossos de l'exercici 2.37](../../img/calcul/fig_2_42_resultat_exercici_2_37.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_42_resultat_exercici_2_37.tex">Figura 2.42.</a></strong> Representació del benefici de l'exercici 2.37.</figcaption>
    </figure>

## Problemes PAU

### Estudi i interpretació d'una funció

??? example "Solució del problema PAU.C.1. Evolució dels seguidors d'un divulgador"
    - **a)** $f(0)=700$ seguidors i $f(10)=3.200$ seguidors.
    - **b)** Creix a $(0,3)$ i $(5,10)$ i decreix a $(3,5)$. Té un màxim relatiu a $(3,1.240)$ i un mínim relatiu a $(5,1.200)$.
    - **c)** La gràfica parteix de $(0,700)$, puja fins al màxim relatiu, baixa lleugerament fins al mínim i torna a créixer fins a $(10,3.200)$.
    - **d)** La pèrdua de seguidors comença a la setmana $3$ i el creixement es recupera a la setmana $5$.
    - **e)** El màxim absolut del període és de $3.200$ seguidors i s'assoleix a la setmana $10$.

    <figure markdown="span" class="pau-solution-figure">
      ![Evolució dels seguidors amb els extrems relatius assenyalats](../../img/calcul/fig_pau_c_1_seguidors_divulgador.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_1_seguidors_divulgador.tex">Figura PAU.C.1.</a></strong> Evolució del nombre de seguidors.</figcaption>
    </figure>

??? example "Solució del problema PAU.C.2. Microorganismes en una mostra"
    - **a)** $k=5$.
    - **b)** El màxim s'assoleix al cap de $3$ hores: $f(3)=7{,}5$ desenes, és a dir, $75$ microorganismes.
    - **c)** $\displaystyle\lim_{x\to+\infty}f(x)=5$: a llarg termini, la mostra tendeix a estabilitzar-se en $50$ microorganismes.
    - **d)** La gràfica parteix de $(0,5)$, creix fins a $(3,7{,}5)$ i després decreix acostant-se a l'asímptota horitzontal $y=5$.

    <figure markdown="span" class="pau-solution-figure">
      ![Evolució dels microorganismes i asímptota horitzontal](../../img/calcul/fig_pau_c_2_microorganismes.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_2_microorganismes.tex">Figura PAU.C.2.</a></strong> Evolució del nombre de microorganismes.</figcaption>
    </figure>

??? example "Solució del problema PAU.C.3. Visitants d'una exposició"
    - **a)** $f(1)=80$ desenes: $800$ visitants.
    - **b)** $f(4)=80$ i la taxa de variació mitjana entre les setmanes $1$ i $4$ és $0$ desenes de visitants per setmana. Els valors inicial i final coincideixen, encara que entremig hi ha variació.
    - **c)** Creix a $[1,2)$ i decreix a $(2,+\infty)$.
    - **d)** La màxima afluència es produeix la setmana $2$: $f(2)=120$ desenes, és a dir, $1.200$ visitants.

??? example "Solució del problema PAU.C.4. Evolució dels clients d'una empresa"
    - **a)** $C(0)=2{,}8$ milers i $C(1)=2{,}5$ milers de clients.
    - **b)** Deixa de perdre clients al cap de $2$ anys, quan en té $C(2)=2$ milers.
    - **c)** $C'(t)<0$ si $0<t<2$ i $C'(t)>0$ si $t>2$; per tant, $t=2$ és un mínim.
    - **d)** Recupera el nombre inicial de clients al cap de $4$ anys.
    - **e)** $\displaystyle\lim_{t\to+\infty}C(t)=3$: a llarg termini tendeix a $3.000$ clients.

### Funcions exponencials i logarítmiques

??? example "Solució del problema PAU.C.5. Impacte d'una campanya publicitària"
    - **a)** $D(0)=30$ centenars: $3.000$ descàrregues diàries.
    - **b)** Creix a $[0,1)$ i decreix a $(1,+\infty)$.
    - **c)** El màxim s'assoleix al cap d'un mes: $D(1)=20+20e^{-1/2}\approx32{,}13$ centenars, unes $3.213$ descàrregues diàries.
    - **d)** A llarg termini es mantenen $20$ centenars, és a dir, $2.000$ descàrregues diàries.
    - **e)** La gràfica parteix de $(0,30)$, arriba al màxim quan $t=1$ i després decreix acostant-se a l'asímptota horitzontal $y=20$.

    <figure markdown="span" class="pau-solution-figure">
      ![Impacte de la campanya publicitària i asímptota horitzontal](../../img/calcul/fig_pau_c_3_campanya_publicitaria.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_3_campanya_publicitaria.tex">Figura PAU.C.3.</a></strong> Evolució de les descàrregues diàries.</figcaption>
    </figure>

??? example "Solució del problema PAU.C.6. Cost mitjà de producció"
    - **a)** Cal que $x>0$ perquè $\ln x$ estigui definit i perquè la producció sigui positiva. $C(1)=21\,€$ per unitat.
    - **b)** Decreix a $(0,4)$ i creix a $(4,+\infty)$.
    - **c)** Cal fabricar $400$ unitats. El cost mitjà mínim és $C(4)=24-4\ln4\approx18{,}45\,€$ per unitat.
    - **d)** No és possible assolir un cost mitjà inferior a $18\,€$, ja que el mínim és aproximadament $18{,}45\,€$.
    - **e)** $C(x)\to+\infty$ quan $x\to0^+$ i quan $x\to+\infty$. La gràfica baixa fins al mínim $(4,24-4\ln4)$ i després torna a pujar.

    <figure markdown="span" class="pau-solution-figure">
      ![Cost mitjà de producció amb el mínim assenyalat](../../img/calcul/fig_pau_c_4_cost_mitja.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_4_cost_mitja.tex">Figura PAU.C.4.</a></strong> Cost mitjà segons la producció.</figcaption>
    </figure>

### Modelització, comparació i optimització

#### Construcció de la funció a partir de l'enunciat

??? example "Solució del problema PAU.C.7. Reserves d'un hotel"
    - **a)** $I(x)=(80-x)(100+2x)=-2x^2+60x+8.000$, amb $0\leq x\leq80$.
    - **b)** Cal aplicar un descompte de $15\,€$: el preu serà de $65\,€$, hi haurà $130$ reserves i els ingressos màxims seran de $8.450\,€$.

??? example "Solució del problema PAU.C.8. Contractació de venedors"
    - **a)** $I(x)=(10+x)(5.400-180x)=-180x^2+3.600x+54.000$, amb $x\in\{0,1,\ldots,30\}$.
    - **b)** Cal contractar $10$ venedors nous, de manera que la botiga en tindrà $20$. Els ingressos màxims seran de $72.000\,€$ mensuals.

??? example "Solució del problema PAU.C.9. Venda de motxilles"
    - **a)** $B(x)=(80-x)(40+2x)-800-20(40+2x)=-2x^2+80x+1.600$.
    - **b)** Cal reduir el preu en $20\,€$. El preu serà de $60\,€$, es vendran $80$ motxilles i el benefici màxim serà de $2.400\,€$.

??? example "Solució del problema PAU.C.10. Demanda d'un accessori tecnològic"
    - **a)** $I(p)=p(500-10p-p^2)=-p^3-10p^2+500p$.
    - **b)** Els ingressos són màxims quan $p=10\,€$.
    - **c)** La demanda és de $300$ unitats i els ingressos màxims són de $3.000\,€$ setmanals.
    - **d)** $\displaystyle E(p)=\frac{p(10+2p)}{500-10p-p^2}$; $E(5)=\frac4{17}\approx0{,}235$ i $E(10)=1$.

??? example "Solució del problema PAU.C.11. Tarifes de dues companyies de taxi"
    - **a)** $f(x)=20+0{,}4x$.
    - **b)** Per $10\,\text{km}$, $f(10)=24\,€$ i $g(10)=12\,€$; per $80\,\text{km}$, $f(80)=52\,€$ i $g(80)=82\,€$.
    - **c)** $g(0)=10\,€$: la companyia B cobra un cost fix de $10\,€$.
    - **d)** Les dues tarifes coincideixen per a un trajecte de $50\,\text{km}$, amb un preu de $40\,€$.
    - **e)** La diferència màxima es produeix als $15\,\text{km}$ i és de $12{,}25\,€$; en aquest punt, la companyia B és la més barata.

### Funcions a trossos

??? example "Solució del problema PAU.C.12. Tarifa d'una empresa de paqueteria"
    - **a)** Un paquet de $9{,}5\,\text{kg}$ costa $120\,€$ i un de $13\,\text{kg}$, $173\,€$.
    - **b)**

    $$
    P(x)=
    \begin{cases}
    30, & 0<x\leq2,\\
    12x+6, & 2<x<11,\\
    15x-22, & 11\leq x\leq25.
    \end{cases}
    $$

    - **c)** És contínua a $x=2$. A $x=11$ hi ha una discontinuïtat de salt finit: el límit per l'esquerra és $138\,€$ i $P(11)=143\,€$.
    - **d)** La gràfica és constant fins a $2\,\text{kg}$, després és una recta de pendent $12$ i, a partir del salt de $x=11$, una recta de pendent $15$.
    - **e)** El paquet pesa $\displaystyle\frac{184}{15}\approx12{,}27\,\text{kg}$, valor que pertany al tercer tram.

    <figure markdown="span" class="pau-solution-figure">
      ![Tarifa de paqueteria amb la discontinuïtat de salt finit](../../img/calcul/fig_pau_c_5_tarifa_paqueteria.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_5_tarifa_paqueteria.tex">Figura PAU.C.5.</a></strong> Tarifa de l'empresa de paqueteria.</figcaption>
    </figure>

??? example "Solució del problema PAU.C.13. Cost de neteja d'una empresa"
    - **a)** $C(0)=10$, $C(10)=20$ i $C(20)=10$ centenars d'euros: $1.000\,€$, $2.000\,€$ i $1.000\,€$, respectivament.
    - **b)** $C(10)=20$ i $\displaystyle\lim_{t\to10^+}C(t)=20$; és contínua a $t=10$.
    - **c)** Creix de $t=0$ a $t=14$ i decreix de $t=14$ a $t=20$.
    - **d)** El cost màxim es produeix al cap de $14$ anys i és de $28$ centenars d'euros, és a dir, $2.800\,€$.

    <figure markdown="span" class="pau-solution-figure">
      ![Cost de neteja amb el màxim assenyalat](../../img/calcul/fig_pau_c_6_cost_neteja.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_6_cost_neteja.tex">Figura PAU.C.6.</a></strong> Evolució del cost de neteja.</figcaption>
    </figure>

??? example "Solució del problema PAU.C.14. Evolució del preu d'un producte"
    - **a)** $P(2)=40$ i $\displaystyle\lim_{t\to2^+}P(t)=40$; és contínua a $t=2$.
    - **b)** Creix a $[0,2]$ i decreix a $(2,10]$.
    - **c)** El preu màxim és de $40\,€$ i s'assoleix al cap de $2$ anys.
    - **d)** La taxa de variació mitjana durant els darrers cinc anys és $\displaystyle\frac{P(10)-P(5)}{5}=-4\,€$ per any.
    - **e)** La gràfica uneix el tram parabòlic de $(0,0)$ a $(2,40)$ amb el tram lineal decreixent de $(2,40)$ a $(10,8)$.

    <figure markdown="span" class="pau-solution-figure">
      ![Evolució del preu del producte amb el màxim assenyalat](../../img/calcul/fig_pau_c_7_preu_producte.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_pau_c_7_preu_producte.tex">Figura PAU.C.7.</a></strong> Evolució del preu del producte.</figcaption>
    </figure>
