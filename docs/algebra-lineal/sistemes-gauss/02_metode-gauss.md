# Mètode de Gauss

El mètode de Gauss transforma un sistema d'equacions lineals en un sistema esglaonat equivalent. Un cop esglaonat, el resolem de baix cap amunt i n'interpretem el resultat.

## 1. Taula de coeficients

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

## 2. Transformacions elementals

En la taula de coeficients, les operacions amb equacions es converteixen en operacions amb files:

| Operació | Notació | Condició |
|---|---|---|
| Intercanviar dues files | $F_i\leftrightarrow F_j$ | Sempre és possible. |
| Multiplicar una fila | $F_i\leftarrow kF_i$ | Cal que $k\neq0$. |
| Sumar a una fila un múltiple d'una altra | $F_i\leftarrow F_i+kF_j$ | Sempre és possible. |

Aquestes transformacions no canvien les solucions del sistema.

## 3. Procediment de Gauss

!!! tip "Passos del mètode de Gauss"
    1. Escriu el sistema ordenant les incògnites sempre de la mateixa manera.
    2. Tria el primer coeficient no nul com a **pivot**.
    3. Fes zeros sota el pivot sumant múltiples de la fila del pivot.
    4. Passa a la columna següent i repeteix el procés. Si el pivot necessari és zero, intercanvia files.
    5. Quan el sistema estigui esglaonat, resol-lo de baix cap amunt.
    6. Interpreta el resultat i classifica el sistema com a SCD, SCI o SI.

No és necessari convertir els pivots en $1$. Sovint és preferible conservar nombres enters per evitar fraccions durant l'esglaonament.

## 4. Sistema compatible determinat

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

## 5. Quan cal intercanviar files

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

## 6. Sistemes amb infinites solucions

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

## 7. Sistemes sense solució

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

## 8. Lectura final del sistema esglaonat

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
