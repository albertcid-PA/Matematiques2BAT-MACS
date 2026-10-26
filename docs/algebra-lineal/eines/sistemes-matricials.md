# Sistemes matricials

<nav class="lab-mobile-nav" aria-label="Eines del Laboratori de mates">
  <a href="resolucio-sistemes.md">Resolució de sistemes</a>
  <a href="calculadora-matrius.md">Operacions amb matrius</a>
  <a href="aillament-equacions-matricials.md">Equacions matricials</a>
  <a href="sistemes-matricials.md" aria-current="page">Sistemes matricials</a>
</nav>

!!! abstract "Resolució pas a pas"
    Aquesta eina resol **sistemes de dues equacions** en què les incògnites $X$ i $Y$ són matrius d'ordre $2\times2$.

    Introdueix els coeficients de $X$ i $Y$ i les matrius $P$ i $Q$. La resolució mostra l'eliminació, l'aïllament i la substitució amb les matrius que s'operen.

<div id="matrix-calculator-tool" class="fa-tool mc-tool" data-tool-url="../../../javascripts/matrix-calculator-tool.js?v=21">
  <noscript>
    <p class="fa-message">Cal activar el JavaScript del navegador per utilitzar aquesta eina.</p>
  </noscript>

  <div class="fa-input-card mc-input-card">
    <section data-mc-panel="systems">
      <p class="fa-label">Sistema matricial</p>
      <p class="fa-help"><strong>Completa els coeficients de $X$ i $Y$</strong></p>
      <div class="mc-system-entry" aria-label="Coeficients del sistema matricial">
        <div class="mc-system-entry-row">
          <input id="mc-sys-a" type="text" inputmode="decimal" value="1" aria-label="Coeficient de X de la primera equació"><span>$X$</span>
          <span id="mc-sys-b-operator" class="mc-system-entry-operator">+</span>
          <input id="mc-sys-b" type="text" inputmode="decimal" value="1" data-sign="1" aria-label="Coeficient de Y de la primera equació"><span>$Y=P$</span>
        </div>
        <div class="mc-system-entry-row">
          <input id="mc-sys-c" type="text" inputmode="decimal" value="1" aria-label="Coeficient de X de la segona equació"><span>$X$</span>
          <span id="mc-sys-d-operator" class="mc-system-entry-operator">−</span>
          <input id="mc-sys-d" type="text" inputmode="decimal" value="1" data-sign="-1" aria-label="Coeficient de Y de la segona equació"><span>$Y=Q$</span>
        </div>
      </div>
      <p class="fa-help"><strong>Matrius dels termes independents</strong></p>
      <div class="mc-editor-grid">
        <div class="mc-editor-card"><strong>$P=$</strong><div class="mc-matrix-input mc-matrix-input--system">
          <input id="mc-sys-p11" type="text" inputmode="decimal" value="4" aria-label="Element 1,1 de P"><input id="mc-sys-p12" type="text" inputmode="decimal" value="6" aria-label="Element 1,2 de P">
          <input id="mc-sys-p21" type="text" inputmode="decimal" value="2" aria-label="Element 2,1 de P"><input id="mc-sys-p22" type="text" inputmode="decimal" value="0" aria-label="Element 2,2 de P">
        </div></div>
        <div class="mc-editor-card"><strong>$Q=$</strong><div class="mc-matrix-input mc-matrix-input--system">
          <input id="mc-sys-q11" type="text" inputmode="decimal" value="2" aria-label="Element 1,1 de Q"><input id="mc-sys-q12" type="text" inputmode="decimal" value="0" aria-label="Element 1,2 de Q">
          <input id="mc-sys-q21" type="text" inputmode="decimal" value="0" aria-label="Element 2,1 de Q"><input id="mc-sys-q22" type="text" inputmode="decimal" value="2" aria-label="Element 2,2 de Q">
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

!!! note "Criteri de resolució"
    La resolució elimina una de les incògnites mitjançant una combinació lineal de les dues equacions. A continuació, calcula una matriu incògnita i la substitueix per trobar l'altra.

    Els càlculs es mostren amb fraccions exactes. No s'extreuen factors comuns, perquè es pugui seguir directament cada operació.

!!! warning "Abast de l'eina"
    L'eina treballa amb coeficients numèrics i matrius d'ordre $2\times2$. No utilitza determinants ni estudia sistemes amb paràmetres.
