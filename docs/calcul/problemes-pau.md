# Problemes PAU de càlcul

Aquest recull conté problemes de càlcul procedents de les **PAU de Catalunya de Matemàtiques Aplicades a les Ciències Socials** i propostes d'entrenament amb el mateix estil. Estan agrupats per contingut i cada enunciat procedent d'una prova indica l'any, la convocatòria i la sèrie. Quan se n'ha adaptat el context o se n'han ampliat les preguntes, s'indica amb l'expressió *basat en*. Els problemes nous s'identifiquen com a *problemes d'entrenament de tipus PAU*.

Els problemes tenen numeració contínua amb el format **PAU.C.n**, on **C** identifica el bloc de **Càlcul**.

En tots els problemes cal justificar els passos, escriure els resultats amb les unitats corresponents i interpretar-los dins del context. Per practicar separadament cada tècnica, consulta els [exercicis dels temes 1 i 2](exercicis.md).

## Estudi i interpretació d'una funció

**PAU.C.1. Evolució dels seguidors d'un divulgador** *(basat en l'exercici 1 de la convocatòria ordinària de 2026, sèrie 1)*. Un metge comença a divulgar continguts sobre salut a les xarxes socials. El nombre de seguidors que té al cap de $t$ setmanes és

$$
f(t)=10t^3-120t^2+450t+700, \qquad t\in[0,10].
$$

- **a)** Calcula quants seguidors té inicialment i al cap de deu setmanes.
- **b)** Estudia els intervals de creixement i decreixement i determina els extrems relatius.
- **c)** Fes un esbós de la gràfica utilitzant la informació obtinguda.
- **d)** Interpreta en quin moment publica un vídeo polèmic que provoca una pèrdua de seguidors i en quin moment publica un vídeo d'èxit a partir del qual torna a créixer.
- **e)** Determina en quin instant assoleix el nombre màxim absolut de seguidors durant les deu setmanes i calcula aquest nombre.

**PAU.C.2. Microorganismes en una mostra** *(basat en l'exercici 3 de la convocatòria ordinària de 2025, sèrie 4)*. El nombre de microorganismes vius d'una mostra de laboratori, mesurat en desenes, és

$$
f(x)=\frac{15x}{9+x^2}+k, \qquad x\geq0,
$$

on $x$ és el temps transcorregut, en hores.

- **a)** Determina $k$ sabent que inicialment hi havia $50$ microorganismes.
- **b)** Troba l'instant en què el nombre de microorganismes és màxim i calcula aquest màxim.
- **c)** Calcula el límit quan $x\to+\infty$ i interpreta el resultat en el context.
- **d)** Fes un esbós de la gràfica tenint en compte el valor inicial, el màxim i el comportament a llarg termini.

**PAU.C.3. Visitants d'una exposició** *(basat en el problema 3 de la convocatòria extraordinària de 2022, sèrie 3)*. El nombre de visitants setmanals d'una exposició, expressat en desenes de persones, és

$$
f(x)=\frac{240x}{x^2-2x+4}, \qquad x\geq1,
$$

on $x$ és el nombre de setmanes que fa que l'exposició està oberta.

- **a)** Calcula quantes persones visitaran l'exposició la primera setmana.
- **b)** Troba la taxa de variació mitjana del nombre de visitants entre la primera setmana i la quarta i interpreta'n el signe.
- **c)** Estudia la monotonia de la funció dins del seu domini temporal.
- **d)** Determina la setmana en què es preveu la màxima afluència i el nombre de visitants corresponent.

**PAU.C.4. Evolució dels clients d'una empresa** *(basat en el problema 4 de la convocatòria extraordinària de 2021, sèrie 1)*. Una empresa que ha entrat en crisi modelitza el nombre de clients, expressat en milers, mitjançant

$$
C(t)=3-\frac{1}{t^2-4t+5}, \qquad t\geq0,
$$

on $t$ és el temps transcorregut, en anys.

- **a)** Calcula quants clients tenia l'empresa inicialment i al cap d'un any.
- **b)** Determina l'instant en què deixa de perdre clients i calcula quants en té en aquell moment.
- **c)** Comprova que l'instant trobat correspon a un mínim.
- **d)** Calcula quant temps ha de passar perquè l'empresa recuperi el nombre inicial de clients.
- **e)** Estudia el comportament a llarg termini de l'empresa.

## Funcions exponencials i logarítmiques

**PAU.C.5. Impacte d'una campanya publicitària** *(problema d'entrenament de tipus PAU)*. Una empresa acaba de llançar una aplicació mòbil i inicia una campanya publicitària. El nombre de descàrregues diàries de l'aplicació, expressat en centenars, es modelitza mitjançant

$$
D(t)=20+10(t+1)e^{-t/2}, \qquad t\geq0,
$$

on $t$ és el temps transcorregut, en mesos, des de l'inici de la campanya.

- **a)** Quantes descàrregues diàries es produeixen en el moment d'iniciar la campanya?
- **b)** L'empresa vol saber durant quant temps augmentarà l'efecte de la campanya. Estudia el creixement i el decreixement de $D(t)$.
- **c)** Determina en quin moment s'assoleix el nombre màxim de descàrregues diàries i calcula aquest màxim.
- **d)** Quan hagi passat molt de temps, quantes descàrregues diàries preveu el model que es mantindran? Justifica la resposta a partir del comportament de l'expressió exponencial.
- **e)** Fes un esbós de la gràfica i assenyala-hi el valor inicial, el màxim i el valor al qual tendeix el nombre de descàrregues.

**PAU.C.6. Cost mitjà de producció** *(problema d'entrenament de tipus PAU)*. Una empresa fabrica un component electrònic. El cost mitjà de producció, expressat en euros per unitat, depèn de la quantitat fabricada segons la funció

$$
C(x)=20+x-4\ln x, \qquad x>0,
$$

on $x$ és la producció expressada en centenars d'unitats. Per exemple, $x=3$ correspon a una producció de $300$ unitats.

- **a)** Justifica per què el domini del model és $x>0$. Quin és el cost mitjà per unitat quan l'empresa fabrica $100$ unitats?
- **b)** L'empresa vol saber fins a quin nivell de producció l'augment de la quantitat fabricada permet reduir el cost mitjà. Estudia els intervals de creixement i decreixement de $C(x)$.
- **c)** Determina quantes unitats s'han de fabricar perquè el cost mitjà sigui mínim i calcula aquest cost.
- **d)** L'empresa s'ha proposat aconseguir un cost mitjà inferior a $18\,€$ per unitat. Justifica si aquest objectiu és possible segons el model.
- **e)** Estudia què passa amb el cost mitjà quan la producció s'apropa a zero i quan augmenta indefinidament. Fes un esbós de la gràfica que reflecteixi aquest comportament i el mínim obtingut.

## Modelització, comparació i optimització

### Construcció de la funció a partir de l'enunciat

**PAU.C.7. Reserves d'un hotel** *(basat en l'exercici 4, opció B, de la convocatòria ordinària de 2025, sèrie 1)*. Un hotel cobra $80\,€$ per una habitació doble i, amb aquest preu, preveu tenir $100$ reserves. Un estudi indica que, per cada euro de descompte, s'aconseguiran dues reserves més.

- **a)** Si $x$ és el descompte aplicat, determina la funció que expressa els ingressos de l'hotel en funció de $x$. Indica els valors admissibles de $x$.
- **b)** Quin ha de ser el preu de l'habitació perquè els ingressos siguin màxims? Calcula també el nombre de reserves i els ingressos màxims.

**PAU.C.8. Contractació de venedors** *(problema d'entrenament de tipus PAU)*. Una botiga en línia disposa de $10$ venedors i cadascun genera unes vendes mensuals de $5\,400\,€$. S'estima que, per cada venedor nou que es contracti, les vendes mensuals gestionades per cadascun dels venedors disminuiran en $180\,€$.

- **a)** Determina la funció que expressa els ingressos mensuals totals si es contracten $x$ venedors nous. Indica el domini de la funció dins del context.
- **b)** Quants venedors ha de tenir en total la botiga perquè els ingressos siguin màxims? Quins seran aquests ingressos?

**PAU.C.9. Venda de motxilles** *(problema d'entrenament de tipus PAU)*. Una empresa ven mensualment $40$ motxilles a un preu de $80\,€$ cadascuna. Per cada euro que es redueixi el preu, es preveu que es vendran dues motxilles més. L'empresa té uns costos fixos mensuals de $800\,€$, i fabricar cada motxilla costa $20\,€$.

- **a)** Si $x$ és la reducció del preu, determina la funció que expressa el benefici mensual de l'empresa en funció de $x$.
- **b)** Quina reducció de preu permet obtenir el benefici màxim? Calcula el preu de venda, el nombre de motxilles venudes i el benefici màxim.

**PAU.C.10. Demanda d'un accessori tecnològic** *(basat en l'exercici 1 de la convocatòria extraordinària de 2026, sèrie 2)*. La demanda setmanal d'un accessori tecnològic depèn del seu preu $p$, expressat en euros, segons

$$
d(p)=500-10p-p^2, \qquad 0<p<15.
$$

Els ingressos setmanals són $I(p)=p\,d(p)$.

- **a)** Escriu i simplifica la funció $I(p)$.
- **b)** Determina el preu que maximitza els ingressos setmanals.
- **c)** Calcula la demanda corresponent i els ingressos màxims.
- **d)** L'elasticitat de la demanda respecte del preu es defineix, per a aquest exercici, com

$$
E(p)=-\frac{p\,d'(p)}{d(p)}.
$$

Troba l'expressió d'$E(p)$ i calcula'n el valor quan el preu és de $5\,€$ i quan és de $10\,€$. No cal memoritzar aquesta fórmula.

**PAU.C.11. Tarifes de dues companyies de taxi** *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 1)*. La companyia A cobra una quantitat fixa de $20\,€$ més $0{,}4\,€$ per quilòmetre. La tarifa de la companyia B és

$$
g(x)=0{,}01x^2+0{,}1x+10,
$$

on $x\geq0$ és la distància recorreguda en quilòmetres.

- **a)** Escriu la funció $f(x)$ que dona el preu de la companyia A.
- **b)** Compara el preu de les dues companyies per a un recorregut de $10\,\text{km}$ i per a un de $80\,\text{km}$.
- **c)** Interpreta el valor $g(0)$ i determina si la companyia B cobra un cost fix.
- **d)** Calcula la distància positiva per a la qual les dues tarifes coincideixen.
- **e)** Considerant només els trajectes des de $0\,\text{km}$ fins a la distància trobada, determina quan és màxima la diferència de preu entre les dues tarifes i calcula aquesta diferència.

## Funcions a trossos

**PAU.C.12. Tarifa d'una empresa de paqueteria** *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 5)*. Per enviar un paquet a una distància determinada, una empresa aplica les tarifes següents:

- fins a $2\,\text{kg}$, el preu és fix i val $30\,€$;
- si el paquet pesa més de $2\,\text{kg}$ però menys d'$11\,\text{kg}$, els primers $2\,\text{kg}$ costen $15\,€$ per quilogram i la resta, $12\,€$ per quilogram;
- si pesa entre $11\,\text{kg}$ i $25\,\text{kg}$, ambdós inclosos, els primers $11\,\text{kg}$ costen $13\,€$ per quilogram i la resta, $15\,€$ per quilogram.

- **a)** Calcula el preu d'enviar un paquet de $9{,}5\,\text{kg}$ i un de $13\,\text{kg}$.
- **b)** Construeix la funció a trossos $P(x)$ que dona el preu de l'enviament en funció del pes $x$.
- **c)** Estudia la continuïtat de $P$ en els punts on canvia la tarifa i classifica les discontinuïtats, si n'hi ha.
- **d)** Representa gràficament la funció per a $0<x\leq25$.
- **e)** Si un enviament ha costat $162\,€$, calcula el pes del paquet i comprova a quin tram pertany la solució.

**PAU.C.13. Cost de neteja d'una empresa** *(basat en el problema 4 de la convocatòria ordinària de 2023, sèrie 5)*. El cost anual de la neteja d'una empresa, expressat en centenars d'euros, és

$$
C(t)=
\begin{cases}
\dfrac{t^2}{10}+10, & 0\leq t\leq10,\\[6pt]
28-\dfrac{(t-14)^2}{2}, & 10<t\leq20,
\end{cases}
$$

on $t$ és el nombre d'anys transcorreguts des de l'obertura.

- **a)** Calcula el cost de la neteja en el moment de l'obertura, al cap de deu anys i al cap de vint anys.
- **b)** Comprova que la funció és contínua en el punt d'unió.
- **c)** Estudia la monotonia de cada tram i representa gràficament la funció.
- **d)** Determina en quin moment el cost va ser màxim i calcula aquest cost en euros.

**PAU.C.14. Evolució del preu d'un producte** *(basat en el problema 2 de la convocatòria extraordinària de 2020, sèrie 4)*. Un producte va estar a la venda durant deu anys. El seu preu $P(t)$, en euros, depenia del temps $t$, en anys, segons

$$
P(t)=
\begin{cases}
5(t+1)^2-5, & 0\leq t\leq2,\\[4pt]
-4t+48, & 2<t\leq10.
\end{cases}
$$

- **a)** Estudia la continuïtat de la funció en el punt d'unió.
- **b)** Determina els intervals en què el preu va créixer i aquells en què va disminuir.
- **c)** Calcula el preu màxim assolit i l'any en què es va assolir.
- **d)** Calcula la taxa de variació mitjana del preu durant els darrers cinc anys.
- **e)** Representa la funció i assenyala-hi el punt d'unió i el màxim absolut.

!!! info "Recursos per continuar practicant"

    **PAU de Catalunya**

    - [Examenselectivitat — Matemàtiques CC.SS.](https://examenselectivitat.cat/selectivitat/Matem%C3%A0tiques%20CC.SS./): problemes classificats per temes.
    - [Selecat](https://www.selecat.cat/): exàmens classificats per anys i convocatòries.
    - [Canal Universitats](https://universitats.gencat.cat/ca/pau/models-examen-anys-anteriors/matematiques-aplicades-cc/): models d'examen i criteris de correcció oficials.

    **Proves d'altres comunitats**

    - [Toomates](https://www.toomates.net/): recopilatoris de proves PAU de diferents comunitats.
    - [Exámenes de PAU](https://www.examenesdepau.com/): cercador de proves per comunitat, assignatura, any i convocatòria.

    Les proves d'altres comunitats són útils per practicar, però els continguts, l'estructura i els criteris de correcció poden diferir dels de les PAU de Catalunya.
