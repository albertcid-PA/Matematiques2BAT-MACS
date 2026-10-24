# Matriu inversa

La matriu inversa té un paper semblant al de l'invers d'un nombre. Ens permet desfer una multiplicació matricial, però només existeix per a algunes matrius quadrades.

## 1. Definició

!!! abstract "Definició: matriu inversa"
    Sigui $A$ una matriu quadrada. La seva **matriu inversa**, si existeix, és la matriu $A^{-1}$ que compleix

    $$
    AA^{-1}=A^{-1}A=I.
    $$

    Quan $A^{-1}$ existeix, diem que $A$ és **invertible** o **regular**. Si no existeix, diem que és **singular**.

!!! warning "No és l'invers de cada element"
    La notació $A^{-1}$ no significa que hàgim de calcular l'invers de cada element d'$A$. La inversa es defineix mitjançant el producte matricial.

## 2. Mètode de Gauss-Jordan

Per calcular la inversa d'una matriu quadrada $A$ utilitzarem el **mètode de Gauss-Jordan**.

!!! tip "Procediment"
    1. Escriu la matriu $A$ i, a la seva dreta, la matriu identitat del mateix ordre:

        $$
        \left(A\mid I\right)
        $$

    2. Aplica transformacions elementals de fila a tota la matriu ampliada.
    3. Continua fins que la part esquerra es converteixi en la matriu identitat.
    4. La part dreta és aleshores la matriu inversa:

        $$
        \left(A\mid I\right)
        \longrightarrow
        \left(I\mid A^{-1}\right)
        $$

Les transformacions elementals que podem utilitzar són les mateixes que en el mètode de Gauss:

- permutar dues files;
- multiplicar una fila per un nombre diferent de zero;
- sumar a una fila un múltiple d'una altra.

!!! warning "L'operació afecta tota la fila"
    Cada transformació s'ha d'aplicar a tots els elements de la fila, tant a la part esquerra com a la part dreta de la barra.

## 3. Càlcul d'una inversa

!!! example "Exemple. Inversa pel mètode de Gauss-Jordan"
    Considerem

    $$
    A=
    \begin{pmatrix}
    2&1\\
    3&2
    \end{pmatrix}
    $$

    Col·loquem la matriu identitat a la dreta d'$A$:

    $$
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    3&2&0&1
    \end{array}
    \right)
    $$

    Anul·lem el primer element de la segona fila sense introduir fraccions:

    $$
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    3&2&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=2F_2-3F_1}
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    0&1&-3&2
    \end{array}
    \right)
    $$

    Ara anul·lem l'element situat damunt del segon pivot:

    $$
    \left(
    \begin{array}{cc|cc}
    2&1&1&0\\
    0&1&-3&2
    \end{array}
    \right)
    \xrightarrow{F_1=F_1-F_2}
    \left(
    \begin{array}{cc|cc}
    2&0&4&-2\\
    0&1&-3&2
    \end{array}
    \right)
    $$

    Finalment, convertim el primer pivot en $1$:

    $$
    \left(
    \begin{array}{cc|cc}
    2&0&4&-2\\
    0&1&-3&2
    \end{array}
    \right)
    \xrightarrow{F_1=\frac12F_1}
    \left(
    \begin{array}{cc|cc}
    1&0&2&-1\\
    0&1&-3&2
    \end{array}
    \right)
    $$

    La part esquerra ja és $I_2$. Per tant, la part dreta és la inversa:

    $$
    \boxed{
    A^{-1}=
    \begin{pmatrix}
    2&-1\\
    -3&2
    \end{pmatrix}
    }
    $$

## 4. Càlcul per coeficients

La definició $AA^{-1}=I$ també permet calcular la inversa introduint incògnites per als seus elements. Aplicarem aquest procediment a la mateixa matriu de l'exemple anterior:

$$
A=
\begin{pmatrix}
2&1\\
3&2
\end{pmatrix}
$$

Com que $A^{-1}$ és una matriu d'ordre $2\times2$, escrivim

$$
A^{-1}=
\begin{pmatrix}
x&y\\
z&t
\end{pmatrix}
$$

Imposem la condició $AA^{-1}=I_2$:

$$
\begin{pmatrix}
2&1\\
3&2
\end{pmatrix}
\begin{pmatrix}
x&y\\
z&t
\end{pmatrix}
=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

Efectuem el producte:

$$
\begin{pmatrix}
2x+z&2y+t\\
3x+2z&3y+2t
\end{pmatrix}
=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
$$

Com que dues matrius són iguals quan coincideixen els elements que ocupen la mateixa posició, obtenim el sistema

$$
\begin{cases}
2x+z=1\\
2y+t=0\\
3x+2z=0\\
3y+2t=1
\end{cases}
$$

El podem separar en dos sistemes de dues equacions:

$$
\begin{cases}
2x+z=1\\
3x+2z=0
\end{cases}
\qquad
\begin{cases}
2y+t=0\\
3y+2t=1
\end{cases}
$$

En el primer sistema eliminem $z$ i, en el segon, eliminem $t$:

$$
2(2x+z)-(3x+2z)=2-0
\quad\Longrightarrow\quad
x=2,
\qquad z=-3,
$$

$$
2(2y+t)-(3y+2t)=0-1
\quad\Longrightarrow\quad
y=-1,
\qquad t=2.
$$

Per tant,

$$
\boxed{
A^{-1}=
\begin{pmatrix}
2&-1\\
-3&2
\end{pmatrix}
}
$$

El resultat coincideix amb l'obtingut pel mètode de Gauss-Jordan.

!!! note "Quin mètode utilitzarem?"
    El càlcul per coeficients mostra la relació entre la definició de matriu inversa, el producte de matrius i els sistemes d'equacions. Per calcular inverses de manera sistemàtica, utilitzarem el mètode de Gauss-Jordan.

## 5. Comprovació

Podem comprovar el resultat multiplicant $A$ per la matriu obtinguda:

$$
AA^{-1}
=
\begin{pmatrix}
2&1\\
3&2
\end{pmatrix}
\begin{pmatrix}
2&-1\\
-3&2
\end{pmatrix}
=
\begin{pmatrix}
1&0\\
0&1
\end{pmatrix}
=I_2.
$$

Com que també es compleix $A^{-1}A=I_2$, la matriu calculada és la inversa d'$A$.

## 6. Com sabem que una matriu no té inversa?

Si durant el mètode de Gauss-Jordan no podem transformar la part esquerra en la matriu identitat, la matriu no té inversa.

Considerem

$$
B=
\begin{pmatrix}
1&2\\
2&4
\end{pmatrix}
$$

Comencem amb la matriu ampliada i fem zero sota el primer pivot:

$$
\left(
\begin{array}{cc|cc}
1&2&1&0\\
2&4&0&1
\end{array}
\right)
\xrightarrow{F_2=F_2-2F_1}
\left(
\begin{array}{cc|cc}
1&2&1&0\\
0&0&-2&1
\end{array}
\right)
$$

A la part esquerra ha aparegut una fila de zeros. Per tant, no es pot convertir aquesta part en $I_2$ i la matriu $B$ no té inversa: és singular.

!!! note "Relació entre les files"
    La segona fila de $B$ és el doble de la primera. No aporta informació independent i, per això, l'esglaonament produeix una fila nul·la a la part esquerra.

## 7. Propietats de la inversa

Si les matrius són invertibles i les operacions estan definides, es compleix:

$$
(A^{-1})^{-1}=A,
$$

$$
(AB)^{-1}=B^{-1}A^{-1},
$$

$$
(A^t)^{-1}=(A^{-1})^t.
$$

!!! warning "La inversa d'un producte"
    En invertir un producte, l'ordre dels factors canvia. En general, $(AB)^{-1}$ no és $A^{-1}B^{-1}$, sinó $B^{-1}A^{-1}$.
