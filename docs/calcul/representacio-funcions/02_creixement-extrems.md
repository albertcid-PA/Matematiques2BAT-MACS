# Creixement, decreixement i extrems

La derivada ens permet descriure com varia una funció. El signe de $f'(x)$ indica si la gràfica puja o baixa quan avancem d'esquerra a dreta.

## 1. Relació entre el signe de la derivada i el creixement

!!! abstract "Definició: creixement i decreixement"
    En un interval on la funció és derivable:

    - si $f'(x)>0$, la funció és **creixent**;
    - si $f'(x)<0$, la funció és **decreixent**;
    - si $f'(x)=0$ en tot l'interval, la funció és **constant**.

!!! note "Signe i valor de la derivada"
    El **signe** de $f'(a)$ indica si la funció creix o decreix en $a$; el **valor** de $f'(a)$ indica a quin ritme ho fa. En un problema contextualitzat, una pregunta com «a quin ritme augmenta el nombre de persones al cap d'una hora?» es respon calculant $f'(1)$ i expressant-lo amb les unitats del context. Ho trobaràs explicat a [Interpretació de la derivada en un context](../repas-limits-derivades/02_derivades.md#interpretacio-de-la-derivada-en-un-context).

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

    Per justificar un extrem n'hi ha prou amb el canvi de signe de $f'$. La segona derivada és només una comprovació complementària.

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
      ![Gràfica de la funció polinòmica amb un màxim i un mínim relatius](../../img/calcul/fig_2_8_creixement_maxim_minim.svg?v=4){ width="740" }
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
      ![Gràfica del producte d'un polinomi per una exponencial amb un mínim i un màxim relatius](../../img/calcul/fig_2_9_creixement_polinomi_exponencial.svg?v=6){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_9_creixement_polinomi_exponencial.tex">Figura 2.9.</a></strong> Creixement, decreixement i extrems de $f(x)=x^2e^{-x}$.</figcaption>
    </figure>

## 3. Extrems absoluts en un interval tancat

En molts problemes la funció només té sentit en un interval tancat, com $0\leq t\leq9$ hores. Aleshores no n'hi ha prou de trobar els extrems relatius: cal saber quin és el valor **més gran** i el **més petit** de tot l'interval.

!!! abstract "Definició: màxim i mínim absoluts"
    Una funció té un **màxim absolut** en $x=a$ si $f(a)$ és el valor més gran que pren la funció en tot el domini considerat. Té un **mínim absolut** en $x=a$ si $f(a)$ és el valor més petit.

    Si $f$ és contínua en un interval tancat $[p,q]$, té sempre un màxim absolut i un mínim absolut, i els assoleix en un extrem relatiu o en un extrem del domini, $x=p$ o $x=q$.

!!! tip "Procediment"
    1. Troba els extrems relatius de $f$ dins de l'interval.
    2. Calcula el valor de la funció als extrems del domini, $f(p)$ i $f(q)$.
    3. Compara tots aquests valors: el més gran és el màxim absolut i el més petit, el mínim absolut.

    A la taula de monotonia, els extrems del domini ocupen les columnes primera i última.

!!! warning "Un màxim relatiu no sempre és el màxim absolut"
    - Un màxim relatiu només és el valor més gran **a prop** del punt. Si després la funció torna a créixer, pot assolir un valor més gran en un altre punt, sovint en un extrem del domini.
    - El màxim o el mínim absolut es pot assolir en més d'un punt. Si $f(p)$ i un mínim relatiu tenen el mateix valor, tots dos punts són mínims absoluts.

!!! example "Exemple 3. Extrems absoluts en un interval tancat"
    Busquem els extrems absoluts de la funció de l'exemple 1,

    $$
    f(x)=x^3-3x^2-9x+5,
    $$

    en l'interval $[-2,6]$.

    A l'exemple 1 hem vist que té un màxim relatiu en $x=-1$ i un mínim relatiu en $x=3$. Tots dos valors pertanyen a l'interval. Calculem també la funció als extrems del domini:

    $$
    f(-2)=-8-12+18+5=3,\qquad f(6)=216-108-54+5=59.
    $$

    | $x$ | $-2$ | $(-2,-1)$ | $-1$ | $(-1,3)$ | $3$ | $(3,6)$ | $6$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
    | Signe de $f'$ | | $+$ | $0$ | $-$ | $0$ | $+$ | |
    | Valor de $f$ | $3$ | creix | $10$ | decreix | $-22$ | creix | $59$ |
    | Tipus de punt | extrem<br>del domini | | màxim<br>relatiu | | mínim<br>relatiu | | extrem<br>del domini |

    Comparem els valors $3$, $10$, $-22$ i $59$:

    - el **màxim absolut** és $59$ i s'assoleix en $x=6$, un extrem del domini, no en el màxim relatiu;
    - el **mínim absolut** és $-22$ i s'assoleix en $x=3$, on coincideix amb el mínim relatiu.

### Interpretació dels extrems en un context

Quan la funció descriu una situació real, els extrems s'han d'explicar amb les paraules i les unitats del problema, no només amb les coordenades.

!!! tip "Com s'interpreta un extrem"
    Per a cada extrem, indica:

    1. **quan** passa: el valor de la variable, amb unitats;
    2. **quant** val la magnitud en aquell moment, tenint en compte l'escala (desenes, centenars, milers...);
    3. **què canvia** a partir d'aquell moment: si la magnitud passa d'augmentar a disminuir o al revés.

    Per exemple, si el nombre de persones d'un museu, en desenes, $t$ hores després d'obrir, té un màxim relatiu a $(3,\,25)$, una bona interpretació és: «Tres hores després d'obrir hi ha $250$ persones, i a partir d'aquest moment el nombre de persones comença a disminuir.» Si és un màxim relatiu però no absolut, cal afegir-ho: més tard hi haurà més persones.

### Equacions i inequacions en un context

Moltes preguntes d'un problema contextualitzat no demanen un extrem, sinó un valor o un interval. Cada tipus de pregunta es tradueix en un càlcul diferent:

| Pregunta | Càlcul |
|:--|:--|
| Quant val la magnitud en l'instant $a$? | Calcular $f(a)$. |
| Quan val exactament $k$? | Resoldre l'equació $f(x)=k$. |
| Quan supera el valor $k$? Quan no hi ha pèrdues? | Resoldre la inequació $f(x)>k$ o $B(x)\geq0$. |
| Quan és millor una opció que l'altra? | Estudiar el signe de la diferència dels dos models. |

!!! tip "Com es resol una inequació en un context"
    1. Passa-ho tot a un costat, de manera que quedi $g(x)>0$, $g(x)\geq0$, $g(x)<0$ o $g(x)\leq0$.
    2. Resol l'equació $g(x)=0$ i queda't amb les solucions que pertanyen al domini del problema.
    3. Aquestes solucions divideixen el domini en intervals. Estudia el signe de $g$ en cada interval amb un valor de prova.
    4. Respon amb l'interval que compleix la condició, amb les unitats del problema.

    Per comparar dos models, com dues tarifes o dues màquines, el procediment és el mateix amb la funció diferència. Ho trobaràs a l'[exemple 6 d'optimització](../optimitzacio/01_optimitzacio.md#36-comparacio-de-dos-models).

!!! example "Exemple 4. Visitants d'una fira"
    El nombre de persones que hi ha en una fira, en centenars, $t$ hores després d'obrir, ve donat per

    $$
    V(t)=-t^2+12t,\qquad 0\leq t\leq12.
    $$

    **Quantes persones hi ha al cap de $2$ hores?**

    $$
    V(2)=-4+24=20.
    $$

    Al cap de $2$ hores hi ha $2\,000$ persones.

    **Quan hi ha exactament $3\,200$ persones?** Com que la funció s'expressa en centenars, resolem $V(t)=32$:

    $$
    -t^2+12t=32
    \quad\Longleftrightarrow\quad
    t^2-12t+32=0
    \quad\Longleftrightarrow\quad
    t=\frac{12\pm\sqrt{144-128}}{2}=\frac{12\pm4}{2}.
    $$

    Obtenim $t=4$ i $t=8$, tots dos dins del domini: hi ha $3\,200$ persones $4$ hores i $8$ hores després d'obrir.

    **Durant quant de temps hi ha més de $2\,700$ persones?** Resolem $V(t)>27$, és a dir, $g(t)=-t^2+12t-27>0$. Les solucions de $g(t)=0$ són

    $$
    t^2-12t+27=0
    \quad\Longleftrightarrow\quad
    t=\frac{12\pm\sqrt{144-108}}{2}=\frac{12\pm6}{2}
    \quad\Longrightarrow\quad
    t=3,\ t=9.
    $$

    | $t$ | $[0,3)$ | $3$ | $(3,9)$ | $9$ | $(9,12]$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Valor de prova | $g(0)=-27$ | $0$ | $g(6)=9$ | $0$ | $g(12)=-27$ |
    | Signe de $g$ | $-$ | $0$ | $+$ | $0$ | $-$ |

    Hi ha més de $2\,700$ persones entre la tercera i la novena hora després d'obrir, és a dir, durant $6$ hores.

## 4. Esquema d'un estudi complet

Per estudiar el creixement i els extrems d'una funció:

1. Troba el **domini**. Si el context el limita, escriu l'interval que té sentit.
2. Calcula $f'$ i localitza els punts crítics.
3. Fes la taula de signes de $f'$, amb els punts crítics, les discontinuïtats, els punts d'unió i els extrems del domini.
4. Escriu els intervals de creixement i decreixement i classifica els extrems.
5. Si existeix $f''$ en els punts amb $f'(x)=0$, comprova la classificació amb el signe de la segona derivada.
6. Calcula les ordenades dels extrems substituint els valors de $x$ en la funció original.
7. Si el domini és un interval tancat, compara aquests valors amb els dels extrems del domini per trobar els extrems absoluts.
8. En un problema contextualitzat, interpreta cada resultat amb les unitats del problema.

!!! tip "En funcions definides a trossos"
    Cal afegir a la taula tots els punts d'unió. Un extrem també pot aparèixer en un punt on $f'$ no existeix, sempre que el valor pertanyi al domini i es produeixi el canvi de creixement corresponent.
