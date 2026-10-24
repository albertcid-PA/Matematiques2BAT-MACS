# Plantejament de problemes amb sistemes

En molts problemes, les equacions no venen donades: cal construir-les a partir de l'enunciat. La resolució no acaba quan obtenim uns nombres; també hem de comprovar que tenen sentit en el context.

## 1. Passos per resoldre un problema

!!! tip "Procediment"
    1. **Defineix les incògnites** i indica què representa cadascuna.
    2. **Tradueix cada condició** de l'enunciat en una equació.
    3. **Ordena el sistema** mantenint sempre el mateix ordre de les incògnites.
    4. **Resol-lo amb el mètode de Gauss**.
    5. **Classifica el sistema** com a SCD, SCI o SI i justifica-ho.
    6. **Interpreta la solució** amb les unitats corresponents.
    7. **Comprova que el resultat és vàlid** en el context del problema.

## 2. Traducció de les condicions

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

## 3. Exemple complet: quan falta una condició

!!! example "Lots de material escolar"
    Una cooperativa prepara $120$ lots de tres tipus: bàsic, estàndard i complet. El nombre de lots estàndard és el doble del nombre de lots complets.

    **a)** Es pot determinar quants lots s'han preparat de cada tipus?

    **b)** Sabem, a més, que els lots costen $8\,€$, $5\,€$ i $3\,€$, respectivament, i que el valor total és de $685\,€$. Quants lots hi ha de cada tipus?

### 3.1 Definició de les incògnites

Anomenem:

- $x$: nombre de lots bàsics;
- $y$: nombre de lots estàndard;
- $z$: nombre de lots complets.

### 3.2 Amb les dues primeres condicions

Les dades inicials donen el sistema

$$
\begin{cases}
x+y+z=120,\\
y=2z.
\end{cases}
$$

Hi ha dues equacions independents i tres incògnites. Si prenem $z=\lambda$, obtenim

$$
y=2\lambda
$$

i

$$
x=120-3\lambda.
$$

Per tant,

$$
\boxed{(x,y,z)=(120-3\lambda,2\lambda,\lambda).}
$$

El sistema és **compatible indeterminat**: les dades no permeten determinar una única distribució dels lots.

Com que les incògnites representen quantitats de lots, les solucions vàlides han de ser nombres enters no negatius. Aquesta restricció prové del context, no del mètode de Gauss.

### 3.3 Afegim la condició econòmica

La nova condició és

$$
8x+5y+3z=685.
$$

Ara tenim el sistema

$$
\begin{cases}
x+y+z=120,\\
y-2z=0,\\
8x+5y+3z=685.
\end{cases}
$$

L'esglaonem:

$$
\left[
\begin{array}{ccc|c}
1&1&1&120\\
0&1&-2&0\\
8&5&3&685
\end{array}
\right]
\mathop{\longrightarrow}^{F_3\leftarrow F_3-8F_1}
\left[
\begin{array}{ccc|c}
1&1&1&120\\
0&1&-2&0\\
0&-3&-5&-275
\end{array}
\right]
$$

$$
\mathop{\longrightarrow}^{F_3\leftarrow F_3+3F_2}
\left[
\begin{array}{ccc|c}
1&1&1&120\\
0&1&-2&0\\
0&0&-11&-275
\end{array}
\right].
$$

Resolem de baix cap amunt:

$$
z=25,
\qquad
y=50,
\qquad
x=45.
$$

El sistema és **compatible determinat** perquè hem pogut determinar totes les incògnites. La cooperativa ha preparat $45$ lots bàsics, $50$ d'estàndard i $25$ de complets.

Comprovem el resultat:

$$
45+50+25=120,
$$

$$
50=2\cdot25,
$$

$$
8\cdot45+5\cdot50+3\cdot25=685.
$$

Les tres condicions es compleixen.

## 4. Què significa cada tipus de sistema en un problema?

| Classificació | Interpretació en el context |
|---|---|
| SCD | Les dades determinen una única resposta. |
| SCI | Les dades són compatibles, però no són suficients per determinar una única resposta. |
| SI | Les dades són contradictòries i no hi ha cap situació que les compleixi totes. |

!!! note "Un SCI també pot donar informació"
    Que un problema tingui infinites solucions no significa que no puguem deduir res. Alguna quantitat concreta pot quedar determinada encara que no puguem conèixer totes les incògnites.

## 5. Validació de la solució

Una solució matemàtica pot no ser admissible en el context. Abans d'escriure la resposta final, cal comprovar:

- que les quantitats que compten objectes siguin nombres enters;
- que no apareguin quantitats negatives si no tenen sentit;
- que es compleixin totes les condicions de l'enunciat;
- que s'indiquin les unitats;
- que la resposta contesti exactament allò que es demana.

!!! warning "La resposta final ha de ser una frase"
    No acabis només amb $(45,50,25)$. Cal escriure què representa cada valor: «S'han preparat $45$ lots bàsics, $50$ d'estàndard i $25$ de complets.»
