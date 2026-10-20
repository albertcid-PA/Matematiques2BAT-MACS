(function () {
  "use strict";

  const MATHJS_URL = "https://cdn.jsdelivr.net/npm/mathjs@14.8.1/lib/browser/math.min.js";

  function loadScript(source, marker) {
    const existing = document.querySelector(`script[data-fa-script="${marker}"]`);
    if (existing) {
      if (existing.dataset.loaded === "true") return Promise.resolve();
      return new Promise((resolve, reject) => {
        existing.addEventListener("load", resolve, { once: true });
        existing.addEventListener("error", reject, { once: true });
      });
    }
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = source;
      script.dataset.faScript = marker;
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function showLoadError(root) {
    const message = root.querySelector(".fa-message");
    if (!message) return;
    message.textContent = "No s'ha pogut carregar el motor matemàtic. Comprova la connexió i recarrega la pàgina.";
    message.hidden = false;
  }

  function initializeTools() {
    const analyzerRoot = document.getElementById("function-analyzer");
    const derivativeRoot = document.getElementById("derivative-tool");
    const roots = [analyzerRoot, derivativeRoot].filter(Boolean);
    if (!roots.length || roots.some((root) => root.dataset.loading === "true")) return;
    roots.forEach((root) => { root.dataset.loading = "true"; });
    const primaryRoot = analyzerRoot || derivativeRoot;
    const engineUrl = new URL(primaryRoot.dataset.engineUrl, document.baseURI).href;
    const mathReady = window.math ? Promise.resolve() : loadScript(MATHJS_URL, "mathjs");
    mathReady
      .then(() => window.FunctionAnalyzer ? undefined : loadScript(engineUrl, "engine"))
      .then(() => {
        if (!derivativeRoot || window.DerivativeTool) return undefined;
        const toolUrl = new URL(derivativeRoot.dataset.toolUrl, document.baseURI).href;
        return loadScript(toolUrl, "derivative-tool");
      })
      .catch(() => { roots.forEach(showLoadError); })
      .finally(() => { roots.forEach((root) => { root.dataset.loading = "false"; }); });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initializeTools);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTools, { once: true });
  } else {
    initializeTools();
  }
}());
