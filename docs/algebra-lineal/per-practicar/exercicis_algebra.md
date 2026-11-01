# Exercicis i problemes

En aquesta pàgina tens els enunciats del bloc d'àlgebra lineal. Resol cada activitat al quadern i desplega'n la solució només quan vulguis comprovar el procediment.

!!! tip "Com treballar"
    En aplicar el mètode de Gauss, anota cada transformació de fila, mantén sempre el mateix ordre de les incògnites i acaba classificant el sistema.

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

**3.4.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
x+y+z=2\\
2x-y+z=-1\\
x+2y-z=6
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.4"
    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    2&-1&1&-1\\
    1&2&-1&6
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&-3&-1&-5\\
    0&1&-2&4
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&-3&-1&-5\\
    0&1&-2&4
    \end{array}
    \right)
    \xrightarrow{\substack{F_2\leftrightarrow F_3\\F_3=F_3+3F_2}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&0&-7&7
    \end{array}
    \right)
    $$

    Per substitució enrere obtenim $z=-1$, $y=2$ i $x=1$. Per tant,

    $$
    \boxed{(x,y,z)=(1,2,-1)}.
    $$

    El sistema és compatible determinat.

---

**3.5.**
Resol pel mètode de Gauss. Durant l'esglaonament hauràs d'intercanviar dues files.

$$
\begin{cases}
x+y+z=4\\
2x+2y-z=5\\
x-y+2z=5
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.5"
    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    2&2&-1&5\\
    1&-1&2&5
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&0&-3&-3\\
    0&-2&1&1
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&0&-3&-3\\
    0&-2&1&1
    \end{array}
    \right)
    \xrightarrow{F_2\leftrightarrow F_3}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&1&1\\
    0&0&-3&-3
    \end{array}
    \right)
    $$

    De l'última fila obtenim $z=1$; de la segona, $-2y+1=1$, és a dir, $y=0$; i de la primera, $x+1=4$, de manera que $x=3$.

    $$
    \boxed{(x,y,z)=(3,0,1)}.
    $$

    El sistema és compatible determinat.

---

**3.6.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
x+y+z=4\\
x-y+z=2\\
2x+2z=6
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.6"
    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    1&-1&1&2\\
    2&0&2&6
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-2
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-2
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&0
    \end{array}
    \right)
    $$

    Obtenim una fila de zeros. Prenem $z=\lambda$, amb $\lambda\in\mathbb{R}$. Aleshores $y=1$ i $x=3-\lambda$.

    $$
    \boxed{(x,y,z)=(3-\lambda,1,\lambda),\qquad \lambda\in\mathbb{R}.}
    $$

    El sistema és compatible indeterminat.

---

**3.7.**
Resol pel mètode de Gauss i classifica el sistema:

$$
\begin{cases}
x+y+z=4\\
x-y+z=2\\
2x+2z=7
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.7"
    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    1&-1&1&2\\
    2&0&2&7
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-1
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&-2&0&-1
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&1
    \end{array}
    \right)
    $$

    L'última fila representa $0=1$, que és una contradicció. El sistema és incompatible i no té solució.

---

**3.8.**
Resol pel mètode de Gauss i classifica el sistema. Per començar, posa com a primera fila una equació amb el coeficient de $x$ igual a $1$.

$$
\begin{cases}
2x+y-z=0\\
x-3y+2z=11\\
3x+2y+z=7
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.8"
    Intercanviem les dues primeres files i fem zeros a la primera columna:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&0\\
    1&-3&2&11\\
    3&2&1&7
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    1&-3&2&11\\
    2&1&-1&0\\
    3&2&1&7
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&-3&2&11\\
    2&1&-1&0\\
    3&2&1&7
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    1&-3&2&11\\
    0&7&-5&-22\\
    0&11&-5&-26
    \end{array}
    \right)
    $$

    Per evitar fraccions, eliminem la $y$ de la tercera fila combinant les dues últimes:

    $$
    \left(
    \begin{array}{ccc|c}
    1&-3&2&11\\
    0&7&-5&-22\\
    0&11&-5&-26
    \end{array}
    \right)
    \xrightarrow{F_3=7F_3-11F_2}
    \left(
    \begin{array}{ccc|c}
    1&-3&2&11\\
    0&7&-5&-22\\
    0&0&20&60
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    20z=60\Rightarrow z=3,
    $$

    $$
    7y-5\cdot3=-22\Rightarrow 7y=-7\Rightarrow y=-1,
    $$

    $$
    x-3(-1)+2\cdot3=11\Rightarrow x=2.
    $$

    $$
    \boxed{(x,y,z)=(2,-1,3)}.
    $$

    El sistema és compatible determinat. Podem comprovar-ho substituint a la tercera equació: $3\cdot2+2(-1)+3=7$.

---

**3.9.**
Resol pel mètode de Gauss i classifica el sistema. Si té infinites solucions, escriu-ne dues de particulars.

$$
\begin{cases}
x+2y-z=3\\
2x-y+3z=1\\
3x+y+2z=4
\end{cases}
$$

??? example "Mostra la solució pas a pas de l'exercici 3.9"
    $$
    \left(
    \begin{array}{ccc|c}
    1&2&-1&3\\
    2&-1&3&1\\
    3&1&2&4
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    1&2&-1&3\\
    0&-5&5&-5\\
    0&-5&5&-5
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&2&-1&3\\
    0&-5&5&-5\\
    0&-5&5&-5
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&2&-1&3\\
    0&-5&5&-5\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que la tercera equació no aporta informació nova: és la suma de les dues primeres. Queden dues equacions per a tres incògnites.

    Dividint la segona fila entre $-5$, obtenim $y-z=1$. Prenem $z=\lambda$, amb $\lambda\in\mathbb{R}$:

    $$
    y=1+\lambda,
    \qquad
    x=3-2(1+\lambda)+\lambda=1-\lambda.
    $$

    $$
    \boxed{(x,y,z)=(1-\lambda,\,1+\lambda,\,\lambda),\qquad \lambda\in\mathbb{R}.}
    $$

    El sistema és compatible indeterminat. Dues solucions particulars:

    - si $\lambda=0$, $(x,y,z)=(1,1,0)$;
    - si $\lambda=1$, $(x,y,z)=(0,2,1)$.

---

**3.10.**
Considera el sistema

$$
\begin{cases}
x-y+2z=1\\
2x+y-z=3\\
x+2y-3z=4
\end{cases}
$$

**a)** Resol-lo pel mètode de Gauss i classifica'l.

**b)** Quin valor hauria de tenir el terme independent de la tercera equació perquè el sistema fos compatible? Quin tipus de sistema obtindríem?

??? example "Mostra la solució pas a pas de l'exercici 3.10"
    **Apartat a)**

    $$
    \left(
    \begin{array}{ccc|c}
    1&-1&2&1\\
    2&1&-1&3\\
    1&2&-3&4
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&-1&2&1\\
    0&3&-5&1\\
    0&3&-5&3
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&-1&2&1\\
    0&3&-5&1\\
    0&3&-5&3
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&-1&2&1\\
    0&3&-5&1\\
    0&0&0&2
    \end{array}
    \right)
    $$

    L'última fila representa $0=2$, que és una contradicció. El sistema és **incompatible** i no té solució.

    **Apartat b)**

    Anomenem $k$ el terme independent de la tercera equació. Amb les mateixes transformacions, la tercera fila esdevé successivament $(0\;\,3\;\,{-5}\mid k-1)$ i $(0\;\,0\;\,0\mid k-2)$.

    Perquè no hi hagi contradicció cal que $k-2=0$, és a dir, $k=2$. En aquest cas, l'última fila és de zeros, queden dues equacions per a tres incògnites i el sistema és **compatible indeterminat**.

### Problemes de sistemes

**3.11.**
Un cinema ha venut $200$ entrades per a una sessió. Les entrades normals costen $8\,€$, les reduïdes $5\,€$ i les infantils $4\,€$, i la recaptació total ha estat de $1300\,€$. A més, el nombre d'entrades reduïdes és el doble del d'entrades infantils. Quantes entrades de cada tipus s'han venut?

??? example "Mostra la solució pas a pas de l'exercici 3.11"
    Anomenem:

    - $x$: nombre d'entrades normals;
    - $y$: nombre d'entrades reduïdes;
    - $z$: nombre d'entrades infantils.

    Traduïm les condicions de l'enunciat:

    $$
    \begin{cases}
    x+y+z=200\\
    8x+5y+4z=1300\\
    y-2z=0
    \end{cases}
    $$

    Apliquem el mètode de Gauss:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&200\\
    8&5&4&1300\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-8F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&200\\
    0&-3&-4&-300\\
    0&1&-2&0
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&200\\
    0&-3&-4&-300\\
    0&1&-2&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2\leftrightarrow F_3\\F_3=F_3+3F_2}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&200\\
    0&1&-2&0\\
    0&0&-10&-300
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=30$, $y=2\cdot30=60$ i $x=200-60-30=110$.

    El sistema és compatible determinat. S'han venut $110$ entrades normals, $60$ de reduïdes i $30$ d'infantils.

    **Comprovació:** $110+60+30=200$ entrades i $8\cdot110+5\cdot60+4\cdot30=880+300+120=1300\,€$.

---

**3.12.**
Una cafeteria ofereix tres menús: el menú A costa $6\,€$, el B $8\,€$ i el C $10\,€$. Un dia ha venut $50$ menús i ha recaptat $400\,€$. El responsable també anota que el nombre de menús B més el doble del nombre de menús C és $50$.

**a)** Planteja el sistema, resol-lo pel mètode de Gauss i classifica'l. Es pot saber quants menús de cada tipus s'han venut?

**b)** Quantes distribucions són possibles si s'ha venut, com a mínim, un menú de cada tipus?

**c)** Si s'han venut $10$ menús A, quants se n'han venut de cada un dels altres tipus?

??? example "Mostra la solució pas a pas de l'exercici 3.12"
    Anomenem $x$, $y$ i $z$ el nombre de menús A, B i C venuts, respectivament.

    **Apartat a)**

    $$
    \begin{cases}
    x+y+z=50\\
    6x+8y+10z=400\\
    y+2z=50
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&50\\
    6&8&10&400\\
    0&1&2&50
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-6F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&50\\
    0&2&4&100\\
    0&1&2&50
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&50\\
    0&2&4&100\\
    0&1&2&50
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&50\\
    0&2&4&100\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que l'anotació del responsable no aporta informació nova: es dedueix de les dues primeres condicions.

    De la segona fila, $2y+4z=100$, és a dir, $y=50-2z$. Prenem $z=\lambda$:

    $$
    y=50-2\lambda,
    \qquad
    x=50-(50-2\lambda)-\lambda=\lambda.
    $$

    $$
    \boxed{(x,y,z)=(\lambda,\,50-2\lambda,\,\lambda)}
    $$

    El sistema és **compatible indeterminat**: amb aquestes dades no es pot saber quants menús de cada tipus s'han venut.

    **Apartat b)**

    Les incògnites són nombres de menús, per tant $\lambda$ ha de ser un nombre enter. Si s'ha venut com a mínim un menú de cada tipus:

    $$
    \lambda\geq 1
    \quad\text{i}\quad
    50-2\lambda\geq 1\Rightarrow \lambda\leq 24{,}5.
    $$

    Per tant, $\lambda$ pot valer $1,2,\ldots,24$: hi ha $24$ distribucions possibles.

    **Apartat c)**

    Si $x=10$, aleshores $\lambda=10$ i la solució és $(10,30,10)$: s'han venut $30$ menús B i $10$ menús C.

    **Comprovació:** $10+30+10=50$ menús i $6\cdot10+8\cdot30+10\cdot10=60+240+100=400\,€$.

---

**3.13.**
Una persona inverteix $10\,000\,€$ en tres productes financers, A, B i C, que donen una rendibilitat anual del $2\,\%$, el $3\,\%$ i el $5\,\%$, respectivament. La quantitat invertida en A és igual a la suma de les quantitats invertides en B i C.

**a)** Si al cap d'un any el benefici total és de $290\,€$, quant ha invertit en cada producte?

**b)** Un assessor afirma que, amb les mateixes condicions, el benefici podria haver estat de $400\,€$. És possible? Justifica-ho.

??? example "Mostra la solució pas a pas de l'exercici 3.13"
    Anomenem $x$, $y$ i $z$ els euros invertits en A, B i C, respectivament.

    **Apartat a)**

    El benefici és $0{,}02x+0{,}03y+0{,}05z=290$. Multiplicant per $100$ obtenim una equació sense decimals:

    $$
    \begin{cases}
    x+y+z=10\,000\\
    2x+3y+5z=29\,000\\
    x-y-z=0
    \end{cases}
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&10\,000\\
    2&3&5&29\,000\\
    1&-1&-1&0
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-2F_1\\F_3=F_3-F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&10\,000\\
    0&1&3&9\,000\\
    0&-2&-2&-10\,000
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&10\,000\\
    0&1&3&9\,000\\
    0&-2&-2&-10\,000
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+2F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&10\,000\\
    0&1&3&9\,000\\
    0&0&4&8\,000
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=2000$, $y=9000-3\cdot2000=3000$ i $x=10\,000-3000-2000=5000$.

    El sistema és compatible determinat. Ha invertit $5000\,€$ en A, $3000\,€$ en B i $2000\,€$ en C.

    **Comprovació:** $0{,}02\cdot5000+0{,}03\cdot3000+0{,}05\cdot2000=100+90+100=290\,€$.

    **Apartat b)**

    Només canvia el terme independent de la segona equació, que passa a ser $40\,000$. Amb les mateixes transformacions, la matriu esglaonada és

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&10\,000\\
    0&1&3&20\,000\\
    0&0&4&30\,000
    \end{array}
    \right)
    $$

    Obtenim $z=7500$, $y=20\,000-3\cdot7500=-2500$ i $x=10\,000-(-2500)-7500=5000$.

    Matemàticament, el sistema és compatible determinat, però la solució no és vàlida en el context: no es pot invertir una quantitat negativa en el producte B. Per tant, **no és possible** obtenir un benefici de $400\,€$ amb aquestes condicions.

---

**3.14.**
Un forn ha elaborat $150$ peces entre croissants, ensaïmades i magdalenes. El nombre de croissants és igual al nombre d'ensaïmades i magdalenes juntes. Per completar la informació, el forn disposa de diverses dades. En cada apartat, afegeix només la dada indicada a les dues condicions anteriors, resol el sistema pel mètode de Gauss, classifica'l i interpreta'n el resultat.

**a)** Si es venen totes les peces, amb preus de $2\,€$ el croissant, $3\,€$ l'ensaïmada i $1\,€$ la magdalena, es recapten $315\,€$.

**b)** Cada croissant porta $30\,\text{g}$ de mantega, i cada ensaïmada i cada magdalena, $10\,\text{g}$. En total s'han gastat $3\,\text{kg}$ de mantega.

**c)** Un altre full de control, amb els mateixos consums de mantega, indica que se n'han gastat $3{,}1\,\text{kg}$.

??? example "Mostra la solució pas a pas de l'exercici 3.14"
    Anomenem:

    - $x$: nombre de croissants;
    - $y$: nombre d'ensaïmades;
    - $z$: nombre de magdalenes.

    Les dues condicions comunes són $x+y+z=150$ i $x=y+z$, és a dir, $x-y-z=0$.

    **Apartat a)**

    La recaptació dona l'equació $2x+3y+z=315$:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    1&-1&-1&0\\
    2&3&1&315
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-2F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&1&-1&15
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&1&-1&15
    \end{array}
    \right)
    \xrightarrow{\substack{F_2\leftrightarrow F_3\\F_3=F_3+2F_2}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&1&-1&15\\
    0&0&-4&-120
    \end{array}
    \right)
    $$

    Per substitució enrere: $z=30$, $y=15+30=45$ i $x=150-45-30=75$.

    El sistema és **compatible determinat**: s'han elaborat $75$ croissants, $45$ ensaïmades i $30$ magdalenes.

    **Comprovació:** $75=45+30$ i $2\cdot75+3\cdot45+30=150+135+30=315\,€$.

    **Apartat b)**

    Expressem la mantega en grams: $30x+10y+10z=3000$. Dividint entre $10$, obtenim $3x+y+z=300$.

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    1&-1&-1&0\\
    3&1&1&300
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&-2&-2&-150
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&-2&-2&-150
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&0&0&0
    \end{array}
    \right)
    $$

    La fila de zeros indica que la dada de la mantega no aporta informació nova: es dedueix de les dues condicions inicials. Prenem $z=\lambda$:

    $$
    y=75-\lambda,
    \qquad
    x=150-(75-\lambda)-\lambda=75.
    $$

    $$
    \boxed{(x,y,z)=(75,\,75-\lambda,\,\lambda)}
    $$

    El sistema és **compatible indeterminat**. Sabem que s'han fet $75$ croissants, però no com es reparteixen les altres $75$ peces entre ensaïmades i magdalenes. En el context, $\lambda$ ha de ser un nombre enter entre $0$ i $75$.

    **Apartat c)**

    Ara l'equació és $30x+10y+10z=3100$, és a dir, $3x+y+z=310$. Amb les mateixes transformacions:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    1&-1&-1&0\\
    3&1&1&310
    \end{array}
    \right)
    \xrightarrow{\substack{F_2=F_2-F_1\\F_3=F_3-3F_1}}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&-2&-2&-140
    \end{array}
    \right)
    $$

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&-2&-2&-140
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&150\\
    0&-2&-2&-150\\
    0&0&0&10
    \end{array}
    \right)
    $$

    L'última fila representa $0=10$, que és una contradicció. El sistema és **incompatible**: aquest full de control no és coherent amb les dues condicions inicials i, per tant, conté algun error.

    | Dada afegida | Tipus de sistema | Interpretació |
    |:--|:--|:--|
    | Recaptació de $315\,€$ | SCD | Hi ha una única distribució de les peces. |
    | $3\,\text{kg}$ de mantega | SCI | La dada és redundant: només es pot saber el nombre de croissants. |
    | $3{,}1\,\text{kg}$ de mantega | SI | La dada contradiu les condicions inicials. |
