# Recull d'enunciats d'àlgebra lineal {.pdf-exercise-collection}

---

## Tema 4. Sistemes i mètode de Gauss

### Equacions lineals, sistemes i classificació

**4.1.**
Indica quines de les equacions següents són lineals. Justifica les que no ho són.

| | |
|:--|:--|
| **a)** $2x-3y+z=5$ | **b)** $xy+y=1$ |
| **c)** $x^2+y=4$ | **d)** $\dfrac{x}{2}-3y=0$ |
| **e)** $2^x+y=4$ | **f)** $4y-7z=3$ |

**4.2.**
Comprova si $(x,y,z)=(1,3,-2)$ és solució del sistema

$$
\begin{cases}
2x+y+z=3\\
x-y+2z=-6\\
3x+y-z=8
\end{cases}
$$

**4.3.**
Resol el sistema esglaonat següent i classifica'l:

$$
\begin{cases}
x+3y-2z=-3\\
2y+z=0\\
3z=6
\end{cases}
$$

### Mètode de Gauss

En aquests exercicis hauràs d'intercanviar files quan el pivot sigui zero o quan una altra fila ofereixi un pivot igual a $1$, i combinar files amb els dos coeficients per evitar fraccions.

**4.4.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2x+3y-z=-1\\
3x-2y+2z=15\\
x+4y+3z=-2
\end{cases}
$$

**4.5.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
3y+2z=4\\
2x+3y-z=9\\
3x+2y+2z=5
\end{cases}
$$

**4.6.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2x+y+z=6\\
4x+2y-z=3\\
3x-2y+2z=14
\end{cases}
$$

**4.7.**
Resol pel mètode de Gauss i classifica el sistema. Si té infinites solucions, escriu-ne dues de particulars.

$$
\begin{cases}
2x+3y-z=1\\
3x+5y+z=3\\
7x+11y-z=5
\end{cases}
$$

**4.8.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2y+3z=4\\
3x+2y+3z=5\\
2x+4y+6z=7
\end{cases}
$$

### Problemes de sistemes

**4.9.**
Una inversora destina $12\,000\,€$ a comprar accions de tres empreses, A, B i C. Al cap d'un any, les accions d'A s'han revaloritzat un $5\,\%$, les de B han perdut un $2\,\%$ i les de C s'han revaloritzat un $8\,\%$. La quantitat invertida en B és el doble de la invertida en C.

**a)** Si el guany total ha estat de $380\,€$, quant ha invertit en cada empresa?

**b)** Un amic seu afirma que, amb les mateixes condicions, ell va acabar l'any amb una pèrdua de $60\,€$. És possible? Justifica-ho.

**4.10.**
Un patinet elèctric es ven a $726\,€$, IVA del $21\,\%$ inclòs. El preu sense IVA es reparteix en tres parts: el cost de fabricació, el cost de transport i distribució i el benefici de la botiga. El cost de transport és el $20\,\%$ del cost de fabricació, i el benefici de la botiga és el $25\,\%$ de la suma dels costos de fabricació i de transport.

**a)** Calcula el cost de fabricació, el cost de transport i el benefici de la botiga.

**b)** Durant les rebaixes, la botiga fa un descompte del $10\,\%$ sobre el preu final, IVA inclòs. Si els costos de fabricació i de transport no canvien, quin percentatge del seu benefici perd la botiga?

**4.11.**
En una factura de la llum, l'energia es cobra per trams horaris: $0{,}30\,€$ el $\text{kWh}$ en hores punta, $0{,}15\,€$ en hores pla i $0{,}10\,€$ en hores vall. Un mes, una família ha consumit $300\,\text{kWh}$. La companyia informa que el $60\,\%$ del consum ha estat en hores punta i pla, i que el $40\,\%$ ha estat en hores vall.

**a)** Planteja el sistema, resol-lo pel mètode de Gauss i classifica'l. Es pot saber quants $\text{kWh}$ s'han consumit en cada tram?

**b)** La factura indica, a més, que l'import de l'energia ha estat de $48\,€$. Substitueix la condició redundant per aquesta dada i calcula el consum de cada tram.

**c)** Quin percentatge de l'import de l'energia correspon a les hores punta?

**4.12.**
Una compra al supermercat costa $100\,€$ sense IVA. Inclou productes bàsics, amb un IVA del $4\,\%$, altres aliments, amb un IVA del $10\,\%$, i productes de neteja, amb un IVA del $21\,\%$. L'import sense IVA dels aliments al $10\,\%$ supera en $30\,€$ el dels productes bàsics. En cada apartat, afegeix només la dada indicada a les dues condicions anteriors, resol el sistema pel mètode de Gauss, classifica'l i interpreta'n el resultat.

**a)** El tiquet indica que l'import total, IVA inclòs, és de $112{,}10\,€$.

**b)** Una promoció descompta el $20\,\%$ de l'import dels aliments al $10\,\%$ i el $10\,\%$ de l'import dels productes de neteja, sense IVA. El tiquet indica que l'estalvi total és de $13\,€$.

**c)** Un altre tiquet, amb les mateixes condicions inicials i la mateixa promoció, indica que l'estalvi total és de $14\,€$.

## Tema 5. Matrius

!!! tip "Com treballar"
    Abans d'operar, comprova les dimensions de les matrius. En calcular una inversa pel mètode de Gauss-Jordan, anota cada transformació i aplica-la a tota la fila, també a la part dreta de la barra. En una equació matricial, conserva el costat on multiplica cada matriu i comprova el resultat a l'equació inicial.

### Concepte, tipus i operacions

**5.1.**
Considera les matrius

$$
A=\begin{pmatrix}3&-1&0\end{pmatrix}
\quad
B=\begin{pmatrix}-4&0\\0&-4\end{pmatrix}
\quad
C=\begin{pmatrix}1&4&-2\\4&0&5\\-2&5&3\end{pmatrix}
\quad
D=\begin{pmatrix}1&0&0\\7&-2&0\\3&1&4\end{pmatrix}
$$

**a)** Indica l'ordre de cada matriu i de quin tipus és.

**b)** Escriu els elements $c_{23}$, $c_{32}$ i $d_{31}$.

**c)** Calcula $C^t$ i $D^t$. Quina de les dues matrius és simètrica?

**d)** Escriu la matriu $E=(e_{ij})_{2\times3}$ que compleix $e_{ij}=2i-j$ i la seva transposada.

**5.2.**
**a)** Calcula $x$, $y$, $z$ i $t$ perquè es compleixi la igualtat

$$
\begin{pmatrix}
x+y&2z\\
x-y&t
\end{pmatrix}
=
\begin{pmatrix}
7&z+3\\
1&2x
\end{pmatrix}
$$

**b)** Poden ser iguals les matrius $\begin{pmatrix}1&2&3\end{pmatrix}$ i $\begin{pmatrix}1\\2\\3\end{pmatrix}$? Justifica-ho.

**5.3.**
Considera les matrius

$$
A=\begin{pmatrix}2&-1&3\\0&4&-2\end{pmatrix}
\qquad
B=\begin{pmatrix}1&-5\\3&0\\-2&4\end{pmatrix}
\qquad
C=\begin{pmatrix}3&-2\\-5&1\end{pmatrix}
$$

**a)** Indica quines de les operacions següents es poden efectuar i, en aquest cas, l'ordre del resultat: $A+B$, $A+B^t$, $AB$, $BA$, $AC$, $CA$ i $C^2$.

**b)** Efectua les operacions de l'apartat anterior que es puguin fer i comprova que el resultat té l'ordre que havies indicat.

**c)** Calcula $2A-B^t$ i $AB-3C$.

**d)** Quin ordre ha de tenir una matriu $D$ perquè tingui sentit cadascuna de les igualtats següents? Si no és possible, explica per què.

1. $AD=CB^t$
2. $DA=B$

**5.4.**
Considera les matrius

$$
A=\begin{pmatrix}4&1\\0&-3\end{pmatrix}
\qquad
B=\begin{pmatrix}1&0\\4&2\end{pmatrix}
$$

**a)** Calcula $(A+B)^2$ i $A^2+2AB+B^2$. Obtens el mateix resultat?

**b)** Desenvolupa $(A+B)^2=(A+B)(A+B)$ amb la propietat distributiva i explica la diferència.

**c)** Quina condició han de complir dues matrius quadrades perquè $(A+B)^2=A^2+2AB+B^2$?

**5.5.**
Considera les matrius

$$
A=\begin{pmatrix}2&-3&1\\1&4&0\end{pmatrix}
\qquad
X=\begin{pmatrix}x&2\\y&-1\\3&1\end{pmatrix}
$$

Sabem que

$$
AX=\begin{pmatrix}-1&8\\9&-2\end{pmatrix}
$$

**a)** Calcula $x$ i $y$.

**b)** Substitueix els valors obtinguts a $X$ i comprova que el producte $AX$ dona la matriu indicada.

**5.6.**
Considera la matriu

$$
A=\begin{pmatrix}4&0\\5&4\end{pmatrix}
$$

**a)** Troba totes les matrius $X$ d'ordre $2\times2$ que commuten amb $A$, és a dir, que compleixen $AX=XA$.

**b)** D'entre aquestes matrius, troba la que compleix

$$
X\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}-2\\3\end{pmatrix}
$$

**5.7.**
**a)** Considera les matrius

$$
A=\begin{pmatrix}a&3\\-2&1\end{pmatrix}
\qquad
B=\begin{pmatrix}7&b\\-4&1\end{pmatrix}
$$

on $a$ i $b$ són nombres reals. Troba $a$ i $b$ perquè les matrius commutin, és a dir, perquè $AB=BA$.

**b)** Considera la matriu

$$
D=\begin{pmatrix}x&2\\y&x\end{pmatrix}
$$

Troba $x$ i $y$ perquè

$$
D^2=\begin{pmatrix}7&12\\-6&7\end{pmatrix}
$$

**5.8.**
Considera la matriu

$$
A=\begin{pmatrix}3&-7\\1&-2\end{pmatrix}
$$

**a)** Calcula $A^2$ i $A^3$.

**b)** Utilitza el resultat anterior per calcular $A^6$ i $A^{12}$.

**c)** Dedueix $A^{-1}$ a partir d'$A^3$ i comprova el resultat.

### Matriu inversa

**5.9.**
Considera la matriu

$$
A=\begin{pmatrix}5&-2\\-7&3\end{pmatrix}
$$

**a)** Quina de les matrius següents és la inversa d'$A$? Justifica-ho fent els productes.

$$
M=\begin{pmatrix}3&2\\7&5\end{pmatrix}
\qquad
N=\begin{pmatrix}3&-2\\-7&5\end{pmatrix}
$$

**b)** Un company diu que la inversa d'una matriu s'obté invertint cada element. Segons ell, la inversa de

$$
B=\begin{pmatrix}1&2\\1&1\end{pmatrix}
\qquad\text{seria}\qquad
P=\begin{pmatrix}1&\frac12\\[2pt]1&1\end{pmatrix}
$$

Comprova que no té raó i que la inversa de $B$ és $\begin{pmatrix}-1&2\\1&-1\end{pmatrix}$.

**5.10.**
Calcula la inversa de la matriu

$$
B=\begin{pmatrix}3&1\\5&2\end{pmatrix}
$$

a partir de la definició, és a dir, per coeficients. Comprova el resultat.

**5.11.**
Calcula pel mètode de Gauss-Jordan la inversa de les matrius següents, si existeix. Comprova el resultat.

$$
A=\begin{pmatrix}7&4\\5&3\end{pmatrix}
\qquad
B=\begin{pmatrix}0&2\\3&5\end{pmatrix}
\qquad
C=\begin{pmatrix}6&-4\\-9&6\end{pmatrix}
$$

$$
D=\begin{pmatrix}0&1&1\\1&2&0\\1&3&2\end{pmatrix}
$$

**5.12.**
Indica quines de les matrius següents tenen inversa. Justifica-ho esglaonant cada matriu pel mètode de Gauss. Per a les que en tinguin, calcula la inversa pel mètode de Gauss-Jordan.

$$
A=\begin{pmatrix}0&4\\0&-3\end{pmatrix}
\qquad
B=\begin{pmatrix}5&3\\7&4\end{pmatrix}
\qquad
C=\begin{pmatrix}-2&6\\1&-3\end{pmatrix}
\qquad
D=\begin{pmatrix}0&2\\5&1\end{pmatrix}
$$

### Equacions i sistemes matricials

**5.13.**
Considera les matrius

$$
A=\begin{pmatrix}-2&4\\1&6\end{pmatrix}
\qquad
B=\begin{pmatrix}-1&-4\\2&-3\end{pmatrix}
$$

Resol les equacions matricials següents:

**a)** $X+A=B$

**b)** $3X-2A=5B$

**c)** Per què en aquestes equacions no cal calcular cap matriu inversa?

**5.14.**
Suposa que totes les matrius són quadrades i del mateix ordre. Aïlla la matriu $X$ en cada equació, sense fer cap càlcul amb matrius concretes, i indica quines matrius han de tenir inversa per poder-ho fer.

| | |
|:--|:--|
| **a)** $XA+B=C$ | **b)** $AX+AB=C$ |
| **c)** $ABX=C$ | **d)** $AXB=C+B$ |
| **e)** $2X-AX=B$ | **f)** $XA-B=3X$ |

**5.15.**
Considera les matrius

$$
A=\begin{pmatrix}2&1\\3&2\end{pmatrix}
\qquad
B=\begin{pmatrix}5&-1\\-3&5\end{pmatrix}
$$

**a)** Comprova que $AB-3A=I$.

**b)** Treu $A$ factor comú per l'esquerra a la igualtat de l'apartat a) i troba una matriu $M$, escrita en funció de $B$ i d'$I$, que compleixi $AM=I$.

**c)** Comprova que també $MA=I$. Què en pots deduir sobre la inversa d'$A$?

**5.16.**
Considera les matrius

$$
A=\begin{pmatrix}4&3\\5&4\end{pmatrix}
\qquad
B=\begin{pmatrix}4&2\\5&3\end{pmatrix}
$$

**a)** Resol l'equació $AX=B$.

**b)** Resol l'equació $XA=B$.

**c)** Per què les dues solucions no coincideixen?

**5.17.**
Resol les equacions matricials següents:

**a)** $AX+B=3X$, on

$$
A=\begin{pmatrix}7&3\\5&7\end{pmatrix}
\qquad
B=\begin{pmatrix}-10&4\\-13&5\end{pmatrix}
$$

**b)** $XA-X=C$, on

$$
A=\begin{pmatrix}4&5\\1&3\end{pmatrix}
\qquad
C=\begin{pmatrix}3&5\\-5&-8\end{pmatrix}
$$

**c)** $A^tX+B=C$, on

$$
A=\begin{pmatrix}1&2\\1&3\end{pmatrix}
\qquad
B=\begin{pmatrix}1&0\\-3&2\end{pmatrix}
\qquad
C=\begin{pmatrix}3&2\\1&9\end{pmatrix}
$$

**5.18.**
Resol els sistemes d'equacions matricials següents:

**a)**

$$
\begin{cases}
2X+Y=
\begin{pmatrix}
3&2\\
2&7
\end{pmatrix}\\[6pt]
X-3Y=
\begin{pmatrix}
5&-13\\
-6&0
\end{pmatrix}
\end{cases}
$$

**b)**

$$
\begin{cases}
3X+5Y=
\begin{pmatrix}
13&-5\\
-1&29
\end{pmatrix}\\[6pt]
2X-3Y=
\begin{pmatrix}
-4&3\\
-7&-6
\end{pmatrix}
\end{cases}
$$

**5.19.**
Considera el sistema

$$
\begin{cases}
3x+2y=7\\
4x+3y=10
\end{cases}
$$

**a)** Escriu-lo en la forma $MX=N$ i resol-lo amb la matriu inversa.

**b)** Resol el sistema que té els mateixos coeficients i els termes independents $5$ i $6$, respectivament. Per què no cal tornar a calcular la inversa?

**c)** Resol també amb la matriu inversa el sistema

$$
\begin{cases}
x-2y=8\\
3x-5y=19
\end{cases}
$$

**5.20.**
Digues si les afirmacions següents són certes o falses. Si una afirmació és certa, justifica-la; si és falsa, posa'n un contraexemple. Llevat que s'indiqui una altra cosa, $A$, $B$, $C$ i $X$ són matrius quadrades d'ordre $2$, $I$ és la matriu identitat i $O$, la matriu nul·la.

**a)** Si $A$ és d'ordre $2\times3$, aleshores $AA^t=A^tA$.

**b)** Si $AB=O$, aleshores $A=O$ o $B=O$.

**c)** Si $AB=AC$, aleshores $B=C$.

**d)** Si $X-AX=B$ i $I-A$ té inversa, aleshores $X=(I-A)^{-1}B$.

**e)** Si $A$ té inversa i $(B-C)A=O$, aleshores $B=C$.

### Problemes de matrius

**5.21.**
Una empresa de càtering ofereix tres menús: infantil ($I$), estàndard ($E$) i vegetarià ($V$). Aquest cap de setmana té dos encàrrecs: un casament ($C$), amb $15$ menús infantils, $80$ d'estàndard i $20$ de vegetarians, i un congrés ($G$), amb $120$ menús estàndard i $30$ de vegetarians.

Cada menú infantil necessita $0{,}3\,\text{kg}$ d'aliments i $5$ minuts de feina del personal; cada menú estàndard, $0{,}5\,\text{kg}$ i $8$ minuts, i cada menú vegetarià, $0{,}4\,\text{kg}$ i $6$ minuts. Els aliments costen, de mitjana, $12\,€/\text{kg}$ i cada minut de feina del personal, $0{,}50\,€$.

**a)** Escriu la matriu $Q$ dels encàrrecs (files: encàrrecs; columnes: menús), la matriu $N$ dels recursos que necessita cada menú i la matriu columna $P$ dels costos de cada recurs.

**b)** Calcula $QN$ i interpreta'n els elements.

**c)** Calcula $NP$ i $QNP$. Què representen?

**d)** El producte $NQ$ també es pot calcular. Té sentit en aquest context? Justifica-ho.

**5.22.**
Un poble té dos supermercats, A i B. Cada mes, el $80\,\%$ dels clients d'A hi continuen comprant i el $20\,\%$ passen a B, mentre que el $70\,\%$ dels clients de B hi continuen i el $30\,\%$ passen a A. Aquest mes, A té $700$ clients i B, $300$.

**a)** Escriu la matriu $M$ que, multiplicada per la matriu columna $\begin{pmatrix}700\\300\end{pmatrix}$ dels clients d'aquest mes, dona la matriu columna dels clients del mes vinent. Calcula quants clients tindrà cada supermercat el mes vinent.

**b)** Escriu ara la matriu $N$ que, multiplicant per la dreta la matriu fila $\begin{pmatrix}700&300\end{pmatrix}$, dona la matriu fila dels clients del mes vinent. Comprova que obtens el mateix resultat. Quina relació hi ha entre $M$ i $N$?

**c)** En quina de les dues matrius sumen $1$ les columnes i en quina les files? Per què?

**d)** Un altre mes, després del canvi, A té $640$ clients i B, $360$. Quants clients tenia cada supermercat el mes anterior?

**5.23.**
Per enviar un missatge xifrat, s'assigna a cada lletra el seu lloc a l'alfabet ($A=1$, $B=2$, ..., $Z=26$) i a l'espai, el $0$:

espai $0$ · A $1$ · B $2$ · C $3$ · D $4$ · E $5$ · F $6$ · G $7$ · H $8$ · I $9$ · J $10$ · K $11$ · L $12$ · M $13$ · N $14$ · O $15$ · P $16$ · Q $17$ · R $18$ · S $19$ · T $20$ · U $21$ · V $22$ · W $23$ · X $24$ · Y $25$ · Z $26$

Els nombres s'agrupen de dos en dos, com a columnes d'una matriu $M$ de dues files. Per exemple, CASA correspon a $3,1,19,1$ i dona $M=\begin{pmatrix}3&19\\1&1\end{pmatrix}$. El missatge que s'envia és la matriu $E=AM$, on

$$
A=\begin{pmatrix}4&3\\5&4\end{pmatrix}
$$

**a)** Xifra la paraula PAU seguint aquests passos:

1. Escriu els nombres de cada lletra i afegeix un espai al final perquè el nombre de símbols sigui parell.
2. Escriu la matriu $M$.
3. Calcula $E=AM$.

**b)** Has rebut la matriu

$$
E=\begin{pmatrix}55&134&99\\69&172&129\end{pmatrix}
$$

Desxifra el missatge seguint aquests passos:

1. Aïlla $M$ a l'equació $E=AM$.
2. Calcula $A^{-1}$. Com que $A$ és la mateixa matriu de l'exercici 5.16, pots aprofitar-ne el resultat.
3. Calcula $M$ i tradueix cada columna a dues lletres.

**c)** Per què la matriu de xifratge ha de tenir inversa?

**5.24.**
Una xarxa de tres biblioteques —Centre ($C$), Nord ($N$) i Sud ($S$)— compta els préstecs de llibres ($L$), revistes ($R$) i audiovisuals ($A$), en centenars de préstecs. L'any 2024 la biblioteca Centre va fer $52$ centenars de préstecs de llibres, $18$ de revistes i $30$ d'audiovisuals; la Nord, $40$, $12$ i $26$, i la Sud, $35$, $10$ i $14$, respectivament. L'any 2025 les xifres van ser: Centre, $58$, $14$ i $36$; Nord, $44$, $10$ i $32$, i Sud, $33$, $12$ i $22$.

**a)** Escriu les matrius $P$ (any 2024) i $Q$ (any 2025), amb les biblioteques a les files i els tipus de préstec a les columnes.

**b)** Calcula la matriu dels préstecs mitjans anuals dels dos anys. Què indica l'element de la segona fila i la tercera columna?

**c)** Calcula $Q-P$. Què signifiquen els elements negatius? Quin tipus de préstec ha augmentat a totes les biblioteques?

**d)** Sigui $U=\begin{pmatrix}1&1&1\end{pmatrix}$. Raonant amb les dimensions, digues quins d'aquests productes es poden calcular: $UQ$, $QU$, $QU^t$ i $QP$. Calcula els que tinguin sentit en el context i interpreta'ls.

**e)** Per a l'any 2026 es preveu que els préstecs de llibres es mantinguin, que els de revistes es redueixin a la meitat i que els d'audiovisuals augmentin un $50\,\%$. Comprova que la previsió s'obté amb el producte $QD$, on

$$
D=\begin{pmatrix}1&0&0\\0&0{,}5&0\\0&0&1{,}5\end{pmatrix}
$$

i calcula'l. Per què $D$ ha de multiplicar per la dreta? Quants préstecs es preveuen en total a la biblioteca Nord?

**5.25.**
Un càmping lloga tres tipus d'allotjament: parcel·les ($P$), bungalous ($B$) i tendes muntades ($T$). La matriu $N$ recull les nits llogades de cada tipus durant tres caps de setmana ($S_1$, $S_2$ i $S_3$):

$$
N=
\begin{array}{cc}
&\begin{matrix}\overset{\displaystyle\mathclap{P}}{\hphantom{40}}&\overset{\displaystyle\mathclap{B}}{\hphantom{12}}&\overset{\displaystyle\mathclap{T}}{\hphantom{18}}\end{matrix}\\[0.5mm]
\begin{array}{c}S_1\\S_2\\S_3\end{array}
&
\begin{pmatrix}
40&12&18\\
55&20&25\\
30&8&12
\end{pmatrix}
\end{array}
$$

Una nit de parcel·la costa $25\,€$ i una de bungalou, $70\,€$. El preu d'una nit de tenda, que anomenem $x$, no consta a l'informe.

**a)** Escriu la matriu columna $C$ dels preus per nit i calcula $NC$ en funció de $x$. Què representa cada element?

**b)** Els ingressos dels tres caps de setmana van ser de $7575\,€$. Calcula $x$ utilitzant la matriu $U=\begin{pmatrix}1&1&1\end{pmatrix}$ i el producte $UNC$. Quant es va ingressar cada cap de setmana?

**c)** Si l'any vinent es lloguen les mateixes nits i tots els preus pugen un $20\,\%$, quant s'ingressarà cada cap de setmana? Quina relació té amb el resultat de l'apartat b)?

**d)** Un altre càmping de la mateixa cadena va llogar les mateixes nits, recollides a la matriu $N$, però amb uns altres preus, que anomenem $p$, $b$ i $t$ (parcel·la, bungalou i tenda). Els seus ingressos van ser de $2790\,€$ el cap de setmana $S_1$, $4125\,€$ el $S_2$ i $1960\,€$ el $S_3$. Planteja una equació matricial i troba el preu d'una nit de cada tipus en aquest càmping.

**5.26.**
Dues colles d'amics volen llogar caiacs i bicicletes per passar un dia a la muntanya. La colla de la Mar necessita $2$ caiacs i $5$ bicicletes, i la de l'Hugo, $3$ caiacs i $7$ bicicletes. Han demanat pressupost a dues empreses de lleure, $E_1$ i $E_2$, però només saben l'import total de cada pressupost: a l'empresa $E_1$, la colla de la Mar pagaria $100\,€$ i la de l'Hugo, $144\,€$; a l'empresa $E_2$, la colla de la Mar pagaria $100\,€$ i la de l'Hugo, $145\,€$.

**a)** Planteja una equació matricial $AX=C$, en què $A$ sigui la matriu dels lloguers, $X$ la dels preus diaris (files: tipus de vehicle; columnes: empreses) i $C$ la dels imports. Indica què representen les files i les columnes de cada matriu.

**b)** Resol l'equació. Quin és el preu diari de cada vehicle a cada empresa? Pots resoldre els sistemes que s'obtenen igualant les columnes o calcular $A^{-1}$ pel mètode de Gauss-Jordan.

**c)** Una tercera colla necessita $4$ caiacs i $6$ bicicletes. Calcula amb un producte de matrius quant pagaria a cada empresa. Quina li convé?

**5.27.**
Una empresa lloga furgonetes de tres mides: petites ($P$), mitjanes ($M$) i grans ($G$). El preu, en euros, de llogar una furgoneta un dia i recórrer-hi $x$ quilòmetres és:

- furgoneta petita: $40+0{,}20x$;
- furgoneta mitjana: $55+0{,}25x$;
- furgoneta gran: $70+0{,}30x$.

Una botiga lloga cada dia $2$ furgonetes petites, $3$ de mitjanes i $1$ de gran per repartir les comandes.

**a)** Escriu la matriu $T$ dels preus d'un dia, amb les mides a les files i, a les columnes, els recorreguts de $100$, $200$ i $300\,\text{km}$.

**b)** Escriu la matriu fila $Q$ de les furgonetes que lloga la botiga i calcula $QT$. Què representa cada element?

**c)** Escriu la matriu columna $F$ dels preus en funció de $x$ i calcula $QF$. Un dia, totes les furgonetes van recórrer la mateixa distància i la botiga va pagar $532{,}50\,€$. Quants quilòmetres va fer cada furgoneta?

<div class="pdf-page-break"></div>

## Problemes PAU

### Sistemes d'equacions en context

**PAU.AL.1.**
**Comandes de fruita**

*(exercici 2 de la convocatòria ordinària de 2026, sèrie 1; 2,5 punts)*. Un pagès produeix diferents tipus de fruites: maduixes, albercocs i cireres, que es venen en caixes a preus diferents. Sabem que una comanda de $5$ caixes de maduixes, $3$ d'albercocs i $4$ de cireres té un cost total de $120\,€$. D'altra banda, una comanda de $2$ caixes de maduixes, $1$ d'albercocs i $3$ de cireres té un cost total de $56\,€$.

- **2.1.** Calculeu el preu d'una caixa de maduixes i el preu d'una caixa d'albercocs en funció del preu d'una caixa de cireres. Amb aquesta informació, calculeu quin és el preu d'una comanda de $6$ caixes de maduixes, $4$ d'albercocs i $2$ de cireres. *[1,5 punts]*
- **2.2.** Si sabem que el preu d'una caixa d'albercocs és de $12{,}50\,€$, calculeu quin és el preu de les altres dues caixes de fruita. *[1 punt]*

**PAU.AL.2.**
**Viatge de final de curs**

*(exercici 2 de la convocatòria extraordinària de 2026, sèrie 2; 2,5 punts)*. A l'Institut La Closa s'ha organitzat un viatge a Roma per a l'alumnat de segon de batxillerat, però no tots els alumnes hi han volgut anar. Alguns alumnes han organitzat, pel seu compte, un viatge alternatiu a Londres, mentre que d'altres han decidit no viatjar enlloc. Sabem que a segon de batxillerat hi ha un total de $84$ alumnes i que el nombre d'alumnes que no han marxat enlloc és el triple del nombre d'alumnes que han anat a Londres.

- **2.1.** Plantegeu i estudieu el sistema d'equacions corresponent. Es pot determinar el nombre d'alumnes que han anat a cada viatge i el nombre d'alumnes que no han marxat enlloc? Justifiqueu la resposta. *[0,75 punts]*
- **2.2.** Resoleu el sistema anterior en funció del nombre d'alumnes que han anat a Londres. Deduïu que el nombre d'alumnes que no han marxat enlloc és un múltiple de $3$ i que el nombre d'alumnes que han anat a Roma és un múltiple de $4$. *[0,75 punts]*
- **2.3.** Disposem ara d'una nova informació: si $4$ alumnes dels que no han marxat enlloc s'haguessin afegit al viatge a Roma, aleshores el nombre d'alumnes que hauria anat a Roma hauria estat el doble del nombre d'alumnes que han anat a Londres i dels que no haurien marxat enlloc conjuntament. Es pot determinar ara quants alumnes han anat a cada viatge i quants no han marxat enlloc? Justifiqueu la resposta i, si és possible, trobeu aquestes quantitats. *[1 punt]*

**PAU.AL.3.**
**Estudiants becats**

*(apartat 4.2 de l'opció B de l'exercici 4 de la convocatòria ordinària de 2026, sèrie 1; 1,25 punts)*. La taula següent recull el nombre d'estudiants de grau (G), màster (M) i doctorat (D) matriculats a les tres facultats —Ciències (C), Enginyeria (E) i Lletres (L)— d'una petita universitat.

| Facultat | Grau (G) | Màster (M) | Doctorat (D) | Total |
|:--|:--|:--|:--|:--|
| Ciències (C) | $450$ | $172$ | $41$ | $663$ |
| Enginyeria (E) | $445$ | $178$ | $45$ | $668$ |
| Lletres (L) | $438$ | $183$ | $48$ | $669$ |
| Total | $1333$ | $533$ | $134$ | $2000$ |

- **4.2.** Sabem que, en total, hi ha $1036$ estudiants que gaudeixen d'una beca. També sabem que, si considerem conjuntament els estudiants de grau i màster, la meitat estan becats, i que hi ha el mateix nombre d'estudiants becats de màster que de doctorat. Determineu quants estudiants becats hi ha de cada nivell educatiu (grau, màster i doctorat). *[1,25 punts]*

**PAU.AL.4.**
**Activitats d'una associació**

*(apartat 4.2 de l'opció A de l'exercici 4 de la convocatòria extraordinària de 2026, sèrie 2; 1 punt)*. Tres amics —la Carme, el Saïd i el Martí— van crear fa uns anys una petita associació dedicada a la divulgació de les matemàtiques. En aquesta associació organitzen tallers per a famílies, visiten escoles i instituts d'arreu del país, i imparteixen seminaris en línia.

El curs passat van dur a terme un total de $240$ activitats, repartides en $96$ tallers familiars, $84$ xerrades en escoles o instituts i $60$ seminaris en línia. Els dos primers tipus d'activitats són presencials, mentre que els seminaris en línia, evidentment, no ho són.

- **4.2.** El curs passat, per a dur a terme les $240$ activitats, els tres amics van decidir organitzar-se de manera que cada activitat fos duta a terme per una sola persona; és a dir, no hi havia activitats desenvolupades per més d'un d'ells. Si sabem que la Carme va participar en $30$ activitats més que el Martí i que el Saïd va participar en $18$ activitats més que el Martí, de quantes activitats es va encarregar cadascun dels tres amics? *[1 punt]*

**PAU.AL.5.**
**Habitacions d'hotel**

*(exercici 1 de la convocatòria ordinària de 2025, sèrie 1; 2,5 punts)*. Volem allotjar $10$ persones en un hotel que té habitacions individuals, dobles i triples. Sabem que si reservem sis habitacions individuals i dues de dobles, hem de pagar $702\,€$, i si en reservem una d'individual i tres de triples, hem de pagar el mateix que si en reservem dues de dobles i dues de triples.

- **a)** Determineu els preus de l'habitació doble i de la triple en funció del preu de la individual. *[1,25 punts]*
- **b)** Si el preu de l'habitació triple és el doble del preu de la individual, quin és el preu de cada tipus d'habitació? De les tres opcions plantejades per a allotjar les $10$ persones, amb quina obtenim el preu més baix i quin és aquest preu? *[1,25 punts]*

**PAU.AL.6.**
**Rebaixes d'una botiga en línia**

*(exercici 1 de la convocatòria ordinària de 2025, sèrie 4; 2,5 punts)*. Una botiga en línia tenia a la venda tres tipus de productes, que anomenarem A, B i C. L'Ares va comprar un producte de cada abans de les vacances de Nadal i va pagar $135\,€$. A les rebaixes de gener, la botiga va rebaixar l'article A un $4\,\%$, l'article B un $6\,\%$ i l'article C un $5\,\%$ respecte al preu inicial. En veure-ho, l'Ares va decidir comprar un producte de tipus A, dos de tipus B i tres de tipus C, i va calcular que s'havia estalviat $16\,€$ respecte del cost total de la mateixa compra sense oferta. Dues setmanes després, van començar les segones rebaixes i la botiga va rebaixar l'article A un $8\,\%$, l'article B un $10\,\%$ i l'article C un $6\,\%$ respecte al preu inicial d'abans de Nadal. En veure-ho, l'Ares no se'n va poder estar i va fer una tercera compra. Aquest cop va adquirir tres productes de tipus A, un de tipus B i cinc de tipus C, i va calcular que s'havia estalviat $29\,€$ respecte al preu total de la mateixa compra si l'hagués feta abans de les vacances de Nadal.

- **a)** Plantegeu un sistema d'equacions lineals que reculli la informació del problema. *[0,75 punts]*
- **b)** Calculeu el preu de cada article abans de les vacances de Nadal. *[1,75 punts]*

**PAU.AL.7.**
**Liquidació d'un model de sabates**

*(exercici 2 de la convocatòria extraordinària de 2025, sèrie 3; 2,5 punts)*. Una marca de sabates coneguda va posar a la venda un dels seus models més populars i en va vendre tota la producció a la temporada d'estiu. El preu de cada parell de sabates era de $90\,€$, però algunes es van vendre al preu original, d'altres amb un $20\,\%$ de descompte i la resta amb un $50\,\%$ a la liquidació de final de temporada. En total es van produir $820\,000$ parells de sabates d'aquest model, que van proporcionar uns ingressos de $63\,837\,000\,€$. Sabem també que es van vendre el doble de sabates rebaixades al $20\,\%$ que al $50\,\%$.

Trobeu quants parells de sabates es van vendre al preu original, quants amb un $20\,\%$ de descompte i quants al $50\,\%$. *[2,5 punts]*

**PAU.AL.8.**
**Producció de sofàs**

*(qüestió 2 de la convocatòria ordinària de 2024, sèrie 1, i exercici 2 de la prova model de 2025, sèrie 0; 2,5 punts)*. Una empresa de mobles disposa de tres fàbriques que produeixen un model de sofà determinat. El mes passat es van fabricar un total de $1260$ unitats d'aquest model i sabem que la segona fàbrica va produir tants sofàs com les altres dues juntes.

- **a)** Amb aquesta informació, podem determinar quants sofàs va produir cadascuna de les fàbriques? Justifiqueu la resposta. A continuació, calculeu, només amb aquesta informació, quants sofàs va produir la segona fàbrica. *[1,25 punts]*
- **b)** També sabem que un $10\,\%$ dels sofàs produïts per la primera fàbrica, un $30\,\%$ dels produïts per la segona i un $20\,\%$ dels produïts per la tercera eren de color gris, i que en total es van fabricar $284$ sofàs d'aquest color. Trobeu quants sofàs va produir cada fàbrica el mes passat. *[1,25 punts]*

**PAU.AL.9.**
**Lot de maletes**

*(qüestió 2 de la convocatòria ordinària de 2024, sèrie 5; 2,5 punts)*. El nou model de maletes Rodamons disposa de tres mides diferents: petita, mitjana i gran. El preu de la maleta gran és el mateix que el de la maleta petita i la mitjana juntes. El lot d'una maleta de cada mida costa $240\,€$, però si es compra el lot de dues maletes petites, una de mitjana i una de gran, s'obté un $10\,\%$ de descompte del total i el preu final és de $256{,}5\,€$. Quin és el preu de cada tipus de maleta sense descompte? *[2,5 punts]*

**PAU.AL.10.**
**Inversió en criptomonedes**

*(qüestió 2 de la convocatòria extraordinària de 2024, sèrie 3; 2,5 punts)*. Una inversora vol invertir el seu capital en un banc especialitzat en criptomonedes que ofereix diferents dipòsits amb els interessos següents:

- BTC (bitcoin): $15\,\%$ anual.
- ETH (ether): $10\,\%$ anual.
- LNK (link): $13\,\%$ anual.

La inversora vol invertir la mateixa quantitat en bitcoins que entre les altres dues criptomonedes juntes i vol obtenir un rendiment anual global d'un $13\,\%$.

- **a)** Quina ha de ser la relació entre la inversió en ethers i en links? *[1,25 punts]*
- **b)** Si sabem que la inversió total serà de $150\,000\,€$, quina quantitat invertirà en cada criptomoneda? *[1,25 punts]*

**PAU.AL.11.**
**Notes d'en Robert**

*(qüestió 3 de la convocatòria ordinària de 2023, sèrie 1; 2,5 punts)*. En Robert ha fet tres proves d'una assignatura. Fent la mitjana aritmètica de les notes obtingudes en cadascuna de les tres proves li ha quedat una nota global de $6$. En Robert sap que la nota de la tercera prova ha estat igual que la mitjana aritmètica de les notes de les altres dues proves.

- **a)** Amb aquesta informació, pot saber alguna de les tres notes? En cas afirmatiu, de quina prova i quina seria la nota obtinguda? *[1,25 punts]*
- **b)** La professora li diu que ha estat molt irregular i que si només es tinguessin en compte les notes de les dues darreres proves hauria obtingut una mitjana de $7$. Quina nota ha obtingut en cada prova? *[1,25 punts]*

**PAU.AL.12.**
**Paquets per a farmàcies**

*(qüestió 3 de la convocatòria ordinària de 2023, sèrie 5; 2,5 punts)*. Una empresa distribueix dos tipus de paquets a les farmàcies (A i B). El paquet de tipus A conté els productes següents: $5$ termòmetres digitals per infrarojos, $30$ mascaretes i $10$ tests ràpids d'antígens. El paquet de tipus B conté $1$ termòmetre digital per infrarojos, $15$ mascaretes i $20$ tests ràpids d'antígens.

El preu del paquet de tipus A és de $550\,€$ i el del paquet de tipus B és de $200\,€$. El preu de cada producte és el mateix en els dos tipus de paquets.

- **a)** Amb les dades de l'enunciat, és possible trobar el preu d'un termòmetre, el d'una mascareta i el d'un test d'antígens? Justifiqueu la resposta plantejant i classificant un sistema d'equacions. Resoleu el sistema deixant la solució en funció del preu del test d'antígens. *[1,75 punts]*
- **b)** Si un test d'antígens costa $4\,€$, quin serà el preu d'una mascareta? I el d'un termòmetre? *[0,75 punts]*

**PAU.AL.13.**
**Activitats d'esports aquàtics**

*(qüestió 1 de la convocatòria extraordinària de 2023, sèrie 2; 2,5 punts)*. L'empresa d'esports aquàtics DiverAqua ofereix tres tipus d'activitats: esquí aquàtic, caiac i moto aquàtica. El preu per sessió i client de cadascuna d'aquestes activitats és de $40\,€$ per l'esquí aquàtic, $20\,€$ pel caiac i $60\,€$ per la moto aquàtica. Sabem que avui DiverAqua ha venut $45$ sessions en total. També sabem que el nombre de clients que han escollit esquí aquàtic és el triple dels que han escollit una sessió de caiac. La recaptació total del dia ha estat de $1700\,€$.

- **a)** Plantegeu un sistema d'equacions lineals que reculli tota aquesta informació. *[1 punt]*
- **b)** Quantes persones han dut a terme cadascuna de les tres activitats? *[1,5 punts]*

**PAU.AL.14.**
**Rams de Sant Jordi**

*(qüestió 1 de la convocatòria ordinària de 2022, sèrie 2; 2,5 punts)*. A l'institut d'en Martí han elaborat tres tipus diferents de rams de roses per a vendre el dia de Sant Jordi. L'opció clàssica consisteix en una rosa i una espiga. L'opció de ram petit està formada per tres roses i dues espigues. I, finalment, l'opció de ram gran consisteix en mitja dotzena de roses i tres espigues. Tots els rams (siguin de l'opció que siguin) porten un bonic embolcall. Sabem que s'han utilitzat $200$ roses, $135$ espigues i $85$ embolcalls.

- **a)** Quants rams s'han elaborat de cada tipus? *[1,75 punts]*
- **b)** Si el preu de venda d'un ram de l'opció clàssica és de $3$ euros, el d'un ram petit és de $5$ euros i el d'un ram gran és de $10$ euros, quants diners s'ingressaran si es venen tots? *[0,75 punts]*

### Matrius

**PAU.AL.15.**
**Matrícules d'una universitat**

*(apartat 4.2 de l'opció A de l'exercici 4 de la convocatòria ordinària de 2026, sèrie 1; 1,25 punts)*. La taula següent recull el nombre d'estudiants de grau (G), màster (M) i doctorat (D) matriculats a les tres facultats —Ciències (C), Enginyeria (E) i Lletres (L)— d'una petita universitat.

| Facultat | Grau (G) | Màster (M) | Doctorat (D) | Total |
|:--|:--|:--|:--|:--|
| Ciències (C) | $450$ | $172$ | $41$ | $663$ |
| Enginyeria (E) | $445$ | $178$ | $45$ | $668$ |
| Lletres (L) | $438$ | $183$ | $48$ | $669$ |
| Total | $1333$ | $533$ | $134$ | $2000$ |

- **4.2.** Expresseu la informació de la taula (sense els totals) mitjançant una matriu $3\times3$ i calculeu, utilitzant un producte de matrius, el vector amb el nombre total d'estudiants de grau, màster i doctorat de la universitat.

    Sabem que els estudiants de grau paguen $1000\,€$ de matrícula; els de màster, $1500\,€$, i els de doctorat, $500\,€$. Per mitjà d'un producte de matrius, calculeu l'import total que ingressa la universitat en concepte de matrícules. *[1,25 punts]*

**PAU.AL.16.**
**Repartiment de la feina d'una associació**

*(apartat 4.2 de l'opció B de l'exercici 4 de la convocatòria extraordinària de 2026, sèrie 2; 1 punt)*. Tres amics —la Carme, el Saïd i el Martí— van crear fa uns anys una petita associació dedicada a la divulgació de les matemàtiques. En aquesta associació organitzen tallers per a famílies, visiten escoles i instituts d'arreu del país, i imparteixen seminaris en línia.

El curs passat van dur a terme un total de $240$ activitats, repartides en $96$ tallers familiars, $84$ xerrades en escoles o instituts i $60$ seminaris en línia. Els dos primers tipus d'activitats són presencials, mentre que els seminaris en línia, evidentment, no ho són.

- **4.2.** Els tres amics també volen analitzar com es reparteixen entre ells la feina de preparació de les activitats. Per fer-ho, revisen com s'han organitzat durant una setmana concreta. En total, en aquest període han dedicat $24$ hores a la preparació de tallers familiars, $21$ hores a la preparació de xerrades en centres educatius i $15$ hores a la preparació de seminaris en línia.

    La distribució de la feina de preparació de cadascun dels tres tipus d'activitats és la següent:

    - la Carme s'encarrega del $50\,\%$ de la preparació dels tallers familiars, del $30\,\%$ de la preparació de les xerrades en centres educatius i del $20\,\%$ de la preparació dels seminaris en línia;
    - el Saïd s'encarrega del $30\,\%$ de la preparació dels tallers familiars, del $50\,\%$ de la preparació de les xerrades en centres educatius i del $20\,\%$ de la preparació dels seminaris en línia;
    - el Martí s'encarrega del $20\,\%$ de la preparació dels tallers familiars, del $20\,\%$ de la preparació de les xerrades en centres educatius i del $60\,\%$ de la preparació dels seminaris en línia.

    Agrupem aquesta informació en les matrius següents:

    $$
    R=\begin{pmatrix}0{,}50&0{,}30&0{,}20\\0{,}30&0{,}50&0{,}20\\0{,}20&0{,}20&0{,}60\end{pmatrix},
    \qquad
    h=\begin{pmatrix}24\\21\\15\end{pmatrix},
    $$

    que corresponen a la matriu de repartiment percentual i al vector d'hores totals dedicades a la preparació de cada tipus d'activitat, respectivament.

    Calculeu el vector $R\cdot h$ i interpreteu-ne el significat.

    Quin dels tres amics ha dedicat més hores a la preparació d'activitats? *[1 punt]*

**PAU.AL.17.**
**Detalls per a un congrés**

*(apartat a) de l'opció B de l'exercici 4 de la convocatòria ordinària de 2025, sèrie 1; 1,25 punts)*. Al Congrés Català d'Educació Matemàtica (C2EM), que se celebrarà a Lleida el proper mes de juliol, hi assistiran docents d'universitat, d'educació secundària i d'educació infantil i primària.

A hores d'ara, un $10\,\%$ dels docents inscrits són d'universitat, un $50\,\%$ són de secundària i la resta són d'infantil i primària. D'altra banda, un $40\,\%$ dels docents inscrits d'universitat, un $52\,\%$ dels docents inscrits de secundària i un $65\,\%$ dels docents inscrits d'infantil i primària són dones.

- **a)** L'organització del Congrés vol donar un detall diferent a cada grup de docents: el detall de tipus $D1$ per al grup de docents universitaris, el detall de tipus $D2$ per al grup de docents de secundària i el detall de tipus $D3$ per al grup de docents d'infantil i primària. Han demanat pressupost a tres empreses diferents, que anomenarem $E1$, $E2$ i $E3$. La matriu següent ens dona els preus unitaris, en euros, de cada detall de tipus $D1$, $D2$ i $D3$ (files) segons les empreses $E1$, $E2$ i $E3$ (columnes):

    $$
    \begin{pmatrix}
    1{,}25&1&1{,}25\\
    0{,}75&1&1{,}15\\
    1&0{,}85&0{,}80
    \end{pmatrix}
    $$

    La comanda de l'organització es pot representar com un vector fila $(x,y,z)$, en què $x$ representa la quantitat de detalls de tipus $D1$, $y$ és la quantitat de detalls de tipus $D2$ i $z$ correspon a la quantitat de detalls de tipus $D3$ que cal comprar.

    L'organització treballa amb la previsió que al Congrés hi assistiran $1000$ persones en total i que els percentatges de cada grup de docents respecte al total seran els mateixos que els que hi ha en aquest moment de la inscripció.

    Calculeu mitjançant un producte de matrius quina empresa ofereix el millor preu i quin és aquest preu. *[1,25 punts]*

**PAU.AL.18.**
**Proveïdors d'una fàbrica de pasta**

*(apartat a) de l'opció A de l'exercici 4 de la convocatòria ordinària de 2025, sèrie 4; 1,25 punts)*. Una fàbrica es dedica a elaborar pasta. Tot el procés de producció es pot resumir en tres etapes:

1. Compra de matèries primeres. Per a elaborar la pasta, l'empresa ha de comprar oli, farina i sal de bona qualitat. La compra la pot fer a tres proveïdors diferents. El primer proveïdor ven l'oli a $3\,€/\text{L}$, la farina a $0{,}6\,€/\text{kg}$ i la sal a $1\,€/\text{kg}$. El segon proveïdor ven l'oli a $3{,}5\,€/\text{L}$, la farina a $1\,€/\text{kg}$ i la sal a $0{,}7\,€/\text{kg}$. Finalment, el tercer proveïdor ven l'oli a $2{,}5\,€/\text{L}$, la farina a $0{,}8\,€/\text{kg}$ i la sal a $0{,}9\,€/\text{kg}$.
2. Elaboració, empaquetament i control de qualitat. Es fabrica i s'envasa la pasta. Posteriorment, es comprova que la pasta estigui ben feta i envasada correctament, i es verifica que els paquets pesin $500\,\text{g}$ de mitjana.
3. Venda. L'estratègia de venda i el preu dels paquets es determinen fent un estudi de mercat.

<!-- separa la llista numerada de la dels apartats -->

- **a)** L'empresa necessita $300$ litres d'oli, $700\,\text{kg}$ de farina i $25\,\text{kg}$ de sal. Escriviu aquesta informació juntament amb els preus per producte de cada proveïdor en forma matricial (deixant ben clar el que representen les files i les columnes) i calculeu mitjançant un producte de matrius el cost total de la comanda per cada proveïdor. Quin dels tres proveïdors és el més econòmic? *[1,25 punts]*

**PAU.AL.19.**
**Trasllat de tractors**

!!! note "Problema llarg"
    Aquest problema és llarg: abans de fer el producte de matrius cal calcular nou costos, alguns amb fraccions. Organitza els càlculs: troba primer el cost per quilòmetre a cada velocitat i després multiplica'l per cada distància.

*(adaptada de l'apartat b) de l'opció A de l'exercici 4 de la prova model de 2025, sèrie 0; la funció de cost que es demanava comprovar a l'apartat a) es dona com a dada)*. Una pagesa contracta una empresa de conductors perquè li portin els tractors fins als pobles on han de treballar. Suposem que els conductors fan tot el trajecte a una velocitat constant.

El gasoil que fa servir el tractor costa $1{,}96\,€$ per litre i el conductor cobra $14{,}70\,€$ l'hora. El consum de gasoil (en litres per hora), en funció de la velocitat $x$ (en quilòmetres per hora), és donat per la funció $G(x)=5+\dfrac{x^2}{98}$. Amb aquestes dades, si el poble es troba a $300\,\text{km}$ de distància, el cost total del viatge en funció de la velocitat del tractor és
$$
C(x)=300\left(\frac{24{,}5}{x}+0{,}02x\right).
$$

Suposem que la pagesa hagi d'enviar tractors a poblacions que es troben a $100$, $200$ i $300\,\text{km}$ de distància. Aquests tractors poden fer el trajecte a $35$, $25$ o $15\,\text{km/h}$. Construïu una matriu que contingui el cost total del viatge segons la distància a la qual es troba el poble (columnes) i segons la velocitat a la qual circula el tractor (files). Si en total ha de portar $3$ tractors a una localitat que es troba a $100\,\text{km}$, $3$ tractors a una localitat que es troba a $200\,\text{km}$ i $2$ tractors a una localitat que es troba a $300\,\text{km}$, calculeu, mitjançant un producte de matrius, quant li costarà tot plegat segons si els tractors circulen a $35$, $25$ o $15\,\text{km/h}$. *[1,25 punts]*

**PAU.AL.20.**
**Matrius màgiques**

*(qüestió 4 de la convocatòria ordinària de 2024, sèrie 1; 2,5 punts)*. Diem que una matriu és màgica si la suma dels elements de cada fila i de cada columna té com a resultat en tots els casos el mateix valor, que s'anomena *constant màgica*.

El Martí ha trobat una manera de crear matrius màgiques triant tres nombres qualssevol i multiplicant-los per les matrius següents:

$$
A=\begin{pmatrix}1&-1&0\\-1&0&1\\0&1&-1\end{pmatrix},
\qquad
B=\begin{pmatrix}0&-1&1\\1&0&-1\\-1&1&0\end{pmatrix}
\qquad\text{i}\qquad
C=\begin{pmatrix}0&3&0\\1&1&1\\2&-1&2\end{pmatrix}.
$$

El Martí proposa als seus amics que cadascú construeixi la seva matriu màgica particular a partir del dia del seu aniversari, del mes del seu aniversari i de la seva edat.

- **a)** Sabent que el Martí va néixer el $10$ de març i que té $18$ anys, calculeu $10\cdot A+3\cdot B+18\cdot C$. Comproveu que la matriu resultant és màgica i indiqueu quina és la seva constant màgica (el valor comú de la suma de les files i les columnes). *[1,25 punts]*
- **b)** El Martí ha calculat la matriu màgica del seu pare, que fa l'aniversari el $8$ de setembre, i ha obtingut que la seva constant màgica és $153$. Quina edat té el pare del Martí? *[1,25 punts]*

**PAU.AL.21.**
**Artesania de fusta**

*(qüestió 4 de la convocatòria ordinària de 2024, sèrie 5; 2,5 punts)*. La Laia, una aficionada a l'artesania feta amb fusta, va muntar un petit negoci fa un parell de mesos. Al seu taller, elabora tres tipus de productes amb fusta reciclada, que després posa a la venda: noms personalitzats, paraules decoratives i baldufes.

Durant el primer mes, la Laia va tenir tres clients: el primer va adquirir $2$ noms personalitzats i $3$ baldufes; el segon va adquirir $1$ nom personalitzat, $2$ paraules decoratives i $5$ baldufes, i el tercer només va comprar $4$ baldufes.

- **a)** Construïu la matriu $3\times3$ corresponent a les vendes, en què les files representin els clients ($C1$, $C2$ i $C3$) i les columnes representin els productes que van adquirir. Si el primer mes la Laia va vendre els noms personalitzats ($N$) a $20\,€$ cadascun, les paraules decoratives ($P$) a $18\,€$ cadascuna i les baldufes ($B$) a $6\,€$ cadascuna, calculeu quant va facturar a cada client per la seva comanda mitjançant un producte de matrius. *[1,5 punts]*
- **b)** Per tal d'incentivar les vendes, el segon mes la Laia va aplicar un descompte al preu de venda de tots els productes. Durant aquest mes, també va tenir tres clients i va obtenir la matriu de vendes següent:

    $$
    \begin{array}{cc}
    &\begin{matrix}\overset{\displaystyle\mathclap{N}}{\hphantom{3}}&\overset{\displaystyle\mathclap{P}}{\hphantom{1}}&\overset{\displaystyle\mathclap{B}}{\hphantom{2}}\end{matrix}\\[0.5mm]
    \begin{array}{c}C1\\C2\\C3\end{array}
    &
    \begin{pmatrix}
    3&1&2\\
    2&0&4\\
    1&2&3
    \end{pmatrix}
    \end{array}
    $$

    Si durant el segon mes la Laia va facturar $78\,€$ al primer client, $52\,€$ al segon client i $62\,€$ al tercer client, a quin preu va vendre cada producte? *[1 punt]*

**PAU.AL.22.**
**Espectadors d'un cinema**

*(qüestió 4 de la convocatòria extraordinària de 2024, sèrie 3; 2,5 punts)*. Un cinema disposa de dues sales en les quals es projecten dues pel·lícules diferents. La taula següent mostra el nombre de persones que han assistit a la projecció de cada pel·lícula la darrera setmana, agrupades per franges d'edat:

| Franja d'edat | Pel·lícula de la sala 1 | Pel·lícula de la sala 2 |
|:--|:--|:--|
| Menys de $18$ anys | $122$ | $620$ |
| $18$-$65$ anys | $930$ | $433$ |
| Més de $65$ anys | $384$ | $281$ |

La informació de la taula anterior es registra amb la forma matricial

$$
A=\begin{pmatrix}122&620\\930&433\\384&281\end{pmatrix}.
$$

- **a)** Considerant la matriu $B=\begin{pmatrix}1\\1\end{pmatrix}$, calculeu el producte $A\cdot B$. Expliqueu el significat de la matriu obtinguda.

    Sabem que una entrada per a persones de menys de $18$ anys costa $5\,€$, una entrada per a adults d'entre $18$ i $65$ anys costa $8{,}5\,€$ i una entrada per a adults de més de $65$ anys costa $6{,}5\,€$. Trobeu una matriu $C=\begin{pmatrix}a&b&c\end{pmatrix}$ de manera que el producte $C\cdot A\cdot B$ doni els ingressos setmanals totals obtinguts per la venda d'entrades, i calculeu els ingressos corresponents a aquesta setmana. *[1,5 punts]*

- **b)** Al cap d'uns mesos, el registre setmanal és donat per la matriu

    $$
    D=\begin{pmatrix}84&23\\338&x\\256&408\end{pmatrix},
    $$

    però hi ha un valor que s'ha esborrat, el del nombre de persones entre $18$ i $65$ anys que han assistit a la segona pel·lícula, i l'hem denotat per $x$. Calculeu el valor de $x$ sabent que els ingressos totals d'aquella setmana van ser de $12\,076\,€$. *[1 punt]*

**PAU.AL.23.**
**Places d'un centre cívic**

*(qüestió 2 de la convocatòria ordinària de 2023, sèrie 1; 2,5 punts)*. Un centre cívic ofereix cursos de francès de nivell principiant, intermedi i avançat. Els alumnes inscrits, si ho desitgen, tenen garantida una plaça per al curs següent. És per això que, abans d'acabar el curs, es fan les reserves de plaça per al curs vinent. De l'alumnat de nivell principiant, un $15\,\%$ vol repetir el mateix curs, un $50\,\%$ vol fer el curs intermedi i un $5\,\%$ vol passar directament al curs de nivell avançat. Pel que fa a l'alumnat de nivell intermedi, un $10\,\%$ vol repetir el curs i un $60\,\%$ vol fer el curs de nivell avançat. Finalment, de l'alumnat de nivell avançat, un $20\,\%$ vol repetir el curs. Cap alumne no demana reserva de plaça per a un curs de nivell inferior i la resta d'alumnes no volen continuar al centre el curs vinent. Aquest any hi ha hagut $100$ alumnes matriculats de nivell principiant, $90$ de nivell intermedi i $60$ de nivell avançat.

- **a)** Calculeu el nombre de places que cal reservar de cada nivell per al curs següent mitjançant un producte de matrius. *[1,25 punts]*
- **b)** El mateix centre cívic ofereix dos horaris de ioga, un de matí i un de tarda. Per al proper curs, el $50\,\%$ dels alumnes que actualment fan ioga al matí volen continuar amb el mateix horari, mentre que un $30\,\%$ volen passar a l'horari de tarda. La resta d'alumnes de matí no continuaran. Pel que fa als alumnes que actualment fan ioga a la tarda, un $40\,\%$ volen passar a l'horari de matí i un $60\,\%$ volen continuar fent l'horari de tarda. Si sabem que per al curs següent cal reservar $49$ places per a l'horari de matí i $51$ places per a l'horari de tarda, quants alumnes hi ha matriculats actualment en cada horari? *[1,25 punts]*

**PAU.AL.24.**
**Una equació matricial**

*(adaptada de la qüestió 5 de la convocatòria ordinària de 2023, sèrie 5; s'ha tret l'apartat que demanava una potència de matriu)*. Considereu les matrius $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$ i $B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$. Resoleu l'equació matricial $2A=A\cdot X+B$. *[1,25 punts]*

**PAU.AL.25.**
**Un producte i una equació matricial**

*(adaptada de la qüestió 5 de la convocatòria ordinària de 2022, sèrie 2; s'ha tret l'apartat sobre la invertibilitat del producte)*. Considereu les matrius $P=\begin{pmatrix}0&2&-1\\2&2&3\end{pmatrix}$ i $A=\begin{pmatrix}-1&-2\\0&1\\1&-1\end{pmatrix}$. Trobeu la matriu $X$ que satisfà l'equació matricial $P\cdot A+X=I$, en què $I$ denota la matriu identitat d'ordre $2$. *[1 punt]*

**PAU.AL.26.**
**Una incògnita triangular**

*(qüestió 3 de la convocatòria ordinària de 2022, sèrie 5; 2,5 punts)*. Calculeu la matriu $X$ que verifica $A\cdot X\cdot B=C$, sabent que

$$
X=\begin{pmatrix}a&b\\0&c\end{pmatrix},
\quad
A=\begin{pmatrix}1&0\\1&1\end{pmatrix},
\quad
B=\begin{pmatrix}1&2\\-1&-3\end{pmatrix}
\quad\text{i}\quad
C=\begin{pmatrix}-1&-2\\-3&-8\end{pmatrix}.
$$

*[2,5 punts]*

**PAU.AL.27.**
**Matrius que commuten**

*(qüestió 5 de la convocatòria extraordinària de 2022, sèrie 3; 2,5 punts)*. Considereu les matrius $A=\begin{pmatrix}1&-1\\0&2\end{pmatrix}$ i $B=\begin{pmatrix}2&1\\0&a\end{pmatrix}$, en què $a$ és un paràmetre real.

- **a)** Calculeu per a quin valor de $a$ les dues matrius commuten, és a dir, per a quin valor de $a$ es compleix que $A\cdot B=B\cdot A$. Comproveu que per a aquest valor de $a$ se satisfà que $A\cdot B=2\cdot I$, en què $I$ és la matriu identitat d'ordre dos. *[1,25 punts]*
- **b)** Per al valor de $a$ trobat a l'apartat anterior, calculeu les matrius inverses de les matrius $A$ i $B$. Podeu aplicar la relació $A\cdot B=2\cdot I$. *[1,25 punts]*
