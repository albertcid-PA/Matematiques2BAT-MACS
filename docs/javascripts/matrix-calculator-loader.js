(function () {
  "use strict";

  function loadScript(source) {
    const existing = document.querySelector('script[data-mc-script="tool"]');
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
      script.dataset.mcScript = "tool";
      script.addEventListener("load", () => {
        script.dataset.loaded = "true";
        resolve();
      }, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });
  }

  function initializeTool() {
    const root = document.getElementById("matrix-calculator-tool");
    if (!root || root.dataset.loading === "true" || root.dataset.initialized === "true") return;
    root.dataset.loading = "true";
    const toolUrl = new URL(root.dataset.toolUrl, document.baseURI).href;
    loadScript(toolUrl)
      .then(() => { if (window.MatrixCalculatorTool) window.MatrixCalculatorTool.init(root); })
      .catch(() => {
        const message = root.querySelector("#mc-message");
        if (message) {
          message.textContent = "No s'ha pogut carregar l'eina. Recarrega la pàgina i torna-ho a provar.";
          message.hidden = false;
        }
      })
      .finally(() => { root.dataset.loading = "false"; });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") window.document$.subscribe(initializeTool);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initializeTool, { once: true });
  else initializeTool();
}());
