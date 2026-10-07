# Exercicis de càlcul {.pdf-exercise-collection}

<p class="download-pdf"><a href="../assets/exercicis/exercicis_calcul.pdf?v=3">Descarrega el llistat en PDF</a></p>

<p class="download-pdf"><a href="../assets/exercicis/resultats_exercicis_calcul.pdf?v=1">Consulta el llistat de resultats en PDF</a></p>

---

## Tema 1. Repàs de límits i derivades

### Interpretació gràfica dels límits

**1.1.** Observa les dues gràfiques i determina, en cada cas:

$$
\lim_{x\to0^-}f(x),
\qquad
\lim_{x\to0^+}f(x),
\qquad
\lim_{x\to-\infty}f(x)
\qquad\text{i}\qquad
\lim_{x\to+\infty}f(x).
$$

<figure markdown="span">
  ![Dues gràfiques per practicar la lectura de límits laterals i límits a l'infinit](../img/calcul/fig_1_12_exercici_limits_dues_grafiques.svg?v=1){ width="850" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_12_exercici_limits_dues_grafiques.tex">Figura 1.12.</a></strong> Lectura de límits laterals i límits a l'infinit.</figcaption>
</figure>

**1.2.** A partir de la gràfica, calcula els valors següents:

<figure markdown="span">
  ![Gràfica amb un salt finit, una discontinuïtat evitable, una asímptota vertical i asímptotes horitzontals](../img/calcul/fig_1_13_exercici_lectura_limits.svg?v=1){ width="820" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_1_13_exercici_lectura_limits.tex">Figura 1.13.</a></strong> Gràfica de l'exercici 1.2.</figcaption>
</figure>

| | | |
|:--|:--|:--|
| **a)** $\displaystyle\lim_{x\to-\infty}f(x)$ | **b)** $\displaystyle\lim_{x\to-3^-}f(x)$ | **c)** $\displaystyle\lim_{x\to-3^+}f(x)$ |
| **d)** $\displaystyle\lim_{x\to-3}f(x)$ | **e)** $\displaystyle\lim_{x\to1}f(x)$ | **f)** $f(1)$ |
| **g)** $\displaystyle\lim_{x\to4^-}f(x)$ | **h)** $\displaystyle\lim_{x\to4^+}f(x)$ | **i)** $\displaystyle\lim_{x\to+\infty}f(x)$ |

### Càlcul de límits

**1.3.** Calcula els límits següents aplicant l'ordre dels infinits:

| | |
|:--|:--|
| **a)** $\displaystyle\lim_{x\to+\infty}\frac{3x^2-2x+1}{(x-2)^2}$ | **b)** $\displaystyle\lim_{x\to+\infty}\frac{2x+\ln x}{\ln x}$ |
| **c)** $\displaystyle\lim_{x\to+\infty}\frac{5+3^x}{2\cdot3^x+1}$ | **d)** $\displaystyle\lim_{x\to+\infty}\frac{4\cdot2^x}{2^x+3}$ |
| **e)** $\displaystyle\lim_{x\to+\infty}\frac{x^2-4}{x^3+1}$ | **f)** $\displaystyle\lim_{x\to+\infty}\frac{3x-1}{\sqrt{4x^2+5}}$ |
| **g)** $\displaystyle\lim_{x\to+\infty}\left(5^x-4x^6\right)$ | **h)** $\displaystyle\lim_{x\to+\infty}\left(\frac{x^2}{x-1}-\frac{x^3}{x^2+2}\right)$ |
| **i)** $\displaystyle\lim_{x\to-\infty}\left(4x^6-3x^4+x\right)$ | **j)** $\displaystyle\lim_{x\to-\infty}\left(-2x^5+7x^2\right)$ |
| **k)** $\displaystyle\lim_{x\to-\infty}\frac{3x^3-2}{x^3+5x}$ | **l)** $\displaystyle\lim_{x\to-\infty}\left(2^x+x^3\right)$ |

**1.4.** Calcula els límits. Substitueix primer el valor al qual tendeix $x$ i indica si obtens un nombre real, un quocient del tipus $\dfrac{k}{0}$ o una indeterminació $\dfrac{0}{0}$. Si el límit és infinit, calcula'n també els límits laterals.

| | |
|:--|:--|
| **a)** $\displaystyle\lim_{x\to2}(x^2-3x+5)$ | **b)** $\displaystyle\lim_{x\to0}\frac{x+4}{x-2}$ |
| **c)** $\displaystyle\lim_{x\to2}\frac{x+1}{x-2}$ | **d)** $\displaystyle\lim_{x\to-1}\frac{x+2}{(x+1)^2}$ |
| **e)** $\displaystyle\lim_{x\to2}\frac{x^2-5x+6}{2-x}$ | **f)** $\displaystyle\lim_{x\to-1}\frac{x^3+1}{(x+1)(x-2)}$ |
| **g)** $\displaystyle\lim_{x\to0}\frac{x^3-4x^2}{2x^2+6x}$ | **h)** $\displaystyle\lim_{x\to3}\frac{x^2+x-12}{x^3-5x^2+3x+9}$ |

### Estudi global de funcions

**1.5.** Considera la funció

$$
f(x)=\frac{x+2}{x^2+x-2}.
$$

- **a)** Calcula els límits de $f(x)$ quan $x\to0$, $x\to-2$, $x\to1$, $x\to+\infty$ i $x\to-\infty$. Quan calgui, estudia els límits laterals.
- **b)** Indica les asímptotes i les discontinuïtats de la funció.
- **c)** Representa gràficament els resultats.

**1.6.** Considera la funció

$$
g(x)=\frac{x^2-16}{x^2-4x}.
$$

- **a)** Determina el domini i calcula els límits en els punts on la funció no està definida.
- **b)** Calcula els límits quan $x\to+\infty$ i quan $x\to-\infty$.
- **c)** Classifica les discontinuïtats, indica les asímptotes i representa la funció amb la informació obtinguda.

### Continuïtat

**1.7.** Considera la funció

$$
f(x)=
\begin{cases}
\dfrac{x-2}{(x-3)(x-4)}, & x\leq2,\\[6pt]
\dfrac{x^2-5}{(x+2)(x-2)}, & x>2.
\end{cases}
$$

- **a)** Estudia'n la continuïtat en $x=2$ i classifica la discontinuïtat, si n'hi ha.
- **b)** Calcula $\displaystyle\lim_{x\to+\infty}f(x)$ i $\displaystyle\lim_{x\to-\infty}f(x)$.

**1.8.** En un institut s'inicia una campanya per reduir el consum d'aigua. L'estalvi acumulat ve donat per

$$
A(t)=
\begin{cases}
e^{0{,}03t}, & 1\leq t\leq60,\\[4pt]
-\dfrac{t}{30}+8, & 60<t\leq180,
\end{cases}
$$

on $t$ és el nombre de dies transcorreguts i $A(t)$ és l'estalvi expressat en milers de litres.

- **a)** Estudia la continuïtat d'$A(t)$.
- **b)** Explica què passa quan han transcorregut $60$ dies.
- **c)** En quins moments l'estalvi és de $4\,000$ litres?

### Derivada en un punt

**1.9.** Calcula la derivada de cada funció. Quan s'indiqui un punt, calcula també el valor de la derivada en aquest punt.

| | |
|:--|:--|
| **a)** $f(x)=x^3$ | **b)** $f(x)=x^2-3x$, en $x=2$ |
| **c)** $f(x)=\sqrt{x+5}$, en $x=4$ | **d)** $f(x)=e^{2x}$, en $x=0$ |

### Derivades elementals

**1.10.** Calcula la derivada de les funcions següents:

| | |
|:--|:--|
| **a)** $f(x)=5x^4-3x^2+7$ | **b)** $f(x)=\dfrac{4}{x^3}+2x$ |
| **c)** $f(x)=3\sqrt{x}-\dfrac{5}{x}$ | **d)** $f(x)=\dfrac{2}{3}x^6-\dfrac{4}{x^2}$ |
| **e)** $f(x)=7e^x-3\ln x$ | **f)** $f(x)=2\cdot5^x+\log_2x$ |

### Productes i quocients

**1.11.** Calcula les derivades. Indica la regla que utilitzes en cada cas.

| | |
|:--|:--|
| **a)** $f(x)=(x^2+1)e^x$ | **b)** $f(x)=x^3\ln x$ |
| **c)** $f(x)=(2x-1)(x^2+3)$ | **d)** $f(x)=\dfrac{x^2-4}{x+1}$ |
| **e)** $f(x)=\dfrac{3x+2}{x^2+1}$ | **f)** $f(x)=\dfrac{\ln x}{x^2}$ |

### Regla de la cadena

**1.12.** Deriva les funcions compostes següents:

| | |
|:--|:--|
| **a)** $f(x)=(2x-3)^7$ | **b)** $f(x)=\sqrt{x^2+5}$ |
| **c)** $f(x)=\dfrac{1}{(3x+1)^4}$ | **d)** $f(x)=e^{x^2-2x}$ |
| **e)** $f(x)=\ln(4x^2+1)$ | **f)** $f(x)=(x^3+1)^{-2}$ |
| **g)** $f(x)=\sqrt{1-e^x}$ | **h)** $f(x)=3^{2x+1}$ |

### Simplifica abans de derivar

**1.13.** Simplifica cada expressió i deriva-la. Conserva les restriccions del domini original.

| | |
|:--|:--|
| **a)** $f(x)=\dfrac{x^3+2x^2}{x}$ | **b)** $f(x)=\dfrac{x^4+3x}{x}$ |
| **c)** $f(x)=x^2\sqrt{x}$ | **d)** $f(x)=\dfrac{x^2-9}{x-3}$ |
| **e)** $f(x)=\ln(x^3)$, amb $x>0$ | **f)** $f(x)=e^{\ln x}$, amb $x>0$ |

### Regles de derivació

**1.14.** Calcula la derivada de les funcions següents i simplifica el resultat:

| | |
|:--|:--|
| **a)** $f(x)=\dfrac{x^2-4}{x^2+4}$ | **b)** $f(x)=\dfrac{x-2}{(3-x)^2}$ |
| **c)** $f(x)=\dfrac{4x^2}{x+\sqrt{x}}$ | **d)** $f(x)=\left(\dfrac34-\dfrac{x}{6}\right)^5$ |
| **e)** $f(x)=\sqrt[4]{2x^3}$ | **f)** $f(x)=(3\sqrt{x}+2)^6$ |

### Quocients i funcions compostes

**1.15.** Troba la derivada de les funcions següents i simplifica-la sempre que sigui possible:

| | |
|:--|:--|
| **a)** $f(x)=\dfrac{x^4}{(x-2)^3}$ | **b)** $f(x)=\left(\dfrac{x^2-3}{x}\right)^4$ |
| **c)** $f(x)=\dfrac{x^2}{(3x-1)^4}$ | **d)** $f(x)=\dfrac{4-x^2}{x^2-6x+9}$ |
| **e)** $f(x)=\left(\dfrac{2-x}{2+x}\right)^{3/2}$ | **f)** $f(x)=\dfrac{3}{x}+\dfrac{x^2}{4}$ |

### Funcions exponencials i logarítmiques

**1.16.** Deriva les funcions següents:

| | |
|:--|:--|
| **a)** $f(x)=\ln(x^2+3)$ | **b)** $f(x)=\ln\sqrt{2-x}$ |
| **c)** $f(x)=\dfrac{\ln x}{e^{2x}}$ | **d)** $f(x)=e^{3x^2-2}$ |
| **e)** $f(x)=\log_3(x^2+1)$ | **f)** $f(x)=\ln\left(\ln\dfrac{2}{x}\right)$ |

### Derivades successives

**1.17.** Calcula $f'(x)$, $f''(x)$ i $f'''(x)$ per a cadascuna de les funcions següents:

| | |
|:--|:--|
| **a)** $f(x)=x^3-2x^2+4x-1$ | **b)** $f(x)=e^{3x}$ |
| **c)** $f(x)=(x-2)e^x$ | **d)** $f(x)=\ln(x+3)$ |
| **e)** $f(x)=\dfrac{1}{x+2}$ | |

### Càlcul de coeficients a partir de $f(a)$ i $f'(a)$

Cada condició sobre el valor de la funció o de la derivada es transforma en una equació. Calcula primer $f'(x)$, substitueix-hi els valors indicats i resol el sistema obtingut.

**1.18.** Sigui

$$
f(x)=ax^2+bx+1.
$$

Calcula $a$ i $b$ sabent que $f(1)=4$ i $f'(1)=5$.

**1.19.** Considera la funció

$$
g(x)=ax^3+bx^2-2x+1.
$$

Determina $a$ i $b$ perquè $g(1)=2$ i $g'(1)=5$.

**1.20.** Sigui

$$
h(x)=ax^2+bx+3.
$$

Determina els coeficients $a$ i $b$ sabent que $h(-1)=7$ i $h'(2)=6$. Escriu la funció obtinguda.

**1.21.** Considera la funció

$$
p(x)=x^3+ax^2+bx+c.
$$

La seva gràfica passa pel punt $P=(0,2)$ i té un extrem relatiu en el punt $Q=(1,0)$.

- **a)** Escriu les tres equacions que expressen aquestes condicions.
- **b)** Determina els coeficients $a$, $b$ i $c$.
- **c)** Classifica l'extrem relatiu mitjançant la derivada segona.

## Tema 2. Aplicacions de les derivades

### Derivabilitat

**2.1.** Observa les sis gràfiques i indica en quins punts les funcions no són derivables. En cada cas, explica gràficament el motiu. Alguna de les funcions és derivable en tot $\mathbb{R}$?

<figure markdown="span">
  ![Sis gràfiques per identificar punts en què una funció no és derivable](../img/calcul/fig_2_25_exercici_punts_no_derivables.svg?v=1){ width="920" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_25_exercici_punts_no_derivables.tex">Figura 2.25.</a></strong> Estudi gràfic de la derivabilitat.</figcaption>
</figure>

**2.2.** La figura representa una funció $y=f(x)$.

- **a)** Calcula $f'(-2)$, $f'(1)$ i $f'(4)$ a partir del pendent de la gràfica.
- **b)** Indica en quins punts la funció no és derivable i justifica la resposta gràficament.

<figure markdown="span">
  ![Gràfica d'una funció formada per un arc de paràbola, un tram constant i un tram rectilini](../img/calcul/fig_2_26_exercici_derivades_grafica.svg?v=1){ width="700" }
  <figcaption><strong><a href="https://github.com/albertcid-PA/Matematiques2BAT-MACS/blob/main/figures/tikz/calcul/fig_2_26_exercici_derivades_grafica.tex">Figura 2.26.</a></strong> Càlcul de derivades a partir d'una gràfica.</figcaption>
</figure>

#### Estudi en els punts d'unió

**2.3.** Estudia la continuïtat i la derivabilitat de la funció en $x=1$:

$$
f(x)=
\begin{cases}
x^2+x-2, & x\leq 1,\\[2pt]
3x-3, & x>1.
\end{cases}
$$

**2.4.** Estudia la continuïtat i la derivabilitat de la funció en $x=-1$:

$$
f(x)=
\begin{cases}
x^2+4x+1, & x\leq -1,\\[2pt]
x-1, & x>-1.
\end{cases}
$$

**2.5.** Estudia la continuïtat i la derivabilitat de la funció en $x=2$. Interpreta gràficament el resultat.

$$
f(x)=
\begin{cases}
\sqrt{2-x}, & x\leq 2,\\[2pt]
\sqrt{x-2}, & x>2.
\end{cases}
$$

**2.6.** Considera la funció

$$
f(x)=
\begin{cases}
x^2+5x+4, & x<-2,\\[2pt]
2x+2, & -2\leq x\leq 1,\\[2pt]
x+1, & x>1.
\end{cases}
$$

- **a)** Estudia la continuïtat i la derivabilitat de $f$ en els punts d'unió.
- **b)** Determina $f'(x)$ en els intervals on existeix.
- **c)** Representa, en uns eixos separats, les funcions $f$ i $f'$.

#### Continuïtat i derivabilitat en tot el domini

**2.7.** Estudia la continuïtat i la derivabilitat de les funcions següents. Indica el conjunt de punts on cadascuna és derivable i escriu-ne la funció derivada.

**a)**

$$
f(x)=
\begin{cases}
0, & x<0,\\[2pt]
x^2, & 0\leq x<2,\\[2pt]
2x, & x\geq2.
\end{cases}
$$

**b)**

$$
g(x)=
\begin{cases}
e^{2x}, & x\leq0,\\[2pt]
2x+1, & x>0.
\end{cases}
$$

#### Càlcul de paràmetres

**2.8.** Troba els valors de $k$ perquè la funció sigui derivable en tot $\mathbb{R}$:

$$
f_k(x)=
\begin{cases}
kx^4+3x^2+5, & x\leq0,\\[2pt]
2x^2+5, & x>0.
\end{cases}
$$

**2.9.** Calcula $m$ i $n$ perquè la funció sigui derivable en tot $\mathbb{R}$:

$$
f(x)=
\begin{cases}
x^2+mx+4, & x\leq0,\\[2pt]
-2x^2+n, & x>0.
\end{cases}
$$

**2.10.** Determina $a$ i $b$ perquè la funció sigui derivable en tot $\mathbb{R}$:

$$
f(x)=
\begin{cases}
x^3+1, & x<2,\\[2pt]
ax^2+b, & x\geq2.
\end{cases}
$$

**2.11.** Considera la funció

$$
f(x)=
\begin{cases}
x^2-4x+m, & x\leq2,\\[2pt]
-x^2+nx, & x>2.
\end{cases}
$$

- **a)** Calcula $m$ i $n$ perquè $f$ sigui derivable en tot $\mathbb{R}$.
- **b)** Per als valors obtinguts, determina els punts en què $f'(x)=0$.

**2.12.** Calcula $a$ i $b$ perquè cadascuna de les funcions següents sigui derivable en tot $\mathbb{R}$:

**a)**

$$
f(x)=
\begin{cases}
ax^2+2x, & x\leq1,\\[2pt]
x^2-bx-1, & x>1.
\end{cases}
$$

**b)**

$$
g(x)=
\begin{cases}
x^3+2x, & x\leq0,\\[2pt]
ax+b, & x>0.
\end{cases}
$$

**2.13.** Calcula $a$ i $b$ perquè la funció sigui derivable en tot el seu domini:

$$
f(x)=
\begin{cases}
a-2x, & x\leq1,\\[6pt]
\dfrac{b+\ln x}{x}, & x>1.
\end{cases}
$$

**2.14.** Determina $a$ i $b$ perquè la funció sigui derivable en tot $\mathbb{R}$:

$$
f(x)=
\begin{cases}
ax^2+bx+1, & x\leq1,\\[6pt]
\dfrac{a}{x}-\dfrac{b}{x^2}+3, & x>1.
\end{cases}
$$

#### Funcions amb valor absolut

**2.15.** Escriu les funcions següents a trossos i estudia'n la continuïtat i la derivabilitat. Indica el conjunt de punts on cadascuna és derivable.

| | |
|:--|:--|
| **a)** $f(x)=\lvert x+4\rvert$ | **b)** $f(x)=\lvert -2x+4\rvert$ |
| **c)** $h(x)=2x+\lvert x-1\rvert$ | |

### Creixement, decreixement i extrems

**2.16.** Determina els intervals de creixement i de decreixement i calcula els màxims i els mínims relatius de les funcions següents. Justifica si cada solució de $f'(x)=0$ correspon realment a un extrem.

| | |
|:--|:--|
| **a)** $f(x)=x^3-3x^2-9x+4$ | **b)** $f(x)=x^4-10x^2+9$ |
| **c)** $f(x)=\dfrac{x^2+2}{x-1}$ | **d)** $f(x)=(x-1)e^{-x}$ |
| **e)** $f(x)=\dfrac{\ln x}{x^2}$ | **f)** $f(x)=\dfrac{x^3}{x^2+1}$ |
| **g)** $f(x)=x^3-3x^2+3x$ | |

**2.17.** Fes un estudi complet del creixement, el decreixement i els extrems relatius de les funcions següents:

| | |
|:--|:--|
| **a)** $f(x)=x^3-12x+1$ | **b)** $f(x)=x^4-4x^2$ |
| **c)** $f(x)=\dfrac{x^2-4}{x^2+1}$ | **d)** $f(x)=(x+1)e^{-x}$ |

### Representació de funcions

#### Funcions polinòmiques

**2.18.** Estudia i representa les funcions polinòmiques següents. Indica el domini, els talls amb els eixos, les branques a l'infinit, els intervals de creixement i decreixement i els extrems.

| | |
|:--|:--|
| **a)** $f(x)=x^4-6x^2+5$ | **b)** $f(x)=x^3+3x^2-9x-2$ |
| **c)** $f(x)=x^4-4x^3+4$ | **d)** $f(x)=x^5-10x^3+9x$ |
| **e)** $f(x)=(x-2)^3-3(x-2)$ | **f)** $f(x)=x^2(x-3)^2$ |

#### Funcions racionals

**2.19.** Estudia i representa les funcions racionals següents. Calcula els límits quan $x\to-\infty$ i $x\to+\infty$ i determina si hi ha una asímptota horitzontal o una branca infinita. Troba també les asímptotes verticals i, quan hi hagi asímptota horitzontal, estudia la posició de la corba respecte d'aquesta.

| | |
|:--|:--|
| **a)** $f(x)=\dfrac{x^2-1}{x^2-x-2}$ | **b)** $f(x)=\dfrac{2x^2-4}{x^2-1}$ |
| **c)** $f(x)=\dfrac{-x^2+x+6}{x^2-4}$ | **d)** $f(x)=\dfrac{3x^2+4}{x^2-4}$ |
| **e)** $f(x)=\dfrac{1}{(x+1)(x-2)}$ | **f)** $f(x)=\dfrac{x^2}{x-1}$ |
| **g)** $f(x)=\dfrac{-x^2}{x+1}$ | |

#### Funcions a trossos

**2.20.** Estudia la continuïtat, la derivabilitat, el creixement i els extrems de cada funció i representa-la. Recorda que cada expressió només es dibuixa dins del seu interval.

**a)**

$$
f(x)=
\begin{cases}
-x^2+4x+1, & x<1,\\
x^2-2x+3, & x\geq1.
\end{cases}
$$

**b)**

$$
g(x)=
\begin{cases}
x^3-3x+2, & x<0,\\
(x-1)^2+1, & x\geq0.
\end{cases}
$$

**c)**

$$
h(x)=
\begin{cases}
3^x, & x\leq1,\\
\dfrac{3}{x}, & x>1.
\end{cases}
$$

**d)**

$$
p(x)=
\begin{cases}
\dfrac{1}{x^2+4}, & x<0,\\[6pt]
1-\dfrac{x}{4}, & x\geq0.
\end{cases}
$$

#### Funcions irracionals, exponencials i logarítmiques

**2.21.** Troba el domini de les funcions següents i expressa'l mitjançant intervals:

| | |
|:--|:--|
| **a)** $f(x)=\sqrt{x+4}$ | **b)** $g(x)=\log(x^2-4x+3)$ |



**2.22.** Fes els estudis indicats i, en cada apartat, representa en un gràfic un esbós de la informació obtinguda. No cal estudiar els aspectes de la funció que no es demanen.

- **a)** Per a $f(x)=\sqrt[3]{9-x^2}$, determina el domini, els talls amb els eixos i els punts on no és derivable.
- **b)** Per a $g(x)=\sqrt{x^2-4x}$, determina el domini i el comportament als extrems del domini.
- **c)** Per a $h(x)=\ln(x^2-4)$, troba el domini, els talls i les asímptotes verticals.
- **d)** Per a $p(x)=\dfrac{x}{\ln(x^2+2)}$, estudia el domini i els talls amb els eixos.
- **e)** Per a $q(x)=e^{-x^2}$, estudia els límits a l'infinit, el creixement i els extrems.
- **f)** Per a $r(x)=x^2e^{-2x}$, estudia les branques a l'infinit, el creixement i els extrems.
- **g)** Per a $s(x)=\dfrac{x^2}{\ln x}$, determina el domini, les asímptotes i els intervals de creixement i decreixement.
- **h)** Per a $t(x)=\ln(x^2-9)$, estudia el domini, les asímptotes i els extrems.

#### Funcions amb valor absolut

**2.23.** Escriu cada funció a trossos, dibuixa'n la gràfica i indica en quins punts no és derivable:

| | |
|:--|:--|
| **a)** $f(x)=\lvert 2x-6\rvert$ | **b)** $f(x)=3x-\lvert x+1\rvert$ |
| **c)** $f(x)=\lvert x+1\rvert+\lvert x-2\rvert$ | **d)** $f(x)=(x-1)\lvert x+2\rvert$ |

**2.24.** Estudia i representa les funcions següents:

| | |
|:--|:--|
| **a)** $f(x)=\lvert x^2-4x+3\rvert$ | **b)** $g(x)=\lvert -x^2+2x+8\rvert$ |
| **c)** $h(x)=\lvert x^2-9\rvert$ | **d)** $p(x)=\lvert -x^2+5x-6\rvert$ |

### Exercicis de síntesi i preparació de la prova

**2.25.** Calcula la derivada de cadascuna de les funcions següents. Simplifica el resultat quan sigui possible.

| | |
|:--|:--|
| **a)** $f(x)=\dfrac{x^4}{4}+3x^{5/2}-2$ | **b)** $g(x)=\sqrt[3]{x^4}-\dfrac{2}{x^2}$ |
| **c)** $h(x)=2^x+\log_3 x$ | **d)** $p(x)=x^3\left(2x+e^x\right)$ |
| **e)** $q(x)=\ln(2x^2+7)$ | **f)** $r(x)=e^{(x^2-1)^3}$ |

**2.26.** Fes l'estudi complet de la funció

$$
f(x)=\frac{3x^2-6}{x^2-9}.
$$

Determina'n el domini, els talls amb els eixos, les asímptotes verticals i horitzontals, els límits laterals, els extrems relatius i els intervals de creixement i decreixement. Finalment, fes-ne un esbós.

**2.27.** Considera la funció

$$
g(x)=\frac{e^x}{x-1}.
$$

Troba les asímptotes verticals i horitzontals, calcula els límits laterals en els punts que no pertanyen al domini, deriva la funció i estudia'n la monotonia i els extrems relatius. Fes-ne un esbós amb la informació obtinguda.

**2.28.** Considera la funció

$$
p(x)=\lvert x-1\rvert+\lvert 2x+4\rvert.
$$

- **a)** Construeix una taula de signes per a les expressions interiors dels valors absoluts.
- **b)** Escriu $p$ com una funció a trossos.
- **c)** Indica en quins punts no és derivable i representa-la.

### Optimització

En cada problema, identifica les dades i defineix les variables necessàries. Construeix una funció d'una sola variable que representi la magnitud que es vol maximitzar o minimitzar, determina'n el domini i resol el problema. Justifica l'òptim i expressa el resultat amb les unitats corresponents.

#### Geometria plana

**2.29. Hort urbà al costat d'un mur.** Una cooperativa disposa de $120\,\text{m}$ de tanca per delimitar un hort rectangular. Un dels costats de l'hort coincideix amb un mur i no cal tancar-lo. **Determina les dimensions de l'hort perquè l'àrea sigui màxima i calcula aquesta àrea.**

- **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
- **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

**2.30. Aparador rectangular.** Una botiga vol construir un aparador rectangular de $8\,\text{m}^2$. El perfil metàl·lic dels costats horitzontals costa $4\,€$ per metre i el dels costats verticals, $6\,€$ per metre. **Determina les dimensions de l'aparador perquè el cost del perfil sigui mínim i calcula aquest cost.**

- **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
- **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un mínim.

#### Geometria a l'espai

**2.31. Llauna cilíndrica.** Es vol fabricar una llauna cilíndrica tancada amb una superfície total de $600\pi\,\text{cm}^2$. **Determina el radi i l'altura de la llauna perquè el volum sigui màxim i calcula aquest volum.**

- **a)** Defineix les variables i construeix la funció que cal optimitzar, indicant-ne el domini.
- **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

**2.32. Recipient cònic.** Es vol construir un recipient cònic amb una generatriu de $15\,\text{cm}$. Si $r$ és el radi de la base i $h$ l'altura, es compleix

$$
r^2+h^2=15^2.
$$

**Determina el radi i l'altura del recipient perquè la capacitat sigui màxima i calcula aquesta capacitat.**

- **a)** Construeix la funció que cal optimitzar a partir de la relació donada i indica'n el domini.
- **b)** Resol el problema i justifica que les dimensions obtingudes proporcionen un màxim.

#### Temps mínim

**2.33. Rescat a la platja.** Un socorrista es troba al punt $B$ de la platja. El punt $O$ de la costa més proper a una persona que necessita ajuda és a $100\,\text{m}$ de $B$, i la persona és a $60\,\text{m}$ mar endins, en direcció perpendicular a la costa des d'$O$. El socorrista corre a $6\,\text{m/s}$ i neda a $2\,\text{m/s}$.

El socorrista corre des de $B$ fins a un punt $P$ situat entre $B$ i $O$ i, des d'allà, neda en línia recta. **Determina en quin punt de la costa ha de començar a nedar perquè el temps total del rescat sigui mínim i calcula aquest temps.**

- **a)** Defineix una variable que situï el punt $P$ i construeix la funció que cal optimitzar, indicant-ne el domini.
- **b)** Resol el problema, justifica el mínim i compara'l amb les opcions de fer tot el trajecte possible corrent o començar a nedar immediatament.

#### Ingressos i beneficis

**2.34. Entrades d'un espectacle.** Una sala ven $500$ entrades quan el preu és de $40\,€$. Un estudi preveu que, per cada augment de $2\,€$, es vendran $20$ entrades menys. Cada espectador genera una despesa de $4\,€$ i l'organització té uns costos fixos de $2.000\,€$. **Determina el preu de l'entrada que maximitza el benefici i calcula el nombre d'entrades venudes i el benefici màxim.**

- **a)** Defineix la variable i construeix la funció de benefici, indicant el domini que té sentit en el context.
- **b)** Resol el problema i interpreta el resultat.

**2.35. Producció d'una cooperativa.** El cost de produir $x$ unitats d'un article és

$$
C(x)=0{,}03x^2+4x+180,
$$

i el preu de venda de cada unitat depèn de la producció segons

$$
p(x)=50-0{,}04x.
$$

La cooperativa pot produir entre $0$ i $400$ unitats i ven totes les unitats fabricades. **Determina quantes unitats ha de fabricar perquè el benefici sigui màxim i calcula aquest benefici.**

- **a)** Construeix la funció de benefici a partir dels ingressos i els costos i indica'n el domini.
- **b)** Resol primer el problema considerant $x$ una variable real. Després, com que només es poden fabricar unitats senceres, compara els enters necessaris i dona la decisió final.

#### Cost mitjà

**2.36. Cost mitjà de fabricació.** El cost total, en euros, de fabricar $x$ unitats d'un producte és

$$
C(x)=0{,}4x^2+12x+3.600, \qquad x>0.
$$

**Determina quantes unitats s'han de fabricar perquè el cost mitjà per unitat sigui mínim i calcula aquest cost.**

- **a)** Construeix la funció de cost mitjà i indica'n el domini.
- **b)** Resol primer el problema considerant $x$ una variable real. Després, si la producció ha de ser entera, compara els enters necessaris i dona la decisió final.

#### Optimització d'una funció a trossos

**2.37. Campanya publicitària.** Una empresa estudia el benefici mensual que obté segons la quantitat invertida en una campanya publicitària. Vol determinar quina inversió proporciona el benefici màxim i calcular aquest benefici. Si $x$ és la inversió, en milers d'euros, el benefici mensual $B(x)$, també expressat en milers d'euros, ve donat per

$$
B(x)=
\begin{cases}
-x^2+8x+20, & 0\leq x\leq4,\\[4pt]
-2x^2+20x-12, & 4<x\leq8.
\end{cases}
$$

- **a)** Estudia la funció en tot el domini i determina la inversió que proporciona el benefici màxim. Justifica el resultat tenint en compte el punt d'unió i els extrems del domini.
- **b)** Representa gràficament la funció i interpreta el resultat en el context del problema.

!!! info "Preparació de les PAU"
    Continua amb el recull de [problemes PAU de càlcul](problemes-pau.md), ordenat per continguts i amb exercicis de convocatòries reals i d'entrenament de tipus PAU.
