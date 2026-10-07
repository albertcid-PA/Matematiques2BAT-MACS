# Creixement, decreixement i extrems

La derivada ens permet descriure com varia una funció. El signe de $f'(x)$ indica si la gràfica puja o baixa quan avancem d'esquerra a dreta.

## 1. Relació entre el signe de la derivada i el creixement

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

## 2. Màxims i mínims relatius

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

!!! example "Exemple 2. Lectura conjunta del creixement i els extrems"
    Considerem la funció

    $$
    f(x)=x^3-3x.
    $$

    Les dues primeres derivades són

    $$
    f'(x)=3x^2-3=3(x+1)(x-1),
    \qquad
    f''(x)=6x.
    $$

    Els punts crítics són $x=-1$ i $x=1$. A més,

    $$
    f''(-1)=-6<0,
    \qquad
    f''(1)=6>0,
    $$

    de manera que $(-1,2)$ és un màxim relatiu i $(1,-2)$ és un mínim relatiu.

    <figure markdown="span">
      ![Gràfica d'una funció cúbica que creix fins a un màxim, decreix fins a un mínim i torna a créixer](../../img/calcul/fig_2_9_creixement_maxim_minim.svg){ width="740" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_9_creixement_maxim_minim.tex">Figura 2.9.</a></strong> Creixement, decreixement, màxim i mínim de $f(x)=x^3-3x$.</figcaption>
    </figure>

    | Valor de $x$ | $(-\infty,-1)$ | $-1$ | $(-1,1)$ | $1$ | $(1,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $+$ | $0$ | $-$ | $0$ | $+$ |
    | Comportament de $f$ | creix | màxim $(-1,2)$ | decreix | mínim $(1,-2)$ | creix |
    | Comprovació amb $f''$ | — | $f''(-1)=-6<0$ | — | $f''(1)=6>0$ | — |

!!! example "Exemple 3. Producte d'un polinomi i una exponencial"
    Estudiem els extrems de

    $$
    f(x)=x^2e^{-x}.
    $$

    Com que $e^{-x}>0$ per a tot $x$,

    $$
    f'(x)=2xe^{-x}-x^2e^{-x}=xe^{-x}(2-x)
    $$

    té el mateix signe que $x(2-x)$. Els punts crítics són $x=0$ i $x=2$:

    | Valor de $x$ | $(-\infty,0)$ | $0$ | $(0,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | $-$ | $0$ | $+$ | $0$ | $-$ |
    | Comportament de $f$ | decreix | mínim $(0,0)$ | creix | màxim $\left(2,\dfrac{4}{e^2}\right)$ | decreix |

    Així, $(0,0)$ és un mínim relatiu i

    $$
    \left(2,\frac{4}{e^2}\right)
    $$

    és un màxim relatiu.

    <figure markdown="span">
      ![Gràfica del producte d'un polinomi per una exponencial amb un mínim i un màxim relatius](../../img/calcul/fig_2_10_creixement_polinomi_exponencial.svg){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_10_creixement_polinomi_exponencial.tex">Figura 2.10.</a></strong> Creixement, decreixement i extrems de $f(x)=x^2e^{-x}$.</figcaption>
    </figure>

## 3. Esquema d'un estudi complet

Per estudiar el creixement i els extrems d'una funció:

1. Troba el **domini**.
2. Calcula $f'$ i localitza els punts crítics.
3. Fes la taula de signes de $f'$.
4. Escriu els intervals de creixement i decreixement i classifica els extrems.
5. Si existeix $f''$ en els punts amb $f'(x)=0$, comprova la classificació amb el signe de la segona derivada.
6. Calcula les ordenades dels extrems substituint els valors de $x$ en la funció original.

!!! tip "En funcions definides a trossos"
    Cal afegir a la taula tots els punts d'unió. Un extrem també pot aparèixer en un punt on $f'$ no existeix, sempre que el valor pertanyi al domini i es produeixi el canvi de creixement corresponent.
