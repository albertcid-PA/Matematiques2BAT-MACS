# Derivador pas a pas

!!! abstract "Derivar amb el mateix procediment dels apunts"
    Escriu una funció i l'eina identificarà les regles necessàries, mantindrà indicades les derivades de les funcions interiors i farà les substitucions i simplificacions línia a línia.

    Utilitza-la després d'intentar la derivada en paper. Pots mostrar els passos d'un en un per comparar-los amb el teu procediment.

<div id="derivative-tool" class="fa-tool dt-tool" data-engine-url="../../../javascripts/function-analyzer.js?v=20" data-tool-url="../../../javascripts/derivative-tool.js?v=4">
  <noscript>
    <p class="fa-message fa-message--error">Cal activar el JavaScript del navegador per utilitzar el derivador.</p>
  </noscript>

  <div class="fa-input-card dt-input-card">
    <label class="fa-label" for="dt-expression">Escriu $f(x)$</label>
    <div class="fa-input-row">
      <span class="fa-function-prefix" aria-hidden="true">$f(x)=$</span>
      <input id="dt-expression" type="text" value="2^(x^2+3)" spellcheck="false" autocomplete="off" aria-describedby="dt-syntax-help">
    </div>
    <div class="fa-example-row" aria-label="Exemples de derivades">
      <span>Prova:</span>
      <button type="button" data-derivative-example="6*x^4-3*x+2">polinòmica</button>
      <button type="button" data-derivative-example="x^3*4^x">producte</button>
      <button type="button" data-derivative-example="x^3/4^x">divisió</button>
      <button type="button" data-derivative-example="2^(x^2+3)">composició</button>
      <button type="button" data-derivative-example="ln(sqrt(4*x^2+1))">composició doble</button>
      <button type="button" data-derivative-example="root(5,x^2+1)">arrel</button>
    </div>

    <p id="dt-syntax-help" class="fa-help">
      Utilitza <code>^</code> per a les potències i <code>*</code> per multiplicar. Pots escriure <code>sqrt(x)</code>, <code>cbrt(x)</code>, <code>root(5,x)</code> o <code>nroot(5,x)</code>, <code>exp(x)</code>, <code>ln(x)</code> i <code>log(x,3)</code>.
    </p>

    <div class="fa-actions">
      <button id="dt-derive" class="fa-primary" type="button">Deriva pas a pas</button>
      <button id="dt-reset" type="button">Reinicia</button>
      <span id="dt-status" class="fa-status" role="status" aria-live="polite"></span>
    </div>
  </div>

  <div id="dt-message" class="fa-message" role="alert" hidden></div>

  <section id="dt-results" class="fa-results dt-results" aria-live="polite" hidden>
    <div class="fa-result-heading">
      <div>
        <p class="fa-eyebrow">Procediment obtingut</p>
        <h2 id="dt-result-title">Derivada</h2>
      </div>
      <span id="dt-progress" class="dt-progress"></span>
    </div>

    <section class="dt-rules" aria-labelledby="dt-rules-title">
      <h3 id="dt-rules-title">Regles que utilitzarem</h3>
      <div id="dt-rule-list" class="dt-rule-list"></div>
    </section>

    <ol id="dt-step-list" class="dt-step-list"></ol>

    <div id="dt-reveal-actions" class="fa-actions dt-reveal-actions">
      <button id="dt-next" class="fa-primary" type="button">Mostra el pas següent</button>
      <button id="dt-show-all" type="button">Mostra tots els passos</button>
    </div>
  </section>
</div>

!!! note "Criteri de simplificació"
    L'eina conserva constants com $\ln(2)$ i $\ln(4)$ en forma exacta i no transforma una suma en una fracció única si aquest pas no aporta claredat. Les constants es col·loquen al davant, tal com es fa als apunts.

!!! warning "Abast del derivador"
    El derivador treballa amb les funcions i les regles incloses als apunts: polinomis, arrels, exponencials, logaritmes, sumes, restes, productes, divisions i composicions. Per a una funció amb valor absolut, cal transformar-la primer en una funció a trossos.
