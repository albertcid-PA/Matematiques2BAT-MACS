<!-- Fitxer generat automàticament per scripts/genera_recull_tema_3.py. -->

<div class="pdf-topic-cover" markdown="1">

# 3. Sistemes i mètode de Gauss {.pdf-topic-collection}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Sistemes d'equacions lineals](#sistemes-dequacions-lineals)
2. [Mètode de Gauss](#metode-de-gauss)

</div>

</div>

## Sistemes d'equacions lineals

Un sistema d'equacions permet descriure diverses condicions que s'han de complir alhora. En aquest tema treballarem amb equacions lineals i buscarem els valors de les incògnites que verifiquen totes les equacions del sistema.

### 1. Equacions lineals

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

### 2. Sistemes i solucions

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

#### Nombre d'equacions i d'incògnites

El sistema

$$
\begin{cases}
2x+y-z=1,\\
x-y+2z=5,\\
3x+2y+z=4
\end{cases}
$$

té tres equacions i tres incògnites. Que el nombre d'equacions coincideixi amb el d'incògnites **no garanteix** que el sistema tingui una única solució: cal estudiar la relació entre les equacions.

### 3. Classificació segons el nombre de solucions

Un sistema lineal només pot tenir una solució, infinites solucions o cap solució.

| Classificació | Nombre de solucions | Abreviació |
|---|---:|:---:|
| Sistema compatible determinat | Una | SCD |
| Sistema compatible indeterminat | Infinites | SCI |
| Sistema incompatible | Cap | SI |

#### 3.1 Sistema compatible determinat

El sistema

$$
\begin{cases}
x+y=5,\\
x-y=1
\end{cases}
$$

té una única solució: $(x,y)=(3,2)$. Per tant, és un **sistema compatible determinat**.

#### 3.2 Sistema compatible indeterminat

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

<div class="pdf-topic-section-break"></div>

#### 3.3 Sistema incompatible

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

### 4. Sistemes equivalents

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

<div class="pdf-topic-section-break"></div>

### 5. Sistemes esglaonats

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

<div class="pdf-topic-section-break"></div>

## Mètode de Gauss

El mètode de Gauss transforma un sistema d'equacions lineals en un sistema esglaonat equivalent. Un cop esglaonat, el resolem de baix cap amunt i n'interpretem el resultat.

### 1. Taula de coeficients

Per operar amb més comoditat, podem escriure només els coeficients i els termes independents del sistema. La barra vertical separa els dos membres de les equacions.

$$
\begin{cases}
x+y+z=2,\\
2x-y+z=-1,\\
x+2y-z=6
\end{cases}
\quad\longleftrightarrow\quad
\left[
\begin{array}{ccc|c}
1&1&1&2\\
2&-1&1&-1\\
1&2&-1&6
\end{array}
\right].
$$

Cada fila representa una equació i cada columna correspon sempre a la mateixa incògnita.

!!! warning "No podem canviar l'ordre de les columnes"
    Si l'ordre de les incògnites és $x,y,z$, totes les files han de seguir aquest ordre. Quan una incògnita no apareix en una equació, el seu coeficient és $0$.

### 2. Transformacions elementals

En la taula de coeficients, les operacions amb equacions es converteixen en operacions amb files:

| Operació | Notació | Condició |
|---|---|---|
| Intercanviar dues files | $F_i\leftrightarrow F_j$ | Sempre és possible. |
| Multiplicar una fila | $F_i\leftarrow kF_i$ | Cal que $k\neq0$. |
| Sumar a una fila un múltiple d'una altra | $F_i\leftarrow F_i+kF_j$ | Sempre és possible. |

Aquestes transformacions no canvien les solucions del sistema.

### 3. Procediment de Gauss

!!! tip "Passos del mètode de Gauss"
    1. Escriu el sistema ordenant les incògnites sempre de la mateixa manera.
    2. Tria el primer coeficient no nul com a **pivot**.
    3. Fes zeros sota el pivot sumant múltiples de la fila del pivot.
    4. Passa a la columna següent i repeteix el procés. Si el pivot necessari és zero, intercanvia files.
    5. Quan el sistema estigui esglaonat, resol-lo de baix cap amunt.
    6. Interpreta el resultat i classifica el sistema com a SCD, SCI o SI.

No és necessari convertir els pivots en $1$. Sovint és preferible conservar nombres enters per evitar fraccions durant l'esglaonament.

### 4. Sistema compatible determinat

!!! example "Exemple 1. Una única solució"
    Resolem

    $$
    \begin{cases}
    x+y+z=2,\\
    2x-y+z=-1,\\
    x+2y-z=6.
    \end{cases}
    $$

    Escrivim la taula i fem zeros sota el primer pivot:

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&-1&1&-1\\
    1&2&-1&6
    \end{array}
    \right]
    \mathop{\longrightarrow}^{\substack{F_2\leftarrow F_2-2F_1\\F_3\leftarrow F_3-F_1}}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&-3&-1&-5\\
    0&1&-2&4
    \end{array}
    \right].
    $$

    Intercanviem les dues últimes files per treballar amb el pivot $1$ i fem zero a sota:

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&-3&-1&-5
    \end{array}
    \right]
    \mathop{\longrightarrow}^{F_3\leftarrow F_3+3F_2}
    \left[
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&0&-7&7
    \end{array}
    \right].
    $$

    El sistema esglaonat és

    $$
    \begin{cases}
    x+y+z=2,\\
    y-2z=4,\\
    -7z=7.
    \end{cases}
    $$

    Resolem de baix cap amunt:

    $$
    z=-1,
    \qquad
    y-2(-1)=4\Rightarrow y=2,
    \qquad
    x+2-1=2\Rightarrow x=1.
    $$

    Per tant,

    $$
    \boxed{(x,y,z)=(1,2,-1).}
    $$

    El sistema té una única solució i és **compatible determinat**.

<div class="pdf-topic-section-break"></div>

### 5. Quan cal intercanviar files

Si en la posició del pivot hi ha un zero, busquem una fila inferior que tingui un coeficient no nul en aquella columna i intercanviem les files.

!!! example "Exemple 2. Pivot nul"
    En la taula

    $$
    \left[
    \begin{array}{ccc|c}
    1&2&-1&3\\
    0&0&2&4\\
    0&3&1&5
    \end{array}
    \right],
    $$

    no podem utilitzar el segon coeficient de la segona fila com a pivot perquè és $0$. Intercanviem $F_2$ i $F_3$:

    $$
    \left[
    \begin{array}{ccc|c}
    1&2&-1&3\\
    0&3&1&5\\
    0&0&2&4
    \end{array}
    \right].
    $$

    Ara el sistema ja està esglaonat i es pot resoldre de baix cap amunt.

### 6. Sistemes amb infinites solucions

!!! example "Exemple 3. Una equació redundant"
    Considerem

    $$
    \begin{cases}
    x+y+z=4,\\
    x-y+z=2,\\
    2x+2z=6.
    \end{cases}
    $$

    Apliquem $F_2\leftarrow F_2-F_1$ i $F_3\leftarrow F_3-2F_1$:

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-2
    \end{array}
    \right]
    \mathop{\longrightarrow}^{F_3\leftarrow F_3-F_2}
    \left[
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&0
    \end{array}
    \right].
    $$

    L'última fila representa la identitat $0=0$ i no aporta cap condició nova. Hi ha dues equacions independents i tres incògnites; per tant, una incògnita queda lliure.

    Prenem $z=t$, amb $t\in\mathbb{R}$. De la segona equació obtenim $y=1$, i de la primera,

    $$
    x+1+t=4\Rightarrow x=3-t.
    $$

    Així, el conjunt de solucions és

    $$
    \boxed{(x,y,z)=(3-t,1,t),\qquad t\in\mathbb{R}.}
    $$

    El sistema és **compatible indeterminat**.

### 7. Sistemes sense solució

!!! example "Exemple 4. Una contradicció"
    Canviem només el terme independent de la tercera equació de l'exemple anterior:

    $$
    \begin{cases}
    x+y+z=4,\\
    x-y+z=2,\\
    2x+2z=7.
    \end{cases}
    $$

    L'esglaonament condueix a

    $$
    \left[
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&1
    \end{array}
    \right].
    $$

    L'última fila representa l'equació impossible $0=1$. Per tant, el sistema no té cap solució i és **incompatible**.

### 8. Lectura final del sistema esglaonat

| Forma que apareix després de Gauss | Interpretació | Classificació |
|---|---|:---:|
| Hi ha un pivot per a cada incògnita. | Una única solució. | SCD |
| Apareix una fila $0=0$ i queda alguna incògnita lliure. | Infinites solucions, expressades amb un paràmetre. | SCI |
| Apareix una fila $0=k$, amb $k\neq0$. | Contradicció: no hi ha solució. | SI |

!!! warning "Errors habituals"
    - Fer una operació només en alguns termes d'una fila.
    - Oblidar el terme independent, situat a la dreta de la barra.
    - Dividir una fila per zero.
    - Aturar-se en obtenir la forma esglaonada sense fer la substitució enrere.
    - Donar una solució sense classificar el sistema.
