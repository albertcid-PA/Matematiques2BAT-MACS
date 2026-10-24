# Sistemes d'equacions lineals

Un sistema d'equacions permet expressar diverses condicions que s'han de complir alhora. En aquest tema treballarem amb sistemes de coeficients numèrics i aprendrem a decidir si tenen una solució, infinites solucions o cap solució.

## 1. Equacions lineals

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

## 2. Sistemes i solucions

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

## 3. Classificació segons el nombre de solucions

Un sistema lineal només pot ser d'un dels tres tipus següents:

| Classificació | Nombre de solucions | Abreviació |
|---|---:|:---:|
| Sistema compatible determinat | Una | **SCD** |
| Sistema compatible indeterminat | Infinites | **SCI** |
| Sistema incompatible | Cap | **SI** |

Un sistema és **compatible** si té alguna solució. Per això tant els SCD com els SCI són sistemes compatibles.

### 3.1 Sistema compatible determinat

El sistema

$$
\begin{cases}
x+y=5\\
x-y=1
\end{cases}
$$

té una única solució: $(x,y)=(3,2)$. Per tant, és un **sistema compatible determinat**.

### 3.2 Sistema compatible indeterminat

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

### 3.3 Sistema incompatible

En el sistema

$$
\begin{cases}
x+y=4\\
2x+2y=10
\end{cases}
$$

el doble de la primera equació seria $2x+2y=8$, però la segona exigeix que $2x+2y=10$. Les dues condicions es contradiuen. El sistema no té cap solució i és **incompatible**.



## 4. Quina informació aporten les equacions?

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

## 5. Sistemes equivalents

!!! abstract "Definició: sistemes equivalents"
    Dos sistemes són **equivalents** si tenen exactament les mateixes solucions.

Podem transformar un sistema en un altre d'equivalent mitjançant aquestes operacions:

1. Intercanviar dues equacions.
2. Multiplicar una equació per un nombre diferent de zero.
3. Substituir una equació per la suma d'aquesta equació i un múltiple d'una altra.

Per indicar les equacions, escriurem $E_1,E_2,E_3,\ldots$ L'operació s'escriu damunt de la fletxa que uneix el sistema inicial amb el sistema transformat.

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

## 6. Sistemes esglaonats

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
