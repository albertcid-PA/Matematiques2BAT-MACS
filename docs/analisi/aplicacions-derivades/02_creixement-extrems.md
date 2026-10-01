# Creixement, decreixement i extrems

La derivada ens permet descriure com varia una funció. El signe de $f'(x)$ indica si la gràfica puja o baixa quan avancem d'esquerra a dreta.

## 1. Relació entre el signe de la derivada i el creixement

En un interval on la funció és derivable:

| Signe de la derivada | Comportament de la funció |
|:---:|:---|
| $f'(x)>0$ | $f$ és **creixent**. |
| $f'(x)<0$ | $f$ és **decreixent**. |
| $f'(x)=0$ en tot l'interval | $f$ és **constant**. |

!!! note "Recorda"
    Per determinar els intervals de creixement i decreixement no n'hi ha prou amb resoldre $f'(x)=0$. Cal estudiar el **signe** de $f'$ en els intervals que determinen els punts crítics i els punts on la funció o la derivada no existeixen.

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

!!! example "Exemple 1. Creixement, decreixement i extrems d'una funció polinòmica"
    Estudiem

    $$
    f(x)=x^3-3x^2-9x+5.
    $$

    El domini és $\mathbb{R}$ i

    $$
    f'(x)=3x^2-6x-9=3(x+1)(x-3).
    $$

    Els punts crítics són $x=-1$ i $x=3$. Estudiem el signe de $f'$:

    | Interval | $(-\infty,-1)$ | $(-1,3)$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $-$ | $+$ |
    | Comportament de $f$ | creix | decreix | creix |

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

## 2. Màxims i mínims relatius

Una funció té un **màxim relatiu** en $x=a$ si, a prop d'aquest punt, $f(a)$ és més gran que els valors veïns. Té un **mínim relatiu** si $f(a)$ és més petit que els valors veïns.

La classificació més segura es fa amb el canvi de signe de $f'$:

| Canvi de signe de $f'$ en $a$ | Classificació |
|:---:|:---|
| $+\longrightarrow-$ | Màxim relatiu |
| $-\longrightarrow+$ | Mínim relatiu |
| No canvia de signe | No és un extrem relatiu |

!!! warning "Un punt amb derivada zero no sempre és un extrem"
    En $f(x)=x^3$ tenim $f'(0)=0$, però la funció és creixent a tots dos costats de $0$. El punt $(0,0)$ és un punt d'inflexió amb tangent horitzontal, no un màxim ni un mínim.

Si $f'(a)=0$ i existeix $f''(a)$, també podem usar el criteri de la segona derivada:

$$
\begin{aligned}
f''(a)<0&\quad\Longrightarrow\quad\text{màxim relatiu},\\
f''(a)>0&\quad\Longrightarrow\quad\text{mínim relatiu}.
\end{aligned}
$$

Si $f''(a)=0$, aquest criteri no decideix res i cal estudiar el signe de $f'$.

!!! example "Exemple 2. Producte d'un polinomi i una exponencial"
    Estudiem els extrems de

    $$
    f(x)=x^2e^{-x}.
    $$

    Com que $e^{-x}>0$ per a tot $x$,

    $$
    f'(x)=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)
    $$

    té el mateix signe que $x(2-x)$. Els punts crítics són $x=0$ i $x=2$:

    | Interval | $(-\infty,0)$ | $(0,2)$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $-$ | $+$ | $-$ |
    | Comportament | decreix | creix | decreix |

    Així, $(0,0)$ és un mínim relatiu i

    $$
    \left(2,\frac{4}{e^2}\right)
    $$

    és un màxim relatiu.

## 3. Curvatura i punts d'inflexió

La segona derivada descriu com canvia el pendent de la funció. En aquests apunts farem servir la terminologia del llibre:

| Signe de $f''$ | Forma de la gràfica |
|:---:|:---|
| $f''(x)>0$ | **Còncava** o corbada cap amunt. |
| $f''(x)<0$ | **Convexa** o corbada cap avall. |

Un punt $(a,f(a))$ és un **punt d'inflexió** quan la funció és contínua en $a$ i la curvatura canvia en travessar-lo. Els candidats apareixen quan

$$
f''(a)=0
\qquad\text{o bé}\qquad
f''(a)\text{ no existeix}.
$$

!!! note "Condició que cal comprovar"
    L'equació $f''(a)=0$ només dona candidats. Per confirmar un punt d'inflexió, $f''$ ha de canviar de signe a banda i banda de $a$.

!!! example "Exemple 3. Curvatura i punts d'inflexió"
    Considerem

    $$
    f(x)=x^4-4x^3.
    $$

    Calculem les dues primeres derivades:

    $$
    f'(x)=4x^3-12x^2,
    \qquad
    f''(x)=12x^2-24x=12x(x-2).
    $$

    Els candidats són $x=0$ i $x=2$. El signe de $f''$ és:

    | Interval | $(-\infty,0)$ | $(0,2)$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Signe de $f''$ | $+$ | $-$ | $+$ |
    | Curvatura | còncava | convexa | còncava |

    La curvatura canvia en tots dos valors. Per tant, els punts d'inflexió són

    $$
    (0,f(0))=(0,0)
    \qquad\text{i}\qquad
    (2,f(2))=(2,-16).
    $$

## 4. Esquema d'un estudi complet

Per estudiar creixement, extrems i curvatura d'una funció:

1. Troba el **domini**.
2. Calcula $f'$ i localitza els punts crítics.
3. Fes la taula de signes de $f'$.
4. Escriu els intervals de creixement i decreixement i classifica els extrems.
5. Calcula $f''$ i localitza els candidats a punt d'inflexió.
6. Fes la taula de signes de $f''$ i determina la curvatura.
7. Calcula les ordenades dels extrems i dels punts d'inflexió substituint en la funció original.

!!! tip "En funcions definides a trossos"
    Cal afegir a la taula tots els punts d'unió. Un extrem o un punt d'inflexió també pot aparèixer en un punt on $f'$ o $f''$ no existeixen, sempre que la funció hi sigui contínua i es produeixi el canvi corresponent.
