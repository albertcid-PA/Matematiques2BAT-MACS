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

### 1.5 Resolució per coeficients

També podem resoldre una equació matricial escrivint els elements desconeguts de $X$ com a incògnites. Si $X$ és d'ordre $2\times2$, posem

$$
X=
\begin{pmatrix}
x&y\\
z&t
\end{pmatrix}
$$

Després efectuem les operacions matricials i utilitzem la igualtat de matrius: els elements que ocupen la mateixa posició han de ser iguals. D'aquesta manera obtenim un sistema d'equacions amb les incògnites $x$, $y$, $z$ i $t$.

!!! tip "Passos de la resolució per coeficients"
    1. Escriu $X$ amb quatre coeficients desconeguts.
    2. Substitueix $X$ a l'equació matricial.
    3. Efectua els productes, les sumes o les restes indicats.
    4. Iguala els elements que ocupen la mateixa posició.
    5. Resol les equacions obtingudes i reconstrueix la matriu $X$.

!!! example "Exemple 5. Determinació dels coeficients de la matriu incògnita"
    Resolem directament per coeficients

    $$
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    X
    =
    \begin{pmatrix}
    5&1\\
    2&-1
    \end{pmatrix}
    $$

    Escrivim

    $$
    X=
    \begin{pmatrix}
    x&y\\
    z&t
    \end{pmatrix}
    $$

    Substituïm $X$ i efectuem el producte:

    $$
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    x&y\\
    z&t
    \end{pmatrix}
    =
    \begin{pmatrix}
    x+2z&y+2t\\
    z&t
    \end{pmatrix}
    =
    \begin{pmatrix}
    5&1\\
    2&-1
    \end{pmatrix}
    $$

    Igualem els elements que ocupen la mateixa posició:

    $$
    \begin{cases}
    x+2z=5\\
    y+2t=1\\
    z=2\\
    t=-1
    \end{cases}
    $$

    De les dues últimes equacions obtenim $z=2$ i $t=-1$. Substituint a les dues primeres,

    $$
    x=1,\qquad y=3
    $$

    Per tant,

    $$
    \boxed{
    X=
    \begin{pmatrix}
    1&3\\
    2&-1
    \end{pmatrix}}
    $$

## 2. Procediment recomanat

!!! tip "Passos per resoldre equacions i sistemes matricials"
    1. Comprova les dimensions de totes les matrius.
    2. Identifica a quin costat de la incògnita hi ha cada factor.
    3. Conserva l'ordre dels productes quan utilitzis matrius inverses.
    4. Si resols per coeficients, escriu els elements de $X$ com a incògnites i iguala les posicions corresponents.
    5. Substitueix el resultat a l'equació o al sistema inicial per comprovar-lo.

## 3. Errors habituals

!!! warning "Revisa aquests punts"
    - Canviar l'ordre dels factors en un producte.
    - Multiplicar només un membre de l'equació per una inversa.
    - Multiplicar per l'esquerra en un membre i per la dreta en l'altre.
    - Utilitzar $A^{-1}$ sense haver comprovat que $A$ és invertible.
    - Sumar o igualar matrius de dimensions diferents.

## 4. Resolució de sistemes d'equacions matricials

!!! abstract "Sistema de dues equacions i dues incògnites matricials"
    Un **sistema d'equacions matricials** està format per diverses equacions que han de complir simultàniament unes matrius incògnites. En aquest apartat resoldrem sistemes de dues equacions amb dues matrius incògnites, $X$ i $Y$.

    Totes les matrius dels exemples són d'ordre $2\times2$.

La forma general que estudiarem és

$$
\begin{cases}
aX+bY=A\\
cX+dY=B
\end{cases}
$$

on $a$, $b$, $c$ i $d$ són nombres reals; $A$ i $B$ són matrius conegudes, i $X$ i $Y$ són les matrius incògnites.

Com que $X$ i $Y$ només estan multiplicades per nombres reals, podem aplicar els mateixos mètodes d'**eliminació** i **substitució** que en un sistema lineal. Cada operació s'ha de fer sobre la matriu sencera.

!!! example "Exemple 6. Sistema de dues equacions amb dues matrius incògnites"
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

## 5. Resolució de sistemes amb la matriu inversa

Un sistema de dues equacions lineals amb dues incògnites es pot escriure en forma matricial:

$$
\begin{cases}
a_{11}x+a_{12}y=b_1\\
a_{21}x+a_{22}y=b_2
\end{cases}
\quad\Longleftrightarrow\quad
\underbrace{
\begin{pmatrix}
a_{11}&a_{12}\\
a_{21}&a_{22}
\end{pmatrix}}_{A}
\underbrace{
\begin{pmatrix}
x\\
y
\end{pmatrix}}_{X}
=
\underbrace{
\begin{pmatrix}
b_1\\
b_2
\end{pmatrix}}_{B}
$$

La matriu $A$ és la **matriu de coeficients**, $X$ és la columna de les incògnites i $B$ és la columna dels termes independents. Per tant, el sistema queda expressat com

$$
AX=B
$$

Si $A$ és invertible, multipliquem els dos membres per l'esquerra per $A^{-1}$:

$$
A^{-1}AX=A^{-1}B
$$

Com que $A^{-1}A=I$, obtenim

$$
\boxed{X=A^{-1}B}
$$

!!! warning "Quan es pot aplicar aquest mètode?"
    Només podem resoldre el sistema d'aquesta manera si la matriu de coeficients és invertible. Si $A$ no té inversa, cal aplicar el mètode de Gauss per decidir si el sistema és SCI o SI.

!!! example "Exemple 7. Resolució d'un sistema amb la matriu inversa"
    Resolem el sistema

    $$
    \begin{cases}
    2x+y=5\\
    x-y=1
    \end{cases}
    $$

    Escrivim el sistema en forma matricial:

    $$
    \begin{pmatrix}
    2&1\\
    1&-1
    \end{pmatrix}
    \begin{pmatrix}
    x\\
    y
    \end{pmatrix}
    =
    \begin{pmatrix}
    5\\
    1
    \end{pmatrix}
    $$

    Calculem la inversa de la matriu de coeficients mitjançant el mètode de Gauss-Jordan. Comencem amb la matriu ampliada $(A\mid I)$:

    $$
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    1&-1&0&1
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{cc|cc}
    1&-1&0&1\\
    2&1&1&0
    \end{array}
    \right)
    $$

    Fem zero sota el primer pivot:

    $$
    \left(
    \begin{array}{cc|cc}
    1&-1&0&1\\
    2&1&1&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-2F_1}
    \left(
    \begin{array}{cc|cc}
    1&-1&0&1\\
    0&3&1&-2
    \end{array}
    \right)
    $$

    Abans d'introduir fraccions, fem zero damunt del segon pivot:

    $$
    \left(
    \begin{array}{cc|cc}
    1&-1&0&1\\
    0&3&1&-2
    \end{array}
    \right)
    \xrightarrow{F_1=3F_1+F_2}
    \left(
    \begin{array}{cc|cc}
    3&0&1&1\\
    0&3&1&-2
    \end{array}
    \right)
    $$

    Ara els dos pivots són $3$. Multipliquem totes dues files per $\frac13$:

    $$
    \left(
    \begin{array}{cc|cc}
    3&0&1&1\\
    0&3&1&-2
    \end{array}
    \right)
    \xrightarrow{\substack{F_1=\frac13F_1\\F_2=\frac13F_2}}
    \left(
    \begin{array}{cc|cc}
    1&0&\frac13&\frac13\\
    0&1&\frac13&-\frac23
    \end{array}
    \right)
    $$

    La part esquerra ja és la identitat. A la part dreta extraiem el factor comú $\frac13$:

    $$
    A^{-1}=
    \begin{pmatrix}
    \frac13&\frac13\\
    \frac13&-\frac23
    \end{pmatrix}
    =
    \frac13
    \begin{pmatrix}
    1&1\\
    1&-2
    \end{pmatrix}
    $$

    Apliquem $X=A^{-1}B$:

    $$
    \begin{pmatrix}
    x\\
    y
    \end{pmatrix}
    =
    \frac13
    \begin{pmatrix}
    1&1\\
    1&-2
    \end{pmatrix}
    \begin{pmatrix}
    5\\
    1
    \end{pmatrix}
    =
    \frac13
    \begin{pmatrix}
    6\\
    3
    \end{pmatrix}
    =
    \begin{pmatrix}
    2\\
    1
    \end{pmatrix}
    $$

    Per tant,

    $$
    \boxed{x=2,\qquad y=1}
    $$

    Comprovem el resultat en el sistema inicial:

    $$
    2\cdot2+1=5
    \qquad\text{i}\qquad
    2-1=1
    $$
