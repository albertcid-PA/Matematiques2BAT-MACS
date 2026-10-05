# Problemes PAU d'anàlisi

Aquest recull conté problemes d'anàlisi basats directament en les PAU de Catalunya del període **2020–2026**. Estan agrupats per contingut i cada enunciat indica l'any, la convocatòria i la sèrie de procedència.

En tots els problemes cal justificar els passos, escriure els resultats amb les unitats corresponents i interpretar-los dins del context. Per practicar separadament cada tècnica, consulta els [exercicis dels temes 1 i 2](exercicis.md).

## Estudi i interpretació d'una funció

**PAU 1. Evolució dels seguidors d'un divulgador** *(basat en l'exercici 1 de la convocatòria ordinària de 2026, sèrie 1)*. Un metge comença a divulgar continguts sobre salut a les xarxes socials. El nombre de seguidors que té al cap de $t$ setmanes és

$$
f(t)=10t^3-120t^2+450t+700, \qquad t\in[0,10].
$$

- **a)** Calcula quants seguidors té inicialment i al cap de deu setmanes.
- **b)** Estudia els intervals de creixement i decreixement i determina els extrems relatius.
- **c)** Fes un esbós de la gràfica utilitzant la informació obtinguda.
- **d)** Interpreta en quin moment publica un vídeo polèmic que provoca una pèrdua de seguidors i en quin moment publica un vídeo d'èxit a partir del qual torna a créixer.
- **e)** Determina en quin instant assoleix el nombre màxim absolut de seguidors durant les deu setmanes i calcula aquest nombre.

**PAU 2. Microorganismes en una mostra** *(basat en l'exercici 3 de la convocatòria ordinària de 2025, sèrie 4)*. El nombre de microorganismes vius d'una mostra de laboratori, mesurat en desenes, és

$$
f(x)=\frac{15x}{9+x^2}+k, \qquad x\geq0,
$$

on $x$ és el temps transcorregut, en hores.

- **a)** Determina $k$ sabent que inicialment hi havia $50$ microorganismes.
- **b)** Troba l'instant en què el nombre de microorganismes és màxim i calcula aquest màxim.
- **c)** Calcula el límit quan $x\to+\infty$ i interpreta el resultat en el context.
- **d)** Fes un esbós de la gràfica tenint en compte el valor inicial, el màxim i el comportament a llarg termini.

**PAU 3. Visitants d'una exposició** *(basat en el problema 3 de la convocatòria extraordinària de 2022, sèrie 3)*. El nombre de visitants setmanals d'una exposició, expressat en desenes de persones, és

$$
f(x)=\frac{240x}{x^2-2x+4}, \qquad x\geq1,
$$

on $x$ és el nombre de setmanes que fa que l'exposició està oberta.

- **a)** Calcula quantes persones visitaran l'exposició la primera setmana.
- **b)** Troba la taxa de variació mitjana del nombre de visitants entre la primera setmana i la quarta i interpreta'n el signe.
- **c)** Estudia la monotonia de la funció dins del seu domini temporal.
- **d)** Determina la setmana en què es preveu la màxima afluència i el nombre de visitants corresponent.

**PAU 4. Evolució dels clients d'una empresa** *(basat en el problema 4 de la convocatòria extraordinària de 2021, sèrie 1)*. Una empresa que ha entrat en crisi modelitza el nombre de clients, expressat en milers, mitjançant

$$
C(t)=3-\frac{1}{t^2-4t+5}, \qquad t\geq0,
$$

on $t$ és el temps transcorregut, en anys.

- **a)** Calcula quants clients tenia l'empresa inicialment i al cap d'un any.
- **b)** Determina l'instant en què deixa de perdre clients i calcula quants en té en aquell moment.
- **c)** Comprova que l'instant trobat correspon a un mínim.
- **d)** Calcula quant temps ha de passar perquè l'empresa recuperi el nombre inicial de clients.
- **e)** Estudia el comportament a llarg termini de l'empresa.

## Modelització, comparació i optimització

**PAU 5. Demanda d'un accessori tecnològic** *(basat en l'exercici 1 de la convocatòria extraordinària de 2026, sèrie 2)*. La demanda setmanal d'un accessori tecnològic depèn del seu preu $p$, expressat en euros, segons

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

**PAU 6. Tarifes de dues companyies de taxi** *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 1)*. La companyia A cobra una quantitat fixa de $20\,€$ més $0{,}4\,€$ per quilòmetre. La tarifa de la companyia B és

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

**PAU 7. Tarifa d'una empresa de paqueteria** *(basat en el problema 1 de la convocatòria ordinària de 2024, sèrie 5)*. Per enviar un paquet a una distància determinada, una empresa aplica les tarifes següents:

- fins a $2\,\text{kg}$, el preu és fix i val $30\,€$;
- si el paquet pesa més de $2\,\text{kg}$ però menys d'$11\,\text{kg}$, els primers $2\,\text{kg}$ costen $15\,€$ per quilogram i la resta, $12\,€$ per quilogram;
- si pesa entre $11\,\text{kg}$ i $25\,\text{kg}$, ambdós inclosos, els primers $11\,\text{kg}$ costen $13\,€$ per quilogram i la resta, $15\,€$ per quilogram.

- **a)** Calcula el preu d'enviar un paquet de $9{,}5\,\text{kg}$ i un de $13\,\text{kg}$.
- **b)** Construeix la funció a trossos $P(x)$ que dona el preu de l'enviament en funció del pes $x$.
- **c)** Estudia la continuïtat de $P$ en els punts on canvia la tarifa i classifica les discontinuïtats, si n'hi ha.
- **d)** Representa gràficament la funció per a $0<x\leq25$.
- **e)** Si un enviament ha costat $162\,€$, calcula el pes del paquet i comprova a quin tram pertany la solució.

**PAU 8. Cost de neteja d'una empresa** *(basat en el problema 4 de la convocatòria ordinària de 2023, sèrie 5)*. El cost anual de la neteja d'una empresa, expressat en centenars d'euros, és

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

**PAU 9. Evolució del preu d'un producte** *(basat en el problema 2 de la convocatòria extraordinària de 2020, sèrie 4)*. Un producte va estar a la venda durant deu anys. El seu preu $P(t)$, en euros, depenia del temps $t$, en anys, segons

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
