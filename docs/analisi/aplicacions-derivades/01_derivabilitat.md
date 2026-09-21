# Derivabilitat

Si una funció és derivable en un punt, aleshores és contínua en aquell punt:

$$
f\text{ derivable en }a\quad\Longrightarrow\quad f\text{ contínua en }a.
$$

El recíproc no sempre és cert: una funció pot ser contínua i no ser derivable, com passa en un punt angulós.

Per comprovar la derivabilitat d'una funció a trossos en $x=a$:

1. Comprovem que sigui contínua en $a$.
2. Calculem les derivades laterals $f'_-(a)$ i $f'_+(a)$.
3. La funció és derivable si les dues derivades laterals existeixen, són finites i coincideixen.

!!! example "Exemple"
    Estudiem la derivabilitat en $x=1$ de

    $$
    f(x)=
    \begin{cases}
      x^2, & x\leq1,\\
      2x-1, & x>1.
    \end{cases}
    $$

    **Continuïtat:** els dos trams tendeixen a $1$ i $f(1)=1$. Per tant, $f$ és contínua en $x=1$.

    **Derivades laterals:**

    $$f'_-(1)=2\cdot1=2,\qquad f'_+(1)=2.$$

    Com que coincideixen, $f$ és derivable en $x=1$ i $f'(1)=2$.

!!! warning "Error habitual"
    Que els dos trams tinguin derivada no garanteix que la funció sigui derivable en el punt d'unió. També cal comprovar la continuïtat i comparar les derivades laterals.
