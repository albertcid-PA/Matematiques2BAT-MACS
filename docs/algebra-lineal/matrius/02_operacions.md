# Operacions amb matrius

Les operacions amb matrius tenen condicions pròpies. Abans de calcular, cal comprovar sempre si les dimensions són compatibles.

## 1. Suma i resta

!!! abstract "Condició per sumar o restar"
    Només podem sumar o restar matrius que tinguin el mateix ordre. L'operació es fa element a element.

    Si $A=(a_{ij})_{m\times n}$ i $B=(b_{ij})_{m\times n}$, aleshores

    $$
    A+B=(a_{ij}+b_{ij})_{m\times n},
    \qquad
    A-B=(a_{ij}-b_{ij})_{m\times n}.
    $$

Si

$$
A=\begin{pmatrix}1&-2\\3&0\end{pmatrix},
\qquad
B=\begin{pmatrix}4&1\\-1&5\end{pmatrix},
$$

aleshores

$$
A+B=
\begin{pmatrix}
1+4&-2+1\\
3+(-1)&0+5
\end{pmatrix}
=
\begin{pmatrix}
5&-1\\
2&5
\end{pmatrix},
$$

i

$$
A-B=
\begin{pmatrix}
-3&-3\\
4&-5
\end{pmatrix}
$$

## 2. Producte d'una matriu per un nombre

Per multiplicar una matriu per un nombre real, multipliquem tots els seus elements per aquest nombre.

Si $A=(a_{ij})_{m\times n}$ i $\lambda\in\mathbb{R}$, aleshores

$$
\lambda A=(\lambda a_{ij})_{m\times n}.
$$

$$
-2
\begin{pmatrix}
1&-3\\
2&4
\end{pmatrix}
=
\begin{pmatrix}
-2&6\\
-4&-8
\end{pmatrix}
$$

## 3. Producte de matrius

!!! abstract "Condició per multiplicar"
    El producte $AB$ només està definit si el nombre de columnes d'$A$ coincideix amb el nombre de files de $B$.

    Si $A$ és d'ordre $m\times n$ i $B$ és d'ordre $n\times p$, el producte $AB$ és d'ordre $m\times p$.

Cada element del producte s'obté multiplicant una fila de la primera matriu per una columna de la segona i sumant els resultats.

Algebraicament, si

$$
A=(a_{ij})_{m\times n},
\qquad
B=(b_{ij})_{n\times p},
$$

aleshores

$$
AB=C=(c_{ij})_{m\times p},
$$

on

$$
c_{ij}=a_{i1}b_{1j}+a_{i2}b_{2j}+\cdots+a_{in}b_{nj}
=\sum_{k=1}^{n}a_{ik}b_{kj}.
$$

Per exemple,

$$
A=
\begin{pmatrix}
1&2&-1\\
0&3&2
\end{pmatrix}_{2\times3},
\qquad
B=
\begin{pmatrix}
2&1\\
-1&0\\
3&2
\end{pmatrix}_{3\times2}
$$

El producte $AB$ existeix i és d'ordre $2\times2$:

$$
AB=
\begin{pmatrix}
1\cdot2+2\cdot(-1)+(-1)\cdot3&1\cdot1+2\cdot0+(-1)\cdot2\\
0\cdot2+3\cdot(-1)+2\cdot3&0\cdot1+3\cdot0+2\cdot2
\end{pmatrix}
=
\begin{pmatrix}
-3&-1\\
3&4
\end{pmatrix}
$$

!!! tip "Files per columnes"
    Per calcular l'element situat a la fila $i$ i la columna $j$ del producte, utilitza la fila $i$ de la primera matriu i la columna $j$ de la segona.

## 4. L'ordre dels factors és important

En general, el producte de matrius no és commutatiu:

$$
AB\neq BA.
$$

Fins i tot pot passar que $AB$ existeixi i $BA$ no existeixi. Quan existeixen tots dos productes, tampoc no han de coincidir. Per exemple, si

$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},
\qquad
B=\begin{pmatrix}1&0\\1&1\end{pmatrix},
$$

obtenim

$$
AB=\begin{pmatrix}2&1\\1&1\end{pmatrix},
\qquad
BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}
$$

Per tant, $AB\neq BA$.

## 5. Propietats de les operacions

Sempre que les dimensions permetin efectuar les operacions, es compleixen les propietats següents:

| Propietat | Expressió |
|---|---|
| Commutativa de la suma | $A+B=B+A$ |
| Associativa de la suma | $(A+B)+C=A+(B+C)$ |
| Associativa del producte | $(AB)C=A(BC)$ |
| Distributiva per l'esquerra | $A(B+C)=AB+AC$ |
| Distributiva per la dreta | $(A+B)C=AC+BC$ |
| Element neutre del producte | $AI=IA=A$ |

!!! warning "El producte no és commutatiu"
    No podem canviar l'ordre dels factors. En particular, d'una igualtat com $AX=B$ no podem passar indistintament a $X=BA^{-1}$: cal tenir en compte a quin costat multiplica cada matriu.

## 6. Potències d'una matriu

Si $A$ és quadrada, podem definir

$$
A^2=A\cdot A,
\qquad
A^3=A\cdot A\cdot A,
$$

i, en general, $A^n$ és el producte d'$A$ per ella mateixa $n$ vegades.

Per conveni,

$$
A^0=I.
$$

Per exemple,

$$
\begin{pmatrix}
1&1\\
0&1
\end{pmatrix}^{2}
=
\begin{pmatrix}
1&2\\
0&1
\end{pmatrix}
$$
