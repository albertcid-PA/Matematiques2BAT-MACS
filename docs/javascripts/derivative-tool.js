(function () {
  "use strict";

  function formula(tex, display) {
    return display === false ? `\\(${tex}\\)` : `<div class="fa-formula">\\[${tex}\\]</div>`;
  }

  function renderMath(element) {
    if (typeof window.renderMathInElement !== "function") return;
    window.renderMathInElement(element, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true },
      ],
      throwOnError: false,
    });
  }

  function initDerivativeTool(root) {
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";
    const api = window.FunctionAnalyzer;
    const input = root.querySelector("#dt-expression");
    const deriveButton = root.querySelector("#dt-derive");
    const resetButton = root.querySelector("#dt-reset");
    const nextButton = root.querySelector("#dt-next");
    const showAllButton = root.querySelector("#dt-show-all");
    const revealActions = root.querySelector("#dt-reveal-actions");
    const status = root.querySelector("#dt-status");
    const message = root.querySelector("#dt-message");
    const results = root.querySelector("#dt-results");
    const title = root.querySelector("#dt-result-title");
    const ruleList = root.querySelector("#dt-rule-list");
    const stepList = root.querySelector("#dt-step-list");
    const progress = root.querySelector("#dt-progress");
    let study = null;
    let revealedSteps = 0;

    function updateRevealedSteps() {
      const cards = Array.from(stepList.querySelectorAll(".dt-step-card"));
      cards.forEach((card, index) => { card.hidden = index >= revealedSteps; });
      progress.textContent = `${revealedSteps} de ${cards.length} passos`;
      const complete = revealedSteps >= cards.length;
      nextButton.disabled = complete;
      nextButton.textContent = complete ? "Procediment complet" : "Mostra el pas següent";
      showAllButton.hidden = complete;
      revealActions.hidden = complete;
    }

    function revealNextStep() {
      if (!study || revealedSteps >= study.steps.length) return;
      revealedSteps += 1;
      updateRevealedSteps();
      const currentCard = stepList.querySelectorAll(".dt-step-card")[revealedSteps - 1];
      if (currentCard) currentCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function derive() {
      status.textContent = "Calculant…";
      deriveButton.disabled = true;
      message.hidden = true;
      results.hidden = true;
      window.setTimeout(function () {
        try {
          study = api.deriveExpressionStudy(input.value);
          title.innerHTML = `Derivada de ${formula(`f(x)=${study.sourceTex}`, false)}`;
          ruleList.innerHTML = study.rules.map((rule) => `<span class="dt-rule">${rule}</span>`).join("");
          stepList.innerHTML = study.steps.map((step, index) => {
            const detail = typeof step === "string"
              ? { title: "Pas de càlcul", explanation: "", tex: `f'(x)=${step}` }
              : step;
            const explanation = detail.explanation ? `<p class="dt-step-explanation">${detail.explanation}</p>` : "";
            return `<li class="dt-step-card"><p class="fa-step-number">Pas ${index + 1}</p><h3>${detail.title}</h3>${explanation}${formula(detail.tex)}</li>`;
          }).join("");
          revealedSteps = Math.min(1, study.steps.length);
          results.hidden = false;
          revealActions.hidden = false;
          renderMath(results);
          updateRevealedSteps();
          status.textContent = "Derivada preparada.";
          results.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          study = null;
          message.textContent = error && error.message ? error.message : "No s'ha pogut completar la derivada.";
          message.hidden = false;
          status.textContent = "";
        } finally {
          deriveButton.disabled = false;
        }
      }, 20);
    }

    root.querySelectorAll("[data-derivative-example]").forEach((button) => {
      button.addEventListener("click", () => { input.value = button.dataset.derivativeExample; });
    });
    deriveButton.addEventListener("click", derive);
    nextButton.addEventListener("click", revealNextStep);
    showAllButton.addEventListener("click", function () {
      if (!study) return;
      revealedSteps = study.steps.length;
      updateRevealedSteps();
    });
    resetButton.addEventListener("click", function () {
      input.value = "2^(x^2+3)";
      study = null;
      revealedSteps = 0;
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") derive();
    });
  }

  window.DerivativeTool = { init: initDerivativeTool };
  initDerivativeTool(document.getElementById("derivative-tool"));
}());
