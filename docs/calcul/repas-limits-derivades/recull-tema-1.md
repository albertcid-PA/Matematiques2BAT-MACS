<!-- Fitxer generat automàticament per scripts/genera_recull_tema_1.py. -->

<div class="pdf-topic-cover" markdown="1">

# 1. Repàs de límits i derivades {.pdf-topic-collection}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Repàs de límits](#repas-de-limits)
2. [Repàs de derivades](#repas-de-derivades)

</div>

</div>

## Repàs de límits

En aquest apartat repassarem com s'interpreta un límit a partir de la gràfica d'una funció. La part analítica es treballarà després.

### 1. Interpretació gràfica

!!! abstract "Definició: límit en un punt"
    Quan $x$ s'apropa a un punt $a$, podem observar la funció des dels dos costats:

    - el **límit per l'esquerra**, $\displaystyle\lim_{x\to a^-}f(x)$;
    - el **límit per la dreta**, $\displaystyle\lim_{x\to a^+}f(x)$.

    El límit $\displaystyle\lim_{x\to a}f(x)$ existeix quan els dos límits laterals coincideixen. El valor $f(a)$ és una informació diferent: pot coincidir amb el límit, ser diferent o no estar definit.

<figure markdown="span">
  ![Gràfica d'una funció amb continuïtat, discontinuïtats evitables, un salt finit, una asímptota vertical i dues asímptotes horitzontals](../../img/calcul/fig_1_1_interpretacio_grafica_limits.svg?v=5){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_1_interpretacio_grafica_limits.tex">Figura 1.1.</a></strong> Interpretació gràfica dels límits.</figcaption>
</figure>

#### Lectura dels punts destacats

| <span class="capcalera-limit"><span class="capcalera-limit__titol">Punt</span><span class="capcalera-limit__formula">$x=a$</span></span> | <span class="capcalera-limit"><span class="capcalera-limit__titol">Límit per l'esquerra</span><span class="capcalera-limit__formula">$\displaystyle\lim_{x\to a^-}f(x)=$</span></span> | <span class="capcalera-limit"><span class="capcalera-limit__titol">Límit per la dreta</span><span class="capcalera-limit__formula">$\displaystyle\lim_{x\to a^+}f(x)=$</span></span> | <span class="capcalera-limit"><span class="capcalera-limit__titol">Límit</span><span class="capcalera-limit__formula">$\displaystyle\lim_{x\to a}f(x)=$</span></span> | <span class="capcalera-limit"><span class="capcalera-limit__titol">Valor de la funció</span><span class="capcalera-limit__formula">$f(a)=$</span></span> | <span class="capcalera-limit"><span class="capcalera-limit__titol">Interpretació</span><span class="capcalera-limit__formula" aria-hidden="true">&nbsp;</span></span> |
|---|---:|---:|---:|---:|---|
| $x=-4$ | $3$ | $3$ | $3$ | No està definida | Discontinuïtat evitable |
| $x=-1$ | $4$ | $4$ | $4$ | $f(-1)=1$ | Evitable amb el punt desplaçat |
| $x=0$ | $3$ | $3$ | $3$ | $f(0)=3$ | Funció contínua |
| $x=2$ | $1$ | $4$ | No existeix | $f(2)=4$ | Discontinuïtat de salt finit |
| $x=5$ | $+\infty$ | $+\infty$ | $+\infty$ | No està definida | Discontinuïtat asimptòtica |

En particular:

- a $x=-4$, el límit existeix, però a la gràfica hi ha un forat: el valor $f(-4)$ no està definit;
- a $x=-1$, el límit existeix, però el valor de la funció està desplaçat;
- a $x=0$, es compleix $\displaystyle\lim_{x\to0}f(x)=f(0)=3$;
- a $x=2$, els límits laterals són diferents i, per tant, el límit no existeix;
- a $x=5$, la recta $x=5$ és una **asímptota vertical**.

#### Límits a l'infinit

La gràfica també mostra que

$$
\lim_{x\to-\infty}f(x)=1
\qquad\text{i}\qquad
\lim_{x\to+\infty}f(x)=2.
$$

Per tant, $y=1$ és una asímptota horitzontal quan $x\to-\infty$ i $y=2$ és una asímptota horitzontal quan $x\to+\infty$.

Una funció també pot créixer o decréixer indefinidament. Per exemple, si $f(x)=-x^3$,

$$
\lim_{x\to-\infty}(-x^3)=+\infty
\qquad\text{i}\qquad
\lim_{x\to+\infty}(-x^3)=-\infty.
$$

<figure markdown="span">
  ![Gràfica de menys x al cub, que creix cap a infinit quan x tendeix a menys infinit i decreix cap a menys infinit quan x tendeix a infinit](../../img/calcul/fig_1_2_comportament_infinits_menys_x_cub.svg?v=4){ width="700" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_2_comportament_infinits_menys_x_cub.tex">Figura 1.2.</a></strong> Comportament de $f(x)=-x^3$ als infinits.</figcaption>
</figure>

!!! note "Quan el límit a l'infinit no existeix"
    No totes les funcions s'apropen a un valor concret ni creixen cap a $+\infty$ o $-\infty$. Per exemple, $f(x)=\sin x$ oscil·la indefinidament entre $-1$ i $1$. Per això, $\displaystyle\lim_{x\to+\infty}\sin x$ i $\displaystyle\lim_{x\to-\infty}\sin x$ no existeixen.

    <figure markdown="span">
      ![Gràfica de la funció sinus, que oscil·la indefinidament entre menys u i u](../../img/calcul/fig_1_3_limit_inexistent_sinus.svg?v=4){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_3_limit_inexistent_sinus.tex">Figura 1.3.</a></strong> Exemple de límit a l'infinit que no existeix.</figcaption>
    </figure>

### 2. Càlcul analític

#### 2.1 Ordre dels infinits

Abans de comparar funcions, recordem què estem calculant. Quan $x$ pren valors cada vegada més grans, estudiem el comportament de $f(x)$:

$$
\lim_{x\to+\infty}f(x)=\;?
$$

Poden passar quatre situacions:

- $\displaystyle\lim_{x\to+\infty}f(x)=L$: la funció s'apropa a un nombre real $L$;
- $\displaystyle\lim_{x\to+\infty}f(x)=+\infty$: la funció creix indefinidament;
- $\displaystyle\lim_{x\to+\infty}f(x)=-\infty$: la funció decreix indefinidament;
- el límit **no existeix**: la funció no s'apropa a cap valor ni presenta un únic comportament.

La lletra $f$ representa qualsevol funció: polinòmica, racional, exponencial, radical, logarítmica, etc.

Quan diverses funcions tendeixen a $+\infty$, l'ordre dels infinits ens permet saber quina creix més de pressa. En les condicions indicades,

$$
\boxed{a^x>x^m>\sqrt[n]{x}>\log_b x}.
$$

En aquesta expressió, el signe $>$ significa **«creix més de pressa que»**.

| Exponencial | Potència | Radical | Logarítmica |
|:---:|:---:|:---:|:---:|
| $a^x$ | $x^m$ | $\sqrt[n]{x}$ | $\log_b x$ |
| $a>1$ | $m>1$ | $n\ge 2$ | $b>1$ i $x>0$ |
| Com més gran és $a$, més ràpid creix. | Com més gran és $m$, més ràpid creix. | Com més gran és $n$, més lentament creix. | Com més gran és $b$, més petit és el valor del logaritme. |

Per exemple, quan $x\to+\infty$,

$$
3^x>2^x,\qquad x^5>x^2,\qquad
\sqrt{x}>\sqrt[3]{x},\qquad
\log_2x>\log_{10}x.
$$

!!! example "Exemple 1. Aplicació de l'ordre dels infinits"
    Calculem

    $$
    \lim_{x\to+\infty}
    \left(\sqrt[10]{x}-\log_{10}x+50x^7-(1{,}1)^x\right).
    $$

    Segons l'ordre dels infinits, l'exponencial creix més de pressa que les potències i que el logaritme:

    $$
    (1{,}1)^x>x^7>x^{1/10}>\log_{10}x.
    $$

    $$
    \boxed{\displaystyle
    \lim_{x\to+\infty}
    \left(\sqrt[10]{x}-\log_{10}x+50x^7-(1{,}1)^x\right)
    =
    \lim_{x\to+\infty}
    \left(-(1{,}1)^x\right)
    =-\infty.}
    $$

    <figure markdown="span">
      ![Gràfica cartesiana de la funció exponencial menys 1 coma 1 elevat a x, que decreix cap a menys infinit](../../img/calcul/fig_1_4_ordre_infinits_exponencial.svg?v=4){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_4_ordre_infinits_exponencial.tex">Figura 1.4.</a></strong> $-(1{,}1)^x$ tendeix a $-\infty$ i determina el límit de l'exemple.</figcaption>
    </figure>

!!! example "Exemple 2. Funció polinòmica"
    Calculem

    $$
    \lim_{x\to+\infty}\left(-4x^5+2x^3-7x+6\right).
    $$

    Segons l'ordre dels infinits, el terme de grau més alt creix més de pressa:

    $$
    x^5>x^3>x>k.
    $$

    Aquí $k$ representa qualsevol constant real.

    Per tant, domina el terme $-4x^5$:

    $$
    \boxed{\begin{aligned}
    \lim_{x\to+\infty}\left(-4x^5+2x^3-7x+6\right)
    &=\lim_{x\to+\infty}\left(-4x^5\right)\\
    &=-4\cdot(+\infty)^5=-4\cdot(+\infty)=-\infty.
    \end{aligned}}
    $$

    Quan $x\to-\infty$, apliquem el mateix criteri i el terme dominant continua sent $-4x^5$:

    $$
    \boxed{\begin{aligned}
    \lim_{x\to-\infty}\left(-4x^5+2x^3-7x+6\right)
    &=\lim_{x\to-\infty}\left(-4x^5\right)\\
    &=-4\cdot(-\infty)^5=-4\cdot(-\infty)=+\infty.
    \end{aligned}}
    $$

    <figure markdown="span">
      ![Gràfica de la funció polinòmica menys 4x elevat a 5 més 2x elevat a 3 menys 7x més 6](../../img/calcul/fig_1_5_ordre_infinits_polinomica.svg?v=2){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_5_ordre_infinits_polinomica.tex">Figura 1.5.</a></strong> El terme dominant $-4x^5$ determina el comportament de la funció als dos infinits.</figcaption>
    </figure>

!!! example "Exemple 3. Funció racional que tendeix a un nombre"
    Calculem

    $$
    \lim_{x\to+\infty}\frac{6x^3-2x^2+5}{3x^3+x-4}.
    $$

    Apliquem l'ordre dels infinits al numerador i al denominador:

    $$
    x^3>x^2>k,
    \qquad
    x^3>x>k.
    $$

    Per tant, al numerador domina $6x^3$ i al denominador domina $3x^3$:

    $$
    \boxed{\displaystyle
    \lim_{x\to+\infty}\frac{6x^3-2x^2+5}{3x^3+x-4}
    =\lim_{x\to+\infty}\frac{6x^3}{3x^3}
    =\frac{6\cancel{x^3}}{3\cancel{x^3}}
    =\frac{6}{3}=2.}
    $$

    <figure markdown="span">
      ![Gràfica de la funció racional amb asímptota vertical x igual a 1 i asímptota horitzontal y igual a 2](../../img/calcul/fig_1_6_ordre_infinits_racional.svg?v=2){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_6_ordre_infinits_racional.tex">Figura 1.6.</a></strong> Quan $x\to+\infty$, la funció s'apropa a l'asímptota horitzontal $y=2$.</figcaption>
    </figure>

#### 2.2 Càlcul de límits quan $x$ tendeix a un punt

Per calcular

$$
\lim_{x\to a}f(x),
$$

el primer pas és **substituir $x=a$** en l'expressió. El resultat ens indica com hem de continuar.

!!! tip "Procediment"
    1. Substitueix $x=a$.
    2. Si obtens un nombre real, aquest és el valor del límit.
    3. Si obtens una expressió del tipus $\dfrac{k}{0}$, amb $k\neq0$, calcula els límits laterals i estudia els signes.
    4. Si obtens la indeterminació $\dfrac{0}{0}$ en una funció racional, factoritza, simplifica els factors comuns i torna a substituir.

##### Punt del domini

Les funcions polinòmiques i les funcions racionals són contínues en els punts del seu domini. Si la substitució dona un nombre real, el límit coincideix amb el valor de la funció.

!!! example "Exemple 1. Substitució directa"
    Calculem

    $$
    \lim_{x\to2}\left(x^2-3x+5\right).
    $$

    Substituïm $x=2$:

    $$
    \boxed{
    \lim_{x\to2}\left(x^2-3x+5\right)
    =2^2-3\cdot2+5=3.}
    $$

    <figure markdown="span">
      ![Gràfica de la funció polinòmica x al quadrat menys 3x més 5 amb el punt 2 coma 3 destacat](../../img/calcul/fig_1_7_limit_substitucio_directa.svg?v=2){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_7_limit_substitucio_directa.tex">Figura 1.7.</a></strong> El límit en $x=2$ coincideix amb el valor $f(2)=3$.</figcaption>
    </figure>

##### Punt d'unió d'una funció a trossos

En un punt on canvia l'expressió d'una funció a trossos, calculem sempre els dos límits laterals. El límit existeix si coincideixen.

!!! example "Exemple 2. Límits laterals diferents"
    Sigui

    $$
    f(x)=
    \begin{cases}
    2x+1, & x<1,\\
    x^2-4x+4, & x\geq1.
    \end{cases}
    $$

    Per l'esquerra utilitzem el primer tros i per la dreta, el segon:

    $$
    \lim_{x\to1^-}f(x)
    =\lim_{x\to1^-}(2x+1)=3,
    $$

    $$
    \lim_{x\to1^+}f(x)
    =\lim_{x\to1^+}(x^2-4x+4)=1.
    $$

    Com que els límits laterals són diferents,

    $$
    \boxed{\displaystyle\lim_{x\to1}f(x)\text{ no existeix}.}
    $$

    La funció presenta una **discontinuïtat de salt finit** en $x=1$. A més, $f(1)=1$ perquè el punt $x=1$ pertany al segon tros.

    <figure markdown="span">
      ![Gràfica de la funció a trossos amb un cercle buit en el punt 1 coma 3 i un punt ple en el punt 1 coma 1](../../img/calcul/fig_1_8_limit_funcio_trossos.svg?v=6){ width="330" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_8_limit_funcio_trossos.tex">Figura 1.8.</a></strong> Els límits laterals diferents originen un salt finit en $x=1$.</figcaption>
    </figure>

##### Quocient del tipus $\dfrac{k}{0}$, amb $k\neq0$

Si el numerador tendeix a un nombre diferent de zero i el denominador tendeix a zero, els límits laterals presenten un comportament infinit. Per determinar-ne el signe, estudiem si el denominador s'apropa a zero per valors positius o negatius.

!!! example "Exemple 3. Asímptota vertical"
    Calculem

    $$
    \lim_{x\to1}\frac{x+2}{x-1}.
    $$

    La substitució dona

    $$
    \frac{1+2}{1-1}=\frac{3}{0}.
    $$

    No és una indeterminació. A l'esquerra de $1$, $x-1$ és negatiu; a la dreta, és positiu. Per tant,

    $$
    \lim_{x\to1^-}\frac{x+2}{x-1}
    =\frac{3}{0^-}=-\infty,
    $$

    $$
    \lim_{x\to1^+}\frac{x+2}{x-1}
    =\frac{3}{0^+}=+\infty.
    $$

    Els límits laterals són diferents i, per tant, el límit en $x=1$ no existeix. La recta $x=1$ és una asímptota vertical.

    <figure markdown="span">
      ![Gràfica de la funció x més 2 dividit entre x menys 1 amb una asímptota vertical en x igual a 1](../../img/calcul/fig_1_9_limit_assimptota_vertical.svg?v=3){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_9_limit_assimptota_vertical.tex">Figura 1.9.</a></strong> Els límits laterals en $x=1$ són infinits de signe contrari.</figcaption>
    </figure>

!!! note "Regla de signes amb zero"
    Tractem $0^+$ com un nombre positiu molt petit i $0^-$ com un nombre negatiu molt petit. Apliquem les regles habituals dels signes:

    $$
    \frac{+}{0^+}=+\infty,
    \qquad
    \frac{+}{0^-}=-\infty,
    \qquad
    \frac{-}{0^+}=-\infty,
    \qquad
    \frac{-}{0^-}=+\infty.
    $$

##### Indeterminació $\dfrac{0}{0}$ en una funció racional

Si el numerador i el denominador tendeixen a zero, encara no podem saber el valor del límit. Factoritzem tots dos polinomis, simplifiquem els factors comuns i tornem a substituir.

!!! example "Exemple 4. Discontinuïtat evitable"
    Calculem

    $$
    \lim_{x\to2}\frac{x^2-x-2}{x^2-4}.
    $$

    La substitució dona la indeterminació

    $$
    \frac{2^2-2-2}{2^2-4}=\frac{0}{0}.
    $$

    Ara factoritzem i simplifiquem el factor comú $x-2$:

    $$
    \begin{aligned}
    \lim_{x\to2}\frac{x^2-x-2}{x^2-4}
    &=\lim_{x\to2}\frac{(x-2)(x+1)}{(x-2)(x+2)}\\
    &=\lim_{x\to2}\frac{x+1}{x+2}
    =\frac{2+1}{2+2}=\frac34.
    \end{aligned}
    $$

    Per tant,

    $$
    \boxed{\displaystyle
    \lim_{x\to2}\frac{x^2-x-2}{x^2-4}=\frac34.}
    $$

    La funció original no està definida en $x=2$, però el límit existeix i és finit: hi ha una discontinuïtat evitable en el punt $\left(2,\frac34\right)$.

    <figure markdown="span">
      ![Gràfica de la funció racional amb una discontinuïtat evitable en el punt 2 coma tres quarts](../../img/calcul/fig_1_10_limit_discontinuitat_evitable.svg?v=5){ width="680" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_10_limit_discontinuitat_evitable.tex">Figura 1.10.</a></strong> El forat en $\left(2,\frac34\right)$ representa una discontinuïtat evitable.</figcaption>
    </figure>

<div class="pdf-topic-section-break"></div>

## Repàs de derivades

En aquest apartat recordarem les derivades de les funcions elementals i les regles que permeten derivar operacions i composicions de funcions. Cada regla va seguida dels exemples treballats a classe.

### 1. Definició de derivada

!!! abstract "Definició: derivada en un punt"
    La **taxa de variació mitjana** d'una funció $f$ entre $x=a$ i $x=a+h$ és

    $$
    \frac{f(a+h)-f(a)}{h}.
    $$

    Quan fem que $h$ s'apropi a zero, si el límit existeix, anomenem **derivada de $f$ en el punt $a$** el valor

    $$
    \boxed{f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}}.
    $$

    La derivada $f'(a)$ representa la **taxa de variació instantània** de la funció en $a$ i coincideix amb el pendent de la recta tangent a la gràfica en aquest punt.

Geomètricament, la taxa de variació mitjana és el pendent de la recta secant que passa pels punts $A=(a,f(a))$ i $B=(a+h,f(a+h))$. Quan $h$ s'apropa a zero, el punt $B$ s'apropa a $A$ i la recta secant s'apropa a la recta tangent.

<figure markdown="span">
  ![Interpretació geomètrica de la derivada mitjançant una recta secant que s'apropa a la tangent](../../img/calcul/fig_1_11_definicio_derivada.svg?v=4){ width="720" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_11_definicio_derivada.tex">Figura 1.11.</a></strong> Definició de derivada.</figcaption>
</figure>

### 2. Derivades de funcions elementals

#### Funció constant

!!! abstract "Definició: funció constant"
    Si $f(x)=k$, on $k$ és una constant, aleshores

    $$
    f'(x)=0.
    $$

!!! example "Exemple"
    Si $f(x)=5$, aleshores

    $$
    f'(x)=0.
    $$

#### Funció potència

!!! abstract "Definició: funció potència"
    Si $f(x)=x^n$, aleshores

    $$
    f'(x)=nx^{n-1}.
    $$

!!! example "Exemples"
    **Potència amb exponent natural**

    $$
    f(x)=x^5 \quad\longrightarrow\quad f'(x)=5x^4.
    $$

    **Potència amb exponent enter negatiu**

    $$
    f(x)=\frac{1}{x^5}=x^{-5}
    \quad\longrightarrow\quad
    f'(x)=-5x^{-6}=-\frac{5}{x^6}.
    $$

    **Potència amb exponent fraccionari**

    $$
    f(x)=\sqrt{x^3}=x^{\frac32}
    \quad\longrightarrow\quad
    f'(x)=\frac32x^{\frac12}
    =\frac32\sqrt{x}
    =\frac{3\sqrt{x}}{2}.
    $$

#### Funció exponencial

!!! abstract "Definició: funció exponencial"
    Si $f(x)=a^x$, aleshores

    $$
    f'(x)=\ln(a)\,a^x.
    $$

!!! example "Exemples"
    $$
    f(x)=5^x
    \quad\longrightarrow\quad
    f'(x)=\ln(5)\,5^x.
    $$

    En el cas particular de la funció exponencial de base $e$,

    $$
    f(x)=e^x
    \quad\longrightarrow\quad
    f'(x)=\ln(e)\,e^x=1\cdot e^x=e^x.
    $$

#### Funció logarítmica

!!! abstract "Definició: funció logarítmica"
    Si $f(x)=\log_a(x)$, aleshores

    $$
    f'(x)=\frac{1}{\ln(a)}\cdot\frac{1}{x}.
    $$

!!! example "Exemples"
    $$
    f(x)=\log_3(x)
    \quad\longrightarrow\quad
    f'(x)=\frac{1}{\ln(3)}\cdot\frac{1}{x}.
    $$

    En el cas particular del logaritme neperià,

    $$
    f(x)=\ln(x)
    \quad\longrightarrow\quad
    f'(x)=\frac{1}{x}.
    $$

### 3. Derivades d'operacions entre funcions

#### Suma i resta

!!! abstract "Regla de derivació: suma i resta"
    Si $h(x)=f(x)\pm g(x)$, aleshores

    $$
    h'(x)=f'(x)\pm g'(x).
    $$

!!! example "Exemple"
    $$
    f(x)=x^4+\ln(x).
    $$

    Per tant,

    $$
    f'(x)=(x^4)'+(\ln x)'=4x^3+\frac{1}{x}.
    $$

#### Multiplicació per una constant

!!! abstract "Regla de derivació: multiplicació per una constant"
    Si $h(x)=k f(x)$, aleshores

    $$
    h'(x)=k f'(x).
    $$

!!! example "Exemple"
    $$
    f(x)=6x^4.
    $$

    Per tant,

    $$
    f'(x)=6(x^4)'=6\cdot4x^3=24x^3.
    $$

#### Producte

!!! abstract "Regla de derivació: producte"
    Si $h(x)=f(x)g(x)$, aleshores

    $$
    h'(x)=f'(x)g(x)+f(x)g'(x).
    $$

!!! example "Exemple"
    $$
    f(x)=x^3 4^x.
    $$

    Apliquem la regla del producte:

    $$
    \begin{aligned}
    f'(x)
      &=(x^3)'4^x+x^3(4^x)'\\
      &=3x^2 4^x+x^3\ln(4)4^x\\
      &=3x^2 4^x+\ln(4)x^3 4^x.
    \end{aligned}
    $$

    !!! nota
        Ens agrada sempre posar les constants al davant.

#### Divisió

!!! abstract "Regla de derivació: divisió"
    Si

    $$
    h(x)=\frac{f(x)}{g(x)},
    $$

    aleshores

    $$
    h'(x)=\frac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}.
    $$

!!! example "Exemple"
    $$
    f(x)=\frac{x^3}{4^x}.
    $$

    Apliquem la regla de la divisió:

    $$
    \begin{aligned}
    f'(x)
      &=\frac{(x^3)'4^x-x^3(4^x)'}{(4^x)^2}\\
      &=\frac{3x^2 4^x-x^3\ln(4)4^x}{(4^x)^2}.
    \end{aligned}
    $$

    Ens agrada sempre posar les constants al davant i deixar l'expressió tan simplificada com sigui possible:

    $$
    \begin{aligned}
    f'(x)
      &=\frac{3x^2 4^x-\ln(4)x^3 4^x}{4^{2x}}\\
      &=\frac{3x^2 4^x}{4^{2x}}-\frac{\ln(4)x^3 4^x}{4^{2x}}\\
      &=\frac{3x^2}{4^x}-\frac{\ln(4)x^3}{4^x}.
    \end{aligned}
    $$

### 4. Composició: regla de la cadena

!!! abstract "Regla de derivació: composició"
    Si $h(x)=f(g(x))$, aleshores

    $$
    h'(x)=f'(g(x))g'(x).
    $$

    També podem escriure la composició com $f(g(x))=(f\circ g)(x)$.

!!! example "Exemple 1"
    $$
    h(x)=2^{x^2+3}.
    $$

    Prenem

    $$
    f(x)=2^x \quad\longrightarrow\quad f'(x)=\ln(2)2^x
    $$

    i

    $$
    g(x)=x^2+3 \quad\longrightarrow\quad g'(x)=2x.
    $$

    Apliquem la regla de la cadena:

    $$
    \begin{aligned}
    h'(x)
      &=\ln(2)2^{x^2+3}(x^2+3)'\\
      &=\ln(2)2^{x^2+3}\cdot2x.
    \end{aligned}
    $$

!!! example "Exemple 2"
    $$
    h(x)=\ln\sqrt{4x^2+1}.
    $$

    Apliquem successivament les derivades del logaritme i de l'arrel:

    $$
    \begin{aligned}
    h'(x)
      &=\frac{1}{\sqrt{4x^2+1}}\left(\sqrt{4x^2+1}\right)'\\
      &=\frac{1}{\sqrt{4x^2+1}}\cdot
        \frac{1}{2\sqrt{4x^2+1}}\cdot(4x^2+1)'\\
      &=\frac{1}{\sqrt{4x^2+1}}\cdot
        \frac{1}{2\sqrt{4x^2+1}}\cdot8x.
    \end{aligned}
    $$

    Simplifiquem:

    $$
    h'(x)
      =\frac{8x}{2\left(\sqrt{4x^2+1}\right)^2}
      =\frac{8x}{2(4x^2+1)}
      =\frac{4x}{4x^2+1}.
    $$
