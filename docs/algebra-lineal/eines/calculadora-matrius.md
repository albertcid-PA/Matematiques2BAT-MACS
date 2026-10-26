# Calculadora de matrius

!!! abstract "Càlcul matricial pas a pas"
    Aquesta eina permet practicar **operacions amb matrius**, **equacions matricials** i **sistemes d'equacions matricials**. Els càlculs es presenten de manera exacta i amb els passos que caldria justificar en paper.

    Pots mostrar els passos d'un en un per comparar-los amb el teu procediment.

<div id="matrix-calculator-tool" class="fa-tool mc-tool" data-tool-url="../../../javascripts/matrix-calculator-tool.js?v=15">
  <noscript>
    <p class="fa-message">Cal activar el JavaScript del navegador per utilitzar aquesta eina.</p>
  </noscript>

  <div class="fa-mode-tabs" role="tablist" aria-label="Tipus de càlcul matricial">
    <button class="fa-mode-tab is-active" type="button" role="tab" aria-selected="true" data-mc-mode="operations">Operacions</button>
    <button class="fa-mode-tab" type="button" role="tab" aria-selected="false" data-mc-mode="equations">Equacions matricials</button>
    <button class="fa-mode-tab" type="button" role="tab" aria-selected="false" data-mc-mode="systems">Sistemes matricials</button>
  </div>

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

    <section data-mc-panel="equations" hidden>
      <label><span class="fa-label">Tipus d'equació</span>
        <select id="mc-eq-kind">
          <option value="xplus">$X+A=B$</option>
          <option value="ax">$AX=B$</option>
          <option value="xa">$XA=B$</option>
          <option value="axb">$AXB=C$</option>
          <option value="diff">$AX-BX=C$</option>
          <option value="coefficients">$AX=B$, resolució per coeficients</option>
        </select>
      </label>
      <p id="mc-eq-hint" class="fa-help">S'utilitzen les matrius $A$ i $B$.</p>

      <div class="mc-editor-grid mc-editor-grid--three">
        <div class="mc-editor-card"><strong>$A=$</strong><div class="mc-matrix-input">
          <input id="mc-eq-a11" type="text" inputmode="decimal" value="1"><input id="mc-eq-a12" type="text" inputmode="decimal" value="2">
          <input id="mc-eq-a21" type="text" inputmode="decimal" value="0"><input id="mc-eq-a22" type="text" inputmode="decimal" value="1">
        </div></div>
        <div class="mc-editor-card"><strong>$B=$</strong><div class="mc-matrix-input">
          <input id="mc-eq-b11" type="text" inputmode="decimal" value="5"><input id="mc-eq-b12" type="text" inputmode="decimal" value="1">
          <input id="mc-eq-b21" type="text" inputmode="decimal" value="2"><input id="mc-eq-b22" type="text" inputmode="decimal" value="-1">
        </div></div>
        <div class="mc-editor-card"><strong>$C=$</strong><div class="mc-matrix-input">
          <input id="mc-eq-c11" type="text" inputmode="decimal" value="7"><input id="mc-eq-c12" type="text" inputmode="decimal" value="2">
          <input id="mc-eq-c21" type="text" inputmode="decimal" value="2"><input id="mc-eq-c22" type="text" inputmode="decimal" value="-1">
        </div></div>
      </div>

      <div class="fa-actions">
        <button id="mc-eq-calculate" class="fa-primary" type="button">Resol pas a pas</button>
        <button id="mc-eq-reset" type="button">Reinicia</button>
      </div>
    </section>

    <section data-mc-panel="systems" hidden>
      <p class="fa-label">Sistema matricial</p>
      <p class="fa-help"><strong>Completa els coeficients de $X$ i $Y$</strong></p>
      <div class="mc-system-entry" aria-label="Coeficients del sistema matricial">
        <div class="mc-system-entry-row">
          <input id="mc-sys-a" type="text" inputmode="decimal" value="1" aria-label="Coeficient de X de la primera equació"><span>$X$</span>
          <span class="mc-system-entry-operator">+</span>
          <input id="mc-sys-b" type="text" inputmode="decimal" value="1" aria-label="Coeficient de Y de la primera equació"><span>$Y=P$</span>
        </div>
        <div class="mc-system-entry-row">
          <input id="mc-sys-c" type="text" inputmode="decimal" value="1" aria-label="Coeficient de X de la segona equació"><span>$X$</span>
          <span class="mc-system-entry-operator">+</span>
          <input id="mc-sys-d" type="text" inputmode="decimal" value="-1" aria-label="Coeficient de Y de la segona equació"><span>$Y=Q$</span>
        </div>
      </div>
      <p class="fa-help"><strong>Matrius dels termes independents</strong></p>
      <div class="mc-editor-grid">
        <div class="mc-editor-card"><strong>$P=$</strong><div class="mc-matrix-input mc-matrix-input--system">
          <input id="mc-sys-p11" type="text" inputmode="decimal" value="4"><input id="mc-sys-p12" type="text" inputmode="decimal" value="6">
          <input id="mc-sys-p21" type="text" inputmode="decimal" value="2"><input id="mc-sys-p22" type="text" inputmode="decimal" value="0">
        </div></div>
        <div class="mc-editor-card"><strong>$Q=$</strong><div class="mc-matrix-input mc-matrix-input--system">
          <input id="mc-sys-q11" type="text" inputmode="decimal" value="2"><input id="mc-sys-q12" type="text" inputmode="decimal" value="0">
          <input id="mc-sys-q21" type="text" inputmode="decimal" value="0"><input id="mc-sys-q22" type="text" inputmode="decimal" value="2">
        </div></div>
      </div>
      <div class="fa-actions">
        <button id="mc-sys-calculate" class="fa-primary" type="button">Resol pas a pas</button>
        <button id="mc-sys-reset" type="button">Reinicia</button>
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
    A la pestanya d'operacions pots introduir matrius rectangulars de diferents ordres. Les equacions i els sistemes matricials treballen amb matrius d'ordre $2\times2$. L'exemple específic d'operacions utilitza matrius $3\times2$ per practicar la transposició i calcular només els elements necessaris d'un producte.

!!! note "Conveni de notació"
    Les **majúscules** $A$, $B$, $C$, $X$ i $Y$ representen matrius. Les **minúscules** $a$, $b$, $c$, $x$, $y$... representen nombres: poden aparèixer dins d'una matriu com a elements o fora com a coeficients escalars que multipliquen una matriu.

    En el camp d'operacions cal escriure els elements de cada matriu. La calculadora no pot operar només amb el nom $A$ o $B$ si no coneix els seus elements.

!!! warning "Abast de l'eina"
    La calculadora resol operacions numèriques i igualtats matricials lineals amb elements desconeguts. Quan una operació no és possible, n'indica el motiu i recorda la propietat teòrica que cal aplicar. No estudia sistemes amb paràmetres ni substitueix la justificació de les dimensions i de l'ordre dels factors.
