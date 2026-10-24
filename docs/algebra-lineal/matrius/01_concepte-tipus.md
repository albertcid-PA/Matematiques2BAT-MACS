# Concepte i tipus de matrius

Una matriu permet ordenar nombres en files i columnes. Aquesta disposició facilita la representació de dades i l'execució de càlculs amb tota la informació alhora.

## 1. Definició i ordre

!!! abstract "Definició: matriu"
    Una **matriu** és una taula rectangular de nombres disposats en files i columnes. S'acostuma a representar amb una lletra majúscula:

    $$
    A=(a_{ij})_{m\times n}.
    $$

    El símbol $a_{ij}$ designa l'element situat a la fila $i$ i la columna $j$. Si la matriu té $m$ files i $n$ columnes, diem que és d'**ordre** o **dimensió** $m\times n$.

De manera desenvolupada, aquesta notació representa

$$
A=(a_{ij})_{m\times n}
=
\begin{pmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{m1}&a_{m2}&\cdots&a_{mn}
\end{pmatrix}
$$

Per exemple,

$$
A=
\begin{pmatrix}
2&-1&4\\
0&3&5
\end{pmatrix}
$$

és una matriu d'ordre $2\times3$. Té dues files i tres columnes. Alguns dels seus elements són

$$
a_{11}=2,
\qquad
a_{23}=5.
$$

!!! warning "Primer files, després columnes"
    En l'ordre $m\times n$, el primer nombre indica les files i el segon, les columnes. De la mateixa manera, a $a_{ij}$, el primer subíndex indica la fila i el segon, la columna.

## 2. Igualtat de matrius

!!! abstract "Definició: matrius iguals"
    Dues matrius són iguals si tenen el mateix ordre i tots els elements que ocupen la mateixa posició són iguals.

    Si

    $$
    A=(a_{ij})_{m\times n}
    \qquad\text{i}\qquad
    B=(b_{ij})_{p\times q},
    $$

    aleshores

    $$
    A=B
    \quad\Longleftrightarrow\quad
    m=p,\ n=q
    \quad\text{i}\quad
    a_{ij}=b_{ij}\ \text{per a tot }i,j.
    $$

    En particular, quan ja sabem que tenen el mateix ordre,

    $$
    (a_{ij})_{m\times n}=(b_{ij})_{m\times n}
    \quad\Longleftrightarrow\quad
    a_{ij}=b_{ij}\ \text{per a tot }i,j.
    $$

Per exemple, si

$$
\begin{pmatrix}
x&2\\
-1&y
\end{pmatrix}
=
\begin{pmatrix}
3&2\\
-1&5
\end{pmatrix},
$$

aleshores $x=3$ i $y=5$.

## 3. Tipus de matrius

Les matrius es poden classificar segons la forma o segons els seus elements.

| Tipus | Característica | Exemple |
|---|---|---|
| Matriu fila | Té una sola fila. | $\begin{pmatrix}1&-2&3\end{pmatrix}$ |
| Matriu columna | Té una sola columna. | $\begin{pmatrix}1\\-2\\3\end{pmatrix}$ |
| Matriu rectangular | El nombre de files és diferent del nombre de columnes. | $\begin{pmatrix}1&0&2\\3&-1&4\end{pmatrix}$ |
| Matriu quadrada | Té el mateix nombre de files que de columnes. | $\begin{pmatrix}1&2\\3&4\end{pmatrix}$ |
| Matriu nul·la | Tots els elements són $0$. | $\begin{pmatrix}0&0\\0&0\end{pmatrix}$ |
| Matriu diagonal | És quadrada i tots els elements que no són a la diagonal principal són $0$. | $\begin{pmatrix}2&0\\0&-1\end{pmatrix}$ |
| Matriu escalar | És diagonal i tots els elements de la diagonal principal són iguals. | $\begin{pmatrix}3&0\\0&3\end{pmatrix}$ |
| Matriu identitat | És escalar i els elements de la diagonal principal són $1$. | $I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ |

Una matriu quadrada d'ordre $n$ té $n$ files i $n$ columnes. La seva diagonal principal està formada pels elements $a_{11},a_{22},\ldots,a_{nn}$.

### 3.1 Matrius triangulars

Una matriu quadrada és **triangular superior** si tots els elements situats per sota de la diagonal principal són zero:

$$
\begin{pmatrix}
2&-1&4\\
0&3&5\\
0&0&-2
\end{pmatrix}
$$

És **triangular inferior** si tots els elements situats per sobre de la diagonal principal són zero:

$$
\begin{pmatrix}
2&0&0\\
-1&3&0\\
4&5&-2
\end{pmatrix}
$$

## 4. Matriu transposada

!!! abstract "Definició: matriu transposada"
    La **matriu transposada** de $A$, que escrivim $A^t$, s'obté convertint les files d'$A$ en les columnes d'$A^t$.

    Algebraicament,

    $$
    A=(a_{ij})_{m\times n}
    \quad\Longrightarrow\quad
    A^t=(a_{ji})_{n\times m}.
    $$

Si

$$
A=
\begin{pmatrix}
1&2&-1\\
3&0&4
\end{pmatrix},
$$

aleshores

$$
A^t=
\begin{pmatrix}
1&3\\
2&0\\
-1&4
\end{pmatrix}
$$

Per tant, si $A$ és d'ordre $m\times n$, la seva transposada és d'ordre $n\times m$.

!!! note "Matriu simètrica"
    Una matriu quadrada és **simètrica** si coincideix amb la seva transposada, és a dir, si $A=A^t$. Per exemple,

    $$
    \begin{pmatrix}
    2&-1\\
    -1&3
    \end{pmatrix}
    $$

    és simètrica.

## 5. Interpretació de les dades

Una matriu només és útil si sabem què representa cada fila i cada columna. Per exemple, una empresa pot registrar les unitats venudes de dos productes en tres botigues mitjançant

$$
V=
\begin{pmatrix}
20&15\\
12&18\\
25&10
\end{pmatrix}
$$

Si les files corresponen a les botigues $1$, $2$ i $3$, i les columnes als productes $A$ i $B$, l'element $v_{32}=10$ indica que la tercera botiga ha venut $10$ unitats del producte $B$.

!!! tip "Abans d'operar"
    Identifica sempre què representa cada fila, cada columna i cada unitat. Això permet interpretar correctament el resultat d'una operació matricial.
