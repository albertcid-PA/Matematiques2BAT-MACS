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
    !!! abstract "Enunciat"
        Observa les dues gràfiques i determina, en cada cas:

        $$
        \lim_{x\to0^-}f(x),
        \qquad
        \lim_{x\to0^+}f(x),
        \qquad
        \lim_{x\to-\infty}f(x)
        \qquad\text{i}\qquad
        \lim_{x\to+\infty}f(x).
        $$

        <figure markdown="span">
          ![Dues gràfiques per practicar la lectura de límits laterals i límits a l'infinit](../../img/calcul/fig_1_12_exercici_limits_dues_grafiques.svg?v=1){ width="850" }
          <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_12_exercici_limits_dues_grafiques.tex">Figura 1.12.</a></strong> Lectura de límits laterals i límits a l'infinit.</figcaption>
        </figure>

    **Resolució que cal justificar**

    En cada gràfica seguim la corba en el sentit que indica el límit. Els límits laterals descriuen el valor al qual s'acosta $f(x)$ quan $x$ s'apropa a $0$, sense mirar necessàriament el valor de $f(0)$.

    - **Gràfica a)** Quan $x\to0^-$ i quan $x\to0^+$, la corba puja sense fita; per tant, els dos límits laterals són $+\infty$. A l'esquerra, la corba s'acosta a la recta horitzontal $y=-1$, i a la dreta creix sense fita. Així,

        $$
        \lim_{x\to0^-}f(x)=+\infty,\quad
        \lim_{x\to0^+}f(x)=+\infty,\quad
        \lim_{x\to-\infty}f(x)=-1,\quad
        \lim_{x\to+\infty}f(x)=+\infty.
        $$

    - **Gràfica b)** Llegint successivament la branca esquerra, la branca dreta i els dos extrems de la gràfica obtenim

        $$
        \lim_{x\to0^-}f(x)=4,\quad
        \lim_{x\to0^+}f(x)=-1,\quad
        \lim_{x\to-\infty}f(x)=1,\quad
        \lim_{x\to+\infty}f(x)=2.
        $$

??? example "Solució de l'exercici 1.2"
    !!! abstract "Enunciat"
        A partir de la gràfica, calcula els valors següents:

        <figure markdown="span">
          ![Gràfica amb un salt finit, una discontinuïtat evitable, una asímptota vertical i asímptotes horitzontals](../../img/calcul/fig_1_13_exercici_lectura_limits.svg?v=1){ width="820" }
          <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_13_exercici_lectura_limits.tex">Figura 1.13.</a></strong> Gràfica de l'exercici 1.2.</figcaption>
        </figure>

        | | | |
        |:--|:--|:--|
        | **a)** $\displaystyle\lim_{x\to-\infty}f(x)$ | **b)** $\displaystyle\lim_{x\to-3^-}f(x)$ | **c)** $\displaystyle\lim_{x\to-3^+}f(x)$ |
        | **d)** $\displaystyle\lim_{x\to-3}f(x)$ | **e)** $\displaystyle\lim_{x\to1}f(x)$ | **f)** $f(1)$ |
        | **g)** $\displaystyle\lim_{x\to4^-}f(x)$ | **h)** $\displaystyle\lim_{x\to4^+}f(x)$ | **i)** $\displaystyle\lim_{x\to+\infty}f(x)$ |

    **Resolució que cal justificar**

    Llegim la gràfica d'esquerra a dreta i distingim sempre entre el límit i el valor de la funció.

    - **a)** La branca esquerra s'acosta a $y=3$: $\displaystyle\lim_{x\to-\infty}f(x)=3$.
    - **b)** En apropar-nos a $-3$ per l'esquerra, $f(x)\to1$.
    - **c)** En apropar-nos a $-3$ per la dreta, $f(x)\to-1$.
    - **d)** Com que $1\ne-1$, els límits laterals no coincideixen i $\displaystyle\lim_{x\to-3}f(x)$ no existeix.
    - **e)** A $x=1$ els dos costats s'acosten a $3$, de manera que $\displaystyle\lim_{x\to1}f(x)=3$.
    - **f)** El punt ple de la gràfica és $(1,0)$; per tant, $f(1)=0$. El valor de la funció no coincideix amb el límit.
    - **g)** i **h)** Quan $x$ s'apropa a $4$ pels dos costats, la gràfica puja sense fita: els dos límits laterals són $+\infty$.
    - **i)** La branca dreta s'acosta a $y=-2$: $\displaystyle\lim_{x\to+\infty}f(x)=-2$.

??? example "Solució de l'exercici 1.3"
    !!! abstract "Enunciat"
        Calcula els límits següents aplicant l'ordre dels infinits:

        | | |
        |:--|:--|
        | **a)** $\displaystyle\lim_{x\to+\infty}\frac{3x^2-2x+1}{(x-2)^2}$ | **b)** $\displaystyle\lim_{x\to+\infty}\frac{2x+\ln x}{\ln x}$ |
        | **c)** $\displaystyle\lim_{x\to+\infty}\frac{5+3^x}{2\cdot3^x+1}$ | **d)** $\displaystyle\lim_{x\to+\infty}\frac{4\cdot2^x}{2^x+3}$ |
        | **e)** $\displaystyle\lim_{x\to+\infty}\frac{x^2-4}{x^3+1}$ | **f)** $\displaystyle\lim_{x\to+\infty}\frac{3x-1}{\sqrt{4x^2+5}}$ |
        | **g)** $\displaystyle\lim_{x\to+\infty}\left(5^x-4x^6\right)$ | **h)** $\displaystyle\lim_{x\to+\infty}\left(\frac{x^2}{x-1}-\frac{x^3}{x^2+2}\right)$ |
        | **i)** $\displaystyle\lim_{x\to-\infty}\left(4x^6-3x^4+x\right)$ | **j)** $\displaystyle\lim_{x\to-\infty}\left(-2x^5+7x^2\right)$ |
        | **k)** $\displaystyle\lim_{x\to-\infty}\frac{3x^3-2}{x^3+5x}$ | **l)** $\displaystyle\lim_{x\to-\infty}\left(2^x+x^3\right)$ |

    **Resolució que cal justificar**

    En cada cas conservem els termes dominants o dividim pel terme que creix més.

    - **a)**

        $$
        \frac{3x^2-2x+1}{(x-2)^2}
        =\frac{3-\frac2x+\frac1{x^2}}{\left(1-\frac2x\right)^2}
        \longrightarrow\frac31=3.
        $$

    - **b)** Com que $x$ creix més de pressa que $\ln x$,

        $$
        \frac{2x+\ln x}{\ln x}=2\frac{x}{\ln x}+1\longrightarrow+\infty.
        $$

    - **c)** L'exponencial domina les constants:

        $$
        \frac{5+3^x}{2\cdot3^x+1}
        =\frac{\frac5{3^x}+1}{2+\frac1{3^x}}
        \longrightarrow\frac12.
        $$

    - **d)**

        $$
        \frac{4\cdot2^x}{2^x+3}
        =\frac4{1+\frac3{2^x}}\longrightarrow4.
        $$

    - **e)**

        $$
        \frac{x^2-4}{x^3+1}
        =\frac{\frac1x-\frac4{x^3}}{1+\frac1{x^3}}\longrightarrow0.
        $$

    - **f)** Com que $x\to+\infty$, $\sqrt{x^2}=x$:

        $$
        \frac{3x-1}{\sqrt{4x^2+5}}
        =\frac{3-\frac1x}{\sqrt{4+\frac5{x^2}}}
        \longrightarrow\frac32.
        $$

    - **g)** $5^x$ creix més de pressa que qualsevol potència de $x$; per tant, $5^x-4x^6\to+\infty$.
    - **h)** Fem les divisions:

        $$
        \frac{x^2}{x-1}=x+1+\frac1{x-1},qquad
        \frac{x^3}{x^2+2}=x-\frac{2x}{x^2+2}.
        $$

        Així, la diferència tendeix a $1$.

    - **i)**

        $$
        4x^6-3x^4+x=x^6\left(4-\frac3{x^2}+\frac1{x^5}\right)\longrightarrow+\infty.
        $$

    - **j)** Quan $x\to-\infty$, $x^5\to-\infty$ i, per tant, $-2x^5\to+\infty$. Aquest terme domina $7x^2$ i el límit és $+\infty$.
    - **k)**

        $$
        \frac{3x^3-2}{x^3+5x}
        =\frac{3-\frac2{x^3}}{1+\frac5{x^2}}\longrightarrow3.
        $$

    - **l)** $2^x\to0$ i $x^3\to-\infty$ quan $x\to-\infty$; per tant, el límit és $-\infty$.

??? example "Solució de l'exercici 1.4"
    !!! abstract "Enunciat"
        Calcula els límits. Substitueix primer el valor al qual tendeix $x$ i indica si obtens un nombre real, un quocient del tipus $\dfrac{k}{0}$ o una indeterminació $\dfrac{0}{0}$. Si el límit és infinit, calcula'n també els límits laterals.

        | | |
        |:--|:--|
        | **a)** $\displaystyle\lim_{x\to2}(x^2-3x+5)$ | **b)** $\displaystyle\lim_{x\to0}\frac{x+4}{x-2}$ |
        | **c)** $\displaystyle\lim_{x\to2}\frac{x+1}{x-2}$ | **d)** $\displaystyle\lim_{x\to-1}\frac{x+2}{(x+1)^2}$ |
        | **e)** $\displaystyle\lim_{x\to2}\frac{x^2-5x+6}{2-x}$ | **f)** $\displaystyle\lim_{x\to-1}\frac{x^3+1}{(x+1)(x-2)}$ |
        | **g)** $\displaystyle\lim_{x\to0}\frac{x^3-4x^2}{2x^2+6x}$ | **h)** $\displaystyle\lim_{x\to3}\frac{x^2+x-12}{x^3-5x^2+3x+9}$ |

    **Resolució que cal justificar**

    - **a)** La substitució directa dona $2^2-3\cdot2+5=3$.
    - **b)** El denominador no s'anul·la:

        $$
        \frac{0+4}{0-2}=-2.
        $$

    - **c)** La substitució dona $\frac3{0}$. El numerador és positiu i $x-2$ canvia de signe:

        $$
        \lim_{x\to2^-}\frac{x+1}{x-2}=-\infty,qquad
        \lim_{x\to2^+}\frac{x+1}{x-2}=+\infty.
        $$

        Com que els límits laterals no coincideixen, el límit no existeix.

    - **d)** La substitució dona $\frac1{0}$. Com que $(x+1)^2>0$ als dos costats,

        $$
        \lim_{x\to-1^-}\frac{x+2}{(x+1)^2}
        =\lim_{x\to-1^+}\frac{x+2}{(x+1)^2}=+\infty.
        $$

    - **e)** Obtenim $\frac00$ i factoritzem:

        $$
        \frac{x^2-5x+6}{2-x}
        =\frac{(x-2)(x-3)}{-(x-2)}=3-x,qquad x\ne2.
        $$

        Per tant, el límit val $3-2=1$.

    - **f)** Obtenim $\frac00$ i usem $x^3+1=(x+1)(x^2-x+1)$:

        $$
        \frac{x^3+1}{(x+1)(x-2)}
        =\frac{x^2-x+1}{x-2}\longrightarrow\frac{1+1+1}{-3}=-1.
        $$

    - **g)** Obtenim $\frac00$ i simplifiquem:

        $$
        \frac{x^3-4x^2}{2x^2+6x}
        =\frac{x^2(x-4)}{2x(x+3)}
        =\frac{x(x-4)}{2(x+3)}\longrightarrow0.
        $$

    - **h)** Obtenim $\frac00$. Factoritzem:

        $$
        x^2+x-12=(x-3)(x+4),qquad
        x^3-5x^2+3x+9=(x-3)^2(x+1).
        $$

        Així,

        $$
        \frac{x^2+x-12}{x^3-5x^2+3x+9}
        =\frac{x+4}{(x-3)(x+1)}.
        $$

        El numerador i $x+1$ són positius prop de $3$; per tant, el signe depèn de $x-3$:

        $$
        \lim_{x\to3^-}=-\infty,qquad
        \lim_{x\to3^+}=+\infty.
        $$

        El límit no existeix.

??? example "Solució de l'exercici 1.5"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        f(x)=\frac{x+2}{x^2+x-2}.
        $$

        - **a)** Calcula els límits de $f(x)$ quan $x\to0$, $x\to-2$, $x\to1$, $x\to+\infty$ i $x\to-\infty$. Quan calgui, estudia els límits laterals.
        - **b)** Indica les asímptotes i les discontinuïtats de la funció.
        - **c)** Representa gràficament els resultats.

    **Resolució que cal justificar**

    Factoritzem el denominador:

    $$
    x^2+x-2=(x+2)(x-1).
    $$

    Per tant,

    $$
    f(x)=\frac1{x-1},qquad x\ne-2,1,
    $$

    però cal conservar les exclusions de la funció original.

    - **Domini:** $D_f=\mathbb{R}\setminus\{-2,1\}$.
    - **Límits demanats:**

        $$
        f(0)=-1,qquad
        \lim_{x\to-2}f(x)=\frac1{-3}=-\frac13.
        $$

        Prop de $x=1$, el numerador és positiu i el signe depèn de $x-1$:

        $$
        \lim_{x\to1^-}f(x)=-\infty,qquad
        \lim_{x\to1^+}f(x)=+\infty.
        $$

        Finalment,

        $$
        \lim_{x\to-\infty}f(x)=\lim_{x\to+\infty}f(x)=0.
        $$

    - **Conclusió:** a $x=-2$ hi ha una discontinuïtat evitable i un forat a $(-2,-\frac13)$; $x=1$ és una asímptota vertical i $y=0$ és una asímptota horitzontal.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfica de la funció de l'exercici 1.5, amb un forat i les asímptotes vertical i horitzontal](../../img/calcul/fig_1_14_resultat_exercici_1_5.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_14_resultat_exercici_1_5.tex">Figura 1.14.</a></strong> Representació de la funció de l'exercici 1.5.</figcaption>
    </figure>

??? example "Solució de l'exercici 1.6"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        g(x)=\frac{x^2-16}{x^2-4x}.
        $$

        - **a)** Determina el domini i calcula els límits en els punts on la funció no està definida.
        - **b)** Calcula els límits quan $x\to+\infty$ i quan $x\to-\infty$.
        - **c)** Classifica les discontinuïtats, indica les asímptotes i representa la funció amb la informació obtinguda.

    **Resolució que cal justificar**

    Factoritzem i simplifiquem sense oblidar el domini original:

    $$
    g(x)=\frac{(x-4)(x+4)}{x(x-4)}=\frac{x+4}{x},qquad x\ne0,4.
    $$

    - **Domini:** $D_g=\mathbb{R}\setminus\{0,4\}$.
    - **En $x=0$:**

        $$
        \lim_{x\to0^-}\frac{x+4}{x}=-\infty,qquad
        \lim_{x\to0^+}\frac{x+4}{x}=+\infty.
        $$

        Per tant, $x=0$ és una asímptota vertical.

    - **En $x=4$:**

        $$
        \lim_{x\to4}g(x)=\frac{4+4}{4}=2.
        $$

        El factor cancel·lat produeix una discontinuïtat evitable i un forat a $(4,2)$.

    - **A l'infinit:**

        $$
        \frac{x+4}{x}=1+\frac4x\longrightarrow1.
        $$

        Així, $y=1$ és una asímptota horitzontal.

    <figure markdown="span" class="exercise-solution-figure">
      ![Gràfica de la funció de l'exercici 1.6, amb un forat i les asímptotes vertical i horitzontal](../../img/calcul/fig_1_15_resultat_exercici_1_6.svg?v=1){ width="62%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_15_resultat_exercici_1_6.tex">Figura 1.15.</a></strong> Representació de la funció de l'exercici 1.6.</figcaption>
    </figure>

??? example "Solució de l'exercici 1.7"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        f(x)=
        \begin{cases}
        \dfrac{x-2}{(x-3)(x-4)}, & x\leq2,\\[6pt]
        \dfrac{x^2-5}{(x+2)(x-2)}, & x>2.
        \end{cases}
        $$

        - **a)** Estudia'n la continuïtat en $x=2$ i classifica la discontinuïtat, si n'hi ha.
        - **b)** Calcula $\displaystyle\lim_{x\to+\infty}f(x)$ i $\displaystyle\lim_{x\to-\infty}f(x)$.

    **Resolució que cal justificar**

    En el punt d'unió $x=2$ calculem el valor i els dos límits laterals amb el tram corresponent.

    $$
    f(2)=\frac{2-2}{(2-3)(2-4)}=0,qquad
    \lim_{x\to2^-}f(x)=0.
    $$

    Per la dreta,

    $$
    \lim_{x\to2^+}\frac{x^2-5}{(x+2)(x-2)}=-\infty,
    $$

    perquè el numerador tendeix a $-1$, $x+2$ és positiu i $x-2\to0^+$. Els límits laterals no coincideixen: hi ha una discontinuïtat infinita i $x=2$ és una asímptota vertical només pel costat dret.

    Per estudiar els infinits utilitzem el tram que correspon:

    $$
    \lim_{x\to-\infty}\frac{x-2}{(x-3)(x-4)}=0,qquad
    \lim_{x\to+\infty}\frac{x^2-5}{(x+2)(x-2)}=1.
    $$

??? example "Solució de l'exercici 1.8"
    !!! abstract "Enunciat"
        En un institut s'inicia una campanya per reduir el consum d'aigua. L'estalvi acumulat ve donat per

        $$
        A(t)=
        \begin{cases}
        e^{0{,}03t}, & 1\leq t\leq60,\\[4pt]
        -\dfrac{t}{30}+8, & 60<t\leq180,
        \end{cases}
        $$

        on $t$ és el nombre de dies transcorreguts i $A(t)$ és l'estalvi expressat en milers de litres.

        - **a)** Estudia la continuïtat d'$A(t)$.
        - **b)** Explica què passa quan han transcorregut $60$ dies.
        - **c)** En quins moments l'estalvi és de $4\,000$ litres?

    **Resolució que cal justificar**

    L'únic punt on pot fallar la continuïtat és $t=60$.

    $$
    A(60)=e^{0{,}03\cdot60}=e^{1{,}8}\approx6{,}050,qquad
    \lim_{t\to60^+}A(t)=-\frac{60}{30}+8=6.
    $$

    Com que els dos valors no coincideixen, hi ha una discontinuïtat de salt d'uns $0{,}050$ milers de litres, és a dir, uns $50$ litres.

    Per trobar quan l'estalvi és de $4$ milers de litres, resolem l'equació a cada tram i comprovem l'interval:

    $$
    e^{0{,}03t}=4
    \Longrightarrow 0{,}03t=\ln4
    \Longrightarrow t=\frac{\ln4}{0{,}03}\approx46{,}21,
    $$

    que pertany al primer tram, i

    $$
    -\frac{t}{30}+8=4
    \Longrightarrow -\frac{t}{30}=-4
    \Longrightarrow t=120,
    $$

    que pertany al segon tram. Per tant, l'estalvi és de $4.000$ litres aproximadament als $46{,}21$ dies i exactament als $120$ dies.

### Derivades

??? example "Solució de l'exercici 1.9"
    !!! abstract "Enunciat"
        Calcula la derivada de cada funció. Quan s'indiqui un punt, calcula també el valor de la derivada en aquest punt.

        | | |
        |:--|:--|
        | **a)** $f(x)=x^3$ | **b)** $f(x)=x^2-3x$, en $x=2$ |
        | **c)** $f(x)=\sqrt{x+5}$, en $x=4$ | **d)** $f(x)=e^{2x}$, en $x=0$ |

    **Resolució que cal justificar**

    - **a)** Regla de la potència:

        $$f'(x)=(x^3)'=3x^2.$$

    - **b)** Derivem terme a terme i després substituïm $x=2$:

        $$f'(x)=(x^2-3x)'=2x-3,qquad f'(2)=4-3=1.$$

    - **c)** Apliquem la regla de la cadena a $(x+5)^{1/2}$:

        $$
        f'(x)=\frac12(x+5)^{-1/2}\cdot1=\frac1{2\sqrt{x+5}},qquad
        f'(4)=\frac1{2\sqrt9}=\frac16.
        $$

    - **d)** Apliquem la regla de la cadena a l'exponencial:

        $$f'(x)=e^{2x}\cdot(2x)'=2e^{2x},qquad f'(0)=2e^0=2.$$

??? example "Solució de l'exercici 1.10"
    !!! abstract "Enunciat"
        Calcula la derivada de les funcions següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=5x^4-3x^2+7$ | **b)** $f(x)=\dfrac{4}{x^3}+2x$ |
        | **c)** $f(x)=3\sqrt{x}-\dfrac{5}{x}$ | **d)** $f(x)=\dfrac{2}{3}x^6-\dfrac{4}{x^2}$ |
        | **e)** $f(x)=7e^x-3\ln x$ | **f)** $f(x)=2\cdot5^x+\log_2x$ |

    **Resolució que cal justificar**

    Abans de derivar els quocients amb potències de $x$, els escrivim amb exponent negatiu.

    - **a)** $f'(x)=5\cdot4x^3-3\cdot2x+0=20x^3-6x$.
    - **b)** $f(x)=4x^{-3}+2x$, de manera que $f'(x)=-12x^{-4}+2=-\dfrac{12}{x^4}+2$.
    - **c)** $f(x)=3x^{1/2}-5x^{-1}$, i

        $$f'(x)=3\cdot\frac12x^{-1/2}+5x^{-2}=\frac3{2\sqrt{x}}+\frac5{x^2}.$$

    - **d)** $f(x)=\dfrac23x^6-4x^{-2}$, i

        $$f'(x)=\frac23\cdot6x^5+8x^{-3}=4x^5+\frac8{x^3}.$$

    - **e)** $f'(x)=7e^x-3\dfrac1x=7e^x-\dfrac3x$.
    - **f)** Utilitzem $(a^x)'=a^x\ln a$ i $(\log_a x)'=\dfrac1{x\ln a}$:

        $$f'(x)=2\cdot5^x\ln5+\frac1{x\ln2}.$$

??? example "Solució de l'exercici 1.11"
    !!! abstract "Enunciat"
        Calcula les derivades. Indica la regla que utilitzes en cada cas.

        | | |
        |:--|:--|
        | **a)** $f(x)=(x^2+1)e^x$ | **b)** $f(x)=x^3\ln x$ |
        | **c)** $f(x)=(2x-1)(x^2+3)$ | **d)** $f(x)=\dfrac{x^2-4}{x+1}$ |
        | **e)** $f(x)=\dfrac{3x+2}{x^2+1}$ | **f)** $f(x)=\dfrac{\ln x}{x^2}$ |

    **Resolució que cal justificar**

    - **a)** Regla del producte:

        $$
        f'(x)=2x\,e^x+(x^2+1)e^x
        =e^x(x^2+2x+1)=e^x(x+1)^2.
        $$

    - **b)** Regla del producte:

        $$f'(x)=3x^2\ln x+x^3\frac1x=x^2(3\ln x+1).$$

    - **c)** Regla del producte:

        $$
        f'(x)=2(x^2+3)+(2x-1)2x
        =6x^2-2x+6.
        $$

    - **d)** Regla del quocient:

        $$
        f'(x)=\frac{2x(x+1)-(x^2-4)}{(x+1)^2}
        =\frac{x^2+2x+4}{(x+1)^2}.
        $$

    - **e)** Regla del quocient:

        $$
        f'(x)=\frac{3(x^2+1)-(3x+2)2x}{(x^2+1)^2}
        =\frac{-3x^2-4x+3}{(x^2+1)^2}.
        $$

    - **f)** Regla del quocient:

        $$
        f'(x)=\frac{\frac1x x^2-(\ln x)2x}{x^4}
        =\frac{1-2\ln x}{x^3}.
        $$

??? example "Solució de l'exercici 1.12"
    !!! abstract "Enunciat"
        Deriva les funcions compostes següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=(2x-3)^7$ | **b)** $f(x)=\sqrt{x^2+5}$ |
        | **c)** $f(x)=\dfrac{1}{(3x+1)^4}$ | **d)** $f(x)=e^{x^2-2x}$ |
        | **e)** $f(x)=\ln(4x^2+1)$ | **f)** $f(x)=(x^3+1)^{-2}$ |
        | **g)** $f(x)=\sqrt{1-e^x}$ | **h)** $f(x)=3^{2x+1}$ |

    **Resolució que cal justificar**

    En tots els apartats derivem la funció exterior i multipliquem per la derivada de l'expressió interior.

    - **a)** $f'(x)=7(2x-3)^6\cdot2=14(2x-3)^6$.
    - **b)** $f'(x)=\dfrac1{2\sqrt{x^2+5}}\cdot2x=\dfrac{x}{\sqrt{x^2+5}}$.
    - **c)** $f(x)=(3x+1)^{-4}$ i

        $$f'(x)=-4(3x+1)^{-5}\cdot3=-\frac{12}{(3x+1)^5}.$$

    - **d)** $f'(x)=e^{x^2-2x}(2x-2)=(2x-2)e^{x^2-2x}$.
    - **e)** $f'(x)=\dfrac1{4x^2+1}\cdot8x=\dfrac{8x}{4x^2+1}$.
    - **f)** $f'(x)=-2(x^3+1)^{-3}\cdot3x^2=-\dfrac{6x^2}{(x^3+1)^3}$.
    - **g)**

        $$f'(x)=\frac1{2\sqrt{1-e^x}}\cdot(-e^x)=-\frac{e^x}{2\sqrt{1-e^x}}.$$

    - **h)** $f'(x)=3^{2x+1}\ln3\cdot2=2\ln3\cdot3^{2x+1}$.

??? example "Solució de l'exercici 1.13"
    !!! abstract "Enunciat"
        Simplifica cada expressió i deriva-la. Conserva les restriccions del domini original.

        | | |
        |:--|:--|
        | **a)** $f(x)=\dfrac{x^3+2x^2}{x}$ | **b)** $f(x)=\dfrac{x^4+3x}{x}$ |
        | **c)** $f(x)=x^2\sqrt{x}$ | **d)** $f(x)=\dfrac{x^2-9}{x-3}$ |
        | **e)** $f(x)=\ln(x^3)$, amb $x>0$ | **f)** $f(x)=e^{\ln x}$, amb $x>0$ |

    **Resolució que cal justificar**

    Simplifiquem, indiquem la restricció que prové de l'expressió original i després derivem.

    - **a)**

        $$f(x)=\frac{x^3+2x^2}{x}=x^2+2x,\quad x\ne0;qquad f'(x)=2x+2.$$

    - **b)**

        $$f(x)=\frac{x^4+3x}{x}=x^3+3,\quad x\ne0;qquad f'(x)=3x^2.$$

    - **c)** $f(x)=x^2x^{1/2}=x^{5/2}$ i $f'(x)=\dfrac52x^{3/2}$.
    - **d)**

        $$f(x)=\frac{(x-3)(x+3)}{x-3}=x+3,\quad x\ne3;qquad f'(x)=1.$$

    - **e)** Com que $x>0$, $\ln(x^3)=3\ln x$; per tant, $f'(x)=\dfrac3x$.
    - **f)** Com que $x>0$, $e^{\ln x}=x$; per tant, $f'(x)=1$.

??? example "Solució de l'exercici 1.14"
    !!! abstract "Enunciat"
        Calcula la derivada de les funcions següents i simplifica el resultat:

        | | |
        |:--|:--|
        | **a)** $f(x)=\dfrac{x^2-4}{x^2+4}$ | **b)** $f(x)=\dfrac{x-2}{(3-x)^2}$ |
        | **c)** $f(x)=\dfrac{4x^2}{x+\sqrt{x}}$ | **d)** $f(x)=\left(\dfrac34-\dfrac{x}{6}\right)^5$ |
        | **e)** $f(x)=\sqrt[4]{2x^3}$ | **f)** $f(x)=(3\sqrt{x}+2)^6$ |

    **Resolució que cal justificar**

    - **a)** Regla del quocient:

        $$
        f'(x)=\frac{2x(x^2+4)-(x^2-4)2x}{(x^2+4)^2}
        =\frac{16x}{(x^2+4)^2}.
        $$

    - **b)** Escrivim $f(x)=(x-2)(3-x)^{-2}$:

        $$
        f'(x)=(3-x)^{-2}+2(x-2)(3-x)^{-3}
        =\frac{x-1}{(3-x)^3}.
        $$

    - **c)** Per $x>0$,

        $$f(x)=\frac{4x^{3/2}}{\sqrt{x}+1}.$$

        Aplicant la regla del quocient,

        $$
        f'(x)=\frac{6\sqrt{x}(\sqrt{x}+1)-4x^{3/2}\frac1{2\sqrt{x}}}{(\sqrt{x}+1)^2}
        =\frac{2\sqrt{x}(2\sqrt{x}+3)}{(\sqrt{x}+1)^2}.
        $$

    - **d)** Regla de la cadena:

        $$f'(x)=5\left(\frac34-\frac{x}{6}\right)^4\left(-\frac16\right)
        =-\frac56\left(\frac34-\frac{x}{6}\right)^4.$$

    - **e)** Per $x\geq0$, $f(x)=\sqrt[4]{2}\,x^{3/4}$. Per $x>0$,

        $$f'(x)=\sqrt[4]{2}\cdot\frac34x^{-1/4}=\frac{3\sqrt[4]{2}}{4\sqrt[4]{x}}.$$

    - **f)** Regla de la cadena:

        $$
        f'(x)=6(3\sqrt{x}+2)^5\cdot\frac3{2\sqrt{x}}
        =\frac{9(3\sqrt{x}+2)^5}{\sqrt{x}}.
        $$

??? example "Solució de l'exercici 1.15"
    !!! abstract "Enunciat"
        Troba la derivada de les funcions següents i simplifica-la sempre que sigui possible:

        | | |
        |:--|:--|
        | **a)** $f(x)=\dfrac{x^4}{(x-2)^3}$ | **b)** $f(x)=\left(\dfrac{x^2-3}{x}\right)^4$ |
        | **c)** $f(x)=\dfrac{x^2}{(3x-1)^4}$ | **d)** $f(x)=\dfrac{4-x^2}{x^2-6x+9}$ |
        | **e)** $f(x)=\left(\dfrac{2-x}{2+x}\right)^{3/2}$ | **f)** $f(x)=\dfrac{3}{x}+\dfrac{x^2}{4}$ |

    **Resolució que cal justificar**

    - **a)** Escrivim $f(x)=x^4(x-2)^{-3}$:

        $$
        f'(x)=4x^3(x-2)^{-3}-3x^4(x-2)^{-4}
        =\frac{x^3(x-8)}{(x-2)^4}.
        $$

    - **b)** Posem directament la regla de la cadena sobre el quocient:

        $$
        f'(x)=4\left(\frac{x^2-3}{x}\right)^3
        \frac{2x\cdot x-(x^2-3)}{x^2}
        =\frac{4(x^2-3)^3(x^2+3)}{x^5}.
        $$

    - **c)** Escrivim $f(x)=x^2(3x-1)^{-4}$:

        $$
        f'(x)=2x(3x-1)^{-4}-12x^2(3x-1)^{-5}
        =-\frac{2x(3x+1)}{(3x-1)^5}.
        $$

    - **d)** Regla del quocient i factorització del denominador:

        $$
        f'(x)=\frac{-2x(x-3)^2-(4-x^2)2(x-3)}{(x-3)^4}
        =\frac{2(3x-4)}{(x-3)^3}.
        $$

    - **e)** Si $u(x)=\dfrac{2-x}{2+x}$, aleshores

        $$u'(x)=\frac{-(2+x)-(2-x)}{(2+x)^2}=-\frac4{(2+x)^2}.$$

        Per la regla de la cadena,

        $$f'(x)=\frac32u(x)^{1/2}u'(x)
        =-\frac6{(x+2)^2}\sqrt{\frac{2-x}{2+x}}.$$

    - **f)** $f(x)=3x^{-1}+\frac14x^2$ i

        $$f'(x)=-3x^{-2}+\frac12x=-\frac3{x^2}+\frac{x}{2}.$$

??? example "Solució de l'exercici 1.16"
    !!! abstract "Enunciat"
        Deriva les funcions següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=\ln(x^2+3)$ | **b)** $f(x)=\ln\sqrt{2-x}$ |
        | **c)** $f(x)=\dfrac{\ln x}{e^{2x}}$ | **d)** $f(x)=e^{3x^2-2}$ |
        | **e)** $f(x)=\log_3(x^2+1)$ | **f)** $f(x)=\ln\left(\ln\dfrac{2}{x}\right)$ |

    **Resolució que cal justificar**

    - **a)** Regla de la cadena del logaritme:

        $$f'(x)=\frac{(x^2+3)'}{x^2+3}=\frac{2x}{x^2+3}.$$

    - **b)** Simplifiquem $\ln\sqrt{2-x}=\frac12\ln(2-x)$:

        $$f'(x)=\frac12\frac{-1}{2-x}=-\frac1{2(2-x)}.$$

    - **c)** Escrivim $f(x)=(\ln x)e^{-2x}$ i apliquem el producte:

        $$f'(x)=\frac1x e^{-2x}-2(\ln x)e^{-2x}
        =e^{-2x}\left(\frac1x-2\ln x\right).$$

    - **d)** $f'(x)=e^{3x^2-2}\cdot6x=6xe^{3x^2-2}$.
    - **e)**

        $$f'(x)=\frac{(x^2+1)'}{(x^2+1)\ln3}=\frac{2x}{(x^2+1)\ln3}.$$

    - **f)** Apliquem dues vegades la regla de la cadena:

        $$
        f'(x)=\frac1{\ln(2/x)}\cdot\left(\ln\frac2x\right)'
        =\frac1{\ln(2/x)}\left(-\frac1x\right)
        =-\frac1{x\ln(2/x)}.
        $$

??? example "Solució de l'exercici 1.17"
    !!! abstract "Enunciat"
        Calcula $f'(x)$, $f''(x)$ i $f'''(x)$ per a cadascuna de les funcions següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=x^3-2x^2+4x-1$ | **b)** $f(x)=e^{3x}$ |
        | **c)** $f(x)=(x-2)e^x$ | **d)** $f(x)=\ln(x+3)$ |
        | **e)** $f(x)=\dfrac{1}{x+2}$ | |

    **Resolució que cal justificar**

    Derivem successivament el resultat de la fila anterior.

    - **a)**

        $$f'(x)=3x^2-4x+4,qquad f''(x)=6x-4,qquad f'''(x)=6.$$

    - **b)**

        $$f'(x)=3e^{3x},qquad f''(x)=9e^{3x},qquad f'''(x)=27e^{3x}.$$

    - **c)**

        $$
        f'(x)=e^x+(x-2)e^x=(x-1)e^x,
        $$

        $$f''(x)=e^x+(x-1)e^x=xe^x,qquad f'''(x)=e^x+xe^x=(x+1)e^x.$$

    - **d)**

        $$f'(x)=\frac1{x+3},qquad f''(x)=-\frac1{(x+3)^2},qquad f'''(x)=\frac2{(x+3)^3}.$$

    - **e)** Escrivim $f(x)=(x+2)^{-1}$:

        $$f'(x)=-\frac1{(x+2)^2},qquad f''(x)=\frac2{(x+2)^3},qquad f'''(x)=-\frac6{(x+2)^4}.$$

### Càlcul de coeficients

??? example "Solució de l'exercici 1.18"
    !!! abstract "Enunciat"
        Sigui

        $$
        f(x)=ax^2+bx+1.
        $$

        Calcula $a$ i $b$ sabent que $f(1)=4$ i $f'(1)=5$.

    **Resolució que cal justificar**

    Derivem primer:

    $$f'(x)=2ax+b.$$

    Traduïm les dues condicions en equacions:

    $$
    f(1)=a+b+1=4\Longrightarrow a+b=3,
    $$

    $$
    f'(1)=2a+b=5.
    $$

    Restant les equacions obtenim $a=2$ i, substituint a $a+b=3$, $b=1$.

??? example "Solució de l'exercici 1.19"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        g(x)=ax^3+bx^2-2x+1.
        $$

        Determina $a$ i $b$ perquè $g(1)=2$ i $g'(1)=5$.

    **Resolució que cal justificar**

    $$g'(x)=3ax^2+2bx-2.$$

    Les condicions donen

    $$
    g(1)=a+b-2+1=2\Longrightarrow a+b=3,
    $$

    $$
    g'(1)=3a+2b-2=5\Longrightarrow3a+2b=7.
    $$

    De $b=3-a$ i la segona equació:

    $$3a+2(3-a)=7\Longrightarrow a=1,qquad b=2.$$

??? example "Solució de l'exercici 1.20"
    !!! abstract "Enunciat"
        Sigui

        $$
        h(x)=ax^2+bx+3.
        $$

        Determina els coeficients $a$ i $b$ sabent que $h(-1)=7$ i $h'(2)=6$. Escriu la funció obtinguda.

    **Resolució que cal justificar**

    $$h'(x)=2ax+b.$$

    Transformem les condicions:

    $$
    h(-1)=a-b+3=7\Longrightarrow a-b=4,
    $$

    $$
    h'(2)=4a+b=6.
    $$

    De la primera, $b=a-4$. Substituïm:

    $$4a+(a-4)=6\Longrightarrow5a=10\Longrightarrow a=2,qquad b=-2.$$

    Per tant,

    $$h(x)=2x^2-2x+3.$$

??? example "Solució de l'exercici 1.21"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        p(x)=x^3+ax^2+bx+c.
        $$

        La seva gràfica passa pel punt $P=(0,2)$ i té un extrem relatiu en el punt $Q=(1,0)$.

        - **a)** Escriu les tres equacions que expressen aquestes condicions.
        - **b)** Determina els coeficients $a$, $b$ i $c$.
        - **c)** Classifica l'extrem relatiu mitjançant la derivada segona.

    **Resolució que cal justificar**

    La gràfica passa per $P=(0,2)$, passa per $Q=(1,0)$ i té tangent horitzontal en $Q$. Per tant,

    $$p(0)=2,qquad p(1)=0,qquad p'(1)=0.$$

    Com que

    $$p'(x)=3x^2+2ax+b,$$

    les tres equacions són

    $$
    c=2,qquad 1+a+b+c=0,qquad3+2a+b=0.
    $$

    Substituint $c=2$:

    $$a+b=-3,qquad2a+b=-3.$$

    Restant les dues equacions obtenim $a=0$ i després $b=-3$. Així,

    $$p(x)=x^3-3x+2.$$

    Finalment,

    $$p''(x)=6x+2a=6x,qquad p''(1)=6>0.$$

    Per tant, $Q=(1,0)$ és un mínim relatiu.

## Tema 2. Aplicacions de les derivades

### Derivabilitat

??? example "Solució de l'exercici 2.1"
    !!! abstract "Enunciat"
        Observa les sis gràfiques i indica en quins punts les funcions no són derivables. En cada cas, explica gràficament el motiu. Alguna de les funcions és derivable en tot $\mathbb{R}$?

        <figure markdown="span">
          ![Sis gràfiques per identificar punts en què una funció no és derivable](../../img/calcul/fig_2_26_exercici_punts_no_derivables.svg?v=1){ width="920" }
          <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_26_exercici_punts_no_derivables.tex">Figura 2.26.</a></strong> Estudi gràfic de la derivabilitat.</figcaption>
        </figure>

    **Resolució que cal justificar**

    Una funció només pot ser derivable en un punt si és contínua i la gràfica hi té una única tangent amb pendent finit. Observant cada gràfica:

    - **a)** No és derivable a $x=-1$ ni a $x=1$: en aquests punts la gràfica presenta punts angulosos.
    - **b)** La corba és suau i té una tangent ben definida en cada punt; és derivable en tot $\mathbb{R}$.
    - **c)** No és derivable a $x=1$, on hi ha un punt angulós.
    - **d)** No és derivable a $x=-2$ ni a $x=1$: en els punts d'unió no coincideixen els pendents laterals.
    - **e)** No és derivable a $x=-1$, on la tangent no és única.
    - **f)** No és derivable a $x=1$, perquè la gràfica no és contínua en aquest punt.

??? example "Solució de l'exercici 2.2"
    !!! abstract "Enunciat"
        La figura representa una funció $y=f(x)$.

        - **a)** Calcula $f'(-2)$, $f'(1)$ i $f'(4)$ a partir del pendent de la gràfica.
        - **b)** Indica en quins punts la funció no és derivable i justifica la resposta gràficament.

        <figure markdown="span">
          ![Gràfica d'una funció formada per un arc de paràbola, un tram constant i un tram rectilini](../../img/calcul/fig_2_27_exercici_derivades_grafica.svg?v=1){ width="700" }
          <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_27_exercici_derivades_grafica.tex">Figura 2.27.</a></strong> Càlcul de derivades a partir d'una gràfica.</figcaption>
        </figure>

    **Resolució que cal justificar**

    - **a)** La derivada és el pendent de la tangent. A $x=-2$ i a $x=1$ la tangent és horitzontal, de manera que

        $$f'(-2)=0,qquad f'(1)=0.$$

        El tram que conté $x=4$ és una recta que puja $2$ unitats per cada unitat horitzontal; per tant, $f'(4)=2$.

    - **b)** A $x=0$ i $x=2$ els trams s'uneixen amb pendents diferents, i a $x=3$ la gràfica presenta una discontinuïtat. En conseqüència, $f$ no és derivable a $x=0$, $x=2$ ni $x=3$.

??? example "Solució de l'exercici 2.3"
    !!! abstract "Enunciat"
        Estudia la continuïtat i la derivabilitat de la funció en $x=1$:

        $$
        f(x)=
        \begin{cases}
        x^2+x-2, & x\leq 1,\\[2pt]
        3x-3, & x>1.
        \end{cases}
        $$

    **Resolució que cal justificar**

    Primer comprovem la continuïtat:

    $$
    f(1)=1^2+1-2=0,qquad
    \lim_{x\to1^+}(3x-3)=0.
    $$

    Els dos límits laterals coincideixen amb $f(1)$; per tant, és contínua. Derivem els dos trams:

    $$f'_-(1)=(2x+1)\big|_{x=1}=3,qquad f'_+(1)=3.$$

    Com que les derivades laterals coincideixen, $f$ és derivable a $x=1$ i $f'(1)=3$.

??? example "Solució de l'exercici 2.4"
    !!! abstract "Enunciat"
        Estudia la continuïtat i la derivabilitat de la funció en $x=-1$:

        $$
        f(x)=
        \begin{cases}
        x^2+4x+1, & x\leq -1,\\[2pt]
        x-1, & x>-1.
        \end{cases}
        $$

    **Resolució que cal justificar**

    Comprovem la continuïtat:

    $$
    f(-1)=(-1)^2+4(-1)+1=-2,qquad
    \lim_{x\to-1^+}(x-1)=-2.
    $$

    La funció és contínua. Ara comparem les derivades laterals:

    $$f'_-( -1)=(2x+4)\big|_{x=-1}=2,qquad f'_+( -1)=1.$$

    Com que $2\ne1$, no és derivable a $x=-1$; la gràfica hi té un punt angulós.

??? example "Solució de l'exercici 2.5"
    !!! abstract "Enunciat"
        Estudia la continuïtat i la derivabilitat de la funció en $x=2$. Interpreta gràficament el resultat.

        $$
        f(x)=
        \begin{cases}
        \sqrt{2-x}, & x\leq 2,\\[2pt]
        \sqrt{x-2}, & x>2.
        \end{cases}
        $$

    **Resolució que cal justificar**

    Els dos trams tendeixen a zero i $f(2)=0$:

    $$
    \lim_{x\to2^-}\sqrt{2-x}=0=f(2)=\lim_{x\to2^+}\sqrt{x-2}.
    $$

    Per tant, la funció és contínua. Les derivades són

    $$
    f'(x)=
    \begin{cases}
    -\dfrac1{2\sqrt{2-x}}, & x<2,\\[6pt]
    \dfrac1{2\sqrt{x-2}}, & x>2.
    \end{cases}
    $$

    Així,

    $$\lim_{x\to2^-}f'(x)=-\infty,qquad \lim_{x\to2^+}f'(x)=+\infty.$$

    No hi ha una derivada finita comuna; la funció no és derivable a $x=2$ i la gràfica hi presenta dues semitangents verticals.

??? example "Solució de l'exercici 2.6"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        f(x)=
        \begin{cases}
        x^2+5x+4, & x<-2,\\[2pt]
        2x+2, & -2\leq x\leq 1,\\[2pt]
        x+1, & x>1.
        \end{cases}
        $$

        - **a)** Estudia la continuïtat i la derivabilitat de $f$ en els punts d'unió.
        - **b)** Determina $f'(x)$ en els intervals on existeix.
        - **c)** Representa, en uns eixos separats, les funcions $f$ i $f'$.

    **Resolució que cal justificar**

    En $x=-2$:

    $$
    \lim_{x\to-2^-}(x^2+5x+4)=-2,qquad f(-2)=2(-2)+2=-2.
    $$

    És contínua, però

    $$f'_-( -2)=(2x+5)\big|_{-2}=1,qquad f'_+( -2)=2.$$

    Per tant, no és derivable a $x=-2$.

    En $x=1$:

    $$f(1)=2(1)+2=4,qquad \lim_{x\to1^+}(x+1)=2.$$

    Hi ha una discontinuïtat de salt; en conseqüència, tampoc és derivable a $x=1$.

    En els intervals oberts,

    $$
    f'(x)=
    \begin{cases}
    2x+5, & x<-2,\\
    2, & -2<x<1,\\
    1, & x>1.
    \end{cases}
    $$

??? example "Solució de l'exercici 2.7"
    !!! abstract "Enunciat"
        Estudia la continuïtat i la derivabilitat de les funcions següents. Indica el conjunt de punts on cadascuna és derivable i escriu-ne la funció derivada.

        **a)**

        $$
        f(x)=
        \begin{cases}
        0, & x<0,\\[2pt]
        x^2, & 0\leq x<2,\\[2pt]
        2x, & x\geq2.
        \end{cases}
        $$

        **b)**

        $$
        g(x)=
        \begin{cases}
        e^{2x}, & x\leq0,\\[2pt]
        2x+1, & x>0.
        \end{cases}
        $$

    **Resolució que cal justificar**

    - **a)** En $x=0$, els dos trams valen $0$ i les derivades laterals són $0$ i $2x|_{0}=0$: és contínua i derivable. En $x=2$, els dos trams valen $4$, però

        $$f'_-(2)=2\cdot2=4,qquad f'_+(2)=2.$$

        És contínua però no derivable a $x=2$. Per tant,

        $$
        f'(x)=
        \begin{cases}
        0, & x<0,\\
        0, & x=0,\\
        2x, & 0<x<2,\\
        2, & x>2.
        \end{cases}
        $$

    - **b)** En $x=0$, $e^0=1=2\cdot0+1$; és contínua. A més,

        $$g'_-(0)=2e^0=2,qquad g'_+(0)=2.$$

        És derivable en tot $\mathbb{R}$ i

        $$
        g'(x)=
        \begin{cases}
        2e^{2x}, & x<0,\\
        2, & x\geq0.
        \end{cases}
        $$

??? example "Solució de l'exercici 2.8"
    !!! abstract "Enunciat"
        Troba els valors de $k$ perquè la funció sigui derivable en tot $\mathbb{R}$:

        $$
        f_k(x)=
        \begin{cases}
        kx^4+3x^2+5, & x\leq0,\\[2pt]
        2x^2+5, & x>0.
        \end{cases}
        $$

    **Resolució que cal justificar**

    En $x=0$, els dos trams valen $5$ per a qualsevol $k$; per tant, sempre és contínua. Les derivades laterals són

    $$
    \lim_{x\to0^-}(4kx^3+6x)=0,qquad \lim_{x\to0^+}4x=0.
    $$

    També coincideixen per a qualsevol valor del paràmetre. Per tant, la funció és derivable en tot $\mathbb{R}$ per a qualsevol $k\in\mathbb{R}$.

??? example "Solució de l'exercici 2.9"
    !!! abstract "Enunciat"
        Calcula $m$ i $n$ perquè la funció sigui derivable en tot $\mathbb{R}$:

        $$
        f(x)=
        \begin{cases}
        x^2+mx+4, & x\leq0,\\[2pt]
        -2x^2+n, & x>0.
        \end{cases}
        $$

    **Resolució que cal justificar**

    La continuïtat en $x=0$ exigeix

    $$4=n.$$

    Les derivades dels trams són $2x+m$ i $-4x$. La derivabilitat exigeix

    $$m=0.$$

    Per tant, $m=0$ i $n=4$.

??? example "Solució de l'exercici 2.10"
    !!! abstract "Enunciat"
        Determina $a$ i $b$ perquè la funció sigui derivable en tot $\mathbb{R}$:

        $$
        f(x)=
        \begin{cases}
        x^3+1, & x<2,\\[2pt]
        ax^2+b, & x\geq2.
        \end{cases}
        $$

    **Resolució que cal justificar**

    La continuïtat en $x=2$ dona

    $$2^3+1=4a+b\Longrightarrow4a+b=9.$$

    Les derivades laterals han de coincidir:

    $$3\cdot2^2=2a\cdot2\Longrightarrow12=4a\Longrightarrow a=3.$$

    Substituint a l'equació de continuïtat, $12+b=9$, i obtenim $b=-3$.

??? example "Solució de l'exercici 2.11"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        f(x)=
        \begin{cases}
        x^2-4x+m, & x\leq2,\\[2pt]
        -x^2+nx, & x>2.
        \end{cases}
        $$

        - **a)** Calcula $m$ i $n$ perquè $f$ sigui derivable en tot $\mathbb{R}$.
        - **b)** Per als valors obtinguts, determina els punts en què $f'(x)=0$.

    **Resolució que cal justificar**

    La continuïtat en $x=2$ exigeix

    $$4-8+m=-4+2n\Longrightarrow m=2n.$$

    Les derivades són $2x-4$ i $-2x+n$. La igualtat de derivades laterals dona

    $$0=-4+n\Longrightarrow n=4,$$

    i, per tant, $m=8$.

    Amb aquests valors,

    $$
    f'(x)=
    \begin{cases}
    2x-4, & x<2,\\
    -2x+4, & x>2,
    \end{cases}
    $$

    i $f'(2)=0$. Les dues equacions s'anul·len només a $x=2$; per tant, aquest és l'únic punt amb $f'(x)=0$.

??? example "Solució de l'exercici 2.12"
    !!! abstract "Enunciat"
        Calcula $a$ i $b$ perquè cadascuna de les funcions següents sigui derivable en tot $\mathbb{R}$:

        **a)**

        $$
        f(x)=
        \begin{cases}
        ax^2+2x, & x\leq1,\\[2pt]
        x^2-bx-1, & x>1.
        \end{cases}
        $$

        **b)**

        $$
        g(x)=
        \begin{cases}
        x^3+2x, & x\leq0,\\[2pt]
        ax+b, & x>0.
        \end{cases}
        $$

    **Resolució que cal justificar**

    - **a)** Continuïtat en $x=1$:

        $$a+2=-b\Longrightarrow a+b=-2.$$

        Igualtat de derivades:

        $$2a+2=2-b\Longrightarrow2a+b=0.$$

        Restant les equacions, $a=2$ i $b=-4$.

    - **b)** Continuïtat en $x=0$:

        $$0=b\Longrightarrow b=0.$$

        Igualtat de derivades:

        $$3\cdot0^2+2=a\Longrightarrow a=2.$$

??? example "Solució de l'exercici 2.13"
    !!! abstract "Enunciat"
        Calcula $a$ i $b$ perquè la funció sigui derivable en tot el seu domini:

        $$
        f(x)=
        \begin{cases}
        a-2x, & x\leq1,\\[6pt]
        \dfrac{b+\ln x}{x}, & x>1.
        \end{cases}
        $$

    **Resolució que cal justificar**

    La continuïtat en $x=1$ exigeix

    $$a-2=b\Longrightarrow a=b+2.$$

    Per al tram dret,

    $$
    \left(\frac{b+\ln x}{x}\right)'=\frac{1-b-\ln x}{x^2}.
    $$

    Igualem les derivades laterals en $x=1$:

    $$-2=1-b\Longrightarrow b=3.$$

    Finalment, $a=b+2=5$.

??? example "Solució de l'exercici 2.14"
    !!! abstract "Enunciat"
        Determina $a$ i $b$ perquè la funció sigui derivable en tot $\mathbb{R}$:

        $$
        f(x)=
        \begin{cases}
        ax^2+bx+1, & x\leq1,\\[6pt]
        \dfrac{a}{x}-\dfrac{b}{x^2}+3, & x>1.
        \end{cases}
        $$

    **Resolució que cal justificar**

    La continuïtat en $x=1$ dona

    $$a+b+1=a-b+3\Longrightarrow b=1.$$

    Les derivades són

    $$2ax+b,qquad -\frac{a}{x^2}+\frac{2b}{x^3}.$$

    En $x=1$ han de coincidir:

    $$2a+b=-a+2b\Longrightarrow3a=b.$$

    Com que $b=1$, obtenim $a=\frac13$.

??? example "Solució de l'exercici 2.15"
    !!! abstract "Enunciat"
        Escriu les funcions següents a trossos i estudia'n la continuïtat i la derivabilitat. Indica el conjunt de punts on cadascuna és derivable.

        | | |
        |:--|:--|
        | **a)** $f(x)=\lvert x+4\rvert$ | **b)** $f(x)=\lvert -2x+4\rvert$ |
        | **c)** $h(x)=2x+\lvert x-1\rvert$ | |

    **Resolució que cal justificar**

    En cada cas separem segons el signe de l'expressió dins del valor absolut.

    - **a)** $x+4=0$ quan $x=-4$:

        $$
        |x+4|=
        \begin{cases}
        -x-4, & x<-4,\\
        x+4, & x\geq-4.
        \end{cases}
        $$

        És contínua, però les derivades laterals són $-1$ i $1$; no és derivable a $x=-4$.

    - **b)** $-2x+4=0$ quan $x=2$:

        $$
        |-2x+4|=
        \begin{cases}
        -2x+4, & x\leq2,\\
        2x-4, & x>2.
        \end{cases}
        $$

        És contínua, però els pendents laterals són $-2$ i $2$; no és derivable a $x=2$.

    - **c)** $x-1=0$ quan $x=1$:

        $$
        h(x)=
        \begin{cases}
        2x-(x-1)=x+1, & x<1,\\
        2x+(x-1)=3x-1, & x\geq1.
        \end{cases}
        $$

        És contínua, però les derivades laterals són $1$ i $3$; no és derivable a $x=1$.

### Creixement i extrems

<div class="exercise-monotonia-tables" markdown="1">
??? example "Solució de l'exercici 2.16"
    !!! abstract "Enunciat"
        Determina els intervals de creixement i de decreixement i calcula els màxims i els mínims relatius de les funcions següents. Justifica si cada solució de $f'(x)=0$ correspon realment a un extrem.

        | | |
        |:--|:--|
        | **a)** $f(x)=x^3-3x^2-9x+4$ | **b)** $f(x)=x^4-10x^2+9$ |
        | **c)** $f(x)=\dfrac{x^2+3}{x-1}$ | **d)** $f(x)=(x-1)e^{-x}$ |
        | **e)** $f(x)=\dfrac{\ln x}{x^2}$ | **f)** $f(x)=\dfrac{x^3}{x^2+1}$ |
        | **g)** $f(x)=x^3-3x^2+3x$ | |

    **Resolució que cal justificar**

    Per estudiar la monotonia, calculem $f'(x)$, trobem els punts crítics i fem el quadre de signes. Els zeros de la derivada, les discontinuïtats i els extrems del domini han de separar els intervals.

    - **a)** $f'(x)=3x^2-6x-9=3(x+1)(x-3)$. El signe és $+$, $-$, $+$ en els intervals determinats per $-1$ i $3$. Per tant, creix a $(-\infty,-1)$ i $(3,+\infty)$, i decreix a $(-1,3)$. Hi ha un màxim relatiu a $(-1,9)$ i un mínim relatiu a $(3,-23)$.
    - **b)** $f'(x)=4x^3-20x=4x(x^2-5)$. Els punts crítics són $-\sqrt5$, $0$ i $\sqrt5$. La funció decreix a $(-\infty,-\sqrt5)$ i $(0,\sqrt5)$, i creix a $(-\sqrt5,0)$ i $(\sqrt5,+\infty)$. Té mínims relatius a $(\pm\sqrt5,-16)$ i un màxim relatiu a $(0,9)$.
    - **c)** $D_f=\mathbb{R}\setminus\{1\}$ i

        $$
        f'(x)=\frac{(2x-2)(x-1)-(x^2-2x+3)}{(x-1)^2}
        =\frac{(x+1)(x-3)}{(x-1)^2}.
        $$

        Cal separar també $x=1$. Creix a $(-\infty,-1)$ i $(3,+\infty)$; decreix a $(-1,1)$ i $(1,3)$. Hi ha un màxim relatiu a $(-1,-2)$ i un mínim relatiu a $(3,6)$.
    - **d)** Per la regla del producte i la cadena,

        $$f'(x)=e^{-x}-(x-1)e^{-x}=e^{-x}(2-x).$$

        Com que $e^{-x}>0$, creix si $x<2$ i decreix si $x>2$. Per tant, té un màxim relatiu a $(2,e^{-2})$.
    - **e)** $D_f=(0,+\infty)$ i

        $$f'(x)=\frac{1-2\ln x}{x^3}.$$

        Com que $x^3>0$, $f'(x)=0$ quan $x=\sqrt e$. Creix a $(0,\sqrt e)$ i decreix a $(\sqrt e,+\infty)$; té un màxim relatiu a $\left(\sqrt e,\frac1{2e}\right)$.
    - **f)** Per la regla del quocient,

        $$
        f'(x)=\frac{3x^2(x^2+1)-2x(x^3+1)}{(x^2+1)^2}
        =\frac{x^2(x^2+3)}{(x^2+1)^2}\geq0.
        $$

        La funció és creixent a tot $\mathbb{R}$. Tot i que $f'(0)=0$, a $(0,0)$ no canvia el signe de la derivada i no hi ha cap extrem.
    - **g)** $f'(x)=3x^2-6x+3=3(x-1)^2\geq0$. La funció és creixent a tot $\mathbb{R}$. El punt $(1,1)$ és estacionari, però no és un extrem perquè la derivada no canvia de signe.

??? example "Solució de l'exercici 2.17"
    !!! abstract "Enunciat"
        Fes un estudi complet del creixement, el decreixement i els extrems relatius de les funcions següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=x^3-12x+1$ | **b)** $f(x)=x^4-4x^2$ |
        | **c)** $f(x)=\dfrac{x^2-4}{x^2+1}$ | **d)** $f(x)=(x+1)e^{-x}$ |

    **Resolució que cal justificar**

    Cal justificar els intervals amb el signe de la derivada.

    - **a)** $f'(x)=3x^2-12=3(x-2)(x+2)$. Creix a $(-\infty,-2)$ i $(2,+\infty)$, i decreix a $(-2,2)$. Té un màxim relatiu a $(-2,17)$ i un mínim relatiu a $(2,-15)$.
    - **b)** $f'(x)=4x^3-8x=4x(x^2-2)$. Decreix a $(-\infty,-\sqrt2)$ i $(0,\sqrt2)$, i creix a $(-\sqrt2,0)$ i $(\sqrt2,+\infty)$. Té mínims relatius a $(\pm\sqrt2,-4)$ i un màxim relatiu a $(0,0)$.
    - **c)**

        $$
        f'(x)=\frac{2x(x^2+1)-2x(x^2-4)}{(x^2+1)^2}
        =\frac{10x}{(x^2+1)^2}.
        $$

        Decreix a $(-\infty,0)$ i creix a $(0,+\infty)$; té un mínim relatiu i absolut a $(0,-4)$.
    - **d)** $f'(x)=e^{-x}-(x+1)e^{-x}=-xe^{-x}$. Com que $e^{-x}>0$, creix a $(-\infty,0)$ i decreix a $(0,+\infty)$. Té un màxim relatiu i absolut a $(0,1)$.

### Representació de funcions

??? example "Solució de l'exercici 2.18"
    !!! abstract "Enunciat"
        Estudia i representa les funcions polinòmiques següents. Indica el domini, els talls amb els eixos, les branques a l'infinit, els intervals de creixement i decreixement i els extrems.

        | | |
        |:--|:--|
        | **a)** $f(x)=x^4-6x^2+5$ | **b)** $f(x)=x^3-12x-16$ |
        | **c)** $f(x)=x^4-4x^3$ | **d)** $f(x)=x^5-15x^4+75x^3-125x^2$ |
        | **e)** $f(x)=4x^3-12x^2+9x-2$ | **f)** $f(x)=x^2(x-4)^2$ |

    **Resolució que cal justificar**

    Totes sis funcions tenen domini $\mathbb{R}$. Factoritzem per trobar els talls amb l'eix $X$ i utilitzem la derivada per justificar la forma de la gràfica.

    - **a)** $f(x)=(x^2-1)(x^2-5)$; talla l'eix $X$ a $x=\pm1,\pm\sqrt5$ i l'eix $Y$ a $(0,5)$. Com que $f'(x)=4x(x^2-3)$, hi ha mínims a $(\pm\sqrt3,-4)$ i un màxim a $(0,5)$. Als dos infinits, $f(x)\to+\infty$.
    - **b)** $f(x)=(x+2)^2(x-4)$; els zeros són $-2$ (doble) i $4$, i $f(0)=-16$. Com que $f'(x)=3(x-2)(x+2)$, hi ha un màxim a $(-2,0)$ i un mínim a $(2,-32)$. A l'esquerra $f(x)\to-\infty$ i a la dreta $f(x)\to+\infty$.
    - **c)** $f(x)=x^3(x-4)$; els zeros són $0$ (triple) i $4$. Com que $f'(x)=4x^2(x-3)$, decreix fins a $x=3$ i creix després. Té un mínim a $(3,-27)$; $(0,0)$ és estacionari, però no és un extrem. Als dos infinits, $f(x)\to+\infty$.
    - **d)** $f(x)=x^2(x-5)^3$; els zeros són $0$ (doble) i $5$ (triple). Com que $f'(x)=5x(x-2)(x-5)^2$, té un màxim a $(0,0)$ i un mínim a $(2,-108)$. A $(5,0)$ la derivada s'anul·la, però no canvia de signe. A l'esquerra $f(x)\to-\infty$ i a la dreta $f(x)\to+\infty$.
    - **e)** $f(x)=4\left(x-\frac12\right)^2(x-2)$; els zeros són $\frac12$ (doble) i $2$, i $f(0)=-2$. Com que $f'(x)=3(2x-1)(2x-3)$, té un màxim a $\left(\frac12,0\right)$ i un mínim a $\left(\frac32,-2\right)$. A l'esquerra $f(x)\to-\infty$ i a la dreta $f(x)\to+\infty$.
    - **f)** $f(x)=x^2(x-4)^2$; els zeros són $0$ i $4$, tots dos dobles. Com que $f'(x)=4x(x-2)(x-4)$, té mínims a $(0,0)$ i $(4,0)$ i un màxim a $(2,16)$. Als dos infinits, $f(x)\to+\infty$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Representacions de les sis funcions polinòmiques de l'exercici 2.18](../../img/calcul/fig_2_31_resultat_exercici_2_18.svg?v=2){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_31_resultat_exercici_2_18.tex">Figura 2.31.</a></strong> Representacions de les funcions polinòmiques de l'exercici 2.18.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.19"
    !!! abstract "Enunciat"
        Estudia i representa les funcions racionals següents. Calcula els límits quan $x\to-\infty$ i $x\to+\infty$ i determina si hi ha una asímptota horitzontal o una branca infinita. Troba també les asímptotes verticals i, quan hi hagi asímptota horitzontal, estudia la posició de la corba respecte d'aquesta.

        | | |
        |:--|:--|
        | **a)** $f(x)=\dfrac{x^2-1}{x^2-x-2}$ | **b)** $f(x)=\dfrac{2x^2-4}{x^2-1}$ |
        | **c)** $f(x)=\dfrac{-x^2+x+6}{x^2-4}$ | **d)** $f(x)=\dfrac{3x^2+4}{x^2-4}$ |
        | **e)** $f(x)=\dfrac{1}{(x+1)(x-2)}$ | **f)** $f(x)=\dfrac{x^2}{x-1}$ |
        | **g)** $f(x)=\dfrac{-x^2}{x+1}$ | |

    **Resolució que cal justificar**

    En cada funció racional comencem pel domini, factoritzem si és possible i conservem sempre les exclusions de l'expressió original.

    - **a)** $\displaystyle f(x)=\frac{(x-1)(x+1)}{(x-2)(x+1)}=\frac{x-1}{x-2}$, amb $D_f=\mathbb{R}\setminus\{-1,2\}$. Hi ha un forat a $\left(-1,\frac23\right)$, una asímptota vertical $x=2$ i una asímptota horitzontal $y=1$. Els talls són $(1,0)$ i $\left(0,\frac12\right)$. Com que $f'(x)=-1/(x-2)^2<0$, decreix en cada interval del domini.
    - **b)** $D_f=\mathbb{R}\setminus\{-1,1\}$; $x=\pm1$ són asímptotes verticals i $y=2$ és horitzontal. Els talls són $(\pm\sqrt2,0)$ i $(0,4)$. Com que $f'(x)=4x/(x^2-1)^2$, decreix per $x<0$ i creix per $x>0$, separant a $x=\pm1$. Té un mínim relatiu a $(0,4)$.
    - **c)** $\displaystyle f(x)=\frac{-(x-3)(x+2)}{(x-2)(x+2)}=\frac{3-x}{x-2}$, amb $D_f=\mathbb{R}\setminus\{-2,2\}$. Hi ha un forat a $\left(-2,-\frac54\right)$, una asímptota vertical $x=2$ i una d'horitzontal $y=-1$. Els talls són $(3,0)$ i $\left(0,-\frac32\right)$. Com que $f'(x)=-1/(x-2)^2<0$, decreix en cada interval del domini.
    - **d)** $D_f=\mathbb{R}\setminus\{-2,2\}$; $x=\pm2$ són asímptotes verticals i $y=3$ és horitzontal. No talla l'eix $X$ i talla l'eix $Y$ a $(0,-1)$. Com que $f'(x)=-32x/(x^2-4)^2$, creix per $x<0$ i decreix per $x>0$, separant a $x=\pm2$. Té un màxim relatiu a $(0,-1)$.
    - **e)** $D_f=\mathbb{R}\setminus\{-1,2\}$; $x=-1$ i $x=2$ són asímptotes verticals, i $y=0$ és horitzontal. Talla l'eix $Y$ a $\left(0,-\frac12\right)$ i no talla l'eix $X$. Com que $f'(x)=-(2x-1)/(x^2-x-2)^2$, creix fins a $x=\frac12$ i decreix després, separant les discontinuïtats. Té un màxim relatiu a $\left(\frac12,-\frac49\right)$.
    - **f)** Dividim: $\displaystyle\frac{x^2}{x-1}=x+1+\frac1{x-1}$. Així, $D_f=\mathbb{R}\setminus\{1\}$, $x=1$ és asímptota vertical i $y=x+1$ és obliqua. L'únic tall és $(0,0)$. Com que $f'(x)=x(x-2)/(x-1)^2$, té un màxim relatiu a $(0,0)$ i un mínim relatiu a $(2,4)$.
    - **g)** Dividim: $\displaystyle-\frac{x^2}{x+1}=-x+1-\frac1{x+1}$. Així, $D_f=\mathbb{R}\setminus\{-1\}$, $x=-1$ és asímptota vertical i $y=-x+1$ és obliqua. L'únic tall és $(0,0)$. Com que $f'(x)=-x(x+2)/(x+1)^2$, té un mínim relatiu a $(-2,4)$ i un màxim relatiu a $(0,0)$.

    <figure markdown="span" class="exercise-solution-figure">
      ![Representacions de les funcions racionals de l'exercici 2.19](../../img/calcul/fig_2_32_resultat_exercici_2_19.svg?v=2){ width="100%" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_32_resultat_exercici_2_19.tex">Figura 2.32.</a></strong> Representacions de les funcions racionals de l'exercici 2.19.</figcaption>
    </figure>

??? example "Solució de l'exercici 2.20"
    !!! abstract "Enunciat"
        Estudia la continuïtat, la derivabilitat, el creixement i els extrems de cada funció i representa-la. Recorda que cada expressió només es dibuixa dins del seu interval.

        **a)**

        $$
        f(x)=
        \begin{cases}
        -x^2+4x+1, & x<1,\\
        x^2-2x+3, & x\geq1.
        \end{cases}
        $$

        **b)**

        $$
        g(x)=
        \begin{cases}
        x^3-3x+2, & x<0,\\
        (x-1)^2+1, & x\geq0.
        \end{cases}
        $$

        **c)**

        $$
        h(x)=
        \begin{cases}
        3^x, & x\leq1,\\
        \dfrac{3}{x}, & x>1.
        \end{cases}
        $$

        **d)**

        $$
        p(x)=
        \begin{cases}
        \dfrac{1}{x^2+4}, & x<0,\\[6pt]
        1-\dfrac{x}{4}, & x\geq0.
        \end{cases}
        $$

    **Resolució que cal justificar**

    Primer comprovem la continuïtat en el punt d'unió; després derivem cada tram i comparem les derivades laterals.

    - **a)** A $x=1$, el límit per l'esquerra és $4$ i el valor pel tram dret és $2$: hi ha un salt. Les derivades són $-2x+4$ i $2x-2$. La funció creix en cadascun dels dos trams i $(1,2)$ és un mínim relatiu del tram dret, però no és derivable al punt de salt.
    - **b)** A $x=0$, els dos trams valen $2$: és contínua. Les derivades laterals són $-3$ i $-2$, que no coincideixen; $(0,2)$ és un punt angulós. En el primer tram, $f'(x)=3(x-1)(x+1)$; en el segon, $f'(x)=2(x-1)$. Hi ha un màxim relatiu a $(-1,4)$ i un mínim relatiu a $(1,1)$.
    - **c)** A $x=1$, els dos trams valen $3$: és contínua. Les derivades laterals són $3\ln3$ i $-3$, de manera que hi ha un punt angulós. Creix abans d'$1$ i decreix després; per tant, $(1,3)$ és un màxim relatiu.
    - **d)** A $x=0$, el límit per l'esquerra és $\frac14$ i el valor pel tram dret és $1$: hi ha un salt. La derivada del primer tram és $-2x/(x^2+4)^2>0$ quan $x<0$ i la del segon és $-\frac14<0$. Així, $(0,1)$ és un màxim relatiu del tram dret, però la funció no és derivable al punt de salt.

??? example "Solució de l'exercici 2.21"
    !!! abstract "Enunciat"
        Troba el domini de les funcions següents i expressa'l mitjançant intervals:

        | | |
        |:--|:--|
        | **a)** $f(x)=\sqrt{x+4}$ | **b)** $g(x)=\log(x^2-4x+3)$ |
        | **c)** $h(x)=\sqrt{x^2-5x+6}$ | **d)** $p(x)=\log(2x-6)$ |

    **Resolució que cal justificar**

    En una arrel d'índex parell, el radicand ha de ser no negatiu; si l'arrel apareix al denominador, ha de ser estrictament positiu.

    - **a)** $x+4\geq0\Longrightarrow x\geq-4$. Domini: $[-4,+\infty)$.
    - **b)** $(x-1)(x-3)>0$. El producte és positiu fora de les arrels. Domini: $(-\infty,1)\cup(3,+\infty)$.
    - **c)** $(x-2)(x-3)\geq0$. El producte és no negatiu fora de les arrels. Domini: $(-\infty,2]\cup[3,+\infty)$.
    - **d)** $2x-6>0\Longrightarrow x>3$. Domini: $(3,+\infty)$.

??? example "Solució de l'exercici 2.22"
    !!! abstract "Enunciat"
        Fes els estudis indicats i, en cada apartat, representa en un gràfic un esbós de la informació obtinguda. No cal estudiar els aspectes de la funció que no es demanen.

        - **a)** Per a $f(x)=\sqrt[3]{9-x^2}$, determina el domini, els talls amb els eixos i els punts on no és derivable.
        - **b)** Per a $g(x)=\sqrt{x^2-4x}$, determina el domini i el comportament als extrems del domini.
        - **c)** Per a $h(x)=\ln(x^2-4)$, troba el domini, els talls i les asímptotes verticals.
        - **d)** Per a $p(x)=\dfrac{x}{\ln(x^2+2)}$, estudia el domini i els talls amb els eixos.
        - **e)** Per a $q(x)=e^{-x^2}$, estudia els límits a l'infinit, el creixement i els extrems.
        - **f)** Per a $r(x)=x^2e^{-2x}$, estudia les branques a l'infinit, el creixement i els extrems.
        - **g)** Per a $s(x)=\dfrac{x^2}{\ln x}$, determina el domini, les asímptotes i els intervals de creixement i decreixement.
        - **h)** Per a $t(x)=\ln(x^2-9)$, estudia el domini, les asímptotes i els extrems.
        - **i)** Per a $u(x)=(x-1)^2e^x$, estudia els límits a l'infinit, les asímptotes, el creixement i els extrems.

    **Resolució que cal justificar**

    - **a)** L'arrel cúbica està definida per a tot real: $D_f=\mathbb{R}$. Els zeros són $x=\pm3$ i $f(0)=\sqrt[3]{9}$. La derivada

        $$f'(x)=\frac{-2x}{3(9-x^2)^{2/3}}$$

        no existeix a $x=\pm3$, punts que cal marcar a la gràfica.
    - **b)** Cal $x(x-4)\geq0$, de manera que $D_f=(-\infty,0]\cup[4,+\infty)$. Els talls amb l'eix $X$ són $(0,0)$ i $(4,0)$. A l'esquerra la funció s'acosta a l'obliqua $y=-x+2$ i a la dreta, a $y=x-2$.
    - **c)** Cal $x^2-4>0$: $D_f=(-\infty,-2)\cup(2,+\infty)$. Els zeros compleixen $\ln(x^2-4)=0$, és a dir, $x^2-4=1$; per tant, $x=\pm\sqrt5$. Les rectes $x=-2$ i $x=2$ són asímptotes verticals.
    - **d)** Com que $x^2+2\geq2$, $\ln(x^2+2)\geq\ln2>0$. El domini és $\mathbb{R}$ i l'únic tall amb els eixos és $(0,0)$.
    - **e)** $f'(x)=-2xe^{-x^2}$. L'exponencial és sempre positiu, de manera que creix si $x<0$ i decreix si $x>0$. Té un màxim a $(0,1)$ i $y=0$ és asímptota horitzontal als dos infinits.
    - **f)** $f'(x)=2xe^{-2x}(1-x)$. Decreix a $(-\infty,0)$, creix a $(0,1)$ i torna a decréixer a $(1,+\infty)$. Té un mínim a $(0,0)$ i un màxim a $(1,e^{-2})$. A l'esquerra tendeix a $+\infty$ i a la dreta tendeix a $0$.
    - **g)** Cal $x>0$ i $\ln x\ne0$: $D_f=(0,1)\cup(1,+\infty)$. La recta $x=1$ és una asímptota vertical. Com que

        $$f'(x)=\frac{x(2\ln x-1)}{(\ln x)^2},$$

        el punt crític és $x=\sqrt e$. Decreix fins a $\sqrt e$, separant a $x=1$, i creix després; té un mínim a $(\sqrt e,2e)$.
    - **h)** $D_f=(-\infty,-3)\cup(3,+\infty)$ i $x=\pm3$ són asímptotes verticals. Com que $f'(x)=2x/(x^2-9)$, decreix a $(-\infty,-3)$ i creix a $(3,+\infty)$.
    - **i)**

        $$f'(x)=e^x\bigl((x-1)^2+2(x-1)\bigr)=e^x(x-1)(x+1).$$

        Creix a $(-\infty,-1)$ i $(1,+\infty)$, i decreix a $(-1,1)$. Té un màxim a $\left(-1,\frac4e\right)$ i un mínim a $(1,0)$. A l'esquerra, $y=0$ és asímptota horitzontal.

??? example "Solució de l'exercici 2.23"
    !!! abstract "Enunciat"
        Escriu cada funció a trossos, dibuixa'n la gràfica i indica en quins punts no és derivable:

        | | |
        |:--|:--|
        | **a)** $f(x)=\lvert 2x-6\rvert$ | **b)** $f(x)=3x-\lvert x+1\rvert$ |
        | **c)** $f(x)=\lvert x+1\rvert+\lvert x-2\rvert$ | **d)** $f(x)=(x-1)\lvert x+2\rvert$ |

    **Resolució que cal justificar**

    Anul·lem les expressions dins dels valors absoluts i separem la funció en els intervals corresponents.

    - **a)**

        $$
        |2x-6|=
        \begin{cases}
        6-2x,&x<3,\\
        2x-6,&x\geq3.
        \end{cases}
        $$

    - **b)**

        $$
        3x-|x+1|=
        \begin{cases}
        4x+1,&x<-1,\\
        2x-1,&x\geq-1.
        \end{cases}
        $$

    - **c)** Els punts de canvi són $-1$ i $2$:

        $$
        |x+1|+|x-2|=
        \begin{cases}
        -2x+1,&x<-1,\\
        3,&-1\leq x<2,\\
        2x-1,&x\geq2.
        \end{cases}
        $$

    - **d)**

        $$
        (x-1)|x+2|=
        \begin{cases}
        -x^2-x+2,&x<-2,\\
        x^2+x-2,&x\geq-2.
        \end{cases}
        $$

    En tots quatre casos, els trams coincideixen en els punts d'unió i la funció és contínua. Les derivades laterals són diferents en cada punt de canvi; per tant, aquests punts són angulosos.

??? example "Solució de l'exercici 2.24"
    !!! abstract "Enunciat"
        Estudia i representa les funcions següents:

        | | |
        |:--|:--|
        | **a)** $f(x)=\lvert x^2-4x+3\rvert$ | **b)** $g(x)=\lvert -x^2+2x+8\rvert$ |
        | **c)** $h(x)=\lvert x^2-9\rvert$ | **d)** $p(x)=\lvert -x^2+5x-6\rvert$ |

    **Resolució que cal justificar**

    Factoritzem el polinomi interior i n'estudiem el signe. La funció amb valor absolut conserva els trams positius i canvia el signe dels negatius.

    - **a)** $x^2-4x+3=(x-1)(x-3)$ és negatiu entre $1$ i $3$:

        $$
        |x^2-4x+3|=
        \begin{cases}
        x^2-4x+3,&x\leq1\text{ o }x\geq3,\\
        -x^2+4x-3,&1<x<3.
        \end{cases}
        $$

        Té mínims a $(1,0)$ i $(3,0)$ i un màxim relatiu a $(2,1)$.
    - **b)** $-x^2+2x+8=-(x-4)(x+2)$ és positiu entre $-2$ i $4$:

        $$
        |-x^2+2x+8|=
        \begin{cases}
        x^2-2x-8,&x\leq-2\text{ o }x\geq4,\\
        -x^2+2x+8,&-2<x<4.
        \end{cases}
        $$

        Té mínims a $(-2,0)$ i $(4,0)$ i un màxim relatiu a $(1,9)$.
    - **c)** $x^2-9$ és negatiu entre $-3$ i $3$:

        $$
        |x^2-9|=
        \begin{cases}
        x^2-9,&x\leq-3\text{ o }x\geq3,\\
        9-x^2,&-3<x<3.
        \end{cases}
        $$

        Té mínims a $(-3,0)$ i $(3,0)$ i un màxim relatiu a $(0,9)$.
    - **d)** $-x^2+5x-6=-(x-2)(x-3)$ és positiu entre $2$ i $3$:

        $$
        |-x^2+5x-6|=
        \begin{cases}
        x^2-5x+6,&x\leq2\text{ o }x\geq3,\\
        -x^2+5x-6,&2<x<3.
        \end{cases}
        $$

        Té mínims a $(2,0)$ i $(3,0)$ i un màxim relatiu a $\left(\frac52,\frac14\right)$.

    En els zeros del polinomi interior, la gràfica rebota sobre l'eix $X$ i hi apareixen punts angulosos.

### Síntesi

??? example "Solució de l'exercici 2.25"
    !!! abstract "Enunciat"
        Calcula la derivada de cadascuna de les funcions següents. Simplifica el resultat quan sigui possible.

        | | |
        |:--|:--|
        | **a)** $f(x)=\dfrac{x^4}{4}+3x^{5/2}-2$ | **b)** $g(x)=\sqrt[3]{x^4}-\dfrac{2}{x^2}$ |
        | **c)** $h(x)=2^x+\log_3 x$ | **d)** $p(x)=x^3\left(2x+e^x\right)$ |
        | **e)** $q(x)=\ln(2x^2+7)$ | **f)** $r(x)=e^{(x^2-1)^3}$ |

    **Resolució que cal justificar**

    - **a)** Derivem terme a terme:

        $$f'(x)=\frac14\cdot4x^3+3\cdot\frac52x^{3/2}=x^3+\frac{15}{2}x^{3/2}.$$

    - **b)** Escrivim $g(x)=x^{4/3}-2x^{-2}$:

        $$g'(x)=\frac43x^{1/3}+4x^{-3}=\frac43x^{1/3}+\frac4{x^3}.$$

    - **c)** Utilitzem les derivades de l'exponencial i del logaritme en base $3$:

        $$h'(x)=2^x\ln2+\frac1{x\ln3}.$$

    - **d)** Regla del producte:

        $$
        p'(x)=3x^2(2x+e^x)+x^3(2+e^x)
        =8x^3+x^2(x+3)e^x.
        $$

    - **e)** Regla de la cadena:

        $$q'(x)=\frac{(2x^2+7)'}{2x^2+7}=\frac{4x}{2x^2+7}.$$

    - **f)** Apliquem la regla de la cadena dues vegades:

        $$
        r'(x)=e^{(x^2-1)^3}\cdot3(x^2-1)^2\cdot2x
        =6x(x^2-1)^2e^{(x^2-1)^3}.
        $$

??? example "Solució de l'exercici 2.26"
    !!! abstract "Enunciat"
        Fes l'estudi complet de la funció

        $$
        f(x)=\frac{3x^2-6}{x^2-9}.
        $$

        Determina'n el domini, els talls amb els eixos, les asímptotes verticals i horitzontals, els límits laterals, els extrems relatius i els intervals de creixement i decreixement. Finalment, fes-ne un esbós.

    **Resolució que cal justificar**

    - **Domini:** $x^2-9\ne0$, de manera que $D_f=\mathbb{R}\setminus\{-3,3\}$.
    - **Talls:** $3x^2-6=0\Rightarrow x=\pm\sqrt2$, i $f(0)=\frac23$.
    - **Asímptota horitzontal:** els polinomis tenen el mateix grau i

        $$\lim_{x\to\pm\infty}f(x)=\frac31=3.$$

    - **Asímptotes verticals i límits laterals:** el numerador és positiu prop de $\pm3$. Estudiant el signe de $(x-3)(x+3)$ obtenim

        $$
        \lim_{x\to-3^-}f(x)=+\infty,\quad
        \lim_{x\to-3^+}f(x)=-\infty,
        $$

        $$
        \lim_{x\to3^-}f(x)=-\infty,\quad
        \lim_{x\to3^+}f(x)=+\infty.
        $$

    - **Monotonia:**

        $$
        f'(x)=\frac{6x(x^2-9)-(3x^2-6)2x}{(x^2-9)^2}
        =\frac{-42x}{(x^2-9)^2}.
        $$

        El denominador és positiu; per tant, $f'>0$ si $x<0$ i $f'<0$ si $x>0$, separant pels punts exclosos. La funció creix a $(-\infty,-3)$, $(-3,0)$ i decreix a $(0,3)$, $(3,+\infty)$. Hi ha un màxim relatiu a $(0,\frac23)$.

??? example "Solució de l'exercici 2.27"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        g(x)=\frac{e^x}{x-1}.
        $$

        Troba les asímptotes verticals i horitzontals, calcula els límits laterals en els punts que no pertanyen al domini, deriva la funció i estudia'n la monotonia i els extrems relatius. Fes-ne un esbós amb la informació obtinguda.

    **Resolució que cal justificar**

    - **Domini:** $D_g=\mathbb{R}\setminus\{1\}$.
    - **Asímptota vertical:** com que $e^x>0$,

        $$\lim_{x\to1^-}\frac{e^x}{x-1}=-\infty,qquad
        \lim_{x\to1^+}\frac{e^x}{x-1}=+\infty.$$

    - **Comportament a l'infinit:**

        $$\lim_{x\to-\infty}g(x)=0,$$

        de manera que $y=0$ és asímptota horitzontal només per l'esquerra. Quan $x\to+\infty$, l'exponencial domina el polinomi i $g(x)\to+\infty$.

    - **Talls:** $g(0)=-1$ i no hi ha talls amb l'eix $X$, perquè $e^x$ no s'anul·la.
    - **Monotonia:**

        $$
        g'(x)=\frac{e^x(x-1)-e^x}{(x-1)^2}
        =\frac{e^x(x-2)}{(x-1)^2}.
        $$

        El signe depèn de $x-2$: decreix a $(-\infty,1)$ i $(1,2)$, i creix a $(2,+\infty)$. Per tant, té un mínim relatiu a

        $$\left(2,g(2)\right)=(2,e^2).$$

??? example "Solució de l'exercici 2.28"
    !!! abstract "Enunciat"
        Considera la funció

        $$
        p(x)=\lvert x-1\rvert+\lvert 2x+4\rvert.
        $$

        - **a)** Construeix una taula de signes per a les expressions interiors dels valors absoluts.
        - **b)** Escriu $p$ com una funció a trossos.
        - **c)** Indica en quins punts no és derivable i representa-la.

    **Resolució que cal justificar**

    Els zeros de les expressions interiors són $x=-2$ i $x=1$. Fem la taula de signes:

    | Interval | $x-1$ | $2x+4$ |
    |:--|:--:|:--:|
    | $x<-2$ | $-$ | $-$ |
    | $-2\leq x<1$ | $-$ | $+$ |
    | $x\geq1$ | $+$ | $+$ |

    Substituïm cada valor absolut pel signe corresponent:

    $$
    p(x)=
    \begin{cases}
    -(x-1)-(2x+4)=-3x-3, & x<-2,\\
    -(x-1)+(2x+4)=x+5, & -2\leq x<1,\\
    (x-1)+(2x+4)=3x+3, & x\geq1.
    \end{cases}
    $$

    La funció és contínua als dos punts d'unió. Els pendents són $-3$, $1$ i $3$; com que canvien, no és derivable a $x=-2$ ni a $x=1$.

### Optimització

??? example "Solució de l'exercici 2.29"
    !!! abstract "Enunciat"
        **Hort urbà al costat d'un mur.**

        Una cooperativa disposa de $120\,\text{m}$ de tanca per delimitar un hort rectangular. Un dels costats de l'hort coincideix amb un mur i no cal tancar-lo. **Determina les dimensions de l'hort perquè l'àrea sigui màxima i calcula aquesta àrea.**

        - **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
        - **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

    **Resolució que cal justificar**

    Siguin $x$ els costats perpendiculars al mur i $y$ el costat paral·lel. Només cal tancar tres costats:

    $$2x+y=120\Longrightarrow y=120-2x.$$

    L'àrea és

    $$A(x)=xy=x(120-2x)=120x-2x^2,qquad0<x<60.$$

    $$A'(x)=120-4x=0\Longrightarrow x=30.$$

    Com que $A''(x)=-4<0$, és un màxim. Aleshores $y=120-60=60$. Les dimensions òptimes són $30\,\text{m}$ per $60\,\text{m}$ i

    $$A_{\max}=30\cdot60=1.800\,\text{m}^2.$$

??? example "Solució de l'exercici 2.30"
    !!! abstract "Enunciat"
        **Aparador rectangular.**

        Una botiga vol construir un aparador rectangular de $8\,\text{m}^2$. El perfil metàl·lic dels costats horitzontals costa $4\,€$ per metre i el dels costats verticals, $6\,€$ per metre. **Determina les dimensions de l'aparador perquè el cost del perfil sigui mínim i calcula aquest cost.**

        - **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
        - **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un mínim.

    **Resolució que cal justificar**

    Siguin $x$ el costat horitzontal i $y$ el vertical. Com que $xy=8$, $y=\frac8x$, amb $x>0$. El cost total és

    $$C(x)=2\cdot4x+2\cdot6y=8x+\frac{96}{x}.$$

    $$C'(x)=8-\frac{96}{x^2}=0\Longrightarrow x^2=12\Longrightarrow x=2\sqrt3.$$

    $$y=\frac8{2\sqrt3}=\frac{4\sqrt3}{3}.$$

    Com que $C''(x)=\frac{192}{x^3}>0$, és un mínim. El cost és

    $$C_{\min}=8(2\sqrt3)+\frac{96}{2\sqrt3}=32\sqrt3\,€\approx55{,}43\,€.$$

??? example "Solució de l'exercici 2.31"
    !!! abstract "Enunciat"
        **Llauna cilíndrica.**

        Es vol fabricar una llauna cilíndrica tancada amb una superfície total de $600\pi\,\text{cm}^2$. **Determina el radi i l'altura de la llauna perquè el volum sigui màxim i calcula aquest volum.**

        - **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
        - **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

    **Resolució que cal justificar**

    La superfície d'un cilindre tancat és

    $$2\pi r^2+2\pi rh=600\pi.$$

    Dividim per $2\pi$ i aïllem $h$:

    $$r^2+rh=300\Longrightarrow h=\frac{300}{r}-r,qquad0<r<\sqrt{300}.$$

    El volum és

    $$V(r)=\pi r^2h=\pi(300r-r^3).$$

    $$V'(r)=\pi(300-3r^2)=0\Longrightarrow r=10.$$

    Com que $V''(10)=-60\pi<0$, és un màxim. L'altura és $h=30-10=20\,\text{cm}$ i

    $$V_{\max}=\pi\cdot10^2\cdot20=2.000\pi\,\text{cm}^3.$$

??? example "Solució de l'exercici 2.32"
    !!! abstract "Enunciat"
        **Recipient cònic.**

        Es vol construir un recipient cònic amb una generatriu de $15\,\text{cm}$. Si $r$ és el radi de la base i $h$ l'altura, es compleix

        $$
        r^2+h^2=15^2.
        $$

        **Determina el radi i l'altura del recipient perquè la capacitat sigui màxima i calcula aquesta capacitat.**

        - **a)** Construeix la funció que cal optimitzar a partir de la relació donada i indica'n el domini.
        - **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

    **Resolució que cal justificar**

    De $r^2+h^2=225$ obtenim

    $$h=\sqrt{225-r^2},qquad0<r<15.$$

    La capacitat del con és

    $$V(r)=\frac13\pi r^2\sqrt{225-r^2}.$$

    Derivem:

    $$
    V'(r)=\frac{\pi r(150-r^2)}{\sqrt{225-r^2}}.
    $$

    En el domini, $V'(r)=0$ quan $r^2=150$, és a dir, $r=5\sqrt6$. El signe passa de positiu a negatiu, així que és un màxim. L'altura és

    $$h=\sqrt{225-150}=5\sqrt3,$$

    i la capacitat màxima,

    $$V_{\max}=\frac13\pi(150)(5\sqrt3)=250\pi\sqrt3\,\text{cm}^3.$$

??? example "Solució de l'exercici 2.33"
    !!! abstract "Enunciat"
        **Rescat a la platja.**

        Un socorrista es troba al punt $B$ de la platja. El punt $O$ de la costa més proper a una persona que necessita ajuda és a $100\,\text{m}$ de $B$, i la persona és a $60\,\text{m}$ mar endins, en direcció perpendicular a la costa des d'$O$. El socorrista corre a $6\,\text{m/s}$ i neda a $2\,\text{m/s}$.

        El socorrista corre des de $B$ fins a un punt $P$ situat entre $B$ i $O$ i, des d'allà, neda en línia recta. **Determina en quin punt de la costa ha de començar a nedar perquè el temps total del rescat sigui mínim i calcula aquest temps.**

        <figure markdown="span" class="exercise-statement-figure--compact">
          ![Esquema del recorregut del socorrista: corre de B a P per la costa i neda de P fins a la persona situada mar endins](../../img/calcul/fig_2_28_rescat_platja.svg?v=1){ width="650" }
          <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_28_rescat_platja.tex">Figura 2.28.</a></strong> Esquema del recorregut del socorrista en l'exercici 2.33.</figcaption>
        </figure>

        - **a)** Defineix una variable que situï el punt $P$ i construeix la funció que cal optimitzar, indicant-ne el domini.
        - **b)** Resol el problema, justifica el mínim i compara'l amb les opcions de fer tot el trajecte possible corrent o començar a nedar immediatament.

    **Resolució que cal justificar**

    Siguin $x=OP$. Aleshores el socorrista corre $BP=100-x$ metres i neda $\sqrt{x^2+60^2}$ metres. El temps és

    $$T(x)=\frac{100-x}{6}+\frac{\sqrt{x^2+3.600}}{2},qquad0\leq x\leq100.$$

    $$T'(x)=-\frac16+\frac{x}{2\sqrt{x^2+3.600}}.$$

    Igualem a zero:

    $$
    \frac{x}{2\sqrt{x^2+3.600}}=\frac16
    \Longrightarrow3x=\sqrt{x^2+3.600}
    \Longrightarrow x^2=450.
    $$

    Per tant, $x=15\sqrt2\approx21{,}21\,\text{m}$. La derivada passa de negativa a positiva, de manera que és un mínim. Ha de córrer $100-15\sqrt2\approx78{,}79\,\text{m}$ i

    $$T_{\min}=\frac{50}{3}+20\sqrt2\approx44{,}95\,\text{s}.$$

    Si corre fins a $O$, tarda $\frac{100}{6}+\frac{60}{2}=46{,}67\,\text{s}$. Si neda immediatament, tarda $\frac{\sqrt{100^2+60^2}}2\approx58{,}31\,\text{s}$. El punt interior és realment la millor opció.

??? example "Solució de l'exercici 2.34"
    !!! abstract "Enunciat"
        **Entrades d'un espectacle.**

        Una sala ven $500$ entrades quan el preu és de $40\,€$. Un estudi preveu que, per cada augment de $2\,€$, es vendran $20$ entrades menys. Cada espectador genera una despesa de $4\,€$ i l'organització té uns costos fixos de $2.000\,€$. **Determina el preu de l'entrada que maximitza el benefici i calcula el nombre d'entrades venudes i el benefici màxim.**

        - **a)** Defineix la variable i construeix la funció de benefici, indicant el domini que té sentit en el context.
        - **b)** Resol el problema i interpreta el resultat.

    **Resolució que cal justificar**

    Siguin $x$ els augments de $2\,€$. El preu és $40+2x$ i es venen $500-20x$ entrades. Com que cada espectador costa $4\,€$, el benefici és

    $$
    B(x)=(40+2x-4)(500-20x)-2.000
    =-40x^2+280x+16.000.
    $$

    $$B'(x)=-80x+280=0\Longrightarrow x=3{,}5.$$

    Com que $B''(x)=-80<0$, el màxim continu correspon al preu $40+2(3{,}5)=47\,€$. Es venen $430$ entrades i

    $$B_{\max}=43\cdot430-2.000=16.490\,€.$$

    Si el preu només pot variar de $2$ en $2\,€$, comparem $x=3$ i $x=4$: tant $46\,€$ com $48\,€$ donen un benefici de $16.480\,€$.

??? example "Solució de l'exercici 2.35"
    !!! abstract "Enunciat"
        **Producció d'una cooperativa.**

        El cost de produir $x$ unitats d'un article és

        $$
        C(x)=0{,}03x^2+4x+180,
        $$

        i el preu de venda de cada unitat depèn de la producció segons

        $$
        p(x)=50-0{,}04x.
        $$

        La cooperativa pot produir entre $0$ i $400$ unitats i ven totes les unitats fabricades. **Determina quantes unitats ha de fabricar perquè el benefici sigui màxim i calcula aquest benefici.**

        - **a)** Construeix la funció de benefici a partir dels ingressos i els costos i indica'n el domini.
        - **b)** Resol primer el problema considerant $x$ una variable real. Després, com que només es poden fabricar unitats senceres, compara els enters necessaris i dona la decisió final.

    **Resolució que cal justificar**

    Els ingressos són

    $$I(x)=xp(x)=50x-0{,}04x^2.$$

    Per tant,

    $$
    B(x)=I(x)-C(x)=-0{,}07x^2+46x-180,qquad0\leq x\leq400.
    $$

    $$B'(x)=-0{,}14x+46=0\Longrightarrow x=\frac{2.300}{7}\approx328{,}57.$$

    Com que $B''(x)=-0{,}14<0$, és un màxim continu. Com que la producció ha de ser entera, comparem:

    $$B(328)=7.377{,}12\,€,qquad B(329)=7.377{,}13\,€.$$

    Cal fabricar $329$ unitats.

??? example "Solució de l'exercici 2.36"
    !!! abstract "Enunciat"
        **Cost mitjà de fabricació.**

        El cost total, en euros, de fabricar $x$ unitats d'un producte és

        $$
        C(x)=0{,}4x^2+12x+3.600, \qquad x>0.
        $$

        **Determina quantes unitats s'han de fabricar perquè el cost mitjà per unitat sigui mínim i calcula aquest cost.**

        - **a)** Construeix la funció de cost mitjà i indica'n el domini.
        - **b)** Resol primer el problema considerant $x$ una variable real. Després, si la producció ha de ser entera, compara els enters necessaris i dona la decisió final.

    **Resolució que cal justificar**

    El cost mitjà és

    $$
    C_m(x)=\frac{C(x)}x=0{,}4x+12+\frac{3.600}{x},qquad x>0.
    $$

    $$C_m'(x)=0{,}4-\frac{3.600}{x^2}=0\Longrightarrow x^2=9.000\Longrightarrow x=30\sqrt{10}\approx94{,}87.$$

    Com que $C_m''(x)=\frac{7.200}{x^3}>0$, és un mínim. El valor continu és

    $$C_m=12+24\sqrt{10}\approx87{,}895\,€.$$

    Comparant $94$ i $95$ unitats, el cost mitjà és lleugerament menor per a $95$; per tant, cal fabricar $95$ unitats.

??? example "Solució de l'exercici 2.37"
    !!! abstract "Enunciat"
        **Campanya publicitària.**

        Una empresa estudia el benefici mensual que obté segons la quantitat invertida en una campanya publicitària. Vol determinar quina inversió proporciona el benefici màxim i calcular aquest benefici. Si $x$ és la inversió, en milers d'euros, el benefici mensual $B(x)$, també expressat en milers d'euros, ve donat per

        $$
        B(x)=
        \begin{cases}
        -x^2+8x+20, & 0\leq x\leq4,\\[4pt]
        -2x^2+20x-12, & 4<x\leq8.
        \end{cases}
        $$

        - **a)** Estudia la funció en tot el domini i determina la inversió que proporciona el benefici màxim. Justifica el resultat tenint en compte el punt d'unió i els extrems del domini.
        - **b)** Representa gràficament la funció i interpreta el resultat en el context del problema.

    **Resolució que cal justificar**

    Estudiem cada tram dins del seu interval.

    Primer tram:

    $$B_1'(x)=-2x+8,$$

    que és positiu a $[0,4)$ i s'anul·la a $x=4$. Així, $B$ creix de $B(0)=20$ fins a $B(4)=36$.

    Segon tram:

    $$B_2'(x)=-4x+20=0\Longrightarrow x=5.$$

    Creix a $(4,5)$ i decreix a $(5,8]$. Cal comparar els punts importants:

    $$B(0)=20,qquad B(4)=36,qquad B(5)=38,qquad B(8)=20.$$

    Per tant, el benefici màxim és de $38$ milers d'euros i s'obté amb una inversió de $5$ milers d'euros. La gràfica uneix el primer tram creixent amb el segon, que arriba al màxim $(5,38)$ i baixa fins a $(8,20)$.

## Problemes PAU

### Estudi i interpretació d'una funció

??? example "Solució del problema PAU.C.1. Evolució dels seguidors d'un divulgador"
    !!! abstract "Enunciat"
        **Evolució dels seguidors d'un divulgador**

        *(basat en l'exercici 1 de la convocatòria ordinària de 2026, sèrie 1)*. Un metge comença a divulgar continguts sobre salut a les xarxes socials. El nombre de seguidors que té al cap de $t$ setmanes és

        $$
        f(t)=10t^3-120t^2+450t+700, \qquad t\in[0,10].
        $$

        - **a)** Calcula quants seguidors té inicialment i al cap de deu setmanes.
        - **b)** Estudia els intervals de creixement i decreixement i determina els extrems relatius.
        - **c)** Fes un esbós de la gràfica utilitzant la informació obtinguda.
        - **d)** Interpreta en quin moment publica un vídeo polèmic que provoca una pèrdua de seguidors i en quin moment publica un vídeo d'èxit a partir del qual torna a créixer.
        - **e)** Determina en quin instant assoleix el nombre màxim absolut de seguidors durant les deu setmanes i calcula aquest nombre.

    **Resolució que cal justificar**

    - **a) Valors inicial i final.** Substituïm els dos instants:

        $$f(0)=700,$$

        $$
        f(10)=10\cdot10^3-120\cdot10^2+450\cdot10+700=3.200.
        $$

        Inicialment té $700$ seguidors i al cap de deu setmanes en té $3.200$.

    - **b) Monotonia i extrems.** Derivem i factoritzem:

        $$
        f'(t)=30t^2-240t+450=30(t-3)(t-5).
        $$

        Els candidats són $t=3$ i $t=5$. Dins de $[0,10]$, el signe de $f'$ és positiu abans de $3$, negatiu entre $3$ i $5$, i positiu després de $5$. Per tant,

        $$
        \begin{array}{c|ccccc}
        t&(0,3)&3&(3,5)&5&(5,10)\\ \hline
        f'(t)&+&0&-&0&+\\
        f&\nearrow&\text{màxim}&\searrow&\text{mínim}&\nearrow
        \end{array}
        $$

        $$f(3)=1.240,qquad f(5)=1.200.$$

        Hi ha un màxim relatiu a $(3,1.240)$ i un mínim relatiu a $(5,1.200)$.

    - **c) Esbós.** La gràfica passa per $(0,700)$, puja fins a $(3,1.240)$, baixa fins a $(5,1.200)$ i torna a pujar fins a $(10,3.200)$.
    - **d) Interpretació.** La pèrdua de seguidors comença a la setmana $3$ i s'acaba a la setmana $5$, quan el nombre de seguidors torna a créixer.
    - **e) Màxim absolut.** Comparem els extrems relatius i els extrems del domini:

        $$f(0)=700,\quad f(3)=1.240,\quad f(5)=1.200,\quad f(10)=3.200.$$

        El màxim absolut és de $3.200$ seguidors i s'assoleix a la setmana $10$.

??? example "Solució del problema PAU.C.2. Microorganismes en una mostra"
    !!! abstract "Enunciat"
        **Microorganismes en una mostra**

        *(basat en l'exercici 3 de la convocatòria ordinària de 2025, sèrie 4)*. El nombre de microorganismes vius d'una mostra de laboratori, mesurat en desenes, és

        $$
        f(x)=\frac{15x}{9+x^2}+k, \qquad x\geq0,
        $$

        on $x$ és el temps transcorregut, en hores.

        - **a)** Determina $k$ sabent que inicialment hi havia $50$ microorganismes.
        - **b)** Troba l'instant en què el nombre de microorganismes és màxim i calcula aquest màxim.
        - **c)** Calcula el límit quan $x\to+\infty$ i interpreta el resultat en el context.
        - **d)** Fes un esbós de la gràfica tenint en compte el valor inicial, el màxim i el comportament a llarg termini.

    **Resolució que cal justificar**

    - **a)** En l'instant inicial,

        $$f(0)=\frac{15\cdot0}{9+0^2}+k=k.$$

        Com que $50$ microorganismes són $5$ desenes, $k=5$.

    - **b)** Amb $k=5$, derivem:

        $$
        f'(x)=\frac{15(9+x^2)-15x(2x)}{(9+x^2)^2}
        =\frac{15(9-x^2)}{(9+x^2)^2}.
        $$

        El denominador és positiu. En el domini $x\geq0$, $f'(x)=0$ quan $x=3$; $f'>0$ a $(0,3)$ i $f'<0$ a $(3,+\infty)$. Per tant, $x=3$ és un màxim:

        $$f(3)=\frac{45}{18}+5=7{,}5\text{ desenes}=75\text{ microorganismes}.$$

    - **c)**

        $$
        \lim_{x\to+\infty}\left(\frac{15x}{9+x^2}+5\right)=0+5=5.
        $$

        A llarg termini, la mostra tendeix a estabilitzar-se en $50$ microorganismes.

    - **d)** L'esbós parteix de $(0,5)$, creix fins al màxim $(3,7{,}5)$ i després decreix acostant-se a l'asímptota horitzontal $y=5$.

??? example "Solució del problema PAU.C.3. Visitants d'una exposició"
    !!! abstract "Enunciat"
        **Visitants d'una exposició**

        *(basat en el problema 3 de la convocatòria extraordinària de 2022, sèrie 3)*. El nombre de visitants setmanals d'una exposició, expressat en desenes de persones, és

        $$
        f(x)=\frac{240x}{x^2-2x+4}, \qquad x\geq1,
        $$

        on $x$ és el nombre de setmanes que fa que l'exposició està oberta.

        - **a)** Calcula quantes persones visitaran l'exposició la primera setmana.
        - **b)** Troba la taxa de variació mitjana del nombre de visitants entre la primera setmana i la quarta i interpreta'n el signe.
        - **c)** Estudia la monotonia de la funció dins del seu domini temporal.
        - **d)** Determina la setmana en què es preveu la màxima afluència i el nombre de visitants corresponent.

    **Resolució que cal justificar**

    - **a)**

        $$f(1)=\frac{240}{1-2+4}=80\text{ desenes}=800\text{ visitants}.$$

    - **b)** Primer calculem $f(4)$:

        $$f(4)=\frac{960}{16-8+4}=80.$$

        La taxa de variació mitjana és

        $$
        \operatorname{TVM}_{[1,4]}=\frac{f(4)-f(1)}{4-1}=\frac{80-80}{3}=0.
        $$

        Els valors inicial i final coincideixen, però això no implica que la funció hagi estat constant entremig.

    - **c)** Derivem:

        $$
        f'(x)=\frac{240(x^2-2x+4)-240x(2x-2)}{(x^2-2x+4)^2}
        =\frac{240(4-x^2)}{(x^2-2x+4)^2}.
        $$

        En el domini $x\geq1$, el denominador és positiu. Així, $f'>0$ a $[1,2)$ i $f'<0$ a $(2,+\infty)$.

    - **d)** La funció passa de creixent a decreixent a $x=2$; per tant, hi ha un màxim:

        $$f(2)=\frac{480}{4-4+4}=120\text{ desenes}=1.200\text{ visitants}.$$

??? example "Solució del problema PAU.C.4. Evolució dels clients d'una empresa"
    !!! abstract "Enunciat"
        **Evolució dels clients d'una empresa**

        *(basat en el problema 4 de la convocatòria extraordinària de 2021, sèrie 1)*. Una empresa que ha entrat en crisi modelitza el nombre de clients, expressat en milers, mitjançant

        $$
        C(t)=3-\frac{1}{t^2-4t+5}, \qquad t\geq0,
        $$

        on $t$ és el temps transcorregut, en anys.

        - **a)** Calcula quants clients tenia l'empresa inicialment i al cap d'un any.
        - **b)** Determina l'instant en què deixa de perdre clients i calcula quants en té en aquell moment.
        - **c)** Comprova que l'instant trobat correspon a un mínim.
        - **d)** Calcula quant temps ha de passar perquè l'empresa recuperi el nombre inicial de clients.
        - **e)** Estudia el comportament a llarg termini de l'empresa.

    **Resolució que cal justificar**

    - **a)**

        $$C(0)=3-\frac15=2{,}8,qquad C(1)=3-\frac12=2{,}5.$$

        Són $2.800$ i $2.500$ clients, respectivament.

    - **b)** Derivem:

        $$
        C'(t)=\frac{2t-4}{(t^2-4t+5)^2}.
        $$

        El denominador és positiu i $C'(t)=0$ quan $t=2$. Per tant, deixa de perdre clients al cap de dos anys:

        $$C(2)=3-\frac1{4-8+5}=2,$$

        és a dir, $2.000$ clients.

    - **c)** $C'(t)<0$ si $0<t<2$ i $C'(t)>0$ si $t>2$. Com que passa de decreixent a creixent, $t=2$ és un mínim.
    - **d)** El nombre inicial és $2{,}8$. Resolem

        $$
        3-\frac1{t^2-4t+5}=2{,}8
        \Longrightarrow t^2-4t+5=5
        \Longrightarrow t(t-4)=0.
        $$

        A més de l'instant inicial $t=0$, recupera aquest nombre al cap de $4$ anys.

    - **e)**

        $$\lim_{t\to+\infty}C(t)=3-0=3.$$

        A llarg termini, el model tendeix a $3.000$ clients.

### Funcions exponencials i logarítmiques

??? example "Solució del problema PAU.C.5. Impacte d'una campanya publicitària"
    !!! abstract "Enunciat"
        **Impacte d'una campanya publicitària**

        *(problema d'entrenament de tipus PAU)*. Una empresa acaba de llançar una aplicació mòbil i inicia una campanya publicitària. El nombre de descàrregues diàries de l'aplicació, expressat en centenars, es modelitza mitjançant

        $$
        D(t)=20+10(t+1)e^{-t/2}, \qquad t\geq0,
        $$

        on $t$ és el temps transcorregut, en mesos, des de l'inici de la campanya.

        - **a)** Quantes descàrregues diàries es produeixen en el moment d'iniciar la campanya?
        - **b)** L'empresa vol saber durant quant temps augmentarà l'efecte de la campanya. Estudia el creixement i el decreixement de $D(t)$.
        - **c)** Determina en quin moment s'assoleix el nombre màxim de descàrregues diàries i calcula aquest màxim.
        - **d)** Quan hagi passat molt de temps, quantes descàrregues diàries preveu el model que es mantindran? Justifica la resposta a partir del comportament de l'expressió exponencial.
        - **e)** Fes un esbós de la gràfica i assenyala-hi el valor inicial, el màxim i el valor al qual tendeix el nombre de descàrregues.

    **Resolució que cal justificar**

    - **a)**

        $$D(0)=20+10(0+1)e^0=30\text{ centenars}=3.000\text{ descàrregues}.$$

    - **b)** Derivem el producte $(t+1)e^{-t/2}$:

        $$
        D'(t)=10\left[e^{-t/2}+(t+1)\left(-\frac12\right)e^{-t/2}\right]
        =5e^{-t/2}(1-t).
        $$

        Com que $e^{-t/2}>0$, el signe depèn de $1-t$: creix a $[0,1)$ i decreix a $(1,+\infty)$.

    - **c)** A $t=1$ passa de creixent a decreixent; per tant,

        $$D(1)=20+20e^{-1/2}\approx32{,}13\text{ centenars}.$$

        El màxim és d'unes $3.213$ descàrregues diàries.

    - **d)** Com que $(t+1)e^{-t/2}\to0$,

        $$\lim_{t\to+\infty}D(t)=20.$$

        El model preveu que es mantindran $2.000$ descàrregues diàries.

    - **e)** La gràfica parteix de $(0,30)$, puja fins a $(1,20+20e^{-1/2})$ i després baixa acostant-se a l'asímptota horitzontal $y=20$.

??? example "Solució del problema PAU.C.6. Cost mitjà de producció"
    !!! abstract "Enunciat"
        **Cost mitjà de producció**

        *(problema d'entrenament de tipus PAU)*. Una empresa fabrica un component electrònic. El cost mitjà de producció, expressat en euros per unitat, depèn de la quantitat fabricada segons la funció

        $$
        C(x)=20+x-4\ln x, \qquad x>0,
        $$

        on $x$ és la producció expressada en centenars d'unitats. Per exemple, $x=3$ correspon a una producció de $300$ unitats.

        - **a)** Justifica per què el domini del model és $x>0$. Quin és el cost mitjà per unitat quan l'empresa fabrica $100$ unitats?
        - **b)** L'empresa vol saber fins a quin nivell de producció l'augment de la quantitat fabricada permet reduir el cost mitjà. Estudia els intervals de creixement i decreixement de $C(x)$.
        - **c)** Determina quantes unitats s'han de fabricar perquè el cost mitjà sigui mínim i calcula aquest cost.
        - **d)** L'empresa s'ha proposat aconseguir un cost mitjà inferior a $18\,€$ per unitat. Justifica si aquest objectiu és possible segons el model.
        - **e)** Estudia què passa amb el cost mitjà quan la producció s'apropa a zero i quan augmenta indefinidament. Fes un esbós de la gràfica que reflecteixi aquest comportament i el mínim obtingut.

    **Resolució que cal justificar**

    - **a)** Cal $x>0$ perquè $\ln x$ estigui definit i perquè la producció sigui positiva. Per $100$ unitats, $x=1$:

        $$C(1)=20+1-4\ln1=21\,€.$$

    - **b)**

        $$C'(x)=1-\frac4x=\frac{x-4}{x}.$$

        En el domini $x>0$, $C'<0$ a $(0,4)$ i $C'>0$ a $(4,+\infty)$. Per tant, el cost decreix fins a $x=4$ i després creix.

    - **c)** $x=4$ és un mínim. Això correspon a $400$ unitats i

        $$C(4)=24-4\ln4\approx18{,}45\,€\text{ per unitat}.$$

    - **d)** El mínim possible és aproximadament $18{,}45\,€$, que és superior a $18\,€$. Per tant, l'objectiu no és possible segons el model.
    - **e)**

        $$\lim_{x\to0^+}C(x)=+\infty,qquad \lim_{x\to+\infty}C(x)=+\infty.$$

        La gràfica baixa des de $+\infty$ fins al mínim de $x=4$ i després torna a pujar.

### Modelització, comparació i optimització

#### Construcció de la funció a partir de l'enunciat

??? example "Solució del problema PAU.C.7. Reserves d'un hotel"
    !!! abstract "Enunciat"
        **Reserves d'un hotel**

        *(basat en l'exercici 4, opció B, de la convocatòria ordinària de 2025, sèrie 1)*. Un hotel cobra $80\,€$ per una habitació doble i, amb aquest preu, preveu tenir $100$ reserves. Un estudi indica que, per cada euro de descompte, s'aconseguiran dues reserves més.

        - **a)** Si $x$ és el descompte aplicat, determina la funció que expressa els ingressos de l'hotel en funció de $x$. Indica els valors admissibles de $x$.
        - **b)** Quin ha de ser el preu de l'habitació perquè els ingressos siguin màxims? Calcula també el nombre de reserves i els ingressos màxims.

    **Resolució que cal justificar**

    - **a)** Si el descompte és $x$, el preu és $80-x$ i el nombre de reserves és $100+2x$. Per tant,

        $$
        I(x)=(80-x)(100+2x)=-2x^2+60x+8.000,qquad0\leq x\leq80.
        $$

    - **b)**

        $$I'(x)=-4x+60.$$

        Igualem a zero:

        $$-4x+60=0\Longrightarrow x=15.$$

        Com que $I''(x)=-4<0$, és un màxim. Així,

        $$\text{preu}=80-15=65\,€,$$

        $$\text{reserves}=100+2\cdot15=130,$$

        $$I(15)=65\cdot130=8.450\,€.$$

??? example "Solució del problema PAU.C.8. Contractació de venedors"
    !!! abstract "Enunciat"
        **Contractació de venedors**

        *(problema d'entrenament de tipus PAU)*. Una botiga en línia disposa de $10$ venedors i cadascun genera unes vendes mensuals de $5\,400\,€$. S'estima que, per cada venedor nou que es contracti, les vendes mensuals gestionades per cadascun dels venedors disminuiran en $180\,€$.

        - **a)** Determina la funció que expressa els ingressos mensuals totals si es contracten $x$ venedors nous. Indica el domini de la funció dins del context.
        - **b)** Quants venedors ha de tenir en total la botiga perquè els ingressos siguin màxims? Quins seran aquests ingressos?

    **Resolució que cal justificar**

    - **a)** Si es contracten $x$ venedors, n'hi haurà $10+x$ i cadascun gestionarà $5.400-180x$ euros:

        $$
        I(x)=(10+x)(5.400-180x)=-180x^2+3.600x+54.000.
        $$

        En el context, $x\in\{0,1,\ldots,30\}$.

    - **b)** Considerem primer la variable contínua:

        $$I'(x)=-360x+3.600=0\Longrightarrow x=10.$$

        Com que $I''(x)=-360<0$ i $10$ és enter, cal contractar $10$ venedors. En total n'hi haurà $20$ i

        $$I(10)=20(5.400-1.800)=72.000\,€.$$

??? example "Solució del problema PAU.C.9. Venda de motxilles"
    !!! abstract "Enunciat"
        **Venda de motxilles**

        *(problema d'entrenament de tipus PAU)*. Una empresa ven mensualment $40$ motxilles a un preu de $80\,€$ cadascuna. Per cada euro que es redueixi el preu, es preveu que es vendran dues motxilles més. L'empresa té uns costos fixos mensuals de $800\,€$, i fabricar cada motxilla costa $20\,€$.

        - **a)** Si $x$ és la reducció del preu, determina la funció que expressa el benefici mensual de l'empresa en funció de $x$.
        - **b)** Quina reducció de preu permet obtenir el benefici màxim? Calcula el preu de venda, el nombre de motxilles venudes i el benefici màxim.

    **Resolució que cal justificar**

    - **a)** Amb una reducció de $x$ euros, el preu és $80-x$ i es venen $40+2x$ motxilles. Els ingressos són $(80-x)(40+2x)$ i els costos, $800+20(40+2x)$. Així,

        $$
        B(x)=(80-x)(40+2x)-800-20(40+2x)
        =-2x^2+80x+1.600.
        $$

    - **b)**

        $$B'(x)=-4x+80=0\Longrightarrow x=20.$$

        Com que $B''(x)=-4<0$, és un màxim. Per tant,

        $$\text{preu}=80-20=60\,€,$$

        $$\text{vendes}=40+2\cdot20=80,$$

        $$B(20)=-2\cdot20^2+80\cdot20+1.600=2.400\,€.$$

??? example "Solució del problema PAU.C.10. Demanda d'un accessori tecnològic"
    !!! abstract "Enunciat"
        **Demanda d'un accessori tecnològic**

        *(basat en l'exercici 1 de la convocatòria extraordinària de 2026, sèrie 2)*. La demanda setmanal d'un accessori tecnològic depèn del seu preu $p$, expressat en euros, segons

        $$
        d(p)=500-10p-p^2, \qquad 0<p<15.
        $$

        Els ingressos setmanals són $I(p)=p\,d(p)$.

        - **a)** Escriu i simplifica la funció $I(p)$.
        - **b)** Determina el preu que maximitza els ingressos setmanals.
        - **c)** Calcula la demanda corresponent i els ingressos màxims.
        - **d)** L'elasticitat de la demanda respecte del preu es defineix, per a aquest exercici, com

        $$
        E(p)=-\frac{p\,d'(p)}{d(p)}.
        $$

        Troba l'expressió d'$E(p)$ i calcula'n el valor quan el preu és de $5\,€$ i quan és de $10\,€$. No cal memoritzar aquesta fórmula.

    **Resolució que cal justificar**

    - **a)**

        $$I(p)=p(500-10p-p^2)=-p^3-10p^2+500p.$$

    - **b)**

        $$I'(p)=-3p^2-20p+500.$$

        Resolem $I'(p)=0$:

        $$
        3p^2+20p-500=0
        \Longrightarrow p=10\quad\text{o}\quad p=-\frac{50}{3}.
        $$

        Només $p=10$ pertany a $0<p<15$. A més, $I''(10)=-80<0$; per tant, és un màxim.

    - **c)**

        $$d(10)=500-100-100=300,$$

        $$I(10)=10\cdot300=3.000\,€.$$

    - **d)** Com que $d'(p)=-10-2p$,

        $$
        E(p)=-\frac{p(-10-2p)}{500-10p-p^2}
        =\frac{p(10+2p)}{500-10p-p^2}.
        $$

        $$E(5)=\frac{100}{425}=\frac4{17}\approx0{,}235,qquad E(10)=\frac{300}{300}=1.$$

??? example "Solució del problema PAU.C.11. Tarifes de dues companyies de taxi"
    !!! abstract "Enunciat"
        **Tarifes de dues companyies de taxi**

        *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 1)*. La companyia A cobra una quantitat fixa de $20\,€$ més $0{,}4\,€$ per quilòmetre. La tarifa de la companyia B és

        $$
        g(x)=0{,}01x^2+0{,}1x+10,
        $$

        on $x\geq0$ és la distància recorreguda en quilòmetres.

        - **a)** Escriu la funció $f(x)$ que dona el preu de la companyia A.
        - **b)** Compara el preu de les dues companyies per a un recorregut de $10\,\text{km}$ i per a un de $80\,\text{km}$.
        - **c)** Interpreta el valor $g(0)$ i determina si la companyia B cobra un cost fix.
        - **d)** Calcula la distància positiva per a la qual les dues tarifes coincideixen.
        - **e)** Considerant només els trajectes des de $0\,\text{km}$ fins a la distància trobada, determina quan és màxima la diferència de preu entre les dues tarifes i calcula aquesta diferència.

    **Resolució que cal justificar**

    - **a)** La tarifa fixa és $20\,€$ i s'afegeixen $0{,}4\,€$ per quilòmetre:

        $$f(x)=20+0{,}4x.$$

    - **b)**

        $$f(10)=24,qquad g(10)=12,$$

        $$f(80)=52,qquad g(80)=82.$$

        A $10\,\text{km}$ és més barata B; a $80\,\text{km}$ és més barata A.

    - **c)** $g(0)=10$ significa que la companyia B cobra un cost fix de $10\,€$.
    - **d)** Igualem les tarifes:

        $$
        20+0{,}4x=0{,}01x^2+0{,}1x+10
        \Longrightarrow x^2-30x-1.000=0.
        $$

        Les solucions són $x=50$ i $x=-20$. En el context només és vàlida $x=50\,\text{km}$, i el preu és $40\,€$.

    - **e)** A $[0,50]$ estudiem la diferència

        $$h(x)=f(x)-g(x)=10+0{,}3x-0{,}01x^2.$$

        $$h'(x)=0{,}3-0{,}02x=0\Longrightarrow x=15.$$

        Com que $h''(x)=-0{,}02<0$, és un màxim:

        $$h(15)=10+4{,}5-2{,}25=12{,}25\,€.$$

        En aquest punt B és la companyia més barata.

### Funcions a trossos

??? example "Solució del problema PAU.C.12. Tarifa d'una empresa de paqueteria"
    !!! abstract "Enunciat"
        **Tarifa d'una empresa de paqueteria**

        *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 5)*. Per enviar un paquet a una distància determinada, una empresa aplica les tarifes següents:

        - fins a $2\,\text{kg}$, el preu és fix i val $30\,€$;
        - si el paquet pesa més de $2\,\text{kg}$ però menys d'$11\,\text{kg}$, els primers $2\,\text{kg}$ costen $15\,€$ per quilogram i la resta, $12\,€$ per quilogram;
        - si pesa entre $11\,\text{kg}$ i $25\,\text{kg}$, ambdós inclosos, els primers $11\,\text{kg}$ costen $13\,€$ per quilogram i la resta, $15\,€$ per quilogram.

        - **a)** Calcula el preu d'enviar un paquet de $9{,}5\,\text{kg}$ i un de $13\,\text{kg}$.
        - **b)** Construeix la funció a trossos $P(x)$ que dona el preu de l'enviament en funció del pes $x$.
        - **c)** Estudia la continuïtat de $P$ en els punts on canvia la tarifa i classifica les discontinuïtats, si n'hi ha.
        - **d)** Representa gràficament la funció per a $0<x\leq25$.
        - **e)** Si un enviament ha costat $162\,€$, calcula el pes del paquet i comprova a quin tram pertany la solució.

    **Resolució que cal justificar**

    - **a)** Per $9{,}5\,\text{kg}$ s'aplica el segon tram:

        $$2\cdot15+7{,}5\cdot12=30+90=120\,€.$$

        Per $13\,\text{kg}$ s'aplica el tercer tram:

        $$11\cdot13+2\cdot15=143+30=173\,€.$$

    - **b)** Simplifiquem cada tarifa:

        $$
        P(x)=
        \begin{cases}
        30, & 0<x\leq2,\\
        30+12(x-2)=12x+6, & 2<x<11,\\
        143+15(x-11)=15x-22, & 11\leq x\leq25.
        \end{cases}
        $$

    - **c)** En $x=2$,

        $$P(2)=30,qquad \lim_{x\to2^+}(12x+6)=30,$$

        de manera que és contínua. En $x=11$,

        $$\lim_{x\to11^-}P(x)=12\cdot11+6=138,qquad P(11)=15\cdot11-22=143.$$

        Hi ha una discontinuïtat de salt finit de $5\,€$.

    - **d)** La gràfica és constant fins a $2\,\text{kg}$, després és una recta de pendent $12$ i, a partir del salt de $x=11$, una recta de pendent $15$.
    - **e)** Comprovem cada tram. El primer no pot donar $162$. En el segon,

        $$12x+6=162\Longrightarrow x=13,$$

        però $13\notin(2,11)$ i es descarta. En el tercer,

        $$15x-22=162\Longrightarrow x=\frac{184}{15}\approx12{,}27,$$

        que sí pertany a $[11,25]$.

??? example "Solució del problema PAU.C.13. Cost de neteja d'una empresa"
    !!! abstract "Enunciat"
        **Cost de neteja d'una empresa**

        *(basat en el problema 4 de la convocatòria ordinària de 2023, sèrie 5)*. El cost anual de la neteja d'una empresa, expressat en centenars d'euros, és

        $$
        C(t)=
        \begin{cases}
        \dfrac{t^2}{10}+10, & 0\leq t\leq10,\\[6pt]
        28-\dfrac{(t-14)^2}{2}, & 10<t\leq20,
        \end{cases}
        $$

        on $t$ és el nombre d'anys transcorreguts des de l'obertura.

        - **a)** Calcula el cost de la neteja en el moment de l'obertura, al cap de deu anys i al cap de vint anys.
        - **b)** Comprova que la funció és contínua en el punt d'unió.
        - **c)** Estudia la monotonia de cada tram i representa gràficament la funció.
        - **d)** Determina en quin moment el cost va ser màxim i calcula aquest cost en euros.

    **Resolució que cal justificar**

    - **a)**

        $$C(0)=10,qquad C(10)=\frac{100}{10}+10=20,qquad C(20)=28-\frac{36}{2}=10.$$

        Com que la unitat són centenars d'euros, els costos són $1.000\,€$, $2.000\,€$ i $1.000\,€$.

    - **b)**

        $$C(10)=20,qquad \lim_{t\to10^+}\left(28-\frac{(t-14)^2}{2}\right)=20.$$

        Els dos trams coincideixen; per tant, $C$ és contínua a $t=10$.

    - **c)** Derivem per trams:

        $$
        C'(t)=
        \begin{cases}
        \dfrac{t}{5}, & 0<t<10,\\
        14-t, & 10<t<20.
        \end{cases}
        $$

        La derivada és positiva fins a $t=14$ i negativa després. Així, el cost creix a $[0,14]$ i decreix a $[14,20]$.

    - **d)** El màxim es produeix a $t=14$:

        $$C(14)=28\text{ centenars}=2.800\,€.$$

??? example "Solució del problema PAU.C.14. Evolució del preu d'un producte"
    !!! abstract "Enunciat"
        **Evolució del preu d'un producte**

        *(basat en el problema 2 de la convocatòria extraordinària de 2020, sèrie 4)*. Un producte va estar a la venda durant deu anys. El seu preu $P(t)$, en euros, depenia del temps $t$, en anys, segons

        $$
        P(t)=
        \begin{cases}
        5(t+1)^2-5, & 0\leq t\leq2,\\[4pt]
        -4t+48, & 2<t\leq10.
        \end{cases}
        $$

        - **a)** Estudia la continuïtat de la funció en el punt d'unió.
        - **b)** Determina els intervals en què el preu va créixer i aquells en què va disminuir.
        - **c)** Calcula el preu màxim assolit i l'any en què es va assolir.
        - **d)** Calcula la taxa de variació mitjana del preu durant els darrers cinc anys.
        - **e)** Representa la funció i assenyala-hi el punt d'unió i el màxim absolut.

    **Resolució que cal justificar**

    - **a)** En el punt d'unió,

        $$P(2)=5(2+1)^2-5=40,$$

        $$\lim_{t\to2^+}(-4t+48)=40.$$

        Els dos valors coincideixen; per tant, la funció és contínua a $t=2$.

    - **b)** Derivem cada tram:

        $$
        P'(t)=
        \begin{cases}
        10(t+1), & 0<t<2,\\
        -4, & 2<t<10.
        \end{cases}
        $$

        La funció creix a $[0,2]$ i decreix a $(2,10]$.

    - **c)** Com que passa de creixent a decreixent en $t=2$, el màxim absolut és

        $$P(2)=40\,€.$$

    - **d)** Els darrers cinc anys corresponen a $[5,10]$:

        $$P(5)=28,qquad P(10)=8,$$

        $$\operatorname{TVM}_{[5,10]}=\frac{8-28}{10-5}=-4\,€\text{ per any}.$$

    - **e)** La gràfica va de $(0,0)$ a $(2,40)$ seguint el tram parabòlic i continua amb la recta decreixent que arriba a $(10,8)$. El punt d'unió $(2,40)$ és també el màxim absolut.
