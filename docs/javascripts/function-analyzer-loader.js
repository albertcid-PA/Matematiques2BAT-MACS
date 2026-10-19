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

  function initializeAnalyzer() {
    const root = document.getElementById("function-analyzer");
    if (!root || root.dataset.loading === "true" || root.dataset.initialized === "true") return;
    root.dataset.loading = "true";
    const engineUrl = new URL(root.dataset.engineUrl, document.baseURI).href;
    const mathReady = window.math ? Promise.resolve() : loadScript(MATHJS_URL, "mathjs");
    mathReady
      .then(() => window.FunctionAnalyzer ? undefined : loadScript(engineUrl, "engine"))
      .catch(() => {
        const message = root.querySelector("#fa-message");
        if (message) {
          message.textContent = "No s'ha pogut carregar el motor matemàtic. Comprova la connexió i recarrega la pàgina.";
          message.hidden = false;
        }
      })
      .finally(() => { root.dataset.loading = "false"; });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(initializeAnalyzer);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAnalyzer, { once: true });
  } else {
    initializeAnalyzer();
  }
}());
