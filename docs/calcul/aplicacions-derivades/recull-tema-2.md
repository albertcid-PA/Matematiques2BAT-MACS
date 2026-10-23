<!-- Fitxer generat automàticament per scripts/genera_recull_tema_2.py. -->

<div class="pdf-topic-cover" markdown="1">

# 2. Aplicacions de les derivades {.pdf-topic-collection}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Derivabilitat](#derivabilitat)
2. [Creixement, decreixement i extrems](#creixement-decreixement-i-extrems)
3. [Representació de funcions](#representacio-de-funcions)
4. [Optimització de funcions](#optimitzacio-de-funcions)

</div>

</div>

## Derivabilitat

!!! abstract "Definició: derivabilitat"
    La **derivabilitat** ens indica si una funció té una taxa de variació instantània ben definida en un punt. Gràficament, significa que podem dibuixar-hi una única recta tangent amb pendent finit.

Per estudiar si una funció és derivable en $x=a$, comprovarem dues condicions:

1. La funció és **contínua** en $a$.
2. Les dues **derivades laterals** en $a$ existeixen, són finites i coincideixen.

### 1. Continuïtat en un punt

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

### 2. Derivades laterals

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
  ![Comparació gràfica entre un punt suau, on les derivades laterals coincideixen, i un punt angulós, on són diferents](../../img/calcul/fig_2_1_derivades_laterals.svg?v=2){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_1_derivades_laterals.tex">Figura 2.1.</a></strong> Derivades laterals en un punt suau i en un punt angulós.</figcaption>
</figure>

En el primer gràfic, la pendent s'apropa al mateix valor des dels dos costats: la funció és derivable en $a$. En el segon, les pendents laterals són diferents: la funció és contínua, però no és derivable en $a$.

### 3. Com es reconeix gràficament?

Abans de calcular, la forma de la gràfica ens permet anticipar què passarà:

| Aspecte de la gràfica en $x=a$ | Què passa? | És derivable? |
|---|---|:---:|
| Punt suau | Les dues pendents laterals són finites i iguals. | Sí |
| Punt angulós | Les pendents laterals són finites, però diferents. | No |
| Cúspide | Les pendents laterals es fan infinites amb signes diferents. | No |
| Tangent vertical | La pendent no és finita. | No |
| Discontinuïtat | No es compleixen les tres condicions de continuïtat. | No |

<figure markdown="span">
  ![Tres situacions en què una funció no és derivable: discontinuïtat, cúspide i tangent vertical](../../img/calcul/fig_2_2_casos_no_derivables.svg?v=3){ width="960" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_2_casos_no_derivables.tex">Figura 2.2.</a></strong> Casos en què una funció no és derivable.</figcaption>
</figure>

!!! tip "Ordre de comprovació"
    Primer comprovem la **continuïtat**. Si la funció no és contínua en $a$, ja podem afirmar que no és derivable en aquest punt. Només si és contínua passem a comparar $f'(a^-)$ i $f'(a^+)$.

### 4. Estudi analític de la derivabilitat

En una funció definida a trossos, estudiem primer si els dos trossos enllacen i després si ho fan amb la mateixa pendent.

!!! tip "La derivada conserva els trams"
    Derivem **una expressió per cada tram** i mantenim el mateix nombre de trams que tenia la funció original. No afegim un cas nou per a cada punt d'unió. Després, estudiem cada punt $x=a$ per separat i comprovem si

    $$
    f'(a^-)=f'(a^+).
    $$

    Si la funció és contínua en $a$ i aquestes dues derivades laterals són finites i coincideixen, la derivada existeix en $a$; si no, el punt queda exclòs del domini de $f'$.

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
      ![Gràfica d'una funció racional amb una discontinuïtat evitable en x igual a u i una asímptota vertical en x igual a menys dos](../../img/calcul/fig_2_3_exemple_discontinuitat_evitable.svg?v=5){ width="740" }
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
      ![Gràfica d'una funció a trossos contínua amb un punt angulós en x igual a u](../../img/calcul/fig_2_4_exemple_continua_no_derivable.svg?v=5){ width="720" }
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
      ![Gràfica d'una funció a trossos amb una unió suau en x igual a menys u](../../img/calcul/fig_2_5_exemple_continua_derivable.svg?v=4){ width="720" }
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
      ![Gràfica de la funció a trossos obtinguda amb m igual a u i n igual a quatre](../../img/calcul/fig_2_6_exemple_parametres.svg?v=4){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_6_exemple_parametres.tex">Figura 2.6.</a></strong> Funció derivable obtinguda amb $m=1$ i $n=4$.</figcaption>
    </figure>

### 5. Del valor absolut a una funció a trossos

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
      ![Gràfica de la funció valor absolut de x menys dos, amb un punt angulós en x igual a dos](../../img/calcul/fig_2_7_valor_absolut_lineal.svg?v=3){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_7_valor_absolut_lineal.tex">Figura 2.7.</a></strong> Gràfica de $f(x)=|x-2|$.</figcaption>
    </figure>

<div class="pdf-topic-section-break"></div>

## Creixement, decreixement i extrems

La derivada ens permet descriure com varia una funció. El signe de $f'(x)$ indica si la gràfica puja o baixa quan avancem d'esquerra a dreta.

### 1. Relació entre el signe de la derivada i el creixement

!!! abstract "Definició: creixement i decreixement"
    En un interval on la funció és derivable:

    - si $f'(x)>0$, la funció és **creixent**;
    - si $f'(x)<0$, la funció és **decreixent**;
    - si $f'(x)=0$ en tot l'interval, la funció és **constant**.

!!! note "Recorda"
    Per determinar els intervals de creixement i decreixement no n'hi ha prou amb resoldre $f'(x)=0$. Cal estudiar el **signe** de $f'$ en els intervals que determinen els punts crítics i els punts on la funció o la derivada no existeixen.

!!! abstract "Definició: punt crític"
    Anomenem **punt crític** qualsevol valor $x=a$ del domini en què

    $$
    f'(a)=0
    \qquad\text{o bé}\qquad
    f'(a)\text{ no existeix}.
    $$

El procediment és:

1. Determinar el domini de $f$.
2. Calcular $f'(x)$.
3. Trobar els valors del domini on $f'(x)=0$ o no existeix.
4. Dividir el domini en intervals i estudiar-hi el signe de $f'(x)$.
5. Escriure els intervals de creixement i decreixement.

### 2. Màxims i mínims relatius

!!! abstract "Definició: màxim i mínim relatius"
    Una funció té un **màxim relatiu** en $x=a$ si, a prop d'aquest punt, $f(a)$ és més gran que els valors veïns. Té un **mínim relatiu** si $f(a)$ és més petit que els valors veïns.

La classificació més segura es fa amb el canvi de signe de $f'$:

| Canvi de signe de $f'$ en $a$ | Classificació |
|:---:|:---|
| $+\longrightarrow-$ | Màxim relatiu |
| $-\longrightarrow+$ | Mínim relatiu |
| No canvia de signe | No és un extrem relatiu |

!!! note "Comprovació amb la segona derivada"
    Si $f'(a)=0$ i existeix $f''(a)$, podem comprovar el tipus d'extrem amb el signe de la segona derivada:

    - si $f''(a)<0$, la funció té un **màxim relatiu** en $x=a$;
    - si $f''(a)>0$, la funció té un **mínim relatiu** en $x=a$;
    - si $f''(a)=0$, el criteri **no permet decidir** i cal estudiar el canvi de signe de $f'$.

!!! warning "Un punt amb derivada zero no sempre és un extrem"
    En $f(x)=x^3$ tenim $f'(0)=0$, però la funció és creixent a tots dos costats de $0$. Per tant, $(0,0)$ no és ni un màxim ni un mínim. Sempre cal comprovar el canvi de signe de $f'$.

!!! example "Exemple 1. Creixement, decreixement i extrems d'una funció polinòmica"
    Estudiem

    $$
    f(x)=x^3-3x^2-9x+5.
    $$

    El domini és $\mathbb{R}$ i la derivada és

    $$
    f'(x)=3x^2-6x-9.
    $$

    Per trobar els candidats a extrems relatius, igualem la derivada a zero i traiem factor comú $3$:

    $$
    3x^2-6x-9=0
    \quad\Longrightarrow\quad
    3(x^2-2x-3)=0
    \quad\Longrightarrow\quad
    x^2-2x-3=0.
    $$

    Ara apliquem la fórmula general a l'equació de segon grau:

    $$
    x=\frac{-(-2)\pm\sqrt{(-2)^2-4\cdot1\cdot(-3)}}{2\cdot1}
    =\frac{2\pm\sqrt{16}}{2}
    =\frac{2\pm4}{2}.
    $$

    Per tant,

    $$
    x=-1
    \qquad\text{o bé}\qquad
    x=3.
    $$

    Els punts crítics són $x=-1$ i $x=3$. Estudiem el signe de $f'$:

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-2$ | — | $x=0$ | — | $x=4$ |
    | Càlcul de la derivada | $f'(-2)=15$ | $f'(-1)=0$ | $f'(0)=-9$ | $f'(3)=0$ | $f'(4)=15$ |
    | Signe de $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Comportament de $f$ | creix | màxim $(-1,10)$ | decreix | mínim $(3,-22)$ | creix |

    Per tant,

    $$
    \begin{aligned}
    &f\text{ creix en }(-\infty,-1)\cup(3,+\infty),\\
    &f\text{ decreix en }(-1,3).
    \end{aligned}
    $$

    Com que $f'$ canvia de $+$ a $-$ en $x=-1$, hi ha un màxim relatiu:

    $$
    f(-1)=10\quad\Longrightarrow\quad(-1,10).
    $$

    Com que $f'$ canvia de $-$ a $+$ en $x=3$, hi ha un mínim relatiu:

    $$
    f(3)=-22\quad\Longrightarrow\quad(3,-22).
    $$

    Ho podem comprovar amb la segona derivada:

    $$
    f''(x)=6x-6,
    \qquad
    f''(-1)=-12<0\ \Longrightarrow\ \text{màxim},
    \qquad
    f''(3)=12>0\ \Longrightarrow\ \text{mínim}.
    $$

    <figure markdown="span">
      ![Gràfica de la funció polinòmica amb un màxim i un mínim relatius](../../img/calcul/fig_2_8_creixement_maxim_minim.svg?v=3){ width="740" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_8_creixement_maxim_minim.tex">Figura 2.8.</a></strong> Creixement, decreixement, màxim i mínim de $f(x)=x^3-3x^2-9x+5$.</figcaption>
    </figure>

!!! example "Exemple 2. Producte d'un polinomi i una exponencial"
    Estudiem els extrems de

    $$
    f(x)=x^2e^{-x}.
    $$

    La derivada és

    $$
    f'(x)=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x).
    $$

    Per trobar els candidats a extrems relatius, igualem la derivada a zero:

    $$
    xe^{-x}(2-x)=0.
    $$

    Com que $e^{-x}>0$ per a tot $x$, aquest factor no es pot anul·lar. Per tant,

    $$
    x=0
    \qquad\text{o bé}\qquad
    2-x=0\ \Longrightarrow\ x=2.
    $$

    Els punts crítics són $x=0$ i $x=2$. Com que $e^{-x}>0$, $f'$ té el mateix signe que $x(2-x)$:

    | Valor de $x$ | $(-\infty,0)$ | $0$ | $(0,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $-$ | $0$ | $+$ | $0$ | $-$ |
    | Comportament de $f$ | decreix | mínim $(0,0)$ | creix | màxim $\left(2,\dfrac{4}{e^2}\right)$ | decreix |

    Així, $(0,0)$ és un mínim relatiu i

    $$
    \left(2,\frac{4}{e^2}\right)
    $$

    és un màxim relatiu. Ho comprovem amb la segona derivada:

    $$
    f''(x)=e^{-x}(x^2-4x+2),
    $$

    $$
    f''(0)=2>0\ \Longrightarrow\ \text{mínim},
    \qquad
    f''(2)=-\frac{2}{e^2}<0\ \Longrightarrow\ \text{màxim}.
    $$

    <figure markdown="span">
      ![Gràfica del producte d'un polinomi per una exponencial amb un mínim i un màxim relatius](../../img/calcul/fig_2_9_creixement_polinomi_exponencial.svg?v=5){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_9_creixement_polinomi_exponencial.tex">Figura 2.9.</a></strong> Creixement, decreixement i extrems de $f(x)=x^2e^{-x}$.</figcaption>
    </figure>

### 3. Esquema d'un estudi complet

Per estudiar el creixement i els extrems d'una funció:

1. Troba el **domini**.
2. Calcula $f'$ i localitza els punts crítics.
3. Fes la taula de signes de $f'$.
4. Escriu els intervals de creixement i decreixement i classifica els extrems.
5. Si existeix $f''$ en els punts amb $f'(x)=0$, comprova la classificació amb el signe de la segona derivada.
6. Calcula les ordenades dels extrems substituint els valors de $x$ en la funció original.

!!! tip "En funcions definides a trossos"
    Cal afegir a la taula tots els punts d'unió. Un extrem també pot aparèixer en un punt on $f'$ no existeix, sempre que el valor pertanyi al domini i es produeixi el canvi de creixement corresponent.

<div class="pdf-topic-section-break"></div>

## Representació de funcions

!!! abstract "Definició: representació d'una funció"
    Representar una funció consisteix a reunir la informació algebraica, els límits i les derivades per dibuixar-ne una gràfica coherent.

    Seguirem sempre el mateix ordre per representar funcions **polinòmiques, racionals, irracionals, exponencials, logarítmiques i funcions a trossos**.

    **Formes algebraiques dels tipus de funcions**

    | Tipus de funció | Forma general |
    |:---|:---:|
    | **Polinòmica** | $\displaystyle f(x)=\sum_{i=0}^{n}a_i x^i$, amb $a_n\neq0$ |
    | **Racional** | $\displaystyle f(x)=\frac{P(x)}{Q(x)}$, amb $Q(x)\neq0$ |
    | **Irracional** | $\displaystyle f(x)=\sqrt[n]{g(x)}$, amb $g(x)\geq0$ si $n$ és parell |
    | **Exponencial** | $\displaystyle f(x)=a^{g(x)}$, amb $a>0$ i $a\neq1$ |
    | **Logarítmica** | $\displaystyle f(x)=\log_a(g(x))$, amb $a>0$, $a\neq1$ i $g(x)>0$ |
    | **A trossos** | $\displaystyle f(x)=\begin{cases}f_1(x),&x\in I_1,\\ f_2(x),&x\in I_2,\\ \cdots&\cdots,\\ f_k(x),&x\in I_k.\end{cases}$ |

!!! note "Guió general: vuit passos per representar una funció"
    1. Determinar el **domini**, tenint en compte els denominadors, les arrels d'índex parell i els logaritmes.
    2. Trobar el tall amb l'eix $Y$ calculant $f(0)$.
    3. Trobar els talls amb l'eix $X$ resolent $f(x)=0$.
    4. Estudiar amb límits laterals els punts exclosos del domini —els zeros del denominador en les funcions racionals i els extrems del domini en les logarítmiques— per determinar si hi ha **asímptotes verticals** o **discontinuïtats evitables**.
    5. Trobar les altres **discontinuïtats** en les funcions a trossos i classificar-les.
    6. Calcular els límits quan $x\to-\infty$ i $x\to+\infty$ per estudiar el **comportament a l'infinit**: la funció pot convergir a un nombre o tenir una branca infinita.
    7. Localitzar els candidats a **extrem relatiu** resolent $f'(x)=0$ i considerant els punts on $f'$ no existeix.
    8. Construir la **taula de monotonia** situant-hi tots els punts importants: discontinuïtats —incloses les asímptotes verticals—, extrems del domini, punts d'unió de les funcions a trossos i candidats a extrems relatius. Després, estudiar el signe de $f'$ en cada interval per determinar on la funció creix o decreix.

### 1. Esquema general

#### Pas 1. Domini

!!! abstract "Definició: domini"
    El **domini** és el conjunt de valors de $x$ per als quals la funció està definida.

| Tipus de funció | Condició | Domini |
|:---|:---|:---|
| Polinòmica | No imposa cap restricció. | $D_f=\mathbb{R}$. |
| Racional $\dfrac{P(x)}{Q(x)}$ | El denominador no pot ser zero: $Q(x)\neq0$. | $D_f=\mathbb{R}$ menys els zeros de $Q(x)$. |
| Arrel d'índex parell $\sqrt[n]{g(x)}$ | El radicand ha de ser positiu o zero: $g(x)\geq0$. | Els valors de $x$ que compleixen $g(x)\geq0$. |
| Arrel d'índex senar $\sqrt[n]{g(x)}$ | El radicand pot ser positiu, zero o negatiu. | $D_f=\mathbb{R}$ si $g(x)$ és polinòmica. |
| Logarítmica $\log_a(g(x))$ | L'argument ha de ser positiu: $g(x)>0$, amb $a>0$ i $a\neq1$. | Els valors de $x$ que compleixen $g(x)>0$. |
| Exponencial $a^{g(x)}$ | L'exponent pot ser qualsevol nombre real, amb $a>0$ i $a\neq1$. | $D_f=\mathbb{R}$ si $g(x)$ és polinòmica. |
| Funció a trossos | Cal respectar <u>l'interval</u> i el domini de cada expressió. | $D_f$ és la unió dels dominis de tots els trossos. |

!!! note "Recorda"
    No es pot dividir entre zero. Tampoc es pot calcular, en els nombres reals, una arrel d'índex parell d'un nombre negatiu ni el logaritme d'un nombre menor o igual que zero.

#### Pas 2. Tall amb l'eix d'ordenades

Per trobar el tall amb l'eix $Y$, substituïm $x=0$:

$$
y=f(0).
$$

El punt és $(0,f(0))$, sempre que $0$ pertanyi al domini.

#### Pas 3. Talls amb l'eix d'abscisses

Per trobar els talls amb l'eix $X$, imposem $y=0$ i resolem:

$$
f(x)=0.
$$

Cada solució $x=a$ que pertanyi al domini dona un punt de tall $(a,0)$. Una funció pot tenir **diversos talls** amb l'eix $X$ o no tenir-ne cap.

En una funció racional, els zeros són els del numerador que també pertanyen al domini.

#### Pas 4. Asímptotes verticals i discontinuïtats evitables

Els candidats són els punts exclosos del domini: en les funcions racionals, els zeros del denominador; i en les logarítmiques, els extrems finits del domini. Per a cada candidat $x=c$, calculem els límits laterals:

$$
\lim_{x\to c^-}f(x)
\qquad\text{i}\qquad
\lim_{x\to c^+}f(x).
$$

- Si almenys un dels límits és $+\infty$ o $-\infty$, $x=c$ és una **asímptota vertical**.
- Si els dos límits coincideixen i són finits, però $f(c)$ no existeix, hi ha una **discontinuïtat evitable**.

!!! abstract "Definició: asímptota vertical"
    La recta $x=c$ és una **asímptota vertical** si almenys un dels límits laterals de $f(x)$ quan $x\to c$ és $+\infty$ o $-\infty$.

!!! warning "Un zero del denominador no sempre és una asímptota"
    Si el mateix factor es pot simplificar en el numerador i el denominador i el límit és finit, hi ha una discontinuïtat evitable, no una asímptota vertical.

#### Pas 5. Altres discontinuïtats

En les funcions a trossos, busquem les altres discontinuïtats en els punts d'unió o de canvi d'expressió. En cadascun comparem els límits laterals i el valor de la funció.

!!! abstract "Definició: tipus de discontinuïtat"
    - **Evitable:** el límit existeix i és finit, però el valor de la funció no existeix o és diferent.
    - De **salt finit:** els dos límits laterals són finits, però diferents.
    - De **salt infinit:** almenys un dels límits laterals és infinit.

#### Pas 6. Comportament a l'infinit

Calculem

$$
\lim_{x\to-\infty}f(x)
\qquad\text{i}\qquad
\lim_{x\to+\infty}f(x).
$$

Interpretem separadament el resultat de cada límit:

- Si el límit és un nombre real $L$, la funció **convergeix a $L$** en aquell extrem.
- Si el límit és $+\infty$ o $-\infty$, la funció té una **branca infinita** en aquell extrem.

#### Pas 7. Extrems relatius

!!! abstract "Definició: màxim i mínim relatius"
    Una funció té un **màxim relatiu** en $x=a$ si $f(a)$ és més gran que els valors propers. Té un **mínim relatiu** si $f(a)$ és més petit que els valors propers.

Calculem $f'(x)$ i estudiem els punts del domini on

$$
f'(x)=0
\qquad\text{o bé}\qquad
f'(x)\text{ no existeix}.
$$

El canvi de signe de $f'$ permet decidir si hi ha un màxim, un mínim o cap extrem.

#### Pas 8. Creixement i decreixement

Abans d'estudiar el signe de $f'$, situem ordenadament a la taula de monotonia **tots els punts que poden separar intervals**:

- les discontinuïtats, incloses les **asímptotes verticals**;
- els extrems del domini;
- els punts d'unió o de canvi d'expressió de les **funcions a trossos**;
- els punts on $f'(x)=0$ i els punts del domini on $f'$ no existeix, que són els candidats a **extrems relatius**.

Aquests punts divideixen el domini en intervals. En cadascun estudiem el signe de $f'$:

$$
f'(x)>0\Longrightarrow f\text{ creix},
\qquad
f'(x)<0\Longrightarrow f\text{ decreix}.
$$

El canvi de signe de $f'$ permet classificar els candidats: de $+$ a $-$ hi ha un màxim relatiu i de $-$ a $+$ hi ha un mínim relatiu. Una discontinuïtat o una asímptota vertical separa intervals de monotonia, encara que el punt no pertanyi al domini i, per tant, no pugui ser un extrem relatiu.

!!! tip "Abans de dibuixar"
    Situa primer els talls, les discontinuïtats, les asímptotes i els extrems. Després uneix la informació respectant el creixement o decreixement de cada interval.

### 2. Què cal mirar segons el tipus de funció?

| Tipus | Informació especialment útil |
|:---|:---|
| Polinòmica | Domini $\mathbb{R}$, talls, comportament del terme de grau més alt i extrems. |
| Racional | Zeros del denominador, simplificacions, asímptotes verticals, comportament a l'infinit i intervals separats pel domini. |
| Irracional | Condició del radicand, extrems del domini i possibles tangents verticals. |
| Exponencial | El factor exponencial és sempre positiu; els límits depenen del signe de l'exponent. |
| Logarítmica | L'argument ha de ser positiu i acostuma a haver-hi una asímptota vertical quan l'argument tendeix a $0^+$. |
| A trossos | Cal estudiar la continuïtat i la derivabilitat en tots els punts d'unió. |
| Amb valor absolut | Primer s'escriu a trossos segons el signe de l'expressió interior. |

### 3. Exemple complet: funció polinòmica

!!! example "Exemple 1. Representació d'una funció polinòmica"
    Estudiem

    $$
    f(x)=x^3-3x^2-9x+27.
    $$

    **Domini.** Com que és una funció polinòmica, el domini és $D_f=\mathbb{R}$.

    **Tall amb l'eix $Y$.** Calculem $f(0)$:

    $$
    f(0)=0^3-3\cdot0^2-9\cdot0+27=27.
    $$

    Per tant, el tall amb l'eix $Y$ és $(0,27)$.

    **Talls amb l'eix $X$.** Igualem la funció a zero:

    $$
    x^3-3x^2-9x+27=0.
    $$

    Provem els divisors del terme independent. Com que $f(3)=0$, apliquem Ruffini amb $x=3$:

    $$
    \begin{array}{r|rrrr}
    3 & 1 & -3 & -9 & 27\\
      &   & 3  & 0  & -27\\ \hline
      & 1 & 0  & -9 & 0
    \end{array}
    $$

    Així, una solució és $x=3$ i queda l'equació de segon grau

    $$
    x^2-9=0.
    $$

    És una equació de segon grau incompleta. Aïllem $x^2$ i extraiem l'arrel quadrada:

    $$
    x^2-9=0
    \quad\Longrightarrow\quad
    x^2=9
    \quad\Longrightarrow\quad
    x=\pm\sqrt{9}=\pm3.
    $$

    Per tant, les solucions són $x=-3$ i $x=3$; aquesta última apareix dues vegades. Els talls amb l'eix $X$ són $(-3,0)$ i $(3,0)$. En $x=3$ l'arrel és doble: la gràfica toca l'eix però no el travessa.

    **Comportament a l'infinit.** En una funció polinòmica, el terme de grau més alt domina en valor absolut quan $|x|\to\infty$. En aquest cas, domina el terme $x^3$:

    $$
    \boxed{\begin{aligned}
    \lim_{x\to+\infty}\left(x^3-3x^2-9x+27\right)
    &=\lim_{x\to+\infty}x^3\\
    &=(+\infty)^3=+\infty.
    \end{aligned}}
    $$

    $$
    \boxed{\begin{aligned}
    \lim_{x\to-\infty}\left(x^3-3x^2-9x+27\right)
    &=\lim_{x\to-\infty}x^3\\
    &=(-\infty)^3=-\infty.
    \end{aligned}}
    $$

    Per tant, la funció té una **branca infinita** a cadascun dels dos extrems.

    **Creixement i extrems.**

    $$
    f'(x)=3x^2-6x-9.
    $$

    Per trobar els candidats a extrem relatiu, igualem la derivada a zero i traiem factor comú $3$:

    $$
    3x^2-6x-9=0
    \quad\Longrightarrow\quad
    3(x^2-2x-3)=0
    \quad\Longrightarrow\quad
    x^2-2x-3=0.
    $$

    Resolem l'equació de segon grau amb la fórmula general:

    $$
    x=\frac{-(-2)\pm\sqrt{(-2)^2-4\cdot1\cdot(-3)}}{2\cdot1}
    =\frac{2\pm\sqrt{16}}{2}
    =\frac{2\pm4}{2}.
    $$

    Per tant,

    $$
    x=-1
    \qquad\text{o bé}\qquad
    x=3.
    $$

    Aquests dos valors divideixen el domini en els intervals de la taula de monotonia:

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-2$ | — | $x=0$ | — | $x=4$ |
    | Càlcul de la derivada | $f'(-2)=15$ | $f'(-1)=0$ | $f'(0)=-9$ | $f'(3)=0$ | $f'(4)=15$ |
    | Signe de $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Comportament de $f$ | creix | màxim $(-1,32)$ | decreix | mínim $(3,0)$ | creix |

    Hi ha un màxim relatiu en $(-1,32)$ i un mínim relatiu en $(3,0)$.

    <figure markdown="span">
      ![Gràfica de la funció polinòmica amb els talls i els extrems relatius destacats](../../img/calcul/fig_2_10_representacio_polinomica.svg?v=5){ width="820" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_10_representacio_polinomica.tex">Figura 2.10.</a></strong> Representació de la funció polinòmica.</figcaption>
    </figure>

### 4. Exemple complet: funció racional

!!! example "Exemple 2. Representació d'una funció racional"
    Estudiem

    $$
    f(x)=\frac{x^2-x-2}{x^2-3x+2}.
    $$

    **Domini.** El denominador no pot ser zero. Per tant, resolem

    $$
    x^2-3x+2=0.
    $$

    Apliquem la fórmula general:

    $$
    x=\frac{-(-3)\pm\sqrt{(-3)^2-4\cdot1\cdot2}}{2\cdot1}
    =\frac{3\pm\sqrt{1}}{2}
    =\frac{3\pm1}{2}.
    $$

    Així, $x=1$ o bé $x=2$ i

    $$
    D_f=\mathbb{R}\setminus\{1,2\}.
    $$

    **Tall amb l'eix $Y$.** Calculem

    $$
    f(0)=\frac{0^2-0-2}{0^2-3\cdot0+2}=\frac{-2}{2}=-1.
    $$

    El tall amb l'eix $Y$ és $(0,-1)$.

    **Tall amb l'eix $X$.** En un punt de l'eix $X$ tenim $y=0$. Per tant, imposem $f(x)=0$:

    $$
    0=\frac{x^2-x-2}{x^2-3x+2}.
    $$

    Una fracció és igual a zero quan el numerador és zero i el denominador no ho és. Com que $x\in D_f$, el denominador no és zero i podem multiplicar els dos membres per $x^2-3x+2$:

    $$
    0\left(x^2-3x+2\right)=x^2-x-2.
    $$

    Com que el producte de zero per qualsevol nombre és zero, obtenim

    $$
    0=x^2-x-2.
    $$

    Resolem l'equació amb la fórmula general:

    $$
    x=\frac{-(-1)\pm\sqrt{(-1)^2-4\cdot1\cdot(-2)}}{2\cdot1}
    =\frac{1\pm\sqrt{9}}{2}
    =\frac{1\pm3}{2}.
    $$

    Les solucions són $x=-1$ i $x=2$, però $x=2$ no pertany al domini. Per tant, l'únic tall amb l'eix $X$ és $(-1,0)$.

    **Discontinuïtat de salt infinit en $x=1$.** Substituint $x=1$ obtenim

    $$
    \lim_{x\to1}f(x)
    =\lim_{x\to1}\frac{x^2-x-2}{x^2-3x+2}
    \longrightarrow
    \frac{1^2-1-2}{1^2-3\cdot1+2}
    =\frac{-2}{0}.
    $$

    No és una indeterminació. Calculem els límits laterals tenint en compte el signe amb què el denominador s'apropa a zero:

    $$
    \lim_{x\to1^-}\frac{x^2-x-2}{x^2-3x+2}
    =\frac{-2}{0^+}=-\infty,
    $$

    $$
    \lim_{x\to1^+}\frac{x^2-x-2}{x^2-3x+2}
    =\frac{-2}{0^-}=+\infty.
    $$

    Per tant, $x=1$ és una asímptota vertical.

    **Discontinuïtat evitable en $x=2$.** Substituint $x=2$ obtenim la indeterminació

    $$
    \lim_{x\to2}f(x)
    =\lim_{x\to2}\frac{x^2-x-2}{x^2-3x+2}
    \longrightarrow
    \frac{2^2-2-2}{2^2-3\cdot2+2}
    =\frac{0}{0}.
    $$

    Ara sí que factoritzem el numerador i el denominador i simplifiquem el factor comú $x-2$:

    $$
    \begin{aligned}
    \lim_{x\to2}\frac{x^2-x-2}{x^2-3x+2}
    &=\lim_{x\to2}\frac{(x-2)(x+1)}{(x-2)(x-1)}\\
    &=\lim_{x\to2}\frac{x+1}{x-1}
    =\frac{2+1}{2-1}=3.
    \end{aligned}
    $$

    Per tant, la gràfica té un forat en el punt $(2,3)$. Per als altres valors del domini podem utilitzar l'expressió simplificada

    $$
    f(x)=\frac{x+1}{x-1},
    \qquad x\neq1,2.
    $$

    **Comportament a l'infinit.** Apliquem el criteri d'ordre d'infinits. Tant al numerador com al denominador domina el terme de segon grau $x^2$:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}f(x)
    &=\lim_{x\to-\infty}\frac{x^2-x-2}{x^2-3x+2}\\
    &=\lim_{x\to-\infty}\frac{x^2}{x^2}=1.
    \end{aligned}
    $$

    De la mateixa manera,

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
    &=\lim_{x\to+\infty}\frac{x^2-x-2}{x^2-3x+2}\\
    &=\lim_{x\to+\infty}\frac{x^2}{x^2}=1.
    \end{aligned}
    $$

    Així, la funció **convergeix a $1$** als dos extrems.

    **Creixement i extrems.**

    $$
    f'(x)=\frac{-2}{(x-1)^2}<0
    $$

    en tot el domini. La taula de monotonia ha d'incloure tant l'asímptota vertical $x=1$ com la discontinuïtat evitable $x=2$:

    | Valor de $x$ | $(-\infty,1)$ | $1$ | $(1,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=0$ | — | $x=\dfrac{3}{2}$ | — | $x=3$ |
    | Càlcul de la derivada | $f'(0)=-2$ | no existeix | $f'\!\left(\dfrac{3}{2}\right)=-8$ | no existeix | $f'(3)=-\dfrac{1}{2}$ |
    | Signe de $f'$ | $-$ | no existeix | $-$ | no existeix | $-$ |
    | Comportament de $f$ | decreix | asímptota vertical | decreix | discontinuïtat evitable en $(2,3)$ | decreix |

    La funció no té extrems relatius.

    <figure markdown="span">
      ![Gràfica d'una funció racional amb una discontinuïtat evitable, una asímptota vertical i convergència a 1 als dos extrems](../../img/calcul/fig_2_11_representacio_racional.svg?v=7){ width="820" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_11_representacio_racional.tex">Figura 2.11.</a></strong> Funció racional amb una discontinuïtat evitable i una discontinuïtat de salt infinit.</figcaption>
    </figure>

!!! example "Exemple 3. Funció racional amb branques infinites"
    Estudiem

    $$
    g(x)=\frac{-x^2}{x-2}.
    $$

    **Domini.** El denominador no pot ser zero. Per tant,

    $$
    x-2=0\Longrightarrow x=2,
    $$

    i el domini és

    $$
    D_g=\mathbb{R}\setminus\{2\}.
    $$

    **Tall amb l'eix $Y$.** Calculem

    $$
    g(0)=\frac{-0^2}{0-2}=0.
    $$

    Per tant, el tall amb l'eix $Y$ és $(0,0)$.

    **Tall amb l'eix $X$.** Imposant $g(x)=0$ obtenim

    $$
    0=\frac{-x^2}{x-2}.
    $$

    Com que $x\in D_g$, podem multiplicar els dos membres per $x-2$:

    $$
    0(x-2)=-x^2
    \quad\Longrightarrow\quad
    0=-x^2
    \quad\Longrightarrow\quad
    x=0.
    $$

    El tall amb l'eix $X$ també és $(0,0)$.

    **Discontinuïtat de salt infinit en $x=2$.** Substituint $x=2$ obtenim

    $$
    \lim_{x\to2}g(x)
    =\lim_{x\to2}\frac{-x^2}{x-2}
    \longrightarrow
    \frac{-4}{0}.
    $$

    No és una indeterminació. Estudiem els límits laterals:

    $$
    \lim_{x\to2^-}\frac{-x^2}{x-2}
    =\frac{-4}{0^-}=+\infty,
    $$

    $$
    \lim_{x\to2^+}\frac{-x^2}{x-2}
    =\frac{-4}{0^+}=-\infty.
    $$

    Per tant, $x=2$ és una asímptota vertical.

    **Comportament a l'infinit.** Apliquem el criteri d'ordre d'infinits. Al numerador domina $-x^2$ i al denominador domina $x$:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}g(x)
    &=\lim_{x\to-\infty}\frac{-x^2}{x-2}\\
    &=\lim_{x\to-\infty}\frac{-x^2}{x}
    =\lim_{x\to-\infty}(-x)=+\infty,
    \end{aligned}
    $$

    $$
    \begin{aligned}
    \lim_{x\to+\infty}g(x)
    &=\lim_{x\to+\infty}\frac{-x^2}{x-2}\\
    &=\lim_{x\to+\infty}\frac{-x^2}{x}
    =\lim_{x\to+\infty}(-x)=-\infty.
    \end{aligned}
    $$

    Així, la funció té una **branca infinita** a cadascun dels dos extrems.

    **Creixement i extrems.** Derivem amb la regla del quocient:

    $$
    \begin{aligned}
    g'(x)
    &=\frac{(-2x)(x-2)-(-x^2)\cdot1}{(x-2)^2}\\
    &=\frac{-2x^2+4x+x^2}{(x-2)^2}
    =\frac{-x(x-4)}{(x-2)^2}.
    \end{aligned}
    $$

    Busquem els candidats a extrem relatiu:

    $$
    g'(x)=0
    \quad\Longrightarrow\quad
    -x(x-4)=0
    \quad\Longrightarrow\quad
    x=0\quad\text{o bé}\quad x=4.
    $$

    Els valors de la funció són

    $$
    g(0)=0,
    \qquad
    g(4)=\frac{-4^2}{4-2}=-8.
    $$

    La taula de monotonia també ha d'incloure l'asímptota vertical $x=2$:

    | Valor de $x$ | $(-\infty,0)$ | $0$ | $(0,2)$ | $2$ | $(2,4)$ | $4$ | $(4,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-1$ | — | $x=1$ | — | $x=3$ | — | $x=5$ |
    | Càlcul de la derivada | $g'(-1)=-\dfrac59$ | $g'(0)=0$ | $g'(1)=3$ | no existeix | $g'(3)=3$ | $g'(4)=0$ | $g'(5)=-\dfrac59$ |
    | Signe de $g'$ | $-$ | $0$ | $+$ | no existeix | $+$ | $0$ | $-$ |
    | Comportament de $g$ | decreix | mínim $(0,0)$ | creix | asímptota vertical | creix | màxim $(4,-8)$ | decreix |

    La funció té un mínim relatiu en $(0,0)$ i un màxim relatiu en $(4,-8)$.

    <figure markdown="span">
      ![Gràfica d'una funció racional amb una asímptota vertical, branques infinites, un mínim i un màxim relatius](../../img/calcul/fig_2_12_representacio_racional_branques_infinites.svg?v=5){ width="820" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_12_representacio_racional_branques_infinites.tex">Figura 2.12.</a></strong> Funció racional amb una asímptota vertical, branques infinites i dos extrems relatius.</figcaption>
    </figure>

### 5. Funcions irracionals, exponencials i logarítmiques

En aquestes funcions el domini i els límits acostumen a determinar bona part de la gràfica.

!!! example "Exemple 4. Representació d'una funció irracional"
    Estudiem

    $$
    f(x)=\sqrt{x+2}.
    $$

    **Domini.** Com que l'arrel té índex parell, el radicand ha de ser positiu o zero:

    $$
    x+2\geq0\Longrightarrow x\geq-2.
    $$

    Per tant, $D_f=[-2,+\infty)$.

    **Talls amb els eixos.** Per trobar el tall amb l'eix $Y$, calculem

    $$
    f(0)=\sqrt{0+2}=\sqrt2.
    $$

    Per trobar el tall amb l'eix $X$, resolem

    $$
    \sqrt{x+2}=0\Longrightarrow x=-2.
    $$

    Així, els talls són $(0,\sqrt2)$ i $(-2,0)$.

    **Extrem del domini i comportament a l'infinit.** En l'extrem esquerre,

    $$
    \lim_{x\to-2^+}\sqrt{x+2}=0=f(-2),
    $$

    de manera que la funció és contínua en $x=-2$ i no hi ha cap asímptota vertical. Quan $x\to+\infty$, dins de l'arrel domina el terme $x$:

    $$
    \begin{aligned}
    \lim_{x\to+\infty}\sqrt{x+2}
    &=\lim_{x\to+\infty}\sqrt{x}\\
    &=\sqrt{+\infty}=+\infty.
    \end{aligned}
    $$

    Per tant, la funció té una **branca infinita** quan $x\to+\infty$.

    **Creixement i extrems.** Derivem:

    $$
    f'(x)=\frac{1}{2\sqrt{x+2}}>0
    \qquad\text{si }x>-2.
    $$

    | Valor de $x$ | $-2$ | $(-2,+\infty)$ |
    |:---:|:---:|:---:|
    | Valor de prova | — | $x=-1$ |
    | Càlcul de la derivada | $f'(-2)$ no existeix | $f'(-1)=\dfrac12$ |
    | Signe de $f'$ | no existeix | $+$ |
    | Comportament de $f$ | mínim absolut $(-2,0)$ | creix |

    La funció creix en tot el seu domini i té un mínim absolut en $(-2,0)$.

    <figure markdown="span">
      ![Gràfica de la funció irracional arrel quadrada de x més dos](../../img/calcul/fig_2_13_representacio_irracional.svg?v=2){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_13_representacio_irracional.tex">Figura 2.13.</a></strong> Representació de $f(x)=\sqrt{x+2}$.</figcaption>
    </figure>

!!! example "Exemple 5. Representació d'una funció exponencial"
    Estudiem

    $$
    g(x)=e^{-x}.
    $$

    **Domini.** L'exponent pot prendre qualsevol valor real. Per tant, $D_g=\mathbb{R}$.

    **Talls amb els eixos.** Calculem

    $$
    g(0)=e^0=1,
    $$

    i el tall amb l'eix $Y$ és $(0,1)$. Com que $e^{-x}>0$ per a tot $x\in\mathbb{R}$, la funció no talla l'eix $X$.

    **Discontinuïtats i comportament a l'infinit.** La funció és contínua en tot $\mathbb{R}$ i no té asímptotes verticals. Estudiem què passa amb l'exponent $-x$ a cada extrem:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}e^{-x}
    &=e^{-(-\infty)}=e^{+\infty}=+\infty,\\[4pt]
    \lim_{x\to+\infty}e^{-x}
    &=e^{-(+\infty)}=e^{-\infty}=0.
    \end{aligned}
    $$

    Així, la funció té una **branca infinita** quan $x\to-\infty$ i **convergeix a $0$** quan $x\to+\infty$.

    **Creixement i extrems.** Derivem:

    $$
    g'(x)=-e^{-x}<0
    \qquad\text{per a tot }x\in\mathbb{R}.
    $$

    | Valor de $x$ | $(-\infty,+\infty)$ |
    |:---:|:---:|
    | Valor de prova | $x=0$ |
    | Càlcul de la derivada | $g'(0)=-1$ |
    | Signe de $g'$ | $-$ |
    | Comportament de $g$ | decreix |

    La funció decreix en tot $\mathbb{R}$ i no té extrems relatius.

    <figure markdown="span">
      ![Gràfica de la funció exponencial e elevat a menys x](../../img/calcul/fig_2_14_representacio_exponencial.svg?v=2){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_14_representacio_exponencial.tex">Figura 2.14.</a></strong> Representació de $g(x)=e^{-x}$.</figcaption>
    </figure>

!!! example "Exemple 6. Representació d'una funció logarítmica"
    Estudiem

    $$
    h(x)=\ln(x-2).
    $$

    **Domini.** L'argument del logaritme ha de ser positiu:

    $$
    x-2>0\Longrightarrow x>2.
    $$

    Per tant, $D_h=(2,+\infty)$.

    **Talls amb els eixos.** La funció no talla l'eix $Y$, perquè $0$ no pertany al domini. Per trobar el tall amb l'eix $X$, resolem

    $$
    \ln(x-2)=0
    \Longrightarrow x-2=e^0=1
    \Longrightarrow x=3.
    $$

    Per tant, el tall amb l'eix $X$ és $(3,0)$.

    **Asímptota vertical i comportament a l'infinit.** En l'extrem esquerre del domini, $x-2\to0^+$ i, per tant,

    $$
    \lim_{x\to2^+}\ln(x-2)=\ln(0^+)=-\infty,
    $$

    de manera que $x=2$ és una asímptota vertical. Quan $x\to+\infty$, dins del logaritme domina el terme $x$:

    $$
    \begin{aligned}
    \lim_{x\to+\infty}\ln(x-2)
    &=\lim_{x\to+\infty}\ln x\\
    &=\ln(+\infty)=+\infty.
    \end{aligned}
    $$

    Per tant, la funció té una **branca infinita** quan $x\to+\infty$.

    **Creixement i extrems.** Derivem:

    $$
    h'(x)=\frac{1}{x-2}>0
    \qquad\text{si }x>2.
    $$

    | Valor de $x$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|
    | Valor de prova | — | $x=3$ |
    | Càlcul de la derivada | $h'(2)$ no existeix | $h'(3)=1$ |
    | Signe de $h'$ | no existeix | $+$ |
    | Comportament de $h$ | asímptota vertical | creix |

    La funció creix en tot el seu domini i no té extrems relatius.

    <figure markdown="span">
      ![Gràfica de la funció logarítmica logaritme neperià de x menys dos](../../img/calcul/fig_2_15_representacio_logaritmica.svg?v=3){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_15_representacio_logaritmica.tex">Figura 2.15.</a></strong> Representació de $h(x)=\ln(x-2)$.</figcaption>
    </figure>

### 6. Funcions a trossos i amb valor absolut

En una funció a trossos, cada expressió només es dibuixa dins del seu interval. En els punts d'unió cal comprovar:

1. els límits laterals;
2. el valor de la funció;
3. les derivades laterals, si s'estudia la derivabilitat.

Per representar una funció amb valor absolut, **abans de començar l'estudi gràfic** localitzem els zeros de les expressions interiors. Aquests punts separen els intervals on els valors absoluts poden canviar d'expressió. Estudiem el signe en cada interval i escrivim la funció a trossos:

$$
|g(x)|=
\begin{cases}
g(x), & g(x)\geq0,\\
-g(x), & g(x)<0.
\end{cases}
$$

Un cop obtinguda la funció a trossos, estudiem cada expressió només dins del seu interval. Si tots els trossos són funcions lineals, no cal repetir els vuit passos: n'hi ha prou amb identificar la pendent, situar dos punts de cada recta i comprovar els punts d'unió. Si els trossos no són lineals, seguim els vuit passos habituals a partir de la funció a trossos.

!!! note "Dibuix final"
    Els cercles buits indiquen que el punt no pertany al tros corresponent; els punts plens indiquen el valor real de la funció. La gràfica no s'ha de prolongar fora de l'interval assignat a cada expressió.

!!! example "Exemple 7. Funció a trossos amb una discontinuïtat de salt infinit"
    Representem la funció

    $$
    f(x)=
    \begin{cases}
    1+\dfrac{2}{x+1}, & x<1,\\[6pt]
    (x-3)^2-2, & x\geq1.
    \end{cases}
    $$

    **Pas 1. Domini.** La branca racional, que s'aplica quan $x<1$, no està definida en $x=-1$. La branca quadràtica està definida per a tot $x\geq1$. Per tant,

    $$
    D_f=\mathbb{R}\setminus\{-1\}.
    $$

    **Pas 2. Tall amb l'eix $Y$.** Com que $0<1$, utilitzem la branca racional:

    $$
    f(0)=1+\frac{2}{0+1}=3.
    $$

    El tall amb l'eix $Y$ és $(0,3)$.

    **Pas 3. Talls amb l'eix $X$.** Resolem $f(x)=0$ en cadascun dels trossos. En la branca racional,

    $$
    1+\frac{2}{x+1}=0
    \Longrightarrow
    \frac{x+3}{x+1}=0
    \Longrightarrow
    x=-3,
    $$

    que compleix $x<1$. En la branca quadràtica,

    $$
    (x-3)^2-2=0
    \Longrightarrow
    (x-3)^2=2
    \Longrightarrow
    x=3\pm\sqrt2.
    $$

    Les dues solucions compleixen $x\geq1$. Així, els talls amb l'eix $X$ són

    $$
    (-3,0),\qquad (3-\sqrt2,0)\qquad\text{i}\qquad(3+\sqrt2,0).
    $$

    **Pas 4. Asímptotes verticals i discontinuïtats evitables.** L'únic punt exclòs del domini és $x=-1$. Calculem els límits laterals:

    $$
    \lim_{x\to-1^-}\left(1+\frac{2}{x+1}\right)=-\infty
    \qquad\text{i}\qquad
    \lim_{x\to-1^+}\left(1+\frac{2}{x+1}\right)=+\infty,
    $$

    Per tant, la funció té una **discontinuïtat de salt infinit** i una asímptota vertical en $x=-1$.

    **Pas 5. Altres discontinuïtats.** L'únic punt d'unió dels dos trossos és $x=1$. Hi comparem els límits laterals i el valor de la funció:

    $$
    \lim_{x\to1^-}f(x)=1+\frac{2}{1+1}=2,
    \qquad
    \lim_{x\to1^+}f(x)=(1-3)^2-2=2=f(1).
    $$

    Així, $f$ és **contínua en $x=1$**.

    **Pas 6. Comportament a l'infinit.** Quan $x\to-\infty$ s'aplica la branca racional. En el denominador $x+1$ domina el terme $x$:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}f(x)
    &=\lim_{x\to-\infty}\left(1+\frac{2}{x+1}\right)\\
    &=1+\lim_{x\to-\infty}\frac{2}{x}=1+0=1.
    \end{aligned}
    $$

    Quan $x\to+\infty$ s'aplica la branca quadràtica. Desenvolupem el quadrat i conservem el terme dominant $x^2$:

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
    &=\lim_{x\to+\infty}\left((x-3)^2-2\right)\\
    &=\lim_{x\to+\infty}\left(x^2-6x+7\right)\\
    &=\lim_{x\to+\infty}x^2=(+\infty)^2=+\infty.
    \end{aligned}
    $$

    Per tant, quan $x\to-\infty$ la funció **convergeix a $1$** i, quan $x\to+\infty$, té una **branca infinita**.

    **Pas 7. Extrems relatius.** Derivem cada tros:

    $$
    f'(x)=
    \begin{cases}
    -\dfrac{2}{(x+1)^2}, & x<1,\ x\neq-1,\\[6pt]
    2(x-3), & x>1.
    \end{cases}
    $$

    La derivada de la branca racional no s'anul·la. En la branca quadràtica,

    $$
    2(x-3)=0
    \Longrightarrow
    x=3.
    $$

    També cal considerar el punt d'unió $x=1$, on la derivada no existeix. Les derivades laterals són

    $$
    f'(1^-)=-\frac12
    \qquad\text{i}\qquad
    f'(1^+)=-4.
    $$

    Com que no coincideixen, la gràfica presenta un punt angulós en $(1,2)$. Els candidats a extrem relatiu són, doncs, $x=1$ i $x=3$.

    **Pas 8. Creixement i decreixement.** Situem a la taula l'asímptota vertical $x=-1$, el punt d'unió $x=1$ i els dos candidats a extrem relatiu:

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,1)$ | $1$ | $(1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-2$ | — | $x=0$ | — | $x=2$ | — | $x=4$ |
    | Càlcul de la derivada | $f'(-2)=-2$ | no existeix | $f'(0)=-2$ | no existeix | $f'(2)=-2$ | $f'(3)=0$ | $f'(4)=2$ |
    | Signe de $f'(x)$ | $-$ | no existeix | $-$ | no existeix | $-$ | $0$ | $+$ |
    | Comportament de $f$ | decreix | asímptota vertical | decreix | punt angulós $(1,2)$, no és un extrem | decreix | mínim $(3,-2)$ | creix |

    La funció decreix a banda i banda de $x=1$; per tant, aquest punt no és un extrem relatiu. En $x=3$, el signe de la derivada passa de negatiu a positiu i hi ha un mínim relatiu en $(3,-2)$.

    <figure markdown="span">
      ![Gràfica d'una funció a trossos amb els talls amb els eixos marcats, una discontinuïtat de salt infinit i un punt d'unió continu però no derivable](../../img/calcul/fig_2_16_representacio_funcio_trossos.svg?v=7){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_16_representacio_funcio_trossos.tex">Figura 2.16.</a></strong> Funció a trossos amb els talls amb els eixos, una discontinuïtat de salt infinit i un punt d'unió continu però no derivable.</figcaption>
    </figure>

!!! example "Exemple 8. Representació d'una funció amb dos valors absoluts"
    Representem la funció

    $$
    f(x)=|-2x+4|-|x-3|.
    $$

    **Pas previ. Localització dels canvis d'expressió.** Primer busquem els zeros de les dues expressions interiors, perquè són els punts on la funció pot canviar de comportament:

    $$
    -2x+4=0\Longrightarrow x=2,
    \qquad
    x-3=0\Longrightarrow x=3.
    $$

    Aquests dos valors divideixen la recta real en tres intervals. Estudiem el signe de cada expressió per decidir si cal conservar-ne o canviar-ne el signe:

    | | $(-\infty,2)$ | $2$ | $(2,3)$ | $3$ | $(3,+\infty)$ |
    |:---|:---:|:---:|:---:|:---:|:---:|
    | Signe de $-2x+4$ | $+$ | $0$ | $-$ | $-$ | $-$ |
    | $\lvert-2x+4\rvert$ | <span class="formula-nowrap">$+(-2x+4)$</span> | $0$ | <span class="formula-nowrap">$-(-2x+4)$</span> | <span class="formula-nowrap">$-(-2x+4)$</span> | <span class="formula-nowrap">$-(-2x+4)$</span> |
    | Signe de $x-3$ | $-$ | $-$ | $-$ | $0$ | $+$ |
    | $-\lvert x-3\rvert$ | <span class="formula-nowrap">$+(x-3)$</span> | <span class="formula-nowrap">$+(x-3)$</span> | <span class="formula-nowrap">$+(x-3)$</span> | $0$ | <span class="formula-nowrap">$-(x-3)$</span> |

    Amb els signes obtinguts, escrivim primer la funció a trossos **sense simplificar**:

    $$
    f(x)=
    \begin{cases}
    +(-2x+4)+(x-3), & x<2,\\[2pt]
    -(-2x+4)+(x-3), & 2\leq x<3,\\[2pt]
    -(-2x+4)-(x-3), & x\geq3.
    \end{cases}
    $$

    Ara desenvolupem cada expressió:

    $$
    \begin{aligned}
    +(-2x+4)+(x-3)&=-x+1,\\
    -(-2x+4)+(x-3)&=3x-7,\\
    -(-2x+4)-(x-3)&=x-1.
    \end{aligned}
    $$

    Per tant, la funció a trossos simplificada és

    $$
    f(x)=
    \begin{cases}
    -x+1, & x<2,\\
    3x-7, & 2\leq x<3,\\
    x-1, & x\geq3.
    \end{cases}
    $$

    **Construcció de la gràfica.** Els tres trossos són funcions lineals. Per tant, no cal aplicar-hi els vuit passos ni calcular derivades: la pendent i dos punts de cada recta permeten dibuixar cada tram dins del seu interval.

    | Interval | Expressió | Pendent | Punts útils |
    |:---:|:---:|:---:|:---:|
    | $x<2$ | $y=-x+1$ | $-1$ | $(0,1)$, $(1,0)$ i s'apropa a $(2,-1)$ |
    | $2\leq x<3$ | $y=3x-7$ | $3$ | $(2,-1)$, $\left(\dfrac73,0\right)$ i s'apropa a $(3,2)$ |
    | $x\geq3$ | $y=x-1$ | $1$ | $(3,2)$ i $(4,3)$ |

    En els punts d'unió, els trams coincideixen:

    $$
    -2+1=3\cdot2-7=-1,
    \qquad
    3\cdot3-7=3-1=2.
    $$

    Així, la gràfica és contínua en $x=2$ i en $x=3$. La pendent passa de $-1$ a $3$ en $x=2$, de manera que $(2,-1)$ és un mínim. En $x=3$, les dues pendents són positives: $(3,2)$ és un punt angulós, però no és un extrem. Els talls amb els eixos són $(0,1)$, $(1,0)$ i $\left(\frac73,0\right)$.

    <figure markdown="span">
      ![Gràfica de la funció valor absolut de menys dos x més quatre menys el valor absolut de x menys tres](../../img/calcul/fig_2_17_representacio_dos_valors_absoluts.svg?v=7){ width="760" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_17_representacio_dos_valors_absoluts.tex">Figura 2.17.</a></strong> Representació de $f(x)=|-2x+4|-|x-3|$.</figcaption>
    </figure>

!!! example "Exemple 9. Representació del valor absolut d'una funció quadràtica"
    Representem la funció

    $$
    f(x)=|x^2+2x-3|.
    $$

    **Pas previ. Localització dels canvis d'expressió.** Primer trobem els zeros de l'expressió interior, perquè són els punts on el valor absolut pot canviar de comportament. Factoritzem:

    $$
    x^2+2x-3=(x+3)(x-1).
    $$

    Per tant, els possibles punts de canvi són $x=-3$ i $x=1$. Comprovem el signe de cada factor i del producte en els intervals que determinen:

    | Valor de $x$ | $x<-3$ | $x=-3$ | $-3<x<1$ | $x=1$ | $x>1$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $x+3$ | $-$ | $0$ | $+$ | $+$ | $+$ |
    | Signe de $x-1$ | $-$ | $-$ | $-$ | $0$ | $+$ |
    | Signe de $(x+3)(x-1)$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Expressió de $f(x)$ | $+(x^2+2x-3)$ | $0$ | $-(x^2+2x-3)$ | $0$ | $+(x^2+2x-3)$ |

    El polinomi és positiu fora de l'interval $[-3,1]$ i negatiu a l'interior. Amb aquests signes, escrivim primer la funció a trossos **sense simplificar**:

    $$
    f(x)=
    \begin{cases}
    +(x^2+2x-3), & x\leq-3,\\[2pt]
    -(x^2+2x-3), & -3<x<1,\\[2pt]
    +(x^2+2x-3), & x\geq1.
    \end{cases}
    $$

    Desenvolupem l'expressió del tros central:

    $$
    -(x^2+2x-3)=-x^2-2x+3.
    $$

    Per tant, la funció a trossos simplificada és

    $$
    f(x)=
    \begin{cases}
    x^2+2x-3, & x\leq-3,\\[2pt]
    -x^2-2x+3, & -3<x<1,\\[2pt]
    x^2+2x-3, & x\geq1.
    \end{cases}
    $$

    A partir d'aquesta funció a trossos fem l'estudi gràfic.

    **Pas 1. Domini.** Els tres trossos són polinomis i cobreixen tota la recta real. Per tant,

    $$
    D_f=\mathbb{R}.
    $$

    **Pas 2. Tall amb l'eix $Y$.** Com que $0\in(-3,1)$, utilitzem el tros central:

    $$
    f(0)=-0^2-2\cdot0+3=3.
    $$

    El tall amb l'eix $Y$ és $(0,3)$.

    **Pas 3. Talls amb l'eix $X$.** Els zeros que hem trobat en construir la funció a trossos són $x=-3$ i $x=1$. Per tant, els talls amb l'eix $X$ són $(-3,0)$ i $(1,0)$.

    **Pas 4. Asímptotes verticals i discontinuïtats evitables.** No hi ha cap punt exclòs del domini. Per tant, no hi ha asímptotes verticals ni discontinuïtats evitables.

    **Pas 5. Altres discontinuïtats.** Cal comprovar els punts d'unió $x=-3$ i $x=1$. En $x=-3$,

    $$
    \lim_{x\to-3^-}f(x)=0,
    \qquad
    \lim_{x\to-3^+}f(x)=0=f(-3).
    $$

    En $x=1$,

    $$
    \lim_{x\to1^-}f(x)=0,
    \qquad
    \lim_{x\to1^+}f(x)=0=f(1).
    $$

    Així, la funció és contínua en els dos punts d'unió i, per tant, en tot $\mathbb{R}$.

    **Pas 6. Comportament a l'infinit.** Als dos extrems s'aplica el tros $x^2+2x-3$ i hi domina el terme $x^2$:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}f(x)
    &=\lim_{x\to-\infty}(x^2+2x-3)
    =\lim_{x\to-\infty}x^2=+\infty,\\[4pt]
    \lim_{x\to+\infty}f(x)
    &=\lim_{x\to+\infty}(x^2+2x-3)
    =\lim_{x\to+\infty}x^2=+\infty.
    \end{aligned}
    $$

    Per tant, la funció té una **branca infinita** a cadascun dels dos extrems.

    **Pas 7. Extrems relatius.** Derivem cada tros:

    $$
    f'(x)=
    \begin{cases}
    2x+2, & x<-3,\\[2pt]
    -2x-2, & -3<x<1,\\[2pt]
    2x+2, & x>1.
    \end{cases}
    $$

    En el tros central,

    $$
    -2x-2=0
    \Longrightarrow
    x=-1,
    $$

    i la solució pertany a $(-3,1)$. En els trossos exteriors, l'equació $2x+2=0$ dona el mateix valor, però $-1$ no pertany als intervals corresponents.

    També cal considerar els punts d'unió $x=-3$ i $x=1$, on la derivada no existeix. En $x=-3$, les derivades laterals són

    $$
    f'(-3^-)=-4
    \qquad\text{i}\qquad
    f'(-3^+)=4.
    $$

    En $x=1$ són

    $$
    f'(1^-)=-4
    \qquad\text{i}\qquad
    f'(1^+)=4.
    $$

    Com que les derivades laterals no coincideixen, $x=-3$ i $x=1$ són punts angulosos. Els candidats a extrem relatiu són, doncs, $x=-3$, $x=-1$ i $x=1$.

    **Pas 8. Creixement i decreixement.** Situem els tres candidats a la taula de monotonia:

    | Valor de $x$ | $(-\infty,-3)$ | $-3$ | $(-3,-1)$ | $-1$ | $(-1,1)$ | $1$ | $(1,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-4$ | — | $x=-2$ | — | $x=0$ | — | $x=2$ |
    | Càlcul de la derivada | $f'(-4)=-6$ | no existeix | $f'(-2)=2$ | $f'(-1)=0$ | $f'(0)=-2$ | no existeix | $f'(2)=6$ |
    | Signe de $f'$ | $-$ | no existeix | $+$ | $0$ | $-$ | no existeix | $+$ |
    | Comportament de $f$ | decreix | mínim $(-3,0)$ | creix | màxim $(-1,4)$ | decreix | mínim $(1,0)$ | creix |

    La funció té mínims relatius i absoluts en $(-3,0)$ i $(1,0)$, i un màxim relatiu en $(-1,4)$.

    <figure markdown="span">
      ![Gràfica de la funció valor absolut de x al quadrat més dos x menys tres, amb punts angulosos en x igual a menys tres i x igual a u](../../img/calcul/fig_2_18_valor_absolut_quadratica.svg?v=3){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_18_valor_absolut_quadratica.tex">Figura 2.18.</a></strong> Representació de $f(x)=|x^2+2x-3|$.</figcaption>
    </figure>

<div class="pdf-topic-section-break"></div>

## Optimització de funcions

En els problemes d'optimització sovint cal expressar longituds, àrees o volums en funció d'una variable. Per això, abans de plantejar-los, recordem les fórmules geomètriques més habituals.

### 1. Repàs de geometria

#### 1.1 Geometria plana

En les figures planes utilitzarem $A$ per indicar l'**àrea** i $P$ per indicar el **perímetre**. En qualsevol figura poligonal, el perímetre és la **suma de les longituds de tots els costats**.

<figure markdown="span">
  ![Quadrat, rectangle, triangle, cercle i polígon regular amb les dimensions i les fórmules de l'àrea i del perímetre](../../img/calcul/fig_2_19_repas_geometria_plana.svg?v=8){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_19_repas_geometria_plana.tex">Figura 2.19.</a></strong> Àrees i perímetres de les figures planes més habituals.</figcaption>
</figure>

| Figura | Àrea | Perímetre |
|:---|:---:|:---:|
| Quadrat de costat $a$ | $A=a^2$ | $P=4a$ |
| Rectangle de base $b$ i altura $h$ | $A=bh$ | $P=2(b+h)$ |
| Triangle de base $b$, altura $h$ i costats $a,b,c$ | $A=\dfrac{bh}{2}$ | $P=a+b+c$ |
| Cercle de radi $r$ | $A=\pi r^2$ | $P=2\pi r$ |
| Polígon regular de $n$ costats de longitud $l$ i apotema $a_p$ | $A=\dfrac{P\,a_p}{2}$ | $P=n\,l$ |

!!! note "Perímetre o longitud de la circumferència"
    En el cercle, $2\pi r$ és la longitud de la **circumferència**, és a dir, la frontera del cercle.

#### 1.2 Geometria de l'espai

En els cossos geomètrics utilitzarem $A_T$ per indicar l'**àrea total** i $V$ per indicar el **volum**. L'àrea total és la suma de les àrees de totes les superfícies que formen el cos.

<figure markdown="span">
  ![Prisma rectangular, cilindre, piràmide de base quadrada, con i esfera amb els seus desplegaments i les fórmules de l'àrea total i del volum](../../img/calcul/fig_2_20_repas_geometria_espai.svg?v=12){ width="960" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_20_repas_geometria_espai.tex">Figura 2.20.</a></strong> Cossos geomètrics, desplegaments, àrees totals i volums.</figcaption>
</figure>

| Cos geomètric | Àrea total | Volum |
|:---|:---:|:---:|
| Prisma rectangular de costats $a,b,h$ | $A_T=2(ab+ah+bh)$ | $V=abh$ |
| Cilindre de radi $r$ i altura $h$ | $A_T=2\pi r^2+2\pi rh$ | $V=\pi r^2h$ |
| Piràmide regular de base quadrada i costat $a$ | $A_T=a^2+2aa_p$ | $V=\dfrac{a^2h}{3}$ |
| Con de radi $r$, altura $h$ i generatriu $g$ | $A_T=\pi r^2+\pi rg$ | $V=\dfrac{\pi r^2h}{3}$ |
| Esfera de radi $r$ | $A_T=4\pi r^2$ | $V=\dfrac{4}{3}\pi r^3$ |

!!! note "Símbols de les fórmules"
    $A_b$ és l'**àrea de la base**, $a_p$ és l'**apotema de la piràmide**, $g$ és la **generatriu del con** i $h$ és l'**altura** del cos.

    En el cilindre i el con, la base és un cercle; per tant, $A_b=\pi r^2$ i $P_b=2\pi r$.

### 2. Procediment general d'un problema d'optimització

!!! example "Problema conductor: un rectangle de perímetre fix"
    Cerca les dimensions i l'àrea màxima d'un rectangle de costats $x$ i $y$ i perímetre de $20\,\text{cm}$.

Resoldrem aquest problema mentre presentem els passos del procediment.

!!! abstract "Definició: funció objectiu i restricció"
    La **funció objectiu** és la magnitud que volem fer màxima o mínima: una àrea, un volum, un perímetre, un cost, un benefici o una distància.

    La **restricció** és la relació que han de complir les variables del problema. Serveix per expressar la funció objectiu en funció d'una sola variable.

#### Pas 1. Fer un esquema i triar les variables

1. Dibuixa la situació i escriu-hi totes les dades conegudes.
2. Assigna una lletra a cada magnitud desconeguda i indica'n les unitats.
3. Decideix quina serà la variable principal, habitualment $x$.

En el problema conductor, $x$ i $y$ representen les longituds dels dos costats del rectangle, mesurades en centímetres. Totes dues han de ser positives.

!!! note "Les variables han de tenir significat"
    Si $x$ representa una longitud, caldrà exigir $x>0$. Si una altra longitud és, per exemple, $12-2x$, també haurem d'exigir $12-2x>0$.

#### Pas 2. Identificar la funció objectiu

Busca què demana exactament l'enunciat i escriu primer la seva fórmula natural, encara que depengui de més d'una variable. Aquestes són algunes possibilitats habituals:

| Què demana? | Funció objectiu | Què demana? | Funció objectiu |
|:---|:---:|:---|:---:|
| Àrea màxima | $A=$ fórmula de l'àrea | Volum màxim | $V=$ fórmula del volum |
| Perímetre mínim | $P=$ suma dels costats | Superfície mínima | $S=$ suma de les àrees |
| Cost mínim | $C=$ suma dels costos | Benefici màxim | $B=I-C$ |
| Ingressos màxims | $I=p\cdot q$ | Temps mínim | $T=$ suma dels temps |
| Distància mínima | $d=$ fórmula de la distància | Longitud mínima | $L=$ suma de les longituds |
| Producció màxima | $Q=$ quantitat produïda | Nombre màxim d'usuaris | $N=$ funció del nombre d'usuaris |

En molts enunciats, la funció objectiu no apareix directament. Abans cal combinar algunes relacions com aquestes:

| Relació útil | Fórmula | Relació útil | Fórmula |
|:---|:---:|:---|:---:|
| Velocitat, espai i temps | $v=\dfrac{e}{t}$, $t=\dfrac{e}{v}$, $e=v\cdot t$ | Temps total per trams | $T=\dfrac{e_1}{v_1}+\dfrac{e_2}{v_2}+\cdots$ |
| Consum total | $Q=g(v)\cdot t$ | Cost del combustible | $C_c=p_\ell\cdot Q$ |
| Cost del conductor | $C_h=p_h\cdot t$ | Cost total del viatge | $C=C_c+C_h$ |
| Ingressos | $I=p\cdot q$ | Benefici | $B=I-C_T$ |
| Cost total de producció | $C_T=C_F+c_u\cdot q$ | Cost mitjà per unitat | $C_m=\dfrac{C_T}{q}$ |
| Diferència entre tarifes | $D=\lvert f-g\rvert$ | Cost per parts | $C=p_1m_1+p_2m_2+\cdots$ |

Aquí, $e$ és l'espai recorregut, $v$ la velocitat, $t$ el temps, $g(v)$ el consum per unitat de temps, $Q$ la quantitat consumida, $p_\ell$ el preu per litre, $p_h$ el preu per hora, $p$ el preu de venda i $q$ la quantitat venuda o produïda. En la fórmula del cost total de producció, $C_F$ és el cost fix i $c_u$ el cost per unitat, quan aquest és constant.

!!! note "Comprova les unitats en els problemes de consum"
    Si $g(v)$ està expressat en litres per hora i $t$ en hores, aleshores $Q=g(v)\cdot t$ queda expressat en litres. No confonguis el **consum per hora** amb el **consum total del trajecte**.

Per exemple, si volem maximitzar l'àrea d'un rectangle de costats $x$ i $y$, comencem amb

$$
A(x,y)=xy.
$$

Aquesta encara no és la funció final perquè depèn de dues variables.

#### Pas 3. Escriure la restricció

Tradueix la informació que es manté fixa en una equació. Pot provenir d'un perímetre donat, una quantitat limitada de material, una suma de longituds, un pressupost o qualsevol altra condició de l'enunciat.

En l'exemple del rectangle, com que el perímetre és de $20\,\text{cm}$, la restricció és

$$
2x+2y=20.
$$

#### Pas 4. Obtenir una funció d'una sola variable

Aïlla una variable en la restricció i substitueix-la en la funció objectiu. En l'exemple,

$$
y=10-x
$$

i, per tant,

$$
A(x)=x(10-x)=10x-x^2.
$$

!!! tip "Com reconèixer que la funció objectiu ja està preparada"
    Abans de derivar, la magnitud que volem optimitzar ha d'estar escrita en funció d'**una sola variable**:

    $$
    F(x).
    $$

#### Pas 5. Determinar el domini del problema

El domini no depèn només de la fórmula, sinó també del context. Cal imposar que:

- les longituds, les àrees, els volums, les quantitats i els temps siguin positius;
- els denominadors no siguin zero;
- els radicands d'arrels d'índex parell siguin no negatius;
- totes les expressions que representen mesures tinguin sentit.

En l'exemple del rectangle,

$$
x>0,\qquad 10-x>0
\quad\Longrightarrow\quad
0<x<10.
$$

Per tant, el domini de la funció objectiu és $(0,10)$, amb $x$ expressada en centímetres.

#### Pas 6. Trobar els candidats a màxim o mínim

1. Calcula la derivada $F'(x)$.
2. Resol $F'(x)=0$.
3. Afegeix els punts del domini on $F'$ no existeix.
4. Si el domini és un interval tancat, considera també els seus extrems.

Només conservem els candidats que pertanyen al domini del problema.

En l'exemple del rectangle,

$$
A'(x)=10-2x.
$$

Resolem $A'(x)=0$:

$$
10-2x=0
\quad\Longrightarrow\quad
x=5.
$$

Com que $5\in(0,10)$, aquest valor és candidat a màxim.

#### Pas 7. Comprovar el màxim o el mínim

La comprovació principal es fa amb una **taula de signes de la derivada**:

1. Situa ordenadament els candidats dins del domini.
2. Divideix el domini en els intervals que determinen aquests punts.
3. Tria un valor de prova de cada interval i calcula-hi el signe de $F'$.
4. Indica si $F$ creix o decreix i identifica els màxims i els mínims.

En l'exemple, estudiem el signe de $A'(x)=10-2x$ dins del domini $(0,10)$:

| $x$ | $(0,5)$ | $5$ | $(5,10)$ |
|:---:|:---:|:---:|:---:|
| Valor de prova | $2$ | — | $8$ |
| Signe de $A'(x)$ | $+$ | $0$ | $-$ |
| Comportament de $A$ | creix | màxim | decreix |

Per tant, $x=5$ dona el màxim de l'àrea.

En general:

| Canvi de signe de $F'$ | Conclusió |
|:---:|:---|
| $+\longrightarrow-$ | Màxim |
| $-\longrightarrow+$ | Mínim |

La segona derivada es pot utilitzar com a comprovació complementària en un candidat $x=a$:

$$
F''(a)<0\Longrightarrow\text{màxim},
\qquad
F''(a)>0\Longrightarrow\text{mínim}.
$$

Si hi ha diversos candidats o extrems del domini, calcula el valor de $F$ en cadascun i compara'ls.

#### Pas 8. Interpretar i redactar la resposta

1. Recupera les altres variables mitjançant la restricció.
2. Comprova que totes les mesures siguin possibles i compleixin l'enunciat.
3. Respon exactament què es demana, amb les unitats corresponents.

En el rectangle, recuperem l'altra dimensió amb la restricció:

$$
y=10-x=10-5=5.
$$

L'àrea màxima és

$$
A(5)=5\cdot 5=25.
$$

Per tant, el rectangle d'àrea màxima és un quadrat de dimensions $5\,\text{cm}\times 5\,\text{cm}$ i la seva àrea màxima és de $25\,\text{cm}^2$.

!!! warning "Errors habituals"
    - Derivar una expressió que encara depèn de dues variables.
    - Oblidar el domini imposat pel context.
    - Donar només el valor de $x$ quan es demanen totes les dimensions.
    - No comprovar si el candidat correspon realment a un màxim o a un mínim.
    - Confondre el valor de la variable amb el valor màxim o mínim de la funció objectiu.

!!! note "Esquema resum"
    **Dibuix i variables** $\longrightarrow$ **funció objectiu** $\longrightarrow$ **restricció** $\longrightarrow$ **funció d'una variable** $\longrightarrow$ **domini** $\longrightarrow$ **derivada i candidats** $\longrightarrow$ **comprovació** $\longrightarrow$ **resposta contextualitzada**.

### 3. Problemes resolts pas a pas

#### 3.1 Problema geomètric: una capsa sense tapa

!!! example "Exemple 1. Minimització de la quantitat de cartró (basat en el problema 3 de l'extraordinària 2024)"
    Volem construir una capsa de base quadrada i sense tapa amb una capacitat de $4$ litres.

    **a)** Expressa l'altura de la capsa, $y$, en funció de la longitud del costat de la base, $x$.

    **b)** Quants centímetres ha de mesurar el costat de la base perquè la quantitat de cartró utilitzada sigui mínima? Quina ha de ser l'altura de la capsa? Quina quantitat de cartró serà necessària?

    **Pas 1. Fem un esquema i triem les variables**

    Anomenem:

    - $x$: longitud del costat de la base, en centímetres;
    - $y$: altura de la capsa, en centímetres.

    <figure markdown="span">
      ![Capsa oberta de base quadrada amb el costat x i l'altura y](../../img/calcul/fig_2_21_capsa_oberta.svg?v=7){ width="520" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_21_capsa_oberta.tex">Figura 2.21.</a></strong> Variables de la capsa de base quadrada i sense tapa.</figcaption>
    </figure>


    **Pas 2. Identifiquem la funció objectiu**

    Volem minimitzar la quantitat de cartró, és a dir, l'**àrea total de la capsa**. Com que no té tapa, està formada per una base quadrada i quatre cares rectangulars:

    $$
    S(x,y)=x^2+4xy.
    $$

    Aquesta expressió encara depèn de dues variables.

    **Pas 3. Escrivim la restricció**

    La capacitat de la capsa és fixa. Com que

    $$
    4\ \text{L}=4\,000\ \text{cm}^3,
    $$

    la fórmula del volum ens dona la restricció

    $$
    x^2y=4\,000.
    $$

    **Pas 4. Obtenim la funció objectiu d'una sola variable**

    Aïllem $y$ en la restricció:

    $$
    y=\frac{4\,000}{x^2}.
    $$

    Aquesta expressió respon l'**apartat a)**.

    Ho substituïm en l'expressió de la superfície:

    $$
    \begin{aligned}
    S(x)
      &=x^2+4x\cdot\frac{4\,000}{x^2}\\
      &=x^2+\frac{16\,000}{x}.
    \end{aligned}
    $$

    **Pas 5. Determinem el domini del problema**

    El costat de la base ha de ser positiu. Per tant,

    $$
    x>0.
    $$

    Per a qualsevol $x>0$, l'altura $y=4\,000/x^2$ també és positiva. Així, el domini contextual és

    $$
    D_S=(0,+\infty).
    $$

    **Pas 6. Trobem els candidats a mínim**

    Derivem la funció objectiu:

    $$
    S'(x)=2x-\frac{16\,000}{x^2}.
    $$

    Igualem la derivada a zero:

    $$
    \begin{aligned}
    2x-\frac{16\,000}{x^2}&=0,\\
    2x^3-16\,000&=0,\\
    x^3&=8\,000,\\
    x&=\sqrt[3]{8\,000}=20.
    \end{aligned}
    $$

    El valor $x=20$ pertany al domini i és l'únic candidat.

    **Pas 7. Comprovem que és un mínim**

    Podem escriure la derivada com

    $$
    S'(x)=\frac{2(x^3-8\,000)}{x^2}.
    $$

    Com que $x^2>0$ en tot el domini, el signe de $S'(x)$ depèn de $x^3-8\,000$:

    | $x$ | $(0,20)$ | $20$ | $(20,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $S'(5)=-630$ | $S'(20)=0$ | $S'(40)=70$ |
    | Signe de $S'(x)$ | $-$ | $0$ | $+$ |
    | Comportament de $S$ | decreix | mínim | creix |

    Per tant, $S$ passa de decreixent a creixent i assoleix un **mínim** quan $x=20$.

    També ho podem confirmar amb la segona derivada:

    $$
    S''(x)=2+\frac{32\,000}{x^3},
    \qquad
    S''(20)=6>0.
    $$

    **Pas 8. Recuperem les altres variables i responem**

    Calculem l'altura de la capsa:

    $$
    y=\frac{4\,000}{20^2}=10\ \text{cm}.
    $$

    La quantitat mínima de cartró és

    $$
    S(20)=20^2+\frac{16\,000}{20}
         =400+800
         =1\,200\ \text{cm}^2.
    $$

    Per tant, la resposta de l'**apartat b)** és que la capsa que utilitza menys cartró té una base quadrada de **$20$ cm de costat**, una altura de **$10$ cm** i necessita **$1\,200\ \text{cm}^2$ de cartró**.

#### 3.2 Funció objectiu donada: visitants d'una exposició

!!! example "Exemple 2. Màxim d'una funció donada (basat en el problema 3 de l'extraordinària 2022)"
    El nombre de visitants setmanals d'una exposició, expressat en **desenes de persones**, és donat per la funció

    $$
    f(x)=\frac{240x}{x^2-2x+4},
    \qquad x\geq 1,
    $$

    en què $x$ és el temps, expressat en setmanes, que fa que l'exposició està oberta al públic.

    **a)** Quantes persones visitaran l'exposició la primera setmana? Calcula la taxa de variació mitjana del nombre de visitants entre la setmana $1$ i la setmana $4$.

    **b)** Durant quina setmana es preveu que hi anirà més gent? Quants visitants s'estima que hi aniran aquella setmana?

    **c)** Què preveu el model que passarà amb el nombre setmanal de visitants quan hagi passat molt de temps?

    **Apartat a. Calculem els valors demanats**

    La primera setmana tenim

    $$
    f(1)=\frac{240\cdot 1}{1^2-2\cdot 1+4}=80.
    $$

    Com que la funció està expressada en desenes de persones, es preveu que hi vagin

    $$
    80\cdot 10=800\ \text{persones}.
    $$

    Per calcular la taxa de variació mitjana necessitem també

    $$
    f(4)=\frac{240\cdot 4}{4^2-2\cdot 4+4}=80.
    $$

    Per tant,

    $$
    \operatorname{TVM}_{[1,4]}
      =\frac{f(4)-f(1)}{4-1}
      =\frac{80-80}{3}
      =0.
    $$

    La taxa de variació mitjana és de **$0$ desenes de visitants per setmana**. Això indica que a les setmanes $1$ i $4$ es preveu el mateix nombre de visitants, encara que entre aquestes dues setmanes la funció no sigui constant.

    **Apartat b. Resolem el problema d'optimització**

    **Pas 1. Identifiquem la variable i les unitats**

    - $x$: temps transcorregut des de l'obertura, en setmanes;
    - $f(x)$: nombre de visitants setmanals, en desenes de persones.

    **Pas 2. Identifiquem la funció objectiu**

    Volem maximitzar el nombre de visitants. La funció objectiu ja apareix directament en l'enunciat:

    $$
    f(x)=\frac{240x}{x^2-2x+4}.
    $$

    **Pas 3. Identifiquem la restricció**

    No cal obtenir cap relació entre dues variables perquè la funció objectiu ja depèn només de $x$. La restricció prové del context:

    $$
    x\geq 1.
    $$

    **Pas 4. Comprovem que tenim una funció d'una sola variable**

    La funció objectiu ja té la forma $f(x)$; per tant, no cal aïllar ni substituir cap altra variable.

    **Pas 5. Determinem el domini del problema**

    El denominador es pot escriure com

    $$
    x^2-2x+4=(x-1)^2+3>0.
    $$

    La fórmula està definida per a tot nombre real, però el temps del problema compleix $x\geq 1$. Així, el domini contextual és

    $$
    D_f=[1,+\infty).
    $$

    **Pas 6. Trobem els candidats a màxim**

    Apliquem la regla del quocient:

    $$
    \begin{aligned}
    f'(x)
      &=\frac{240(x^2-2x+4)-240x(2x-2)}{(x^2-2x+4)^2}\\
      &=\frac{240(4-x^2)}{(x^2-2x+4)^2}.
    \end{aligned}
    $$

    Igualem la derivada a zero. Com que el denominador és sempre positiu, només cal anul·lar el numerador:

    $$
    240(4-x^2)=0
    \quad\Longrightarrow\quad
    x^2=4
    \quad\Longrightarrow\quad
    x=\pm 2.
    $$

    Descartem $x=-2$ perquè no pertany al domini. El candidat interior és $x=2$ i també hem de tenir present l'extrem $x=1$ del domini.

    **Pas 7. Comprovem que és un màxim amb una taula**

    El denominador de $f'(x)$ és positiu. Per tant, el signe de la derivada depèn de $4-x^2$:

    | $x$ | $[1,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $f'(1)=80$ | $f'(2)=0$ | $f'(3)=-\dfrac{1\,200}{49}$ |
    | Signe de $f'(x)$ | $+$ | $0$ | $-$ |
    | Comportament de $f$ | creix | màxim | decreix |

    La funció creix fins a $x=2$ i decreix a partir d'aquest valor. Per tant, assoleix el **màxim absolut** en $x=2$.

    **Pas 8. Calculem el valor màxim i interpretem el resultat**

    $$
    f(2)=\frac{240\cdot 2}{2^2-2\cdot 2+4}=120.
    $$

    Com que $f$ està expressada en desenes de persones,

    $$
    120\cdot 10=1\,200\ \text{persones}.
    $$

    Per tant, es preveu que el nombre màxim de visitants s'assoleixi durant la **segona setmana**, amb **$1\,200$ visitants**.

    **Apartat c. Estudiem el comportament a llarg termini**

    Calculem el límit quan el nombre de setmanes tendeix a infinit:

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
      &=\lim_{x\to+\infty}\frac{240x}{x^2-2x+4}\\
      &=\lim_{x\to+\infty}\frac{\dfrac{240}{x}}
        {1-\dfrac{2}{x}+\dfrac{4}{x^2}}\\
      &=0.
    \end{aligned}
    $$

    Com que $f(x)$ està expressada en desenes de persones, el model preveu que, amb el pas del temps, el nombre setmanal de visitants **s'aproximarà a zero**. Això no vol dir que en una setmana concreta hagi de ser exactament zero, sinó que l'afluència prevista serà cada vegada més petita.

    <figure markdown="span">
      ![Gràfica del nombre setmanal de visitants amb un màxim a la segona setmana](../../img/calcul/fig_2_22_visitants_exposicio.svg?v=4){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_22_visitants_exposicio.tex">Figura 2.22.</a></strong> Evolució prevista del nombre setmanal de visitants, expressat en desenes de persones.</figcaption>
    </figure>
#### 3.3 Benefici màxim d'una empresa de joguines

!!! example "Exemple 3. Benefici màxim d'una empresa de joguines"
    Per Nadal, **Joguines Pallaresos** fabrica $18$ milers de joguines entre nines i cotxes. Anomenem $x$ els milers de nines i $y$ els milers de cotxes. S'estima que el benefici de l'empresa, expressat en milers d'euros, és

    $$
    B(x,y)=x^2y+60y+20.
    $$

    **a)** Troba la funció que expressa el benefici tenint en compte només els milers de nines.

    **b)** Troba quin és el benefici quan tota la producció es dedica a fabricar cotxes; és a dir, quan no es fabrica cap nina.

    **c)** Troba els extrems relatius.

    **d)** Què passa si tota la producció es dedica a fabricar nines?

    **e)** Quina quantitat de nines i de cotxes s'ha de fabricar perquè el benefici sigui màxim?

    **f)** Descriu com es comporta el benefici en funció de la fabricació de nines.

    **Pas 1. Identifiquem les variables i les unitats**

    - $x$: milers de nines fabricades;
    - $y$: milers de cotxes fabricats;
    - $B(x,y)$: benefici, en milers d'euros.

    **Pas 2. Identifiquem la funció objectiu**

    Volem estudiar i maximitzar el benefici

    $$
    B(x,y)=x^2y+60y+20.
    $$

    **Pas 3. Escrivim la restricció**

    En total es fabriquen $18$ milers de joguines. Per tant,

    $$
    x+y=18
    \quad\Longrightarrow\quad
    y=18-x.
    $$

    **Pas 4. Obtenim la funció d'una sola variable — apartat a)**

    Substituïm $y=18-x$ en la funció objectiu:

    $$
    \begin{aligned}
    B(x)
      &=x^2(18-x)+60(18-x)+20\\
      &=-x^3+18x^2-60x+1\,100.
    \end{aligned}
    $$

    Aquesta és la funció que expressa el benefici en funció dels **milers de nines**.

    **Apartat b. Tota la producció es dedica als cotxes**

    Si no es fabrica cap nina, $x=0$ i $y=18$. Aleshores,

    $$
    B(0)=-0^3+18\cdot0^2-60\cdot0+1\,100=1\,100.
    $$

    Com que el benefici està expressat en milers d'euros, l'empresa obté un benefici de

    $$
    1\,100\cdot1\,000=1\,100\,000\ \text{€}.
    $$

    **Pas 5. Determinem el domini del problema**

    Les quantitats de nines i cotxes no poden ser negatives:

    $$
    x\geq0,
    \qquad
    18-x\geq0.
    $$

    Per tant, el domini contextual és

    $$
    D_B=[0,18].
    $$

    **Pas 6. Trobem els extrems relatius — apartat c)**

    Derivem i igualem a zero:

    $$
    B'(x)=-3x^2+36x-60=-3(x-2)(x-10),
    $$

    $$
    B'(x)=0
    \quad\Longrightarrow\quad
    x=2
    \quad\text{o}\quad
    x=10.
    $$

    La segona derivada és

    $$
    B''(x)=-6x+36.
    $$

    En $x=2$,

    $$
    B''(2)=24>0,
    $$

    de manera que hi ha un **mínim relatiu**. El seu valor és

    $$
    B(2)=1\,044,
    $$

    és a dir, $1\,044\,000$ €.

    En $x=10$,

    $$
    B''(10)=-24<0,
    $$

    de manera que hi ha un **màxim relatiu**. El seu valor és

    $$
    B(10)=1\,300,
    $$

    és a dir, $1\,300\,000$ €.

    **Apartat d. Tota la producció es dedica a les nines**

    Si $x=18$, aleshores $y=0$ i

    $$
    B(18)=20.
    $$

    En aquest cas, l'empresa obté un benefici de només **$20\,000$ €**.

    **Pas 7. Estudiem la monotonia i comprovem el màxim — apartat e)**

    | $x$ | $[0,2)$ | $2$ | $(2,10)$ | $10$ | $(10,18]$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Comprovació | $B'(1)=-27$ | $B'(2)=0$ | $B'(5)=45$ | $B'(10)=0$ | $B'(15)=-195$ |
    | Signe de $B'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ |
    | Comportament de $B$ | decreix | mínim relatiu | creix | màxim relatiu | decreix |

    Per trobar el màxim absolut en $[0,18]$, comparem els punts crítics i els extrems del domini:

    | $x$ | $0$ | $2$ | $10$ | $18$ |
    |:---:|:---:|:---:|:---:|:---:|
    | $B(x)$, en milers d'euros | $1\,100$ | $1\,044$ | $1\,300$ | $20$ |

    El valor més gran és $B(10)=1\,300$. Quan $x=10$,

    $$
    y=18-10=8.
    $$

    Per tant, per obtenir el benefici màxim cal fabricar **$10$ milers de nines i $8$ milers de cotxes**. El benefici màxim és de **$1\,300\,000$ €**.

    **Pas 8. Descrivim el comportament del benefici — apartat f)**

    - Entre $0$ i $2$ milers de nines, el benefici **decreix** de $1\,100$ a $1\,044$ milers d'euros.
    - Entre $2$ i $10$ milers de nines, el benefici **creix** fins al màxim de $1\,300$ milers d'euros.
    - Entre $10$ i $18$ milers de nines, el benefici **decreix** fins a $20$ milers d'euros.

    <figure markdown="span">
      ![Gràfica del benefici de Joguines Pallaresos en funció dels milers de nines](../../img/calcul/fig_2_23_benefici_empresa.svg?v=4){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_23_benefici_empresa.tex">Figura 2.23.</a></strong> Benefici en funció dels milers de nines fabricades.</figcaption>
    </figure>

#### 3.4 Contractació de venedors i ingressos màxims

!!! example "Exemple 4. Contractació de venedors i ingressos màxims"
    Una secció d'**El Corte Inglés** disposa de $12$ venedors. Cadascun genera uns ingressos mensuals per vendes de $4\,800$ €. S'estima que, per cada venedor nou que es contracti, els ingressos que genera **cadascun dels venedors** disminueixen en $200$ € mensuals.

    **a)** Troba la funció que determina els ingressos mensuals totals si es contracten $x$ venedors més.

    **b)** Quants venedors ha de tenir en total la secció perquè els ingressos siguin màxims? Quins són aquests ingressos màxims?

    **Pas 1. Identifiquem la variable i les unitats**

    - $x$: nombre de venedors nous que es contracten;
    - $12+x$: nombre total de venedors;
    - $I(x)$: ingressos mensuals totals de la secció, en euros.

    **Pas 2. Identifiquem la funció objectiu**

    Volem maximitzar els ingressos mensuals totals. Com que

    $$
    \text{ingressos totals}
      =\text{nombre de venedors}\cdot\text{ingrés per venedor},
    $$

    la funció objectiu serà el producte d'aquestes dues quantitats.

    **Pas 3. Escrivim com depèn cada quantitat de $x$**

    Si es contracten $x$ venedors més, la secció tindrà

    $$
    12+x
    $$

    venedors. Alhora, l'ingrés mensual que genera cadascun disminuirà $200x$ euros i serà

    $$
    4\,800-200x.
    $$

    **Pas 4. Obtenim la funció d'una sola variable — apartat a)**

    $$
    \begin{aligned}
    I(x)
      &=(12+x)(4\,800-200x)\\
      &=-200x^2+2\,400x+57\,600.
    \end{aligned}
    $$

    Per tant, la funció que determina els ingressos mensuals és

    $$
    \boxed{I(x)=-200x^2+2\,400x+57\,600}.
    $$

    **Pas 5. Determinem el domini del problema**

    No podem contractar un nombre negatiu de venedors i l'ingrés per venedor no pot ser negatiu:

    $$
    x\geq0,
    \qquad
    4\,800-200x\geq0.
    $$

    De la segona desigualtat obtenim $x\leq24$. Així, per estudiar la funció considerem l'interval

    $$
    0\leq x\leq24.
    $$

    En el context del problema, però, $x$ només pot prendre **valors enters**, perquè representa un nombre de persones.

    **Pas 6. Trobem els candidats a màxim**

    Derivem la funció d'ingressos:

    $$
    I'(x)=-400x+2\,400.
    $$

    Igualem la derivada a zero:

    $$
    -400x+2\,400=0
    \quad\Longrightarrow\quad
    x=6.
    $$

    El valor $x=6$ pertany al domini i és enter, de manera que és un candidat vàlid.

    **Pas 7. Comprovem el màxim amb una taula**

    | $x$ | $[0,6)$ | $6$ | $(6,24]$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $I'(2)=1\,600$ | $I'(6)=0$ | $I'(10)=-1\,600$ |
    | Signe de $I'(x)$ | $+$ | $0$ | $-$ |
    | Comportament de $I$ | creix | màxim | decreix |

    La funció creix fins a $x=6$ i decreix a partir d'aquest valor. Per tant, $x=6$ proporciona el màxim absolut. També ho podem confirmar amb la segona derivada:

    $$
    I''(x)=-400<0.
    $$

    **Pas 8. Calculem i interpretem el resultat — apartat b)**

    Si es contracten $6$ venedors nous, la secció tindrà

    $$
    12+6=18\ \text{venedors}.
    $$

    Els ingressos mensuals màxims seran

    $$
    \begin{aligned}
    I(6)
      &=-200\cdot6^2+2\,400\cdot6+57\,600\\
      &=64\,800\ \text{€}.
    \end{aligned}
    $$

    Per tant, la secció ha de tenir **$18$ venedors en total** i obtindrà uns ingressos mensuals màxims de **$64\,800$ €**.

    <figure markdown="span">
      ![Gràfica dels ingressos mensuals en funció del nombre de venedors nous](../../img/calcul/fig_2_24_ingressos_venedors.svg?v=3){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_24_ingressos_venedors.tex">Figura 2.24.</a></strong> Ingressos mensuals en funció del nombre de venedors nous contractats.</figcaption>
    </figure>

#### 3.5 Estudi i optimització d'una funció a trossos

!!! example "Exemple 5. Evolució del preu d'un producte"
    La funció següent representa el preu d'un producte, expressat en **centenars d'euros**, en funció del temps $x$, expressat en anys:

    $$
    f(x)=
    \begin{cases}
    (x-1)^2+2, & 0\leq x<3,\\[4pt]
    \dfrac{4x^2}{x^2-3}, & x\geq3.
    \end{cases}
    $$

    **a)** A quin preu es ven el producte a l'inici de la seva vida?

    **b)** La fórmula del segon tram podria fer pensar en alguna asímptota vertical. Justifica si s'ha de tenir en compte o no.

    **c)** Troba la funció derivada.

    **d)** Estudia si la funció és contínua i derivable en tot el seu domini. Si hi ha algun punt on no sigui contínua o derivable, justifica-ho.

    **e)** Estudia el comportament del preu durant els primers cinc anys.

    **f)** Representa gràficament la funció.

    **g)** Després dels primers cinc anys, a quin valor no tornarà a arribar mai el preu de venda, per més temps que passi?

    **Pas 1. Identifiquem les variables i el domini**

    - $x$: temps transcorregut, en anys;
    - $f(x)$: preu del producte, en centenars d'euros.

    El temps no pot ser negatiu i els dos trams cobreixen tots els valors a partir de zero. Per tant,

    $$
    D_f=[0,+\infty).
    $$

    **Apartat a. Calculem el preu inicial**

    A l'inici, $x=0$. Hem d'utilitzar el primer tram:

    $$
    f(0)=(0-1)^2+2=3.
    $$

    Com que la funció està expressada en centenars d'euros,

    $$
    3\cdot100=300\ \text{€}.
    $$

    Per tant, el producte es ven inicialment per **$300$ €**.

    **Apartat b. Estudiem les possibles asímptotes verticals**

    El denominador del segon tram s'anul·la quan

    $$
    x^2-3=0
    \quad\Longrightarrow\quad
    x=\pm\sqrt3.
    $$

    Tanmateix, la fracció

    $$
    \frac{4x^2}{x^2-3}
    $$

    només defineix la funció quan $x\geq3$. Els valors $-\sqrt3$ i $\sqrt3$ no pertanyen a aquest interval. En $x=\sqrt3$ s'utilitza el primer tram, que està perfectament definit.

    Per tant, aquests zeros del denominador **no produeixen cap asímptota vertical** en la funció a trossos. En el tram $x\geq3$, el denominador és sempre positiu.

    **Apartat c. Calculem la derivada de cada tram**

    Per al primer tram,

    $$
    \frac{d}{dx}\left[(x-1)^2+2\right]=2(x-1).
    $$

    Per al segon tram, apliquem la regla del quocient:

    $$
    \begin{aligned}
    \frac{d}{dx}\left(\frac{4x^2}{x^2-3}\right)
      &=\frac{8x(x^2-3)-4x^2(2x)}{(x^2-3)^2}\\
      &=\frac{-24x}{(x^2-3)^2}.
    \end{aligned}
    $$

    Així, en els intervals oberts de cada tram,

    $$
    f'(x)=
    \begin{cases}
    2(x-1), & 0<x<3,\\[6pt]
    -\dfrac{24x}{(x^2-3)^2}, & x>3.
    \end{cases}
    $$

    En $x=3$ cal estudiar les derivades laterals. En l'extrem $x=0$ només té sentit considerar la derivada lateral dreta.

    **Apartat d. Estudiem la continuïtat i la derivabilitat en $x=3$**

    Cada expressió és contínua dins del seu interval. En el punt d'unió,

    $$
    \lim_{x\to3^-}f(x)
      =(3-1)^2+2
      =6,
    $$

    $$
    \lim_{x\to3^+}f(x)
      =\frac{4\cdot3^2}{3^2-3}
      =\frac{36}{6}
      =6,
    $$

    i, com que el segon tram inclou $x=3$,

    $$
    f(3)=6.
    $$

    Els dos límits laterals i el valor de la funció coincideixen. Per tant, $f$ és **contínua en $x=3$** i, en conseqüència, és contínua en tot el domini.

    Calculem ara les derivades laterals:

    $$
    f'(3^-)=2(3-1)=4,
    $$

    $$
    f'(3^+)
      =\frac{-24\cdot3}{(3^2-3)^2}
      =\frac{-72}{36}
      =-2.
    $$

    Com que les derivades laterals no coincideixen, $f$ **no és derivable en $x=3$**. És derivable a l'interior del domini en tots els altres punts; en $x=0$ només existeix la derivada lateral dreta.

    **Apartat e. Estudiem el comportament durant els primers cinc anys**

    En el primer tram,

    $$
    f'(x)=2(x-1).
    $$

    Aquesta derivada és negativa si $0<x<1$, val zero en $x=1$ i és positiva si $1<x<3$.

    En el segon tram,

    $$
    f'(x)=\frac{-24x}{(x^2-3)^2}.
    $$

    Per a $x\geq3$, el numerador és negatiu i el denominador és positiu. Per tant, $f'(x)<0$.

    | $x$ | $[0,1)$ | $1$ | $(1,3)$ | $3$ | $(3,5]$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Comprovació | $f'(0{,}5)=-1$ | $f'(1)=0$ | $f'(2)=2$ | $f'(3^-)=4$, $f'(3^+)=-2$ | $f'(4)=-\dfrac{96}{169}$ |
    | Signe de $f'(x)$ | $-$ | $0$ | $+$ | no existeix | $-$ |
    | Comportament de $f$ | decreix | mínim | creix | màxim | decreix |

    Els valors principals són

    $$
    f(0)=3,
    \qquad
    f(1)=2,
    \qquad
    f(3)=6,
    \qquad
    f(5)=\frac{100}{22}=\frac{50}{11}\approx4{,}55.
    $$

    Durant els primers cinc anys:

    - el preu baixa de $300$ € a **$200$ €** durant el primer any;
    - després puja fins al màxim de **$600$ €** quan han passat tres anys;
    - finalment torna a baixar i, al cap de cinc anys, és aproximadament de **$454{,}55$ €**.

    **Apartat f. Representem la funció**

    <figure markdown="span">
      ![Gràfica del preu d'un producte definit mitjançant una funció a trossos](../../img/calcul/fig_2_25_preu_producte_trossos.svg?v=2){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_25_preu_producte_trossos.tex">Figura 2.25.</a></strong> Evolució del preu del producte, expressat en centenars d'euros.</figcaption>
    </figure>

    **Apartat g. Estudiem el comportament a llarg termini**

    Per a temps grans s'utilitza el segon tram. Calculem

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
      &=\lim_{x\to+\infty}\frac{4x^2}{x^2-3}\\
      &=\lim_{x\to+\infty}\frac{4}{1-\dfrac{3}{x^2}}\\
      &=4.
    \end{aligned}
    $$

    Així, $y=4$ és una asímptota horitzontal. A més, per a $x\geq3$,

    $$
    \frac{4x^2}{x^2-3}
      =4+\frac{12}{x^2-3}>4.
    $$

    El preu s'aproxima als $4$ centenars d'euros per valors superiors, però no hi arriba mai. Per tant, després dels primers cinc anys, el preu de venda **no tornarà a ser mai de $400$ €**, encara que s'hi aproximarà cada vegada més.
