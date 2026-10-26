# Mètode de Gauss

El mètode de Gauss transforma un sistema d'equacions lineals en un sistema esglaonat equivalent. Un cop esglaonat, el resolem de baix cap amunt i utilitzem el resultat per classificar-lo com a SCD, SCI o SI.

## 1. Matriu de coeficients i matriu ampliada

Considerem el sistema

$$
\begin{cases}
x+y+z=2\\
2x-y+z=-1\\
x+2y-z=6
\end{cases}
$$

La **matriu de coeficients**, que anomenarem $A$, conté únicament els coeficients de les incògnites, sempre en el mateix ordre:

$$
A=
\begin{pmatrix}
1&1&1\\
2&-1&1\\
1&2&-1
\end{pmatrix}
$$

La columna dels termes independents és

$$
b=
\begin{pmatrix}
2\\
-1\\
6
\end{pmatrix}
$$

Si afegim aquesta columna a la matriu de coeficients, obtenim la **matriu ampliada**, que representem per $(A\mid b)$:

$$
(A\mid b)=
\left(
\begin{array}{ccc|c}
1&1&1&2\\
2&-1&1&-1\\
1&2&-1&6
\end{array}
\right)
$$

Cada fila de la matriu ampliada correspon a una equació. Les primeres columnes contenen els coeficients i la columna situada després de la barra vertical conté els termes independents. Per aplicar el mètode de Gauss treballem amb la matriu ampliada, perquè conserva tota la informació del sistema.

!!! warning "Cal mantenir l'ordre de les incògnites"
    Si l'ordre és $x,y,z$, totes les files han de seguir aquest ordre. Quan una incògnita no apareix en una equació, el seu coeficient és $0$.

    Per exemple, $2x-z=4$ s'ha d'escriure com $2x+0y-z=4$.

## 2. Transformacions elementals

Les operacions amb equacions es converteixen en operacions amb files:

| Operació | Notació | Condició |
|---|---|---|
| Permutar dues files (intercanviar-les) | $F_i\leftrightarrow F_j$ | Sempre és possible. |
| Multiplicar una fila | $F_i=kF_i$ | Cal que $k\neq0$. |
| Sumar a una fila un múltiple d'una altra (**combinació lineal**) | $F_i=F_i+kF_j$ | Sempre és possible. |

Aquestes transformacions no canvien les solucions del sistema.

!!! tip "Combinació lineal per evitar fraccions"
    Suposem que, en una mateixa columna, el pivot de $F_i$ és $a\neq0$ i el coeficient que volem eliminar de $F_j$ és $b$. En lloc de dividir per $a$, podem fer

    $$
    F_j=aF_j-bF_i.
    $$

    El nou coeficient és $ab-ba=0$. La nova fila és una **combinació lineal** de les dues files anteriors i ens permet mantenir nombres enters durant l'esglaonament.

    Per exemple, resolem matricialment el sistema

    $$
    \begin{cases}
    2x+y-z=1\\
    3x-y+2z=7\\
    x+2y+z=8
    \end{cases}
    $$

    Per anul·lar el coeficient $3$ de $F_2$, podríem fer una operació amb una fracció:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    3&-1&2&7\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-\frac32F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-\frac52&\frac72&\frac{11}{2}\\
    1&2&1&8
    \end{array}
    \right).
    $$

    En canvi, amb la combinació lineal $F_2=2F_2-3F_1$ obtenim una fila equivalent amb coeficients enters:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    3&-1&2&7\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_2=2F_2-3F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    1&2&1&8
    \end{array}
    \right).
    $$

    Continuem l'esglaonament mantenint els coeficients enters:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&3&3&15
    \end{array}
    \right).
    $$

    Finalment, eliminem el coeficient de $y$ de la tercera fila:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&3&3&15
    \end{array}
    \right)
    \xrightarrow{F_3=5F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&0&36&108
    \end{array}
    \right).
    $$

    Resolent de baix cap amunt, obtenim $z=3$, $y=2$ i $x=1$.

!!! note "Dependència entre files"
    Durant l'esglaonament, una fila és **dependent** de les altres si es pot obtenir com una combinació d'aquestes files. En aquest cas, no aporta informació nova i pot acabar convertida en una fila completament nul·la:

    $$
    (0\quad 0\quad 0\mid 0).
    $$

    Cal considerar la fila sencera, inclòs el terme independent. Una fila de la forma

    $$
    (0\quad 0\quad 0\mid k),\qquad k\neq0,
    $$

    no és redundant: representa una contradicció i indica que el sistema és incompatible.

## 3. Procediment de Gauss

!!! tip "Passos del mètode de Gauss"
    1. Ordena les incògnites sempre de la mateixa manera.
    2. Escriu la matriu ampliada, sense oblidar els zeros.
    3. Tria el primer coeficient no nul com a **pivot**.
    4. Fes zeros sota el pivot. Si una divisió produeix fraccions, utilitza una combinació lineal de files.
    5. Passa a la columna següent i repeteix el procés. Si el pivot és zero, permuta les files.
    6. Quan el sistema estigui esglaonat, resol-lo de baix cap amunt.
    7. Classifica el sistema i justifica la resposta.

No cal convertir els pivots en $1$. Sovint és preferible conservar nombres enters per evitar fraccions durant l'esglaonament.

## 4. Sistema compatible determinat

!!! example "Exemple 1. Una única solució"
    Resolem

    $$
    \begin{cases}
    x+y+z=2\\
    2x-y+z=-1\\
    x+2y-z=6
    \end{cases}
    $$

    Fem zeros sota el primer pivot:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&-1&1&-1\\
    1&2&-1&6
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&-3&-1&-5\\
    0&1&-2&4
    \end{array}
    \right).
    $$

    Permutem les dues últimes files i fem zero sota el segon pivot:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&-3&-1&-5
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&0&-7&7
    \end{array}
    \right).
    $$

    El sistema esglaonat és

    $$
    \begin{cases}
    x+y+z=2\\
    y-2z=4\\
    -7z=7
    \end{cases}
    $$

    Resolem de baix cap amunt:

    $$
    z=-1,
    \qquad
    y=2,
    \qquad
    x=1.
    $$

    Per tant,

    $$
    \boxed{(x,y,z)=(1,2,-1).}
    $$

    Hem pogut determinar totes les incògnites i la solució és única. El sistema és **compatible determinat**.

## 5. Permutació i combinació lineal

Si en la posició del pivot hi ha un zero, busquem una fila inferior que tingui un coeficient no nul en aquella columna i permutem les files. Després podem fer combinacions lineals per obtenir zeros sense introduir fraccions.

!!! example "Exemple 2. Permutació i combinació lineal"
    Resolem el sistema

    $$
    \begin{cases}
    2y+z=7\\
    2x-y+z=3\\
    3x+2y-z=4
    \end{cases}
    $$

    El primer coeficient de $F_1$ és $0$. Per obtenir un pivot no nul en la primera columna, permutem $F_1$ i $F_2$:

    $$
    \left(
    \begin{array}{ccc|c}
    0&2&1&7\\
    2&-1&1&3\\
    3&2&-1&4
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    3&2&-1&4
    \end{array}
    \right)
    $$

    Per anul·lar el coeficient $3$ de $F_3$, podríem restar $\frac32F_1$, però apareixerien fraccions. Fem la combinació lineal

    $$
    F_3=2F_3-3F_1.
    $$

    Així, el coeficient de $x$ es transforma en $2\cdot3-3\cdot2=0$:

    $$
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    3&2&-1&4
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-3F_1}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&7&-5&-1
    \end{array}
    \right)
    $$

    Per fer zero sota el segon pivot, tornem a combinar files:

    $$
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&7&-5&-1
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-7F_2}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&0&-17&-51
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    z=3,
    \qquad
    y=2,
    \qquad
    x=1.
    $$

    Per tant, la solució és

    $$
    \boxed{(x,y,z)=(1,2,3).}
    $$

## 6. Sistema compatible indeterminat

!!! example "Exemple 3. Una equació redundant"
    Considerem

    $$
    \begin{cases}
    x+y+z=4\\
    x-y+z=2\\
    2x+2z=6
    \end{cases}
    $$

    Apliquem $F_2=F_2-F_1$ i $F_3=F_3-2F_1$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-2
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&0
    \end{array}
    \right).
    $$

    L'última fila representa la identitat $0=0$ i no aporta cap condició nova. Queda una incògnita lliure.

    Prenem $z=\lambda$, amb $\lambda\in\mathbb{R}$. De la segona equació obtenim $y=1$ i, de la primera,

    $$
    x=3-\lambda.
    $$

    Així, el conjunt de solucions és

    $$
    \boxed{(x,y,z)=(3-\lambda,1,\lambda),\qquad \lambda\in\mathbb{R}.}
    $$

    El sistema té infinites solucions i és **compatible indeterminat**.

## 7. Sistema incompatible

!!! example "Exemple 4. Una contradicció"
    Considerem ara

    $$
    \begin{cases}
    x+y+z=4\\
    x-y+z=2\\
    2x+2z=7
    \end{cases}
    $$

    L'esglaonament condueix a

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&1
    \end{array}
    \right).
    $$

    L'última fila representa l'equació impossible $0=1$. Per tant, el sistema no té cap solució i és **incompatible**.

## 8. Lectura final del sistema esglaonat

| Forma obtinguda després de Gauss | Interpretació | Classificació |
|---|---|:---:|
| Es poden determinar totes les incògnites. | Hi ha una única solució. | SCD |
| Apareix una fila $0=0$ i queda alguna incògnita lliure. | Hi ha infinites solucions. | SCI |
| Apareix una fila $0=k$, amb $k\neq0$. | Hi ha una contradicció. | SI |

!!! tip "Com s'ha de justificar la classificació"
    No n'hi ha prou amb escriure només les sigles. Cal relacionar la forma esglaonada amb el nombre de solucions:

    - **SCD:** «Podem determinar totes les incògnites; per tant, el sistema té una única solució.»
    - **SCI:** «Queda una incògnita lliure; per tant, el sistema té infinites solucions.»
    - **SI:** «Apareix una igualtat impossible; per tant, el sistema no té solució.»

## 9. Errors habituals

!!! warning "Revisa aquests punts"
    - Fer una operació només en alguns termes d'una fila.
    - Oblidar un coeficient $0$ quan una incògnita no apareix.
    - Oblidar el terme independent, situat a la dreta de la barra.
    - Multiplicar o dividir una fila per $0$.
    - Aturar-se en obtenir la forma esglaonada sense fer la substitució enrere.
    - En un SCI, donar només un exemple de solució en lloc d'expressar-les totes.
    - Donar la solució sense classificar ni justificar el sistema.
