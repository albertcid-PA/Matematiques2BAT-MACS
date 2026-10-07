# Representació de funcions

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
    5. Estudiar les altres **discontinuïtats**, especialment en funcions a trossos, i classificar-les.
    6. Calcular els límits quan $x\to-\infty$ i $x\to+\infty$ per trobar asímptotes horitzontals o branques infinites.
    7. Localitzar els candidats a **extrem relatiu** resolent $f'(x)=0$ i considerant els punts on $f'$ no existeix.
    8. Construir la **taula de monotonia** situant-hi tots els punts importants: discontinuïtats —incloses les asímptotes verticals—, extrems del domini, punts d'unió de les funcions a trossos i candidats a extrems relatius. Després, estudiar el signe de $f'$ en cada interval per determinar on la funció creix o decreix.

## 1. Esquema general

### Pas 1. Domini

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

### Pas 2. Tall amb l'eix d'ordenades

Per trobar el tall amb l'eix $Y$, substituïm $x=0$:

$$
y=f(0).
$$

El punt és $(0,f(0))$, sempre que $0$ pertanyi al domini.

### Pas 3. Talls amb l'eix d'abscisses

Per trobar els talls amb l'eix $X$, imposem $y=0$ i resolem:

$$
f(x)=0.
$$

Cada solució $x=a$ que pertanyi al domini dona un punt de tall $(a,0)$. Una funció pot tenir **diversos talls** amb l'eix $X$ o no tenir-ne cap.

En una funció racional, els zeros són els del numerador que també pertanyen al domini.

### Pas 4. Asímptotes verticals i discontinuïtats evitables

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

### Pas 5. Altres discontinuïtats

En funcions a trossos i en punts exclosos del domini, comparem els límits laterals i el valor de la funció.

!!! abstract "Definició: tipus de discontinuïtat"
    - **Evitable:** el límit existeix i és finit, però el valor de la funció no existeix o és diferent.
    - De **salt finit:** els dos límits laterals són finits, però diferents.
    - De **salt infinit:** almenys un dels límits laterals és infinit.

### Pas 6. Comportament a l'infinit i asímptotes

Calculem

$$
\lim_{x\to-\infty}f(x)
\qquad\text{i}\qquad
\lim_{x\to+\infty}f(x).
$$

!!! abstract "Definició: asímptota horitzontal"
    La recta $y=L$ és una **asímptota horitzontal** si

    $$
    \lim_{x\to-\infty}f(x)=L
    \qquad\text{o}\qquad
    \lim_{x\to+\infty}f(x)=L.
    $$

### Pas 7. Extrems relatius

!!! abstract "Definició: màxim i mínim relatius"
    Una funció té un **màxim relatiu** en $x=a$ si $f(a)$ és més gran que els valors propers. Té un **mínim relatiu** si $f(a)$ és més petit que els valors propers.

Calculem $f'(x)$ i estudiem els punts del domini on

$$
f'(x)=0
\qquad\text{o bé}\qquad
f'(x)\text{ no existeix}.
$$

El canvi de signe de $f'$ permet decidir si hi ha un màxim, un mínim o cap extrem.

### Pas 8. Creixement i decreixement

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

## 2. Què cal mirar segons el tipus de funció?

| Tipus | Informació especialment útil |
|:---|:---|
| Polinòmica | Domini $\mathbb{R}$, talls, comportament del terme de grau més alt i extrems. No té asímptotes. |
| Racional | Zeros del denominador, simplificacions, asímptotes verticals o horitzontals i intervals separats pel domini. |
| Irracional | Condició del radicand, extrems del domini i possibles tangents verticals. |
| Exponencial | El factor exponencial és sempre positiu; els límits depenen del signe de l'exponent. |
| Logarítmica | L'argument ha de ser positiu i acostuma a haver-hi una asímptota vertical quan l'argument tendeix a $0^+$. |
| A trossos | Cal estudiar la continuïtat i la derivabilitat en tots els punts d'unió. |
| Amb valor absolut | Primer s'escriu a trossos segons el signe de l'expressió interior. |

## 3. Exemple complet: funció polinòmica

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

    **Comportament a l'infinit.** Segons l'ordre dels infinits, el terme de grau més alt creix més de pressa:

    $$
    x^3>x^2>x>k,
    $$

    on $k$ representa qualsevol constant real. Per tant, domina el terme $x^3$:

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

    Una funció polinòmica no té asímptotes.

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
      ![Gràfica de la funció polinòmica amb els talls i els extrems relatius destacats](../../img/calcul/fig_2_11_representacio_polinomica.svg?v=1){ width="820" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_11_representacio_polinomica.tex">Figura 2.11.</a></strong> Representació de la funció polinòmica.</figcaption>
    </figure>

## 4. Exemple complet: funció racional

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

    **Discontinuïtat asimptòtica en $x=1$.** Substituint $x=1$ obtenim

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

    **Comportament a l'infinit.** Com que el numerador i el denominador tenen el mateix grau, dividim tots els termes per $x^2$, que és la potència de grau més alt:

    $$
    \begin{aligned}
    \lim_{x\to-\infty}f(x)
    &=\lim_{x\to-\infty}\frac{x^2-x-2}{x^2-3x+2}\\
    &=\lim_{x\to-\infty}
      \frac{1-\frac{1}{x}-\frac{2}{x^2}}
           {1-\frac{3}{x}+\frac{2}{x^2}}\\
    &=\frac{1-0-0}{1-0+0}=1.
    \end{aligned}
    $$

    De la mateixa manera,

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
    &=\lim_{x\to+\infty}\frac{x^2-x-2}{x^2-3x+2}\\
    &=\lim_{x\to+\infty}
      \frac{1-\frac{1}{x}-\frac{2}{x^2}}
           {1-\frac{3}{x}+\frac{2}{x^2}}\\
    &=\frac{1-0-0}{1-0+0}=1.
    \end{aligned}
    $$

    Així, $y=1$ és una asímptota horitzontal.

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
      ![Gràfica d'una funció racional amb una discontinuïtat evitable, una asímptota vertical i una asímptota horitzontal](../../img/calcul/fig_2_12_representacio_racional.svg?v=1){ width="820" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_12_representacio_racional.tex">Figura 2.12.</a></strong> Funció racional amb una discontinuïtat evitable i una discontinuïtat asimptòtica.</figcaption>
    </figure>

## 5. Funcions irracionals, exponencials i logarítmiques

En aquestes funcions el domini i els límits acostumen a determinar bona part de la gràfica.

!!! example "Exemple 3. Representació d'una funció irracional"
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

    de manera que la funció és contínua en $x=-2$ i no hi ha cap asímptota vertical. A més,

    $$
    \lim_{x\to+\infty}\sqrt{x+2}=+\infty,
    $$

    i, per tant, no hi ha cap asímptota horitzontal.

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
      ![Gràfica de la funció irracional arrel quadrada de x més dos](../../img/calcul/fig_2_13_representacio_irracional.svg?v=1){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_13_representacio_irracional.tex">Figura 2.13.</a></strong> Representació de $f(x)=\sqrt{x+2}$.</figcaption>
    </figure>

!!! example "Exemple 4. Representació d'una funció exponencial"
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

    **Discontinuïtats i comportament a l'infinit.** La funció és contínua en tot $\mathbb{R}$ i no té asímptotes verticals. Als extrems,

    $$
    \lim_{x\to-\infty}e^{-x}=+\infty,
    \qquad
    \lim_{x\to+\infty}e^{-x}=0.
    $$

    Així, $y=0$ és una asímptota horitzontal quan $x\to+\infty$.

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
      ![Gràfica de la funció exponencial e elevat a menys x](../../img/calcul/fig_2_14_representacio_exponencial.svg?v=1){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_14_representacio_exponencial.tex">Figura 2.14.</a></strong> Representació de $g(x)=e^{-x}$.</figcaption>
    </figure>

!!! example "Exemple 5. Representació d'una funció logarítmica"
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

    **Asímptota vertical i comportament a l'infinit.** En l'extrem esquerre del domini,

    $$
    \lim_{x\to2^+}\ln(x-2)=-\infty,
    $$

    de manera que $x=2$ és una asímptota vertical. D'altra banda,

    $$
    \lim_{x\to+\infty}\ln(x-2)=+\infty,
    $$

    i no hi ha cap asímptota horitzontal.

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
      ![Gràfica de la funció logarítmica logaritme neperià de x menys dos](../../img/calcul/fig_2_15_representacio_logaritmica.svg?v=1){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_15_representacio_logaritmica.tex">Figura 2.15.</a></strong> Representació de $h(x)=\ln(x-2)$.</figcaption>
    </figure>

## 6. Funcions a trossos i amb valor absolut

En una funció a trossos, cada expressió només es dibuixa dins del seu interval. En els punts d'unió cal comprovar:

1. els límits laterals;
2. el valor de la funció;
3. les derivades laterals, si s'estudia la derivabilitat.

Per a una funció amb valor absolut, primer localitzem els zeros de l'expressió interior i l'escrivim a trossos:

$$
|g(x)|=
\begin{cases}
g(x), & g(x)\geq0,\\
-g(x), & g(x)<0.
\end{cases}
$$

!!! note "Dibuix final"
    Els cercles buits indiquen que el punt no pertany al tros corresponent; els punts plens indiquen el valor real de la funció. La gràfica no s'ha de prolongar fora de l'interval assignat a cada expressió.

!!! example "Exemple 6. Funció a trossos amb una discontinuïtat asimptòtica"
    Representem la funció

    $$
    f(x)=
    \begin{cases}
    1+\dfrac{2}{x+1}, & x<1,\\[6pt]
    (x-3)^2-2, & x\geq1.
    \end{cases}
    $$

    **Domini i discontinuïtat asimptòtica.** La branca racional no està definida en $x=-1$. Com que

    $$
    \lim_{x\to-1^-}\left(1+\frac{2}{x+1}\right)=-\infty
    \qquad\text{i}\qquad
    \lim_{x\to-1^+}\left(1+\frac{2}{x+1}\right)=+\infty,
    $$

    la funció té una **discontinuïtat asimptòtica** i una asímptota vertical en $x=-1$. Per tant,

    $$
    D_f=\mathbb{R}\setminus\{-1\}.
    $$

    **Talls amb els eixos.** El tall amb l'eix $Y$ és $(0,3)$. Els talls amb l'eix $X$ són

    $$
    (-3,0),\qquad (3-\sqrt2,0)\qquad\text{i}\qquad(3+\sqrt2,0).
    $$

    **Continuïtat en el punt d'unió.** En $x=1$, els dos trossos coincideixen:

    $$
    \lim_{x\to1^-}f(x)=1+\frac{2}{1+1}=2,
    \qquad
    \lim_{x\to1^+}f(x)=(1-3)^2-2=2=f(1).
    $$

    Així, $f$ és **contínua en $x=1$**.

    **Comportament a l'infinit.** Quan $x\to-\infty$ s'aplica la branca racional, mentre que quan $x\to+\infty$ s'aplica la branca quadràtica:

    $$
    \lim_{x\to-\infty}f(x)
    =\lim_{x\to-\infty}\left(1+\frac{2}{x+1}\right)=1,
    $$

    $$
    \lim_{x\to+\infty}f(x)
    =\lim_{x\to+\infty}\left((x-3)^2-2\right)=+\infty.
    $$

    Per tant, $y=1$ és una **asímptota horitzontal quan $x\to-\infty$**. Cap a $+\infty$, la branca quadràtica creix indefinidament.

    **Derivabilitat en el punt d'unió.** Derivem cada tros:

    $$
    f'(x)=
    \begin{cases}
    -\dfrac{2}{(x+1)^2}, & x<1,\\[6pt]
    2(x-3), & x>1.
    \end{cases}
    $$

    Les derivades laterals en $x=1$ són

    $$
    f'(1^-)=-\frac12
    \qquad\text{i}\qquad
    f'(1^+)=-4.
    $$

    Com que no coincideixen, $f$ és **contínua però no derivable en $x=1$**: la gràfica presenta un punt angulós en $(1,2)$.

    **Vèrtex i monotonia.** La branca quadràtica està escrita en forma canònica,

    $$
    (x-3)^2-2,
    $$

    i té el vèrtex en $(3,-2)$, que és un mínim relatiu. Per estudiar la monotonia situem a la taula l'asímptota $x=-1$, el punt d'unió $x=1$ i el vèrtex $x=3$:

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,1)$ | $1$ | $(1,3)$ | $3$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $x=-2$ | — | $x=0$ | — | $x=2$ | — | $x=4$ |
    | Càlcul de la derivada | $f'(-2)=-2$ | no existeix | $f'(0)=-2$ | no existeix | $f'(2)=-2$ | $f'(3)=0$ | $f'(4)=2$ |
    | Signe de $f'(x)$ | $-$ | no existeix | $-$ | no existeix | $-$ | $0$ | $+$ |
    | Comportament de $f$ | decreix | asímptota vertical | decreix | punt angulós $(1,2)$, no és un extrem | decreix | mínim $(3,-2)$ | creix |

    <figure markdown="span">
      ![Gràfica d'una funció a trossos amb una branca racional, una branca quadràtica, una asímptota vertical i un punt d'unió continu però no derivable](../../img/calcul/fig_2_16_representacio_funcio_trossos.svg?v=1){ width="560" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_16_representacio_funcio_trossos.tex">Figura 2.16.</a></strong> Funció a trossos contínua però no derivable en el punt d'unió.</figcaption>
    </figure>

!!! example "Exemple 7. Representació d'una funció amb dos valors absoluts"
    Representem la funció

    $$
    f(x)=|-2x+4|-|x-3|.
    $$

    Els canvis de signe de les expressions interiors es produeixen en

    $$
    -2x+4=0\Longrightarrow x=2,
    \qquad
    x-3=0\Longrightarrow x=3.
    $$

    Construïm una taula per decidir si cal conservar o canviar el signe de cada expressió:

    | | $(-\infty,2)$ | $2$ | $(2,3)$ | $3$ | $(3,+\infty)$ |
    |:---|:---:|:---:|:---:|:---:|:---:|
    | Signe de $-2x+4$ | $+$ | $0$ | $-$ | $-$ | $-$ |
    | $\lvert-2x+4\rvert$ | <span class="formula-nowrap">$+(-2x+4)$</span> | $0$ | <span class="formula-nowrap">$-(-2x+4)$</span> | <span class="formula-nowrap">$-(-2x+4)$</span> | <span class="formula-nowrap">$-(-2x+4)$</span> |
    | Signe de $x-3$ | $-$ | $-$ | $-$ | $0$ | $+$ |
    | $-\lvert x-3\rvert$ | <span class="formula-nowrap">$+(x-3)$</span> | <span class="formula-nowrap">$+(x-3)$</span> | <span class="formula-nowrap">$+(x-3)$</span> | $0$ | <span class="formula-nowrap">$-(x-3)$</span> |

    Per tant,

    $$
    f(x)=
    \begin{cases}
    -x+1, & x<2,\\
    3x-7, & 2\leq x<3,\\
    x-1, & x\geq3.
    \end{cases}
    $$

    **Comportament a l'infinit.** Als extrems utilitzem el primer i el tercer tros, respectivament:

    $$
    \lim_{x\to-\infty}f(x)
    =\lim_{x\to-\infty}(-x+1)=+\infty,
    $$

    $$
    \lim_{x\to+\infty}f(x)
    =\lim_{x\to+\infty}(x-1)=+\infty.
    $$

    Per tant, la funció creix sense límit als dos extrems i no té asímptotes horitzontals.

    Els tres trossos són rectes. En els punts de canvi,

    $$
    f(2)=-1
    \qquad\text{i}\qquad
    f(3)=2,
    $$

    i les expressions dels dos costats donen el mateix valor. Així, la funció és contínua en tot $\mathbb{R}$.

    En canvi, els pendents són

    $$
    -1,\qquad 3\qquad\text{i}\qquad1.
    $$

    Com que el pendent canvia, $f$ **no és derivable en $x=2$ ni en $x=3$**. En $x=2$ el pendent passa de negatiu a positiu, de manera que $(2,-1)$ és un mínim relatiu. En canvi, en $x=3$ els pendents dels dos costats són positius: la funció continua creixent i $(3,2)$ és un punt angulós, però **no és un extrem relatiu**.

    <figure markdown="span">
      ![Gràfica de la funció valor absolut de menys dos x més quatre menys el valor absolut de x menys tres](../../img/calcul/fig_2_17_representacio_dos_valors_absoluts.svg?v=4){ width="760" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_17_representacio_dos_valors_absoluts.tex">Figura 2.17.</a></strong> Representació de $f(x)=|-2x+4|-|x-3|$.</figcaption>
    </figure>
