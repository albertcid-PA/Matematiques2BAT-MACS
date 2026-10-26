# Operacions amb matrius

!!! abstract "Càlcul matricial pas a pas"
    Aquesta eina permet practicar **operacions amb matrius**. Els càlculs es presenten de manera exacta i amb els passos que caldria justificar en paper.

    Pots mostrar els passos d'un en un per comparar-los amb el teu procediment.

    Per aïllar $X$ en una equació matricial, utilitza l'eina [**Equacions matricials**](aillament-equacions-matricials.md).

<div id="matrix-calculator-tool" class="fa-tool mc-tool" data-tool-url="../../../javascripts/matrix-calculator-tool.js?v=21">
  <noscript>
    <p class="fa-message">Cal activar el JavaScript del navegador per utilitzar aquesta eina.</p>
  </noscript>

  <div class="fa-input-card mc-input-card">
    <section data-mc-panel="operations">
      <label for="mc-op-expression" class="fa-label">Escriu l'operació matricial</label>
      <textarea id="mc-op-expression" class="mc-expression-input" rows="3" spellcheck="false" aria-describedby="mc-op-help">[[1 2][3 4]] + [[2 -1][0 3]]</textarea>
      <p id="mc-op-help" class="fa-help">Escriu cada fila entre claudàtors i separa els elements amb espais. Pots combinar <code>+</code>, <code>-</code>, <code>*</code> i parèntesis; utilitza <code>^t</code> per transposar, <code>^2</code>, <code>^3</code>… per a les potències i <code>^-1</code> per a la inversa. Les minúscules poden aparèixer dins la matriu o fora com a coeficients: <code>a * [[1 2][3 4]]</code>. Per trobar-ne el valor, completa una igualtat amb <code>=</code>.</p>

      <div class="fa-example-row" aria-label="Exemples d'operacions">
        <span>Prova:</span>
        <button type="button" data-mc-op-example="sum">Suma</button>
        <button type="button" data-mc-op-example="product">Producte</button>
        <button type="button" data-mc-op-example="scalar">Producte per un nombre</button>
        <button type="button" data-mc-op-example="literal">Coeficient literal</button>
        <button type="button" data-mc-op-example="transpose">Transposició</button>
        <button type="button" data-mc-op-example="power">Potència</button>
        <button type="button" data-mc-op-example="inverse">Inversa</button>
        <button type="button" data-mc-op-example="combined">Operació combinada</button>
        <button type="button" data-mc-op-example="incompatible">Operació impossible</button>
      </div>

      <div class="fa-actions">
        <button id="mc-op-calculate" class="fa-primary" type="button">Resol pas a pas</button>
        <button id="mc-op-example" type="button">Exemple $3\times2$: troba $x$ i $y$</button>
        <button id="mc-op-reset" type="button">Reinicia</button>
      </div>
    </section>

    <p class="fa-help">Pots escriure enters, decimals amb coma o punt i fraccions com <code>3/2</code>.</p>
    <span id="mc-status" class="fa-status" role="status" aria-live="polite"></span>
  </div>

  <div id="mc-message" class="fa-message" role="alert" hidden></div>
  <section id="mc-results" class="fa-results" aria-live="polite" hidden>
    <div class="fa-result-heading"><div><p class="fa-eyebrow">Procediment obtingut</p><h2 id="mc-result-title">Resolució</h2></div><span id="mc-progress" class="dt-progress"></span></div>
    <ol id="mc-step-list" class="dt-step-list"></ol>
    <div id="mc-reveal-actions" class="fa-actions dt-reveal-actions">
      <button id="mc-next" class="fa-primary" type="button">Mostra el pas següent</button>
      <button id="mc-show-all" type="button">Mostra tots els passos</button>
    </div>
  </section>
</div>

!!! note "Criteri de càlcul"
    Pots introduir matrius rectangulars de diferents ordres. L'exemple específic utilitza matrius $3\times2$ per practicar la transposició i calcular només els elements necessaris d'un producte.

!!! note "Conveni de notació"
    Les **majúscules** $A$, $B$, $C$, $X$ i $Y$ representen matrius. Les **minúscules** $a$, $b$, $c$, $x$, $y$... representen nombres: poden aparèixer dins d'una matriu com a elements o fora com a coeficients escalars que multipliquen una matriu.

    En aquesta eina cal escriure els elements de cada matriu. Per treballar només amb els noms $A$, $B$, $C$... i obtenir una expressió $X=\ldots$, utilitza [**Equacions matricials**](aillament-equacions-matricials.md).

!!! warning "Abast de l'eina"
    L'eina resol operacions numèriques i igualtats matricials amb elements desconeguts. Quan una operació no és possible, n'indica el motiu i recorda la propietat teòrica que cal aplicar. No substitueix la justificació de les dimensions ni de l'ordre dels factors.
