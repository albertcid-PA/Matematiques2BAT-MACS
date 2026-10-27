**1.1.**

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

**1.2.**

Llegim la gràfica d'esquerra a dreta i distingim sempre entre el límit i el valor de la funció.

- **a)** La branca esquerra s'acosta a $y=3$: $\displaystyle\lim_{x\to-\infty}f(x)=3$.
- **b)** En apropar-nos a $-3$ per l'esquerra, $f(x)\to1$.
- **c)** En apropar-nos a $-3$ per la dreta, $f(x)\to-1$.
- **d)** Com que $1\ne-1$, els límits laterals no coincideixen i $\displaystyle\lim_{x\to-3}f(x)$ no existeix.
- **e)** A $x=1$ els dos costats s'acosten a $3$, de manera que $\displaystyle\lim_{x\to1}f(x)=3$.
- **f)** El punt ple de la gràfica és $(1,0)$; per tant, $f(1)=0$. El valor de la funció no coincideix amb el límit.
- **g)** i **h)** Quan $x$ s'apropa a $4$ pels dos costats, la gràfica puja sense fita: els dos límits laterals són $+\infty$.
- **i)** La branca dreta s'acosta a $y=-2$: $\displaystyle\lim_{x\to+\infty}f(x)=-2$.

**1.3.**

Escrivim sempre el límit complet. Per l'ordre dels infinits, eliminem els termes que creixen menys i conservem els que dominen el numerador i el denominador.

- **a)** En el numerador domina $3x^2$ i en el denominador domina $x^2$:

    $$
    \lim_{x\to+\infty}\frac{3x^2-2x+1}{(x-2)^2}
    =\lim_{x\to+\infty}\frac{3x^2}{x^2}
    =3.
    $$

- **b)** Per l'ordre dels infinits, $2x$ és un infinit més gran que $\ln x$. Per tant, en el numerador conservem $2x$:

    $$
    \lim_{x\to+\infty}\frac{2x+\ln x}{\ln x}
    =\lim_{x\to+\infty}\frac{2x}{\ln x}
    =+\infty.
    $$

- **c)** Per l'ordre dels infinits, $3^x$ és més gran que les constants. Conservem $3^x$ al numerador i $2\cdot3^x$ al denominador:

    $$
    \lim_{x\to+\infty}\frac{5+3^x}{2\cdot3^x+1}
    =\lim_{x\to+\infty}\frac{3^x}{2\cdot3^x}
    =\frac12.
    $$

- **d)** Per l'ordre dels infinits, $2^x$ és més gran que la constant $3$ del denominador:

    $$
    \lim_{x\to+\infty}\frac{4\cdot2^x}{2^x+3}
    =\lim_{x\to+\infty}\frac{4\cdot2^x}{2^x}
    =4.
    $$

- **e)** Per l'ordre dels infinits, $x^3$ és més gran que $x^2$. El denominador és un infinit més gran que el numerador:

    $$
    \lim_{x\to+\infty}\frac{x^2-4}{x^3+1}
    =\lim_{x\to+\infty}\frac{x^2}{x^3}
    =\lim_{x\to+\infty}\frac1x=0.
    $$

- **f)** Per l'ordre dels infinits, en el numerador domina $3x$ i dins de l'arrel domina $4x^2$. Com que $x\to+\infty$, $\sqrt{4x^2}=2x$:

    $$
    \lim_{x\to+\infty}\frac{3x-1}{\sqrt{4x^2+5}}
    =\lim_{x\to+\infty}\frac{3x}{2x}
    =\frac32.
    $$

- **g)** Per l'ordre dels infinits, $5^x$ creix més de pressa que qualsevol potència de $x$:

    $$
    \lim_{x\to+\infty}\left(5^x-4x^6\right)
    =\lim_{x\to+\infty}5^x=+\infty.
    $$

- **h)** Fem les divisions:

    $$
    \frac{x^2}{x-1}=x+1+\frac1{x-1},\qquad
    \frac{x^3}{x^2+2}=x-\frac{2x}{x^2+2}.
    $$

    Per l'ordre dels infinits, $x-1$ és més gran que la constant del numerador de $\frac1{x-1}$, i $x^2+2$ és més gran que $2x$. Per tant, les dues fraccions tendeixen a $0$:

    $$
    \lim_{x\to+\infty}\left(\frac{x^2}{x-1}-\frac{x^3}{x^2+2}\right)
    =\lim_{x\to+\infty}\left(1+\frac1{x-1}+\frac{2x}{x^2+2}\right)=1.
    $$

- **i)** Per l'ordre dels infinits, $4x^6$ és més gran que $-3x^4$ i que $x$:

    $$
    \lim_{x\to-\infty}\left(4x^6-3x^4+x\right)
    =\lim_{x\to-\infty}4x^6
    =+\infty.
    $$

- **j)** Per l'ordre dels infinits, $x^5$ creix més de pressa que $x^2$. Quan $x\to-\infty$, $x^5\to-\infty$ i, per tant, $-2x^5\to+\infty$:

    $$
    \lim_{x\to-\infty}\left(-2x^5+7x^2\right)
    =\lim_{x\to-\infty}(-2x^5)=+\infty.
    $$

- **k)** Per l'ordre dels infinits, en el numerador domina $3x^3$ i en el denominador domina $x^3$:

    $$
    \lim_{x\to-\infty}\frac{3x^3-2}{x^3+5x}
    =\lim_{x\to-\infty}\frac{3x^3}{x^3}
    =3.
    $$

- **l)** Quan $x\to-\infty$, $2^x\to0$ i, per l'ordre dels infinits, domina $x^3$:

    $$
    \lim_{x\to-\infty}\left(2^x+x^3\right)
    =\lim_{x\to-\infty}x^3=-\infty.
    $$

**1.4.**

- **a)** La substitució directa dona $2^2-3\cdot2+5=3$.
- **b)** El denominador no s'anul·la:

    $$
    \frac{0+4}{0-2}=-2.
    $$

- **c)** La substitució dona $\frac3{0}$. El numerador és positiu i $x-2$ canvia de signe:

    $$
    \lim_{x\to2^-}\frac{x+1}{x-2}=-\infty,\qquad
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
    =\frac{(x-2)(x-3)}{-(x-2)}=3-x,\qquad x\ne2.
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
    x^2+x-12=(x-3)(x+4),\qquad
    x^3-5x^2+3x+9=(x-3)^2(x+1).
    $$

    Així,

    $$
    \frac{x^2+x-12}{x^3-5x^2+3x+9}
    =\frac{x+4}{(x-3)(x+1)}.
    $$

    El numerador i $x+1$ són positius prop de $3$; per tant, el signe depèn de $x-3$:

    $$
    \lim_{x\to3^-}=-\infty,\qquad
    \lim_{x\to3^+}=+\infty.
    $$

    El límit no existeix.

**1.5.**

Factoritzem el denominador:

$$
x^2+x-2=(x+2)(x-1).
$$

Per tant,

$$
f(x)=\frac1{x-1},\qquad x\ne-2,1,
$$

però cal conservar les exclusions de la funció original.

- **Domini:** $D_f=\mathbb{R}\setminus\{-2,1\}$.
- **Límits demanats:**

    $$
    f(0)=-1,\qquad
    \lim_{x\to-2}f(x)=\frac1{-3}=-\frac13.
    $$

    Prop de $x=1$, el numerador és positiu i el signe depèn de $x-1$:

    $$
    \lim_{x\to1^-}f(x)=-\infty,\qquad
    \lim_{x\to1^+}f(x)=+\infty.
    $$

    Finalment, per l'ordre dels infinits, $x-1$ és un infinit més gran que la constant $1$ del numerador. Per tant,

    $$
    \lim_{x\to-\infty}\frac1{x-1}=0,\qquad
    \lim_{x\to+\infty}\frac1{x-1}=0.
    $$

- **Conclusió:** a $x=-2$ hi ha una discontinuïtat evitable i un forat a $(-2,-\frac13)$; $x=1$ és una asímptota vertical i $y=0$ és una asímptota horitzontal.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfica de la funció de l'exercici 1.5, amb un forat i les asímptotes vertical i horitzontal](../img/calcul/fig_1_14_resultat_exercici_1_5.svg?v=3){ width="760" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_14_resultat_exercici_1_5.tex">Figura 1.14.</a></strong> Representació de la funció de l'exercici 1.5.</figcaption>
</figure>

**1.6.**

Factoritzem i simplifiquem sense oblidar el domini original:

$$
g(x)=\frac{(x-4)(x+4)}{x(x-4)}=\frac{x+4}{x},\qquad x\ne0,4.
$$

- **Domini:** $D_g=\mathbb{R}\setminus\{0,4\}$.
- **En $x=0$:**

    $$
    \lim_{x\to0^-}\frac{x+4}{x}=-\infty,\qquad
    \lim_{x\to0^+}\frac{x+4}{x}=+\infty.
    $$

    Per tant, $x=0$ és una asímptota vertical.

- **En $x=4$:**

    $$
    \lim_{x\to4}g(x)=\frac{4+4}{4}=2.
    $$

    El factor cancel·lat produeix una discontinuïtat evitable i un forat a $(4,2)$.

- **A l'infinit:** per l'ordre dels infinits, $x$ és més gran que la constant $4$. Conservem $x$ al numerador i al denominador:

    $$
    \lim_{x\to-\infty}\frac{x+4}{x}
    =\lim_{x\to-\infty}\frac{x}{x}=1,
    $$

    $$
    \lim_{x\to+\infty}\frac{x+4}{x}
    =\lim_{x\to+\infty}\frac{x}{x}=1.
    $$

    Així, $y=1$ és una asímptota horitzontal.

<figure markdown="span" class="exercise-solution-figure">
  ![Gràfica de la funció de l'exercici 1.6, amb un forat i les asímptotes vertical i horitzontal](../img/calcul/fig_1_15_resultat_exercici_1_6.svg?v=3){ width="760" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_15_resultat_exercici_1_6.tex">Figura 1.15.</a></strong> Representació de la funció de l'exercici 1.6.</figcaption>
</figure>

**1.7.**

En el punt d'unió $x=2$ calculem el valor i els dos límits laterals amb el tram corresponent.

$$
f(2)=\frac{2-2}{(2-3)(2-4)}=0,\qquad
\lim_{x\to2^-}f(x)=0.
$$

Per la dreta,

$$
\lim_{x\to2^+}\frac{x^2-5}{(x+2)(x-2)}=-\infty,
$$

perquè el numerador tendeix a $-1$, $x+2$ és positiu i $x-2\to0^+$. Els límits laterals no coincideixen: hi ha una discontinuïtat infinita i $x=2$ és una asímptota vertical només pel costat dret.

Per estudiar els infinits utilitzem el tram que correspon. Per l'ordre dels infinits, a l'esquerra el denominador, que es comporta com $x^2$, és més gran que el numerador, que es comporta com $x$. A la dreta dominen $x^2$ tant al numerador com al denominador:

$$
\lim_{x\to-\infty}\frac{x-2}{(x-3)(x-4)}
=\lim_{x\to-\infty}\frac{x}{x^2}
=\lim_{x\to-\infty}\frac1x=0,
$$

$$
\lim_{x\to+\infty}\frac{x^2-5}{(x+2)(x-2)}
=\lim_{x\to+\infty}\frac{x^2}{x^2}=1.
$$

**1.8.**

L'únic punt on pot fallar la continuïtat és $t=60$.

$$
A(60)=e^{0{,}03\cdot60}=e^{1{,}8}\approx6{,}050,\qquad
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

**1.9.**

- **a)** Regla de la potència:

    $$f'(x)=(x^3)'=3x^2.$$

- **b)** Derivem terme a terme i després substituïm $x=2$:

    $$f'(x)=(x^2-3x)'=2x-3,\qquad f'(2)=4-3=1.$$

- **c)** Per aplicar la regla de la cadena, anomenem $h$ la funció de l'enunciat i prenem

    $$
    f(x)=\sqrt{x}\quad\Longrightarrow\quad f'(x)=\frac1{2\sqrt{x}},
    $$

    $$
    g(x)=x+5\quad\Longrightarrow\quad g'(x)=1.
    $$

    Com que $h(x)=f(g(x))$, apliquem $h'(x)=f'(g(x))g'(x)$:

    $$
    h'(x)=\frac1{2\sqrt{x+5}}\cdot1=\frac1{2\sqrt{x+5}},\qquad
    h'(4)=\frac1{2\sqrt9}=\frac16.
    $$

- **d)** Anomenem $h$ la funció de l'enunciat i prenem

    $$
    f(x)=e^x\quad\Longrightarrow\quad f'(x)=e^x,
    $$

    $$
    g(x)=2x\quad\Longrightarrow\quad g'(x)=2.
    $$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=e^{2x}\cdot2=2e^{2x},\qquad h'(0)=2e^0=2.$$

**1.10.**

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

**1.11.**

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

- **d)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{2x(x+1)-(x^2-4)}{(x+1)^2}
    =\frac{x^2+2x+4}{(x+1)^2}.
    $$

- **e)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{3(x^2+1)-(3x+2)2x}{(x^2+1)^2}
    =\frac{-3x^2-4x+3}{(x^2+1)^2}.
    $$

- **f)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{\frac1x x^2-(\ln x)2x}{x^4}
    =\frac{1-2\ln x}{x^3}.
    $$

**1.12.**

Com que a la regla de la cadena reservem $f$ per a la funció exterior i $g$ per a la interior, anomenem $h$ la funció de cada enunciat. En tots els apartats fem servir

$$h(x)=f(g(x))\quad\Longrightarrow\quad h'(x)=f'(g(x))g'(x).$$

- **a)** Prenem

    $$f(x)=x^7\Longrightarrow f'(x)=7x^6,\qquad
    g(x)=2x-3\Longrightarrow g'(x)=2.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =7(2x-3)^6\cdot2
    =14(2x-3)^6.
    $$

- **b)** Prenem

    $$f(x)=\sqrt{x}\Longrightarrow f'(x)=\frac1{2\sqrt{x}},\qquad
    g(x)=x^2+5\Longrightarrow g'(x)=2x.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{2\sqrt{x^2+5}}\cdot2x
    =\frac{x}{\sqrt{x^2+5}}.
    $$

- **c)** Primer escrivim $h(x)=(3x+1)^{-4}$. Prenem

    $$f(x)=x^{-4}\Longrightarrow f'(x)=-4x^{-5},\qquad
    g(x)=3x+1\Longrightarrow g'(x)=3.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =-4(3x+1)^{-5}\cdot3
    =-\frac{12}{(3x+1)^5}.
    $$

- **d)** Prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=x^2-2x\Longrightarrow g'(x)=2x-2.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =e^{x^2-2x}(2x-2)
    =(2x-2)e^{x^2-2x}.
    $$

- **e)** Prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=4x^2+1\Longrightarrow g'(x)=8x.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{4x^2+1}\cdot8x
    =\frac{8x}{4x^2+1}.
    $$

- **f)** Prenem

    $$f(x)=x^{-2}\Longrightarrow f'(x)=-2x^{-3},\qquad
    g(x)=x^3+1\Longrightarrow g'(x)=3x^2.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =-2(x^3+1)^{-3}\cdot3x^2
    =-\frac{6x^2}{(x^3+1)^3}.
    $$

- **g)** Prenem

    $$f(x)=\sqrt{x}\Longrightarrow f'(x)=\frac1{2\sqrt{x}},\qquad
    g(x)=1-e^x\Longrightarrow g'(x)=-e^x.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{2\sqrt{1-e^x}}\cdot(-e^x)
    =-\frac{e^x}{2\sqrt{1-e^x}}.
    $$

- **h)** Prenem

    $$f(x)=3^x\Longrightarrow f'(x)=3^x\ln3,\qquad
    g(x)=2x+1\Longrightarrow g'(x)=2.$$

    Per tant,

    $$
    h'(x)=f'(g(x))g'(x)
    =3^{2x+1}\ln3\cdot2
    =2\ln3\cdot3^{2x+1}.
    $$

**1.13.**

Simplifiquem, indiquem la restricció que prové de l'expressió original i després derivem.

- **a)**

    $$f(x)=\frac{x^3+2x^2}{x}=x^2+2x,\quad x\ne0;\qquad f'(x)=2x+2.$$

- **b)**

    $$f(x)=\frac{x^4+3x}{x}=x^3+3,\quad x\ne0;\qquad f'(x)=3x^2.$$

- **c)** $f(x)=x^2x^{1/2}=x^{5/2}$ i $f'(x)=\dfrac52x^{3/2}$.
- **d)**

    $$f(x)=\frac{(x-3)(x+3)}{x-3}=x+3,\quad x\ne3;\qquad f'(x)=1.$$

- **e)** Com que $x>0$, $\ln(x^3)=3\ln x$; per tant, $f'(x)=\dfrac3x$.
- **f)** Com que $x>0$, $e^{\ln x}=x$; per tant, $f'(x)=1$.

**1.14.**

- **a)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{2x(x^2+4)-(x^2-4)2x}{(x^2+4)^2}
    =\frac{16x}{(x^2+4)^2}.
    $$

- **b)** Anomenem $h$ la funció de l'enunciat i apliquem directament la regla del quocient. Abans derivem el denominador $v(x)=(3-x)^2$ amb la regla de la cadena. Prenem

    $$
    f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=3-x\Longrightarrow g'(x)=-1.
    $$

    Com que $v(x)=f(g(x))$,

    $$v'(x)=f'(g(x))g'(x)=2(3-x)(-1)=-2(3-x).$$

    Ara, amb $u(x)=x-2$ i $u'(x)=1$, apliquem la regla del quocient:

    $$
    h'(x)=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    =\frac{(3-x)^2+2(x-2)(3-x)}{(3-x)^4}
    =\frac{x-1}{(3-x)^3}.
    $$

- **c)** Per $x>0$,

    $$f(x)=\frac{4x^{3/2}}{\sqrt{x}+1}.$$

    Aplicant directament la regla del quocient,

    $$
    f'(x)=\frac{6\sqrt{x}(\sqrt{x}+1)-4x^{3/2}\frac1{2\sqrt{x}}}{(\sqrt{x}+1)^2}
    =\frac{2\sqrt{x}(2\sqrt{x}+3)}{(\sqrt{x}+1)^2}.
    $$

- **d)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=x^5\Longrightarrow f'(x)=5x^4,\qquad
    g(x)=\frac34-\frac{x}{6}\Longrightarrow g'(x)=-\frac16.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)
    =5\left(\frac34-\frac{x}{6}\right)^4\left(-\frac16\right)
    =-\frac56\left(\frac34-\frac{x}{6}\right)^4.$$

- **e)** Per $x\geq0$, $f(x)=\sqrt[4]{2}\,x^{3/4}$. Per $x>0$,

    $$f'(x)=\sqrt[4]{2}\cdot\frac34x^{-1/4}=\frac{3\sqrt[4]{2}}{4\sqrt[4]{x}}.$$

- **f)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=x^6\Longrightarrow f'(x)=6x^5,\qquad
    g(x)=3\sqrt{x}+2\Longrightarrow g'(x)=\frac3{2\sqrt{x}}.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$
    h'(x)=f'(g(x))g'(x)
    =6(3\sqrt{x}+2)^5\cdot\frac3{2\sqrt{x}}
    =\frac{9(3\sqrt{x}+2)^5}{\sqrt{x}}.
    $$

**1.15.**

- **a)** Apliquem directament la regla del quocient. Anomenem $h$ la funció de l'enunciat i prenem

    $$u(x)=x^4\Longrightarrow u'(x)=4x^3.$$

    Per derivar $v(x)=(x-2)^3$, apliquem la regla de la cadena. Prenem

    $$f(x)=x^3\Longrightarrow f'(x)=3x^2,\qquad
    g(x)=x-2\Longrightarrow g'(x)=1.$$

    Com que $v(x)=f(g(x))$,

    $$v'(x)=f'(g(x))g'(x)=3(x-2)^2\cdot1=3(x-2)^2.$$

    Per tant,

    $$
    h'(x)=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    =\frac{4x^3(x-2)^3-3x^4(x-2)^2}{(x-2)^6}
    =\frac{x^3(x-8)}{(x-2)^4}.
    $$

- **b)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=x^4\Longrightarrow f'(x)=4x^3,$$

    $$g(x)=\frac{x^2-3}{x}.$$

    Derivem $g$ directament amb la regla del quocient:

    $$
    g'(x)=\frac{2x\cdot x-(x^2-3)\cdot1}{x^2}
    =\frac{x^2+3}{x^2}.
    $$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$
    h'(x)=f'(g(x))g'(x)
    =4\left(\frac{x^2-3}{x}\right)^3\frac{x^2+3}{x^2}
    =\frac{4(x^2-3)^3(x^2+3)}{x^5}.
    $$

- **c)** Apliquem directament la regla del quocient. Anomenem $h$ la funció de l'enunciat i prenem

    $$u(x)=x^2\Longrightarrow u'(x)=2x.$$

    Per derivar $v(x)=(3x-1)^4$, apliquem la regla de la cadena. Prenem

    $$f(x)=x^4\Longrightarrow f'(x)=4x^3,\qquad
    g(x)=3x-1\Longrightarrow g'(x)=3.$$

    Com que $v(x)=f(g(x))$,

    $$v'(x)=f'(g(x))g'(x)=4(3x-1)^3\cdot3=12(3x-1)^3.$$

    Per tant,

    $$
    h'(x)=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    =\frac{2x(3x-1)^4-12x^2(3x-1)^3}{(3x-1)^8}
    =-\frac{2x(3x+1)}{(3x-1)^5}.
    $$

- **d)** Apliquem directament la regla del quocient. El numerador és $u(x)=4-x^2$, de manera que $u'(x)=-2x$. Per derivar el denominador $v(x)=x^2-6x+9=(x-3)^2$, apliquem la regla de la cadena. Prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x-3\Longrightarrow g'(x)=1.$$

    Com que $v(x)=f(g(x))$,

    $$v'(x)=f'(g(x))g'(x)=2(x-3).$$

    Així,

    $$
    f'(x)=\frac{-2x(x-3)^2-(4-x^2)2(x-3)}{(x-3)^4}
    =\frac{2(3x-4)}{(x-3)^3}.
    $$

- **e)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=x^{3/2}\Longrightarrow f'(x)=\frac32x^{1/2},$$

    $$g(x)=\frac{2-x}{2+x}.$$

    Derivem $g$ directament amb la regla del quocient:

    $$g'(x)=\frac{(-1)(2+x)-(2-x)\cdot1}{(2+x)^2}=-\frac4{(2+x)^2}.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)
    =\frac32g(x)^{1/2}g'(x)
    =-\frac6{(x+2)^2}\sqrt{\frac{2-x}{2+x}}.$$

- **f)** Derivem $\frac3x$ directament amb la regla del quocient i $\frac{x^2}{4}$ amb la regla de la constant:

    $$
    f'(x)=\frac{0\cdot x-3\cdot1}{x^2}+\frac14\cdot2x
    =-\frac3{x^2}+\frac{x}{2}.
    $$

**1.16.**

- **a)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=x^2+3\Longrightarrow g'(x)=2x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=\frac1{x^2+3}\cdot2x=\frac{2x}{x^2+3}.$$

- **b)** Aquesta funció té dues composicions. Anomenem $h$ la funció de l'enunciat i prenem primer

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=\sqrt{2-x}.$$

    Per derivar $g$, prenem $p(x)=\sqrt{x}$ i $q(x)=2-x$:

    $$
    p'(x)=\frac1{2\sqrt{x}},\qquad q'(x)=-1,
    $$

    $$
    g'(x)=p'(q(x))q'(x)=-\frac1{2\sqrt{2-x}}.
    $$

    Com que $h(x)=f(g(x))$, tornem a aplicar la regla de la cadena:

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{\sqrt{2-x}}\left(-\frac1{2\sqrt{2-x}}\right)
    =-\frac1{2(2-x)}.
    $$

- **c)** Apliquem directament la regla del quocient. Anomenem $h$ la funció de l'enunciat i prenem

    $$u(x)=\ln x\Longrightarrow u'(x)=\frac1x.$$

    El denominador $v(x)=e^{2x}$ és una composició. Prenem $f(x)=e^x$ i $g(x)=2x$:

    $$v'(x)=f'(g(x))g'(x)=e^{2x}\cdot2=2e^{2x}.$$

    Per tant,

    $$
    h'(x)=\frac{u'(x)v(x)-u(x)v'(x)}{v(x)^2}
    =\frac{\frac1x e^{2x}-2(\ln x)e^{2x}}{e^{4x}}
    =e^{-2x}\left(\frac1x-2\ln x\right).
    $$

- **d)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=3x^2-2\Longrightarrow g'(x)=6x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=e^{3x^2-2}\cdot6x=6xe^{3x^2-2}.$$

- **e)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=\log_3x\Longrightarrow f'(x)=\frac1{x\ln3},\qquad
    g(x)=x^2+1\Longrightarrow g'(x)=2x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{(x^2+1)\ln3}\cdot2x
    =\frac{2x}{(x^2+1)\ln3}.
    $$

- **f)** Aquesta funció té dues composicions. Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=\ln\frac2x.$$

    Per derivar $g$, prenem $p(x)=\ln x$ i $q(x)=\frac2x$. Derivem $q$ directament amb la regla del quocient:

    $$
    q'(x)=\frac{0\cdot x-2\cdot1}{x^2}=-\frac2{x^2}.
    $$

    Apliquem la regla de la cadena a $g(x)=p(q(x))$:

    $$
    g'(x)=p'(q(x))q'(x)
    =\frac1{2/x}\left(-\frac2{x^2}\right)
    =-\frac1x.
    $$

    Finalment, com que $h(x)=f(g(x))$, tornem a aplicar la regla de la cadena:

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{\ln(2/x)}\left(-\frac1x\right)
    =-\frac1{x\ln(2/x)}.
    $$

**1.17.**

Derivem successivament el resultat de la fila anterior.

- **a)**

    $$f'(x)=3x^2-4x+4,\qquad f''(x)=6x-4,\qquad f'''(x)=6.$$

- **b)** Anomenem $h$ la funció de l'enunciat i, per a la primera derivada, prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=3x\Longrightarrow g'(x)=3.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=e^{3x}\cdot3=3e^{3x}.$$

    En les derivades següents tornem a aplicar la mateixa regla de la cadena a $e^{3x}$:

    $$h''(x)=3\cdot e^{3x}\cdot3=9e^{3x},$$

    $$h'''(x)=9\cdot e^{3x}\cdot3=27e^{3x}.$$

- **c)**

    $$
    f'(x)=e^x+(x-2)e^x=(x-1)e^x,
    $$

    $$f''(x)=e^x+(x-1)e^x=xe^x,\qquad f'''(x)=e^x+xe^x=(x+1)e^x.$$

- **d)** Anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=x+3\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=\frac1{x+3}.$$

    Derivem les fraccions següents directament amb la regla del quocient:

    $$
    h''(x)=\frac{0\cdot(x+3)-1\cdot1}{(x+3)^2}
    =-\frac1{(x+3)^2},
    $$

    Per obtenir la tercera derivada, el denominador és una composició. Prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x+3\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((x+3)^2\right)'=f'(g(x))g'(x)=2(x+3).$$

    Tornem a aplicar directament la regla del quocient:

    $$
    h'''(x)=\frac{0\cdot(x+3)^2-(-1)\cdot2(x+3)}{(x+3)^4}
    =\frac2{(x+3)^3}.
    $$

- **e)** Anomenem $h$ la funció de l'enunciat i apliquem directament la regla del quocient:

    $$
    h'(x)=\frac{0\cdot(x+2)-1\cdot1}{(x+2)^2}
    =-\frac1{(x+2)^2}.
    $$

    Per obtenir la segona derivada, el denominador és una composició. Prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x+2\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((x+2)^2\right)'=f'(g(x))g'(x)=2(x+2).$$

    Tornem a aplicar directament la regla del quocient:

    $$
    h''(x)=\frac{0\cdot(x+2)^2-(-1)\cdot2(x+2)}{(x+2)^4}
    =\frac2{(x+2)^3},
    $$

    Per obtenir la tercera derivada, prenem ara

    $$f(x)=x^3\Longrightarrow f'(x)=3x^2,\qquad
    g(x)=x+2\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((x+2)^3\right)'=f'(g(x))g'(x)=3(x+2)^2.$$

    Apliquem una altra vegada directament la regla del quocient:

    $$
    h'''(x)=\frac{0\cdot(x+2)^3-2\cdot3(x+2)^2}{(x+2)^6}
    =-\frac6{(x+2)^4}.
    $$

**1.18.**

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

**1.19.**

$$g'(x)=3ax^2+2bx-2.$$

Les condicions donen

$$
g(1)=a+b-2+1=2\Longrightarrow a+b=3,
$$

$$
g'(1)=3a+2b-2=5\Longrightarrow3a+2b=7.
$$

De $b=3-a$ i la segona equació:

$$3a+2(3-a)=7\Longrightarrow a=1,\qquad b=2.$$

**1.20.**

$$h'(x)=2ax+b.$$

Transformem les condicions:

$$
h(-1)=a-b+3=7\Longrightarrow a-b=4,
$$

$$
h'(2)=4a+b=6.
$$

De la primera, $b=a-4$. Substituïm:

$$4a+(a-4)=6\Longrightarrow5a=10\Longrightarrow a=2,\qquad b=-2.$$

Per tant,

$$h(x)=2x^2-2x+3.$$

**1.21.**

La gràfica passa per $P=(0,2)$, passa per $Q=(1,0)$ i té tangent horitzontal en $Q$. Per tant,

$$p(0)=2,\qquad p(1)=0,\qquad p'(1)=0.$$

Com que

$$p'(x)=3x^2+2ax+b,$$

les tres equacions són

$$
c=2,\qquad 1+a+b+c=0,\qquad3+2a+b=0.
$$

Substituint $c=2$:

$$a+b=-3,\qquad2a+b=-3.$$

Restant les dues equacions obtenim $a=0$ i després $b=-3$. Així,

$$p(x)=x^3-3x+2.$$

Finalment,

$$p''(x)=6x+2a=6x,\qquad p''(1)=6>0.$$

Per tant, $Q=(1,0)$ és un mínim relatiu.

**2.1.**

Una funció només pot ser derivable en un punt si és contínua i la gràfica hi té una única tangent amb pendent finit. Observant cada gràfica:

- **a)** No és derivable a $x=-1$ ni a $x=1$: en aquests punts la gràfica presenta punts angulosos.
- **b)** La corba és suau i té una tangent ben definida en cada punt; és derivable en tot $\mathbb{R}$.
- **c)** No és derivable a $x=1$, on hi ha un punt angulós.
- **d)** No és derivable a $x=-2$ ni a $x=1$: en els punts d'unió no coincideixen els pendents laterals.
- **e)** No és derivable a $x=-1$, on la tangent no és única.
- **f)** No és derivable a $x=1$, perquè la gràfica no és contínua en aquest punt.

**2.2.**

- **a)** La derivada és el pendent de la tangent. A $x=-2$ i a $x=1$ la tangent és horitzontal, de manera que

    $$f'(-2)=0,\qquad f'(1)=0.$$

    El tram que conté $x=4$ és una recta que puja $2$ unitats per cada unitat horitzontal; per tant, $f'(4)=2$.

- **b)** A $x=0$ i $x=2$ els trams s'uneixen amb pendents diferents, i a $x=3$ la gràfica presenta una discontinuïtat. En conseqüència, $f$ no és derivable a $x=0$, $x=2$ ni $x=3$.

**2.3.**

Primer comprovem la continuïtat en els tres passos:

1. **Límits laterals:** $f(1^-)=1^2+1-2=0$ i $f(1^+)=3\cdot1-3=0$. Per tant, $\displaystyle\lim_{x\to1}f(x)=0$.
2. **Valor de la funció:** $f(1)=1^2+1-2=0$.
3. **Comparació:** $\displaystyle\lim_{x\to1}f(x)=0=f(1)$.

Per tant, $f$ és contínua en $x=1$. Derivem els dos trams:

$$f'(1^-)=(2x+1)\big|_{x=1}=3,\qquad f'(1^+)=3.$$

Com que les derivades laterals coincideixen, $f$ és derivable a $x=1$ i $f'(1)=3$.

**2.4.**

Comprovem la continuïtat en els tres passos:

1. **Límits laterals:** $f(-1^-)=(-1)^2+4(-1)+1=-2$ i $f(-1^+)=-1-1=-2$. Per tant, $\displaystyle\lim_{x\to-1}f(x)=-2$.
2. **Valor de la funció:** $f(-1)=(-1)^2+4(-1)+1=-2$.
3. **Comparació:** $\displaystyle\lim_{x\to-1}f(x)=-2=f(-1)$.

Per tant, $f$ és contínua en $x=-1$. Ara comparem les derivades laterals:

$$f'(-1^-)=(2x+4)\big|_{x=-1}=2,\qquad f'(-1^+)=1.$$

Com que $2\ne1$, no és derivable a $x=-1$; la gràfica hi té un punt angulós.

**2.5.**

Comprovem la continuïtat en els tres passos:

1. **Límits laterals:** $f(2^-)=\sqrt{2-2}=0$ i $f(2^+)=\sqrt{2-2}=0$. Per tant, $\displaystyle\lim_{x\to2}f(x)=0$.
2. **Valor de la funció:** $f(2)=\sqrt{2-2}=0$.
3. **Comparació:** $\displaystyle\lim_{x\to2}f(x)=0=f(2)$.

Per tant, $f$ és contínua en $x=2$. Les derivades són

$$
f'(x)=
\begin{cases}
-\dfrac1{2\sqrt{2-x}}, & x<2,\\[6pt]
\dfrac1{2\sqrt{x-2}}, & x>2.
\end{cases}
$$

Així,

$$\lim_{x\to2^-}f'(x)=-\infty,\qquad \lim_{x\to2^+}f'(x)=+\infty.$$

No hi ha una derivada finita comuna; la funció no és derivable a $x=2$ i la gràfica hi presenta dues semitangents verticals.

**2.6.**

En $x=-2$, comprovem la continuïtat en els tres passos:

1. **Límits laterals:** $f(-2^-)=(-2)^2+5(-2)+4=-2$ i $f(-2^+)=2(-2)+2=-2$. Per tant, $\displaystyle\lim_{x\to-2}f(x)=-2$.
2. **Valor de la funció:** $f(-2)=2(-2)+2=-2$.
3. **Comparació:** $\displaystyle\lim_{x\to-2}f(x)=-2=f(-2)$.

Per tant, és contínua, però

$$f'(-2^-)=(2x+5)\big|_{x=-2}=1,\qquad f'(-2^+)=2.$$

Per tant, no és derivable a $x=-2$.

En $x=1$, repetim les tres comprovacions:

1. **Límits laterals:** $f(1^-)=2(1)+2=4$ i $f(1^+)=1+1=2$. Com que no coincideixen, $\displaystyle\lim_{x\to1}f(x)$ no existeix.
2. **Valor de la funció:** $f(1)=2(1)+2=4$.
3. **Comparació:** el límit no existeix i, per tant, no pot coincidir amb $f(1)$.

Hi ha una discontinuïtat de salt; en conseqüència, tampoc no és derivable a $x=1$.

En els intervals oberts,

$$
f'(x)=
\begin{cases}
2x+5, & x<-2,\\
2, & -2<x<1,\\
1, & x>1.
\end{cases}
$$

**2.7.**

- **a)** Comprovem primer la continuïtat.

    En $x=0$:

    **1. Límits laterals:** $f(0^-)=0$ i $f(0^+)=0^2=0$. Per tant, $\displaystyle\lim_{x\to0}f(x)=0$.

    **2. Valor de la funció:** $f(0)=0^2=0$.

    **3. Comparació:** $\displaystyle\lim_{x\to0}f(x)=0=f(0)$.

    En $x=2$:

    **1. Límits laterals:** $f(2^-)=2^2=4$ i $f(2^+)=2\cdot2=4$. Per tant, $\displaystyle\lim_{x\to2}f(x)=4$.

    **2. Valor de la funció:** $f(2)=2\cdot2=4$.

    **3. Comparació:** $\displaystyle\lim_{x\to2}f(x)=4=f(2)$.

    Així, $f$ és contínua en tots dos punts d'unió. Les derivades laterals coincideixen en $x=0$, però en $x=2$

    $$f'(2^-)=2\cdot2=4,\qquad f'(2^+)=2.$$

    És contínua però no derivable a $x=2$. Per tant,

    $$
    f'(x)=
    \begin{cases}
    0, & x<0,\\
    2x, & 0\leq x<2,\\
    2, & x>2.
    \end{cases}
    $$

- **b)** Comprovem la continuïtat en $x=0$:

    **1. Límits laterals:** $g(0^-)=e^{2\cdot0}=1$ i $g(0^+)=2\cdot0+1=1$. Per tant, $\displaystyle\lim_{x\to0}g(x)=1$.

    **2. Valor de la funció:** $g(0)=e^{2\cdot0}=1$.

    **3. Comparació:** $\displaystyle\lim_{x\to0}g(x)=1=g(0)$.

    Per tant, $g$ és contínua en $x=0$.

    Per no confondre la funció $g$ de l'enunciat amb la funció interior de la regla de la cadena, anomenem $H$ la funció de l'enunciat. En el tram exponencial, $H(x)=e^{2x}$, i prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=2x\Longrightarrow g'(x)=2.$$

    Així, $H(x)=f(g(x))$ en aquest tram i

    $$H'(x)=f'(g(x))g'(x)=e^{2x}\cdot2=2e^{2x}.$$

    $$H'(0^-)=2e^0=2,\qquad H'(0^+)=2.$$

    És derivable en tot $\mathbb{R}$ i

    $$
    H'(x)=
    \begin{cases}
    2e^{2x}, & x\leq0,\\
    2, & x>0.
    \end{cases}
    $$

**2.8.**

En $x=0$, els dos trams valen $5$ per a qualsevol $k$; per tant, sempre és contínua. Les derivades laterals són

$$
\lim_{x\to0^-}(4kx^3+6x)=0,\qquad \lim_{x\to0^+}4x=0.
$$

També coincideixen per a qualsevol valor del paràmetre. Per tant, la funció és derivable en tot $\mathbb{R}$ per a qualsevol $k\in\mathbb{R}$.

**2.9.**

La continuïtat en $x=0$ exigeix

$$4=n.$$

Les derivades dels trams són $2x+m$ i $-4x$. La derivabilitat exigeix

$$m=0.$$

Per tant, $m=0$ i $n=4$.

**2.10.**

La continuïtat en $x=2$ dona

$$2^3+1=4a+b\Longrightarrow4a+b=9.$$

Les derivades laterals han de coincidir:

$$3\cdot2^2=2a\cdot2\Longrightarrow12=4a\Longrightarrow a=3.$$

Substituint a l'equació de continuïtat, $12+b=9$, i obtenim $b=-3$.

**2.11.**

La continuïtat en $x=2$ exigeix

$$4-8+m=-4+2n\Longrightarrow m=2n.$$

Les derivades són $2x-4$ i $-2x+n$. La igualtat de derivades laterals dona

$$0=-4+n\Longrightarrow n=4,$$

i, per tant, $m=8$.

Amb aquests valors,

$$
f'(x)=
\begin{cases}
2x-4, & x\leq2,\\
-2x+4, & x>2,
\end{cases}
$$

Les dues expressions s'anul·len només a $x=2$; per tant, aquest és l'únic punt amb $f'(x)=0$.

**2.12.**

- **a)** Continuïtat en $x=1$:

    $$a+2=-b\Longrightarrow a+b=-2.$$

    Igualtat de derivades:

    $$2a+2=2-b\Longrightarrow2a+b=0.$$

    Restant les equacions, $a=2$ i $b=-4$.

- **b)** Continuïtat en $x=0$:

    $$0=b\Longrightarrow b=0.$$

    Igualtat de derivades:

    $$3\cdot0^2+2=a\Longrightarrow a=2.$$

**2.13.**

La continuïtat en $x=1$ exigeix

$$a-2=b\Longrightarrow a=b+2.$$

Per al tram dret,

$$
\left(\frac{b+\ln x}{x}\right)'=\frac{1-b-\ln x}{x^2}.
$$

Igualem les derivades laterals en $x=1$:

$$-2=1-b\Longrightarrow b=3.$$

Finalment, $a=b+2=5$.

**2.14.**

La continuïtat en $x=1$ dona

$$a+b+1=a-b+3\Longrightarrow b=1.$$

Les derivades són

$$2ax+b,\qquad -\frac{a}{x^2}+\frac{2b}{x^3}.$$

En $x=1$ han de coincidir:

$$2a+b=-a+2b\Longrightarrow3a=b.$$

Com que $b=1$, obtenim $a=\frac13$.

**2.15.**

En cada cas separem segons el signe de l'expressió dins del valor absolut.

- **a)** $x+4=0$ quan $x=-4$:

    $$
    |x+4|=
    \begin{cases}
    -x-4, & x<-4,\\
    x+4, & x\geq-4.
    \end{cases}
    $$

    Comprovem la continuïtat en els tres passos:

    **1. Límits laterals:** $f(-4^-)=0$ i $f(-4^+)=0$; per tant, $\displaystyle\lim_{x\to-4}f(x)=0$.

    **2. Valor de la funció:** $f(-4)=|-4+4|=0$.

    **3. Comparació:** $\displaystyle\lim_{x\to-4}f(x)=0=f(-4)$.

    És contínua, però les derivades laterals són $-1$ i $1$; no és derivable a $x=-4$.

- **b)** $-2x+4=0$ quan $x=2$:

    $$
    |-2x+4|=
    \begin{cases}
    -2x+4, & x\leq2,\\
    2x-4, & x>2.
    \end{cases}
    $$

    Comprovem la continuïtat en els tres passos:

    **1. Límits laterals:** $f(2^-)=0$ i $f(2^+)=0$; per tant, $\displaystyle\lim_{x\to2}f(x)=0$.

    **2. Valor de la funció:** $f(2)=|-2\cdot2+4|=0$.

    **3. Comparació:** $\displaystyle\lim_{x\to2}f(x)=0=f(2)$.

    És contínua, però els pendents laterals són $-2$ i $2$; no és derivable a $x=2$.

- **c)** $x-1=0$ quan $x=1$:

    $$
    h(x)=
    \begin{cases}
    2x-(x-1)=x+1, & x<1,\\
    2x+(x-1)=3x-1, & x\geq1.
    \end{cases}
    $$

    Comprovem la continuïtat en els tres passos:

    **1. Límits laterals:** $h(1^-)=1+1=2$ i $h(1^+)=3\cdot1-1=2$; per tant, $\displaystyle\lim_{x\to1}h(x)=2$.

    **2. Valor de la funció:** $h(1)=2\cdot1+|1-1|=2$.

    **3. Comparació:** $\displaystyle\lim_{x\to1}h(x)=2=h(1)$.

    És contínua, però les derivades laterals són $1$ i $3$; no és derivable a $x=1$.

**2.16.**

Per estudiar la monotonia, calculem $f'(x)$, trobem els punts crítics i fem el quadre de signes. Els zeros de la derivada, les discontinuïtats i els extrems del domini han de separar els intervals.

- **a)** $f'(x)=3x^2-6x-9=3(x+1)(x-3)$. El signe és $+$, $-$, $+$ en els intervals determinats per $-1$ i $3$. Per tant, creix a $(-\infty,-1)$ i $(3,+\infty)$, i decreix a $(-1,3)$. Hi ha un màxim relatiu a $(-1,9)$ i un mínim relatiu a $(3,-23)$.
- **b)** $f'(x)=4x^3-20x=4x(x^2-5)$. Els punts crítics són $-\sqrt5$, $0$ i $\sqrt5$. La funció decreix a $(-\infty,-\sqrt5)$ i $(0,\sqrt5)$, i creix a $(-\sqrt5,0)$ i $(\sqrt5,+\infty)$. Té mínims relatius a $(\pm\sqrt5,-16)$ i un màxim relatiu a $(0,9)$.
- **c)** $D_f=\mathbb{R}\setminus\{1\}$. Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{2x(x-1)-(x^2+3)}{(x-1)^2}
    =\frac{x^2-2x-3}{(x-1)^2}
    =\frac{(x+1)(x-3)}{(x-1)^2}.
    $$

    Cal separar també $x=1$. Creix a $(-\infty,-1)$ i $(3,+\infty)$; decreix a $(-1,1)$ i $(1,3)$. Hi ha un màxim relatiu a $(-1,-2)$ i un mínim relatiu a $(3,6)$.
- **d)** Anomenem $F$ la funció de l'enunciat i apliquem la regla del producte. Per derivar el factor exponencial, prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=-x\Longrightarrow g'(x)=-1.$$

    Per la regla de la cadena,

    $$\left(e^{-x}\right)'=f'(g(x))g'(x)=-e^{-x}.$$

    Ara apliquem la regla del producte:

    $$F'(x)=e^{-x}-(x-1)e^{-x}=e^{-x}(2-x).$$

    Com que $e^{-x}>0$, creix si $x<2$ i decreix si $x>2$. Per tant, té un màxim relatiu a $(2,e^{-2})$.
- **e)** $D_f=(0,+\infty)$. Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{\frac1x\cdot x^2-(\ln x)\cdot2x}{x^4}
    =\frac{1-2\ln x}{x^3}.
    $$

    Com que $x^3>0$, $f'(x)=0$ quan $x=\sqrt e$. Creix a $(0,\sqrt e)$ i decreix a $(\sqrt e,+\infty)$; té un màxim relatiu a $\left(\sqrt e,\frac1{2e}\right)$.
- **f)** Apliquem directament la regla del quocient,

    $$
    f'(x)=\frac{3x^2(x^2+1)-2x(x^3+1)}{(x^2+1)^2}
    =\frac{x^2(x^2+3)}{(x^2+1)^2}\geq0.
    $$

    La funció és creixent a tot $\mathbb{R}$. Tot i que $f'(0)=0$, a $(0,0)$ no canvia el signe de la derivada i no hi ha cap extrem.
- **g)** $f'(x)=3x^2-6x+3=3(x-1)^2\geq0$. La funció és creixent a tot $\mathbb{R}$. El punt $(1,1)$ és estacionari, però no és un extrem perquè la derivada no canvia de signe.

**2.17.**

Cal justificar els intervals amb el signe de la derivada.

- **a)** $f'(x)=3x^2-12=3(x-2)(x+2)$. Creix a $(-\infty,-2)$ i $(2,+\infty)$, i decreix a $(-2,2)$. Té un màxim relatiu a $(-2,17)$ i un mínim relatiu a $(2,-15)$.
- **b)** $f'(x)=4x^3-8x=4x(x^2-2)$. Decreix a $(-\infty,-\sqrt2)$ i $(0,\sqrt2)$, i creix a $(-\sqrt2,0)$ i $(\sqrt2,+\infty)$. Té mínims relatius a $(\pm\sqrt2,-4)$ i un màxim relatiu a $(0,0)$.
- **c)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{2x(x^2+1)-2x(x^2-4)}{(x^2+1)^2}
    =\frac{10x}{(x^2+1)^2}.
    $$

    Decreix a $(-\infty,0)$ i creix a $(0,+\infty)$; té un mínim relatiu i absolut a $(0,-4)$.
- **d)** Anomenem $F$ la funció de l'enunciat i apliquem la regla del producte. El factor $e^{-x}$ és una composició: prenem $f(x)=e^x$ i $g(x)=-x$, amb $f'(x)=e^x$ i $g'(x)=-1$. Per la regla de la cadena,

    $$\left(e^{-x}\right)'=f'(g(x))g'(x)=e^{-x}(-1)=-e^{-x}.$$

    Per tant,

    $$F'(x)=e^{-x}-(x+1)e^{-x}=-xe^{-x}.$$

    Com que $e^{-x}>0$, creix a $(-\infty,0)$ i decreix a $(0,+\infty)$. Té un màxim relatiu i absolut a $(0,1)$.

**2.18.**

Totes sis funcions tenen domini $\mathbb{R}$. Factoritzem per trobar els talls amb l'eix $X$ i utilitzem la derivada per justificar la forma de la gràfica. Per estudiar els infinits apliquem l'ordre dels infinits i eliminem els termes de menor ordre.

- **a)** $f(x)=(x^2-1)(x^2-5)$; talla l'eix $X$ a $x=\pm1,\pm\sqrt5$ i l'eix $Y$ a $(0,5)$. Com que $f'(x)=4x(x^2-3)$, hi ha mínims a $(\pm\sqrt3,-4)$ i un màxim a $(0,5)$. Per l'ordre dels infinits, eliminem els termes menors i conservem $x^4$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^4=+\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x^4=+\infty$.
- **b)** $f(x)=(x+2)^2(x-4)$; els zeros són $-2$ (doble) i $4$, i $f(0)=-16$. Com que $f'(x)=3(x-2)(x+2)$, hi ha un màxim a $(-2,0)$ i un mínim a $(2,-32)$. Per l'ordre dels infinits, conservem $x^3$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^3=-\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x^3=+\infty$.
- **c)** $f(x)=x^3(x-4)$; els zeros són $0$ (triple) i $4$. Com que $f'(x)=4x^2(x-3)$, decreix fins a $x=3$ i creix després. Té un mínim a $(3,-27)$; $(0,0)$ és estacionari, però no és un extrem. Per l'ordre dels infinits, conservem $x^4$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^4=+\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x^4=+\infty$.
- **d)** $f(x)=x^2(x-5)^3$; els zeros són $0$ (doble) i $5$ (triple). Com que $f'(x)=5x(x-2)(x-5)^2$, té un màxim a $(0,0)$ i un mínim a $(2,-108)$. A $(5,0)$ la derivada s'anul·la, però no canvia de signe. Per l'ordre dels infinits, conservem $x^5$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^5=-\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x^5=+\infty$.
- **e)** $f(x)=4\left(x-\frac12\right)^2(x-2)$; els zeros són $\frac12$ (doble) i $2$, i $f(0)=-2$. Com que $f'(x)=3(2x-1)(2x-3)$, té un màxim a $\left(\frac12,0\right)$ i un mínim a $\left(\frac32,-2\right)$. Per l'ordre dels infinits, conservem $4x^3$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}4x^3=-\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}4x^3=+\infty$.
- **f)** $f(x)=x^2(x-4)^2$; els zeros són $0$ i $4$, tots dos dobles. Com que $f'(x)=4x(x-2)(x-4)$, té mínims a $(0,0)$ i $(4,0)$ i un màxim a $(2,16)$. Per l'ordre dels infinits, conservem $x^4$: $\lim_{x\to-\infty}f(x)=\lim_{x\to-\infty}x^4=+\infty$ i $\lim_{x\to+\infty}f(x)=\lim_{x\to+\infty}x^4=+\infty$.

<figure markdown="span" class="exercise-solution-figure">
  ![Representacions de les sis funcions polinòmiques de l'exercici 2.18](../img/calcul/fig_2_31_resultat_exercici_2_18.svg?v=4){ width="100%" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_31_resultat_exercici_2_18.tex">Figura 2.31.</a></strong> Representacions de les funcions polinòmiques de l'exercici 2.18.</figcaption>
</figure>

**2.19.**

En cada funció racional comencem pel domini, factoritzem si és possible i conservem sempre les exclusions de l'expressió original.

- **a)** $\displaystyle f(x)=\frac{(x-1)(x+1)}{(x-2)(x+1)}=\frac{x-1}{x-2}$, amb $D_f=\mathbb{R}\setminus\{-1,2\}$. Hi ha un forat a $\left(-1,\frac23\right)$ i una asímptota vertical $x=2$. Per l'ordre dels infinits, al numerador i al denominador domina $x$:

    $$
    \lim_{x\to\pm\infty}\frac{x-1}{x-2}
    =\lim_{x\to\pm\infty}\frac{x}{x}=1.
    $$

    Per tant, $y=1$ és una asímptota horitzontal. A més,

    $$f(x)-1=\frac1{x-2},$$

    de manera que la gràfica queda per sota de l'asímptota si $x<2$ i per sobre si $x>2$. Els talls són $(1,0)$ i $\left(0,\frac12\right)$. Derivem directament amb la regla del quocient:

    $$
    f'(x)=\frac{1\cdot(x-2)-(x-1)\cdot1}{(x-2)^2}
    =-\frac1{(x-2)^2}<0.
    $$

    Per tant, decreix en cada interval del domini.
- **b)** $D_f=\mathbb{R}\setminus\{-1,1\}$ i $x=\pm1$ són asímptotes verticals. Per l'ordre dels infinits, al numerador domina $2x^2$ i al denominador domina $x^2$:

    $$
    \lim_{x\to\pm\infty}\frac{2x^2-4}{x^2-1}
    =\lim_{x\to\pm\infty}\frac{2x^2}{x^2}=2.
    $$

    Així, $y=2$ és una asímptota horitzontal. Com que

    $$f(x)-2=\frac{-2}{x^2-1},$$

    la gràfica queda per sota de l'asímptota si $|x|>1$ i per sobre si $|x|<1$. Els talls són $(\pm\sqrt2,0)$ i $(0,4)$. Derivem directament amb la regla del quocient:

    $$
    f'(x)=\frac{4x(x^2-1)-(2x^2-4)2x}{(x^2-1)^2}
    =\frac{4x}{(x^2-1)^2}.
    $$

    Així, decreix per $x<0$ i creix per $x>0$, separant a $x=\pm1$. Té un mínim relatiu a $(0,4)$.
- **c)** $\displaystyle f(x)=\frac{-(x-3)(x+2)}{(x-2)(x+2)}=\frac{3-x}{x-2}$, amb $D_f=\mathbb{R}\setminus\{-2,2\}$. Hi ha un forat a $\left(-2,-\frac54\right)$ i una asímptota vertical $x=2$. Per l'ordre dels infinits, al numerador domina $-x$ i al denominador domina $x$:

    $$
    \lim_{x\to\pm\infty}\frac{3-x}{x-2}
    =\lim_{x\to\pm\infty}\frac{-x}{x}=-1.
    $$

    Per tant, $y=-1$ és una asímptota horitzontal. Com que

    $$f(x)+1=\frac1{x-2},$$

    la gràfica queda per sota de l'asímptota si $x<2$ i per sobre si $x>2$. Els talls són $(3,0)$ i $\left(0,-\frac32\right)$. Derivem directament amb la regla del quocient:

    $$
    f'(x)=\frac{(-1)(x-2)-(3-x)\cdot1}{(x-2)^2}
    =-\frac1{(x-2)^2}<0.
    $$

    Per tant, decreix en cada interval del domini.
- **d)** $D_f=\mathbb{R}\setminus\{-2,2\}$ i $x=\pm2$ són asímptotes verticals. Per l'ordre dels infinits, al numerador domina $3x^2$ i al denominador domina $x^2$:

    $$
    \lim_{x\to\pm\infty}\frac{3x^2+4}{x^2-4}
    =\lim_{x\to\pm\infty}\frac{3x^2}{x^2}=3.
    $$

    Així, $y=3$ és una asímptota horitzontal. Com que

    $$f(x)-3=\frac{16}{x^2-4},$$

    la gràfica queda per sobre de l'asímptota si $|x|>2$ i per sota si $|x|<2$. No talla l'eix $X$ i talla l'eix $Y$ a $(0,-1)$. Derivem directament amb la regla del quocient:

    $$
    f'(x)=\frac{6x(x^2-4)-(3x^2+4)2x}{(x^2-4)^2}
    =-\frac{32x}{(x^2-4)^2}.
    $$

    Així, creix per $x<0$ i decreix per $x>0$, separant a $x=\pm2$. Té un màxim relatiu a $(0,-1)$.
- **e)** $D_f=\mathbb{R}\setminus\{-1,2\}$ i $x=-1$ i $x=2$ són asímptotes verticals. Per l'ordre dels infinits, el denominador es comporta com $x^2$ i és un infinit més gran que la constant del numerador:

    $$
    \lim_{x\to\pm\infty}\frac1{(x+1)(x-2)}
    =\lim_{x\to\pm\infty}\frac1{x^2}=0.
    $$

    Per tant, $y=0$ és una asímptota horitzontal. La funció és positiva a $(-\infty,-1)$ i $(2,+\infty)$, i negativa a $(-1,2)$; això indica si la gràfica queda per sobre o per sota de l'asímptota. Talla l'eix $Y$ a $\left(0,-\frac12\right)$ i no talla l'eix $X$. Derivem directament amb la regla del quocient, amb denominador $x^2-x-2$:

    $$
    f'(x)=\frac{0\cdot(x^2-x-2)-1\cdot(2x-1)}{(x^2-x-2)^2}
    =-\frac{2x-1}{(x^2-x-2)^2}.
    $$

    Així, creix fins a $x=\frac12$ i decreix després, separant les discontinuïtats. Té un màxim relatiu a $\left(\frac12,-\frac49\right)$.
- **f)** Dividim: $\displaystyle\frac{x^2}{x-1}=x+1+\frac1{x-1}$. Per comprovar l'asímptota obliqua fem el límit de la diferència. Per l'ordre dels infinits, el denominador $x-1$ és més gran que la constant $1$:

    $$
    \lim_{x\to\pm\infty}\left[f(x)-(x+1)\right]
    =\lim_{x\to\pm\infty}\frac1{x-1}=0.
    $$

    Així, $D_f=\mathbb{R}\setminus\{1\}$, $x=1$ és asímptota vertical i $y=x+1$ és obliqua. L'únic tall és $(0,0)$. Derivem la funció original directament amb la regla del quocient:

    $$
    f'(x)=\frac{2x(x-1)-x^2\cdot1}{(x-1)^2}
    =\frac{x(x-2)}{(x-1)^2}.
    $$

    Té un màxim relatiu a $(0,0)$ i un mínim relatiu a $(2,4)$.
- **g)** Dividim: $\displaystyle-\frac{x^2}{x+1}=-x+1-\frac1{x+1}$. Per comprovar l'asímptota obliqua fem el límit de la diferència. Per l'ordre dels infinits, el denominador $x+1$ és més gran que la constant $-1$:

    $$
    \lim_{x\to\pm\infty}\left[f(x)-(-x+1)\right]
    =\lim_{x\to\pm\infty}\frac{-1}{x+1}=0.
    $$

    Així, $D_f=\mathbb{R}\setminus\{-1\}$, $x=-1$ és asímptota vertical i $y=-x+1$ és obliqua. L'únic tall és $(0,0)$. Derivem la funció original directament amb la regla del quocient:

    $$
    f'(x)=\frac{(-2x)(x+1)-(-x^2)\cdot1}{(x+1)^2}
    =-\frac{x(x+2)}{(x+1)^2}.
    $$

    Té un mínim relatiu a $(-2,4)$ i un màxim relatiu a $(0,0)$.

**2.20.**

Primer comprovem la continuïtat en el punt d'unió; després derivem cada tram i comparem les derivades laterals.

- **a)** A $x=1$, el límit per l'esquerra és $4$ i el valor pel tram dret és $2$: hi ha un salt. Les derivades són $-2x+4$ i $2x-2$. La funció creix en cadascun dels dos trams i $(1,2)$ és un mínim relatiu del tram dret, però no és derivable al punt de salt.
- **b)** A $x=0$, els dos trams valen $2$: és contínua. Per no confondre la funció $g$ de l'enunciat amb la funció interior, l'anomenem $H$. En el primer tram, $H'(x)=3x^2-3=3(x-1)(x+1)$. En el segon tram hi ha una composició; prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x-1\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((x-1)^2+1\right)'=f'(g(x))g'(x)+0=2(x-1).$$

    Les derivades laterals a $x=0$ són $-3$ i $-2$, que no coincideixen; $(0,2)$ és un punt angulós. Hi ha un màxim relatiu a $(-1,4)$ i un mínim relatiu a $(1,1)$.
- **c)** A $x=1$, els dos trams valen $3$: és contínua. En el primer tram, $h'(x)=3^x\ln3$. Derivem el segon tram directament amb la regla del quocient:

    $$
    \left(\frac3x\right)'=\frac{0\cdot x-3\cdot1}{x^2}=-\frac3{x^2}.
    $$

    Les derivades laterals són $3\ln3$ i $-3$, de manera que hi ha un punt angulós. Creix abans d'$1$ i decreix després; per tant, $(1,3)$ és un màxim relatiu.
- **d)** A $x=0$, el límit per l'esquerra és $\frac14$ i el valor pel tram dret és $1$: hi ha un salt. Derivem el primer tram directament amb la regla del quocient:

    $$
    \left(\frac1{x^2+4}\right)'
    =\frac{0\cdot(x^2+4)-1\cdot2x}{(x^2+4)^2}
    =-\frac{2x}{(x^2+4)^2}.
    $$

    Aquesta derivada és positiva quan $x<0$, mentre que la derivada del segon tram és $-\frac14<0$. Així, $(0,1)$ és un màxim relatiu del tram dret, però la funció no és derivable al punt de salt.

**2.21.**

En una arrel d'índex parell, el radicand ha de ser no negatiu; si l'arrel apareix al denominador, ha de ser estrictament positiu.

- **a)** $x+4\geq0\Longrightarrow x\geq-4$. Domini: $[-4,+\infty)$.
- **b)** $(x-1)(x-3)>0$. El producte és positiu fora de les arrels. Domini: $(-\infty,1)\cup(3,+\infty)$.
- **c)** $(x-2)(x-3)\geq0$. El producte és no negatiu fora de les arrels. Domini: $(-\infty,2]\cup[3,+\infty)$.
- **d)** $2x-6>0\Longrightarrow x>3$. Domini: $(3,+\infty)$.

**2.22.**

- **a)** L'arrel cúbica està definida per a tot real: $D_f=\mathbb{R}$. Els zeros són $x=\pm3$ i $f(0)=\sqrt[3]{9}$. Per derivar, anomenem $h$ la funció de l'enunciat i prenem

    $$f(x)=\sqrt[3]{x}=x^{1/3}\Longrightarrow f'(x)=\frac13x^{-2/3},$$

    $$g(x)=9-x^2\Longrightarrow g'(x)=-2x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac13(9-x^2)^{-2/3}(-2x)
    =\frac{-2x}{3(9-x^2)^{2/3}}.
    $$

    La derivada no existeix a $x=\pm3$, punts que cal marcar a la gràfica.
- **b)** Cal $x(x-4)\geq0$, de manera que $D_f=(-\infty,0]\cup[4,+\infty)$. Els talls amb l'eix $X$ són $(0,0)$ i $(4,0)$. A l'esquerra la funció s'acosta a l'obliqua $y=-x+2$ i a la dreta, a $y=x-2$.
- **c)** Cal $x^2-4>0$: $D_f=(-\infty,-2)\cup(2,+\infty)$. Els zeros compleixen $\ln(x^2-4)=0$, és a dir, $x^2-4=1$; per tant, $x=\pm\sqrt5$. Les rectes $x=-2$ i $x=2$ són asímptotes verticals.
- **d)** Com que $x^2+2\geq2$, $\ln(x^2+2)\geq\ln2>0$. El domini és $\mathbb{R}$ i l'únic tall amb els eixos és $(0,0)$.
- **e)** Per no confondre la funció $q$ de l'enunciat amb la funció interior, l'anomenem $h$. Prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=-x^2\Longrightarrow g'(x)=-2x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=e^{-x^2}(-2x)=-2xe^{-x^2}.$$

    L'exponencial és sempre positiu, de manera que creix si $x<0$ i decreix si $x>0$. Té un màxim a $(0,1)$. Com que $-x^2\to-\infty$ als dos infinits,

    $$
    \lim_{x\to-\infty}e^{-x^2}=0,\qquad
    \lim_{x\to+\infty}e^{-x^2}=0.
    $$

    Per tant, $y=0$ és una asímptota horitzontal als dos infinits.
- **f)** Anomenem $H$ la funció $r$ de l'enunciat i apliquem la regla del producte. El factor exponencial és una composició; prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=-2x\Longrightarrow g'(x)=-2.$$

    Per la regla de la cadena,

    $$\left(e^{-2x}\right)'=f'(g(x))g'(x)=-2e^{-2x}.$$

    Apliquem ara la regla del producte:

    $$
    H'(x)=2xe^{-2x}+x^2(-2e^{-2x})
    =2xe^{-2x}(1-x).
    $$

    Decreix a $(-\infty,0)$, creix a $(0,1)$ i torna a decréixer a $(1,+\infty)$. Té un mínim a $(0,0)$ i un màxim a $(1,e^{-2})$. Quan $x\to-\infty$, tant $x^2$ com $e^{-2x}$ tendeixen a $+\infty$. Quan $x\to+\infty$, escrivim $x^2e^{-2x}=x^2/e^{2x}$ i, per l'ordre dels infinits, $e^{2x}$ és un infinit més gran que $x^2$:

    $$
    \lim_{x\to-\infty}x^2e^{-2x}=+\infty,\qquad
    \lim_{x\to+\infty}\frac{x^2}{e^{2x}}=0.
    $$
- **g)** Cal $x>0$ i $\ln x\ne0$: $D_f=(0,1)\cup(1,+\infty)$. La recta $x=1$ és una asímptota vertical. Derivem directament amb la regla del quocient:

    $$
    s'(x)=\frac{2x\ln x-x^2\frac1x}{(\ln x)^2}
    =\frac{x(2\ln x-1)}{(\ln x)^2},
    $$

    el punt crític és $x=\sqrt e$. Decreix fins a $\sqrt e$, separant a $x=1$, i creix després; té un mínim a $(\sqrt e,2e)$.
- **h)** $D_f=(-\infty,-3)\cup(3,+\infty)$ i $x=\pm3$ són asímptotes verticals. Per derivar, anomenem $h$ la funció $t$ de l'enunciat i prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=x^2-9\Longrightarrow g'(x)=2x.$$

    Per la regla de la cadena,

    $$h'(x)=f'(g(x))g'(x)=\frac1{x^2-9}\cdot2x=\frac{2x}{x^2-9}.$$

    Per tant, decreix a $(-\infty,-3)$ i creix a $(3,+\infty)$.
- **i)** Anomenem $H$ la funció $u$ de l'enunciat i apliquem la regla del producte. Per al factor $(x-1)^2$, prenem $f(x)=x^2$ i $g(x)=x-1$; per la regla de la cadena,

    $$\left((x-1)^2\right)'=f'(g(x))g'(x)=2(x-1)\cdot1=2(x-1).$$

    Ara apliquem la regla del producte:

    $$
    H'(x)=2(x-1)e^x+(x-1)^2e^x
    =e^x\bigl((x-1)^2+2(x-1)\bigr)
    =e^x(x-1)(x+1).
    $$

    Creix a $(-\infty,-1)$ i $(1,+\infty)$, i decreix a $(-1,1)$. Té un màxim a $\left(-1,\frac4e\right)$ i un mínim a $(1,0)$. Quan $x\to-\infty$, escrivim $(x-1)^2e^x=(x-1)^2/e^{-x}$; per l'ordre dels infinits, l'exponencial del denominador és més gran que el polinomi del numerador. Quan $x\to+\infty$, els dos factors són positius i tendeixen a $+\infty$:

    $$
    \lim_{x\to-\infty}(x-1)^2e^x
    =\lim_{x\to-\infty}\frac{(x-1)^2}{e^{-x}}=0,\qquad
    \lim_{x\to+\infty}(x-1)^2e^x=+\infty.
    $$

    Per tant, a l'esquerra, $y=0$ és asímptota horitzontal.

**2.23.**

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

**2.24.**

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

**2.25.**

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

- **e)** Per no confondre la funció $q$ de l'enunciat amb la funció interior, l'anomenem $h$. Prenem

    $$f(x)=\ln x\Longrightarrow f'(x)=\frac1x,\qquad
    g(x)=2x^2+7\Longrightarrow g'(x)=4x.$$

    Com que $h(x)=f(g(x))$, per la regla de la cadena,

    $$
    h'(x)=f'(g(x))g'(x)
    =\frac1{2x^2+7}\cdot4x
    =\frac{4x}{2x^2+7}.
    $$

- **f)** Aquesta funció té dues composicions. Per no confondre la funció $r$ de l'enunciat amb les funcions de la regla de la cadena, l'anomenem $h$. Prenem

    $$f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=(x^2-1)^3.$$

    Per derivar $g$, prenem $p(x)=x^3$ i $q(x)=x^2-1$:

    $$p'(x)=3x^2,\qquad q'(x)=2x,$$

    $$
    g'(x)=p'(q(x))q'(x)
    =3(x^2-1)^2\cdot2x
    =6x(x^2-1)^2.
    $$

    Finalment, com que $h(x)=f(g(x))$, tornem a aplicar la regla de la cadena:

    $$
    h'(x)=f'(g(x))g'(x)
    =e^{(x^2-1)^3}\cdot6x(x^2-1)^2
    =6x(x^2-1)^2e^{(x^2-1)^3}.
    $$

**2.26.**

- **Domini:** $x^2-9\ne0$, de manera que $D_f=\mathbb{R}\setminus\{-3,3\}$.
- **Talls:** $3x^2-6=0\Rightarrow x=\pm\sqrt2$, i $f(0)=\frac23$.
- **Asímptota horitzontal:** per l'ordre dels infinits, al numerador domina $3x^2$ i al denominador domina $x^2$:

    $$
    \lim_{x\to\pm\infty}\frac{3x^2-6}{x^2-9}
    =\lim_{x\to\pm\infty}\frac{3x^2}{x^2}
    =3.
    $$

    Per tant, $y=3$ és una asímptota horitzontal.

- **Asímptotes verticals i límits laterals:** el numerador és positiu prop de $\pm3$. Estudiant el signe de $(x-3)(x+3)$ obtenim

    $$
    \lim_{x\to-3^-}f(x)=+\infty,\quad
    \lim_{x\to-3^+}f(x)=-\infty,
    $$

    $$
    \lim_{x\to3^-}f(x)=-\infty,\quad
    \lim_{x\to3^+}f(x)=+\infty.
    $$

- **Monotonia:** apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{6x(x^2-9)-(3x^2-6)2x}{(x^2-9)^2}
    =\frac{-42x}{(x^2-9)^2}.
    $$

    El denominador és positiu; per tant, $f'>0$ si $x<0$ i $f'<0$ si $x>0$, separant pels punts exclosos. La funció creix a $(-\infty,-3)$, $(-3,0)$ i decreix a $(0,3)$, $(3,+\infty)$. Hi ha un màxim relatiu a $(0,\frac23)$.

**2.27.**

- **Domini:** $D_g=\mathbb{R}\setminus\{1\}$.
- **Asímptota vertical:** com que $e^x>0$,

    $$\lim_{x\to1^-}\frac{e^x}{x-1}=-\infty,\qquad
    \lim_{x\to1^+}\frac{e^x}{x-1}=+\infty.$$

- **Comportament a l'infinit:**

    Quan $x\to-\infty$, $e^x\to0$ i $x-1\to-\infty$; per tant, el quocient tendeix a $0$:

    $$
    \lim_{x\to-\infty}\frac{e^x}{x-1}=0,
    $$

    de manera que $y=0$ és asímptota horitzontal només per l'esquerra. Quan $x\to+\infty$, per l'ordre dels infinits, $e^x$ és un infinit més gran que $x-1$:

    $$
    \lim_{x\to+\infty}\frac{e^x}{x-1}=+\infty.
    $$

- **Talls:** $g(0)=-1$ i no hi ha talls amb l'eix $X$, perquè $e^x$ no s'anul·la.
- **Monotonia:** apliquem directament la regla del quocient:

    $$
    g'(x)=\frac{e^x(x-1)-e^x}{(x-1)^2}
    =\frac{e^x(x-2)}{(x-1)^2}.
    $$

    El signe depèn de $x-2$: decreix a $(-\infty,1)$ i $(1,2)$, i creix a $(2,+\infty)$. Per tant, té un mínim relatiu a

    $$\left(2,g(2)\right)=(2,e^2).$$

**2.28.**

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

**2.29.**

Siguin $x$ els costats perpendiculars al mur i $y$ el costat paral·lel. Només cal tancar tres costats:

$$2x+y=120\Longrightarrow y=120-2x.$$

L'àrea és

$$A(x)=xy=x(120-2x)=120x-2x^2,\qquad0<x<60.$$

$$A'(x)=120-4x=0\Longrightarrow x=30.$$

Com que $A''(x)=-4<0$, és un màxim. Aleshores $y=120-60=60$. Les dimensions òptimes són $30\,\text{m}$ per $60\,\text{m}$ i

$$A_{\max}=30\cdot60=1.800\,\text{m}^2.$$

**2.30.**

Siguin $x$ el costat horitzontal i $y$ el vertical. Com que $xy=8$, $y=\frac8x$, amb $x>0$. El cost total és

$$C(x)=2\cdot4x+2\cdot6y=8x+\frac{96}{x}.$$

$$C'(x)=8-\frac{96}{x^2}=0\Longrightarrow x^2=12\Longrightarrow x=2\sqrt3.$$

$$y=\frac8{2\sqrt3}=\frac{4\sqrt3}{3}.$$

Com que $C''(x)=\frac{192}{x^3}>0$, és un mínim. El cost és

$$C_{\min}=8(2\sqrt3)+\frac{96}{2\sqrt3}=32\sqrt3\,€\approx55{,}43\,€.$$

**2.31.**

La superfície d'un cilindre tancat és

$$2\pi r^2+2\pi rh=600\pi.$$

Dividim per $2\pi$ i aïllem $h$:

$$r^2+rh=300\Longrightarrow h=\frac{300}{r}-r,\qquad0<r<\sqrt{300}.$$

El volum és

$$V(r)=\pi r^2h=\pi(300r-r^3).$$

$$V'(r)=\pi(300-3r^2)=0\Longrightarrow r=10.$$

Com que $V''(10)=-60\pi<0$, és un màxim. L'altura és $h=30-10=20\,\text{cm}$ i

$$V_{\max}=\pi\cdot10^2\cdot20=2.000\pi\,\text{cm}^3.$$

**2.32.**

De $r^2+h^2=225$ obtenim

$$h=\sqrt{225-r^2},\qquad0<r<15.$$

La capacitat del con és

$$V(r)=\frac13\pi r^2\sqrt{225-r^2}.$$

Per derivar el factor $\sqrt{225-r^2}$, apliquem la regla de la cadena. Prenem

$$
f(x)=\sqrt{x}\Longrightarrow f'(x)=\frac1{2\sqrt{x}},\qquad
g(x)=225-x^2\Longrightarrow g'(x)=-2x.
$$

Per tant,

$$
\left(\sqrt{225-r^2}\right)'
=f'(g(r))g'(r)
=\frac1{2\sqrt{225-r^2}}(-2r)
=-\frac{r}{\sqrt{225-r^2}}.
$$

Ara apliquem la regla del producte a $r^2\sqrt{225-r^2}$:

$$
\begin{aligned}
V'(r)
&=\frac{\pi}{3}\left[2r\sqrt{225-r^2}
+r^2\left(-\frac{r}{\sqrt{225-r^2}}\right)\right]\\
&=\frac{\pi}{3}\,
\frac{2r(225-r^2)-r^3}{\sqrt{225-r^2}}\\
&=\frac{\pi r(150-r^2)}{\sqrt{225-r^2}}.
\end{aligned}
$$

En el domini, $V'(r)=0$ quan $r^2=150$, és a dir, $r=5\sqrt6$. El signe passa de positiu a negatiu, així que és un màxim. L'altura és

$$h=\sqrt{225-150}=5\sqrt3,$$

i la capacitat màxima,

$$V_{\max}=\frac13\pi(150)(5\sqrt3)=250\pi\sqrt3\,\text{cm}^3.$$

**2.33.**

Siguin $x=OP$. Aleshores el socorrista corre $BP=100-x$ metres i neda $\sqrt{x^2+60^2}$ metres. El temps és

$$T(x)=\frac{100-x}{6}+\frac{\sqrt{x^2+3.600}}{2},\qquad0\leq x\leq100.$$

El radical és una composició. Prenem

$$
f(x)=\sqrt{x}\Longrightarrow f'(x)=\frac1{2\sqrt{x}},\qquad
g(x)=x^2+3.600\Longrightarrow g'(x)=2x.
$$

Per la regla de la cadena,

$$
\left(\sqrt{x^2+3.600}\right)'
=f'(g(x))g'(x)
=\frac1{2\sqrt{x^2+3.600}}\cdot2x
=\frac{x}{\sqrt{x^2+3.600}}.
$$

Per tant,

$$T'(x)=-\frac16+\frac12\cdot\frac{x}{\sqrt{x^2+3.600}}
=-\frac16+\frac{x}{2\sqrt{x^2+3.600}}.$$

Igualem a zero:

$$
\frac{x}{2\sqrt{x^2+3.600}}=\frac16
\Longrightarrow3x=\sqrt{x^2+3.600}
\Longrightarrow x^2=450.
$$

Per tant, $x=15\sqrt2\approx21{,}21\,\text{m}$. La derivada passa de negativa a positiva, de manera que és un mínim. Ha de córrer $100-15\sqrt2\approx78{,}79\,\text{m}$ i

$$T_{\min}=\frac{50}{3}+20\sqrt2\approx44{,}95\,\text{s}.$$

Si corre fins a $O$, tarda $\frac{100}{6}+\frac{60}{2}=46{,}67\,\text{s}$. Si neda immediatament, tarda $\frac{\sqrt{100^2+60^2}}2\approx58{,}31\,\text{s}$. El punt interior és realment la millor opció.

**2.34.**

Siguin $x$ els augments de $2\,€$. El preu és $40+2x$ i es venen $500-20x$ entrades. Com que cada espectador costa $4\,€$, el benefici és

$$
B(x)=(40+2x-4)(500-20x)-2.000
=-40x^2+280x+16.000.
$$

$$B'(x)=-80x+280=0\Longrightarrow x=3{,}5.$$

Com que $B''(x)=-80<0$, el màxim continu correspon al preu $40+2(3{,}5)=47\,€$. Es venen $430$ entrades i

$$B_{\max}=43\cdot430-2.000=16.490\,€.$$

Si el preu només pot variar de $2$ en $2\,€$, comparem $x=3$ i $x=4$: tant $46\,€$ com $48\,€$ donen un benefici de $16.480\,€$.

**2.35.**

Els ingressos són

$$I(x)=xp(x)=50x-0{,}04x^2.$$

Per tant,

$$
B(x)=I(x)-C(x)=-0{,}07x^2+46x-180,\qquad0\leq x\leq400.
$$

$$B'(x)=-0{,}14x+46=0\Longrightarrow x=\frac{2.300}{7}\approx328{,}57.$$

Com que $B''(x)=-0{,}14<0$, és un màxim continu. Com que la producció ha de ser entera, comparem:

$$B(328)=7.377{,}12\,€,\qquad B(329)=7.377{,}13\,€.$$

Cal fabricar $329$ unitats.

**2.36.**

El cost mitjà és

$$
C_m(x)=\frac{C(x)}x=0{,}4x+12+\frac{3.600}{x},\qquad x>0.
$$

$$C_m'(x)=0{,}4-\frac{3.600}{x^2}=0\Longrightarrow x^2=9.000\Longrightarrow x=30\sqrt{10}\approx94{,}87.$$

Com que $C_m''(x)=\frac{7.200}{x^3}>0$, és un mínim. El valor continu és

$$C_m=12+24\sqrt{10}\approx87{,}895\,€.$$

Comparant $94$ i $95$ unitats, el cost mitjà és lleugerament menor per a $95$; per tant, cal fabricar $95$ unitats.

**2.37.**

Estudiem cada tram dins del seu interval.

Primer tram:

$$B_1'(x)=-2x+8,$$

que és positiu a $[0,4)$ i s'anul·la a $x=4$. Així, $B$ creix de $B(0)=20$ fins a $B(4)=36$.

Segon tram:

$$B_2'(x)=-4x+20=0\Longrightarrow x=5.$$

Creix a $(4,5)$ i decreix a $(5,8]$. Cal comparar els punts importants:

$$B(0)=20,\qquad B(4)=36,\qquad B(5)=38,\qquad B(8)=20.$$

Per tant, el benefici màxim és de $38$ milers d'euros i s'obté amb una inversió de $5$ milers d'euros. La gràfica uneix el primer tram creixent amb el segon, que arriba al màxim $(5,38)$ i baixa fins a $(8,20)$.

**2.38.**

Siguin $x$ l'amplada de la maleta, $y$ la llargada i $h$ l'alçada, totes expressades en decímetres. Com que l'alçada és el triple de l'amplada,

$$h=3x.$$

La suma de les tres dimensions és de $15\,\text{dm}$:

$$x+y+h=15.$$

Substituïm $h=3x$ i aïllem la llargada:

$$x+y+3x=15\Longrightarrow y=15-4x.$$

Com que totes les dimensions han de ser positives,

$$0<x<\frac{15}{4}.$$

El volum d'un prisma rectangular és el producte de les tres dimensions. Per tant,

$$
V(x)=x\cdot y\cdot h
=x(15-4x)(3x)
=45x^2-12x^3.
$$

Derivem i factoritzem:

$$V'(x)=90x-36x^2=18x(5-2x).$$

En el domini, l'únic punt crític és

$$5-2x=0\Longrightarrow x=\frac52=2{,}5.$$

La derivada és positiva a $\left(0,\frac52\right)$ i negativa a $\left(\frac52,\frac{15}{4}\right)$. Per tant, el volum creix abans de $x=2{,}5$ i decreix després, de manera que aquest valor proporciona el màxim.

Les altres dimensions són

$$
y=15-4(2{,}5)=5\,\text{dm},
\qquad
h=3(2{,}5)=7{,}5\,\text{dm}.
$$

Finalment,

$$
V_{\max}=2{,}5\cdot5\cdot7{,}5
=93{,}75\,\text{dm}^3.
$$

La maleta de volum màxim té una amplada de $2{,}5\,\text{dm}$, una llargada de $5\,\text{dm}$ i una alçada de $7{,}5\,\text{dm}$.

**PAU.C.1.**

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

    $$f(3)=1.240,\qquad f(5)=1.200.$$

    Hi ha un màxim relatiu a $(3,1.240)$ i un mínim relatiu a $(5,1.200)$.

- **c) Esbós.** La gràfica passa per $(0,700)$, puja fins a $(3,1.240)$, baixa fins a $(5,1.200)$ i torna a pujar fins a $(10,3.200)$.
- **d) Interpretació.** La pèrdua de seguidors comença a la setmana $3$ i s'acaba a la setmana $5$, quan el nombre de seguidors torna a créixer.
- **e) Màxim absolut.** Comparem els extrems relatius i els extrems del domini:

    $$f(0)=700,\quad f(3)=1.240,\quad f(5)=1.200,\quad f(10)=3.200.$$

    El màxim absolut és de $3.200$ seguidors i s'assoleix a la setmana $10$.

**PAU.C.2.**

- **a)** En l'instant inicial,

    $$f(0)=\frac{15\cdot0}{9+0^2}+k=k.$$

    Com que $50$ microorganismes són $5$ desenes, $k=5$.

- **b)** Amb $k=5$, apliquem directament la regla del quocient al terme racional:

    $$
    f'(x)=\frac{15(9+x^2)-15x(2x)}{(9+x^2)^2}
    =\frac{15(9-x^2)}{(9+x^2)^2}.
    $$

    El denominador és positiu. En el domini $x\geq0$, $f'(x)=0$ quan $x=3$; $f'>0$ a $(0,3)$ i $f'<0$ a $(3,+\infty)$. Per tant, $x=3$ és un màxim:

    $$f(3)=\frac{45}{18}+5=7{,}5\text{ desenes}=75\text{ microorganismes}.$$

- **c)** Per l'ordre dels infinits, $x^2$ és un infinit més gran que $15x$. Conservem $15x$ al numerador i $x^2$ al denominador:

    $$
    \lim_{x\to+\infty}\left(\frac{15x}{9+x^2}+5\right)
    =\lim_{x\to+\infty}\left(\frac{15x}{x^2}+5\right)
    =\lim_{x\to+\infty}\left(\frac{15}{x}+5\right)
    =0+5=5.
    $$

    A llarg termini, la mostra tendeix a estabilitzar-se en $50$ microorganismes.

- **d)** L'esbós parteix de $(0,5)$, creix fins al màxim $(3,7{,}5)$ i després decreix acostant-se a l'asímptota horitzontal $y=5$.

**PAU.C.3.**

- **a)**

    $$f(1)=\frac{240}{1-2+4}=80\text{ desenes}=800\text{ visitants}.$$

- **b)** Primer calculem $f(4)$:

    $$f(4)=\frac{960}{16-8+4}=80.$$

    La taxa de variació mitjana és

    $$
    \operatorname{TVM}_{[1,4]}=\frac{f(4)-f(1)}{4-1}=\frac{80-80}{3}=0.
    $$

    Els valors inicial i final coincideixen, però això no implica que la funció hagi estat constant entremig.

- **c)** Apliquem directament la regla del quocient:

    $$
    f'(x)=\frac{240(x^2-2x+4)-240x(2x-2)}{(x^2-2x+4)^2}
    =\frac{240(4-x^2)}{(x^2-2x+4)^2}.
    $$

    En el domini $x\geq1$, el denominador és positiu. Així, $f'>0$ a $[1,2)$ i $f'<0$ a $(2,+\infty)$.

- **d)** La funció passa de creixent a decreixent a $x=2$; per tant, hi ha un màxim:

    $$f(2)=\frac{480}{4-4+4}=120\text{ desenes}=1.200\text{ visitants}.$$

**PAU.C.4.**

- **a)**

    $$C(0)=3-\frac15=2{,}8,\qquad C(1)=3-\frac12=2{,}5.$$

    Són $2.800$ i $2.500$ clients, respectivament.

- **b)** Escrivim

    $$q(t)=\frac1{t^2-4t+5}.$$

    Apliquem directament la regla del quocient:

    $$
    q'(t)=\frac{0\cdot(t^2-4t+5)-1\cdot(2t-4)}{(t^2-4t+5)^2}
    =-\frac{2t-4}{(t^2-4t+5)^2}.
    $$

    Com que $C(t)=3-q(t)$,

    $$
    C'(t)=0-q'(t)=\frac{2t-4}{(t^2-4t+5)^2}.
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

- **e)** Per l'ordre dels infinits, $t^2$ és un infinit més gran que la constant $1$ del numerador. Per tant, la fracció tendeix a $0$:

    $$
    \lim_{t\to+\infty}C(t)
    =\lim_{t\to+\infty}\left(3-\frac1{t^2-4t+5}\right)
    =\lim_{t\to+\infty}\left(3-\frac1{t^2}\right)
    =3-0=3.
    $$

    A llarg termini, el model tendeix a $3.000$ clients.

**PAU.C.5.**

- **a)**

    $$D(0)=20+10(0+1)e^0=30\text{ centenars}=3.000\text{ descàrregues}.$$

- **b)** Per derivar el factor exponencial, apliquem la regla de la cadena. Prenem

    $$
    f(x)=e^x\Longrightarrow f'(x)=e^x,\qquad
    g(x)=-\frac x2\Longrightarrow g'(x)=-\frac12.
    $$

    Per tant,

    $$
    \left(e^{-t/2}\right)'
    =f'(g(t))g'(t)
    =e^{-t/2}\left(-\frac12\right)
    =-\frac12e^{-t/2}.
    $$

    Ara apliquem la regla del producte a $(t+1)e^{-t/2}$:

    $$
    D'(t)=10\left[e^{-t/2}+(t+1)\left(-\frac12\right)e^{-t/2}\right]
    =5e^{-t/2}(1-t).
    $$

    Com que $e^{-t/2}>0$, el signe depèn de $1-t$: creix a $[0,1)$ i decreix a $(1,+\infty)$.

- **c)** A $t=1$ passa de creixent a decreixent; per tant,

    $$D(1)=20+20e^{-1/2}\approx32{,}13\text{ centenars}.$$

    El màxim és d'unes $3.213$ descàrregues diàries.

- **d)** Escrivim el producte com un quocient:

    $$
    (t+1)e^{-t/2}=\frac{t+1}{e^{t/2}}.
    $$

    Per l'ordre dels infinits, $e^{t/2}$ és un infinit més gran que $t+1$. Per tant, el quocient tendeix a $0$:

    $$
    \lim_{t\to+\infty}D(t)
    =\lim_{t\to+\infty}\left(20+10\frac{t+1}{e^{t/2}}\right)
    =20+10\cdot0=20.
    $$

    El model preveu que es mantindran $2.000$ descàrregues diàries.

- **e)** La gràfica parteix de $(0,30)$, puja fins a $(1,20+20e^{-1/2})$ i després baixa acostant-se a l'asímptota horitzontal $y=20$.

**PAU.C.6.**

- **a)** Cal $x>0$ perquè $\ln x$ estigui definit i perquè la producció sigui positiva. Per $100$ unitats, $x=1$:

    $$C(1)=20+1-4\ln1=21\,€.$$

- **b)**

    $$C'(x)=1-\frac4x=\frac{x-4}{x}.$$

    En el domini $x>0$, $C'<0$ a $(0,4)$ i $C'>0$ a $(4,+\infty)$. Per tant, el cost decreix fins a $x=4$ i després creix.

- **c)** $x=4$ és un mínim. Això correspon a $400$ unitats i

    $$C(4)=24-4\ln4\approx18{,}45\,€\text{ per unitat}.$$

- **d)** El mínim possible és aproximadament $18{,}45\,€$, que és superior a $18\,€$. Per tant, l'objectiu no és possible segons el model.
- **e)**

    Quan $x\to0^+$, $\ln x\to-\infty$ i, per tant, $-4\ln x\to+\infty$:

    $$
    \lim_{x\to0^+}\left(20+x-4\ln x\right)=+\infty.
    $$

    Quan $x\to+\infty$, per l'ordre dels infinits, $x$ és un infinit més gran que $\ln x$. Eliminem el terme logarítmic:

    $$
    \lim_{x\to+\infty}\left(20+x-4\ln x\right)
    =\lim_{x\to+\infty}x=+\infty.
    $$

    La gràfica baixa des de $+\infty$ fins al mínim de $x=4$ i després torna a pujar.

**PAU.C.7.**

- **a)** Si el descompte és $x$, el preu és $80-x$ i el nombre de reserves és $100+2x$. Per tant,

    $$
    I(x)=(80-x)(100+2x)=-2x^2+60x+8.000,\qquad0\leq x\leq80.
    $$

- **b)**

    $$I'(x)=-4x+60.$$

    Igualem a zero:

    $$-4x+60=0\Longrightarrow x=15.$$

    Com que $I''(x)=-4<0$, és un màxim. Així,

    $$\text{preu}=80-15=65\,€,$$

    $$\text{reserves}=100+2\cdot15=130,$$

    $$I(15)=65\cdot130=8.450\,€.$$

**PAU.C.8.**

- **a)** Si es contracten $x$ venedors, n'hi haurà $10+x$ i cadascun gestionarà $5.400-180x$ euros:

    $$
    I(x)=(10+x)(5.400-180x)=-180x^2+3.600x+54.000.
    $$

    En el context, $x\in\{0,1,\ldots,30\}$.

- **b)** Considerem primer la variable contínua:

    $$I'(x)=-360x+3.600=0\Longrightarrow x=10.$$

    Com que $I''(x)=-360<0$ i $10$ és enter, cal contractar $10$ venedors. En total n'hi haurà $20$ i

    $$I(10)=20(5.400-1.800)=72.000\,€.$$

**PAU.C.9.**

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

**PAU.C.10.**

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

    $$E(5)=\frac{100}{425}=\frac4{17}\approx0{,}235,\qquad E(10)=\frac{300}{300}=1.$$

**PAU.C.11.**

- **a)** La tarifa fixa és $20\,€$ i s'afegeixen $0{,}4\,€$ per quilòmetre:

    $$f(x)=20+0{,}4x.$$

- **b)**

    $$f(10)=24,\qquad g(10)=12,$$

    $$f(80)=52,\qquad g(80)=82.$$

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

**PAU.C.12.**

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

    $$P(2)=30,\qquad \lim_{x\to2^+}(12x+6)=30,$$

    de manera que és contínua. En $x=11$,

    $$\lim_{x\to11^-}P(x)=12\cdot11+6=138,\qquad P(11)=15\cdot11-22=143.$$

    Hi ha una discontinuïtat de salt finit de $5\,€$.

- **d)** La gràfica és constant fins a $2\,\text{kg}$, després és una recta de pendent $12$ i, a partir del salt de $x=11$, una recta de pendent $15$.
- **e)** Comprovem cada tram. El primer no pot donar $162$. En el segon,

    $$12x+6=162\Longrightarrow x=13,$$

    però $13\notin(2,11)$ i es descarta. En el tercer,

    $$15x-22=162\Longrightarrow x=\frac{184}{15}\approx12{,}27,$$

    que sí pertany a $[11,25]$.

**PAU.C.13.**

- **a)**

    $$C(0)=10,\qquad C(10)=\frac{100}{10}+10=20,\qquad C(20)=28-\frac{36}{2}=10.$$

    Com que la unitat són centenars d'euros, els costos són $1.000\,€$, $2.000\,€$ i $1.000\,€$.

- **b)**

    $$C(10)=20,\qquad \lim_{t\to10^+}\left(28-\frac{(t-14)^2}{2}\right)=20.$$

    Els dos trams coincideixen; per tant, $C$ és contínua a $t=10$.

- **c)** Derivem per trams. En el segon tram hi ha la composició $(t-14)^2$. Prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x-14\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((t-14)^2\right)'=f'(g(t))g'(t)=2(t-14).$$

    Per tant,

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

**PAU.C.14.**

- **a)** En el punt d'unió,

    $$P(2)=5(2+1)^2-5=40,$$

    $$\lim_{t\to2^+}(-4t+48)=40.$$

    Els dos valors coincideixen; per tant, la funció és contínua a $t=2$.

- **b)** Derivem cada tram. En el primer tram hi ha la composició $(t+1)^2$. Prenem

    $$f(x)=x^2\Longrightarrow f'(x)=2x,\qquad
    g(x)=x+1\Longrightarrow g'(x)=1.$$

    Per la regla de la cadena,

    $$\left((t+1)^2\right)'=f'(g(t))g'(t)=2(t+1).$$

    Per tant,

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

    $$P(5)=28,\qquad P(10)=8,$$

    $$\operatorname{TVM}_{[5,10]}=\frac{8-28}{10-5}=-4\,€\text{ per any}.$$

- **e)** La gràfica va de $(0,0)$ a $(2,40)$ seguint el tram parabòlic i continua amb la recta decreixent que arriba a $(10,8)$. El punt d'unió $(2,40)$ és també el màxim absolut.
