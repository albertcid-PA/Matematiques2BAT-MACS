# Resolució de sistemes

<nav class="lab-mobile-nav" aria-label="Eines del Laboratori de mates">
  <a href="resolucio-sistemes.md" aria-current="page">Resolució de sistemes</a>
  <a href="calculadora-matrius.md">Operacions amb matrius</a>
  <a href="aillament-equacions-matricials.md">Equacions matricials</a>
  <a href="sistemes-matricials.md">Sistemes matricials</a>
</nav>

!!! abstract "Resoldre com ho faríem en paper"
    Introdueix un sistema de **dues equacions amb dues incògnites** o de **tres equacions amb tres incògnites**. L'eina construirà la matriu ampliada, aplicarà el mètode de Gauss, completarà la resolució i justificarà si el sistema és **SCD**, **SCI** o **SI**.

    Pots mostrar els passos d'un en un per comparar-los amb el teu procediment.

<div id="linear-system-tool" class="fa-tool ls-tool" data-entry-layout="system" data-system-size="2" data-tool-url="../../../javascripts/linear-system-tool.js?v=4">
  <noscript>
    <p class="fa-message fa-message--error">Cal activar el JavaScript del navegador per utilitzar aquesta eina.</p>
  </noscript>

  <div class="fa-mode-tabs" role="tablist" aria-label="Mida del sistema">
    <button class="fa-mode-tab is-active" type="button" role="tab" aria-selected="true" data-system-size="2">Sistema $2\times2$</button>
    <button class="fa-mode-tab" type="button" role="tab" aria-selected="false" data-system-size="3">Sistema $3\times3$</button>
  </div>

  <div class="fa-input-card ls-input-card">
    <p class="fa-label">Completa el sistema d'equacions</p>

    <div class="ls-equations" aria-label="Coeficients del sistema">
      <div class="ls-equation-row" data-equation-row="0">
        <input id="ls-a11" type="text" inputmode="decimal" value="1" aria-label="Coeficient de x de la primera equació"><span>$x$</span>
        <span id="ls-op-12" class="ls-operator">+</span><input id="ls-a12" type="text" inputmode="decimal" value="1" data-ls-signed data-sign="1" data-operator-id="ls-op-12" aria-label="Coeficient de y de la primera equació"><span>$y$</span>
        <span class="ls-z-term" hidden><span id="ls-op-13" class="ls-operator">+</span><input id="ls-a13" type="text" inputmode="decimal" value="0" data-ls-signed data-sign="1" data-operator-id="ls-op-13" aria-label="Coeficient de z de la primera equació"><span>$z$</span></span>
        <span class="ls-equals">=</span><input id="ls-b1" type="text" inputmode="decimal" value="5" aria-label="Terme independent de la primera equació">
      </div>

      <div class="ls-equation-row" data-equation-row="1">
        <input id="ls-a21" type="text" inputmode="decimal" value="1" aria-label="Coeficient de x de la segona equació"><span>$x$</span>
        <span id="ls-op-22" class="ls-operator">−</span><input id="ls-a22" type="text" inputmode="decimal" value="1" data-ls-signed data-sign="-1" data-operator-id="ls-op-22" aria-label="Coeficient de y de la segona equació"><span>$y$</span>
        <span class="ls-z-term" hidden><span id="ls-op-23" class="ls-operator">+</span><input id="ls-a23" type="text" inputmode="decimal" value="0" data-ls-signed data-sign="1" data-operator-id="ls-op-23" aria-label="Coeficient de z de la segona equació"><span>$z$</span></span>
        <span class="ls-equals">=</span><input id="ls-b2" type="text" inputmode="decimal" value="1" aria-label="Terme independent de la segona equació">
      </div>

      <div class="ls-equation-row" data-equation-row="2" hidden>
        <input id="ls-a31" type="text" inputmode="decimal" value="1" aria-label="Coeficient de x de la tercera equació"><span>$x$</span>
        <span id="ls-op-32" class="ls-operator">+</span><input id="ls-a32" type="text" inputmode="decimal" value="2" data-ls-signed data-sign="1" data-operator-id="ls-op-32" aria-label="Coeficient de y de la tercera equació"><span>$y$</span>
        <span class="ls-z-term"><span id="ls-op-33" class="ls-operator">−</span><input id="ls-a33" type="text" inputmode="decimal" value="1" data-ls-signed data-sign="-1" data-operator-id="ls-op-33" aria-label="Coeficient de z de la tercera equació"><span>$z$</span></span>
        <span class="ls-equals">=</span><input id="ls-b3" type="text" inputmode="decimal" value="6" aria-label="Terme independent de la tercera equació">
      </div>
    </div>

    <p class="fa-help">Pots escriure nombres enters, decimals amb coma o punt i fraccions com <code>3/2</code>. Si introdueixes un coeficient negatiu, el signe es col·locarà automàticament entre els termes.</p>

    <div class="fa-example-row" aria-label="Exemples de sistemes">
      <span>Prova:</span>
      <button type="button" data-system-example="scd">SCD</button>
      <button type="button" data-system-example="sci">SCI</button>
      <button type="button" data-system-example="si">SI</button>
    </div>

    <div class="fa-actions">
      <button id="ls-solve" class="fa-primary" type="button">Resol pas a pas</button>
      <button id="ls-reset" type="button">Reinicia</button>
      <span id="ls-status" class="fa-status" role="status" aria-live="polite"></span>
    </div>
  </div>

  <div id="ls-message" class="fa-message" role="alert" hidden></div>

  <section id="ls-results" class="fa-results ls-results" aria-live="polite" hidden>
    <div class="fa-result-heading">
      <div>
        <p class="fa-eyebrow">Procediment obtingut</p>
        <h2>Resolució del sistema</h2>
      </div>
      <span id="ls-progress" class="dt-progress"></span>
    </div>

    <ol id="ls-step-list" class="dt-step-list"></ol>

    <div id="ls-reveal-actions" class="fa-actions dt-reveal-actions">
      <button id="ls-next" class="fa-primary" type="button">Mostra el pas següent</button>
      <button id="ls-show-all" type="button">Mostra tots els passos</button>
    </div>
  </section>
</div>

!!! note "Criteri de càlcul"
    L'eina treballa de manera exacta. Quan és possible, combina files per evitar fraccions i conserva els resultats en forma fraccionària en lloc d'utilitzar aproximacions decimals.

!!! warning "Abast de l'eina"
    L'eina només admet sistemes lineals numèrics $2\times2$ i $3\times3$. No resol sistemes amb paràmetres en els coeficients o en els termes independents.

