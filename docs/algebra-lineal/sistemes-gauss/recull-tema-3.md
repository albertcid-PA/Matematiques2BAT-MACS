<!-- Fitxer generat automàticament per scripts/genera_recull_tema_3.py. -->

<div class="pdf-topic-cover" markdown="1">

# 3. Sistemes i mètode de Gauss {.pdf-topic-collection}

<p class="pdf-topic-subtitle">Matemàtiques Aplicades a les Ciències Socials II</p>

<div class="pdf-topic-toc" markdown="1">

## Continguts

1. [Sistemes d'equacions lineals](#sistemes-dequacions-lineals)
2. [Mètode de Gauss](#metode-de-gauss)
3. [Problemes de sistemes](#problemes-de-sistemes)

</div>

</div>

## Sistemes d'equacions lineals

Un sistema d'equacions permet expressar diverses condicions que s'han de complir alhora. En aquest tema treballarem amb sistemes de coeficients numèrics i aprendrem a decidir si tenen una solució, infinites solucions o cap solució.

### 1. Equacions lineals

!!! abstract "Definició: equació lineal"
    Una **equació lineal** amb les incògnites $x_1,x_2,\ldots,x_n$ és una expressió de la forma

    $$
    a_1x_1+a_2x_2+\cdots+a_nx_n=b,
    $$

    on $a_1,a_2,\ldots,a_n$ i $b$ són nombres reals. Els nombres $a_i$ són els **coeficients** i $b$ és el **terme independent**.

En una equació lineal, les incògnites només apareixen elevades a $1$. No hi pot haver productes d'incògnites, potències, arrels ni incògnites en un denominador.

| Expressió | És lineal? | Motiu |
|---|:---:|---|
| $2x-3y+z=5$ | Sí | Les incògnites són de grau $1$. |
| $xy+y=1$ | No | Hi apareix el producte $xy$. |
| $x^2+y=4$ | No | Hi apareix $x^2$. |
| $\dfrac{x}{2}-3y=0$ | Sí | $\dfrac{x}{2}$ és el mateix que $\dfrac12x$. |

### 2. Sistemes i solucions

!!! abstract "Definició: sistema d'equacions lineals"
    Un **sistema d'equacions lineals** és un conjunt d'equacions lineals que s'han de complir simultàniament. Una **solució** és un conjunt ordenat de valors que verifica totes les equacions.

Per exemple,

$$
\begin{cases}
x+y=5\\
x-y=1
\end{cases}
$$

té la solució $(x,y)=(3,2)$, perquè

$$
3+2=5
\qquad\text{i}\qquad
3-2=1.
$$

!!! warning "Cal comprovar totes les equacions"
    Uns valors només són solució del sistema si verifiquen **totes** les equacions. L'ordre també és important: en $(x,y)=(3,2)$, el primer valor correspon a $x$ i el segon, a $y$.

El nombre d'equacions i el nombre d'incògnites no permeten saber, per si sols, quantes solucions té el sistema. Per exemple, un sistema de tres equacions i tres incògnites pot tenir una solució, infinites solucions o cap solució.

### 3. Classificació segons el nombre de solucions

Un sistema lineal només pot ser d'un dels tres tipus següents:

| Classificació | Nombre de solucions | Abreviació |
|---|---:|:---:|
| Sistema compatible determinat | Una | **SCD** |
| Sistema compatible indeterminat | Infinites | **SCI** |
| Sistema incompatible | Cap | **SI** |

Un sistema és **compatible** si té alguna solució. Per això tant els SCD com els SCI són sistemes compatibles.

#### 3.1 Sistema compatible determinat

El sistema

$$
\begin{cases}
x+y=5\\
x-y=1
\end{cases}
$$

té una única solució: $(x,y)=(3,2)$. Per tant, és un **sistema compatible determinat**.

#### 3.2 Sistema compatible indeterminat

En el sistema

$$
\begin{cases}
x+y=4\\
2x+2y=8
\end{cases}
$$

la segona equació és el doble de la primera. Totes dues expressen la mateixa condició i hi ha infinites solucions.

Si prenem $y=\lambda$, obtenim

$$
x=4-\lambda.
$$

Per tant, el conjunt de solucions és

$$
\boxed{(x,y)=(4-\lambda,\lambda),\qquad \lambda\in\mathbb{R}.}
$$

El sistema és **compatible indeterminat**.

#### 3.3 Sistema incompatible

En el sistema

$$
\begin{cases}
x+y=4\\
2x+2y=10
\end{cases}
$$

el doble de la primera equació seria $2x+2y=8$, però la segona exigeix que $2x+2y=10$. Les dues condicions es contradiuen. El sistema no té cap solució i és **incompatible**.



### 4. Quina informació aporten les equacions?

En un sistema, una equació pot aportar informació nova, repetir una condició anterior o contradir-la.

| Relació entre les equacions | Què significa? | Efecte possible |
|---|---|---|
| Condicions independents | Cada equació aporta informació nova. | Pot permetre obtenir una solució única. |
| Condició redundant | Una equació es dedueix de les altres. | Pot quedar alguna incògnita lliure. L'equació es pot eliminar perquè no aporta informació. |
| Condicions contradictòries | Les equacions es contradiuen i no es poden satisfer totes alhora. | El sistema no té solució. |

Aquestes relacions es veuen amb claredat després d'aplicar el mètode de Gauss:

- una fila de zeros representa una condició redundant;
- una igualtat impossible, com ara $0=5$, representa una contradicció;
- si podem determinar totes les incògnites, la solució és única.

!!! note "Abast del tema"
    En aquest tema no discutirem sistemes que continguin paràmetres en els coeficients o en els termes independents. La lletra $\lambda$ només s'utilitzarà per expressar les infinites solucions d'un SCI.

### 5. Sistemes equivalents

!!! abstract "Definició: sistemes equivalents"
    Dos sistemes són **equivalents** si tenen exactament les mateixes solucions.

Podem transformar un sistema en un altre d'equivalent mitjançant aquestes operacions:

1. Intercanviar dues equacions.
2. Multiplicar una equació per un nombre diferent de zero.
3. Substituir una equació per la suma d'aquesta equació i un múltiple d'una altra.

Per indicar les equacions, escriurem $E_1,E_2,E_3,\ldots$ L'operació s'escriu damunt de la fletxa que uneix el sistema inicial amb el sistema transformat.

<div class="pdf-topic-keep-together" markdown="1">

!!! example "Exemple. Obtenció d'un sistema equivalent"
    Partim del sistema i restem la primera equació a la segona:

    $$
    \begin{cases}
    x+y=5\\
    x-y=1
    \end{cases}
    \xrightarrow{E_2=E_2-E_1}
    \begin{cases}
    x+y=5\\
    -2y=-4
    \end{cases}
    $$

    La transformació $E_2=E_2-E_1$ substitueix la segona equació per la diferència entre la segona i la primera; la primera equació no canvia.

    El segon sistema és equivalent al primer, però és més fàcil de resoldre. Obtenim $y=2$ i, substituint a la primera equació, $x=3$.

</div>

### 6. Sistemes esglaonats

Un sistema està **esglaonat** quan, a mesura que baixem, cada equació comença més a la dreta que l'anterior. Per exemple,

$$
\begin{cases}
x-2y+z=-13\\
y+3z=1\\
2z=-4
\end{cases}
$$

Es resol de baix cap amunt:

$$
2z=-4\Rightarrow z=-2,
$$

$$
y+3(-2)=1\Rightarrow y=7,
$$

$$
x-2\cdot7-2=-13\Rightarrow x=3.
$$

Per tant,

$$
\boxed{(x,y,z)=(3,7,-2).}
$$

El mètode de Gauss consisteix a transformar un sistema lineal en un sistema esglaonat equivalent.

<div class="pdf-topic-section-break"></div>

## Mètode de Gauss

El mètode de Gauss transforma un sistema d'equacions lineals en un sistema esglaonat equivalent. Un cop esglaonat, el resolem de baix cap amunt i utilitzem el resultat per classificar-lo com a SCD, SCI o SI.

### 1. Matriu de coeficients i matriu ampliada

Considerem el sistema

$$
\begin{cases}
x+y+z=2\\
2x-y+z=-1\\
x+2y-z=6
\end{cases}
$$

La **matriu de coeficients**, que anomenarem $A$, conté únicament els coeficients de les incògnites, sempre en el mateix ordre:

$$
A=
\begin{pmatrix}
1&1&1\\
2&-1&1\\
1&2&-1
\end{pmatrix}
$$

La columna dels termes independents és

$$
b=
\begin{pmatrix}
2\\
-1\\
6
\end{pmatrix}
$$

Si afegim aquesta columna a la matriu de coeficients, obtenim la **matriu ampliada**, que representem per $(A\mid b)$:

$$
(A\mid b)=
\left(
\begin{array}{ccc|c}
1&1&1&2\\
2&-1&1&-1\\
1&2&-1&6
\end{array}
\right)
$$

Cada fila de la matriu ampliada correspon a una equació. Les primeres columnes contenen els coeficients i la columna situada després de la barra vertical conté els termes independents. Per aplicar el mètode de Gauss treballem amb la matriu ampliada, perquè conserva tota la informació del sistema.

!!! warning "Cal mantenir l'ordre de les incògnites"
    Si l'ordre és $x,y,z$, totes les files han de seguir aquest ordre. Quan una incògnita no apareix en una equació, el seu coeficient és $0$.

    Per exemple, $2x-z=4$ s'ha d'escriure com $2x+0y-z=4$.

<div class="pdf-topic-section-break"></div>

### 2. Transformacions elementals

Les operacions amb equacions es converteixen en operacions amb files:

| Operació | Notació | Condició |
|---|---|---|
| Permutar dues files (intercanviar-les) | $F_i\leftrightarrow F_j$ | Sempre és possible. |
| Multiplicar una fila | $F_i=kF_i$ | Cal que $k\neq0$. |
| Sumar a una fila un múltiple d'una altra (**combinació lineal**) | $F_i=F_i+kF_j$ | Sempre és possible. |

Aquestes transformacions no canvien les solucions del sistema.

!!! tip "Combinació lineal per evitar fraccions"
    Suposem que, en una mateixa columna, el pivot de $F_i$ és $a\neq0$ i el coeficient que volem eliminar de $F_j$ és $b$. En lloc de dividir per $a$, podem fer

    $$
    F_j=aF_j-bF_i.
    $$

    El nou coeficient és $ab-ba=0$. La nova fila és una **combinació lineal** de les dues files anteriors i ens permet mantenir nombres enters durant l'esglaonament.

    Per exemple, resolem matricialment el sistema

    $$
    \begin{cases}
    2x+y-z=1\\
    3x-y+2z=7\\
    x+2y+z=8
    \end{cases}
    $$

    Per anul·lar el coeficient $3$ de $F_2$, podríem fer una operació amb una fracció:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    3&-1&2&7\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_2=F_2-\frac32F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-\frac52&\frac72&\frac{11}{2}\\
    1&2&1&8
    \end{array}
    \right).
    $$

    En canvi, amb la combinació lineal $F_2=2F_2-3F_1$ obtenim una fila equivalent amb coeficients enters:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    3&-1&2&7\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_2=2F_2-3F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    1&2&1&8
    \end{array}
    \right).
    $$

    Continuem l'esglaonament mantenint els coeficients enters:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    1&2&1&8
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-F_1}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&3&3&15
    \end{array}
    \right).
    $$

    Finalment, eliminem el coeficient de $y$ de la tercera fila:

    $$
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&3&3&15
    \end{array}
    \right)
    \xrightarrow{F_3=5F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    2&1&-1&1\\
    0&-5&7&11\\
    0&0&36&108
    \end{array}
    \right).
    $$

    Resolent de baix cap amunt, obtenim $z=3$, $y=2$ i $x=1$.

!!! note "Dependència entre files"
    Durant l'esglaonament, una fila és **dependent** de les altres si es pot obtenir com una combinació d'aquestes files. En aquest cas, no aporta informació nova i pot acabar convertida en una fila completament nul·la:

    $$
    (0\quad 0\quad 0\mid 0).
    $$

    Cal considerar la fila sencera, inclòs el terme independent. Una fila de la forma

    $$
    (0\quad 0\quad 0\mid k),\qquad k\neq0,
    $$

    no és redundant: representa una contradicció i indica que el sistema és incompatible.

### 3. Procediment de Gauss

!!! tip "Passos del mètode de Gauss"
    1. Ordena les incògnites sempre de la mateixa manera.
    2. Escriu la matriu ampliada, sense oblidar els zeros.
    3. Tria el primer coeficient no nul com a **pivot**.
    4. Fes zeros sota el pivot. Si una divisió produeix fraccions, utilitza una combinació lineal de files.
    5. Passa a la columna següent i repeteix el procés. Si el pivot és zero, permuta les files.
    6. Quan el sistema estigui esglaonat, resol-lo de baix cap amunt.
    7. Classifica el sistema i justifica la resposta.

No cal convertir els pivots en $1$. Sovint és preferible conservar nombres enters per evitar fraccions durant l'esglaonament.

### 4. Sistema compatible determinat

!!! example "Exemple 1. Una única solució"
    Resolem

    $$
    \begin{cases}
    x+y+z=2\\
    2x-y+z=-1\\
    x+2y-z=6
    \end{cases}
    $$

    Fem zeros sota el primer pivot:

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
    \right).
    $$

    Permutem les dues últimes files i fem zero sota el segon pivot:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&-3&-1&-5
    \end{array}
    \right)
    \xrightarrow{F_3=F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&2\\
    0&1&-2&4\\
    0&0&-7&7
    \end{array}
    \right).
    $$

    El sistema esglaonat és

    $$
    \begin{cases}
    x+y+z=2\\
    y-2z=4\\
    -7z=7
    \end{cases}
    $$

    Resolem de baix cap amunt:

    $$
    z=-1,
    \qquad
    y=2,
    \qquad
    x=1.
    $$

    Per tant,

    $$
    \boxed{(x,y,z)=(1,2,-1).}
    $$

    Hem pogut determinar totes les incògnites i la solució és única. El sistema és **compatible determinat**.

### 5. Permutació i combinació lineal

Si en la posició del pivot hi ha un zero, busquem una fila inferior que tingui un coeficient no nul en aquella columna i permutem les files. Després podem fer combinacions lineals per obtenir zeros sense introduir fraccions.

!!! example "Exemple 2. Permutació i combinació lineal"
    Resolem el sistema

    $$
    \begin{cases}
    2y+z=7\\
    2x-y+z=3\\
    3x+2y-z=4
    \end{cases}
    $$

    El primer coeficient de $F_1$ és $0$. Per obtenir un pivot no nul en la primera columna, permutem $F_1$ i $F_2$:

    $$
    \left(
    \begin{array}{ccc|c}
    0&2&1&7\\
    2&-1&1&3\\
    3&2&-1&4
    \end{array}
    \right)
    \xrightarrow{F_1\leftrightarrow F_2}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    3&2&-1&4
    \end{array}
    \right)
    $$

    Per anul·lar el coeficient $3$ de $F_3$, podríem restar $\frac32F_1$, però apareixerien fraccions. Fem la combinació lineal

    $$
    F_3=2F_3-3F_1.
    $$

    Així, el coeficient de $x$ es transforma en $2\cdot3-3\cdot2=0$:

    $$
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    3&2&-1&4
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-3F_1}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&7&-5&-1
    \end{array}
    \right)
    $$

    Per fer zero sota el segon pivot, tornem a combinar files:

    $$
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&7&-5&-1
    \end{array}
    \right)
    \xrightarrow{F_3=2F_3-7F_2}
    \left(
    \begin{array}{ccc|c}
    2&-1&1&3\\
    0&2&1&7\\
    0&0&-17&-51
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    z=3,
    \qquad
    y=2,
    \qquad
    x=1.
    $$

    Per tant, la solució és

    $$
    \boxed{(x,y,z)=(1,2,3).}
    $$

### 6. Sistema compatible indeterminat

!!! example "Exemple 3. Una equació redundant"
    Considerem

    $$
    \begin{cases}
    x+y+z=4\\
    x-y+z=2\\
    2x+2z=6
    \end{cases}
    $$

    Apliquem $F_2=F_2-F_1$ i $F_3=F_3-2F_1$:

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
    \right).
    $$

    L'última fila representa la identitat $0=0$ i no aporta cap condició nova. Queda una incògnita lliure.

    Prenem $z=\lambda$, amb $\lambda\in\mathbb{R}$. De la segona equació obtenim $y=1$ i, de la primera,

    $$
    x=3-\lambda.
    $$

    Així, el conjunt de solucions és

    $$
    \boxed{(x,y,z)=(3-\lambda,1,\lambda),\qquad \lambda\in\mathbb{R}.}
    $$

    El sistema té infinites solucions i és **compatible indeterminat**.

### 7. Sistema incompatible

!!! example "Exemple 4. Una contradicció"
    Considerem ara

    $$
    \begin{cases}
    x+y+z=4\\
    x-y+z=2\\
    2x+2z=7
    \end{cases}
    $$

    L'esglaonament condueix a

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&4\\
    0&-2&0&-2\\
    0&0&0&1
    \end{array}
    \right).
    $$

    L'última fila representa l'equació impossible $0=1$. Per tant, el sistema no té cap solució i és **incompatible**.

<div class="pdf-topic-section-break"></div>

### 8. Lectura final del sistema esglaonat

| Forma obtinguda després de Gauss | Interpretació | Classificació |
|---|---|:---:|
| Es poden determinar totes les incògnites. | Hi ha una única solució. | SCD |
| Apareix una fila $0=0$ i queda alguna incògnita lliure. | Hi ha infinites solucions. | SCI |
| Apareix una fila $0=k$, amb $k\neq0$. | Hi ha una contradicció. | SI |

!!! tip "Com s'ha de justificar la classificació"
    No n'hi ha prou amb escriure només les sigles. Cal relacionar la forma esglaonada amb el nombre de solucions:

    - **SCD:** «Podem determinar totes les incògnites; per tant, el sistema té una única solució.»
    - **SCI:** «Queda una incògnita lliure; per tant, el sistema té infinites solucions.»
    - **SI:** «Apareix una igualtat impossible; per tant, el sistema no té solució.»

### 9. Errors habituals

!!! warning "Revisa aquests punts"
    - Fer una operació només en alguns termes d'una fila.
    - Oblidar un coeficient $0$ quan una incògnita no apareix.
    - Oblidar el terme independent, situat a la dreta de la barra.
    - Multiplicar o dividir una fila per $0$.
    - Aturar-se en obtenir la forma esglaonada sense fer la substitució enrere.
    - En un SCI, donar només un exemple de solució en lloc d'expressar-les totes.
    - Donar la solució sense classificar ni justificar el sistema.

<div class="pdf-topic-section-break"></div>

## Problemes de sistemes

En molts problemes, les equacions no venen donades: cal construir-les a partir de l'enunciat. La resolució no acaba quan obtenim uns nombres; també hem de comprovar que tenen sentit en el context.

### 1. Passos per resoldre un problema

!!! tip "Procediment"
    1. **Defineix les incògnites** i indica què representa cadascuna.
    2. **Tradueix cada condició** de l'enunciat en una equació.
    3. **Ordena el sistema** mantenint sempre el mateix ordre de les incògnites.
    4. **Resol-lo amb el mètode de Gauss**.
    5. **Classifica el sistema** com a SCD, SCI o SI i justifica-ho.
    6. **Interpreta la solució** amb les unitats corresponents.
    7. **Comprova que el resultat és vàlid** en el context del problema.

### 2. Traducció de les condicions

Suposem que $x$, $y$ i $z$ representen tres quantitats.

| Condició de l'enunciat | Equació |
|---|---|
| En total n'hi ha $120$. | $x+y+z=120$ |
| La segona quantitat és el doble de la tercera. | $y=2z$ |
| La primera supera la segona en $15$ unitats. | $x-y=15$ |
| La primera i la segona sumen el triple de la tercera. | $x+y=3z$ |
| El valor total és de $685\,€$, amb preus de $8\,€$, $5\,€$ i $3\,€$. | $8x+5y+3z=685$ |

!!! warning "No comencis a calcular massa aviat"
    Primer cal definir les incògnites i escriure totes les equacions. Si no sabem què representa cada lletra, no podrem interpretar correctament el resultat.

### 3. Exemple complet: com canvia la classificació

!!! example "Lots de material escolar"
    Una cooperativa prepara $120$ lots de tres tipus: bàsic, estàndard i complet. El nombre de lots estàndard és el doble del nombre de lots complets.

    **a)** Un primer full de control afirma que s'han utilitzat $240$ etiquetes, dues per cada lot. Amb aquesta informació, es pot determinar quants lots s'han preparat de cada tipus?

    **b)** Sabem, a més, que els lots costen $8\,€$, $5\,€$ i $3\,€$, respectivament, i que el valor total és de $685\,€$. Quants lots hi ha de cada tipus?

    **c)** Un altre full de control afirma que s'han utilitzat $250$ etiquetes, dues per cada lot. Aquesta dada és compatible amb les dades inicials?

    **Resolució**

    Anomenem:

    - $x$: nombre de lots bàsics;
    - $y$: nombre de lots estàndard;
    - $z$: nombre de lots complets.

    **Apartat a)**

    Si cada lot porta dues etiquetes, la informació del primer full de control es tradueix en $2x+2y+2z=240$. El sistema és

    $$
    \begin{cases}
    x+y+z=120\\
    y-2z=0\\
    2x+2y+2z=240
    \end{cases}
    $$

    Apliquem el mètode de Gauss:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    2&2&2&240
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-2F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    0&0&0&0
    \end{array}
    \right)
    $$

    L'última fila representa la identitat $0=0$: la dada de les $240$ etiquetes és el doble de la primera equació i no aporta informació nova. Queda una incògnita lliure.

    Si prenem $z=\lambda$, obtenim

    $$
    y=2\lambda,
    \qquad
    x=120-3\lambda
    $$

    Per tant,

    $$
    \boxed{(x,y,z)=(120-3\lambda,2\lambda,\lambda)}
    $$

    El sistema és **compatible indeterminat (SCI)**: la dada repetida no permet determinar una única distribució dels lots.

    Matemàticament, $\lambda\in\mathbb{R}$. Com que les incògnites representen quantitats de lots, les solucions vàlides en el context corresponen als valors enters de $\lambda$ compresos entre $0$ i $40$.

    **Apartat b)**

    La informació econòmica proporciona una condició nova:

    $$
    8x+5y+3z=685
    $$

    El sistema és

    $$
    \begin{cases}
    x+y+z=120\\
    y-2z=0\\
    8x+5y+3z=685
    \end{cases}
    $$

    L'esglaonem:

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    8&5&3&685
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-8F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    0&-3&-5&-275
    \end{array}
    \right)
    $$

    $$
    \xrightarrow{F_3=F_3+3F_2}
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    0&0&-11&-275
    \end{array}
    \right)
    $$

    Resolem de baix cap amunt:

    $$
    z=25
    \qquad
    y=50
    \qquad
    x=45
    $$

    El sistema és **compatible determinat (SCD)** perquè hem pogut determinar totes les incògnites. La cooperativa ha preparat $45$ lots bàsics, $50$ d'estàndard i $25$ de complets.

    Comprovem el resultat:

    $$
    \begin{aligned}
    45+50+25&=120\\
    50&=2\cdot25\\
    8\cdot45+5\cdot50+3\cdot25&=685
    \end{aligned}
    $$

    Les tres condicions es compleixen.

    **Apartat c)**

    Si cada lot porta dues etiquetes, el segon registre es tradueix en

    $$
    2x+2y+2z=250
    $$

    Juntament amb les dades inicials, tindríem

    $$
    \begin{cases}
    x+y+z=120\\
    y-2z=0\\
    2x+2y+2z=250
    \end{cases}
    $$

    En esglaonar la matriu ampliada,

    $$
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    2&2&2&250
    \end{array}
    \right)
    \xrightarrow{F_3=F_3-2F_1}
    \left(
    \begin{array}{ccc|c}
    1&1&1&120\\
    0&1&-2&0\\
    0&0&0&10
    \end{array}
    \right)
    $$

    L'última fila representa la igualtat impossible $0=10$. Per tant, les dades són contradictòries i el sistema és **incompatible (SI)**: no hi ha cap distribució de lots que compleixi totes les condicions.

### 4. Què significa cada tipus de sistema en un problema?

| Classificació | Interpretació en el context |
|---|---|
| SCD | Les dades determinen una única resposta. |
| SCI | Les dades són compatibles, però no són suficients per determinar una única resposta. |
| SI | Les dades són contradictòries i no hi ha cap situació que les compleixi totes. |

!!! note "Un SCI també pot donar informació"
    Que un problema tingui infinites solucions no significa que no puguem deduir res. Alguna quantitat concreta pot quedar determinada encara que no puguem conèixer totes les incògnites.

### 5. Validació de la solució

Una solució matemàtica pot no ser admissible en el context. Abans d'escriure la resposta final, cal comprovar:

- que les quantitats que compten objectes siguin nombres enters;
- que no apareguin quantitats negatives si no tenen sentit;
- que es compleixin totes les condicions de l'enunciat;
- que s'indiquin les unitats;
- que la resposta contesti exactament allò que es demana.

!!! warning "La resposta final ha de ser una frase"
    No acabis només amb $(45,50,25)$. Cal escriure què representa cada valor: «S'han preparat $45$ lots bàsics, $50$ d'estàndard i $25$ de complets.»
