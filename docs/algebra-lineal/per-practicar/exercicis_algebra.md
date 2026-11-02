# Exercicis i problemes

En aquesta pàgina tens els enunciats del bloc d'àlgebra lineal i els problemes PAU. Resol cada activitat al quadern i desplega'n la solució només quan vulguis comprovar el procediment.

!!! tip "Com treballar"
    En aplicar el mètode de Gauss, anota cada transformació de fila, mantén sempre el mateix ordre de les incògnites i acaba classificant el sistema. Si el pivot és zero, intercanvia files. Per no treballar amb fraccions, combina dues files amb els dos coeficients, per exemple $F_3=2F_3-3F_1$.

## Tema 3. Sistemes i mètode de Gauss

### Equacions lineals, sistemes i classificació

**3.1.**
Indica quines de les equacions següents són lineals. Justifica les que no ho són.

| | |
|:--|:--|
| **a)** $2x-3y+z=5$ | **b)** $xy+y=1$ |
| **c)** $x^2+y=4$ | **d)** $\dfrac{x}{2}-3y=0$ |
| **e)** $2^x+y=4$ | **f)** $4y-7z=3$ |

??? example "Mostra la solució pas a pas de l'exercici 3.1"
    Les equacions **a)**, **d)** i **f)** són lineals perquè les incògnites només apareixen elevades a $1$ i multiplicades per nombres.

    - **b)** no és lineal perquè conté el producte $xy$;
    - **c)** no és lineal perquè conté $x^2$;
    - **e)** no és lineal perquè la incògnita apareix a l'exponent.

---

**3.2.**
Comprova si $(x,y,z)=(1,3,-2)$ és solució del sistema

$$
\begin{cases}
2x+y+z=3\\
x-y+2z=-6\\
3x+y-z=8
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.2"
    Substituïm $x=1$, $y=3$ i $z=-2$ en totes les equacions:

    $$
    2\cdot1+3-2=3,
    $$

    $$
    1-3+2(-2)=-6,
    $$

    $$
    3\cdot1+3-(-2)=8.
    $$

    Les tres igualtats són certes. Per tant, $(1,3,-2)$ és solució del sistema.

---

**3.3.**
Resol el sistema esglaonat següent i classifica'l:

$$
\begin{cases}
x+3y-2z=-3\\
2y+z=0\\
3z=6
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.3"
    Resolem de baix cap amunt:

    $$
    3z=6\Rightarrow z=2,
    $$

    $$
    2y+2=0\Rightarrow y=-1,
    $$

    $$
    x+3(-1)-2\cdot2=-3\Rightarrow x=4.
    $$

    La solució és $\boxed{(x,y,z)=(4,-1,2)}$. Com que és única, el sistema és compatible determinat.

### Mètode de Gauss

En aquests exercicis hauràs d'intercanviar files quan el pivot sigui zero o quan una altra fila ofereixi un pivot igual a $1$, i combinar files amb els dos coeficients per evitar fraccions.

**3.4.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2x+3y-z=-1\\
3x-2y+2z=15\\
x+4y+3z=-2
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.4"
    La tercera equació té coeficient $1$ a la $x$. Si la posem a la primera fila, el pivot és $1$ i podem fer zeros sense fraccions:

    $$
    \left(
    \begin{array}{ccc|c}
    2&3&-1&-1\\
    3&-2&2&15\\
    1&4&3&-2
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    3&-2&2&15\\
    2&3&-1&-1
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    3&-2&2&15\\
    2&3&-1&-1
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-3F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    0&-14&-7&21\\
    0&-5&-7&3
    \end{array}
    \right)
    $$

    Simplifiquem la segona fila dividint-la entre $-7$. Després eliminem el $-5$ de la tercera fila amb els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    0&-14&-7&21\\
    0&-5&-7&3
    \end{array}
    \right)
    \xrightarrow{F_2=F_2/(-7)}
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    0&2&1&-3\\
    0&-5&-7&3
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    0&2&1&-3\\
    0&-5&-7&3
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3+5F_2}
    \left(
    \begin{array}{ccc|c}
    1&4&3&-2\\
    0&2&1&-3\\
    0&0&-9&-9
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    -9z=-9\Rightarrow z=1,
    $$

    $$
    2y+1=-3\Rightarrow y=-2,
    $$

    $$
    x+4(-2)+3\cdot1=-2\Rightarrow x=3.
    $$

    $$
    \boxed{(x,y,z)=(3,-2,1)}.
    $$

    El sistema és compatible determinat.

---

**3.5.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
3y+2z=4\\
2x+3y-z=9\\
3x+2y+2z=5
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.5"
    La primera equació no conté la $x$: el pivot és zero i hem de començar intercanviant files.

    $$
    \left(
    \begin{array}{ccc|c}
    0&3&2&4\\
    2&3&-1&9\\
    3&2&2&5
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    2&3&-1&9\\
    0&3&2&4\\
    3&2&2&5
    \end{array}
    \right)
    $$

    Per eliminar el $3$ de la tercera fila sense fraccions, la multipliquem per $2$ i li restem $3$ vegades la primera:

    $$
    \left(
    \begin{array}{ccc|c}
    2&3&-1&9\\
    0&3&2&4\\
    3&2&2&5
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-3F_1}
    \left(
    \begin{array}{ccc|c}
    2&3&-1&9\\
    0&3&2&4\\
    0&-5&7&-17
    \end{array}
    \right)
    $$

    Ara eliminem el $-5$ amb el pivot $3$:

    $$
    \left(
    \begin{array}{ccc|c}
    2&3&-1&9\\
    0&3&2&4\\
    0&-5&7&-17
    \end{array}
    \right)
    \xrightarrow{F_3=3F_3+5F_2}
    \left(
    \begin{array}{ccc|c}
    2&3&-1&9\\
    0&3&2&4\\
    0&0&31&-31
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    31z=-31\Rightarrow z=-1,
    $$

    $$
    3y+2(-1)=4\Rightarrow y=2,
    $$

    $$
    2x+3\cdot2-(-1)=9\Rightarrow x=1.
    $$

    $$
    \boxed{(x,y,z)=(1,2,-1)}.
    $$

    El sistema és compatible determinat.

---

**3.6.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2x+y+z=6\\
4x+2y-z=3\\
3x-2y+2z=14
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.6"
    Fem zeros a la primera columna. Per a la tercera fila combinem els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&1&6\\
    4&2&-1&3\\
    3&-2&2&14
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=2F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    2&1&1&6\\
    0&0&-3&-9\\
    0&-7&1&10
    \end{array}
    \right)
    $$

    A la segona fila també ha desaparegut la $y$: el pivot és zero. Intercanviant la segona i la tercera files, el sistema ja queda esglaonat.

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&1&6\\
    0&0&-3&-9\\
    0&-7&1&10
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    2&1&1&6\\
    0&-7&1&10\\
    0&0&-3&-9
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    -3z=-9\Rightarrow z=3,
    $$

    $$
    -7y+3=10\Rightarrow y=-1,
    $$

    $$
    2x-1+3=6\Rightarrow x=2.
    $$

    $$
    \boxed{(x,y,z)=(2,-1,3)}.
    $$

    El sistema és compatible determinat.

---

**3.7.**
Resol pel mètode de Gauss i classifica el sistema. Si té infinites solucions, escriu-ne dues de particulars.

$$
\begin{cases}
2x+3y-z=1\\
3x+5y+z=3\\
7x+11y-z=5
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.7"
    Cap coeficient de la $x$ no val $1$. Per no introduir fraccions, combinem cada fila amb la primera utilitzant els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    2&3&-1&1\\
    3&5&1&3\\
    7&11&-1&5
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=2F_2-3F_1\\F_3=2F_3-7F_1}}
    \left(
    \begin{array}{ccc|c}
    2&3&-1&1\\
    0&1&5&3\\
    0&1&5&3
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    2&3&-1&1\\
    0&1&5&3\\
    0&1&5&3
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    2&3&-1&1\\
    0&1&5&3\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que la tercera equació no aporta informació nova: és el doble de la primera més la segona. Queden dues equacions per a tres incògnites.

    Prenem $z=\lambda$, amb $\lambda\in\mathbb{R}$:

    $$
    y=3-5\lambda,
    \qquad
    2x=1-3(3-5\lambda)+\lambda=-8+16\lambda\Rightarrow x=-4+8\lambda.
    $$

    $$
    \boxed{(x,y,z)=(-4+8\lambda,\,3-5\lambda,\,\lambda),\qquad \lambda\in\mathbb{R}.}
    $$

    El sistema és compatible indeterminat. Dues solucions particulars:

    - si $\lambda=0$, $(x,y,z)=(-4,3,0)$;
    - si $\lambda=1$, $(x,y,z)=(4,-2,1)$.

---

**3.8.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2y+3z=4\\
3x+2y+3z=5\\
2x+4y+6z=7
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.8"
    La primera equació no conté la $x$, de manera que intercanviem les dues primeres files. Després eliminem la $x$ de la tercera fila amb els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    0&2&3&4\\
    3&2&3&5\\
    2&4&6&7
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    3&2&3&5\\
    0&2&3&4\\
    2&4&6&7
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    3&2&3&5\\
    0&2&3&4\\
    2&4&6&7
    \end{array}
    \right)
    \xrightarrow{F_3=3F_3-2F_1}
    \left(
    \begin{array}{ccc|c}
    3&2&3&5\\
    0&2&3&4\\
    0&8&12&11
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    3&2&3&5\\
    0&2&3&4\\
    0&8&12&11
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-4F_2}
    \left(
    \begin{array}{ccc|c}
    3&2&3&5\\
    0&2&3&4\\
    0&0&0&-5
    \end{array}
    \right)
    $$

    L'última fila representa $0=-5$, que és una contradicció. El sistema és **incompatible** i no té solució.

### Problemes de sistemes

**3.9.**
Una inversora destina $12\,000\,€$ a comprar accions de tres empreses, A, B i C. Al cap d'un any, les accions d'A s'han revaloritzat un $5\,\%$, les de B han perdut un $2\,\%$ i les de C s'han revaloritzat un $8\,\%$. La quantitat invertida en B és el doble de la invertida en C.

**a)** Si el guany total ha estat de $380\,€$, quant ha invertit en cada empresa?

**b)** Un amic seu afirma que, amb les mateixes condicions, ell va acabar l'any amb una pèrdua de $60\,€$. És possible? Justifica-ho.

??? example "Mostra la solució pas a pas de l'exercici 3.9"
    Anomenem $x$, $y$ i $z$ els euros invertits en A, B i C, respectivament.

    **Apartat a)**

    Una pèrdua del $2\,\%$ és una variació de $-0{,}02y$. El guany total és $0{,}05x-0{,}02y+0{,}08z=380$, i multiplicant per $100$ obtenim una equació sense decimals:

    $$
    \begin{cases}
    x+y+z=12\,000\\
    5x-2y+8z=38\,000\\
    y-2z=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    5&-2&8&38\,000\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-5F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&-7&3&-22\,000\\
    0&1&-2&0
    \end{array}
    \right)
    $$

    Passem la tercera fila a la segona posició, perquè el pivot $1$ simplifica els càlculs:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&-7&3&-22\,000\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2\leftrightarrow F_3\\F_3=F_3+7F_2}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&-2&0\\
    0&0&-11&-22\,000
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=2000$, $y=2\cdot2000=4000$ i $x=12\,000-4000-2000=6000$.

    El sistema és compatible determinat. Ha invertit $6000\,€$ en A, $4000\,€$ en B i $2000\,€$ en C.

    **Comprovació:** $0{,}05\cdot6000-0{,}02\cdot4000+0{,}08\cdot2000=300-80+160=380\,€$.

    **Apartat b)**

    Una pèrdua de $60\,€$ vol dir $0{,}05x-0{,}02y+0{,}08z=-60$, és a dir, $5x-2y+8z=-6000$. Amb les mateixes transformacions, la matriu esglaonada és

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&-2&0\\
    0&0&-11&-66\,000
    \end{array}
    \right)
    $$

    Obtenim $z=6000$, $y=2\cdot6000=12\,000$ i $x=12\,000-12\,000-6000=-6000$.

    Matemàticament, el sistema és compatible determinat, però la solució no és vàlida en el context: no es pot invertir una quantitat negativa en l'empresa A. Per tant, **no és possible** acabar amb una pèrdua de $60\,€$ amb aquestes condicions.

---

**3.10.**
Un patinet elèctric es ven a $726\,€$, IVA del $21\,\%$ inclòs. El preu sense IVA es reparteix en tres parts: el cost de fabricació, el cost de transport i distribució i el benefici de la botiga. El cost de transport és el $20\,\%$ del cost de fabricació, i el benefici de la botiga és el $25\,\%$ de la suma dels costos de fabricació i de transport.

**a)** Calcula el cost de fabricació, el cost de transport i el benefici de la botiga.

**b)** Durant les rebaixes, la botiga fa un descompte del $10\,\%$ sobre el preu final, IVA inclòs. Si els costos de fabricació i de transport no canvien, quin percentatge del seu benefici perd la botiga?

??? example "Mostra la solució pas a pas de l'exercici 3.10"
    Anomenem:

    - $x$: cost de fabricació, en euros;
    - $y$: cost de transport i distribució, en euros;
    - $z$: benefici de la botiga, en euros.

    **Apartat a)**

    Aplicar un IVA del $21\,\%$ equival a multiplicar per $1{,}21$:

    $$
    1{,}21(x+y+z)=726\Rightarrow x+y+z=\frac{726}{1{,}21}=600.
    $$

    Les altres condicions són $y=0{,}2x$, és a dir, $x-5y=0$, i $z=0{,}25(x+y)$, és a dir, $x+y-4z=0$. El sistema és

    $$
    \begin{cases}
    x+y+z=600\\
    x+y-4z=0\\
    x-5y=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&600\\
    1&1&-4&0\\
    1&-5&0&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&600\\
    0&0&-5&-600\\
    0&-6&-1&-600
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&600\\
    0&0&-5&-600\\
    0&-6&-1&-600
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&600\\
    0&-6&-1&-600\\
    0&0&-5&-600
    \end{array}
    \right)
    $$

    El pivot de la segona fila era zero; després de l'intercanvi, el sistema ja és esglaonat. Per substitució enrere: $z=120$, $-6y-120=-600\Rightarrow y=80$ i $x=600-80-120=400$.

    El sistema és compatible determinat. El cost de fabricació és de $400\,€$, el de transport de $80\,€$ i el benefici de la botiga de $120\,€$.

    **Comprovació:** $80$ és el $20\,\%$ de $400$; $120$ és el $25\,\%$ de $480$; i $1{,}21\cdot600=726\,€$.

    **Apartat b)**

    El nou preu final és el $90\,\%$ de l'anterior: $0{,}9\cdot726=653{,}40\,€$. Sense IVA, el preu queda en

    $$
    \frac{653{,}40}{1{,}21}=540\,€.
    $$

    Com que els costos continuen sumant $400+80=480\,€$, el benefici passa a ser $540-480=60\,€$. La botiga perd $120-60=60\,€$ de benefici:

    $$
    \frac{60}{120}\cdot100=50\,\%.
    $$

    Un descompte del $10\,\%$ en el preu fa perdre a la botiga el $50\,\%$ del seu benefici, perquè tot el descompte surt del benefici i no dels costos.

---

**3.11.**
En una factura de la llum, l'energia es cobra per trams horaris: $0{,}30\,€$ el $\text{kWh}$ en hores punta, $0{,}15\,€$ en hores pla i $0{,}10\,€$ en hores vall. Un mes, una família ha consumit $300\,\text{kWh}$. La companyia informa que el $60\,\%$ del consum ha estat en hores punta i pla, i que el $40\,\%$ ha estat en hores vall.

**a)** Planteja el sistema, resol-lo pel mètode de Gauss i classifica'l. Es pot saber quants $\text{kWh}$ s'han consumit en cada tram?

**b)** La factura indica, a més, que l'import de l'energia ha estat de $48\,€$. Substitueix la condició redundant per aquesta dada i calcula el consum de cada tram.

**c)** Quin percentatge de l'import de l'energia correspon a les hores punta?

??? example "Mostra la solució pas a pas de l'exercici 3.11"
    Anomenem $x$, $y$ i $z$ els $\text{kWh}$ consumits en hores punta, pla i vall, respectivament.

    **Apartat a)**

    El $60\,\%$ de $300$ és $180$ i el $40\,\%$ és $120$:

    $$
    \begin{cases}
    x+y+z=300\\
    x+y=180\\
    z=120
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    1&1&0&180\\
    0&0&1&120
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&0&-1&-120\\
    0&0&1&120
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&0&-1&-120\\
    0&0&1&120
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&0&-1&-120\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que una de les dades és redundant: si el $60\,\%$ és en punta i pla, el $40\,\%$ restant és necessàriament en vall. Dos percentatges complementaris no aporten dues informacions diferents.

    La $y$ no té pivot. Prenem $y=\lambda$: obtenim $z=120$ i $x=180-\lambda$.

    $$
    \boxed{(x,y,z)=(180-\lambda,\,\lambda,\,120)}
    $$

    El sistema és **compatible indeterminat**: sabem el consum en hores vall, però no com es reparteixen els $180\,\text{kWh}$ entre punta i pla. En el context, $0\leq\lambda\leq180$.

    **Apartat b)**

    L'import de l'energia dona $0{,}30x+0{,}15y+0{,}10z=48$, és a dir, $30x+15y+10z=4800$. Substituïm la condició redundant $z=120$ per aquesta equació:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    1&1&0&180\\
    30&15&10&4800
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-30F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&0&-1&-120\\
    0&-15&-20&-4200
    \end{array}
    \right)
    $$

    El pivot de la segona fila és zero. Simplifiquem la tercera fila dividint-la entre $-5$ i intercanviem les dues últimes:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&0&-1&-120\\
    0&-15&-20&-4200
    \end{array}
    \right)
    \xrightarrow{\substack{F_3=F_3/(-5)\\F_2\leftrightarrow F_3}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&300\\
    0&3&4&840\\
    0&0&-1&-120
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=120$, $3y+480=840\Rightarrow y=120$ i $x=300-120-120=60$.

    El sistema és compatible determinat: s'han consumit $60\,\text{kWh}$ en hores punta, $120\,\text{kWh}$ en hores pla i $120\,\text{kWh}$ en hores vall.

    **Comprovació:** $0{,}30\cdot60+0{,}15\cdot120+0{,}10\cdot120=18+18+12=48\,€$.

    **Apartat c)**

    Les hores punta costen $0{,}30\cdot60=18\,€$:

    $$
    \frac{18}{48}\cdot100=37{,}5\,\%.
    $$

    Tot i que només representen el $20\,\%$ del consum, les hores punta suposen el $37{,}5\,\%$ de l'import de l'energia.

---

**3.12.**
Una compra al supermercat costa $100\,€$ sense IVA. Inclou productes bàsics, amb un IVA del $4\,\%$, altres aliments, amb un IVA del $10\,\%$, i productes de neteja, amb un IVA del $21\,\%$. L'import sense IVA dels aliments al $10\,\%$ supera en $30\,€$ el dels productes bàsics. En cada apartat, afegeix només la dada indicada a les dues condicions anteriors, resol el sistema pel mètode de Gauss, classifica'l i interpreta'n el resultat.

**a)** El tiquet indica que l'import total, IVA inclòs, és de $112{,}10\,€$.

**b)** Una promoció descompta el $20\,\%$ de l'import dels aliments al $10\,\%$ i el $10\,\%$ de l'import dels productes de neteja, sense IVA. El tiquet indica que l'estalvi total és de $13\,€$.

**c)** Un altre tiquet, amb les mateixes condicions inicials i la mateixa promoció, indica que l'estalvi total és de $14\,€$.

??? example "Mostra la solució pas a pas de l'exercici 3.12"
    Anomenem $x$, $y$ i $z$ els imports sense IVA, en euros, dels productes bàsics, dels aliments al $10\,\%$ i dels productes de neteja, respectivament.

    Les dues condicions comunes són $x+y+z=100$ i $y=x+30$, és a dir, $x-y=-30$. Primer les esglaonem:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    1&-1&0&-30
    \end{array}
    \right)
    \xrightarrow{F_2=F_1-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130
    \end{array}
    \right)
    $$

    **Apartat a)**

    Amb IVA, cada import es multiplica per $1{,}04$, $1{,}10$ o $1{,}21$:

    $$
    1{,}04x+1{,}10y+1{,}21z=112{,}10.
    $$

    Si hi restem $x+y+z=100$, ens queda només la quota d'IVA: $0{,}04x+0{,}10y+0{,}21z=12{,}10$. Multiplicant per $100$, obtenim $4x+10y+21z=1210$.

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    4&10&21&1210
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-4F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&6&17&810
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&6&17&810
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-3F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&0&14&420
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=30$, $2y+30=130\Rightarrow y=50$ i $x=100-50-30=20$.

    El sistema és **compatible determinat**: la compra inclou $20\,€$ de productes bàsics, $50\,€$ d'altres aliments i $30\,€$ de productes de neteja, sense IVA.

    **Comprovació:** $1{,}04\cdot20+1{,}10\cdot50+1{,}21\cdot30=20{,}80+55+36{,}30=112{,}10\,€$.

    **Apartat b)**

    L'estalvi és $0{,}20y+0{,}10z=13$. Multiplicant per $10$, obtenim $2y+z=130$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&2&1&130
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que la dada no aporta informació nova: es dedueix de les dues condicions inicials. Prenem $x=\lambda$:

    $$
    y=30+\lambda,
    \qquad
    z=100-\lambda-(30+\lambda)=70-2\lambda.
    $$

    $$
    \boxed{(x,y,z)=(\lambda,\,30+\lambda,\,70-2\lambda)}
    $$

    El sistema és **compatible indeterminat**: no es pot saber com es reparteix la compra. En el context, cap import no pot ser negatiu, de manera que $0\leq\lambda\leq35$.

    **Apartat c)**

    Ara l'estalvi dona $2y+z=140$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&2&1&140
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&2&1&130\\
    0&0&0&10
    \end{array}
    \right)
    $$

    L'última fila representa $0=10$, que és una contradicció. El sistema és **incompatible**: aquest tiquet no és coherent amb les condicions inicials i, per tant, conté algun error.

    | Dada afegida | Tipus de sistema | Interpretació |
    |:--|:--|:--|
    | Total amb IVA de $112{,}10\,€$ | SCD | Hi ha una única distribució de la compra. |
    | Estalvi de $13\,€$ | SCI | La dada és redundant: no determina la distribució de la compra. |
    | Estalvi de $14\,€$ | SI | La dada contradiu les condicions inicials. |

## Problemes PAU

### Sistemes d'equacions en context

**PAU.AL.1.**
**Comandes de fruita**

*(exercici 2 de la convocatòria ordinària de 2026, sèrie 1; 2,5 punts)*. Un pagès produeix diferents tipus de fruites: maduixes, albercocs i cireres, que es venen en caixes a preus diferents. Sabem que una comanda de $5$ caixes de maduixes, $3$ d'albercocs i $4$ de cireres té un cost total de $120\,€$. D'altra banda, una comanda de $2$ caixes de maduixes, $1$ d'albercocs i $3$ de cireres té un cost total de $56\,€$.

- **2.1.** Calculeu el preu d'una caixa de maduixes i el preu d'una caixa d'albercocs en funció del preu d'una caixa de cireres. Amb aquesta informació, calculeu quin és el preu d'una comanda de $6$ caixes de maduixes, $4$ d'albercocs i $2$ de cireres. *[1,5 punts]*
- **2.2.** Si sabem que el preu d'una caixa d'albercocs és de $12{,}50\,€$, calculeu quin és el preu de les altres dues caixes de fruita. *[1 punt]*

??? example "Mostra la solució pas a pas del problema PAU.AL.1"
    Anomenem $x$, $y$ i $z$ el preu, en euros, d'una caixa de maduixes, d'albercocs i de cireres, respectivament.

    **Apartat 2.1**

    Les dues comandes donen el sistema

    $$
    \begin{cases}
    5x+3y+4z=120\\
    2x+y+3z=56
    \end{cases}
    $$

    Per eliminar la $x$ de la segona fila sense fraccions, combinem els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    5&3&4&120\\
    2&1&3&56
    \end{array}
    \right)
    \xrightarrow{F_2=5F_2-2F_1}
    \left(
    \begin{array}{ccc|c}
    5&3&4&120\\
    0&-1&7&40
    \end{array}
    \right)
    $$

    Queden dues equacions per a tres incògnites i no hi ha cap contradicció: el sistema és **compatible indeterminat**. Prenem el preu de les cireres com a paràmetre, $z=\lambda$:

    $$
    -y+7\lambda=40\Rightarrow y=7\lambda-40,
    $$

    $$
    5x=120-3(7\lambda-40)-4\lambda=240-25\lambda\Rightarrow x=48-5\lambda.
    $$

    Per tant, una caixa de maduixes costa $48-5\lambda$ euros i una d'albercocs, $7\lambda-40$ euros.

    El preu de la comanda nova és

    $$
    6x+4y+2z=6(48-5\lambda)+4(7\lambda-40)+2\lambda,
    $$

    $$
    6x+4y+2z=288-30\lambda+28\lambda-160+2\lambda=128\,€.
    $$

    El resultat no depèn de $\lambda$: encara que no coneguem el preu de cada caixa, sabem que aquesta comanda costa $128\,€$.

    **Apartat 2.2**

    Si $y=12{,}5$, aleshores $7\lambda-40=12{,}5$, és a dir, $\lambda=7{,}5$. Per tant, $x=48-5\cdot7{,}5=10{,}5$.

    Una caixa de maduixes costa $10{,}50\,€$ i una de cireres, $7{,}50\,€$.

    **Comprovació:** $5\cdot10{,}5+3\cdot12{,}5+4\cdot7{,}5=52{,}5+37{,}5+30=120\,€$ i $2\cdot10{,}5+12{,}5+3\cdot7{,}5=21+12{,}5+22{,}5=56\,€$.

---

**PAU.AL.2.**
**Viatge de final de curs**

*(exercici 2 de la convocatòria extraordinària de 2026, sèrie 2; 2,5 punts)*. A l'Institut La Closa s'ha organitzat un viatge a Roma per a l'alumnat de segon de batxillerat, però no tots els alumnes hi han volgut anar. Alguns alumnes han organitzat, pel seu compte, un viatge alternatiu a Londres, mentre que d'altres han decidit no viatjar enlloc. Sabem que a segon de batxillerat hi ha un total de $84$ alumnes i que el nombre d'alumnes que no han marxat enlloc és el triple del nombre d'alumnes que han anat a Londres.

- **2.1.** Plantegeu i estudieu el sistema d'equacions corresponent. Es pot determinar el nombre d'alumnes que han anat a cada viatge i el nombre d'alumnes que no han marxat enlloc? Justifiqueu la resposta. *[0,75 punts]*
- **2.2.** Resoleu el sistema anterior en funció del nombre d'alumnes que han anat a Londres. Deduïu que el nombre d'alumnes que no han marxat enlloc és un múltiple de $3$ i que el nombre d'alumnes que han anat a Roma és un múltiple de $4$. *[0,75 punts]*
- **2.3.** Disposem ara d'una nova informació: si $4$ alumnes dels que no han marxat enlloc s'haguessin afegit al viatge a Roma, aleshores el nombre d'alumnes que hauria anat a Roma hauria estat el doble del nombre d'alumnes que han anat a Londres i dels que no haurien marxat enlloc conjuntament. Es pot determinar ara quants alumnes han anat a cada viatge i quants no han marxat enlloc? Justifiqueu la resposta i, si és possible, trobeu aquestes quantitats. *[1 punt]*

??? example "Mostra la solució pas a pas del problema PAU.AL.2"
    Anomenem $x$ el nombre d'alumnes que han anat a Roma, $y$ els que han anat a Londres i $z$ els que no han marxat enlloc.

    **Apartat 2.1**

    $$
    \begin{cases}
    x+y+z=84\\
    3y-z=0
    \end{cases}
    \qquad
    \left(
    \begin{array}{ccc|c}
    1&1&1&84\\
    0&3&-1&0
    \end{array}
    \right)
    $$

    La matriu ja és esglaonada. Hi ha dues equacions per a tres incògnites i cap contradicció: el sistema és **compatible indeterminat**. Té infinites solucions i, per tant, amb aquestes dades no es pot determinar quants alumnes hi ha en cada grup.

    **Apartat 2.2**

    Prenem $y=\lambda$. De la segona equació, $z=3\lambda$, i de la primera,

    $$
    x=84-\lambda-3\lambda=84-4\lambda=4(21-\lambda).
    $$

    $$
    \boxed{(x,y,z)=(84-4\lambda,\,\lambda,\,3\lambda)}
    $$

    Com que $\lambda$ és un nombre enter d'alumnes, $z=3\lambda$ és múltiple de $3$ i $x=4(21-\lambda)$ és múltiple de $4$. A més, perquè cap quantitat sigui negativa, $\lambda$ ha de ser un enter entre $0$ i $21$.

    **Apartat 2.3**

    Si $4$ alumnes passessin del grup que no ha marxat enlloc al de Roma, tindríem $x+4=2\big(y+(z-4)\big)$, és a dir, $x-2y-2z=-12$. El sistema és ara

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&84\\
    0&3&-1&0\\
    1&-2&-2&-12
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&84\\
    0&3&-1&0\\
    0&-3&-3&-96
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&84\\
    0&3&-1&0\\
    0&-3&-3&-96
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&84\\
    0&3&-1&0\\
    0&0&-4&-96
    \end{array}
    \right)
    $$

    Ara el sistema és **compatible determinat**: $z=24$, $3y=24\Rightarrow y=8$ i $x=84-8-24=52$.

    Han anat $52$ alumnes a Roma i $8$ a Londres, i $24$ no han marxat enlloc. Els resultats compleixen l'apartat 2.2: $52$ és múltiple de $4$ i $24$ és múltiple de $3$.

    **Comprovació:** $52+4=56$ i $2(8+20)=56$.

---

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

??? example "Mostra la solució pas a pas del problema PAU.AL.3"
    Anomenem $x$, $y$ i $z$ el nombre d'estudiants becats de grau, de màster i de doctorat, respectivament.

    A la taula hi ha $1333+533=1866$ estudiants de grau i màster, i la meitat són $933$. El sistema és

    $$
    \begin{cases}
    x+y+z=1036\\
    x+y=933\\
    y-z=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&1036\\
    1&1&0&933\\
    0&1&-1&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1036\\
    0&0&-1&-103\\
    0&1&-1&0
    \end{array}
    \right)
    $$

    El pivot de la segona fila és zero, de manera que intercanviem les dues últimes files:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&1036\\
    0&0&-1&-103\\
    0&1&-1&0
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1036\\
    0&1&-1&0\\
    0&0&-1&-103
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=103$, $y=103$ i $x=1036-103-103=830$.

    El sistema és compatible determinat. Hi ha $830$ estudiants becats de grau, $103$ de màster i $103$ de doctorat.

    **Comprovació:** $830+103+103=1036$ i $830+103=933$.

---

**PAU.AL.4.**
**Activitats d'una associació**

*(apartat 4.2 de l'opció A de l'exercici 4 de la convocatòria extraordinària de 2026, sèrie 2; 1 punt)*. Tres amics —la Carme, el Saïd i el Martí— van crear fa uns anys una petita associació dedicada a la divulgació de les matemàtiques. En aquesta associació organitzen tallers per a famílies, visiten escoles i instituts d'arreu del país, i imparteixen seminaris en línia.

El curs passat van dur a terme un total de $240$ activitats, repartides en $96$ tallers familiars, $84$ xerrades en escoles o instituts i $60$ seminaris en línia. Els dos primers tipus d'activitats són presencials, mentre que els seminaris en línia, evidentment, no ho són.

- **4.2.** El curs passat, per a dur a terme les $240$ activitats, els tres amics van decidir organitzar-se de manera que cada activitat fos duta a terme per una sola persona; és a dir, no hi havia activitats desenvolupades per més d'un d'ells. Si sabem que la Carme va participar en $30$ activitats més que el Martí i que el Saïd va participar en $18$ activitats més que el Martí, de quantes activitats es va encarregar cadascun dels tres amics? *[1 punt]*

??? example "Mostra la solució pas a pas del problema PAU.AL.4"
    Anomenem $x$, $y$ i $z$ el nombre d'activitats de la Carme, del Saïd i del Martí, respectivament.

    $$
    \begin{cases}
    x+y+z=240\\
    x-z=30\\
    y-z=18
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    1&0&-1&30\\
    0&1&-1&18
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&-1&-2&-210\\
    0&1&-1&18
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&-1&-2&-210\\
    0&1&-1&18
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&-1&-2&-210\\
    0&0&-3&-192
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=64$, $-y-128=-210\Rightarrow y=82$ i $x=240-82-64=94$.

    El sistema és compatible determinat. La Carme es va encarregar de $94$ activitats, el Saïd de $82$ i el Martí de $64$.

    **Comprovació:** $94+82+64=240$, $94-64=30$ i $82-64=18$.

---

**PAU.AL.5.**
**Habitacions d'hotel**

*(exercici 1 de la convocatòria ordinària de 2025, sèrie 1; 2,5 punts)*. Volem allotjar $10$ persones en un hotel que té habitacions individuals, dobles i triples. Sabem que si reservem sis habitacions individuals i dues de dobles, hem de pagar $702\,€$, i si en reservem una d'individual i tres de triples, hem de pagar el mateix que si en reservem dues de dobles i dues de triples.

- **a)** Determineu els preus de l'habitació doble i de la triple en funció del preu de la individual. *[1,25 punts]*
- **b)** Si el preu de l'habitació triple és el doble del preu de la individual, quin és el preu de cada tipus d'habitació? De les tres opcions plantejades per a allotjar les $10$ persones, amb quina obtenim el preu més baix i quin és aquest preu? *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.5"
    Anomenem $x$, $y$ i $z$ el preu, en euros, de l'habitació individual, de la doble i de la triple, respectivament.

    **Apartat a)**

    $$
    \begin{cases}
    6x+2y=702\\
    x+3z=2y+2z
    \end{cases}
    \Longrightarrow
    \begin{cases}
    6x+2y=702\\
    x-2y+z=0
    \end{cases}
    $$

    Són dues equacions per a tres incògnites, sense contradicció: el sistema és compatible indeterminat. Com que ens demanen els preus en funció del de la individual, prenem $x=\lambda$ i aïllem:

    $$
    2y=702-6\lambda\Rightarrow y=351-3\lambda,
    $$

    $$
    z=2y-\lambda=702-6\lambda-\lambda=702-7\lambda.
    $$

    La doble costa $351-3\lambda$ euros i la triple, $702-7\lambda$ euros.

    **Apartat b)**

    Si $z=2x$, aleshores $702-7\lambda=2\lambda$, és a dir, $\lambda=78$. Per tant,

    $$
    x=78\,€,
    \qquad
    y=351-3\cdot78=117\,€,
    \qquad
    z=2\cdot78=156\,€.
    $$

    Les tres opcions de l'enunciat permeten allotjar exactament $10$ persones:

    | Opció | Places | Preu |
    |:--|:--|:--|
    | $6$ individuals i $2$ dobles | $6+4=10$ | $6\cdot78+2\cdot117=702\,€$ |
    | $1$ individual i $3$ triples | $1+9=10$ | $78+3\cdot156=546\,€$ |
    | $2$ dobles i $2$ triples | $4+6=10$ | $2\cdot117+2\cdot156=546\,€$ |

    El preu més baix és de $546\,€$, i s'obté tant amb la segona opció com amb la tercera, que tenen el mateix preu, tal com diu l'enunciat.

---

**PAU.AL.6.**
**Rebaixes d'una botiga en línia**

*(exercici 1 de la convocatòria ordinària de 2025, sèrie 4; 2,5 punts)*. Una botiga en línia tenia a la venda tres tipus de productes, que anomenarem A, B i C. L'Ares va comprar un producte de cada abans de les vacances de Nadal i va pagar $135\,€$. A les rebaixes de gener, la botiga va rebaixar l'article A un $4\,\%$, l'article B un $6\,\%$ i l'article C un $5\,\%$ respecte al preu inicial. En veure-ho, l'Ares va decidir comprar un producte de tipus A, dos de tipus B i tres de tipus C, i va calcular que s'havia estalviat $16\,€$ respecte del cost total de la mateixa compra sense oferta. Dues setmanes després, van començar les segones rebaixes i la botiga va rebaixar l'article A un $8\,\%$, l'article B un $10\,\%$ i l'article C un $6\,\%$ respecte al preu inicial d'abans de Nadal. En veure-ho, l'Ares no se'n va poder estar i va fer una tercera compra. Aquest cop va adquirir tres productes de tipus A, un de tipus B i cinc de tipus C, i va calcular que s'havia estalviat $29\,€$ respecte al preu total de la mateixa compra si l'hagués feta abans de les vacances de Nadal.

- **a)** Plantegeu un sistema d'equacions lineals que reculli la informació del problema. *[0,75 punts]*
- **b)** Calculeu el preu de cada article abans de les vacances de Nadal. *[1,75 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.6"
    Anomenem $x$, $y$ i $z$ el preu inicial, en euros, dels productes A, B i C, respectivament.

    **Apartat a)**

    L'estalvi de cada producte és el percentatge de descompte aplicat al seu preu inicial, multiplicat pel nombre d'unitats:

    - primera compra: $x+y+z=135$;
    - segona compra: $0{,}04x+2\cdot0{,}06y+3\cdot0{,}05z=16$, és a dir, $4x+12y+15z=1600$;
    - tercera compra: $3\cdot0{,}08x+0{,}10y+5\cdot0{,}06z=29$, és a dir, $24x+10y+30z=2900$, que simplificada és $12x+5y+15z=1450$.

    $$
    \begin{cases}
    x+y+z=135\\
    4x+12y+15z=1600\\
    12x+5y+15z=1450
    \end{cases}
    $$

    **Apartat b)**

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&135\\
    4&12&15&1600\\
    12&5&15&1450
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-4F_1\\F_3=F_3-12F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&135\\
    0&8&11&1060\\
    0&-7&3&-170
    \end{array}
    \right)
    $$

    Per eliminar el $-7$ sense fraccions, combinem les dues últimes files amb els dos coeficients:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&135\\
    0&8&11&1060\\
    0&-7&3&-170
    \end{array}
    \right)
    \xrightarrow{F_3=8F_3+7F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&135\\
    0&8&11&1060\\
    0&0&101&6060
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=60$, $8y+660=1060\Rightarrow y=50$ i $x=135-50-60=25$.

    El sistema és compatible determinat. Abans de Nadal, el producte A costava $25\,€$, el B $50\,€$ i el C $60\,€$.

    **Comprovació:** a les primeres rebaixes, l'estalvi és $1+6+9=16\,€$, i a les segones, $6+5+18=29\,€$.

---

**PAU.AL.7.**
**Liquidació d'un model de sabates**

*(exercici 2 de la convocatòria extraordinària de 2025, sèrie 3; 2,5 punts)*. Una marca de sabates coneguda va posar a la venda un dels seus models més populars i en va vendre tota la producció a la temporada d'estiu. El preu de cada parell de sabates era de $90\,€$, però algunes es van vendre al preu original, d'altres amb un $20\,\%$ de descompte i la resta amb un $50\,\%$ a la liquidació de final de temporada. En total es van produir $820\,000$ parells de sabates d'aquest model, que van proporcionar uns ingressos de $63\,837\,000\,€$. Sabem també que es van vendre el doble de sabates rebaixades al $20\,\%$ que al $50\,\%$.

Trobeu quants parells de sabates es van vendre al preu original, quants amb un $20\,\%$ de descompte i quants al $50\,\%$. *[2,5 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.7"
    Anomenem $x$ el nombre de parells venuts a preu original, $y$ els venuts amb un $20\,\%$ de descompte i $z$ els venuts amb un $50\,\%$ de descompte.

    Amb un descompte del $20\,\%$, el preu és el $80\,\%$ de $90\,€$, és a dir, $72\,€$. Amb un descompte del $50\,\%$, és de $45\,€$. El sistema és

    $$
    \begin{cases}
    x+y+z=820\,000\\
    90x+72y+45z=63\,837\,000\\
    y-2z=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    90&72&45&63\,837\,000\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-90F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    0&-18&-45&-9\,963\,000\\
    0&1&-2&0
    \end{array}
    \right)
    $$

    Simplifiquem la segona fila dividint-la entre $-9$ i intercanviem les dues últimes files per tenir un pivot igual a $1$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    0&-18&-45&-9\,963\,000\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2/(-9)\\F_2\leftrightarrow F_3}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    0&1&-2&0\\
    0&2&5&1\,107\,000
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    0&1&-2&0\\
    0&2&5&1\,107\,000
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-2F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&820\,000\\
    0&1&-2&0\\
    0&0&9&1\,107\,000
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=123\,000$, $y=2\cdot123\,000=246\,000$ i $x=820\,000-246\,000-123\,000=451\,000$.

    El sistema és compatible determinat. Es van vendre $451\,000$ parells a preu original, $246\,000$ amb un $20\,\%$ de descompte i $123\,000$ amb un $50\,\%$ de descompte.

    **Comprovació:** $90\cdot451\,000+72\cdot246\,000+45\cdot123\,000=40\,590\,000+17\,712\,000+5\,535\,000=63\,837\,000\,€$.

---

**PAU.AL.8.**
**Producció de sofàs**

*(qüestió 2 de la convocatòria ordinària de 2024, sèrie 1, i exercici 2 de la prova model de 2025, sèrie 0; 2,5 punts)*. Una empresa de mobles disposa de tres fàbriques que produeixen un model de sofà determinat. El mes passat es van fabricar un total de $1260$ unitats d'aquest model i sabem que la segona fàbrica va produir tants sofàs com les altres dues juntes.

- **a)** Amb aquesta informació, podem determinar quants sofàs va produir cadascuna de les fàbriques? Justifiqueu la resposta. A continuació, calculeu, només amb aquesta informació, quants sofàs va produir la segona fàbrica. *[1,25 punts]*
- **b)** També sabem que un $10\,\%$ dels sofàs produïts per la primera fàbrica, un $30\,\%$ dels produïts per la segona i un $20\,\%$ dels produïts per la tercera eren de color gris, i que en total es van fabricar $284$ sofàs d'aquest color. Trobeu quants sofàs va produir cada fàbrica el mes passat. *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.8"
    Anomenem $x$, $y$ i $z$ el nombre de sofàs produïts per la primera, la segona i la tercera fàbrica, respectivament.

    **Apartat a)**

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    1&-1&1&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    0&-2&0&-1260
    \end{array}
    \right)
    $$

    Queden dues equacions per a tres incògnites i cap contradicció: el sistema és **compatible indeterminat** i no podem determinar la producció de cada fàbrica. En canvi, la segona fila dona $-2y=-1260$, és a dir, $y=630$: la segona fàbrica va produir $630$ sofàs.

    Si prenem $z=\lambda$, la solució és $(x,y,z)=(630-\lambda,\,630,\,\lambda)$.

    **Apartat b)**

    Els sofàs grisos donen $0{,}1x+0{,}3y+0{,}2z=284$, és a dir, $x+3y+2z=2840$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    1&-1&1&0\\
    1&3&2&2840
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    0&-2&0&-1260\\
    0&2&1&1580
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    0&-2&0&-1260\\
    0&2&1&1580
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&1260\\
    0&-2&0&-1260\\
    0&0&1&320
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=320$, $y=630$ i $x=1260-630-320=310$.

    El sistema és compatible determinat. La primera fàbrica va produir $310$ sofàs, la segona $630$ i la tercera $320$.

    **Comprovació:** $0{,}1\cdot310+0{,}3\cdot630+0{,}2\cdot320=31+189+64=284$ sofàs grisos.

---

**PAU.AL.9.**
**Lot de maletes**

*(qüestió 2 de la convocatòria ordinària de 2024, sèrie 5; 2,5 punts)*. El nou model de maletes Rodamons disposa de tres mides diferents: petita, mitjana i gran. El preu de la maleta gran és el mateix que el de la maleta petita i la mitjana juntes. El lot d'una maleta de cada mida costa $240\,€$, però si es compra el lot de dues maletes petites, una de mitjana i una de gran, s'obté un $10\,\%$ de descompte del total i el preu final és de $256{,}5\,€$. Quin és el preu de cada tipus de maleta sense descompte? *[2,5 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.9"
    Anomenem $x$, $y$ i $z$ el preu, en euros, de la maleta petita, de la mitjana i de la gran, respectivament.

    Amb un descompte del $10\,\%$ es paga el $90\,\%$ del total:

    $$
    0{,}9(2x+y+z)=256{,}5\Rightarrow 2x+y+z=285.
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    1&1&-1&0\\
    2&1&1&285
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&0&-2&-240\\
    0&-1&-1&-195
    \end{array}
    \right)
    $$

    El pivot de la segona fila és zero, de manera que intercanviem les dues últimes files:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&0&-2&-240\\
    0&-1&-1&-195
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&240\\
    0&-1&-1&-195\\
    0&0&-2&-240
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=120$, $-y-120=-195\Rightarrow y=75$ i $x=240-75-120=45$.

    El sistema és compatible determinat. La maleta petita costa $45\,€$, la mitjana $75\,€$ i la gran $120\,€$.

    **Comprovació:** $45+75=120$ i $0{,}9(2\cdot45+75+120)=0{,}9\cdot285=256{,}5\,€$.

---

**PAU.AL.10.**
**Inversió en criptomonedes**

*(qüestió 2 de la convocatòria extraordinària de 2024, sèrie 3; 2,5 punts)*. Una inversora vol invertir el seu capital en un banc especialitzat en criptomonedes que ofereix diferents dipòsits amb els interessos següents:

- BTC (bitcoin): $15\,\%$ anual.
- ETH (ether): $10\,\%$ anual.
- LNK (link): $13\,\%$ anual.

La inversora vol invertir la mateixa quantitat en bitcoins que entre les altres dues criptomonedes juntes i vol obtenir un rendiment anual global d'un $13\,\%$.

- **a)** Quina ha de ser la relació entre la inversió en ethers i en links? *[1,25 punts]*
- **b)** Si sabem que la inversió total serà de $150\,000\,€$, quina quantitat invertirà en cada criptomoneda? *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.10"
    Anomenem $x$, $y$ i $z$ els euros invertits en BTC, ETH i LNK, respectivament.

    **Apartat a)**

    La primera condició és $x=y+z$. El rendiment global del $13\,\%$ s'aplica a tot el capital:

    $$
    0{,}15x+0{,}10y+0{,}13z=0{,}13(x+y+z)\Rightarrow 2x-3y=0.
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&-1&-1&0\\
    2&-3&0&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-2F_1}
    \left(
    \begin{array}{ccc|c}
    1&-1&-1&0\\
    0&-1&2&0
    \end{array}
    \right)
    $$

    El sistema és compatible indeterminat. Prenem $z=\lambda$: obtenim $y=2\lambda$ i $x=2\lambda+\lambda=3\lambda$.

    Per tant, $y=2z$: la inversió en ethers ha de ser el doble de la inversió en links.

    **Apartat b)**

    Si el total és de $150\,000\,€$, aleshores

    $$
    3\lambda+2\lambda+\lambda=150\,000\Rightarrow 6\lambda=150\,000\Rightarrow\lambda=25\,000.
    $$

    Invertirà $75\,000\,€$ en BTC, $50\,000\,€$ en ETH i $25\,000\,€$ en LNK.

    **Comprovació:** $0{,}15\cdot75\,000+0{,}10\cdot50\,000+0{,}13\cdot25\,000=11\,250+5000+3250=19\,500\,€$, que és el $13\,\%$ de $150\,000\,€$.

---

**PAU.AL.11.**
**Notes d'en Robert**

*(qüestió 3 de la convocatòria ordinària de 2023, sèrie 1; 2,5 punts)*. En Robert ha fet tres proves d'una assignatura. Fent la mitjana aritmètica de les notes obtingudes en cadascuna de les tres proves li ha quedat una nota global de $6$. En Robert sap que la nota de la tercera prova ha estat igual que la mitjana aritmètica de les notes de les altres dues proves.

- **a)** Amb aquesta informació, pot saber alguna de les tres notes? En cas afirmatiu, de quina prova i quina seria la nota obtinguda? *[1,25 punts]*
- **b)** La professora li diu que ha estat molt irregular i que si només es tinguessin en compte les notes de les dues darreres proves hauria obtingut una mitjana de $7$. Quina nota ha obtingut en cada prova? *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.11"
    Anomenem $x$, $y$ i $z$ les notes de la primera, la segona i la tercera prova, respectivament.

    **Apartat a)**

    Les condicions són $\dfrac{x+y+z}{3}=6$ i $z=\dfrac{x+y}{2}$, és a dir, $x+y+z=18$ i $x+y-2z=0$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&18\\
    1&1&-2&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&18\\
    0&0&-3&-18
    \end{array}
    \right)
    $$

    La segona fila dona $z=6$. Per tant, sí que pot saber una nota: a la tercera prova ha tret un $6$. De les altres dues només sap que $x+y=12$; el sistema és compatible indeterminat.

    **Apartat b)**

    La nova condició és $\dfrac{y+z}{2}=7$, és a dir, $y+z=14$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&18\\
    0&0&-3&-18\\
    0&1&1&14
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&18\\
    0&1&1&14\\
    0&0&-3&-18
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=6$, $y=14-6=8$ i $x=18-8-6=4$.

    El sistema és compatible determinat. Ha tret un $4$ a la primera prova, un $8$ a la segona i un $6$ a la tercera.

    **Comprovació:** $\dfrac{4+8+6}{3}=6$, $\dfrac{4+8}{2}=6$ i $\dfrac{8+6}{2}=7$.

---

**PAU.AL.12.**
**Paquets per a farmàcies**

*(qüestió 3 de la convocatòria ordinària de 2023, sèrie 5; 2,5 punts)*. Una empresa distribueix dos tipus de paquets a les farmàcies (A i B). El paquet de tipus A conté els productes següents: $5$ termòmetres digitals per infrarojos, $30$ mascaretes i $10$ tests ràpids d'antígens. El paquet de tipus B conté $1$ termòmetre digital per infrarojos, $15$ mascaretes i $20$ tests ràpids d'antígens.

El preu del paquet de tipus A és de $550\,€$ i el del paquet de tipus B és de $200\,€$. El preu de cada producte és el mateix en els dos tipus de paquets.

- **a)** Amb les dades de l'enunciat, és possible trobar el preu d'un termòmetre, el d'una mascareta i el d'un test d'antígens? Justifiqueu la resposta plantejant i classificant un sistema d'equacions. Resoleu el sistema deixant la solució en funció del preu del test d'antígens. *[1,75 punts]*
- **b)** Si un test d'antígens costa $4\,€$, quin serà el preu d'una mascareta? I el d'un termòmetre? *[0,75 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.12"
    Anomenem $x$, $y$ i $z$ el preu, en euros, d'un termòmetre, d'una mascareta i d'un test d'antígens, respectivament.

    **Apartat a)**

    $$
    \begin{cases}
    5x+30y+10z=550\\
    x+15y+20z=200
    \end{cases}
    $$

    Intercanviem les files per tenir un pivot igual a $1$. Després fem zero i simplifiquem dividint entre $-45$:

    $$
    \left(
    \begin{array}{ccc|c}
    5&30&10&550\\
    1&15&20&200
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    1&15&20&200\\
    5&30&10&550
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&15&20&200\\
    5&30&10&550
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-5F_1\\F_2=F_2/(-45)}}
    \left(
    \begin{array}{ccc|c}
    1&15&20&200\\
    0&1&2&10
    \end{array}
    \right)
    $$

    Queden dues equacions per a tres incògnites i cap contradicció: el sistema és **compatible indeterminat**, de manera que no és possible trobar els tres preus. Prenem el preu del test com a paràmetre, $z=\lambda$:

    $$
    y=10-2\lambda,
    $$

    $$
    x=200-15(10-2\lambda)-20\lambda=50+10\lambda.
    $$

    $$
    \boxed{(x,y,z)=(50+10\lambda,\,10-2\lambda,\,\lambda)}
    $$

    **Apartat b)**

    Si $\lambda=4$, una mascareta costa $y=10-2\cdot4=2\,€$ i un termòmetre, $x=50+10\cdot4=90\,€$.

    **Comprovació:** $5\cdot90+30\cdot2+10\cdot4=550\,€$ i $90+15\cdot2+20\cdot4=200\,€$.

---

**PAU.AL.13.**
**Activitats d'esports aquàtics**

*(qüestió 1 de la convocatòria extraordinària de 2023, sèrie 2; 2,5 punts)*. L'empresa d'esports aquàtics DiverAqua ofereix tres tipus d'activitats: esquí aquàtic, caiac i moto aquàtica. El preu per sessió i client de cadascuna d'aquestes activitats és de $40\,€$ per l'esquí aquàtic, $20\,€$ pel caiac i $60\,€$ per la moto aquàtica. Sabem que avui DiverAqua ha venut $45$ sessions en total. També sabem que el nombre de clients que han escollit esquí aquàtic és el triple dels que han escollit una sessió de caiac. La recaptació total del dia ha estat de $1700\,€$.

- **a)** Plantegeu un sistema d'equacions lineals que reculli tota aquesta informació. *[1 punt]*
- **b)** Quantes persones han dut a terme cadascuna de les tres activitats? *[1,5 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.13"
    Anomenem $x$, $y$ i $z$ el nombre de persones que han fet esquí aquàtic, caiac i moto aquàtica, respectivament.

    **Apartat a)**

    $$
    \begin{cases}
    x+y+z=45\\
    x-3y=0\\
    40x+20y+60z=1700
    \end{cases}
    $$

    **Apartat b)**

    Dividim la tercera equació entre $20$, de manera que queda $2x+y+3z=85$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&45\\
    1&-3&0&0\\
    2&1&3&85
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&45\\
    0&-4&-1&-45\\
    0&-1&1&-5
    \end{array}
    \right)
    $$

    Intercanviem les dues últimes files per aprofitar el pivot $-1$ i fem zero sense fraccions:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&45\\
    0&-4&-1&-45\\
    0&-1&1&-5
    \end{array}
    \right)
    \xrightarrow{\substack{F_2\leftrightarrow F_3\\F_3=F_3-4F_2}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&45\\
    0&-1&1&-5\\
    0&0&-5&-25
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=5$, $-y+5=-5\Rightarrow y=10$ i $x=45-10-5=30$.

    El sistema és compatible determinat. Han fet esquí aquàtic $30$ persones, caiac $10$ i moto aquàtica $5$.

    **Comprovació:** $40\cdot30+20\cdot10+60\cdot5=1200+200+300=1700\,€$.

---

**PAU.AL.14.**
**Rams de Sant Jordi**

*(qüestió 1 de la convocatòria ordinària de 2022, sèrie 2; 2,5 punts)*. A l'institut d'en Martí han elaborat tres tipus diferents de rams de roses per a vendre el dia de Sant Jordi. L'opció clàssica consisteix en una rosa i una espiga. L'opció de ram petit està formada per tres roses i dues espigues. I, finalment, l'opció de ram gran consisteix en mitja dotzena de roses i tres espigues. Tots els rams (siguin de l'opció que siguin) porten un bonic embolcall. Sabem que s'han utilitzat $200$ roses, $135$ espigues i $85$ embolcalls.

- **a)** Quants rams s'han elaborat de cada tipus? *[1,75 punts]*
- **b)** Si el preu de venda d'un ram de l'opció clàssica és de $3$ euros, el d'un ram petit és de $5$ euros i el d'un ram gran és de $10$ euros, quants diners s'ingressaran si es venen tots? *[0,75 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.14"
    Anomenem $x$, $y$ i $z$ el nombre de rams de l'opció clàssica, petits i grans, respectivament.

    **Apartat a)**

    Comptem les roses, les espigues i els embolcalls. Posem primer l'equació dels embolcalls, que té tots els coeficients iguals a $1$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&3&6&200\\
    1&2&3&135\\
    1&1&1&85
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&85\\
    1&2&3&135\\
    1&3&6&200
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&85\\
    1&2&3&135\\
    1&3&6&200
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&85\\
    0&1&2&50\\
    0&2&5&115
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&85\\
    0&1&2&50\\
    0&2&5&115
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-2F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&85\\
    0&1&2&50\\
    0&0&1&15
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=15$, $y=50-2\cdot15=20$ i $x=85-20-15=50$.

    El sistema és compatible determinat. S'han elaborat $50$ rams de l'opció clàssica, $20$ de petits i $15$ de grans.

    **Comprovació:** $50+3\cdot20+6\cdot15=200$ roses i $50+2\cdot20+3\cdot15=135$ espigues.

    **Apartat b)**

    Els ingressos són $3\cdot50+5\cdot20+10\cdot15=150+100+150=400\,€$.

---

!!! note "Recursos per continuar practicant"

    **PAU de Catalunya**

    - [Examenselectivitat — Matemàtiques CC.SS.](https://examenselectivitat.cat/selectivitat/Matem%C3%A0tiques%20CC.SS./): problemes classificats per temes.
    - [Selecat](https://www.selecat.cat/): exàmens classificats per anys i convocatòries.
    - [Canal Universitats](https://universitats.gencat.cat/ca/pau/models-examen-anys-anteriors/matematiques-aplicades-cc/): models d'examen i criteris de correcció oficials.

    **Proves d'altres comunitats**

    - [Toomates](https://www.toomates.net/): recopilatoris de proves PAU de diferents comunitats.
    - [Exámenes de PAU](https://www.examenesdepau.com/): cercador de proves per comunitat, assignatura, any i convocatòria.

    Les proves d'altres comunitats són útils per practicar, però els continguts, l'estructura i els criteris de correcció poden diferir dels de les PAU de Catalunya.
