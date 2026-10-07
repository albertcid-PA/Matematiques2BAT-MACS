# Repàs de derivades

En aquest apartat recordarem les derivades de les funcions elementals i les regles que permeten derivar operacions i composicions de funcions. Cada regla va seguida dels exemples treballats a classe.

## 1. Definició de derivada

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
  ![Interpretació geomètrica de la derivada mitjançant una recta secant que s'apropa a la tangent](../../img/calcul/fig_1_11_definicio_derivada.svg?v=1){ width="720" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_11_definicio_derivada.tex">Figura 1.11.</a></strong> Definició de derivada.</figcaption>
</figure>

## 2. Derivades de funcions elementals

### Funció constant

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

### Funció potència

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

### Funció exponencial

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

### Funció logarítmica

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

## 3. Derivades d'operacions entre funcions

### Suma i resta

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

### Multiplicació per una constant

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

### Producte

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

### Divisió

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

## 4. Composició: regla de la cadena

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
