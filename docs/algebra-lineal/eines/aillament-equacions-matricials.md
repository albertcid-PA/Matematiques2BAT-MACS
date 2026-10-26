# Equacions matricials

!!! abstract "Aïllar $X$ respectant l'ordre dels factors"
    Escriu qualsevol **equació matricial lineal en $X$** del temari. L'eina desenvoluparà els parèntesis, reunirà els termes que contenen $X$, traurà $X$ com a factor comú quan sigui possible i mostrarà el resultat en la forma $X=\ldots$

    La resolució és **simbòlica**: les lletres majúscules representen matrius i no cal introduir-ne els elements.

<div id="matrix-equation-isolator" class="fa-tool mc-tool me-tool" data-tool-url="../../../javascripts/matrix-equation-isolator.js?v=2">
  <noscript>
    <p class="fa-message fa-message--error">Cal activar el JavaScript del navegador per utilitzar aquesta eina.</p>
  </noscript>

  <div class="fa-input-card">
    <label for="me-expression" class="fa-label">Escriu l'equació matricial</label>
    <textarea id="me-expression" class="mc-expression-input" rows="3" spellcheck="false" aria-describedby="me-help">AX-X+B=-C+D</textarea>
    <p id="me-help" class="fa-help">Utilitza majúscules per a les matrius, <code>X</code> per a la incògnita i <code>I</code> per a la identitat. Pots escriure sumes, restes, parèntesis, inverses amb <code>^-1</code> i productes per juxtaposició, com <code>A(X+B)</code>, <code>XA</code> o <code>AXB</code>. Els nombres i les minúscules es tracten com a coeficients escalars.</p>

    <div class="fa-example-row" aria-label="Exemples d'equacions matricials">
      <span>Prova:</span>
      <button type="button" data-me-example="left">$AX=B$</button>
      <button type="button" data-me-example="right">$XA=B$</button>
      <button type="button" data-me-example="both">$AXB=C$</button>
      <button type="button" data-me-example="factor">$AX-BX=C$</button>
      <button type="button" data-me-example="combined">$AX-X+B=-C+D$</button>
      <button type="button" data-me-example="parentheses">$A(X+B)=C$</button>
      <button type="button" data-me-example="bothMembers">$AX+B=CX+D$</button>
    </div>

    <div class="fa-actions">
      <button id="me-solve" class="fa-primary" type="button">Aïlla $X$ pas a pas</button>
      <button id="me-reset" type="button">Reinicia</button>
      <span id="me-status" class="fa-status" role="status" aria-live="polite"></span>
    </div>
  </div>

  <div id="me-message" class="fa-message" role="alert" hidden></div>

  <section id="me-results" class="fa-results" aria-live="polite" hidden>
    <div class="fa-result-heading">
      <div><p class="fa-eyebrow">Procediment obtingut</p><h2>Aïllament de $X$</h2></div>
      <span id="me-progress" class="dt-progress"></span>
    </div>
    <ol id="me-step-list" class="dt-step-list"></ol>
    <div id="me-reveal-actions" class="fa-actions dt-reveal-actions">
      <button id="me-next" class="fa-primary" type="button">Mostra el pas següent</button>
      <button id="me-show-all" type="button">Mostra tots els passos</button>
    </div>
  </section>
</div>

!!! note "Ordre dels factors"
    La multiplicació de matrius no és commutativa. Si multipliquem per una inversa, hem de fer-ho pel costat adequat:

    $$AX=B\ \Longrightarrow\ X=A^{-1}B$$

    $$XA=B\ \Longrightarrow\ X=BA^{-1}$$

!!! warning "Condicions necessàries"
    Quan apareix una inversa en el resultat, se suposa que la matriu corresponent és invertible. Si l'equació no és lineal en $X$ o si $X$ ocupa posicions que impedeixen treure-la com a factor comú, l'eina n'explica el motiu en lloc de forçar una resolució incorrecta.
