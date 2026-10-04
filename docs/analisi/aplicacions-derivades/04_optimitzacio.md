# Optimització de funcions

En els problemes d'optimització sovint cal expressar longituds, àrees o volums en funció d'una variable. Per això, abans de plantejar-los, recordem les fórmules geomètriques més habituals.

## 1. Repàs de geometria

### 1.1 Geometria plana

En les figures planes utilitzarem $A$ per indicar l'**àrea** i $P$ per indicar el **perímetre**. En qualsevol figura poligonal, el perímetre és la **suma de les longituds de tots els costats**.

<figure markdown="span">
  ![Quadrat, rectangle, triangle, cercle i polígon regular amb les dimensions i les fórmules de l'àrea i del perímetre](../../img/analisi/fig_2_16_repas_geometria_plana.svg?v=4){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/analisi/fig_2_16_repas_geometria_plana.tex">Figura 2.16.</a></strong> Àrees i perímetres de les figures planes més habituals.</figcaption>
</figure>

| Figura | Àrea | Perímetre |
|:---|:---:|:---:|
| Quadrat de costat $a$ | $A=a^2$ | $P=4a$ |
| Rectangle de base $b$ i altura $h$ | $A=bh$ | $P=2(b+h)$ |
| Triangle de base $b$, altura $h$ i costats $a,b,c$ | $A=\dfrac{bh}{2}$ | $P=a+b+c$ |
| Cercle de radi $r$ | $A=\pi r^2$ | $P=2\pi r$ |
| Polígon regular de $n$ costats de longitud $l$ i apotema $a_p$ | $A=\dfrac{P\,a_p}{2}$ | $P=n\,l$ |

!!! note "Perímetre o longitud de la circumferència"
    En el cercle, $2\pi r$ és la longitud de la **circumferència**, és a dir, la frontera del cercle.

### 1.2 Geometria de l'espai

En els cossos geomètrics utilitzarem $A_T$ per indicar l'**àrea total** i $V$ per indicar el **volum**. L'àrea total és la suma de les àrees de totes les superfícies que formen el cos.

<figure markdown="span">
  ![Prisma rectangular, cilindre, piràmide de base quadrada, con i esfera amb els seus desplegaments i les fórmules de l'àrea total i del volum](../../img/analisi/fig_2_17_repas_geometria_espai.svg?v=5){ width="960" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/analisi/fig_2_17_repas_geometria_espai.tex">Figura 2.17.</a></strong> Cossos geomètrics, desplegaments, àrees totals i volums.</figcaption>
</figure>

| Cos geomètric | Àrea total | Volum |
|:---|:---:|:---:|
| Prisma rectangular de costats $a,b,h$ | $A_T=2(ab+ah+bh)$ | $V=abh$ |
| Cilindre de radi $r$ i altura $h$ | $A_T=2\pi r^2+2\pi rh$ | $V=\pi r^2h$ |
| Piràmide regular de base quadrada i costat $a$ | $A_T=a^2+2aa_p$ | $V=\dfrac{a^2h}{3}$ |
| Con de radi $r$, altura $h$ i generatriu $g$ | $A_T=\pi r^2+\pi rg$ | $V=\dfrac{\pi r^2h}{3}$ |
| Esfera de radi $r$ | $A_T=4\pi r^2$ | $V=\dfrac{4}{3}\pi r^3$ |

!!! note "Símbols de les fórmules"
    $A_b$ és l'**àrea de la base**, $a_p$ és l'**apotema de la piràmide**, $g$ és la **generatriu del con** i $h$ és l'**altura** del cos.

    En el cilindre i el con, la base és un cercle; per tant, $A_b=\pi r^2$ i $P_b=2\pi r$.

## 2. Procediment general d'un problema d'optimització

!!! abstract "Definició: funció objectiu i restricció"
    La **funció objectiu** és la magnitud que volem fer màxima o mínima: una àrea, un volum, un perímetre, un cost, un benefici o una distància.

    La **restricció** és la relació que han de complir les variables del problema. Serveix per expressar la funció objectiu en funció d'una sola variable.

### Pas 1. Fer un esquema i triar les variables

1. Dibuixa la situació i escriu-hi totes les dades conegudes.
2. Assigna una lletra a cada magnitud desconeguda i indica'n les unitats.
3. Decideix quina serà la variable principal, habitualment $x$.

!!! note "Les variables han de tenir significat"
    Si $x$ representa una longitud, caldrà exigir $x>0$. Si una altra longitud és, per exemple, $12-2x$, també haurem d'exigir $12-2x>0$.

### Pas 2. Identificar la funció objectiu

Busca què demana exactament l'enunciat i escriu primer la seva fórmula natural, encara que depengui de més d'una variable.

| Què demana el problema? | Funció objectiu habitual |
|:---|:---:|
| Àrea màxima | $A=$ fórmula de l'àrea |
| Volum màxim | $V=$ fórmula del volum |
| Perímetre mínim | $P=$ fórmula del perímetre |
| Cost mínim | $C=$ suma de tots els costos |
| Benefici màxim | $B=I-C$ |
| Distància mínima | $d=$ fórmula de la distància |

Per exemple, si volem maximitzar l'àrea d'un rectangle de costats $x$ i $y$, comencem amb

$$
A=xy.
$$

Aquesta encara no és la funció final perquè depèn de dues variables.

### Pas 3. Escriure la restricció

Tradueix la informació que es manté fixa en una equació. Pot provenir d'un perímetre donat, una quantitat limitada de material, una suma de longituds, un pressupost o qualsevol altra condició de l'enunciat.

En l'exemple del rectangle, si el perímetre és $20$, la restricció és

$$
2x+2y=20.
$$

### Pas 4. Obtenir una funció d'una sola variable

Aïlla una variable en la restricció i substitueix-la en la funció objectiu. En l'exemple,

$$
y=10-x
$$

i, per tant,

$$
A(x)=x(10-x)=10x-x^2.
$$

!!! tip "Com reconèixer que la funció objectiu ja està preparada"
    Abans de derivar, la magnitud que volem optimitzar ha d'estar escrita en funció d'**una sola variable**:

    $$
    F(x).
    $$

### Pas 5. Determinar el domini del problema

El domini no depèn només de la fórmula, sinó també del context. Cal imposar que:

- les longituds, les àrees, els volums, les quantitats i els temps siguin positius;
- els denominadors no siguin zero;
- els radicands d'arrels d'índex parell siguin no negatius;
- totes les expressions que representen mesures tinguin sentit.

En l'exemple del rectangle,

$$
x>0,\qquad 10-x>0
\quad\Longrightarrow\quad
0<x<10.
$$

### Pas 6. Trobar els candidats a màxim o mínim

1. Calcula la derivada $F'(x)$.
2. Resol $F'(x)=0$.
3. Afegeix els punts del domini on $F'$ no existeix.
4. Si el domini és un interval tancat, considera també els seus extrems.

Només conservem els candidats que pertanyen al domini del problema.

### Pas 7. Comprovar el màxim o el mínim

La comprovació principal es pot fer estudiant el canvi de signe de $F'$:

| Canvi de signe de $F'$ | Conclusió |
|:---:|:---|
| $+\longrightarrow-$ | Màxim |
| $-\longrightarrow+$ | Mínim |

També podem utilitzar la segona derivada en un candidat $x=a$:

$$
F''(a)<0\Longrightarrow\text{màxim},
\qquad
F''(a)>0\Longrightarrow\text{mínim}.
$$

Si hi ha diversos candidats o extrems del domini, calcula el valor de $F$ en cadascun i compara'ls.

### Pas 8. Interpretar i redactar la resposta

1. Recupera les altres variables mitjançant la restricció.
2. Comprova que totes les mesures siguin possibles i compleixin l'enunciat.
3. Respon exactament què es demana, amb les unitats corresponents.

!!! warning "Errors habituals"
    - Derivar una expressió que encara depèn de dues variables.
    - Oblidar el domini imposat pel context.
    - Donar només el valor de $x$ quan es demanen totes les dimensions.
    - No comprovar si el candidat correspon realment a un màxim o a un mínim.
    - Confondre el valor de la variable amb el valor màxim o mínim de la funció objectiu.

!!! note "Esquema resum"
    **Dibuix i variables** $\longrightarrow$ **funció objectiu** $\longrightarrow$ **restricció** $\longrightarrow$ **funció d'una variable** $\longrightarrow$ **domini** $\longrightarrow$ **derivada i candidats** $\longrightarrow$ **comprovació** $\longrightarrow$ **resposta contextualitzada**.
