# Analitzador de funcions

!!! abstract "Una eina per comprovar el procediment"
    Introdueix una funció i l'eina en farà un estudi guiat seguint els **vuit passos dels apunts**. Els càlculs exactes es mostren sempre que els mètodes treballats a classe ho permeten; les aproximacions decimals s'identifiquen amb el símbol $\approx$.

    L'analitzador és una ajuda per revisar una resolució. Cal justificar els passos i saber interpretar la informació obtinguda.

<div id="function-analyzer" class="fa-tool" data-engine-url="../../../javascripts/function-analyzer.js?v=6">
  <noscript>
    <p class="fa-message fa-message--error">Cal activar el JavaScript del navegador per utilitzar l'analitzador.</p>
  </noscript>

  <div class="fa-mode-tabs" role="tablist" aria-label="Tipus d'estudi">
    <button class="fa-mode-tab is-active" type="button" role="tab" aria-selected="true" aria-controls="fa-panel-standard" data-mode="standard">Funció</button>
    <button class="fa-mode-tab" type="button" role="tab" aria-selected="false" aria-controls="fa-panel-piecewise" data-mode="piecewise">A trossos</button>
    <button class="fa-mode-tab" type="button" role="tab" aria-selected="false" aria-controls="fa-panel-absolute" data-mode="absolute">Valor absolut</button>
  </div>

  <div class="fa-input-card">
    <section id="fa-panel-standard" class="fa-mode-panel" role="tabpanel">
      <label class="fa-label" for="fa-expression">Escriu $f(x)$</label>
      <div class="fa-input-row">
        <span class="fa-function-prefix" aria-hidden="true">$f(x)=$</span>
        <input id="fa-expression" class="fa-expression" type="text" value="x^3-3*x^2-9*x+27" spellcheck="false" autocomplete="off" aria-describedby="fa-syntax-help">
      </div>
      <div class="fa-example-row" aria-label="Exemples de funcions">
        <span>Prova:</span>
        <button type="button" data-example="x^3-3*x^2-9*x+27">polinòmica</button>
        <button type="button" data-example="(x^2-x-2)/(x^2-3*x+2)">racional</button>
        <button type="button" data-example="root(4,x-16)">irracional</button>
        <button type="button" data-example="exp(-x)">exponencial</button>
        <button type="button" data-example="ln(x-2)">logarítmica</button>
      </div>
    </section>

    <section id="fa-panel-piecewise" class="fa-mode-panel" role="tabpanel" hidden>
      <div class="fa-piece-count">
        <span class="fa-label">Nombre de trams</span>
        <label><input type="radio" name="fa-piece-count" value="2" checked> 2 trams</label>
        <label><input type="radio" name="fa-piece-count" value="3"> 3 trams</label>
      </div>
      <div class="fa-piece-grid">
        <label for="fa-piece-1">Primer tram</label>
        <input id="fa-piece-1" type="text" value="-x^2+4*x+1" spellcheck="false">
        <div class="fa-break-row">
          <label for="fa-break-1">Canvi en $x=$</label>
          <input id="fa-break-1" type="number" value="1" step="any">
          <label for="fa-owner-1">El punt pertany</label>
          <select id="fa-owner-1">
            <option value="right">al tram de la dreta</option>
            <option value="left">al tram de l'esquerra</option>
          </select>
        </div>
        <label for="fa-piece-2">Segon tram</label>
        <input id="fa-piece-2" type="text" value="x^2-2*x+3" spellcheck="false">
        <div class="fa-third-piece" hidden>
          <div class="fa-break-row">
            <label for="fa-break-2">Segon canvi en $x=$</label>
            <input id="fa-break-2" type="number" value="3" step="any">
            <label for="fa-owner-2">El punt pertany</label>
            <select id="fa-owner-2">
              <option value="right">al tram de la dreta</option>
              <option value="left">al tram de l'esquerra</option>
            </select>
          </div>
          <label for="fa-piece-3">Tercer tram</label>
          <input id="fa-piece-3" type="text" value="2*x-1" spellcheck="false">
        </div>
      </div>
      <div class="fa-example-row" aria-label="Exemples de funcions a trossos">
        <span>Prova:</span>
        <button type="button" data-piece-example="exercise-a">salt finit</button>
        <button type="button" data-piece-example="exercise-c">unió contínua</button>
        <button type="button" data-piece-example="three">tres trams</button>
      </div>
    </section>

    <section id="fa-panel-absolute" class="fa-mode-panel" role="tabpanel" hidden>
      <label class="fa-label" for="fa-absolute-expression">Escriu una funció amb valor absolut</label>
      <div class="fa-input-row">
        <span class="fa-function-prefix" aria-hidden="true">$f(x)=$</span>
        <input id="fa-absolute-expression" class="fa-expression" type="text" value="abs(x^2+2*x-3)" spellcheck="false" autocomplete="off">
      </div>
      <div class="fa-example-row" aria-label="Exemples de funcions amb valor absolut">
        <span>Prova:</span>
        <button type="button" data-absolute-example="abs(2*x-6)">lineal</button>
        <button type="button" data-absolute-example="abs(x+1)+abs(x-2)">dos valors absoluts</button>
        <button type="button" data-absolute-example="abs(x^2-4*x+3)">quadràtica</button>
      </div>
    </section>

    <p id="fa-syntax-help" class="fa-help">
      Utilitza <code>^</code> per a les potències i <code>*</code> per multiplicar. Pots escriure <code>sqrt(x)</code>, <code>cbrt(x)</code>, <code>root(5,x)</code>, <code>exp(x)</code>, <code>ln(x)</code>, <code>log(x,3)</code> i <code>abs(x)</code>.
    </p>

    <div class="fa-actions">
      <button id="fa-analyze" class="fa-primary" type="button">Analitza la funció</button>
      <button id="fa-reset" type="button">Reinicia</button>
      <span id="fa-status" class="fa-status" role="status" aria-live="polite"></span>
    </div>
  </div>

  <div id="fa-message" class="fa-message" role="alert" hidden></div>

  <section id="fa-results" class="fa-results" aria-live="polite" hidden>
    <div class="fa-result-heading">
      <div>
        <p class="fa-eyebrow">Estudi obtingut</p>
        <h2 id="fa-result-title">Resultats</h2>
      </div>
      <button id="fa-expand-all" type="button">Desplega tots els passos</button>
    </div>
    <div id="fa-preliminary"></div>
    <div id="fa-steps" class="fa-steps"></div>

    <section class="fa-graph-section" aria-labelledby="fa-graph-title">
      <div class="fa-graph-heading">
        <div>
          <p class="fa-step-number">Representació final</p>
          <h3 id="fa-graph-title">Gràfica de la funció</h3>
        </div>
        <div class="fa-window-controls" aria-label="Finestra del gràfic">
          <span class="fa-zoom-label">Zoom</span>
          <div class="fa-zoom-controls" role="group" aria-label="Zoom del gràfic">
            <button id="fa-zoom-out" class="fa-zoom-button" type="button" aria-label="Allunya el gràfic" title="Allunya">−</button>
            <button id="fa-zoom-in" class="fa-zoom-button" type="button" aria-label="Apropa el gràfic" title="Apropa">+</button>
          </div>
        </div>
      </div>
      <div class="fa-canvas-wrap">
        <canvas id="fa-graph" width="960" height="540" role="img" aria-label="Representació gràfica interactiva de la funció analitzada"></canvas>
        <canvas id="fa-graph-overlay" class="fa-graph-overlay" width="960" height="540" aria-hidden="true"></canvas>
        <div id="fa-graph-tooltip" class="fa-graph-tooltip" hidden></div>
      </div>
      <p class="fa-graph-help">Arrossega el gràfic per desplaçar-lo. Fes servir la rodeta o els botons de zoom per apropar-lo i allunyar-lo. Passa el cursor per sobre d'una corba per consultar les coordenades del punt.</p>
      <div id="fa-legend" class="fa-legend"></div>
    </section>
  </section>
</div>

!!! warning "Abast de l'analitzador"
    L'eina està pensada per a les funcions i els mètodes que apareixen als apunts i als exercicis. Si una equació no es pot resoldre exactament amb aquests procediments, el resultat s'indica com a aproximació. Una entrada que queda fora d'aquest abast no es resol de manera automàtica.
