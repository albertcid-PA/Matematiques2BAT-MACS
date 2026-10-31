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

    Obtenim una fila de zeros. Prenem $z=t$, amb $t\in\mathbb{R}$. Aleshores $y=1$ i $x=3-t$.

    $$
    \boxed{(x,y,z)=(3-t,1,t),\qquad t\in\mathbb{R}.}
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
