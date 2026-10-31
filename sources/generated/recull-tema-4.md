<!-- Fitxer generat automàticament per scripts/genera_recull_tema_4.py. -->

<div class="pdf-topic-cover" markdown="1">

# 4. Matrius {.pdf-topic-collection}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Concepte i tipus de matrius](#concepte-i-tipus-de-matrius)
2. [Operacions amb matrius](#operacions-amb-matrius)
3. [Matriu inversa](#matriu-inversa)
4. [Equacions i sistemes matricials](#equacions-i-sistemes-matricials)
5. [Problemes de matrius](#problemes-de-matrius)

</div>

</div>

## Concepte i tipus de matrius

Una matriu permet ordenar nombres en files i columnes. Aquesta disposició facilita la representació de dades i l'execució de càlculs amb tota la informació alhora.

### 1. Definició i ordre

!!! abstract "Definició: matriu"
    Una **matriu** és una taula rectangular de nombres disposats en files i columnes. S'acostuma a representar amb una lletra majúscula:

    $$
    A=(a_{ij})_{m\times n}.
    $$

    El símbol $a_{ij}$ designa l'element situat a la fila $i$ i la columna $j$. Si la matriu té $m$ files i $n$ columnes, diem que és d'**ordre** o **dimensió** $m\times n$.

!!! note "Conveni de notació"
    Utilitzarem **lletres majúscules** com $A$, $B$, $C$ o $X$ per representar matrius. Les **lletres minúscules** com $a$, $b$, $c$, $x$ o $y$ representaran nombres: poden ser elements d'una matriu, coeficients o incògnites. Per tant, una minúscula també pot aparèixer fora d'una matriu com a factor escalar, per exemple $aA$.

    Així, a $A=(a_{ij})_{m\times n}$, $A$ és la matriu completa i $a_{ij}$ és un dels seus elements.

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

### 2. Igualtat de matrius

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
\end{pmatrix}
$$

aleshores $x=3$ i $y=5$.

<div class="pdf-topic-section-break"></div>

### 3. Tipus de matrius

Les matrius es poden classificar segons la forma o segons els seus elements.

| Tipus | Característica | Exemple |
|---|---|---|
| Matriu fila | Té una sola fila. | $\begin{pmatrix}1&-2&3\end{pmatrix}$ |
| Matriu columna | Té una sola columna. | $\begin{pmatrix}1\\-2\\3\end{pmatrix}$ |
| Matriu rectangular | El nombre de files és diferent del nombre de columnes. | $\begin{pmatrix}1&0&2\\3&-1&4\end{pmatrix}$ |
| Matriu quadrada | Té el mateix nombre de files que de columnes. | $\begin{pmatrix}1&2\\3&4\end{pmatrix}$ |
| Matriu nul·la | Tots els elements són $0$. | $O=\begin{pmatrix}0&0\\0&0\end{pmatrix}$ |
| Matriu diagonal | És quadrada i tots els elements que no són a la diagonal principal són $0$. | $\begin{pmatrix}2&0\\0&-1\end{pmatrix}$ |
| Matriu escalar | És diagonal i tots els elements de la diagonal principal són iguals. | $\begin{pmatrix}3&0\\0&3\end{pmatrix}$ |
| Matriu identitat | És escalar i els elements de la diagonal principal són $1$. | $I_2=\begin{pmatrix}1&0\\0&1\end{pmatrix}$ |

Una matriu quadrada d'ordre $n$ té $n$ files i $n$ columnes. La seva diagonal principal està formada pels elements $a_{11},a_{22},\ldots,a_{nn}$.

!!! note "Subíndexs i ordre de les matrius"
    Quan volem indicar l'ordre d'una **matriu rectangular**, necessitem dos nombres: $A_{m\times n}$ representa una matriu amb $m$ files i $n$ columnes.

    En una **matriu quadrada**, com que el nombre de files i de columnes coincideix, podem adoptar el conveni d'utilitzar un sol subíndex: $A_n$ representarà una matriu d'ordre $n\times n$. Per exemple, $A_3$ és una matriu quadrada d'ordre $3$, mentre que $B_{2\times3}$ és una matriu rectangular d'ordre $2\times3$. També podem trobar la notació completa $A_{n\times n}$.

    Aquest mateix conveni s'utilitza en notacions com $O_n$ per a la matriu nul·la quadrada i $I_n$ per a la matriu identitat d'ordre $n$.

<div class="pdf-topic-section-break"></div>

#### 3.1 Matrius triangulars

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

### 4. Matriu transposada

!!! abstract "Definició: matriu transposada"
    La **matriu transposada** de $A$, que escrivim $A^t$, s'obté convertint les files d'$A$ en les columnes d'$A^t$.

    Algebraicament,

    $$
    A=(a_{ij})_{m\times n}
    \quad\Longrightarrow\quad
    A^t=(a_{ji})_{n\times m}.
    $$

Per tant, si $A$ és d'ordre $m\times n$, la seva transposada és d'ordre $n\times m$.

!!! note "Interpretació de la transposició"
    La transposició no modifica les dades: n'intercanvia l'organització. Si les files d'una matriu representen magatzems i les columnes representen productes, a la matriu transposada les files representen els productes i les columnes, els magatzems.

    Aquesta reorganització pot ser útil per presentar les dades des d'un altre punt de vista o per col·locar-les en l'ordre necessari abans d'un producte de matrius.

!!! example "Canviar el punt de vista de les dades"
    La matriu $Q$ indica les quantitats de tres productes que necessiten dos magatzems:

    $$
    Q=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    10&5&8\\
    6&9&4
    \end{pmatrix}
    \end{array}
    $$

    En transposar-la, els productes passen a les files i els magatzems, a les columnes:

    $$
    Q^t=
    \begin{array}{cc}
    &\begin{array}{cc}M_1\!&\!M_2\end{array}\\[0.5mm]
    \begin{array}{c}P_1\\P_2\\P_3\end{array}
    &
    \begin{pmatrix}
    10&6\\
    5&9\\
    8&4
    \end{pmatrix}
    \end{array}
    $$

    Per tant, $Q$ és d'ordre $2\times3$ i $Q^t$ és d'ordre $3\times2$.

!!! note "Matriu simètrica"
    Una matriu quadrada és **simètrica** si coincideix amb la seva transposada, és a dir, si $A=A^t$. Per exemple,

    $$
    \begin{pmatrix}
    2&-1\\
    -1&3
    \end{pmatrix}
    $$

    és simètrica.

### 5. Interpretació de les dades

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

<div class="pdf-topic-section-break"></div>

## Operacions amb matrius

Les operacions amb matrius tenen condicions pròpies. Abans de calcular, cal comprovar sempre si les dimensions són compatibles.

### 1. Suma i resta

!!! abstract "Condició per sumar o restar"
    Només podem sumar o restar matrius que tinguin el mateix ordre. L'operació es fa element a element.

    Si $A=(a_{ij})_{m\times n}$ i $B=(b_{ij})_{m\times n}$, aleshores

    $$
    A+B=(a_{ij}+b_{ij})_{m\times n},
    \qquad
    A-B=(a_{ij}-b_{ij})_{m\times n}.
    $$

!!! note "Interpretació de la suma i la resta"
    La suma permet **agrupar dades de les mateixes categories** i la resta permet **comparar dues situacions** o calcular-ne la variació. El resultat conserva el significat de les files i les columnes de les matrius inicials.

    No n'hi ha prou que les dues matrius tinguin el mateix ordre: també han de representar les mateixes categories, en el mateix ordre i amb unitats compatibles.

!!! example "Quantitats en dos períodes"
    Les matrius $Q_1$ i $Q_2$ indiquen les unitats de tres productes que necessiten dos magatzems durant dos períodes diferents:

    $$
    Q_1=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    10&5&8\\
    6&9&4
    \end{pmatrix}
    \end{array}
    $$

    $$
    Q_2=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    12&4&9\\
    5&11&6
    \end{pmatrix}
    \end{array}
    $$

    La suma dona les quantitats totals dels dos períodes:

    $$
    Q_1+Q_2=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    22&9&17\\
    11&20&10
    \end{pmatrix}
    \end{array}
    $$

    La diferència $Q_2-Q_1$ mostra la variació del segon període respecte del primer:

    $$
    Q_2-Q_1=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    2&-1&1\\
    -1&2&2
    \end{pmatrix}
    \end{array}
    $$

    Per exemple, el valor $-1$ de la primera fila indica que el magatzem $M_1$ necessita una unitat menys del producte $P_2$ en el segon període.

### 2. Producte d'una matriu per un nombre

Per multiplicar una matriu per un nombre real, multipliquem tots els seus elements per aquest nombre.

Si $A=(a_{ij})_{m\times n}$ i $\lambda\in\mathbb{R}$, aleshores

$$
\lambda A=(\lambda a_{ij})_{m\times n}.
$$

!!! note "Interpretació del factor"
    Multiplicar una matriu per un nombre significa aplicar el mateix factor a totes les dades. Per exemple, multiplicar per $1{,}10$ representa un augment del $10\,\%$, mentre que multiplicar per $0{,}80$ representa una reducció del $20\,\%$.

    Les files i les columnes mantenen el mateix significat; només canvien els valors dels elements.

!!! example "Duplicar les quantitats"
    Si volem cobrir dos períodes iguals al primer de l'exemple anterior, multipliquem $Q_1$ per $2$:

    $$
    2Q_1=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\end{array}
    &
    \begin{pmatrix}
    20&10&16\\
    12&18&8
    \end{pmatrix}
    \end{array}
    $$

    Totes les quantitats es dupliquen, però les files continuen representant els magatzems i les columnes, els productes.

### 3. Producte de matrius

!!! abstract "Condició per multiplicar"
    **Abans de multiplicar**, ens hem d'assegurar que el nombre de columnes de la primera matriu és igual al nombre de files de la segona. Si no coincideixen, el producte no es pot efectuar.

    Si $A$ és d'ordre $m\times n$ i $B$ és d'ordre $n\times p$, el producte $AB$ és d'ordre $m\times p$.

Cada element del producte s'obté multiplicant una fila de la primera matriu per una columna de la segona i sumant els resultats.

!!! note "Com s'interpreta el resultat?"
    Les **files del resultat** conserven el significat de les files de la primera matriu i les **columnes del resultat** conserven el significat de les columnes de la segona.

    Cada parella formada per una fila de la primera matriu i una columna de la segona produeix una casella del resultat. Les categories comunes —les columnes de la primera matriu i les files de la segona— són les que permeten relacionar les dades.

!!! example "Magatzems, productes i proveïdors"
    La matriu $Q$ indica les quantitats de tres productes que necessiten tres magatzems. Les etiquetes laterals identifiquen els magatzems i les superiors, els productes:

    $$
    Q=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\\M_3\end{array}
    &
    \begin{pmatrix}
    10&5&8\\
    6&9&4\\
    7&3&6
    \end{pmatrix}
    \end{array}
    $$

    La matriu $P$ recull el preu unitari de cada producte segons dos proveïdors. Les files corresponen als productes i les columnes, als proveïdors A i B:

    $$
    P=
    \begin{array}{cc}
    &\begin{array}{cc}\text{A}\!&\!\text{B}\end{array}\\[0.5mm]
    \begin{array}{c}P_1\\P_2\\P_3\end{array}
    &
    \begin{pmatrix}
    3&4\\
    5&4\\
    4&5
    \end{pmatrix}
    \end{array}
    $$

    Per tant, les files de $QP$ corresponen als magatzems $M_1$, $M_2$ i $M_3$, i les columnes indiquen el cost total amb els proveïdors A i B:

    $$
    QP=
    \begin{array}{cc}
    &\begin{array}{cc}C_A\!&\!C_B\end{array}\\[0.5mm]
    \begin{array}{c}M_1\\M_2\\M_3\end{array}
    &
    \begin{pmatrix}
    87&100\\
    79&80\\
    60&70
    \end{pmatrix}
    \end{array}
    $$

    Per exemple, la casella de la fila $M_1$ i la columna del proveïdor B és

    $$
    10\cdot4+5\cdot4+8\cdot5=100
    $$

    Així, $100\,€$ és el cost total dels productes del magatzem $M_1$ si es compren al proveïdor B.

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

### 4. Càlcul d'elements desconeguts

Quan només ens demanen alguns elements desconeguts d'una matriu, no sempre cal efectuar tot el producte. Podem calcular únicament les posicions on apareixen les incògnites i igualar-les amb els elements corresponents de la matriu resultat.

!!! example "Exemple: càlcul només dels elements necessaris"
    Considerem les matrius d'ordre $3\times2$

    $$
    A=
    \begin{pmatrix}
    1&2\\
    0&-1\\
    3&1
    \end{pmatrix}
    \qquad
    X=
    \begin{pmatrix}
    x&1\\
    2&-1\\
    y&0
    \end{pmatrix}
    $$

    Sabem que

    $$
    A^tX=
    \begin{pmatrix}
    7&1\\
    2&3
    \end{pmatrix}
    $$

    Volem determinar només els elements $x$ i $y$ de $X$. Primer transponem $A$:

    $$
    A^t=
    \begin{pmatrix}
    1&0&3\\
    2&-1&1
    \end{pmatrix}
    $$

    Com que $x$ i $y$ només apareixen a la primera columna de $X$, calculem únicament les posicions $(1,1)$ i $(2,1)$ de $A^tX$:

    $$
    (A^tX)_{11}
    =
    \begin{pmatrix}1&0&3\end{pmatrix}
    \begin{pmatrix}x\\2\\y\end{pmatrix}
    =x+3y
    $$

    $$
    (A^tX)_{21}
    =
    \begin{pmatrix}2&-1&1\end{pmatrix}
    \begin{pmatrix}x\\2\\y\end{pmatrix}
    =2x+y-2
    $$

    Igualem aquestes dues posicions amb els elements corresponents de la matriu resultat:

    $$
    \begin{cases}
    x+3y=7\\
    2x+y-2=2
    \end{cases}
    \quad\Longleftrightarrow\quad
    \begin{cases}
    x+3y=7\\
    2x+y=4
    \end{cases}
    $$

    Resolent el sistema, obtenim

    $$
    \boxed{x=1,\qquad y=2}
    $$

    Només hem calculat dues posicions del producte perquè eren les úniques necessàries per trobar les dues incògnites.

### 5. L'ordre dels factors és important

En general, el producte de matrius no és commutatiu:

$$
AB\neq BA.
$$

Fins i tot pot passar que $AB$ existeixi i $BA$ no existeixi. Quan existeixen tots dos productes, tampoc no han de coincidir. Per exemple, si

$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix}
\qquad
B=\begin{pmatrix}1&0\\1&1\end{pmatrix}
$$

obtenim

$$
AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}
\qquad
BA=\begin{pmatrix}1&1\\1&2\end{pmatrix}
$$

Per tant, $AB\neq BA$.

### 6. Propietats de les operacions

Sempre que les dimensions permetin efectuar les operacions, es compleixen les propietats següents:

| Operació | Propietat | Expressió |
|---|---|---|
| Suma | Commutativa | $A+B=B+A$ |
| Suma | Associativa | $(A+B)+C=A+(B+C)$ |
| Suma | Element neutre | $A+O=O+A=A$ |
| Suma | Matriu oposada | $A+(-A)=O$ |
| Producte per un nombre | Distributiva respecte de la suma de matrius | $\lambda(A+B)=\lambda A+\lambda B$ |
| Producte per un nombre | Distributiva respecte de la suma de nombres | $(\lambda+\mu)A=\lambda A+\mu A$ |
| Producte per un nombre | Associativa | $\lambda(\mu A)=(\lambda\mu)A$ |
| Producte de matrius | Associativa | $(AB)C=A(BC)$ |
| Producte de matrius | Distributiva per l'esquerra | $A(B+C)=AB+AC$ |
| Producte de matrius | Distributiva per la dreta | $(A+B)C=AC+BC$ |
| Producte de matrius | Element neutre | $AI=IA=A$ |
| Producte de matrius | No commutativa, en general | $AB\neq BA$ |

!!! warning "El producte no és commutatiu"
    No podem canviar l'ordre dels factors. En particular, d'una igualtat com $AX=B$ no podem passar indistintament a $X=BA^{-1}$: cal tenir en compte a quin costat multiplica cada matriu.

### 7. Potències d'una matriu

Si $A$ és quadrada, podem definir

$$
A^2=A\cdot A
\qquad
A^3=A^2\cdot A
\qquad
A^4=A^3\cdot A
$$

Per conveni,

$$
A^0=I
$$

!!! note "Significat d'una potència"
    Una potència d'una matriu representa un producte repetit: $A^n$ no s'obté elevant cada element d'$A$ a $n$. Com que la matriu s'ha de poder multiplicar per ella mateixa, les potències només estan definides per a matrius quadrades.

!!! example "Exemple: càlcul successiu de les potències"
    Considerem

    $$
    A=
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    $$

    Primer calculem $A^2$:

    $$
    A^2=A\cdot A
    =
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&4\\
    0&1
    \end{pmatrix}
    $$

    Per calcular $A^3$, aprofitem el resultat anterior:

    $$
    A^3=A^2\cdot A
    =
    \begin{pmatrix}
    1&4\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&6\\
    0&1
    \end{pmatrix}
    $$

    De la mateixa manera,

    $$
    A^4=A^3\cdot A
    =
    \begin{pmatrix}
    1&6\\
    0&1
    \end{pmatrix}
    \begin{pmatrix}
    1&2\\
    0&1
    \end{pmatrix}
    =
    \begin{pmatrix}
    1&8\\
    0&1
    \end{pmatrix}
    $$

!!! note "Fixa-t'hi"
    En general, $A^n$ és el producte d'$A$ per ella mateixa $n$ vegades. Per calcular les potències successives, podem utilitzar

    $$
    A^n=A^{n-1}\cdot A
    $$

    En l'exemple anterior s'observa, per a $n=0,1,2,\ldots$, el patró

    $$
    A^n=
    \begin{pmatrix}
    1&2n\\
    0&1
    \end{pmatrix}
    $$

<div class="pdf-topic-section-break"></div>

## Matriu inversa

La matriu inversa té un paper semblant al de l'invers d'un nombre. Ens permet desfer una multiplicació matricial, però només existeix per a algunes matrius quadrades.

### 1. Definició

!!! abstract "Definició: matriu inversa"
    Sigui $A$ una matriu quadrada. La seva **matriu inversa**, si existeix, és la matriu $A^{-1}$ que compleix

    $$
    AA^{-1}=A^{-1}A=I.
    $$

    Quan $A^{-1}$ existeix, diem que $A$ és **invertible** o **regular**. Si no existeix, diem que és **singular**.

!!! warning "No és l'invers de cada element"
    La notació $A^{-1}$ no significa que hàgim de calcular l'invers de cada element d'$A$. La inversa es defineix mitjançant el producte matricial.

### 2. Mètode de Gauss-Jordan

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

### 3. Càlcul d'una inversa

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

### 4. Càlcul per coeficients

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

### 5. Comprovació

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

### 6. Com sabem que una matriu no té inversa?

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

### 7. Propietats de la inversa

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

<div class="pdf-topic-section-break"></div>

## Equacions i sistemes matricials

En una equació matricial, la incògnita és una matriu. Per aïllar-la utilitzem les operacions matricials i, quan cal, la matriu inversa.

En tots els exemples d'aquesta pàgina, les matrius incògnites i les matrius conegudes són d'ordre $2\times2$.

!!! note "Recordatori de les propietats"
    Sempre que les dimensions siguin compatibles, podem aplicar aquestes propietats:

    | Operació | Propietat | Expressió |
    |---|---|---|
    | Suma | Commutativa | $A+B=B+A$ |
    | Suma | Associativa | $(A+B)+C=A+(B+C)$ |
    | Suma | Element neutre | $A+O=A$ |
    | Suma | Matriu oposada | $A+(-A)=O$ |
    | Producte per un nombre | Distributiva | $\lambda(A+B)=\lambda A+\lambda B$ |
    | Producte per un nombre | Associativa | $\lambda(\mu A)=(\lambda\mu)A$ |
    | Producte de matrius | Associativa | $(AB)C=A(BC)$ |
    | Producte de matrius | Distributives | $A(B+C)=AB+AC$ i $(A+B)C=AC+BC$ |
    | Producte de matrius | Element neutre | $AI=IA=A$ |
    | Inversa | Definició | $A^{-1}A=AA^{-1}=I$ |
    | Inversa d'un producte | Canvi d'ordre | $(AB)^{-1}=B^{-1}A^{-1}$ |
    | Producte de matrius | No commutativa, en general | $AB\neq BA$ |

    Com que el producte de matrius no és commutatiu, si multipliquem un membre d'una equació per l'esquerra o per la dreta, hem de multiplicar l'altre membre pel mateix costat i conservar l'ordre dels factors.

<div class="pdf-topic-section-break"></div>

### 1. Equacions matricials

!!! abstract "Definició: equació matricial"
    Una **equació matricial** és una igualtat entre matrius en què alguna de les matrius és desconeguda. Resoldre-la consisteix a trobar totes les matrius que fan certa la igualtat.

    Les matrius s'escriuen sempre amb **lletres majúscules**: $A$, $B$ i $C$ representen matrius conegudes, mentre que $X$ representa la matriu incògnita. Les lletres minúscules $x$, $y$, $z$ o $t$ representen nombres, com ara els elements desconeguts de $X$.

Abans d'operar, cal comprovar que totes les sumes i tots els productes estan definits.

#### 1.1 Equacions de la forma $X+A=B$

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

#### 1.2 Equacions de la forma $AX=B$

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

#### 1.3 Equacions de la forma $XA=B$

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

#### 1.4 Equacions de la forma $AXB=C$

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
    \end{pmatrix}
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

#### 1.5 Resolució d'una equació matricial per coeficients

També podem resoldre una equació matricial escrivint els elements desconeguts de $X$ com a incògnites. Si $X$ és d'ordre $2\times2$, posem

$$
X=
\begin{pmatrix}
x&y\\
z&t
\end{pmatrix}
$$

Després efectuem les operacions matricials i utilitzem la igualtat de matrius: els elements que ocupen la mateixa posició han de ser iguals. D'aquesta manera obtenim un sistema d'equacions amb les incògnites $x$, $y$, $z$ i $t$.

!!! note "Dues situacions diferents"
    A l'apartat d'operacions amb matrius calculàvem només alguns elements desconeguts d'una matriu i, per tant, només les posicions necessàries del resultat. Aquí la incògnita és la **matriu completa** $X$: hem de determinar tots els seus elements perquè es compleixi l'equació matricial.

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

### 2. Procediment recomanat

!!! tip "Passos per resoldre equacions i sistemes matricials"
    1. Comprova les dimensions de totes les matrius.
    2. Identifica a quin costat de la incògnita hi ha cada factor.
    3. Conserva l'ordre dels productes quan utilitzis matrius inverses.
    4. Si resols per coeficients, escriu els elements de $X$ com a incògnites i iguala les posicions corresponents.
    5. Substitueix el resultat a l'equació o al sistema inicial per comprovar-lo.

### 3. Errors habituals

!!! warning "Revisa aquests punts"
    - Canviar l'ordre dels factors en un producte.
    - Multiplicar només un membre de l'equació per una inversa.
    - Multiplicar per l'esquerra en un membre i per la dreta en l'altre.
    - Utilitzar $A^{-1}$ sense haver comprovat que $A$ és invertible.
    - Sumar o igualar matrius de dimensions diferents.

### 4. Resolució de sistemes d'equacions matricials

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
    X=\begin{pmatrix}1&2\\2&2\end{pmatrix}
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
    \end{pmatrix}
    \qquad
    2X-Y=
    \begin{pmatrix}
    0&5\\
    1&4
    \end{pmatrix}
    $$

### 5. Resolució de sistemes amb la matriu inversa

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

<div class="pdf-topic-section-break"></div>

## Problemes de matrius

Les matrius permeten organitzar dades d'un problema i operar amb tota la informació alhora. Per interpretar correctament els resultats, cal saber què representa cada fila, cada columna i cada unitat.

### 1. Organització de les dades

!!! abstract "Files, columnes i elements"
    Abans d'escriure una matriu, hem d'indicar:

    - què representa cada **fila**;
    - què representa cada **columna**;
    - en quines **unitats** s'expressen els elements.

    L'element $a_{ij}$ correspon a la dada situada a la fila $i$ i la columna $j$.

Per exemple, si les files representen dues botigues i les columnes dos productes, la matriu

$$
A=
\begin{pmatrix}
12&8\\
10&9
\end{pmatrix}
$$

indica que la primera botiga ha venut $12$ unitats del primer producte i $8$ del segon, mentre que la segona n'ha venut $10$ i $9$, respectivament.

### 2. Procediment

!!! tip "Passos per resoldre un problema de matrius"
    1. **Identifica les dades** i les unitats.
    2. **Decideix què representen** les files i les columnes.
    3. **Escriu les matrius** mantenint el mateix ordre en totes les dades comparables.
    4. **Tria l'operació adequada** i comprova que les dimensions siguin compatibles.
    5. **Efectua els càlculs**.
    6. **Interpreta cada resultat** dins del context del problema.

### 3. Significat de les operacions en un problema

Abans de calcular, convé anticipar què representarà el resultat de l'operació:

| Operació | Interpretació habitual | Estructura del resultat |
|---|---|---|
| $A+B$ | Agrupar dades de les mateixes categories | Conserva les files i les columnes |
| $A-B$ | Comparar dues situacions o calcular una variació | Conserva les files i les columnes |
| $\lambda A$ | Aplicar el mateix factor a totes les dades | Conserva les files i les columnes |
| $A^t$ | Intercanviar el paper de les files i les columnes | Les files passen a ser columnes i les columnes, files |
| $AB$ | Relacionar dos conjunts de dades | Conserva les files d'$A$ i les columnes de $B$ |

En un producte de matrius, cada fila de la primera matriu es combina amb cada columna de la segona i produeix una casella del resultat. Les categories comunes —les columnes de la primera i les files de la segona— permeten relacionar les dades i queden integrades en el càlcul.

!!! note "La mida depèn del problema"
    Les matrius d'un problema no han de ser necessàriament d'ordre $2\times2$. El nombre de files i columnes depèn de les categories que representem. Per exemple, les existències de quatre productes en tres magatzems es poden organitzar en una matriu d'ordre $3\times4$.

!!! warning "L'ordre del producte importa"
    Abans de multiplicar, comprova que el nombre de columnes de la primera matriu coincideixi amb el nombre de files de la segona. En general, $AB\neq BA$.

### 4. Exemple complet

!!! example "Vendes de tres productes en tres botigues"
    **Enunciat**

    Una empresa ven tres productes, $A$, $B$ i $C$, en tres botigues. Les files representen els productes i les columnes, les botigues $1$, $2$ i $3$.

    Durant el matí i la tarda s'han registrat les vendes següents:

    $$
    M=
    \begin{pmatrix}
    12&8&10\\
    10&9&7\\
    6&11&8
    \end{pmatrix}
    \qquad
    T=
    \begin{pmatrix}
    7&6&5\\
    5&11&9\\
    8&4&7
    \end{pmatrix}
    $$

    Els productes $A$, $B$ i $C$ costen $5\,€$, $8\,€$ i $6\,€$ per unitat, respectivament.

    Calcula:

    1. la matriu fila $P$ que representa els preus;
    2. la matriu de les unitats totals venudes durant tot el dia;
    3. la recaptació obtinguda a cada botiga;
    4. la recaptació total de l'empresa.

    **Resolució**

    Comencem representant els preus mitjançant una matriu fila. L'ordre dels preus ha de coincidir amb l'ordre dels productes a les files de $M$ i $T$:

    $$
    P=
    \begin{pmatrix}
    5&8&6
    \end{pmatrix}
    $$

    Sumem les vendes del matí i de la tarda:

    $$
    U=M+T
    =
    \begin{pmatrix}
    12&8&10\\
    10&9&7\\
    6&11&8
    \end{pmatrix}
    +
    \begin{pmatrix}
    7&6&5\\
    5&11&9\\
    8&4&7
    \end{pmatrix}
    =
    \begin{pmatrix}
    19&14&15\\
    15&20&16\\
    14&15&15
    \end{pmatrix}
    $$

    Per exemple, del producte $A$ s'han venut $19$ unitats a la botiga $1$, $14$ a la botiga $2$ i $15$ a la botiga $3$. Cada fila de $U$ correspon a un producte i cada columna, a una botiga.

    Multipliquem la matriu fila dels preus per la matriu de les unitats venudes:

    $$
    R=PU
    =
    \begin{pmatrix}
    5&8&6
    \end{pmatrix}
    \begin{pmatrix}
    19&14&15\\
    15&20&16\\
    14&15&15
    \end{pmatrix}
    =
    \begin{pmatrix}
    299&320&293
    \end{pmatrix}
    $$

    Els tres elements de $R$ són les recaptacions de les botigues $1$, $2$ i $3$:

    - botiga $1$: $5\cdot19+8\cdot15+6\cdot14=299\,€$;
    - botiga $2$: $5\cdot14+8\cdot20+6\cdot15=320\,€$;
    - botiga $3$: $5\cdot15+8\cdot16+6\cdot15=293\,€$.

    Finalment, la recaptació total de l'empresa és

    $$
    299+320+293=912\,€
    $$

### 5. Interpretació i comprovació

En acabar un problema, cal comprovar:

- que totes les matrius mantenen el mateix ordre de files i columnes;
- que les dimensions permeten fer les operacions indicades;
- que les unitats del resultat són coherents;
- que cada nombre es tradueix en una frase relacionada amb el context.

!!! note "Les unitats també es multipliquen"
    En l'exemple, els elements de $P$ s'expressen en euros per unitat i els d'$U$, en unitats venudes. Per això els elements del producte $PU$ s'expressen en euros. El producte és possible perquè les tres columnes de $P$ coincideixen amb les tres files d'$U$.
