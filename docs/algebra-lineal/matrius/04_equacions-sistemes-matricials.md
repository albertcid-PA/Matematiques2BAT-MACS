# Equacions i sistemes matricials

En una equació matricial, la incògnita és una matriu. Per aïllar-la utilitzem les operacions matricials i, quan cal, la matriu inversa.

En tots els exemples d'aquesta pàgina, les matrius incògnites i les matrius conegudes són d'ordre $2\times2$.

!!! warning "Propietats que utilitzarem"
    Sempre que les dimensions siguin compatibles, podem aplicar aquestes propietats:

    - **Commutativa de la suma:** $A+B=B+A$.
    - **Associativa del producte:** $(AB)C=A(BC)$.
    - **Distributives:** $A(B+C)=AB+AC$ i $(A+B)C=AC+BC$.
    - **Matriu identitat:** $AI=IA=A$.
    - **Matriu inversa, si $A$ és invertible:** $A^{-1}A=AA^{-1}=I$.

    En canvi, la multiplicació de matrius **no compleix la propietat commutativa**. En general,

    $$
    AB\neq BA.
    $$

    Per això, si multipliquem un membre d'una equació per l'esquerra o per la dreta, hem de multiplicar l'altre membre pel mateix costat i conservar l'ordre dels factors.

## 1. Equacions matricials

!!! abstract "Definició: equació matricial"
    Una **equació matricial** és una igualtat entre matrius en què alguna de les matrius és desconeguda. Resoldre-la consisteix a trobar totes les matrius que fan certa la igualtat.

Abans d'operar, cal comprovar que totes les sumes i tots els productes estan definits.

### 1.1 Equacions de la forma $X+A=B$

En aquest cas, restem $A$ als dos membres:

$$
X=B-A.
$$

!!! example "Exemple 1. Suma de matrius"
    Resolem

    $$
    X+
    \begin{pmatrix}
    1&-2\\
    3&0
    \end{pmatrix}
    =
    \begin{pmatrix}
    4&1\\
    5&-1
    \end{pmatrix}
    $$

    Per tant,

    $$
    X=
    \begin{pmatrix}
    4&1\\
    5&-1
    \end{pmatrix}
    -
    \begin{pmatrix}
    1&-2\\
    3&0
    \end{pmatrix}
    =
    \begin{pmatrix}
    3&3\\
    2&-1
    \end{pmatrix}
    $$

### 1.2 Equacions de la forma $AX=B$

Si $A$ és invertible, multipliquem els dos membres **per l'esquerra** per $A^{-1}$:

$$
A^{-1}AX=A^{-1}B.
$$

Com que $A^{-1}A=I$, obtenim

$$
X=A^{-1}B.
$$

!!! example "Exemple 2. La incògnita és a la dreta"
    Resolem

    $$
    \begin{pmatrix}
    1&1\\
    0&1
    \end{pmatrix}
    X
    =
    \begin{pmatrix}
    3&5\\
    2&4
    \end{pmatrix}
    $$

    La inversa de la matriu que multiplica $X$, obtinguda pel mètode de Gauss-Jordan, és

    $$
    \begin{pmatrix}
    1&1\\
    0&1
    \end{pmatrix}^{-1}
    =
    \begin{pmatrix}
    1&-1\\
    0&1
    \end{pmatrix}
    $$

    Multipliquem per l'esquerra:

    $$
    X=
    \begin{pmatrix}
    1&-1\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    3&5\\
    2&4
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&1\\
    2&4
    \end{pmatrix}
    $$

### 1.3 Equacions de la forma $XA=B$

Si $A$ és invertible, ara hem de multiplicar els dos membres **per la dreta** per $A^{-1}$:

$$
XAA^{-1}=BA^{-1}.
$$

Per tant,

$$
X=BA^{-1}.
$$

!!! example "Exemple 3. La incògnita és a l'esquerra"
    Resolem

    $$
    X
    \begin{pmatrix}
    1&1\\
    0&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    3&5\\
    2&4
    \end{pmatrix}
    $$

    Multipliquem per la dreta per la inversa:

    $$
    X=
    \begin{pmatrix}
    3&5\\
    2&4
    \end{pmatrix}
    \begin{pmatrix}
    1&-1\\
    0&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    3&2\\
    2&2
    \end{pmatrix}
    $$

!!! warning "No es pot canviar l'ordre"
    Les equacions $AX=B$ i $XA=B$ no es resolen de la mateixa manera:

    $$
    AX=B \quad\Longrightarrow\quad X=A^{-1}B,
    $$

    $$
    XA=B \quad\Longrightarrow\quad X=BA^{-1}.
    $$

### 1.4 Equacions de la forma $AXB=C$

Si $A$ i $B$ són invertibles, multipliquem per $A^{-1}$ a l'esquerra i per $B^{-1}$ a la dreta:

$$
AXB=C
\quad\Longrightarrow\quad
X=A^{-1}CB^{-1}.
$$

!!! example "Exemple 4. La incògnita entre dues matrius"
    Resolem

    $$
    \begin{pmatrix}
    1&1\\
    0&1
    \end{pmatrix}
    X
    \begin{pmatrix}
    1&0\\
    1&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    10&6\\
    7&4
    \end{pmatrix}
    $$

    Les inverses, calculades prèviament pel mètode de Gauss-Jordan, són

    $$
    \begin{pmatrix}
    1&1\\
    0&1
    \end{pmatrix}^{-1}
    =
    \begin{pmatrix}
    1&-1\\
    0&1
    \end{pmatrix},
    \qquad
    \begin{pmatrix}
    1&0\\
    1&1
    \end{pmatrix}^{-1}
    =
    \begin{pmatrix}
    1&0\\
    -1&1
    \end{pmatrix}
    $$

    Així,

    $$
    X=
    \begin{pmatrix}
    1&-1\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    10&6\\
    7&4
    \end{pmatrix}
    \begin{pmatrix}
    1&0\\
    -1&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&2\\
    3&4
    \end{pmatrix}
    $$

## 2. Procediment recomanat

!!! tip "Passos per resoldre equacions i sistemes matricials"
    1. Comprova les dimensions de totes les matrius.
    2. Identifica a quin costat de la incògnita hi ha cada factor.
    3. Conserva l'ordre dels productes quan utilitzis matrius inverses.
    4. Opera amb la matriu sencera; no tractis els seus elements com a incògnites separades si no és necessari.
    5. Substitueix el resultat a l'equació o al sistema inicial per comprovar-lo.

## 3. Errors habituals

!!! warning "Revisa aquests punts"
    - Canviar l'ordre dels factors en un producte.
    - Multiplicar només un membre de l'equació per una inversa.
    - Multiplicar per l'esquerra en un membre i per la dreta en l'altre.
    - Utilitzar $A^{-1}$ sense haver comprovat que $A$ és invertible.
    - Sumar o igualar matrius de dimensions diferents.

## 4. Resolució de sistemes d'equacions matricials $2\times2$

!!! abstract "Sistema de dues equacions i dues incògnites matricials"
    Un **sistema d'equacions matricials $2\times2$** està format per dues equacions que han de complir simultàniament dues matrius incògnites, que podem anomenar $X$ i $Y$.

    En l'exemple següent, a més, totes les matrius són d'ordre $2\times2$.

Quan $X$ i $Y$ només estan multiplicades per nombres reals, podem aplicar els mateixos mètodes d'eliminació i substitució que en un sistema lineal. Cada operació s'ha de fer sobre la matriu sencera.

!!! example "Exemple 5. Sistema de dues equacions amb dues matrius incògnites"
    Resolem el sistema

    $$
    \begin{cases}
    X+Y=
    \begin{pmatrix}
    3&1\\
    5&2
    \end{pmatrix}\\[6pt]
    2X-Y=
    \begin{pmatrix}
    0&5\\
    1&4
    \end{pmatrix}
    \end{cases}
    $$

    Sumem les dues equacions per eliminar $Y$:

    $$
    3X=
    \begin{pmatrix}
    3&1\\
    5&2
    \end{pmatrix}
    +
    \begin{pmatrix}
    0&5\\
    1&4
    \end{pmatrix}
    =
    \begin{pmatrix}
    3&6\\
    6&6
    \end{pmatrix}
    $$

    Dividim tots els elements entre $3$:

    $$
    X=
    \begin{pmatrix}
    1&2\\
    2&2
    \end{pmatrix}
    $$

    Substituïm a la primera equació:

    $$
    Y=
    \begin{pmatrix}
    3&1\\
    5&2
    \end{pmatrix}
    -
    \begin{pmatrix}
    1&2\\
    2&2
    \end{pmatrix}
    =
    \begin{pmatrix}
    2&-1\\
    3&0
    \end{pmatrix}
    $$

    Per tant, la solució és

    $$
    \boxed{
    X=\begin{pmatrix}1&2\\2&2\end{pmatrix},
    \qquad
    Y=\begin{pmatrix}2&-1\\3&0\end{pmatrix}
    }
    $$

    Comprovem la solució substituint $X$ i $Y$ a les dues equacions inicials:

    $$
    X+Y=
    \begin{pmatrix}
    3&1\\
    5&2
    \end{pmatrix},
    \qquad
    2X-Y=
    \begin{pmatrix}
    0&5\\
    1&4
    \end{pmatrix}
    $$
