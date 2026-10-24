# Sistemes d'equacions lineals

Un sistema d'equacions permet descriure diverses condicions que s'han de complir alhora. En aquest tema treballarem amb equacions lineals i buscarem els valors de les incògnites que verifiquen totes les equacions del sistema.

## 1. Equacions lineals

!!! abstract "Definició: equació lineal"
    Una **equació lineal** amb les incògnites $x_1,x_2,\ldots,x_n$ és una expressió de la forma

    $$
    a_1x_1+a_2x_2+\cdots+a_nx_n=b,
    $$

    on $a_1,a_2,\ldots,a_n$ i $b$ són nombres reals. Els nombres $a_i$ són els **coeficients**, i $b$ és el **terme independent**.

En una equació lineal, les incògnites només apareixen elevades a $1$: no hi pot haver productes d'incògnites, potències, arrels ni incògnites en un denominador.

| Expressió | És lineal? | Motiu |
|---|:---:|---|
| $2x-3y+z=5$ | Sí | Les incògnites són de grau $1$. |
| $xy+y=1$ | No | Hi apareix el producte $xy$. |
| $x^2+y=4$ | No | Hi apareix $x^2$. |
| $\dfrac{x}{2}-3y=0$ | Sí | Dividir $x$ per $2$ és multiplicar $x$ pel coeficient $\frac12$. |

## 2. Sistemes i solucions

!!! abstract "Definició: sistema d'equacions lineals"
    Un **sistema d'equacions lineals** és un conjunt d'equacions lineals que s'han de complir simultàniament. Una **solució** és un conjunt ordenat de valors que verifica totes les equacions.

Per exemple,

$$
\begin{cases}
x+y=5,\\
x-y=1
\end{cases}
$$

té la solució $(x,y)=(3,2)$, perquè

$$
3+2=5
\qquad\text{i}\qquad
3-2=1.
$$

!!! warning "Cal comprovar totes les equacions"
    Uns valors només són solució del sistema si verifiquen **totes** les equacions. L'ordre també és important: en $(x,y)=(3,2)$, el primer valor correspon a $x$ i el segon, a $y$.

### Nombre d'equacions i d'incògnites

El sistema

$$
\begin{cases}
2x+y-z=1,\\
x-y+2z=5,\\
3x+2y+z=4
\end{cases}
$$

té tres equacions i tres incògnites. Que el nombre d'equacions coincideixi amb el d'incògnites **no garanteix** que el sistema tingui una única solució: cal estudiar la relació entre les equacions.

## 3. Classificació segons el nombre de solucions

Un sistema lineal només pot tenir una solució, infinites solucions o cap solució.

| Classificació | Nombre de solucions | Abreviació |
|---|---:|:---:|
| Sistema compatible determinat | Una | SCD |
| Sistema compatible indeterminat | Infinites | SCI |
| Sistema incompatible | Cap | SI |

### 3.1 Sistema compatible determinat

El sistema

$$
\begin{cases}
x+y=5,\\
x-y=1
\end{cases}
$$

té una única solució: $(x,y)=(3,2)$. Per tant, és un **sistema compatible determinat**.

### 3.2 Sistema compatible indeterminat

En el sistema

$$
\begin{cases}
x+y=4,\\
2x+2y=8,
\end{cases}
$$

la segona equació és el doble de la primera. Totes dues expressen la mateixa condició i hi ha infinites solucions:

$$
(x,y)=(t,4-t),\qquad t\in\mathbb{R}.
$$

És un **sistema compatible indeterminat**.

### 3.3 Sistema incompatible

En el sistema

$$
\begin{cases}
x+y=4,\\
2x+2y=10,
\end{cases}
$$

si multipliquéssim la primera equació per $2$, obtindríem $2x+2y=8$, que contradiu la segona equació. El sistema no té cap solució i és un **sistema incompatible**.

!!! note "Interpretació geomètrica amb dues incògnites"
    Cada equació lineal amb dues incògnites representa una recta:

    - en un SCD, les rectes es tallen en un punt;
    - en un SCI, les rectes coincideixen;
    - en un SI, les rectes són paral·leles i diferents.

## 4. Sistemes equivalents

!!! abstract "Definició: sistemes equivalents"
    Dos sistemes són **equivalents** si tenen exactament les mateixes solucions.

Podem transformar un sistema en un altre d'equivalent mitjançant aquestes operacions:

1. Intercanviar dues equacions.
2. Multiplicar una equació per un nombre diferent de zero.
3. Substituir una equació per la suma d'aquesta equació i un múltiple d'una altra.

Per indicar les equacions, escriurem $E_1,E_2,E_3,\ldots$ Per exemple,

$$
E_2\leftarrow E_2-2E_1
$$

significa que substituïm la segona equació pel resultat de restar-li dues vegades la primera.

!!! example "Exemple. Obtenció d'un sistema equivalent"
    Partim del sistema

    $$
    \begin{cases}
    x+y=5,\\
    2x-y=1.
    \end{cases}
    $$

    Fem $E_2\leftarrow E_2-2E_1$:

    $$
    \begin{cases}
    x+y=5,\\
    -3y=-9.
    \end{cases}
    $$

    El segon sistema és equivalent al primer, però ara la segona equació conté una sola incògnita. D'aquí obtenim $y=3$ i, substituint a la primera equació, $x=2$.

## 5. Sistemes esglaonats

Un sistema està **esglaonat** quan, a mesura que baixem, cada equació comença més a la dreta que l'anterior. Per exemple,

$$
\begin{cases}
x-2y+z=-13,\\
y+3z=1,\\
2z=-4.
\end{cases}
$$

Es resol de baix cap amunt:

$$
2z=-4\Rightarrow z=-2,
$$

$$
y+3(-2)=1\Rightarrow y=7,
$$

$$
x-2\cdot7-2=-13\Rightarrow x=3.
$$

Per tant,

$$
\boxed{(x,y,z)=(3,7,-2).}
$$

El mètode de Gauss consisteix precisament a transformar qualsevol sistema lineal en un sistema esglaonat equivalent.
