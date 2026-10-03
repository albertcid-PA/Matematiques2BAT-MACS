# Representació de funcions

!!! abstract "Definició: representació d'una funció"
    Representar una funció consisteix a reunir la informació algebraica, els límits i les derivades per dibuixar-ne una gràfica coherent.

Seguirem sempre el mateix ordre per representar funcions **polinòmiques, racionals, irracionals, exponencials, logarítmiques i funcions a trossos**.

!!! note "Guió general: vuit passos per representar una funció"
    1. Determinar el **domini**, tenint en compte els denominadors, les arrels d'índex parell i els logaritmes.
    2. Trobar el tall amb l'eix $Y$ calculant $f(0)$.
    3. Trobar els talls amb l'eix $X$ resolent $f(x)=0$.
    4. Buscar les **asímptotes verticals** als extrems finits del domini mitjançant els límits laterals.
    5. Estudiar les altres **discontinuïtats**, especialment en funcions a trossos, i classificar-les.
    6. Calcular els límits quan $x\to-\infty$ i $x\to+\infty$ per trobar asímptotes horitzontals o branques infinites.
    7. Localitzar els candidats a **extrem relatiu** resolent $f'(x)=0$ i considerant els punts on $f'$ no existeix.
    8. Estudiar el signe de $f'$ per determinar la monotonia i decidir si cada candidat és un màxim, un mínim o no és un extrem.

## 1. Esquema general

### Pas 1. Domini

!!! abstract "Definició: domini"
    El **domini** és el conjunt de valors de $x$ per als quals la funció està definida.

| Tipus de funció | Condició del domini |
|:---|:---|
| Polinòmica | $D_f=\mathbb{R}$. |
| Racional $\dfrac{P(x)}{Q(x)}$ | $Q(x)\neq0$. |
| Arrel d'índex parell $\sqrt[n]{g(x)}$ | $g(x)\geq0$. |
| Arrel d'índex senar | No imposa cap restricció. |
| Logarítmica $\log_a(g(x))$ | $g(x)>0$. |
| Exponencial $a^{g(x)}$ | Està definida sempre que ho estigui $g(x)$. |
| Funció a trossos | S'uneixen els dominis de cada expressió dins del seu interval. |

!!! note "Recorda"
    No es pot dividir entre zero. Tampoc es pot calcular, en els nombres reals, una arrel d'índex parell d'un nombre negatiu ni el logaritme d'un nombre menor o igual que zero.

### Pas 2. Tall amb l'eix d'ordenades

Per trobar el tall amb l'eix $Y$, substituïm $x=0$:

$$
y=f(0).
$$

El punt és $(0,f(0))$, sempre que $0$ pertanyi al domini.

### Pas 3. Talls amb l'eix d'abscisses

Per trobar els talls amb l'eix $X$, imposem $y=0$ i resolem

$$
f(x)=0.
$$

En una funció racional, els zeros són els del numerador que també pertanyen al domini.

### Pas 4. Asímptotes verticals

Els candidats són els extrems finits del domini, sovint els zeros del denominador o els punts on l'argument d'un logaritme s'apropa a zero. Per a cada candidat $x=c$, calculem

$$
\lim_{x\to c^-}f(x)
\qquad\text{i}\qquad
\lim_{x\to c^+}f(x).
$$

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

!!! abstract "Definició: asímptota obliqua"
    Una recta $y=mx+n$, amb $m\neq0$, és una **asímptota obliqua** si la diferència entre la funció i la recta tendeix a zero quan $x\to-\infty$ o $x\to+\infty$.

Si la funció creix aproximadament com una recta, calculem:

$$
m=\lim_{x\to\pm\infty}\frac{f(x)}{x},
\qquad
n=\lim_{x\to\pm\infty}\bigl(f(x)-mx\bigr),
$$

En funcions racionals també es pot obtenir l'asímptota obliqua fent la divisió de polinomis.

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

Fem la taula de signes de $f'$:

$$
f'(x)>0\Longrightarrow f\text{ creix},
\qquad
f'(x)<0\Longrightarrow f\text{ decreix}.
$$

!!! tip "Abans de dibuixar"
    Situa primer els talls, les discontinuïtats, les asímptotes i els extrems. Després uneix la informació respectant el creixement o decreixement de cada interval.

## 2. Què cal mirar segons el tipus de funció?

| Tipus | Informació especialment útil |
|:---|:---|
| Polinòmica | Domini $\mathbb{R}$, talls, comportament del terme de grau més alt i extrems. No té asímptotes. |
| Racional | Zeros del denominador, simplificacions, asímptotes verticals, horitzontals o obliqües i intervals separats pel domini. |
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

    **Domini i talls.** El domini és $\mathbb{R}$. Factoritzem:

    $$
    f(x)=(x-3)^2(x+3).
    $$

    Per tant, talla l'eix $X$ en $(-3,0)$ i $(3,0)$, i l'eix $Y$ en $(0,27)$. En $x=3$ l'arrel és doble: la gràfica toca l'eix però no el travessa.

    **Comportament a l'infinit.** El terme dominant és $x^3$:

    $$
    \lim_{x\to-\infty}f(x)=-\infty,
    \qquad
    \lim_{x\to+\infty}f(x)=+\infty.
    $$

    Una funció polinòmica no té asímptotes.

    **Creixement i extrems.**

    $$
    f'(x)=3x^2-6x-9=3(x+1)(x-3).
    $$

    | Interval | $(-\infty,-1)$ | $(-1,3)$ | $(3,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | $f'$ | $+$ | $-$ | $+$ |
    | $f$ | creix | decreix | creix |

    Hi ha un màxim relatiu en $(-1,32)$ i un mínim relatiu en $(3,0)$.

## 4. Exemple complet: funció racional

!!! example "Exemple 2. Representació d'una funció racional"
    Estudiem

    $$
    f(x)=\frac{x^2-x-6}{x-1}.
    $$

    **Domini i talls.**

    $$
    D_f=\mathbb{R}\setminus\{1\},
    \qquad
    x^2-x-6=(x-3)(x+2).
    $$

    Els talls amb l'eix $X$ són $(-2,0)$ i $(3,0)$, i el tall amb l'eix $Y$ és $(0,6)$.

    **Asímptota vertical.** Com que el numerador no s'anul·la en $x=1$,

    $$
    \lim_{x\to1^-}f(x)=+\infty,
    \qquad
    \lim_{x\to1^+}f(x)=-\infty.
    $$

    Per tant, $x=1$ és una asímptota vertical.

    **Asímptota obliqua.** Dividim els polinomis:

    $$
    \frac{x^2-x-6}{x-1}=x-\frac{6}{x-1}.
    $$

    Com que $-6/(x-1)\to0$ quan $x\to\pm\infty$, l'asímptota obliqua és $y=x$.

    **Creixement i extrems.**

    $$
    f'(x)=1+\frac{6}{(x-1)^2}>0
    $$

    en tot el domini. Així, la funció és creixent en $(-\infty,1)$ i en $(1,+\infty)$ i no té extrems relatius.

## 5. Funcions irracionals, exponencials i logarítmiques

En aquestes funcions el domini i els límits acostumen a determinar bona part de la gràfica.

!!! example "Exemple 3. Tres comprovacions essencials"
    **Funció irracional:** per a $f(x)=\sqrt{x+2}$, el domini és $[-2,+\infty)$ i la gràfica comença en $(-2,0)$.

    **Funció exponencial:** per a $g(x)=e^{-x}$,

    $$
    \lim_{x\to-\infty}g(x)=+\infty,
    \qquad
    \lim_{x\to+\infty}g(x)=0,
    $$

    de manera que $y=0$ és una asímptota horitzontal cap a $+\infty$.

    **Funció logarítmica:** per a $h(x)=\ln(x-2)$, el domini és $(2,+\infty)$ i

    $$
    \lim_{x\to2^+}\ln(x-2)=-\infty,
    $$

    de manera que $x=2$ és una asímptota vertical.

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
