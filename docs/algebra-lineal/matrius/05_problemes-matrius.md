# Problemes de matrius

Les matrius permeten organitzar dades d'un problema i operar amb tota la informació alhora. Per interpretar correctament els resultats, cal saber què representa cada fila, cada columna i cada unitat.

## 1. Organització de les dades

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

## 2. Procediment

!!! tip "Passos per resoldre un problema de matrius"
    1. **Identifica les dades** i les unitats.
    2. **Decideix què representen** les files i les columnes.
    3. **Escriu les matrius** mantenint el mateix ordre en totes les dades comparables.
    4. **Tria l'operació adequada** i comprova que les dimensions siguin compatibles.
    5. **Efectua els càlculs**.
    6. **Interpreta cada resultat** dins del context del problema.

## 3. Significat de les operacions en un problema

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

## 4. Exemple complet

!!! example "Vendes de dues botigues"
    **Enunciat**

    Una empresa ven dos productes, $A$ i $B$, en dues botigues. Les files representen els productes $A$ i $B$, i les columnes, les botigues $1$ i $2$.

    Durant el matí i la tarda s'han registrat les vendes següents:

    $$
    M=
    \begin{pmatrix}
    12&8\\
    10&9
    \end{pmatrix}
    \qquad
    T=
    \begin{pmatrix}
    7&6\\
    5&11
    \end{pmatrix}
    $$

    El producte $A$ costa $5\,€$ per unitat i el producte $B$, $8\,€$.

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
    5&8
    \end{pmatrix}
    $$

    Sumem les vendes del matí i de la tarda:

    $$
    U=M+T
    =
    \begin{pmatrix}
    12&8\\
    10&9
    \end{pmatrix}
    +
    \begin{pmatrix}
    7&6\\
    5&11
    \end{pmatrix}
    =
    \begin{pmatrix}
    19&14\\
    15&20
    \end{pmatrix}
    $$

    Per tant, del producte $A$ s'han venut $19$ unitats a la botiga $1$ i $14$ a la botiga $2$; del producte $B$, se n'han venut $15$ i $20$, respectivament.

    Multipliquem la matriu fila dels preus per la matriu de les unitats venudes:

    $$
    R=PU
    =
    \begin{pmatrix}
    5&8
    \end{pmatrix}
    \begin{pmatrix}
    19&14\\
    15&20
    \end{pmatrix}
    =
    \begin{pmatrix}
    215&230
    \end{pmatrix}
    $$

    El primer element de $R$ és la recaptació de la botiga $1$ i el segon, la de la botiga $2$:

    - botiga $1$: $5\cdot19+8\cdot15=215\,€$;
    - botiga $2$: $5\cdot14+8\cdot20=230\,€$.

    Finalment, la recaptació total de l'empresa és

    $$
    215+230=445\,€
    $$

## 5. Interpretació i comprovació

En acabar un problema, cal comprovar:

- que totes les matrius mantenen el mateix ordre de files i columnes;
- que les dimensions permeten fer les operacions indicades;
- que les unitats del resultat són coherents;
- que cada nombre es tradueix en una frase relacionada amb el context.

!!! note "Les unitats també es multipliquen"
    En l'exemple, els elements de $P$ s'expressen en euros per unitat i els d'$U$, en unitats venudes. Per això els elements del producte $PU$ s'expressen en euros.

