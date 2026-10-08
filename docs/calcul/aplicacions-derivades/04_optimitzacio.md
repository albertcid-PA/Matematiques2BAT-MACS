# Optimització de funcions

En els problemes d'optimització sovint cal expressar longituds, àrees o volums en funció d'una variable. Per això, abans de plantejar-los, recordem les fórmules geomètriques més habituals.

## 1. Repàs de geometria

### 1.1 Geometria plana

En les figures planes utilitzarem $A$ per indicar l'**àrea** i $P$ per indicar el **perímetre**. En qualsevol figura poligonal, el perímetre és la **suma de les longituds de tots els costats**.

<figure markdown="span">
  ![Quadrat, rectangle, triangle, cercle i polígon regular amb les dimensions i les fórmules de l'àrea i del perímetre](../../img/calcul/fig_2_19_repas_geometria_plana.svg?v=7){ width="900" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_19_repas_geometria_plana.tex">Figura 2.19.</a></strong> Àrees i perímetres de les figures planes més habituals.</figcaption>
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
  ![Prisma rectangular, cilindre, piràmide de base quadrada, con i esfera amb els seus desplegaments i les fórmules de l'àrea total i del volum](../../img/calcul/fig_2_20_repas_geometria_espai.svg?v=11){ width="960" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_20_repas_geometria_espai.tex">Figura 2.20.</a></strong> Cossos geomètrics, desplegaments, àrees totals i volums.</figcaption>
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
A(x,y)=xy.
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

La comprovació principal es fa amb una **taula de signes de la derivada**:

1. Situa ordenadament els candidats dins del domini.
2. Divideix el domini en els intervals que determinen aquests punts.
3. Tria un valor de prova de cada interval i calcula-hi el signe de $F'$.
4. Indica si $F$ creix o decreix i identifica els màxims i els mínims.

Per exemple, si $F'(a)=0$, podem obtenir una taula com aquesta:

| $x$ | Interval anterior | $a$ | Interval posterior |
|:---:|:---:|:---:|:---:|
| Valor de prova | $x_1$ | — | $x_2$ |
| Signe de $F'(x)$ | $+$ | $0$ | $-$ |
| Comportament de $F$ | creix | màxim | decreix |

En general:

| Canvi de signe de $F'$ | Conclusió |
|:---:|:---|
| $+\longrightarrow-$ | Màxim |
| $-\longrightarrow+$ | Mínim |

La segona derivada es pot utilitzar com a comprovació complementària en un candidat $x=a$:

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

## 3. Problemes resolts pas a pas

### 3.1 Problema geomètric: una capsa sense tapa

!!! example "Exemple 1. Minimització de la quantitat de cartró (basat en el problema 3 de l'extraordinària 2024)"
    Volem construir una capsa de base quadrada i sense tapa amb una capacitat de $4$ litres.

    **a)** Expressa l'altura de la capsa, $y$, en funció de la longitud del costat de la base, $x$.

    **b)** Quants centímetres ha de mesurar el costat de la base perquè la quantitat de cartró utilitzada sigui mínima? Quina ha de ser l'altura de la capsa? Quina quantitat de cartró serà necessària?

    **Pas 1. Fem un esquema i triem les variables**

    Anomenem:

    - $x$: longitud del costat de la base, en centímetres;
    - $y$: altura de la capsa, en centímetres.

    <figure markdown="span">
      ![Capsa oberta de base quadrada amb el costat x i l'altura y](../../img/calcul/fig_2_21_capsa_oberta.svg?v=6){ width="520" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_21_capsa_oberta.tex">Figura 2.21.</a></strong> Variables de la capsa de base quadrada i sense tapa.</figcaption>
    </figure>


    **Pas 2. Identifiquem la funció objectiu**

    Volem minimitzar la quantitat de cartró, és a dir, l'**àrea total de la capsa**. Com que no té tapa, està formada per una base quadrada i quatre cares rectangulars:

    $$
    S(x,y)=x^2+4xy.
    $$

    Aquesta expressió encara depèn de dues variables.

    **Pas 3. Escrivim la restricció**

    La capacitat de la capsa és fixa. Com que

    $$
    4\ \text{L}=4\,000\ \text{cm}^3,
    $$

    la fórmula del volum ens dona la restricció

    $$
    x^2y=4\,000.
    $$

    **Pas 4. Obtenim la funció objectiu d'una sola variable**

    Aïllem $y$ en la restricció:

    $$
    y=\frac{4\,000}{x^2}.
    $$

    Aquesta expressió respon l'**apartat a)**.

    Ho substituïm en l'expressió de la superfície:

    $$
    \begin{aligned}
    S(x)
      &=x^2+4x\cdot\frac{4\,000}{x^2}\\
      &=x^2+\frac{16\,000}{x}.
    \end{aligned}
    $$

    **Pas 5. Determinem el domini del problema**

    El costat de la base ha de ser positiu. Per tant,

    $$
    x>0.
    $$

    Per a qualsevol $x>0$, l'altura $y=4\,000/x^2$ també és positiva. Així, el domini contextual és

    $$
    D_S=(0,+\infty).
    $$

    **Pas 6. Trobem els candidats a mínim**

    Derivem la funció objectiu:

    $$
    S'(x)=2x-\frac{16\,000}{x^2}.
    $$

    Igualem la derivada a zero:

    $$
    \begin{aligned}
    2x-\frac{16\,000}{x^2}&=0,\\
    2x^3-16\,000&=0,\\
    x^3&=8\,000,\\
    x&=\sqrt[3]{8\,000}=20.
    \end{aligned}
    $$

    El valor $x=20$ pertany al domini i és l'únic candidat.

    **Pas 7. Comprovem que és un mínim**

    Podem escriure la derivada com

    $$
    S'(x)=\frac{2(x^3-8\,000)}{x^2}.
    $$

    Com que $x^2>0$ en tot el domini, el signe de $S'(x)$ depèn de $x^3-8\,000$:

    | $x$ | $(0,20)$ | $20$ | $(20,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $S'(5)=-630$ | $S'(20)=0$ | $S'(40)=70$ |
    | Signe de $S'(x)$ | $-$ | $0$ | $+$ |
    | Comportament de $S$ | decreix | mínim | creix |

    Per tant, $S$ passa de decreixent a creixent i assoleix un **mínim** quan $x=20$.

    També ho podem confirmar amb la segona derivada:

    $$
    S''(x)=2+\frac{32\,000}{x^3},
    \qquad
    S''(20)=6>0.
    $$

    **Pas 8. Recuperem les altres variables i responem**

    Calculem l'altura de la capsa:

    $$
    y=\frac{4\,000}{20^2}=10\ \text{cm}.
    $$

    La quantitat mínima de cartró és

    $$
    S(20)=20^2+\frac{16\,000}{20}
         =400+800
         =1\,200\ \text{cm}^2.
    $$

    Per tant, la resposta de l'**apartat b)** és que la capsa que utilitza menys cartró té una base quadrada de **$20$ cm de costat**, una altura de **$10$ cm** i necessita **$1\,200\ \text{cm}^2$ de cartró**.

### 3.2 Funció objectiu donada: visitants d'una exposició

!!! example "Exemple 2. Màxim d'una funció donada (basat en el problema 3 de l'extraordinària 2022)"
    El nombre de visitants setmanals d'una exposició, expressat en **desenes de persones**, és donat per la funció

    $$
    f(x)=\frac{240x}{x^2-2x+4},
    \qquad x\geq 1,
    $$

    en què $x$ és el temps, expressat en setmanes, que fa que l'exposició està oberta al públic.

    **a)** Quantes persones visitaran l'exposició la primera setmana? Calcula la taxa de variació mitjana del nombre de visitants entre la setmana $1$ i la setmana $4$.

    **b)** Durant quina setmana es preveu que hi anirà més gent? Quants visitants s'estima que hi aniran aquella setmana?

    **c)** Què preveu el model que passarà amb el nombre setmanal de visitants quan hagi passat molt de temps?

    **Apartat a. Calculem els valors demanats**

    La primera setmana tenim

    $$
    f(1)=\frac{240\cdot 1}{1^2-2\cdot 1+4}=80.
    $$

    Com que la funció està expressada en desenes de persones, es preveu que hi vagin

    $$
    80\cdot 10=800\ \text{persones}.
    $$

    Per calcular la taxa de variació mitjana necessitem també

    $$
    f(4)=\frac{240\cdot 4}{4^2-2\cdot 4+4}=80.
    $$

    Per tant,

    $$
    \operatorname{TVM}_{[1,4]}
      =\frac{f(4)-f(1)}{4-1}
      =\frac{80-80}{3}
      =0.
    $$

    La taxa de variació mitjana és de **$0$ desenes de visitants per setmana**. Això indica que a les setmanes $1$ i $4$ es preveu el mateix nombre de visitants, encara que entre aquestes dues setmanes la funció no sigui constant.

    **Apartat b. Resolem el problema d'optimització**

    **Pas 1. Identifiquem la variable i les unitats**

    - $x$: temps transcorregut des de l'obertura, en setmanes;
    - $f(x)$: nombre de visitants setmanals, en desenes de persones.

    **Pas 2. Identifiquem la funció objectiu**

    Volem maximitzar el nombre de visitants. La funció objectiu ja apareix directament en l'enunciat:

    $$
    f(x)=\frac{240x}{x^2-2x+4}.
    $$

    **Pas 3. Identifiquem la restricció**

    No cal obtenir cap relació entre dues variables perquè la funció objectiu ja depèn només de $x$. La restricció prové del context:

    $$
    x\geq 1.
    $$

    **Pas 4. Comprovem que tenim una funció d'una sola variable**

    La funció objectiu ja té la forma $f(x)$; per tant, no cal aïllar ni substituir cap altra variable.

    **Pas 5. Determinem el domini del problema**

    El denominador es pot escriure com

    $$
    x^2-2x+4=(x-1)^2+3>0.
    $$

    La fórmula està definida per a tot nombre real, però el temps del problema compleix $x\geq 1$. Així, el domini contextual és

    $$
    D_f=[1,+\infty).
    $$

    **Pas 6. Trobem els candidats a màxim**

    Apliquem la regla del quocient:

    $$
    \begin{aligned}
    f'(x)
      &=\frac{240(x^2-2x+4)-240x(2x-2)}{(x^2-2x+4)^2}\\
      &=\frac{240(4-x^2)}{(x^2-2x+4)^2}.
    \end{aligned}
    $$

    Igualem la derivada a zero. Com que el denominador és sempre positiu, només cal anul·lar el numerador:

    $$
    240(4-x^2)=0
    \quad\Longrightarrow\quad
    x^2=4
    \quad\Longrightarrow\quad
    x=\pm 2.
    $$

    Descartem $x=-2$ perquè no pertany al domini. El candidat interior és $x=2$ i també hem de tenir present l'extrem $x=1$ del domini.

    **Pas 7. Comprovem que és un màxim amb una taula**

    El denominador de $f'(x)$ és positiu. Per tant, el signe de la derivada depèn de $4-x^2$:

    | $x$ | $[1,2)$ | $2$ | $(2,+\infty)$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $f'(1)=80$ | $f'(2)=0$ | $f'(3)=-\dfrac{1\,200}{49}$ |
    | Signe de $f'(x)$ | $+$ | $0$ | $-$ |
    | Comportament de $f$ | creix | màxim | decreix |

    La funció creix fins a $x=2$ i decreix a partir d'aquest valor. Per tant, assoleix el **màxim absolut** en $x=2$.

    **Pas 8. Calculem el valor màxim i interpretem el resultat**

    $$
    f(2)=\frac{240\cdot 2}{2^2-2\cdot 2+4}=120.
    $$

    Com que $f$ està expressada en desenes de persones,

    $$
    120\cdot 10=1\,200\ \text{persones}.
    $$

    Per tant, es preveu que el nombre màxim de visitants s'assoleixi durant la **segona setmana**, amb **$1\,200$ visitants**.

    **Apartat c. Estudiem el comportament a llarg termini**

    Calculem el límit quan el nombre de setmanes tendeix a infinit:

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
      &=\lim_{x\to+\infty}\frac{240x}{x^2-2x+4}\\
      &=\lim_{x\to+\infty}\frac{\dfrac{240}{x}}
        {1-\dfrac{2}{x}+\dfrac{4}{x^2}}\\
      &=0.
    \end{aligned}
    $$

    Com que $f(x)$ està expressada en desenes de persones, el model preveu que, amb el pas del temps, el nombre setmanal de visitants **s'aproximarà a zero**. Això no vol dir que en una setmana concreta hagi de ser exactament zero, sinó que l'afluència prevista serà cada vegada més petita.

    <figure markdown="span">
      ![Gràfica del nombre setmanal de visitants amb un màxim a la segona setmana](../../img/calcul/fig_2_22_visitants_exposicio.svg?v=1){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_22_visitants_exposicio.tex">Figura 2.22.</a></strong> Evolució prevista del nombre setmanal de visitants, expressat en desenes de persones.</figcaption>
    </figure>
### 3.3 Benefici màxim d'una empresa de joguines

!!! example "Exemple 3. Benefici màxim d'una empresa de joguines"
    Per Nadal, **Joguines Pallaresos** fabrica $18$ milers de joguines entre nines i cotxes. Anomenem $x$ els milers de nines i $y$ els milers de cotxes. S'estima que el benefici de l'empresa, expressat en milers d'euros, és

    $$
    B(x,y)=x^2y+60y+20.
    $$

    **a)** Troba la funció que expressa el benefici tenint en compte només els milers de nines.

    **b)** Troba quin és el benefici quan tota la producció es dedica a fabricar cotxes; és a dir, quan no es fabrica cap nina.

    **c)** Troba els extrems relatius.

    **d)** Què passa si tota la producció es dedica a fabricar nines?

    **e)** Quina quantitat de nines i de cotxes s'ha de fabricar perquè el benefici sigui màxim?

    **f)** Descriu com es comporta el benefici en funció de la fabricació de nines.

    **Pas 1. Identifiquem les variables i les unitats**

    - $x$: milers de nines fabricades;
    - $y$: milers de cotxes fabricats;
    - $B(x,y)$: benefici, en milers d'euros.

    **Pas 2. Identifiquem la funció objectiu**

    Volem estudiar i maximitzar el benefici

    $$
    B(x,y)=x^2y+60y+20.
    $$

    **Pas 3. Escrivim la restricció**

    En total es fabriquen $18$ milers de joguines. Per tant,

    $$
    x+y=18
    \quad\Longrightarrow\quad
    y=18-x.
    $$

    **Pas 4. Obtenim la funció d'una sola variable — apartat a)**

    Substituïm $y=18-x$ en la funció objectiu:

    $$
    \begin{aligned}
    B(x)
      &=x^2(18-x)+60(18-x)+20\\
      &=-x^3+18x^2-60x+1\,100.
    \end{aligned}
    $$

    Aquesta és la funció que expressa el benefici en funció dels **milers de nines**.

    **Apartat b. Tota la producció es dedica als cotxes**

    Si no es fabrica cap nina, $x=0$ i $y=18$. Aleshores,

    $$
    B(0)=-0^3+18\cdot0^2-60\cdot0+1\,100=1\,100.
    $$

    Com que el benefici està expressat en milers d'euros, l'empresa obté un benefici de

    $$
    1\,100\cdot1\,000=1\,100\,000\ \text{€}.
    $$

    **Pas 5. Determinem el domini del problema**

    Les quantitats de nines i cotxes no poden ser negatives:

    $$
    x\geq0,
    \qquad
    18-x\geq0.
    $$

    Per tant, el domini contextual és

    $$
    D_B=[0,18].
    $$

    **Pas 6. Trobem els extrems relatius — apartat c)**

    Derivem i igualem a zero:

    $$
    B'(x)=-3x^2+36x-60=-3(x-2)(x-10),
    $$

    $$
    B'(x)=0
    \quad\Longrightarrow\quad
    x=2
    \quad\text{o}\quad
    x=10.
    $$

    La segona derivada és

    $$
    B''(x)=-6x+36.
    $$

    En $x=2$,

    $$
    B''(2)=24>0,
    $$

    de manera que hi ha un **mínim relatiu**. El seu valor és

    $$
    B(2)=1\,044,
    $$

    és a dir, $1\,044\,000$ €.

    En $x=10$,

    $$
    B''(10)=-24<0,
    $$

    de manera que hi ha un **màxim relatiu**. El seu valor és

    $$
    B(10)=1\,300,
    $$

    és a dir, $1\,300\,000$ €.

    **Apartat d. Tota la producció es dedica a les nines**

    Si $x=18$, aleshores $y=0$ i

    $$
    B(18)=20.
    $$

    En aquest cas, l'empresa obté un benefici de només **$20\,000$ €**.

    **Pas 7. Estudiem la monotonia i comprovem el màxim — apartat e)**

    | $x$ | $[0,2)$ | $2$ | $(2,10)$ | $10$ | $(10,18]$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Comprovació | $B'(1)=-27$ | $B'(2)=0$ | $B'(5)=45$ | $B'(10)=0$ | $B'(15)=-195$ |
    | Signe de $B'(x)$ | $-$ | $0$ | $+$ | $0$ | $-$ |
    | Comportament de $B$ | decreix | mínim relatiu | creix | màxim relatiu | decreix |

    Per trobar el màxim absolut en $[0,18]$, comparem els punts crítics i els extrems del domini:

    | $x$ | $0$ | $2$ | $10$ | $18$ |
    |:---:|:---:|:---:|:---:|:---:|
    | $B(x)$, en milers d'euros | $1\,100$ | $1\,044$ | $1\,300$ | $20$ |

    El valor més gran és $B(10)=1\,300$. Quan $x=10$,

    $$
    y=18-10=8.
    $$

    Per tant, per obtenir el benefici màxim cal fabricar **$10$ milers de nines i $8$ milers de cotxes**. El benefici màxim és de **$1\,300\,000$ €**.

    **Pas 8. Descrivim el comportament del benefici — apartat f)**

    - Entre $0$ i $2$ milers de nines, el benefici **decreix** de $1\,100$ a $1\,044$ milers d'euros.
    - Entre $2$ i $10$ milers de nines, el benefici **creix** fins al màxim de $1\,300$ milers d'euros.
    - Entre $10$ i $18$ milers de nines, el benefici **decreix** fins a $20$ milers d'euros.

    <figure markdown="span">
      ![Gràfica del benefici de Joguines Pallaresos en funció dels milers de nines](../../img/calcul/fig_2_23_benefici_empresa.svg?v=3){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_23_benefici_empresa.tex">Figura 2.23.</a></strong> Benefici en funció dels milers de nines fabricades.</figcaption>
    </figure>

### 3.4 Contractació de venedors i ingressos màxims

!!! example "Exemple 4. Contractació de venedors i ingressos màxims"
    Una secció d'**El Corte Inglés** disposa de $12$ venedors. Cadascun genera uns ingressos mensuals per vendes de $4\,800$ €. S'estima que, per cada venedor nou que es contracti, els ingressos que genera **cadascun dels venedors** disminueixen en $200$ € mensuals.

    **a)** Troba la funció que determina els ingressos mensuals totals si es contracten $x$ venedors més.

    **b)** Quants venedors ha de tenir en total la secció perquè els ingressos siguin màxims? Quins són aquests ingressos màxims?

    **Pas 1. Identifiquem la variable i les unitats**

    - $x$: nombre de venedors nous que es contracten;
    - $12+x$: nombre total de venedors;
    - $I(x)$: ingressos mensuals totals de la secció, en euros.

    **Pas 2. Identifiquem la funció objectiu**

    Volem maximitzar els ingressos mensuals totals. Com que

    $$
    \text{ingressos totals}
      =\text{nombre de venedors}\cdot\text{ingrés per venedor},
    $$

    la funció objectiu serà el producte d'aquestes dues quantitats.

    **Pas 3. Escrivim com depèn cada quantitat de $x$**

    Si es contracten $x$ venedors més, la secció tindrà

    $$
    12+x
    $$

    venedors. Alhora, l'ingrés mensual que genera cadascun disminuirà $200x$ euros i serà

    $$
    4\,800-200x.
    $$

    **Pas 4. Obtenim la funció d'una sola variable — apartat a)**

    $$
    \begin{aligned}
    I(x)
      &=(12+x)(4\,800-200x)\\
      &=-200x^2+2\,400x+57\,600.
    \end{aligned}
    $$

    Per tant, la funció que determina els ingressos mensuals és

    $$
    \boxed{I(x)=-200x^2+2\,400x+57\,600}.
    $$

    **Pas 5. Determinem el domini del problema**

    No podem contractar un nombre negatiu de venedors i l'ingrés per venedor no pot ser negatiu:

    $$
    x\geq0,
    \qquad
    4\,800-200x\geq0.
    $$

    De la segona desigualtat obtenim $x\leq24$. Així, per estudiar la funció considerem l'interval

    $$
    0\leq x\leq24.
    $$

    En el context del problema, però, $x$ només pot prendre **valors enters**, perquè representa un nombre de persones.

    **Pas 6. Trobem els candidats a màxim**

    Derivem la funció d'ingressos:

    $$
    I'(x)=-400x+2\,400.
    $$

    Igualem la derivada a zero:

    $$
    -400x+2\,400=0
    \quad\Longrightarrow\quad
    x=6.
    $$

    El valor $x=6$ pertany al domini i és enter, de manera que és un candidat vàlid.

    **Pas 7. Comprovem el màxim amb una taula**

    | $x$ | $[0,6)$ | $6$ | $(6,24]$ |
    |:---:|:---:|:---:|:---:|
    | Comprovació | $I'(2)=1\,600$ | $I'(6)=0$ | $I'(10)=-1\,600$ |
    | Signe de $I'(x)$ | $+$ | $0$ | $-$ |
    | Comportament de $I$ | creix | màxim | decreix |

    La funció creix fins a $x=6$ i decreix a partir d'aquest valor. Per tant, $x=6$ proporciona el màxim absolut. També ho podem confirmar amb la segona derivada:

    $$
    I''(x)=-400<0.
    $$

    **Pas 8. Calculem i interpretem el resultat — apartat b)**

    Si es contracten $6$ venedors nous, la secció tindrà

    $$
    12+6=18\ \text{venedors}.
    $$

    Els ingressos mensuals màxims seran

    $$
    \begin{aligned}
    I(6)
      &=-200\cdot6^2+2\,400\cdot6+57\,600\\
      &=64\,800\ \text{€}.
    \end{aligned}
    $$

    Per tant, la secció ha de tenir **$18$ venedors en total** i obtindrà uns ingressos mensuals màxims de **$64\,800$ €**.

    <figure markdown="span">
      ![Gràfica dels ingressos mensuals en funció del nombre de venedors nous](../../img/calcul/fig_2_24_ingressos_venedors.svg?v=1){ width="700" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_24_ingressos_venedors.tex">Figura 2.24.</a></strong> Ingressos mensuals en funció del nombre de venedors nous contractats.</figcaption>
    </figure>

### 3.5 Estudi i optimització d'una funció a trossos

!!! example "Exemple 5. Evolució del preu d'un producte"
    La funció següent representa el preu d'un producte, expressat en **centenars d'euros**, en funció del temps $x$, expressat en anys:

    $$
    f(x)=
    \begin{cases}
    (x-1)^2+2, & 0\leq x<3,\\[4pt]
    \dfrac{4x^2}{x^2-3}, & x\geq3.
    \end{cases}
    $$

    **a)** A quin preu es ven el producte a l'inici de la seva vida?

    **b)** La fórmula del segon tram podria fer pensar en alguna asímptota vertical. Justifica si s'ha de tenir en compte o no.

    **c)** Troba la funció derivada.

    **d)** Estudia si la funció és contínua i derivable en tot el seu domini. Si hi ha algun punt on no sigui contínua o derivable, justifica-ho.

    **e)** Estudia el comportament del preu durant els primers cinc anys.

    **f)** Representa gràficament la funció.

    **g)** Després dels primers cinc anys, a quin valor no tornarà a arribar mai el preu de venda, per més temps que passi?

    **Pas 1. Identifiquem les variables i el domini**

    - $x$: temps transcorregut, en anys;
    - $f(x)$: preu del producte, en centenars d'euros.

    El temps no pot ser negatiu i els dos trams cobreixen tots els valors a partir de zero. Per tant,

    $$
    D_f=[0,+\infty).
    $$

    **Apartat a. Calculem el preu inicial**

    A l'inici, $x=0$. Hem d'utilitzar el primer tram:

    $$
    f(0)=(0-1)^2+2=3.
    $$

    Com que la funció està expressada en centenars d'euros,

    $$
    3\cdot100=300\ \text{€}.
    $$

    Per tant, el producte es ven inicialment per **$300$ €**.

    **Apartat b. Estudiem les possibles asímptotes verticals**

    El denominador del segon tram s'anul·la quan

    $$
    x^2-3=0
    \quad\Longrightarrow\quad
    x=\pm\sqrt3.
    $$

    Tanmateix, la fracció

    $$
    \frac{4x^2}{x^2-3}
    $$

    només defineix la funció quan $x\geq3$. Els valors $-\sqrt3$ i $\sqrt3$ no pertanyen a aquest interval. En $x=\sqrt3$ s'utilitza el primer tram, que està perfectament definit.

    Per tant, aquests zeros del denominador **no produeixen cap asímptota vertical** en la funció a trossos. En el tram $x\geq3$, el denominador és sempre positiu.

    **Apartat c. Calculem la derivada de cada tram**

    Per al primer tram,

    $$
    \frac{d}{dx}\left[(x-1)^2+2\right]=2(x-1).
    $$

    Per al segon tram, apliquem la regla del quocient:

    $$
    \begin{aligned}
    \frac{d}{dx}\left(\frac{4x^2}{x^2-3}\right)
      &=\frac{8x(x^2-3)-4x^2(2x)}{(x^2-3)^2}\\
      &=\frac{-24x}{(x^2-3)^2}.
    \end{aligned}
    $$

    Així, en els intervals oberts de cada tram,

    $$
    f'(x)=
    \begin{cases}
    2(x-1), & 0<x<3,\\[6pt]
    -\dfrac{24x}{(x^2-3)^2}, & x>3.
    \end{cases}
    $$

    En $x=3$ cal estudiar les derivades laterals. En l'extrem $x=0$ només té sentit considerar la derivada lateral dreta.

    **Apartat d. Estudiem la continuïtat i la derivabilitat en $x=3$**

    Cada expressió és contínua dins del seu interval. En el punt d'unió,

    $$
    \lim_{x\to3^-}f(x)
      =(3-1)^2+2
      =6,
    $$

    $$
    \lim_{x\to3^+}f(x)
      =\frac{4\cdot3^2}{3^2-3}
      =\frac{36}{6}
      =6,
    $$

    i, com que el segon tram inclou $x=3$,

    $$
    f(3)=6.
    $$

    Els dos límits laterals i el valor de la funció coincideixen. Per tant, $f$ és **contínua en $x=3$** i, en conseqüència, és contínua en tot el domini.

    Calculem ara les derivades laterals:

    $$
    f'(3^-)=2(3-1)=4,
    $$

    $$
    f'(3^+)
      =\frac{-24\cdot3}{(3^2-3)^2}
      =\frac{-72}{36}
      =-2.
    $$

    Com que les derivades laterals no coincideixen, $f$ **no és derivable en $x=3$**. És derivable a l'interior del domini en tots els altres punts; en $x=0$ només existeix la derivada lateral dreta.

    **Apartat e. Estudiem el comportament durant els primers cinc anys**

    En el primer tram,

    $$
    f'(x)=2(x-1).
    $$

    Aquesta derivada és negativa si $0<x<1$, val zero en $x=1$ i és positiva si $1<x<3$.

    En el segon tram,

    $$
    f'(x)=\frac{-24x}{(x^2-3)^2}.
    $$

    Per a $x\geq3$, el numerador és negatiu i el denominador és positiu. Per tant, $f'(x)<0$.

    | $x$ | $[0,1)$ | $1$ | $(1,3)$ | $3$ | $(3,5]$ |
    |:---:|:---:|:---:|:---:|:---:|:---:|
    | Comprovació | $f'(0{,}5)=-1$ | $f'(1)=0$ | $f'(2)=2$ | $f'(3^-)=4$, $f'(3^+)=-2$ | $f'(4)=-\dfrac{96}{169}$ |
    | Signe de $f'(x)$ | $-$ | $0$ | $+$ | no existeix | $-$ |
    | Comportament de $f$ | decreix | mínim | creix | màxim | decreix |

    Els valors principals són

    $$
    f(0)=3,
    \qquad
    f(1)=2,
    \qquad
    f(3)=6,
    \qquad
    f(5)=\frac{100}{22}=\frac{50}{11}\approx4{,}55.
    $$

    Durant els primers cinc anys:

    - el preu baixa de $300$ € a **$200$ €** durant el primer any;
    - després puja fins al màxim de **$600$ €** quan han passat tres anys;
    - finalment torna a baixar i, al cap de cinc anys, és aproximadament de **$454{,}55$ €**.

    **Apartat f. Representem la funció**

    <figure markdown="span">
      ![Gràfica del preu d'un producte definit mitjançant una funció a trossos](../../img/calcul/fig_2_25_preu_producte_trossos.svg?v=1){ width="720" }
      <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_25_preu_producte_trossos.tex">Figura 2.25.</a></strong> Evolució del preu del producte, expressat en centenars d'euros.</figcaption>
    </figure>

    **Apartat g. Estudiem el comportament a llarg termini**

    Per a temps grans s'utilitza el segon tram. Calculem

    $$
    \begin{aligned}
    \lim_{x\to+\infty}f(x)
      &=\lim_{x\to+\infty}\frac{4x^2}{x^2-3}\\
      &=\lim_{x\to+\infty}\frac{4}{1-\dfrac{3}{x^2}}\\
      &=4.
    \end{aligned}
    $$

    Així, $y=4$ és una asímptota horitzontal. A més, per a $x\geq3$,

    $$
    \frac{4x^2}{x^2-3}
      =4+\frac{12}{x^2-3}>4.
    $$

    El preu s'aproxima als $4$ centenars d'euros per valors superiors, però no hi arriba mai. Per tant, després dels primers cinc anys, el preu de venda **no tornarà a ser mai de $400$ €**, encara que s'hi aproximarà cada vegada més.
