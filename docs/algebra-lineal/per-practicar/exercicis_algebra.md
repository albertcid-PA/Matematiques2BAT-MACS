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

## Tema 4. Matrius

!!! tip "Com treballar"
    Abans d'operar, comprova les dimensions de les matrius. En calcular una inversa pel mètode de Gauss-Jordan, anota cada transformació i aplica-la a tota la fila, també a la part dreta de la barra. En una equació matricial, conserva el costat on multiplica cada matriu i comprova el resultat a l'equació inicial.

### Concepte, tipus i operacions

**4.1.**
Considera les matrius

$$
A=\begin{pmatrix}3&-1&0\end{pmatrix}
\qquad
B=\begin{pmatrix}-4&0\\0&-4\end{pmatrix}
\qquad
C=\begin{pmatrix}1&4&-2\\4&0&5\\-2&5&3\end{pmatrix}
\qquad
D=\begin{pmatrix}1&0&0\\7&-2&0\\3&1&4\end{pmatrix}
$$

**a)** Indica l'ordre de cada matriu i de quin tipus és.

**b)** Escriu els elements $c_{23}$, $c_{32}$ i $d_{31}$.

**c)** Calcula $C^t$ i $D^t$. Quina de les dues matrius és simètrica?

**d)** Escriu la matriu $E=(e_{ij})_{2\times3}$ que compleix $e_{ij}=2i-j$ i la seva transposada.

??? example "Mostra la solució pas a pas de l'exercici 4.1"
    **Apartat a)**

    | Matriu | Ordre | Tipus |
    |:--|:--|:--|
    | $A$ | $1\times3$ | Matriu fila. |
    | $B$ | $2\times2$ | Quadrada, diagonal i escalar: els dos elements de la diagonal són iguals. No és la identitat, perquè valen $-4$. |
    | $C$ | $3\times3$ | Quadrada. |
    | $D$ | $3\times3$ | Quadrada i triangular inferior: els elements per sobre de la diagonal principal són zero. |

    **Apartat b)**

    El primer subíndex indica la fila i el segon, la columna:

    $$
    c_{23}=5,
    \qquad
    c_{32}=5,
    \qquad
    d_{31}=3.
    $$

    **Apartat c)**

    Les files de cada matriu passen a ser columnes:

    $$
    C^t=\begin{pmatrix}1&4&-2\\4&0&5\\-2&5&3\end{pmatrix}
    \qquad
    D^t=\begin{pmatrix}1&7&3\\0&-2&1\\0&0&4\end{pmatrix}
    $$

    Com que $C^t=C$, la matriu $C$ és **simètrica**: els elements situats simètricament respecte de la diagonal principal coincideixen, com $c_{23}=c_{32}=5$. En canvi, $D^t\neq D$; de fet, la transposada d'una matriu triangular inferior és triangular superior.

    **Apartat d)**

    A cada posició substituïm $i$ pel número de la fila i $j$ pel de la columna a la fórmula $e_{ij}=2i-j$:

    $$
    E=
    \begin{pmatrix}
    2\cdot1-1&2\cdot1-2&2\cdot1-3\\
    2\cdot2-1&2\cdot2-2&2\cdot2-3
    \end{pmatrix}
    =
    \begin{pmatrix}1&0&-1\\3&2&1\end{pmatrix}
    $$

    $$
    E^t=\begin{pmatrix}1&3\\0&2\\-1&1\end{pmatrix}
    $$

    $E$ és d'ordre $2\times3$ i $E^t$, d'ordre $3\times2$.

---

**4.2.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.2"
    **Apartat a)**

    Les dues matrius són d'ordre $2\times2$, de manera que la igualtat té sentit. Cada expressió de la primera matriu ha de coincidir amb l'element que ocupa la mateixa posició a la segona:

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

    Igualant posició a posició, obtenim el sistema

    $$
    \begin{cases}
    x+y=7\\
    2z=z+3\\
    x-y=1\\
    t=2x
    \end{cases}
    $$

    Sumant la primera i la tercera equació, $2x=8$, és a dir, $x=4$. Aleshores $y=7-4=3$. De la segona equació obtenim $z=3$ i, de l'última, $t=2\cdot4=8$.

    $$
    \boxed{x=4,\qquad y=3,\qquad z=3,\qquad t=8}
    $$

    **Comprovació:** les dues matrius valen $\begin{pmatrix}7&6\\1&8\end{pmatrix}$.

    **Apartat b)**

    No. Tenen els mateixos nombres en el mateix ordre, però la primera és d'ordre $1\times3$ i la segona, d'ordre $3\times1$. Dues matrius només poden ser iguals si tenen el mateix ordre.

---

**4.3.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.3"
    **Apartat a)**

    $A$ és d'ordre $2\times3$, $B$ d'ordre $3\times2$, $B^t$ d'ordre $2\times3$ i $C$ d'ordre $2\times2$. Per sumar cal el mateix ordre; per multiplicar, el nombre de columnes del primer factor ha de coincidir amb el nombre de files del segon.

    | Operació | Dimensions | Es pot fer? | Ordre del resultat |
    |:--|:--|:--|:--|
    | $A+B$ | $2\times3$ i $3\times2$ | No | — |
    | $A+B^t$ | $2\times3$ i $2\times3$ | Sí | $2\times3$ |
    | $AB$ | $(2\times\mathbf{3})\cdot(\mathbf{3}\times2)$ | Sí | $2\times2$ |
    | $BA$ | $(3\times\mathbf{2})\cdot(\mathbf{2}\times3)$ | Sí | $3\times3$ |
    | $AC$ | $(2\times\mathbf{3})\cdot(\mathbf{2}\times2)$ | No | — |
    | $CA$ | $(2\times\mathbf{2})\cdot(\mathbf{2}\times3)$ | Sí | $2\times3$ |
    | $C^2$ | $(2\times\mathbf{2})\cdot(\mathbf{2}\times2)$ | Sí | $2\times2$ |

    Observa que $AB$ i $BA$ existeixen tots dos, però ni tan sols tenen el mateix ordre.

    **Apartat b)**

    Per sumar $A+B^t$, primer transposem $B$:

    $$
    A+B^t=
    \begin{pmatrix}2&-1&3\\0&4&-2\end{pmatrix}
    +
    \begin{pmatrix}1&3&-2\\-5&0&4\end{pmatrix}
    =
    \begin{pmatrix}3&2&1\\-5&4&2\end{pmatrix}
    \qquad(2\times3)
    $$

    En els productes, cada element s'obté multiplicant una fila del primer factor per una columna del segon:

    $$
    AB=
    \begin{pmatrix}
    2\cdot1+(-1)\cdot3+3\cdot(-2)&2\cdot(-5)+(-1)\cdot0+3\cdot4\\
    0\cdot1+4\cdot3+(-2)\cdot(-2)&0\cdot(-5)+4\cdot0+(-2)\cdot4
    \end{pmatrix}
    $$

    $$
    AB=
    \begin{pmatrix}-7&2\\16&-8\end{pmatrix}
    \qquad(2\times2)
    $$

    $$
    BA=
    \begin{pmatrix}1&-5\\3&0\\-2&4\end{pmatrix}
    \begin{pmatrix}2&-1&3\\0&4&-2\end{pmatrix}
    $$

    $$
    BA=
    \begin{pmatrix}
    2+0&-1-20&3+10\\
    6+0&-3+0&9+0\\
    -4+0&2+16&-6-8
    \end{pmatrix}
    =
    \begin{pmatrix}2&-21&13\\6&-3&9\\-4&18&-14\end{pmatrix}
    \qquad(3\times3)
    $$

    $$
    CA=
    \begin{pmatrix}3&-2\\-5&1\end{pmatrix}
    \begin{pmatrix}2&-1&3\\0&4&-2\end{pmatrix}
    $$

    $$
    CA=
    \begin{pmatrix}
    6+0&-3-8&9+4\\
    -10+0&5+4&-15-2
    \end{pmatrix}
    =
    \begin{pmatrix}6&-11&13\\-10&9&-17\end{pmatrix}
    \qquad(2\times3)
    $$

    $$
    C^2=
    \begin{pmatrix}3&-2\\-5&1\end{pmatrix}
    \begin{pmatrix}3&-2\\-5&1\end{pmatrix}
    =
    \begin{pmatrix}
    9+10&-6-2\\
    -15-5&10+1
    \end{pmatrix}
    =
    \begin{pmatrix}19&-8\\-20&11\end{pmatrix}
    \qquad(2\times2)
    $$

    Tots els resultats tenen l'ordre previst a l'apartat a).

    **Apartat c)**

    Multipliquem $A$ per $2$ i hi restem la transposada de $B$:

    $$
    2A-B^t=
    \begin{pmatrix}4&-2&6\\0&8&-4\end{pmatrix}
    -
    \begin{pmatrix}1&3&-2\\-5&0&4\end{pmatrix}
    =
    \begin{pmatrix}3&-5&8\\5&8&-8\end{pmatrix}
    $$

    Aprofitem el producte $AB$ de l'apartat b):

    $$
    AB-3C=
    \begin{pmatrix}-7&2\\16&-8\end{pmatrix}
    -
    \begin{pmatrix}9&-6\\-15&3\end{pmatrix}
    =
    \begin{pmatrix}-16&8\\31&-11\end{pmatrix}
    $$

---

**4.4.**
Considera les matrius

$$
A=\begin{pmatrix}4&1\\0&-3\end{pmatrix}
\qquad
B=\begin{pmatrix}1&0\\4&2\end{pmatrix}
$$

**a)** Calcula $(A+B)^2$ i $A^2+2AB+B^2$. Obtens el mateix resultat?

**b)** Desenvolupa $(A+B)^2=(A+B)(A+B)$ amb la propietat distributiva i explica la diferència.

**c)** Quina condició han de complir dues matrius quadrades perquè $(A+B)^2=A^2+2AB+B^2$?

??? example "Mostra la solució pas a pas de l'exercici 4.4"
    **Apartat a)**

    $$
    A+B=\begin{pmatrix}5&1\\4&-1\end{pmatrix}
    \qquad
    (A+B)^2=
    \begin{pmatrix}5&1\\4&-1\end{pmatrix}
    \begin{pmatrix}5&1\\4&-1\end{pmatrix}
    =
    \begin{pmatrix}29&4\\16&5\end{pmatrix}
    $$

    D'altra banda,

    $$
    A^2=\begin{pmatrix}16&1\\0&9\end{pmatrix}
    \qquad
    AB=\begin{pmatrix}8&2\\-12&-6\end{pmatrix}
    \qquad
    B^2=\begin{pmatrix}1&0\\12&4\end{pmatrix}
    $$

    $$
    A^2+2AB+B^2=
    \begin{pmatrix}16&1\\0&9\end{pmatrix}
    +
    \begin{pmatrix}16&4\\-24&-12\end{pmatrix}
    +
    \begin{pmatrix}1&0\\12&4\end{pmatrix}
    =
    \begin{pmatrix}33&5\\-12&1\end{pmatrix}
    $$

    Els resultats **no** coincideixen.

    **Apartat b)**

    Aplicant la propietat distributiva i conservant l'ordre dels factors,

    $$
    (A+B)^2=(A+B)(A+B)=A^2+AB+BA+B^2.
    $$

    Per obtenir $2AB$ caldria que $BA=AB$, però

    $$
    BA=
    \begin{pmatrix}1&0\\4&2\end{pmatrix}
    \begin{pmatrix}4&1\\0&-3\end{pmatrix}
    =
    \begin{pmatrix}4&1\\16&-2\end{pmatrix}
    \neq
    \begin{pmatrix}8&2\\-12&-6\end{pmatrix}
    =AB.
    $$

    **Comprovació:** $A^2+AB+BA+B^2=\begin{pmatrix}16+8+4+1&1+2+1+0\\0-12+16+12&9-6-2+4\end{pmatrix}=\begin{pmatrix}29&4\\16&5\end{pmatrix}$, que és $(A+B)^2$.

    **Apartat c)**

    La igualtat es compleix quan $AB=BA$, és a dir, quan les matrius **commuten**. Les identitats notables dels nombres no es poden aplicar directament a les matrius.

---

**4.5.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.5"
    **Apartat a)**

    $A$ és d'ordre $2\times3$ i $X$, d'ordre $3\times2$, de manera que $AX$ és d'ordre $2\times2$. Efectuem el producte multiplicant cada fila d'$A$ per cada columna de $X$:

    $$
    AX=
    \begin{pmatrix}
    2x+(-3)y+1\cdot3&2\cdot2+(-3)\cdot(-1)+1\cdot1\\
    1\cdot x+4y+0\cdot3&1\cdot2+4\cdot(-1)+0\cdot1
    \end{pmatrix}
    $$

    $$
    AX=
    \begin{pmatrix}
    2x-3y+3&8\\
    x+4y&-2
    \end{pmatrix}
    =
    \begin{pmatrix}
    -1&8\\
    9&-2
    \end{pmatrix}
    $$

    !!! note "Les posicions sense incògnites"
        La segona columna de $X$ no té incògnites, de manera que la segona columna d'$AX$ dona nombres. Aquests nombres han de coincidir amb els de la matriu donada: aquí hi coincideixen, $8$ i $-2$. Si no hi coincidissin, hi hauria un error de càlcul o la igualtat no es podria complir per a cap valor de $x$ i $y$.

    Igualant els elements de la primera columna, obtenim el sistema

    $$
    \begin{cases}
    2x-3y+3=-1\\
    x+4y=9
    \end{cases}
    \quad\Longleftrightarrow\quad
    \begin{cases}
    2x-3y=-4\\
    x+4y=9
    \end{cases}
    $$

    De la segona equació, $x=9-4y$. Substituint a la primera, $18-8y-3y=-4$, és a dir, $11y=22$. Per tant, $y=2$ i $x=9-8=1$.

    $$
    \boxed{x=1,\qquad y=2}
    $$

    **Apartat b)**

    Amb $x=1$ i $y=2$,

    $$
    X=\begin{pmatrix}1&2\\2&-1\\3&1\end{pmatrix}
    $$

    $$
    AX=
    \begin{pmatrix}
    2\cdot1+(-3)\cdot2+1\cdot3&2\cdot2+(-3)\cdot(-1)+1\cdot1\\
    1\cdot1+4\cdot2+0\cdot3&1\cdot2+4\cdot(-1)+0\cdot1
    \end{pmatrix}
    =
    \begin{pmatrix}
    -1&8\\
    9&-2
    \end{pmatrix}
    $$

    El producte coincideix amb la matriu donada.

---

**4.6.**
Considera la matriu

$$
A=\begin{pmatrix}4&0\\5&4\end{pmatrix}
$$

**a)** Troba totes les matrius $X$ d'ordre $2\times2$ que commuten amb $A$, és a dir, que compleixen $AX=XA$.

**b)** D'entre aquestes matrius, troba la que compleix

$$
X\begin{pmatrix}1\\-1\end{pmatrix}=\begin{pmatrix}-2\\3\end{pmatrix}
$$

??? example "Mostra la solució pas a pas de l'exercici 4.6"
    **Apartat a)**

    Escrivim $X=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ i calculem els dos productes:

    $$
    AX=
    \begin{pmatrix}4&0\\5&4\end{pmatrix}
    \begin{pmatrix}a&b\\c&d\end{pmatrix}
    =
    \begin{pmatrix}4a&4b\\5a+4c&5b+4d\end{pmatrix}
    $$

    $$
    XA=
    \begin{pmatrix}a&b\\c&d\end{pmatrix}
    \begin{pmatrix}4&0\\5&4\end{pmatrix}
    =
    \begin{pmatrix}4a+5b&4b\\4c+5d&4d\end{pmatrix}
    $$

    La condició $AX=XA$ és, doncs, la igualtat de matrius

    $$
    \begin{pmatrix}4a&4b\\5a+4c&5b+4d\end{pmatrix}
    =
    \begin{pmatrix}4a+5b&4b\\4c+5d&4d\end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició, obtenim el sistema

    $$
    \begin{cases}
    4a=4a+5b\\
    4b=4b\\
    5a+4c=4c+5d\\
    5b+4d=4d
    \end{cases}
    \quad\Longrightarrow\quad
    \begin{cases}
    b=0\\
    a=d
    \end{cases}
    $$

    Els elements $a$ i $c$ poden prendre qualsevol valor. Les matrius que commuten amb $A$ són

    $$
    \boxed{X=\begin{pmatrix}a&0\\c&a\end{pmatrix},\qquad a,c\in\mathbb{R}}
    $$

    **Apartat b)**

    $$
    \begin{pmatrix}a&0\\c&a\end{pmatrix}
    \begin{pmatrix}1\\-1\end{pmatrix}
    =
    \begin{pmatrix}a\\c-a\end{pmatrix}
    =
    \begin{pmatrix}-2\\3\end{pmatrix}
    $$

    Per tant, $a=-2$ i $c=3+a=1$:

    $$
    \boxed{X=\begin{pmatrix}-2&0\\1&-2\end{pmatrix}}
    $$

    **Comprovació:** $AX=XA=\begin{pmatrix}-8&0\\-6&-8\end{pmatrix}$.

---

**4.7.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.7"
    **Apartat a)**

    Efectuem els dos productes dins la matriu:

    $$
    AB=
    \begin{pmatrix}
    a\cdot7+3\cdot(-4)&a\cdot b+3\cdot1\\
    -2\cdot7+1\cdot(-4)&-2\cdot b+1\cdot1
    \end{pmatrix}
    =
    \begin{pmatrix}
    7a-12&ab+3\\
    -18&1-2b
    \end{pmatrix}
    $$

    $$
    BA=
    \begin{pmatrix}
    7\cdot a+b\cdot(-2)&7\cdot3+b\cdot1\\
    -4\cdot a+1\cdot(-2)&-4\cdot3+1\cdot1
    \end{pmatrix}
    =
    \begin{pmatrix}
    7a-2b&21+b\\
    -4a-2&-11
    \end{pmatrix}
    $$

    La condició $AB=BA$ és la igualtat de matrius

    $$
    \begin{pmatrix}
    7a-12&ab+3\\
    -18&1-2b
    \end{pmatrix}
    =
    \begin{pmatrix}
    7a-2b&21+b\\
    -4a-2&-11
    \end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició, obtenim

    $$
    \begin{cases}
    7a-12=7a-2b\\
    ab+3=21+b\\
    -18=-4a-2\\
    1-2b=-11
    \end{cases}
    $$

    De la primera equació, $-12=-2b$, és a dir, $b=6$. De la tercera, $4a=16$, és a dir, $a=4$.

    !!! note "Cal comprovar totes les equacions"
        Hi ha quatre equacions i només dues incògnites. Els valors trobats han de complir també les altres dues: $4\cdot6+3=27=21+6$ i $1-2\cdot6=-11$. Si alguna no es complís, no hi hauria cap valor de $a$ i $b$ que fes commutar les matrius.

    $$
    \boxed{a=4,\qquad b=6}
    $$

    **Comprovació:** amb aquests valors, $AB=BA=\begin{pmatrix}16&27\\-18&-11\end{pmatrix}$.

    **Apartat b)**

    $$
    D^2=
    \begin{pmatrix}x&2\\y&x\end{pmatrix}
    \begin{pmatrix}x&2\\y&x\end{pmatrix}
    =
    \begin{pmatrix}
    x\cdot x+2\cdot y&x\cdot2+2\cdot x\\
    y\cdot x+x\cdot y&y\cdot2+x\cdot x
    \end{pmatrix}
    =
    \begin{pmatrix}
    x^2+2y&4x\\
    2xy&x^2+2y
    \end{pmatrix}
    $$

    Igualem el resultat amb la matriu donada:

    $$
    \begin{pmatrix}
    x^2+2y&4x\\
    2xy&x^2+2y
    \end{pmatrix}
    =
    \begin{pmatrix}
    7&12\\
    -6&7
    \end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició,

    $$
    \begin{cases}
    x^2+2y=7\\
    4x=12\\
    2xy=-6
    \end{cases}
    $$

    La diagonal dona dues vegades la mateixa equació. De $4x=12$ obtenim $x=3$ i, substituint a la primera, $9+2y=7$, és a dir, $y=-1$. La tercera equació també es compleix: $2\cdot3\cdot(-1)=-6$.

    $$
    \boxed{x=3,\qquad y=-1}
    $$

    **Comprovació:**

    $$
    \begin{pmatrix}3&2\\-1&3\end{pmatrix}
    \begin{pmatrix}3&2\\-1&3\end{pmatrix}
    =
    \begin{pmatrix}9-2&6+6\\-3-3&-2+9\end{pmatrix}
    =
    \begin{pmatrix}7&12\\-6&7\end{pmatrix}
    $$

---

**4.8.**
Considera la matriu

$$
A=\begin{pmatrix}3&-7\\1&-2\end{pmatrix}
$$

**a)** Calcula $A^2$ i $A^3$.

**b)** Utilitza el resultat anterior per calcular $A^6$ i $A^{12}$.

**c)** Dedueix $A^{-1}$ a partir d'$A^3$ i comprova el resultat.

??? example "Mostra la solució pas a pas de l'exercici 4.8"
    **Apartat a)**

    $$
    A^2=
    \begin{pmatrix}3&-7\\1&-2\end{pmatrix}
    \begin{pmatrix}3&-7\\1&-2\end{pmatrix}
    =
    \begin{pmatrix}9-7&-21+14\\3-2&-7+4\end{pmatrix}
    =
    \begin{pmatrix}2&-7\\1&-3\end{pmatrix}
    $$

    $$
    A^3=A^2\cdot A=
    \begin{pmatrix}2&-7\\1&-3\end{pmatrix}
    \begin{pmatrix}3&-7\\1&-2\end{pmatrix}
    =
    \begin{pmatrix}6-7&-14+14\\3-3&-7+6\end{pmatrix}
    =
    \begin{pmatrix}-1&0\\0&-1\end{pmatrix}
    =-I
    $$

    **Apartat b)**

    Com que $A^3=-I$,

    $$
    A^6=A^3\cdot A^3=(-I)(-I)=I
    $$

    $$
    A^{12}=A^6\cdot A^6=I\cdot I=I
    $$

    No cal fer cap producte de matrius més: n'hi ha prou amb el resultat $A^3=-I$.

    **Apartat c)**

    De $A^3=-I$ obtenim $A\cdot\left(-A^2\right)=I$ i també $\left(-A^2\right)\cdot A=I$. Per tant,

    $$
    A^{-1}=-A^2=\begin{pmatrix}-2&7\\-1&3\end{pmatrix}
    $$

    **Comprovació:**

    $$
    AA^{-1}=
    \begin{pmatrix}3&-7\\1&-2\end{pmatrix}
    \begin{pmatrix}-2&7\\-1&3\end{pmatrix}
    =
    \begin{pmatrix}-6+7&21-21\\-2+2&7-6\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

### Matriu inversa

**4.9.**
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

**b)** Un company diu que la inversa d'$A$ s'obté invertint cada element:

$$
P=\begin{pmatrix}\frac15&-\frac12\\[2pt]-\frac17&\frac13\end{pmatrix}
$$

Comprova que no té raó.

??? example "Mostra la solució pas a pas de l'exercici 4.9"
    **Apartat a)**

    Una matriu és la inversa d'$A$ si el producte per $A$ dona la identitat. Calculem $AM$:

    $$
    AM=
    \begin{pmatrix}5&-2\\-7&3\end{pmatrix}
    \begin{pmatrix}3&2\\7&5\end{pmatrix}
    =
    \begin{pmatrix}15-14&10-10\\-21+21&-14+15\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    També es compleix en l'altre ordre:

    $$
    MA=
    \begin{pmatrix}3&2\\7&5\end{pmatrix}
    \begin{pmatrix}5&-2\\-7&3\end{pmatrix}
    =
    \begin{pmatrix}15-14&-6+6\\35-35&-14+15\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    Per tant, **$M$ és la inversa d'$A$**. En canvi,

    $$
    AN=
    \begin{pmatrix}5&-2\\-7&3\end{pmatrix}
    \begin{pmatrix}3&-2\\-7&5\end{pmatrix}
    =
    \begin{pmatrix}15+14&-10-10\\-21-21&14+15\end{pmatrix}
    =
    \begin{pmatrix}29&-20\\-42&29\end{pmatrix}
    $$

    no és la identitat: **$N$ no és la inversa d'$A$**.

    **Apartat b)**

    $$
    AP=
    \begin{pmatrix}5&-2\\-7&3\end{pmatrix}
    \begin{pmatrix}\frac15&-\frac12\\[2pt]-\frac17&\frac13\end{pmatrix}
    =
    \begin{pmatrix}
    1+\frac27&-\frac52-\frac23\\[2pt]
    -\frac75-\frac37&\frac72+1
    \end{pmatrix}
    $$

    Ja el primer element, $1+\frac27$, és diferent d'$1$, i el de la segona fila i la primera columna és diferent de $0$. El producte no és la identitat i, per tant, $P$ no és la inversa d'$A$.

    !!! warning "Error habitual"
        La inversa d'una matriu no s'obté invertint cada element. Es defineix mitjançant el producte: $AA^{-1}=A^{-1}A=I$.

---

**4.10.**
Calcula la inversa de la matriu

$$
B=\begin{pmatrix}3&1\\5&2\end{pmatrix}
$$

a partir de la definició, és a dir, per coeficients. Comprova el resultat.

??? example "Mostra la solució pas a pas de l'exercici 4.10"
    Escrivim la inversa amb quatre coeficients desconeguts i imposem $BB^{-1}=I_2$:

    $$
    \begin{pmatrix}3&1\\5&2\end{pmatrix}
    \begin{pmatrix}x&y\\z&t\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    Efectuem el producte dins la matriu:

    $$
    \begin{pmatrix}
    3x+z&3y+t\\
    5x+2z&5y+2t
    \end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició, obtenim quatre equacions, que se separen en dos sistemes: un amb $x$ i $z$ (primera columna) i un altre amb $y$ i $t$ (segona columna):

    $$
    \begin{cases}
    3x+z=1\\
    5x+2z=0
    \end{cases}
    \qquad
    \begin{cases}
    3y+t=0\\
    5y+2t=1
    \end{cases}
    $$

    Al primer sistema, multipliquem la primera equació per $2$ i hi restem la segona: $6x-5x=2-0$, és a dir, $x=2$. Aleshores $z=1-3\cdot2=-5$.

    Al segon, fem el mateix: $6y-5y=0-1$, és a dir, $y=-1$. Aleshores $t=0-3\cdot(-1)=3$.

    $$
    \boxed{B^{-1}=\begin{pmatrix}2&-1\\-5&3\end{pmatrix}}
    $$

    **Comprovació:**

    $$
    BB^{-1}=
    \begin{pmatrix}3&1\\5&2\end{pmatrix}
    \begin{pmatrix}2&-1\\-5&3\end{pmatrix}
    =
    \begin{pmatrix}6-5&-3+3\\10-10&-5+6\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

---

**4.11.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.11"
    **Matriu $A$**

    Fem zero sota el primer pivot combinant les dues files:

    $$
    \left(
    \begin{array}{cc|cc}
    7&4&1&0\\
    5&3&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=7F_2-5F_1}
    \left(
    \begin{array}{cc|cc}
    7&4&1&0\\
    0&1&-5&7
    \end{array}
    \right)
    $$

    Fem zero damunt del segon pivot i convertim el primer pivot en $1$:

    $$
    \xrightarrow{F_1=F_1-4F_2}
    \left(
    \begin{array}{cc|cc}
    7&0&21&-28\\
    0&1&-5&7
    \end{array}
    \right)
    \xrightarrow{F_1=\frac17F_1}
    \left(
    \begin{array}{cc|cc}
    1&0&3&-4\\
    0&1&-5&7
    \end{array}
    \right)
    $$

    $$
    \boxed{A^{-1}=\begin{pmatrix}3&-4\\-5&7\end{pmatrix}}
    $$

    **Comprovació:** $AA^{-1}=\begin{pmatrix}21-20&-28+28\\15-15&-20+21\end{pmatrix}=I_2$.

    **Matriu $B$**

    El primer pivot és zero: intercanviem les files.

    $$
    \left(
    \begin{array}{cc|cc}
    0&2&1&0\\
    3&5&0&1
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{cc|cc}
    3&5&0&1\\
    0&2&1&0
    \end{array}
    \right)
    $$

    Ja hi ha un zero sota el primer pivot. Fem zero damunt del segon combinant les dues files, per no introduir fraccions:

    $$
    \xrightarrow{F_1=2F_1-5F_2}
    \left(
    \begin{array}{cc|cc}
    6&0&-5&2\\
    0&2&1&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_1=\frac16F_1\\F_2=\frac12F_2}}
    \left(
    \begin{array}{cc|cc}
    1&0&-\frac56&\frac13\\[2pt]
    0&1&\frac12&0
    \end{array}
    \right)
    $$

    A la part dreta extraiem el factor comú $\frac16$:

    $$
    \boxed{B^{-1}=\begin{pmatrix}-\frac56&\frac13\\[2pt]\frac12&0\end{pmatrix}=\frac16\begin{pmatrix}-5&2\\3&0\end{pmatrix}}
    $$

    **Comprovació:**

    $$
    BB^{-1}=
    \begin{pmatrix}0&2\\3&5\end{pmatrix}
    \cdot\frac16\begin{pmatrix}-5&2\\3&0\end{pmatrix}
    =
    \frac16
    \begin{pmatrix}0+6&0+0\\-15+15&6+0\end{pmatrix}
    =
    \frac16
    \begin{pmatrix}6&0\\0&6\end{pmatrix}
    =I_2
    $$

    **Matriu $C$**

    $$
    \left(
    \begin{array}{cc|cc}
    6&-4&1&0\\
    -9&6&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=2F_2+3F_1}
    \left(
    \begin{array}{cc|cc}
    6&-4&1&0\\
    0&0&3&2
    \end{array}
    \right)
    $$

    A la part esquerra ha aparegut una fila de zeros. No es pot arribar a la identitat: **$C$ no té inversa**. Les dues files de $C$ són proporcionals: la segona és $-\frac32$ vegades la primera.

    **Matriu $D$**

    El primer pivot és zero: intercanviem les dues primeres files.

    $$
    \left(
    \begin{array}{ccc|ccc}
    0&1&1&1&0&0\\
    1&2&0&0&1&0\\
    1&3&2&0&0&1
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|ccc}
    1&2&0&0&1&0\\
    0&1&1&1&0&0\\
    1&3&2&0&0&1
    \end{array}
    \right)
    $$

    Fem zeros sota la diagonal:

    $$
    \xrightarrow{F_3=F_3-F_1}
    \left(
    \begin{array}{ccc|ccc}
    1&2&0&0&1&0\\
    0&1&1&1&0&0\\
    0&1&2&0&-1&1
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|ccc}
    1&2&0&0&1&0\\
    0&1&1&1&0&0\\
    0&0&1&-1&-1&1
    \end{array}
    \right)
    $$

    Ara fem zeros damunt de la diagonal, començant per la tercera columna:

    $$
    \xrightarrow{F_2=F_2-F_3}
    \left(
    \begin{array}{ccc|ccc}
    1&2&0&0&1&0\\
    0&1&0&2&1&-1\\
    0&0&1&-1&-1&1
    \end{array}
    \right)
    \xrightarrow{F_1=F_1-2F_2}
    \left(
    \begin{array}{ccc|ccc}
    1&0&0&-4&-1&2\\
    0&1&0&2&1&-1\\
    0&0&1&-1&-1&1
    \end{array}
    \right)
    $$

    $$
    \boxed{D^{-1}=\begin{pmatrix}-4&-1&2\\2&1&-1\\-1&-1&1\end{pmatrix}}
    $$

    **Comprovació:**

    $$
    DD^{-1}=
    \begin{pmatrix}0&1&1\\1&2&0\\1&3&2\end{pmatrix}
    \begin{pmatrix}-4&-1&2\\2&1&-1\\-1&-1&1\end{pmatrix}
    $$

    $$
    DD^{-1}=
    \begin{pmatrix}
    0+2-1&0+1-1&0-1+1\\
    -4+4+0&-1+2+0&2-2+0\\
    -4+6-2&-1+3-2&2-3+2
    \end{pmatrix}
    =I_3
    $$

---

**4.12.**
Indica quines de les matrius següents tenen inversa. Justifica-ho esglaonant cada matriu pel mètode de Gauss; no cal calcular-ne la inversa.

$$
A=\begin{pmatrix}-2&6\\1&-3\end{pmatrix}
\qquad
B=\begin{pmatrix}5&3\\7&4\end{pmatrix}
\qquad
C=\begin{pmatrix}0&4\\0&-3\end{pmatrix}
\qquad
D=\begin{pmatrix}0&2\\5&1\end{pmatrix}
$$

??? example "Mostra la solució pas a pas de l'exercici 4.12"
    Si en esglaonar una matriu quadrada apareix una fila de zeros, no es pot arribar a la identitat i la matriu no té inversa. Si no n'apareix cap, sí que en té. Per decidir-ho n'hi ha prou d'esglaonar la matriu: no cal escriure la identitat al costat.

    **Matriu $A$**

    $$
    \begin{pmatrix}-2&6\\1&-3\end{pmatrix}
    \xrightarrow{F_2=2F_2+F_1}
    \begin{pmatrix}-2&6\\0&0\end{pmatrix}
    $$

    Apareix una fila de zeros: **$A$ no té inversa**. La primera fila és $-2$ vegades la segona.

    **Matriu $B$**

    $$
    \begin{pmatrix}5&3\\7&4\end{pmatrix}
    \xrightarrow{F_2=5F_2-7F_1}
    \begin{pmatrix}5&3\\0&-1\end{pmatrix}
    $$

    Els dos pivots són diferents de zero: **$B$ té inversa**.

    **Matriu $C$**

    Tota la primera columna és zero, de manera que no hi ha cap fila que pugui fer de primer pivot, ni tan sols intercanviant-les. Si continuem esglaonant,

    $$
    \begin{pmatrix}0&4\\0&-3\end{pmatrix}
    \xrightarrow{F_2=4F_2+3F_1}
    \begin{pmatrix}0&4\\0&0\end{pmatrix}
    $$

    Apareix una fila de zeros: **$C$ no té inversa**.

    **Matriu $D$**

    El primer pivot és zero, però la segona fila no comença per zero. Intercanviem les files:

    $$
    \begin{pmatrix}0&2\\5&1\end{pmatrix}
    \xrightarrow{F_1\leftrightarrow F_2}
    \begin{pmatrix}5&1\\0&2\end{pmatrix}
    $$

    Ja és esglaonada i els dos pivots són diferents de zero: **$D$ té inversa**.

    | Matriu | Esglaonada | Té inversa? |
    |:--|:--|:--|
    | $A$ | Fila de zeros | No |
    | $B$ | Dos pivots no nuls | Sí |
    | $C$ | Fila de zeros | No |
    | $D$ | Dos pivots no nuls, després d'intercanviar files | Sí |

    !!! warning "Un zero a la diagonal no és suficient"
        Que un element de la diagonal sigui zero, com a $D$, no vol dir que la matriu no tingui inversa. Cal intercanviar files i continuar esglaonant. Només quan apareix una fila de zeros podem afirmar que no en té.

---

**4.13.**
Considera la matriu

$$
A=\begin{pmatrix}4&5\\2&3\end{pmatrix}
$$

**a)** Comprova que $A^2=7A-2I$.

**b)** A partir d'aquesta igualtat, justifica que $A$ té inversa i expressa $A^{-1}$ en funció d'$A$ i d'$I$.

**c)** Calcula $A^{-1}$ i comprova el resultat.

??? example "Mostra la solució pas a pas de l'exercici 4.13"
    **Apartat a)**

    $$
    A^2=
    \begin{pmatrix}4&5\\2&3\end{pmatrix}
    \begin{pmatrix}4&5\\2&3\end{pmatrix}
    =
    \begin{pmatrix}26&35\\14&19\end{pmatrix}
    $$

    $$
    7A-2I=
    \begin{pmatrix}28&35\\14&21\end{pmatrix}
    -
    \begin{pmatrix}2&0\\0&2\end{pmatrix}
    =
    \begin{pmatrix}26&35\\14&19\end{pmatrix}
    $$

    Per tant, $A^2=7A-2I$.

    **Apartat b)**

    Passem $7A$ a l'altre membre i traiem $A$ factor comú **per l'esquerra**, escrivint $7A=A\cdot7I$:

    $$
    A^2-7A=-2I
    \quad\Longrightarrow\quad
    A(A-7I)=-2I
    \quad\Longrightarrow\quad
    A\cdot\frac12(7I-A)=I.
    $$

    Com que $A$ commuta amb ella mateixa i amb $I$, també es compleix $\frac12(7I-A)\cdot A=I$. Per tant, $A$ té inversa i

    $$
    A^{-1}=\frac12(7I-A).
    $$

    **Apartat c)**

    $$
    A^{-1}=\frac12
    \begin{pmatrix}7-4&-5\\-2&7-3\end{pmatrix}
    =
    \frac12
    \begin{pmatrix}3&-5\\-2&4\end{pmatrix}
    $$

    **Comprovació:** $\begin{pmatrix}4&5\\2&3\end{pmatrix}\begin{pmatrix}3&-5\\-2&4\end{pmatrix}=\begin{pmatrix}2&0\\0&2\end{pmatrix}$ i, multiplicant per $\frac12$, obtenim $I_2$.

### Equacions i sistemes matricials

**4.14.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.14"
    **Apartat a)**

    Restem $A$ als dos membres:

    $$
    X=B-A=
    \begin{pmatrix}-1&-4\\2&-3\end{pmatrix}
    -
    \begin{pmatrix}-2&4\\1&6\end{pmatrix}
    =
    \begin{pmatrix}-1+2&-4-4\\2-1&-3-6\end{pmatrix}
    =
    \begin{pmatrix}1&-8\\1&-9\end{pmatrix}
    $$

    **Apartat b)**

    Sumem $2A$ als dos membres i després dividim entre $3$:

    $$
    3X=5B+2A
    \quad\Longrightarrow\quad
    X=\frac13(5B+2A)
    $$

    $$
    5B+2A=
    \begin{pmatrix}-5&-20\\10&-15\end{pmatrix}
    +
    \begin{pmatrix}-4&8\\2&12\end{pmatrix}
    =
    \begin{pmatrix}-9&-12\\12&-3\end{pmatrix}
    $$

    $$
    X=\frac13\begin{pmatrix}-9&-12\\12&-3\end{pmatrix}
    =
    \begin{pmatrix}-3&-4\\4&-1\end{pmatrix}
    $$

    **Comprovació:**

    $$
    3X-2A=
    \begin{pmatrix}-9&-12\\12&-3\end{pmatrix}
    -
    \begin{pmatrix}-4&8\\2&12\end{pmatrix}
    =
    \begin{pmatrix}-5&-20\\10&-15\end{pmatrix}
    =5B
    $$

    **Apartat c)**

    La matriu incògnita $X$ només està sumada a altres matrius o multiplicada per un nombre. Per aïllar-la n'hi ha prou de sumar, restar i dividir entre un nombre, com en una equació de primer grau. La inversa només cal quan $X$ està multiplicada per una matriu.

---

**4.15.**
Suposa que totes les matrius són quadrades i del mateix ordre. Aïlla la matriu $X$ en cada equació, sense fer cap càlcul amb matrius concretes, i indica quines matrius han de tenir inversa per poder-ho fer.

| | |
|:--|:--|
| **a)** $XA+B=C$ | **b)** $AXB=C+B$ |
| **c)** $2X-AX=B$ | **d)** $A(X+B)=C$ |
| **e)** $XA-B=3X$ | **f)** $ABX=C$ |

!!! tip "Comprova-ho"
    Pots comprovar el resultat amb l'eina [Equacions matricials](../eines/aillament-equacions-matricials.md) del laboratori de mates.

??? example "Mostra la solució pas a pas de l'exercici 4.15"
    En cada pas, multipliquem els dos membres pel mateix costat i conservem l'ordre dels factors.

    **Apartat a)**

    $$
    XA+B=C
    \quad\Longrightarrow\quad
    XA=C-B
    $$

    $A$ multiplica $X$ per la dreta. Multipliquem els dos membres per $A^{-1}$ per la dreta:

    $$
    \boxed{X=(C-B)A^{-1}}
    $$

    Cal que $A$ tingui inversa.

    **Apartat b)**

    Multipliquem per $A^{-1}$ per l'esquerra i per $B^{-1}$ per la dreta:

    $$
    A^{-1}AXBB^{-1}=A^{-1}(C+B)B^{-1}
    \quad\Longrightarrow\quad
    \boxed{X=A^{-1}(C+B)B^{-1}}
    $$

    Cal que $A$ i $B$ tinguin inversa. Si desenvolupem el resultat, com que $A^{-1}BB^{-1}=A^{-1}$, també es pot escriure $X=A^{-1}CB^{-1}+A^{-1}$.

    **Apartat c)**

    $X$ és a la dreta en tots dos termes. Escrivim $2X=2IX$ i traiem $X$ factor comú per la dreta:

    $$
    2IX-AX=B
    \quad\Longrightarrow\quad
    (2I-A)X=B
    \quad\Longrightarrow\quad
    \boxed{X=(2I-A)^{-1}B}
    $$

    Cal que $2I-A$ tingui inversa. No es pot escriure $(2-A)$, perquè no es pot restar una matriu a un nombre.

    **Apartat d)**

    $A$ multiplica tot el parèntesi per l'esquerra. Multipliquem els dos membres per $A^{-1}$ per l'esquerra:

    $$
    X+B=A^{-1}C
    \quad\Longrightarrow\quad
    \boxed{X=A^{-1}C-B}
    $$

    Cal que $A$ tingui inversa.

    **Apartat e)**

    Passem $3X$ a l'esquerra i $B$ a la dreta. Ara $X$ és a l'esquerra en tots dos termes, de manera que escrivim $3X=X\cdot3I$:

    $$
    XA-X\cdot3I=B
    \quad\Longrightarrow\quad
    X(A-3I)=B
    \quad\Longrightarrow\quad
    \boxed{X=B(A-3I)^{-1}}
    $$

    Cal que $A-3I$ tingui inversa.

    **Apartat f)**

    Primer multipliquem per $A^{-1}$ per l'esquerra i després per $B^{-1}$, també per l'esquerra:

    $$
    ABX=C
    \quad\Longrightarrow\quad
    BX=A^{-1}C
    \quad\Longrightarrow\quad
    \boxed{X=B^{-1}A^{-1}C}
    $$

    Cal que $A$ i $B$ tinguin inversa. El resultat coincideix amb $X=(AB)^{-1}C$, perquè $(AB)^{-1}=B^{-1}A^{-1}$: en invertir un producte, l'ordre dels factors canvia.

    | Equació | Solució | Han de tenir inversa |
    |:--|:--|:--|
    | $XA+B=C$ | $X=(C-B)A^{-1}$ | $A$ |
    | $AXB=C+B$ | $X=A^{-1}(C+B)B^{-1}$ | $A$ i $B$ |
    | $2X-AX=B$ | $X=(2I-A)^{-1}B$ | $2I-A$ |
    | $A(X+B)=C$ | $X=A^{-1}C-B$ | $A$ |
    | $XA-B=3X$ | $X=B(A-3I)^{-1}$ | $A-3I$ |
    | $ABX=C$ | $X=B^{-1}A^{-1}C$ | $A$ i $B$ |

---

**4.16.**
Considera les matrius

$$
A=\begin{pmatrix}4&3\\5&4\end{pmatrix}
\qquad
B=\begin{pmatrix}4&2\\5&3\end{pmatrix}
$$

**a)** Resol l'equació $AX=B$.

**b)** Resol l'equació $XA=B$.

**c)** Per què les dues solucions no coincideixen?

??? example "Mostra la solució pas a pas de l'exercici 4.16"
    Totes dues equacions necessiten $A^{-1}$. La calculem pel mètode de Gauss-Jordan, combinant files amb els dos coeficients per evitar fraccions:

    $$
    \left(
    \begin{array}{cc|cc}
    4&3&1&0\\
    5&4&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=4F_2-5F_1}
    \left(
    \begin{array}{cc|cc}
    4&3&1&0\\
    0&1&-5&4
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_1=F_1-3F_2}
    \left(
    \begin{array}{cc|cc}
    4&0&16&-12\\
    0&1&-5&4
    \end{array}
    \right)
    \xrightarrow{F_1=\frac14F_1}
    \left(
    \begin{array}{cc|cc}
    1&0&4&-3\\
    0&1&-5&4
    \end{array}
    \right)
    $$

    $$
    A^{-1}=\begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    $$

    **Apartat a)**

    $A$ multiplica $X$ per l'esquerra. Multipliquem els dos membres per $A^{-1}$ **per l'esquerra**:

    $$
    AX=B
    \quad\Longrightarrow\quad
    X=A^{-1}B=
    \begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    \begin{pmatrix}4&2\\5&3\end{pmatrix}
    =
    \begin{pmatrix}1&-1\\0&2\end{pmatrix}
    $$

    **Comprovació:** $AX=\begin{pmatrix}4+0&-4+6\\5+0&-5+8\end{pmatrix}=\begin{pmatrix}4&2\\5&3\end{pmatrix}=B$.

    **Apartat b)**

    Ara $A$ multiplica $X$ per la dreta. Multipliquem els dos membres per $A^{-1}$ **per la dreta**:

    $$
    XA=B
    \quad\Longrightarrow\quad
    X=BA^{-1}=
    \begin{pmatrix}4&2\\5&3\end{pmatrix}
    \begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    =
    \begin{pmatrix}6&-4\\5&-3\end{pmatrix}
    $$

    **Comprovació:** $XA=\begin{pmatrix}24-20&18-16\\20-15&15-12\end{pmatrix}=\begin{pmatrix}4&2\\5&3\end{pmatrix}=B$.

    **Apartat c)**

    Perquè el producte de matrius no és commutatiu: en general, $A^{-1}B\neq BA^{-1}$. Per això cal identificar sempre a quin costat de $X$ hi ha cada matriu.

---

**4.17.**
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

??? example "Mostra la solució pas a pas de l'exercici 4.17"
    **Apartat a)**

    Agrupem els termes amb $X$ en un membre:

    $$
    AX-3X=-B.
    $$

    Per treure $X$ factor comú per la dreta, escrivim $3X=3IX$:

    $$
    (A-3I)X=-B.
    $$

    $$
    A-3I=
    \begin{pmatrix}7&3\\5&7\end{pmatrix}
    -
    \begin{pmatrix}3&0\\0&3\end{pmatrix}
    =
    \begin{pmatrix}4&3\\5&4\end{pmatrix}
    $$

    Aquesta matriu és la de l'exercici 4.16, de manera que $(A-3I)^{-1}=\begin{pmatrix}4&-3\\-5&4\end{pmatrix}$. Multipliquem per l'esquerra:

    $$
    X=(A-3I)^{-1}(-B)=
    \begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    \begin{pmatrix}10&-4\\13&-5\end{pmatrix}
    =
    \begin{pmatrix}1&-1\\2&0\end{pmatrix}
    $$

    **Comprovació:** $AX+B=\begin{pmatrix}13&-7\\19&-5\end{pmatrix}+\begin{pmatrix}-10&4\\-13&5\end{pmatrix}=\begin{pmatrix}3&-3\\6&0\end{pmatrix}=3X$.

    **Apartat b)**

    Ara $X$ és a l'esquerra en tots dos termes. Escrivim $X=XI$ i traiem $X$ factor comú per l'esquerra:

    $$
    XA-XI=C
    \quad\Longrightarrow\quad
    X(A-I)=C
    \quad\Longrightarrow\quad
    X=C(A-I)^{-1}.
    $$

    Calculem $A-I=\begin{pmatrix}3&5\\1&2\end{pmatrix}$ i la seva inversa. Posem a dalt la fila que comença per $1$:

    $$
    \left(
    \begin{array}{cc|cc}
    3&5&1&0\\
    1&2&0&1
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{cc|cc}
    1&2&0&1\\
    3&5&1&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-3F_1}
    \left(
    \begin{array}{cc|cc}
    1&2&0&1\\
    0&-1&1&-3
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_1=F_1+2F_2}
    \left(
    \begin{array}{cc|cc}
    1&0&2&-5\\
    0&-1&1&-3
    \end{array}
    \right)
    \xrightarrow{F_2=-F_2}
    \left(
    \begin{array}{cc|cc}
    1&0&2&-5\\
    0&1&-1&3
    \end{array}
    \right)
    $$

    $$
    X=C(A-I)^{-1}=
    \begin{pmatrix}3&5\\-5&-8\end{pmatrix}
    \begin{pmatrix}2&-5\\-1&3\end{pmatrix}
    =
    \begin{pmatrix}1&0\\-2&1\end{pmatrix}
    $$

    **Comprovació:** $XA-X=\begin{pmatrix}4&5\\-7&-7\end{pmatrix}-\begin{pmatrix}1&0\\-2&1\end{pmatrix}=\begin{pmatrix}3&5\\-5&-8\end{pmatrix}=C$.

    !!! warning "Error habitual"
        No escriguis $(A-3)X$ ni $X(A-1)$: no es pot restar un nombre a una matriu. Cal escriure la matriu identitat, $3I$ o $I$, abans de treure factor comú.

---

**4.18.**
Resol el sistema d'equacions matricials

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

??? example "Mostra la solució pas a pas de l'exercici 4.18"
    Multipliquem la primera equació per $3$ i hi sumem la segona per eliminar $Y$:

    $$
    6X+3Y+X-3Y=
    \begin{pmatrix}9&6\\6&21\end{pmatrix}
    +
    \begin{pmatrix}5&-13\\-6&0\end{pmatrix}
    \quad\Longrightarrow\quad
    7X=\begin{pmatrix}14&-7\\0&21\end{pmatrix}
    $$

    Dividim tots els elements entre $7$:

    $$
    X=\begin{pmatrix}2&-1\\0&3\end{pmatrix}
    $$

    Aïllem $Y$ de la primera equació:

    $$
    Y=
    \begin{pmatrix}3&2\\2&7\end{pmatrix}
    -2X=
    \begin{pmatrix}3&2\\2&7\end{pmatrix}
    -
    \begin{pmatrix}4&-2\\0&6\end{pmatrix}
    =
    \begin{pmatrix}-1&4\\2&1\end{pmatrix}
    $$

    $$
    \boxed{
    X=\begin{pmatrix}2&-1\\0&3\end{pmatrix}
    \qquad
    Y=\begin{pmatrix}-1&4\\2&1\end{pmatrix}
    }
    $$

    **Comprovació a la segona equació:** $X-3Y=\begin{pmatrix}2+3&-1-12\\0-6&3-3\end{pmatrix}=\begin{pmatrix}5&-13\\-6&0\end{pmatrix}$.

---

**4.19.**
Considera el sistema

$$
\begin{cases}
y+z=1\\
x+2y=1\\
x+3y+2z=4
\end{cases}
$$

**a)** Escriu-lo en la forma $MX=N$ i resol-lo amb la matriu inversa. Fixa't que la matriu de coeficients és la matriu $D$ de l'exercici 4.11.

**b)** Resol el sistema que té els mateixos coeficients i els termes independents $2$, $1$ i $3$, respectivament. Per què no cal tornar a esglaonar?

??? example "Mostra la solució pas a pas de l'exercici 4.19"
    **Apartat a)**

    Ordenem les incògnites $x$, $y$, $z$ i escrivim els zeros dels coeficients que falten:

    $$
    \underbrace{\begin{pmatrix}0&1&1\\1&2&0\\1&3&2\end{pmatrix}}_{M}
    \underbrace{\begin{pmatrix}x\\y\\z\end{pmatrix}}_{X}
    =
    \underbrace{\begin{pmatrix}1\\1\\4\end{pmatrix}}_{N}
    $$

    A l'exercici 4.11 hem obtingut

    $$
    M^{-1}=\begin{pmatrix}-4&-1&2\\2&1&-1\\-1&-1&1\end{pmatrix}
    $$

    Per tant,

    $$
    X=M^{-1}N=
    \begin{pmatrix}-4&-1&2\\2&1&-1\\-1&-1&1\end{pmatrix}
    \begin{pmatrix}1\\1\\4\end{pmatrix}
    =
    \begin{pmatrix}-4-1+8\\2+1-4\\-1-1+4\end{pmatrix}
    =
    \begin{pmatrix}3\\-1\\2\end{pmatrix}
    $$

    La solució és $\boxed{x=3,\ y=-1,\ z=2}$.

    **Comprovació:** $-1+2=1$, $\ 3-2=1$ i $3-3+4=4$.

    **Apartat b)**

    Només canvia la columna dels termes independents. Com que ja coneixem $M^{-1}$, n'hi ha prou de fer un producte:

    $$
    X=M^{-1}\begin{pmatrix}2\\1\\3\end{pmatrix}
    =
    \begin{pmatrix}-8-1+6\\4+1-3\\-2-1+3\end{pmatrix}
    =
    \begin{pmatrix}-3\\2\\0\end{pmatrix}
    $$

    La solució és $\boxed{x=-3,\ y=2,\ z=0}$.

    **Comprovació:** $2+0=2$, $\ -3+4=1$ i $-3+6+0=3$.

    Aquest és l'avantatge del mètode: quan cal resoldre diversos sistemes amb la mateixa matriu de coeficients, la inversa es calcula una sola vegada.

### Problemes de matrius

**4.20.**
Una empresa de càtering ofereix tres menús: infantil ($I$), estàndard ($E$) i vegetarià ($V$). Aquest cap de setmana té dos encàrrecs: un casament ($C$), amb $15$ menús infantils, $80$ d'estàndard i $20$ de vegetarians, i un congrés ($G$), amb $120$ menús estàndard i $30$ de vegetarians.

Cada menú infantil necessita $0{,}3\,\text{kg}$ d'aliments i $5$ minuts de feina del personal; cada menú estàndard, $0{,}5\,\text{kg}$ i $8$ minuts, i cada menú vegetarià, $0{,}4\,\text{kg}$ i $6$ minuts. Els aliments costen, de mitjana, $12\,€/\text{kg}$ i cada minut de feina del personal, $0{,}50\,€$.

**a)** Escriu la matriu $Q$ dels encàrrecs (files: encàrrecs; columnes: menús), la matriu $N$ dels recursos que necessita cada menú i la matriu columna $c$ dels costos de cada recurs.

**b)** Calcula $QN$ i interpreta'n els elements.

**c)** Calcula $Nc$ i $QNc$. Què representen?

**d)** El producte $NQ$ també es pot calcular. Té sentit en aquest context? Justifica-ho.

??? example "Mostra la solució pas a pas de l'exercici 4.20"
    **Apartat a)**

    Perquè els productes encaixin, les columnes de $Q$ i les files de $N$ han de seguir el mateix ordre de menús, i les columnes de $N$ i les files de $c$, el mateix ordre de recursos. El congrés no demana menús infantils, de manera que hi escrivim un $0$:

    $$
    Q=
    \begin{array}{cc}
    &\begin{array}{ccc}I\!&\!E\!&\!V\end{array}\\[0.5mm]
    \begin{array}{c}C\\G\end{array}
    &
    \begin{pmatrix}
    15&80&20\\
    0&120&30
    \end{pmatrix}
    \end{array}
    $$

    $$
    N=
    \begin{array}{cc}
    &\begin{array}{cc}\text{kg}\!&\!\text{min}\end{array}\\[0.5mm]
    \begin{array}{c}I\\E\\V\end{array}
    &
    \begin{pmatrix}
    0{,}3&5\\
    0{,}5&8\\
    0{,}4&6
    \end{pmatrix}
    \end{array}
    \qquad
    c=
    \begin{array}{cc}
    &\begin{array}{c}€\end{array}\\[0.5mm]
    \begin{array}{c}\text{kg}\\\text{min}\end{array}
    &
    \begin{pmatrix}
    12\\
    0{,}5
    \end{pmatrix}
    \end{array}
    $$

    **Apartat b)**

    $Q$ és d'ordre $2\times3$ i $N$, d'ordre $3\times2$; el producte és d'ordre $2\times2$:

    $$
    QN=
    \begin{pmatrix}
    15\cdot0{,}3+80\cdot0{,}5+20\cdot0{,}4&15\cdot5+80\cdot8+20\cdot6\\
    0\cdot0{,}3+120\cdot0{,}5+30\cdot0{,}4&0\cdot5+120\cdot8+30\cdot6
    \end{pmatrix}
    $$

    $$
    QN=
    \begin{array}{cc}
    &\begin{array}{cc}\text{kg}\!&\!\text{min}\end{array}\\[0.5mm]
    \begin{array}{c}C\\G\end{array}
    &
    \begin{pmatrix}
    52{,}5&835\\
    72&1140
    \end{pmatrix}
    \end{array}
    $$

    Les files són els encàrrecs i les columnes, els recursos. El casament necessita $52{,}5\,\text{kg}$ d'aliments i $835$ minuts de feina, i el congrés, $72\,\text{kg}$ i $1140$ minuts.

    **Apartat c)**

    $$
    Nc=
    \begin{pmatrix}
    0{,}3\cdot12+5\cdot0{,}5\\
    0{,}5\cdot12+8\cdot0{,}5\\
    0{,}4\cdot12+6\cdot0{,}5
    \end{pmatrix}
    =
    \begin{pmatrix}
    6{,}1\\
    10\\
    7{,}8
    \end{pmatrix}
    $$

    És el cost de preparació de cada menú: un menú infantil costa $6{,}10\,€$; un d'estàndard, $10\,€$, i un de vegetarià, $7{,}80\,€$.

    $$
    QNc=(QN)c=
    \begin{pmatrix}
    52{,}5\cdot12+835\cdot0{,}5\\
    72\cdot12+1140\cdot0{,}5
    \end{pmatrix}
    =
    \begin{pmatrix}
    1047{,}5\\
    1434
    \end{pmatrix}
    $$

    És el cost de preparació de cada encàrrec: $1047{,}50\,€$ el del casament i $1434\,€$ el del congrés. També es pot calcular com $Q(Nc)$, amb el cost de cada menú:

    $$
    Q(Nc)=
    \begin{pmatrix}
    15\cdot6{,}1+80\cdot10+20\cdot7{,}8\\
    0\cdot6{,}1+120\cdot10+30\cdot7{,}8
    \end{pmatrix}
    =
    \begin{pmatrix}
    1047{,}5\\
    1434
    \end{pmatrix}
    $$

    **Apartat d)**

    $N$ és d'ordre $3\times2$ i $Q$ d'ordre $2\times3$, de manera que $NQ$ existeix i és d'ordre $3\times3$. Però no té sentit: cada element multiplicaria els recursos d'un menú (columnes de $N$: kg i minuts) per les quantitats d'un encàrrec (files de $Q$). Les categories que es combinen no coincideixen. Que un producte es pugui calcular no vol dir que tingui significat.

---

**4.21.**
Dues companyies elèctriques, A i B, es reparteixen els clients d'una comarca. Cada any, el $80\,\%$ dels clients d'A s'hi queden i el $20\,\%$ passen a B, mentre que el $90\,\%$ dels clients de B s'hi queden i el $10\,\%$ passen a A. No hi ha clients nous ni baixes. Aquest any, A té $5900$ clients i B, $4100$.

**a)** Escriu la matriu $M$ que, multiplicada per la columna dels clients d'un any, dona la columna dels clients de l'any següent. Indica què representen les files i les columnes.

**b)** Calcula quants clients tindrà cada companyia l'any vinent i d'aquí a dos anys. Comprova que el resultat de dos anys coincideix amb $M^2$ multiplicada pels clients d'aquest any.

**c)** Calcula $M^{-1}$ i utilitza-la per saber quants clients tenia cada companyia l'any passat.

**d)** Per què el nombre total de clients no canvia?

??? example "Mostra la solució pas a pas de l'exercici 4.21"
    **Apartat a)**

    Si $a$ i $b$ són els clients d'A i de B d'un any, l'any següent A en tindrà $0{,}8a+0{,}1b$ i B, $0{,}2a+0{,}9b$. Escrivim aquestes expressions en una matriu columna i les expressem com un producte:

    $$
    \begin{pmatrix}
    0{,}8a+0{,}1b\\
    0{,}2a+0{,}9b
    \end{pmatrix}
    =
    \begin{pmatrix}
    0{,}8&0{,}1\\
    0{,}2&0{,}9
    \end{pmatrix}
    \begin{pmatrix}
    a\\
    b
    \end{pmatrix}
    $$

    Per tant,

    $$
    M=
    \begin{array}{cc}
    &\begin{array}{cc}\text{d'A}\!&\!\text{de B}\end{array}\\[0.5mm]
    \begin{array}{c}\text{a A}\\\text{a B}\end{array}
    &
    \begin{pmatrix}
    0{,}8&0{,}1\\
    0{,}2&0{,}9
    \end{pmatrix}
    \end{array}
    $$

    Les columnes indiquen la companyia d'origen i les files, la companyia on són els clients l'any següent.

    **Apartat b)**

    $$
    M\begin{pmatrix}5900\\4100\end{pmatrix}
    =
    \begin{pmatrix}0{,}8\cdot5900+0{,}1\cdot4100\\0{,}2\cdot5900+0{,}9\cdot4100\end{pmatrix}
    =
    \begin{pmatrix}5130\\4870\end{pmatrix}
    $$

    $$
    M\begin{pmatrix}5130\\4870\end{pmatrix}
    =
    \begin{pmatrix}0{,}8\cdot5130+0{,}1\cdot4870\\0{,}2\cdot5130+0{,}9\cdot4870\end{pmatrix}
    =
    \begin{pmatrix}4591\\5409\end{pmatrix}
    $$

    L'any vinent A tindrà $5130$ clients i B, $4870$. D'aquí a dos anys, A en tindrà $4591$ i B, $5409$.

    Comprovem-ho amb $M^2$:

    $$
    M^2=
    \begin{pmatrix}0{,}8&0{,}1\\0{,}2&0{,}9\end{pmatrix}
    \begin{pmatrix}0{,}8&0{,}1\\0{,}2&0{,}9\end{pmatrix}
    =
    \begin{pmatrix}0{,}66&0{,}17\\0{,}34&0{,}83\end{pmatrix}
    $$

    $$
    M^2\begin{pmatrix}5900\\4100\end{pmatrix}
    =
    \begin{pmatrix}3894+697\\2006+3403\end{pmatrix}
    =
    \begin{pmatrix}4591\\5409\end{pmatrix}
    $$

    **Apartat c)**

    Per evitar decimals, primer multipliquem les dues files per $10$. Aquesta transformació també s'aplica a la part dreta:

    $$
    \left(
    \begin{array}{cc|cc}
    0{,}8&0{,}1&1&0\\
    0{,}2&0{,}9&0&1
    \end{array}
    \right)
    \xrightarrow{\substack{F_1=10F_1\\F_2=10F_2}}
    \left(
    \begin{array}{cc|cc}
    8&1&10&0\\
    2&9&0&10
    \end{array}
    \right)
    \xrightarrow{F_2=4F_2-F_1}
    \left(
    \begin{array}{cc|cc}
    8&1&10&0\\
    0&35&-10&40
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_1=35F_1-F_2}
    \left(
    \begin{array}{cc|cc}
    280&0&360&-40\\
    0&35&-10&40
    \end{array}
    \right)
    \xrightarrow{\substack{F_1=\frac{1}{280}F_1\\F_2=\frac{1}{35}F_2}}
    \left(
    \begin{array}{cc|cc}
    1&0&\frac97&-\frac17\\[2pt]
    0&1&-\frac27&\frac87
    \end{array}
    \right)
    $$

    $$
    M^{-1}=\frac17\begin{pmatrix}9&-1\\-2&8\end{pmatrix}
    $$

    Si $\begin{pmatrix}a\\b\end{pmatrix}$ són els clients de l'any passat, $M\begin{pmatrix}a\\b\end{pmatrix}=\begin{pmatrix}5900\\4100\end{pmatrix}$. Multipliquem per $M^{-1}$ per l'esquerra:

    $$
    \begin{pmatrix}a\\b\end{pmatrix}
    =
    \frac17\begin{pmatrix}9&-1\\-2&8\end{pmatrix}
    \begin{pmatrix}5900\\4100\end{pmatrix}
    =
    \frac17\begin{pmatrix}49\,000\\21\,000\end{pmatrix}
    =
    \begin{pmatrix}7000\\3000\end{pmatrix}
    $$

    L'any passat, A tenia $7000$ clients i B, $3000$.

    **Comprovació:**

    $$
    M\begin{pmatrix}7000\\3000\end{pmatrix}
    =
    \begin{pmatrix}0{,}8\cdot7000+0{,}1\cdot3000\\0{,}2\cdot7000+0{,}9\cdot3000\end{pmatrix}
    =
    \begin{pmatrix}5900\\4100\end{pmatrix}
    $$

    **Apartat d)**

    Cada columna de $M$ suma $1$: tots els clients d'una companyia continuen a la mateixa o passen a l'altra. Per això el total es manté en $10\,000$ clients: $5900+4100=5130+4870=4591+5409=10\,000$.

---

**4.22.**
Per enviar un missatge xifrat, s'assigna a cada lletra el seu lloc a l'alfabet ($A=1$, $B=2$, ..., $Z=26$) i a l'espai, el $0$:

espai $0$ · A $1$ · B $2$ · C $3$ · D $4$ · E $5$ · F $6$ · G $7$ · H $8$ · I $9$ · J $10$ · K $11$ · L $12$ · M $13$ · N $14$ · O $15$ · P $16$ · Q $17$ · R $18$ · S $19$ · T $20$ · U $21$ · V $22$ · W $23$ · X $24$ · Y $25$ · Z $26$

Els nombres s'agrupen de dos en dos, com a columnes d'una matriu $M$ de dues files, i s'envia la matriu $E=AM$, on

$$
A=\begin{pmatrix}4&3\\5&4\end{pmatrix}
$$

**a)** Xifra la paraula PAU. Afegeix un espai al final perquè el nombre de símbols sigui parell.

**b)** Has rebut la matriu

$$
E=\begin{pmatrix}55&134&99\\69&172&129\end{pmatrix}
$$

Explica com es pot recuperar $M$ i desxifra el missatge.

**c)** Per què la matriu de xifratge ha de tenir inversa?

??? example "Mostra la solució pas a pas de l'exercici 4.22"
    **Apartat a)**

    PAU seguida d'un espai correspon a $16$, $1$, $21$ i $0$. Les parelles $(16,1)$ i $(21,0)$ són les columnes de $M$:

    $$
    E=AM=
    \begin{pmatrix}4&3\\5&4\end{pmatrix}
    \begin{pmatrix}16&21\\1&0\end{pmatrix}
    =
    \begin{pmatrix}64+3&84+0\\80+4&105+0\end{pmatrix}
    =
    \begin{pmatrix}67&84\\84&105\end{pmatrix}
    $$

    **Apartat b)**

    Com que $E=AM$ i $A$ multiplica $M$ per l'esquerra, $M=A^{-1}E$. La matriu $A$ és la de l'exercici 4.16, de manera que

    $$
    A^{-1}=\begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    $$

    $$
    M=A^{-1}E=
    \begin{pmatrix}4&-3\\-5&4\end{pmatrix}
    \begin{pmatrix}55&134&99\\69&172&129\end{pmatrix}
    $$

    $$
    M=
    \begin{pmatrix}
    220-207&536-516&396-387\\
    -275+276&-670+688&-495+516
    \end{pmatrix}
    =
    \begin{pmatrix}13&20&9\\1&18&21\end{pmatrix}
    $$

    Llegim les columnes per ordre: $(13,1)$, $(20,18)$ i $(9,21)$, és a dir, M-A, T-R, I-U. El missatge és **MATRIU**.

    **Apartat c)**

    Per desxifrar cal calcular $M=A^{-1}E$. Si $A$ no tingués inversa, no podríem aïllar $M$, i dos missatges diferents podrien donar la mateixa matriu xifrada.

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

??? example "Mostra la solució pas a pas del problema PAU.AL.15"
    Escrivim la matriu amb les facultats a les files i els nivells a les columnes:

    $$
    E=
    \begin{array}{cc}
    &\begin{array}{ccc}\text{G}\!&\!\text{M}\!&\!\text{D}\end{array}\\[0.5mm]
    \begin{array}{c}\text{C}\\\text{E}\\\text{L}\end{array}
    &
    \begin{pmatrix}
    450&172&41\\
    445&178&45\\
    438&183&48
    \end{pmatrix}
    \end{array}
    $$

    Per sumar els elements de cada columna, multipliquem $E$ per l'esquerra per una matriu fila d'uns:

    $$
    \begin{pmatrix}1&1&1\end{pmatrix}E
    =
    \begin{pmatrix}450+445+438&172+178+183&41+45+48\end{pmatrix}
    $$

    $$
    \begin{pmatrix}1&1&1\end{pmatrix}E
    =
    \begin{pmatrix}1333&533&134\end{pmatrix}
    $$

    La universitat té $1333$ estudiants de grau, $533$ de màster i $134$ de doctorat, com indica la fila de totals de la taula.

    Escrivim els preus de la matrícula en una matriu columna, amb el mateix ordre G, M, D, i la multipliquem pel vector anterior:

    $$
    \begin{pmatrix}1333&533&134\end{pmatrix}
    \begin{pmatrix}1000\\1500\\500\end{pmatrix}
    =1\,333\,000+799\,500+67\,000=2\,199\,500
    $$

    La universitat ingressa $2\,199\,500\,€$ en concepte de matrícules.

---

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

??? example "Mostra la solució pas a pas del problema PAU.AL.16"
    A $R$, cada fila correspon a una persona (Carme, Saïd, Martí) i cada columna, a un tipus d'activitat (tallers, xerrades, seminaris). A $h$, cada fila correspon a un tipus d'activitat, en el mateix ordre.

    $$
    R\cdot h=
    \begin{pmatrix}
    0{,}50\cdot24+0{,}30\cdot21+0{,}20\cdot15\\
    0{,}30\cdot24+0{,}50\cdot21+0{,}20\cdot15\\
    0{,}20\cdot24+0{,}20\cdot21+0{,}60\cdot15
    \end{pmatrix}
    =
    \begin{pmatrix}
    12+6{,}3+3\\
    7{,}2+10{,}5+3\\
    4{,}8+4{,}2+9
    \end{pmatrix}
    =
    \begin{pmatrix}
    21{,}3\\
    20{,}7\\
    18
    \end{pmatrix}
    $$

    Cada element és el nombre total d'hores que cada amic ha dedicat aquella setmana a preparar activitats: la Carme, $21{,}3$ hores; el Saïd, $20{,}7$ hores, i el Martí, $18$ hores.

    **Comprovació:** $21{,}3+20{,}7+18=60=24+21+15$, perquè cada columna de $R$ suma $1$.

    La persona que ha dedicat més hores a la preparació és **la Carme**.

---

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

??? example "Mostra la solució pas a pas del problema PAU.AL.17"
    Amb $1000$ assistents i els mateixos percentatges, hi haurà $10\,\%$ d'universitat, $50\,\%$ de secundària i $40\,\%$ d'infantil i primària:

    $$
    x=100,\qquad y=500,\qquad z=400.
    $$

    El vector fila de la comanda té les columnes $D1$, $D2$, $D3$, que coincideixen amb les files de la matriu de preus. El producte dona el cost total a cada empresa:

    $$
    \begin{pmatrix}100&500&400\end{pmatrix}
    \begin{pmatrix}
    1{,}25&1&1{,}25\\
    0{,}75&1&1{,}15\\
    1&0{,}85&0{,}80
    \end{pmatrix}
    $$

    $$
    \begin{pmatrix}125+375+400&100+500+340&125+575+320\end{pmatrix}
    =
    \begin{pmatrix}900&940&1020\end{pmatrix}
    $$

    Les tres comandes costarien $900\,€$, $940\,€$ i $1020\,€$. L'empresa que ofereix el millor preu és **$E1$**, amb un cost de $900\,€$.

---

**PAU.AL.18.**
**Proveïdors d'una fàbrica de pasta**

*(apartat a) de l'opció A de l'exercici 4 de la convocatòria ordinària de 2025, sèrie 4; 1,25 punts)*. Una fàbrica es dedica a elaborar pasta. Tot el procés de producció es pot resumir en tres etapes:

1. Compra de matèries primeres. Per a elaborar la pasta, l'empresa ha de comprar oli, farina i sal de bona qualitat. La compra la pot fer a tres proveïdors diferents. El primer proveïdor ven l'oli a $3\,€/\text{L}$, la farina a $0{,}6\,€/\text{kg}$ i la sal a $1\,€/\text{kg}$. El segon proveïdor ven l'oli a $3{,}5\,€/\text{L}$, la farina a $1\,€/\text{kg}$ i la sal a $0{,}7\,€/\text{kg}$. Finalment, el tercer proveïdor ven l'oli a $2{,}5\,€/\text{L}$, la farina a $0{,}8\,€/\text{kg}$ i la sal a $0{,}9\,€/\text{kg}$.
2. Elaboració, empaquetament i control de qualitat. Es fabrica i s'envasa la pasta. Posteriorment, es comprova que la pasta estigui ben feta i envasada correctament, i es verifica que els paquets pesin $500\,\text{g}$ de mitjana.
3. Venda. L'estratègia de venda i el preu dels paquets es determinen fent un estudi de mercat.

- **a)** L'empresa necessita $300$ litres d'oli, $700\,\text{kg}$ de farina i $25\,\text{kg}$ de sal. Escriviu aquesta informació juntament amb els preus per producte de cada proveïdor en forma matricial (deixant ben clar el que representen les files i les columnes) i calculeu mitjançant un producte de matrius el cost total de la comanda per cada proveïdor. Quin dels tres proveïdors és el més econòmic? *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.18"
    Escrivim la comanda com una matriu fila, amb les columnes en l'ordre oli, farina i sal, i els preus en una matriu amb les mateixes matèries primeres a les files i els proveïdors a les columnes:

    $$
    Q=
    \begin{array}{cc}
    &\begin{array}{ccc}\text{oli}\!&\!\text{farina}\!&\!\text{sal}\end{array}\\[0.5mm]
    &
    \begin{pmatrix}
    300&700&25
    \end{pmatrix}
    \end{array}
    \qquad
    P=
    \begin{array}{cc}
    &\begin{array}{ccc}P_1\!&\!P_2\!&\!P_3\end{array}\\[0.5mm]
    \begin{array}{c}\text{oli}\\\text{farina}\\\text{sal}\end{array}
    &
    \begin{pmatrix}
    3&3{,}5&2{,}5\\
    0{,}6&1&0{,}8\\
    1&0{,}7&0{,}9
    \end{pmatrix}
    \end{array}
    $$

    $Q$ és d'ordre $1\times3$ i $P$, d'ordre $3\times3$; el producte és una matriu fila amb el cost a cada proveïdor:

    $$
    QP=
    \begin{pmatrix}
    900+420+25&1050+700+17{,}5&750+560+22{,}5
    \end{pmatrix}
    $$

    $$
    QP=
    \begin{pmatrix}
    1345&1767{,}5&1332{,}5
    \end{pmatrix}
    $$

    La comanda costaria $1345\,€$ al primer proveïdor, $1767{,}50\,€$ al segon i $1332{,}50\,€$ al tercer. El més econòmic és **el tercer proveïdor**.

---

**PAU.AL.19.**
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

??? example "Mostra la solució pas a pas del problema PAU.AL.19"
    **Apartat a)**

    $$
    10A=\begin{pmatrix}10&-10&0\\-10&0&10\\0&10&-10\end{pmatrix}
    \qquad
    3B=\begin{pmatrix}0&-3&3\\3&0&-3\\-3&3&0\end{pmatrix}
    $$

    $$
    18C=\begin{pmatrix}0&54&0\\18&18&18\\36&-18&36\end{pmatrix}
    $$

    $$
    10A+3B+18C=
    \begin{pmatrix}
    10&41&3\\
    11&18&25\\
    33&-5&26
    \end{pmatrix}
    $$

    Sumes de les files: $10+41+3=54$, $\ 11+18+25=54$ i $33-5+26=54$.

    Sumes de les columnes: $10+11+33=54$, $\ 41+18-5=54$ i $3+25+26=54$.

    Totes valen $54$: la matriu és màgica i la seva constant màgica és $\boxed{54}$.

    **Apartat b)**

    Observem les matrius de partida: a $A$ i a $B$ totes les files i les columnes sumen $0$, i a $C$ totes sumen $3$. Si $d$ és el dia, $m$ el mes i $e$ l'edat, cada fila i cada columna de $dA+mB+eC$ suma

    $$
    d\cdot0+m\cdot0+e\cdot3=3e.
    $$

    La constant màgica només depèn de l'edat. Per al pare,

    $$
    3e=153\quad\Longrightarrow\quad e=51.
    $$

    El pare del Martí té **$51$ anys**. A l'apartat a) es compleix el mateix: $3\cdot18=54$.

    **Comprovació:**

    $$
    8A+9B+51C=
    \begin{pmatrix}
    8+0+0&-8-9+153&0+9+0\\
    -8+9+51&0+0+51&8-9+51\\
    0-9+102&8+9-51&-8+0+102
    \end{pmatrix}
    $$

    $$
    8A+9B+51C=
    \begin{pmatrix}
    8&136&9\\
    52&51&50\\
    93&-34&94
    \end{pmatrix}
    $$

    Totes les files i totes les columnes sumen $153$.

---

**PAU.AL.20.**
**Artesania de fusta**

*(qüestió 4 de la convocatòria ordinària de 2024, sèrie 5; 2,5 punts)*. La Laia, una aficionada a l'artesania feta amb fusta, va muntar un petit negoci fa un parell de mesos. Al seu taller, elabora tres tipus de productes amb fusta reciclada, que després posa a la venda: noms personalitzats, paraules decoratives i baldufes.

Durant el primer mes, la Laia va tenir tres clients: el primer va adquirir $2$ noms personalitzats i $3$ baldufes; el segon va adquirir $1$ nom personalitzat, $2$ paraules decoratives i $5$ baldufes, i el tercer només va comprar $4$ baldufes.

- **a)** Construïu la matriu $3\times3$ corresponent a les vendes, en què les files representin els clients ($C1$, $C2$ i $C3$) i les columnes representin els productes que van adquirir. Si el primer mes la Laia va vendre els noms personalitzats ($N$) a $20\,€$ cadascun, les paraules decoratives ($P$) a $18\,€$ cadascuna i les baldufes ($B$) a $6\,€$ cadascuna, calculeu quant va facturar a cada client per la seva comanda mitjançant un producte de matrius. *[1,5 punts]*
- **b)** Per tal d'incentivar les vendes, el segon mes la Laia va aplicar un descompte al preu de venda de tots els productes. Durant aquest mes, també va tenir tres clients i va obtenir la matriu de vendes següent:

    $$
    \begin{array}{cc}
    &\begin{array}{ccc}N\!&\!P\!&\!B\end{array}\\[0.5mm]
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

??? example "Mostra la solució pas a pas del problema PAU.AL.20"
    **Apartat a)**

    Les files són els clients i les columnes, els productes $N$, $P$ i $B$. Els preus formen una matriu columna amb el mateix ordre de productes:

    $$
    V=
    \begin{array}{cc}
    &\begin{array}{ccc}N\!&\!P\!&\!B\end{array}\\[0.5mm]
    \begin{array}{c}C1\\C2\\C3\end{array}
    &
    \begin{pmatrix}
    2&0&3\\
    1&2&5\\
    0&0&4
    \end{pmatrix}
    \end{array}
    \qquad
    p=\begin{pmatrix}20\\18\\6\end{pmatrix}
    $$

    $$
    Vp=
    \begin{pmatrix}
    2\cdot20+0\cdot18+3\cdot6\\
    1\cdot20+2\cdot18+5\cdot6\\
    0\cdot20+0\cdot18+4\cdot6
    \end{pmatrix}
    =
    \begin{pmatrix}
    58\\
    86\\
    24
    \end{pmatrix}
    $$

    La Laia va facturar $58\,€$ al primer client, $86\,€$ al segon i $24\,€$ al tercer.

    **Apartat b)**

    Si $n$, $q$ i $b$ són els nous preus dels noms, les paraules i les baldufes, la facturació de cada client és el producte de la matriu de vendes per la columna dels preus:

    $$
    \begin{pmatrix}3&1&2\\2&0&4\\1&2&3\end{pmatrix}
    \begin{pmatrix}n\\q\\b\end{pmatrix}
    =
    \begin{pmatrix}78\\52\\62\end{pmatrix}
    $$

    Efectuem el producte i escrivim el resultat com una matriu:

    $$
    \begin{pmatrix}3n+q+2b\\2n+4b\\n+2q+3b\end{pmatrix}
    =
    \begin{pmatrix}78\\52\\62\end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició, obtenim el sistema

    $$
    \begin{cases}
    3n+q+2b=78\\
    2n+4b=52\\
    n+2q+3b=62
    \end{cases}
    $$

    El resolem pel mètode de Gauss, començant per la fila que té coeficient $1$ a la primera incògnita:

    $$
    \left(
    \begin{array}{ccc|c}
    1&2&3&62\\
    2&0&4&52\\
    3&1&2&78
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    1&2&3&62\\
    0&-4&-2&-72\\
    0&-5&-7&-108
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_2=-\frac12F_2}
    \left(
    \begin{array}{ccc|c}
    1&2&3&62\\
    0&2&1&36\\
    0&-5&-7&-108
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3+5F_2}
    \left(
    \begin{array}{ccc|c}
    1&2&3&62\\
    0&2&1&36\\
    0&0&-9&-36
    \end{array}
    \right)
    $$

    Per substitució enrere: $b=4$, $\ 2q+4=36\Rightarrow q=16$ i $n+32+12=62\Rightarrow n=18$.

    El segon mes va vendre els noms personalitzats a $18\,€$, les paraules decoratives a $16\,€$ i les baldufes a $4\,€$: cada producte $2\,€$ més barat que el primer mes.

    **Comprovació:** $3\cdot18+16+2\cdot4=78$, $\ 2\cdot18+4\cdot4=52$ i $18+2\cdot16+3\cdot4=62$.

---

**PAU.AL.21.**
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

??? example "Mostra la solució pas a pas del problema PAU.AL.21"
    **Apartat a)**

    Multiplicar per la columna d'uns suma els elements de cada fila:

    $$
    A\cdot B=
    \begin{pmatrix}122+620\\930+433\\384+281\end{pmatrix}
    =
    \begin{pmatrix}742\\1363\\665\end{pmatrix}
    $$

    Cada element és el nombre total d'espectadors d'una franja d'edat, sumant les dues sales: $742$ menors de $18$ anys, $1363$ persones d'entre $18$ i $65$ anys i $665$ persones de més de $65$ anys.

    Per obtenir els ingressos, cal multiplicar cada franja pel preu de la seva entrada. Com que $A\cdot B$ té les franges en l'ordre de les files, $C$ ha de tenir els preus en el mateix ordre:

    $$
    C=\begin{pmatrix}5&8{,}5&6{,}5\end{pmatrix}
    $$

    $$
    C\cdot A\cdot B=
    \begin{pmatrix}5&8{,}5&6{,}5\end{pmatrix}
    \begin{pmatrix}742\\1363\\665\end{pmatrix}
    =3710+11\,585{,}5+4322{,}5=19\,618
    $$

    Els ingressos d'aquesta setmana han estat de $19\,618\,€$.

    **Apartat b)**

    Repetim el càlcul amb la matriu $D$:

    $$
    D\cdot B=\begin{pmatrix}84+23\\338+x\\256+408\end{pmatrix}=\begin{pmatrix}107\\338+x\\664\end{pmatrix}
    $$

    $$
    C\cdot D\cdot B=5\cdot107+8{,}5\,(338+x)+6{,}5\cdot664
    $$

    $$
    C\cdot D\cdot B=535+2873+8{,}5x+4316=7724+8{,}5x
    $$

    Igualem als ingressos d'aquella setmana:

    $$
    7724+8{,}5x=12\,076
    \quad\Longrightarrow\quad
    8{,}5x=4352
    \quad\Longrightarrow\quad
    x=512.
    $$

    A la segona pel·lícula hi van assistir **$512$ persones** d'entre $18$ i $65$ anys.

---

**PAU.AL.22.**
**Places d'un centre cívic**

*(qüestió 2 de la convocatòria ordinària de 2023, sèrie 1; 2,5 punts)*. Un centre cívic ofereix cursos de francès de nivell principiant, intermedi i avançat. Els alumnes inscrits, si ho desitgen, tenen garantida una plaça per al curs següent. És per això que, abans d'acabar el curs, es fan les reserves de plaça per al curs vinent. De l'alumnat de nivell principiant, un $15\,\%$ vol repetir el mateix curs, un $50\,\%$ vol fer el curs intermedi i un $5\,\%$ vol passar directament al curs de nivell avançat. Pel que fa a l'alumnat de nivell intermedi, un $10\,\%$ vol repetir el curs i un $60\,\%$ vol fer el curs de nivell avançat. Finalment, de l'alumnat de nivell avançat, un $20\,\%$ vol repetir el curs. Cap alumne no demana reserva de plaça per a un curs de nivell inferior i la resta d'alumnes no volen continuar al centre el curs vinent. Aquest any hi ha hagut $100$ alumnes matriculats de nivell principiant, $90$ de nivell intermedi i $60$ de nivell avançat.

- **a)** Calculeu el nombre de places que cal reservar de cada nivell per al curs següent mitjançant un producte de matrius. *[1,25 punts]*
- **b)** El mateix centre cívic ofereix dos horaris de ioga, un de matí i un de tarda. Per al proper curs, el $50\,\%$ dels alumnes que actualment fan ioga al matí volen continuar amb el mateix horari, mentre que un $30\,\%$ volen passar a l'horari de tarda. La resta d'alumnes de matí no continuaran. Pel que fa als alumnes que actualment fan ioga a la tarda, un $40\,\%$ volen passar a l'horari de matí i un $60\,\%$ volen continuar fent l'horari de tarda. Si sabem que per al curs següent cal reservar $49$ places per a l'horari de matí i $51$ places per a l'horari de tarda, quants alumnes hi ha matriculats actualment en cada horari? *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.22"
    **Apartat a)**

    Construïm una matriu en què les columnes indiquen el nivell actual i les files, el nivell que es reserva per al curs vinent. Cada element és la proporció d'alumnes que fa aquest pas:

    $$
    T=
    \begin{array}{cc}
    &\begin{array}{ccc}\text{P}\!&\!\text{I}\!&\!\text{A}\end{array}\\[0.5mm]
    \begin{array}{c}\text{P}\\\text{I}\\\text{A}\end{array}
    &
    \begin{pmatrix}
    0{,}15&0&0\\
    0{,}50&0{,}10&0\\
    0{,}05&0{,}60&0{,}20
    \end{pmatrix}
    \end{array}
    $$

    Els zeros indiquen que ningú no demana un nivell inferior. Multipliquem per la columna dels alumnes actuals:

    $$
    T\begin{pmatrix}100\\90\\60\end{pmatrix}
    =
    \begin{pmatrix}
    0{,}15\cdot100\\
    0{,}50\cdot100+0{,}10\cdot90\\
    0{,}05\cdot100+0{,}60\cdot90+0{,}20\cdot60
    \end{pmatrix}
    =
    \begin{pmatrix}
    15\\
    59\\
    71
    \end{pmatrix}
    $$

    Cal reservar $15$ places de nivell principiant, $59$ de nivell intermedi i $71$ de nivell avançat.

    **Apartat b)**

    Ara les columnes són l'horari actual (matí, tarda) i les files, l'horari del curs vinent. Si $m$ i $t$ són els alumnes actuals de matí i de tarda,

    $$
    \begin{pmatrix}0{,}5&0{,}4\\0{,}3&0{,}6\end{pmatrix}
    \begin{pmatrix}m\\t\end{pmatrix}
    =
    \begin{pmatrix}49\\51\end{pmatrix}
    $$

    Efectuem el producte i escrivim el resultat com una matriu:

    $$
    \begin{pmatrix}0{,}5m+0{,}4t\\0{,}3m+0{,}6t\end{pmatrix}
    =
    \begin{pmatrix}49\\51\end{pmatrix}
    $$

    Igualant els elements que ocupen la mateixa posició, obtenim el sistema

    $$
    \begin{cases}
    0{,}5m+0{,}4t=49\\
    0{,}3m+0{,}6t=51
    \end{cases}
    $$

    Multipliquem les dues equacions per $10$ i dividim la segona entre $3$:

    $$
    \begin{cases}
    5m+4t=490\\
    m+2t=170
    \end{cases}
    $$

    De la segona, $m=170-2t$. Substituint a la primera,

    $$
    5(170-2t)+4t=490
    \quad\Longrightarrow\quad
    850-6t=490
    \quad\Longrightarrow\quad
    t=60,
    $$

    i $m=170-120=50$.

    Actualment hi ha **$50$ alumnes al matí i $60$ a la tarda**.

    **Comprovació:** $0{,}5\cdot50+0{,}4\cdot60=25+24=49$ i $0{,}3\cdot50+0{,}6\cdot60=15+36=51$.

---

**PAU.AL.23.**
**Una equació amb paràmetres**

*(qüestió 5 de la convocatòria ordinària de 2023, sèrie 5; 2,5 punts)*. Considereu les matrius $A=\begin{pmatrix}a&b\\0&a\end{pmatrix}$ i $B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, en què $a$ i $b$ són dos paràmetres reals.

- **a)** Trobeu els valors dels paràmetres $a$ i $b$ per als quals es compleix que $A^2-2A=B$. *[1,25 punts]*
- **b)** Si $a=1$ i $b=1$, resoleu l'equació matricial $2A=A\cdot X+B$. *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.23"
    **Apartat a)**

    $$
    A^2=
    \begin{pmatrix}a&b\\0&a\end{pmatrix}
    \begin{pmatrix}a&b\\0&a\end{pmatrix}
    =
    \begin{pmatrix}a^2&2ab\\0&a^2\end{pmatrix}
    $$

    $$
    A^2-2A=
    \begin{pmatrix}a^2-2a&2ab-2b\\0&a^2-2a\end{pmatrix}
    =
    \begin{pmatrix}0&1\\0&0\end{pmatrix}
    $$

    Igualem els elements que ocupen la mateixa posició:

    $$
    \begin{cases}
    a^2-2a=0\\
    2ab-2b=1
    \end{cases}
    \quad\Longleftrightarrow\quad
    \begin{cases}
    a(a-2)=0\\
    2b(a-1)=1
    \end{cases}
    $$

    De la primera equació, $a=0$ o $a=2$:

    - si $a=0$, $\ -2b=1$ i $b=-\frac12$;
    - si $a=2$, $\ 2b=1$ i $b=\frac12$.

    Hi ha dues solucions: $\boxed{a=0,\ b=-\tfrac12}$ i $\boxed{a=2,\ b=\tfrac12}$.

    **Apartat b)**

    Si $a=b=1$, $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Aïllem el terme que conté $X$:

    $$
    2A=AX+B
    \quad\Longrightarrow\quad
    AX=2A-B
    \quad\Longrightarrow\quad
    X=A^{-1}(2A-B).
    $$

    Calculem $A^{-1}$ pel mètode de Gauss-Jordan:

    $$
    \left(
    \begin{array}{cc|cc}
    1&1&1&0\\
    0&1&0&1
    \end{array}
    \right)
    \xrightarrow{F_1=F_1-F_2}
    \left(
    \begin{array}{cc|cc}
    1&0&1&-1\\
    0&1&0&1
    \end{array}
    \right)
    \qquad
    A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}
    $$

    $$
    2A-B=
    \begin{pmatrix}2&2\\0&2\end{pmatrix}
    -
    \begin{pmatrix}0&1\\0&0\end{pmatrix}
    =
    \begin{pmatrix}2&1\\0&2\end{pmatrix}
    $$

    $$
    X=
    \begin{pmatrix}1&-1\\0&1\end{pmatrix}
    \begin{pmatrix}2&1\\0&2\end{pmatrix}
    =
    \boxed{\begin{pmatrix}2&-1\\0&2\end{pmatrix}}
    $$

    **Comprovació:** $AX+B=\begin{pmatrix}2&1\\0&2\end{pmatrix}+\begin{pmatrix}0&1\\0&0\end{pmatrix}=\begin{pmatrix}2&2\\0&2\end{pmatrix}=2A$.

---

**PAU.AL.24.**
**Potències d'una matriu**

*(qüestió 5 de la convocatòria extraordinària de 2023, sèrie 2; 2,5 punts)*. Considereu la matriu $A=\begin{pmatrix}1&a\\2&-1\end{pmatrix}$, en què $a$ és un paràmetre real.

- **a)** Si anomenem $I$ la matriu identitat d'ordre $2$, trobeu el valor de $a$ per al qual $A^2=I$. *[1 punt]*
- **b)** Per a $a=-1$, calculeu $A^2$, $A^3$ i $A^4$. Feu servir els càlculs anteriors per a deduir el valor de $A^{-1}$ i de $A^{23}$. *[1,5 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.24"
    **Apartat a)**

    $$
    A^2=
    \begin{pmatrix}1&a\\2&-1\end{pmatrix}
    \begin{pmatrix}1&a\\2&-1\end{pmatrix}
    =
    \begin{pmatrix}1+2a&a-a\\2-2&2a+1\end{pmatrix}
    =
    \begin{pmatrix}1+2a&0\\0&1+2a\end{pmatrix}
    $$

    Imposem que el resultat sigui la matriu identitat:

    $$
    \begin{pmatrix}1+2a&0\\0&1+2a\end{pmatrix}
    =
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    Els elements de fora de la diagonal ja coincideixen. Igualant els de la diagonal, $1+2a=1$, és a dir, $\boxed{a=0}$.

    **Apartat b)**

    Si $a=-1$, $A=\begin{pmatrix}1&-1\\2&-1\end{pmatrix}$ i, per l'apartat anterior,

    $$
    A^2=\begin{pmatrix}1+2(-1)&0\\0&1+2(-1)\end{pmatrix}=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I.
    $$

    $$
    A^3=A^2\cdot A=-A=\begin{pmatrix}-1&1\\-2&1\end{pmatrix}
    \qquad
    A^4=A^3\cdot A=-A^2=I=\begin{pmatrix}1&0\\0&1\end{pmatrix}
    $$

    Com que $A\cdot A^3=A^3\cdot A=A^4=I$, la inversa d'$A$ és $A^3$:

    $$
    A^{-1}=A^3=\begin{pmatrix}-1&1\\-2&1\end{pmatrix}
    $$

    Les potències es repeteixen de quatre en quatre. Com que $23=4\cdot5+3$,

    $$
    A^{23}=\left(A^4\right)^5A^3=I\cdot A^3=\begin{pmatrix}-1&1\\-2&1\end{pmatrix}
    $$

    **Comprovació de la inversa:** $\begin{pmatrix}1&-1\\2&-1\end{pmatrix}\begin{pmatrix}-1&1\\-2&1\end{pmatrix}=\begin{pmatrix}-1+2&1-1\\-2+2&2-1\end{pmatrix}=I$.

---

**PAU.AL.25.**
**Quan és invertible un producte?**

*(qüestió 5 de la convocatòria ordinària de 2022, sèrie 2; 2,5 punts)*. Considereu les matrius $P=\begin{pmatrix}0&2&-1\\a&2&3\end{pmatrix}$ i $A=\begin{pmatrix}-1&-2\\0&1\\1&-1\end{pmatrix}$, en què $a$ és un paràmetre real.

- **a)** Trobeu per a quins valors de $a$ és invertible la matriu obtinguda del resultat del producte $P\cdot A$. *[1,5 punts]*
- **b)** Si $a=2$, trobeu la matriu $X$ que satisfà l'equació matricial $P\cdot A+X=I$, en què $I$ denota la matriu identitat d'ordre $2$. *[1 punt]*

??? example "Mostra la solució pas a pas del problema PAU.AL.25"
    **Apartat a)**

    $P$ és d'ordre $2\times3$ i $A$, d'ordre $3\times2$, de manera que $P\cdot A$ és quadrada d'ordre $2$:

    $$
    P\cdot A=
    \begin{pmatrix}
    0\cdot(-1)+2\cdot0+(-1)\cdot1&0\cdot(-2)+2\cdot1+(-1)\cdot(-1)\\
    a\cdot(-1)+2\cdot0+3\cdot1&a\cdot(-2)+2\cdot1+3\cdot(-1)
    \end{pmatrix}
    $$

    $$
    P\cdot A=
    \begin{pmatrix}
    -1&3\\
    3-a&-2a-1
    \end{pmatrix}
    $$

    Esglaonem: el primer pivot és $-1$ i fem zero a sota sense dividir:

    $$
    \begin{pmatrix}
    -1&3\\
    3-a&-2a-1
    \end{pmatrix}
    \xrightarrow{F_2=F_2+(3-a)F_1}
    \begin{pmatrix}
    -1&3\\
    0&-2a-1+3(3-a)
    \end{pmatrix}
    =
    \begin{pmatrix}
    -1&3\\
    0&8-5a
    \end{pmatrix}
    $$

    La matriu no té inversa si apareix una fila de zeros, és a dir, si $8-5a=0$. Per tant, $P\cdot A$ és invertible per a tot $a\neq\dfrac85$.

    **Apartat b)**

    Si $a=2$, $P\cdot A=\begin{pmatrix}-1&3\\1&-5\end{pmatrix}$. Aïllem $X$ restant $P\cdot A$ als dos membres:

    $$
    X=I-P\cdot A=
    \begin{pmatrix}1&0\\0&1\end{pmatrix}
    -
    \begin{pmatrix}-1&3\\1&-5\end{pmatrix}
    =
    \boxed{\begin{pmatrix}2&-3\\-1&6\end{pmatrix}}
    $$

---

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

??? example "Mostra la solució pas a pas del problema PAU.AL.26"
    $A$ multiplica $X$ per l'esquerra i $B$, per la dreta. Si totes dues són invertibles,

    $$
    AXB=C
    \quad\Longrightarrow\quad
    X=A^{-1}CB^{-1}.
    $$

    Calculem les inverses pel mètode de Gauss-Jordan:

    $$
    \left(
    \begin{array}{cc|cc}
    1&0&1&0\\
    1&1&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{cc|cc}
    1&0&1&0\\
    0&1&-1&1
    \end{array}
    \right)
    \qquad
    A^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}
    $$

    $$
    \left(
    \begin{array}{cc|cc}
    1&2&1&0\\
    -1&-3&0&1
    \end{array}
    \right)
    \xrightarrow{F_2=F_2+F_1}
    \left(
    \begin{array}{cc|cc}
    1&2&1&0\\
    0&-1&1&1
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_1=F_1+2F_2}
    \left(
    \begin{array}{cc|cc}
    1&0&3&2\\
    0&-1&1&1
    \end{array}
    \right)
    \xrightarrow{F_2=-F_2}
    \left(
    \begin{array}{cc|cc}
    1&0&3&2\\
    0&1&-1&-1
    \end{array}
    \right)
    \qquad
    B^{-1}=\begin{pmatrix}3&2\\-1&-1\end{pmatrix}
    $$

    Ara multipliquem respectant l'ordre:

    $$
    A^{-1}C=
    \begin{pmatrix}1&0\\-1&1\end{pmatrix}
    \begin{pmatrix}-1&-2\\-3&-8\end{pmatrix}
    =
    \begin{pmatrix}-1&-2\\-2&-6\end{pmatrix}
    $$

    $$
    X=\left(A^{-1}C\right)B^{-1}=
    \begin{pmatrix}-1&-2\\-2&-6\end{pmatrix}
    \begin{pmatrix}3&2\\-1&-1\end{pmatrix}
    =
    \begin{pmatrix}-1&0\\0&2\end{pmatrix}
    $$

    El resultat té la forma demanada, amb $a=-1$, $b=0$ i $c=2$:

    $$
    \boxed{X=\begin{pmatrix}-1&0\\0&2\end{pmatrix}}
    $$

    **Comprovació:** $AX=\begin{pmatrix}-1&0\\-1&2\end{pmatrix}$ i $AXB=\begin{pmatrix}-1&-2\\-1-2&-2-6\end{pmatrix}=\begin{pmatrix}-1&-2\\-3&-8\end{pmatrix}=C$.

    !!! tip "Un altre camí"
        També es pot resoldre per coeficients: calcular $AXB$ amb $a$, $b$ i $c$ i igualar-lo a $C$. Surten quatre equacions lineals amb tres incògnites, que han de ser compatibles.

---

**PAU.AL.27.**
**Matrius que commuten**

*(qüestió 5 de la convocatòria extraordinària de 2022, sèrie 3; 2,5 punts)*. Considereu les matrius $A=\begin{pmatrix}1&-1\\0&2\end{pmatrix}$ i $B=\begin{pmatrix}2&1\\0&a\end{pmatrix}$, en què $a$ és un paràmetre real.

- **a)** Calculeu per a quin valor de $a$ les dues matrius commuten, és a dir, per a quin valor de $a$ es compleix que $A\cdot B=B\cdot A$. Comproveu que per a aquest valor de $a$ se satisfà que $A\cdot B=2\cdot I$, en què $I$ és la matriu identitat d'ordre dos. *[1,25 punts]*
- **b)** Per al valor de $a$ trobat a l'apartat anterior, calculeu les matrius inverses de les matrius $A$ i $B$. Podeu aplicar la relació $A\cdot B=2\cdot I$. *[1,25 punts]*

??? example "Mostra la solució pas a pas del problema PAU.AL.27"
    **Apartat a)**

    $$
    A\cdot B=
    \begin{pmatrix}1&-1\\0&2\end{pmatrix}
    \begin{pmatrix}2&1\\0&a\end{pmatrix}
    =
    \begin{pmatrix}2&1-a\\0&2a\end{pmatrix}
    $$

    $$
    B\cdot A=
    \begin{pmatrix}2&1\\0&a\end{pmatrix}
    \begin{pmatrix}1&-1\\0&2\end{pmatrix}
    =
    \begin{pmatrix}2&0\\0&2a\end{pmatrix}
    $$

    La condició $A\cdot B=B\cdot A$ és la igualtat de matrius

    $$
    \begin{pmatrix}2&1-a\\0&2a\end{pmatrix}
    =
    \begin{pmatrix}2&0\\0&2a\end{pmatrix}
    $$

    Les posicions $(1,1)$, $(2,1)$ i $(2,2)$ coincideixen per a qualsevol $a$. Igualant la posició $(1,2)$, $1-a=0$, és a dir, $\boxed{a=1}$.

    Per a aquest valor,

    $$
    A\cdot B=\begin{pmatrix}2&0\\0&2\end{pmatrix}=2\cdot I.
    $$

    **Apartat b)**

    Dividim per $2$ la igualtat $A\cdot B=2I$:

    $$
    A\cdot\left(\tfrac12B\right)=I.
    $$

    Com que $A$ i $B$ commuten, també $\left(\tfrac12B\right)\cdot A=\tfrac12\,B\cdot A=\tfrac12\,A\cdot B=I$. Per tant, $\tfrac12B$ és la inversa d'$A$ i, pel mateix raonament, $\tfrac12A$ és la inversa de $B$:

    $$
    A^{-1}=\frac12B=\begin{pmatrix}1&\frac12\\[2pt]0&\frac12\end{pmatrix}
    \qquad
    B^{-1}=\frac12A=\begin{pmatrix}\frac12&-\frac12\\[2pt]0&1\end{pmatrix}
    $$

    **Comprovació:** $A\cdot A^{-1}=\begin{pmatrix}1&\frac12-\frac12\\0&1\end{pmatrix}=I$ i $B\cdot B^{-1}=\begin{pmatrix}1&-1+1\\0&1\end{pmatrix}=I$.

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
