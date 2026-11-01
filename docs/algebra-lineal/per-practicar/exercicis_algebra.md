# Exercicis i problemes

En aquesta pàgina tens els enunciats del bloc d'àlgebra lineal. Resol cada activitat al quadern i desplega'n la solució només quan vulguis comprovar el procediment.

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
Comprova si $(x,y,z)=(1,2,-1)$ és solució del sistema

$$
\begin{cases}
x+y+z=2\\
2x-y+z=-1\\
x+2y-z=6
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.2"
    Substituïm $x=1$, $y=2$ i $z=-1$ en totes les equacions:

    $$
    1+2-1=2,
    $$

    $$
    2\cdot1-2-1=-1,
    $$

    $$
    1+2\cdot2-(-1)=6.
    $$

    Les tres igualtats són certes. Per tant, $(1,2,-1)$ és solució del sistema.

---

**3.3.**
Resol el sistema esglaonat següent i classifica'l:

$$
\begin{cases}
x-2y+z=-13\\
y+3z=1\\
2z=-4
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.3"
    Resolem de baix cap amunt:

    $$
    2z=-4\Rightarrow z=-2,
    $$

    $$
    y+3(-2)=1\Rightarrow y=7,
    $$

    $$
    x-2\cdot7-2=-13\Rightarrow x=3.
    $$

    La solució és $\boxed{(x,y,z)=(3,7,-2)}$. Com que és única, el sistema és compatible determinat.

### Mètode de Gauss

En aquests exercicis hauràs d'intercanviar files quan el pivot sigui zero i combinar files amb els dos coeficients per evitar fraccions.

**3.4.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
3y+2z=4\\
2x+3y-z=9\\
3x+2y+2z=5
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.4"
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

**3.5.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2x+y+z=6\\
4x+2y-z=3\\
3x-2y+2z=14
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.5"
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

**3.6.**
Resol pel mètode de Gauss i classifica el sistema. Si té infinites solucions, escriu-ne dues de particulars.

$$
\begin{cases}
2x+3y-z=1\\
3x+5y+z=3\\
7x+11y-z=5
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.6"
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

**3.7.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
2y+3z=4\\
3x+2y+3z=5\\
2x+4y+6z=7
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.7"
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

**3.8.**
Una inversora destina $12\,000\,€$ a comprar accions de tres empreses, A, B i C. Al cap d'un any, les accions d'A s'han revaloritzat un $5\,\%$, les de B han perdut un $2\,\%$ i les de C s'han revaloritzat un $8\,\%$. La quantitat invertida en A és igual a la suma de les quantitats invertides en B i C.

**a)** Si el guany total ha estat de $380\,€$, quant ha invertit en cada empresa?

**b)** Un amic seu afirma que, amb les mateixes condicions, ell va acabar l'any amb una pèrdua de $60\,€$. És possible? Justifica-ho.

??? example "Mostra la solució pas a pas de l'exercici 3.8"
    Anomenem $x$, $y$ i $z$ els euros invertits en A, B i C, respectivament.

    **Apartat a)**

    Una pèrdua del $2\,\%$ és una variació de $-0{,}02y$. El guany total és $0{,}05x-0{,}02y+0{,}08z=380$, i multiplicant per $100$ obtenim una equació sense decimals:

    $$
    \begin{cases}
    x+y+z=12\,000\\
    5x-2y+8z=38\,000\\
    x-y-z=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    5&-2&8&38\,000\\
    1&-1&-1&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-5F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&-7&3&-22\,000\\
    0&-2&-2&-12\,000
    \end{array}
    \right)
    $$

    Dividim la tercera fila entre $-2$ i la passem a la segona posició, perquè el pivot $1$ simplifica els càlculs:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&-7&3&-22\,000\\
    0&-2&-2&-12\,000
    \end{array}
    \right)
    \xrightarrow{\substack{F_3=F_3/(-2)\\F_2\leftrightarrow F_3}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&1&6\,000\\
    0&-7&3&-22\,000
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&1&6\,000\\
    0&-7&3&-22\,000
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+7F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&1&6\,000\\
    0&0&10&20\,000
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=2000$, $y=6000-2000=4000$ i $x=12\,000-4000-2000=6000$.

    El sistema és compatible determinat. Ha invertit $6000\,€$ en A, $4000\,€$ en B i $2000\,€$ en C.

    **Comprovació:** $0{,}05\cdot6000-0{,}02\cdot4000+0{,}08\cdot2000=300-80+160=380\,€$.

    **Apartat b)**

    Una pèrdua de $60\,€$ vol dir $0{,}05x-0{,}02y+0{,}08z=-60$, és a dir, $5x-2y+8z=-6000$. Amb les mateixes transformacions, la segona fila inicial passa a ser $(0\;\,{-7}\;\,3\mid -66\,000)$ i la matriu esglaonada és

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&12\,000\\
    0&1&1&6\,000\\
    0&0&10&-24\,000
    \end{array}
    \right)
    $$

    Obtenim $z=-2400$, $y=6000-(-2400)=8400$ i $x=6000$.

    Matemàticament, el sistema és compatible determinat, però la solució no és vàlida en el context: no es pot invertir una quantitat negativa en l'empresa C. Per tant, **no és possible** acabar amb una pèrdua de $60\,€$ amb aquestes condicions.

---

**3.9.**
Un patinet elèctric es ven a $726\,€$, IVA del $21\,\%$ inclòs. El preu sense IVA es reparteix en tres parts: el cost de fabricació, el cost de transport i distribució i el benefici de la botiga. El cost de transport és el $20\,\%$ del cost de fabricació, i el benefici de la botiga és el $25\,\%$ de la suma dels costos de fabricació i de transport.

**a)** Calcula el cost de fabricació, el cost de transport i el benefici de la botiga.

**b)** Durant les rebaixes, la botiga fa un descompte del $10\,\%$ sobre el preu final, IVA inclòs. Si els costos de fabricació i de transport no canvien, quin percentatge del seu benefici perd la botiga?

??? example "Mostra la solució pas a pas de l'exercici 3.9"
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

**3.10.**
En una factura de la llum, l'energia es cobra per trams horaris: $0{,}30\,€$ el $\text{kWh}$ en hores punta, $0{,}15\,€$ en hores pla i $0{,}10\,€$ en hores vall. Un mes, una família ha consumit $300\,\text{kWh}$. La companyia informa que el $60\,\%$ del consum ha estat en hores punta i pla, i que el $40\,\%$ ha estat en hores vall.

**a)** Planteja el sistema, resol-lo pel mètode de Gauss i classifica'l. Es pot saber quants $\text{kWh}$ s'han consumit en cada tram?

**b)** La factura indica, a més, que l'import de l'energia ha estat de $48\,€$. Substitueix la condició redundant per aquesta dada i calcula el consum de cada tram.

**c)** Quin percentatge de l'import de l'energia correspon a les hores punta?

??? example "Mostra la solució pas a pas de l'exercici 3.10"
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

**3.11.**
Una compra al supermercat costa $100\,€$ sense IVA. Inclou productes bàsics, amb un IVA del $4\,\%$, altres aliments, amb un IVA del $10\,\%$, i productes de neteja, amb un IVA del $21\,\%$. L'import sense IVA dels aliments al $10\,\%$ és igual a la suma dels imports dels productes bàsics i de neteja. En cada apartat, afegeix només la dada indicada a les dues condicions anteriors, resol el sistema pel mètode de Gauss, classifica'l i interpreta'n el resultat.

**a)** El tiquet indica que l'import total, IVA inclòs, és de $112{,}10\,€$.

**b)** El tiquet indica que els aliments al $10\,\%$ representen el $50\,\%$ de l'import sense IVA.

**c)** Un altre tiquet, amb les mateixes condicions inicials, indica que els aliments al $10\,\%$ representen el $55\,\%$ de l'import sense IVA.

??? example "Mostra la solució pas a pas de l'exercici 3.11"
    Anomenem $x$, $y$ i $z$ els imports sense IVA, en euros, dels productes bàsics, dels aliments al $10\,\%$ i dels productes de neteja, respectivament.

    Les dues condicions comunes són $x+y+z=100$ i $y=x+z$, és a dir, $x-y+z=0$.

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
    1&-1&1&0\\
    4&10&21&1210
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-4F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&6&17&810
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&6&17&810
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&0&17&510
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=30$, $y=50$ i $x=100-50-30=20$.

    El sistema és **compatible determinat**: la compra inclou $20\,€$ de productes bàsics, $50\,€$ d'altres aliments i $30\,€$ de productes de neteja, sense IVA.

    **Comprovació:** $1{,}04\cdot20+1{,}10\cdot50+1{,}21\cdot30=20{,}80+55+36{,}30=112{,}10\,€$.

    **Apartat b)**

    El $50\,\%$ de $100\,€$ és $50\,€$, de manera que la nova equació és $y=50$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    1&-1&1&0\\
    0&1&0&50
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&1&0&50
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&1&0&50
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que la dada no aporta informació nova: si $y=x+z$ i el total és $100$, els aliments al $10\,\%$ són necessàriament la meitat de la compra. Prenem $z=\lambda$:

    $$
    y=50,
    \qquad
    x=100-50-\lambda=50-\lambda.
    $$

    $$
    \boxed{(x,y,z)=(50-\lambda,\,50,\,\lambda)}
    $$

    El sistema és **compatible indeterminat**: no es pot saber com es reparteixen els altres $50\,€$ entre productes bàsics i de neteja. En el context, $0\leq\lambda\leq50$.

    **Apartat c)**

    Ara la nova equació és $y=55$. Amb les mateixes transformacions:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    1&-1&1&0\\
    0&1&0&55
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&1&0&55
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&1&0&55
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3+F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&100\\
    0&-2&0&-100\\
    0&0&0&10
    \end{array}
    \right)
    $$

    L'última fila representa $0=10$, que és una contradicció. El sistema és **incompatible**: aquest tiquet no és coherent amb les condicions inicials i, per tant, conté algun error.

    | Dada afegida | Tipus de sistema | Interpretació |
    |:--|:--|:--|
    | Total amb IVA de $112{,}10\,€$ | SCD | Hi ha una única distribució de la compra. |
    | Aliments al $10\,\%$: $50\,\%$ del total | SCI | La dada és redundant: només se sap l'import dels aliments al $10\,\%$. |
    | Aliments al $10\,\%$: $55\,\%$ del total | SI | La dada contradiu les condicions inicials. |
