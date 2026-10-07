# Derivabilitat

!!! abstract "Definició: derivabilitat"
    La **derivabilitat** ens indica si una funció té una taxa de variació instantània ben definida en un punt. Gràficament, significa que podem dibuixar-hi una única recta tangent amb pendent finit.

Per estudiar si una funció és derivable en $x=a$, comprovarem dues condicions:

1. La funció és **contínua** en $a$.
2. Les dues **derivades laterals** en $a$ existeixen, són finites i coincideixen.

## 1. Continuïtat en un punt

!!! abstract "Definició: continuïtat en un punt"
    Una funció $f$ és **contínua** en $x=a$ quan el límit de la funció en aquest punt existeix i coincideix amb el valor $f(a)$.

Per comprovar-ho, s'han de complir les tres condicions següents:

1. Els límits laterals de la funció són finits i coincideixen:

    $$
    \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L,\qquad L\in\mathbb{R}.
    $$

2. El valor de la funció existeix: $f(a)$ està definida.

3. El valor del límit coincideix amb el valor de la funció en l'abscissa estudiada:

    $$
    \lim_{x\to a}f(x)=f(a).
    $$

!!! warning "Condició necessària"
    Si una funció és derivable en $a$, aleshores és contínua en $a$. En canvi, que sigui contínua no garanteix que sigui derivable: la gràfica pot tenir, per exemple, un punt angulós.

## 2. Derivades laterals

!!! abstract "Definició: derivades laterals"
    La **derivada per l'esquerra** de $f$ en $a$ es calcula fent que l'increment $h$ s'apropi a zero per valors negatius:

    $$
    \boxed{f'(a^{-})=\lim_{h\to0^-}\frac{f(a+h)-f(a)}{h}}.
    $$

    La **derivada per la dreta** de $f$ en $a$ es calcula fent que $h$ s'apropi a zero per valors positius:

    $$
    \boxed{f'(a^{+})=\lim_{h\to0^+}\frac{f(a+h)-f(a)}{h}}.
    $$

!!! note "Recorda"
    $h\to0^-$ significa que $h$ pren valors negatius cada vegada més pròxims a zero. En canvi, $h\to0^+$ significa que pren valors positius cada vegada més pròxims a zero.

Si la funció és contínua en $a$ i les dues derivades laterals existeixen, són finites i coincideixen, aleshores $f$ és derivable en $a$:

$$
\boxed{f'(a^{-})=f'(a^{+})=f'(a)}.
$$

<figure markdown="span">
  ![Comparació gràfica entre un punt suau, on les derivades laterals coincideixen, i un punt angulós, on són diferents](../../img/calcul/fig_2_1_derivades_laterals.svg?v=1){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_1_derivades_laterals.tex">Figura 2.1.</a></strong> Derivades laterals en un punt suau i en un punt angulós.</figcaption>
</figure>

En el primer gràfic, la pendent s'apropa al mateix valor des dels dos costats: la funció és derivable en $a$. En el segon, les pendents laterals són diferents: la funció és contínua, però no és derivable en $a$.

## 3. Com es reconeix gràficament?

Abans de calcular, la forma de la gràfica ens permet anticipar què passarà:

| Aspecte de la gràfica en $x=a$ | Què passa? | És derivable? |
|---|---|:---:|
| Punt suau | Les dues pendents laterals són finites i iguals. | Sí |
| Punt angulós | Les pendents laterals són finites, però diferents. | No |
| Cúspide | Les pendents laterals es fan infinites amb signes diferents. | No |
| Tangent vertical | La pendent no és finita. | No |
| Discontinuïtat | No es compleixen les tres condicions de continuïtat. | No |

<figure markdown="span">
  ![Tres situacions en què una funció no és derivable: discontinuïtat, cúspide i tangent vertical](../../img/calcul/fig_2_2_casos_no_derivables.svg?v=1){ width="960" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_2_casos_no_derivables.tex">Figura 2.2.</a></strong> Casos en què una funció no és derivable.</figcaption>
</figure>

!!! tip "Ordre de comprovació"
    Primer comprovem la **continuïtat**. Si la funció no és contínua en $a$, ja podem afirmar que no és derivable en aquest punt. Només si és contínua passem a comparar $f'(a^-)$ i $f'(a^+)$.

## 4. Estudi analític de la derivabilitat

En una funció definida a trossos, estudiem primer si els dos trossos enllacen i després si ho fan amb la mateixa pendent.

!!! example "Exemple 1. Funció discontínua i no derivable"
    Estudia la derivabilitat de la funció en $x=1$:

    $$
    f(x)=\frac{x-1}{(x-1)(x+2)}.
    $$

    **Domini i simplificació**

    El denominador s'anul·la en $x=-2$ i en $x=1$. Per tant,

    $$
    D_f=\mathbb{R}\setminus\{-2,1\}.
    $$

    Per als valors del domini podem simplificar el factor $x-1$:

    $$
    f(x)=\frac{\cancel{x-1}}{\cancel{(x-1)}(x+2)}
    =\frac{1}{x+2},
    \qquad x\neq-2,1.
    $$

    **Continuïtat en $x=1$**

    $$
    \lim_{x\to1^-}f(x)=\frac{1}{1+2}=\frac13,
    \qquad
    \lim_{x\to1^+}f(x)=\frac{1}{1+2}=\frac13.
    $$

    Els límits laterals són finits i coincideixen, però $f(1)$ **no existeix**. La funció té una **discontinuïtat evitable** en $x=1$ i, per tant, no és contínua en aquest punt.

    **Derivabilitat en $x=1$**

    Tota funció derivable en un punt ha de ser contínua en aquell punt. Com que $f$ no és contínua en $x=1$, podem concloure directament que $f$ **no és derivable** en $x=1$.

    <figure markdown="span">
      ![Gràfica d'una funció racional amb una discontinuïtat evitable en x igual a u i una asímptota vertical en x igual a menys dos](../../img/calcul/fig_2_3_exemple_discontinuitat_evitable.svg?v=1){ width="740" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_3_exemple_discontinuitat_evitable.tex">Figura 2.3.</a></strong> Discontinuïtat evitable en $x=1$ i asímptota vertical en $x=-2$.</figcaption>
    </figure>

!!! example "Exemple 2. Funció contínua però no derivable"
    Estudia la derivabilitat de la funció en $x=1$:

    $$
    f(x)=
    \begin{cases}
    x^2+1, & x<1,\\
    -x+3, & x\geq 1.
    \end{cases}
    $$

    **Continuïtat en $x=1$**

    $$
    \lim_{x\to1^-}f(x)=1^2+1=2,
    \qquad
    \lim_{x\to1^+}f(x)=-1+3=2,
    \qquad
    f(1)=2.
    $$

    Els límits laterals coincideixen amb $f(1)$; per tant, $f$ és contínua en $x=1$.

    **Derivabilitat en $x=1$**

    $$
    f'(x)=
    \begin{cases}
    2x, & x<1,\\
    -1, & x>1,
    \end{cases}
    \qquad
    f'(1^-)=2,\qquad f'(1^+)=-1.
    $$

    Les derivades laterals no coincideixen. Per tant, $f$ **no és derivable** en $x=1$ i la gràfica té un punt angulós.

    <figure markdown="span">
      ![Gràfica d'una funció a trossos contínua amb un punt angulós en x igual a u](../../img/calcul/fig_2_4_exemple_continua_no_derivable.svg?v=2){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_4_exemple_continua_no_derivable.tex">Figura 2.4.</a></strong> Funció contínua però no derivable en $x=1$.</figcaption>
    </figure>

!!! example "Exemple 3. Funció contínua i derivable"
    Estudia la derivabilitat de la funció en $x=-1$:

    $$
    f(x)=
    \begin{cases}
    x^3+3x^2+2, & x\leq -1,\\
    -3x+1, & x>-1.
    \end{cases}
    $$

    **Continuïtat en $x=-1$**

    $$
    \lim_{x\to-1^-}f(x)=(-1)^3+3(-1)^2+2=4,
    \qquad
    \lim_{x\to-1^+}f(x)=-3(-1)+1=4,
    \qquad
    f(-1)=4.
    $$

    La funció és contínua en $x=-1$.

    **Derivabilitat en $x=-1$**

    $$
    f'(x)=
    \begin{cases}
    3x^2+6x, & x<-1,\\
    -3, & x>-1,
    \end{cases}
    \qquad
    f'(-1^-)=3-6=-3,\qquad f'(-1^+)=-3.
    $$

    Les derivades laterals coincideixen. Per tant, $f$ **és derivable** en $x=-1$ i $f'(-1)=-3$.

    <figure markdown="span">
      ![Gràfica d'una funció a trossos amb una unió suau en x igual a menys u](../../img/calcul/fig_2_5_exemple_continua_derivable.svg?v=1){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_5_exemple_continua_derivable.tex">Figura 2.5.</a></strong> Funció contínua i derivable en $x=-1$.</figcaption>
    </figure>

!!! example "Exemple 4. Càlcul de paràmetres"
    Calcula $m$ i $n$ perquè la funció sigui derivable en $x=2$:

    $$
    f(x)=
    \begin{cases}
    mx^2+1, & x\leq 2,\\
    nx-3, & x>2.
    \end{cases}
    $$

    Perquè sigui contínua, els dos trossos han d'enllaçar:

    $$
    \lim_{x\to2^-}f(x)=\lim_{x\to2^+}f(x)
    \quad\Longrightarrow\quad
    4m+1=2n-3
    \quad\Longrightarrow\quad
    2m-n=-2.
    $$

    Perquè sigui derivable, les derivades laterals han de coincidir:

    $$
    f'(2^-)=4m,\qquad f'(2^+)=n
    \quad\Longrightarrow\quad
    4m-n=0.
    $$

    Les dues condicions formen el sistema

    $$
    \begin{cases}
    2m-n=-2,\\
    4m-n=0.
    \end{cases}
    $$

    Restem la primera equació de la segona:

    $$
    (4m-n)-(2m-n)=0-(-2)
    \quad\Longrightarrow\quad
    2m=2
    \quad\Longrightarrow\quad
    m=1.
    $$

    Substituïm $m=1$ en $4m-n=0$:

    $$
    4-n=0
    \quad\Longrightarrow\quad
    n=4.
    $$

    Per tant, la funció és derivable en $x=2$ quan

    $$
    \boxed{m=1,\qquad n=4},
    $$

    i en aquest cas $f'(2)=4$.

    <figure markdown="span">
      ![Gràfica de la funció a trossos obtinguda amb m igual a u i n igual a quatre](../../img/calcul/fig_2_6_exemple_parametres.svg?v=1){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_6_exemple_parametres.tex">Figura 2.6.</a></strong> Funció derivable obtinguda amb $m=1$ i $n=4$.</figcaption>
    </figure>

## 5. Del valor absolut a una funció a trossos

Per estudiar la derivabilitat d'una funció amb valor absolut, primer l'hem d'escriure com una funció a trossos. Si l'expressió interior és $g(x)$, aleshores

$$
|g(x)|=
\begin{cases}
g(x), & g(x)\geq0,\\[2pt]
-g(x), & g(x)<0.
\end{cases}
$$

El procediment és el següent:

1. Resolem $g(x)=0$ per trobar els punts on l'expressió interior pot canviar de signe.
2. Estudiem el signe de $g(x)$ en cadascun dels intervals determinats per aquests punts.
3. Substituïm $|g(x)|$ per $g(x)$ en els intervals on $g(x)\geq0$ i per $-g(x)$ on $g(x)<0$.
4. Derivem cada tros i comparem les derivades laterals en els punts d'unió.

!!! note "Recorda"
    Una funció de la forma $f(x)=|g(x)|$ és contínua en tots els punts on $g$ és contínua. Els zeros de $g$ són els punts que cal estudiar per decidir si $f$ és derivable. Un zero no implica sempre un punt angulós: cal comprovar les derivades laterals.

!!! example "Exemple 1. Valor absolut d'una funció lineal"
    Escriu com una funció a trossos i estudia la derivabilitat de

    $$
    f(x)=|x-2|.
    $$

    L'expressió interior és $g(x)=x-2$. Primer en trobem el zero:

    $$
    x-2=0\quad\Longrightarrow\quad x=2.
    $$

    Comprovem el signe de $g(x)$ a cada costat de $2$:

    | Valor de $x$ | $x<2$ | $x=2$ | $x>2$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $x-2$ | $-$ | $0$ | $+$ |
    | Expressió de $f(x)$ | $-(g(x))$ | $0$ | $+(g(x))$ |

    Per tant,

    $$
    f(x)=
    \begin{cases}
    2-x, & x<2,\\[2pt]
    x-2, & x\geq2.
    \end{cases}
    $$

    Derivem cada tros:

    $$
    f'(x)=
    \begin{cases}
    -1, & x<2,\\[2pt]
    1, & x>2.
    \end{cases}
    $$

    En $x=2$, les derivades laterals són $f'(2^-)=-1$ i $f'(2^+)=1$. Així, $f$ és contínua en tot $\mathbb{R}$, però no és derivable en $x=2$.

    <figure markdown="span">
      ![Gràfica de la funció valor absolut de x menys dos, amb un punt angulós en x igual a dos](../../img/calcul/fig_2_7_valor_absolut_lineal.svg?v=1){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_7_valor_absolut_lineal.tex">Figura 2.7.</a></strong> Gràfica de $f(x)=|x-2|$.</figcaption>
    </figure>
