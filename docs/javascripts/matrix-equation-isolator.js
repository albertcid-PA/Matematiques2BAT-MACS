(function () {
  "use strict";

  const EXAMPLES = {
    left: "AX=B",
    right: "XA=B",
    both: "AXB=C",
    factor: "AX-BX=C",
    combined: "AX-X+B=-C+D",
    parentheses: "A(X+B)=C",
    bothMembers: "AX+B=CX+D",
  };

  function theoryError(message, theory) {
    const error = new Error(message);
    error.theory = theory;
    return error;
  }

  function normalize(source) {
    return String(source).trim().replace(/\s+/g, "").replace(/[·⋅*]/g, "").replace(/−/g, "-");
  }

  function atomTex(value) {
    if (/^\d+(?:[.,]\d+)?\/\d+(?:[.,]\d+)?$/.test(value)) {
      const [numerator, denominator] = value.split("/");
      return `\\frac{${numerator.replace(",", "{,}")}}{${denominator.replace(",", "{,}")}}`;
    }
    return value.replace(",", "{,}");
  }

  function rawTex(source) {
    return source
      .replace(/(\d+(?:[.,]\d+)?)\/(\d+(?:[.,]\d+)?)/g, (_, numerator, denominator) => `\\frac{${numerator.replace(",", "{,}")}}{${denominator.replace(",", "{,}")}}`)
      .replace(/\^-1/g, "^{-1}")
      .replace(/\(/g, "\\left(")
      .replace(/\)/g, "\\right)");
  }

  function tokenize(source) {
    const tokens = [];
    let index = 0;
    while (index < source.length) {
      const character = source[index];
      if ("+-()".includes(character)) {
        tokens.push({ type: character, value: character });
        index += 1;
        continue;
      }
      if (source.slice(index, index + 3) === "^-1") {
        tokens.push({ type: "inverse", value: "^-1" });
        index += 3;
        continue;
      }
      if (/[A-Za-z]/.test(character)) {
        tokens.push({ type: "atom", value: character });
        index += 1;
        continue;
      }
      if (/\d/.test(character)) {
        const match = source.slice(index).match(/^\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?/);
        tokens.push({ type: "atom", value: match[0] });
        index += match[0].length;
        continue;
      }
      throw new Error(`El símbol «${character}» no està admès. Utilitza lletres, nombres, +, −, parèntesis i ^-1.`);
    }
    return tokens;
  }

  function normalizeFactors(factors) {
    if (factors.length <= 1) return factors;
    const withoutIdentities = factors.filter((factor) => factor.key !== "I" && factor.key !== "1");
    return withoutIdentities.length ? withoutIdentities : [factors[0]];
  }

  function multiplyPolynomials(left, right) {
    const result = [];
    left.forEach((leftTerm) => right.forEach((rightTerm) => {
      result.push({ sign: leftTerm.sign * rightTerm.sign, factors: normalizeFactors(leftTerm.factors.concat(rightTerm.factors)) });
    }));
    return result;
  }

  function negatePolynomial(polynomial) {
    return polynomial.map((term) => ({ ...term, sign: -term.sign }));
  }

  function factorSequenceKey(factors) {
    const normalized = normalizeFactors(factors);
    return normalized.length ? normalized.map((factor) => factor.key).join("·") : "I";
  }

  function factorSequenceTex(factors) {
    const normalized = normalizeFactors(factors);
    return normalized.length ? normalized.map((factor) => factor.tex).join("") : "I";
  }

  function simplifyTerms(terms, keyFunction) {
    const entries = [];
    const positions = new Map();
    terms.forEach((term) => {
      const key = keyFunction(term);
      if (!positions.has(key)) {
        positions.set(key, entries.length);
        entries.push({ key, coefficient: 0, term });
      }
      entries[positions.get(key)].coefficient += term.sign;
    });
    return entries.filter((entry) => entry.coefficient !== 0);
  }

  function signedSumTex(entries, formatter) {
    if (!entries.length) return "0";
    return entries.map((entry, index) => {
      const negative = entry.coefficient < 0;
      const magnitude = Math.abs(entry.coefficient);
      const body = formatter(entry.term);
      const coefficient = magnitude === 1 ? "" : String(magnitude);
      const value = `${coefficient}${body}`;
      if (index === 0) return negative ? `-${value}` : value;
      return negative ? `-${value}` : `+${value}`;
    }).join("");
  }

  function polynomialEntries(polynomial) {
    return simplifyTerms(polynomial, (term) => factorSequenceKey(term.factors));
  }

  function polynomialTex(polynomial) {
    return signedSumTex(polynomialEntries(polynomial), (term) => factorSequenceTex(term.factors));
  }

  function polynomialContainsX(polynomial) {
    return polynomial.some((term) => term.factors.some((factor) => factor.containsX));
  }

  function polynomialKey(polynomial) {
    return polynomialEntries(polynomial)
      .map((entry) => `${entry.coefficient}:${entry.key}`)
      .sort()
      .join("|");
  }

  function parseExpression(source) {
    const tokens = tokenize(source);
    let position = 0;
    let expandedParentheses = false;

    function startsFactor(token) {
      return token && (token.type === "atom" || token.type === "(");
    }

    function inverseFactor(polynomial) {
      if (polynomialContainsX(polynomial)) {
        throw theoryError(
          "No es pot invertir una expressió que conté la incògnita X.",
          "En una equació lineal, X no pot aparèixer dins d'una matriu inversa.",
        );
      }
      const entries = polynomialEntries(polynomial);
      const innerTex = polynomialTex(polynomial);
      const simpleAtom = entries.length === 1
        && entries[0].coefficient === 1
        && entries[0].term.factors.length === 1;
      const baseTex = simpleAtom ? innerTex : `\\left(${innerTex}\\right)`;
      return [{
        sign: 1,
        factors: [{
          key: `inv(${polynomialKey(polynomial)})`,
          tex: `${baseTex}^{-1}`,
          containsX: false,
          simpleMatrix: false,
          inverseBaseTex: baseTex,
        }],
      }];
    }

    function parseFactor() {
      const token = tokens[position];
      if (!token) throw new Error("L'expressió queda incompleta al final.");
      let polynomial;
      if (token.type === "atom") {
        position += 1;
        polynomial = [{
          sign: 1,
          factors: [{
            key: token.value,
            tex: atomTex(token.value),
            containsX: token.value === "X",
            simpleMatrix: /^[A-WYZ]$/.test(token.value),
          }],
        }];
      } else if (token.type === "(") {
        position += 1;
        polynomial = parseSum();
        if (!tokens[position] || tokens[position].type !== ")") throw new Error("Revisa els parèntesis de l'equació.");
        position += 1;
        if (polynomialEntries(polynomial).length > 1) expandedParentheses = true;
      } else {
        throw new Error("Falta una matriu o una expressió després d'un signe.");
      }
      if (tokens[position] && tokens[position].type === "inverse") {
        position += 1;
        polynomial = inverseFactor(polynomial);
      }
      return polynomial;
    }

    function parseProduct() {
      if (!startsFactor(tokens[position])) throw new Error("Falta un terme a l'equació.");
      let polynomial = parseFactor();
      while (startsFactor(tokens[position])) polynomial = multiplyPolynomials(polynomial, parseFactor());
      return polynomial;
    }

    function parseSum() {
      let leadingSign = 1;
      while (tokens[position] && (tokens[position].type === "+" || tokens[position].type === "-")) {
        if (tokens[position].type === "-") leadingSign *= -1;
        position += 1;
      }
      let polynomial = parseProduct();
      if (leadingSign === -1) polynomial = negatePolynomial(polynomial);
      while (tokens[position] && (tokens[position].type === "+" || tokens[position].type === "-")) {
        const operator = tokens[position].type;
        position += 1;
        let next = parseProduct();
        if (operator === "-") next = negatePolynomial(next);
        polynomial = polynomial.concat(next);
      }
      return polynomial;
    }

    if (!tokens.length) throw new Error("Cal escriure els dos membres de l'equació.");
    const polynomial = parseSum();
    if (position !== tokens.length) {
      if (tokens[position].type === ")") throw new Error("Hi ha un parèntesi de tancament que no correspon a cap obertura.");
      throw new Error("No s'ha pogut interpretar tota l'expressió.");
    }
    return { polynomial, expandedParentheses };
  }

  function sequenceFactor(factors) {
    const normalized = normalizeFactors(factors);
    const identity = normalized.length === 0
      || (normalized.length === 1 && (normalized[0].key === "I" || normalized[0].key === "1"));
    return {
      key: identity ? "I" : factorSequenceKey(normalized),
      tex: identity ? "I" : factorSequenceTex(normalized),
      identity,
      simple: !identity && normalized.length === 1 && normalized[0].simpleMatrix,
      inverseBaseTex: !identity && normalized.length === 1 ? normalized[0].inverseBaseTex : "",
    };
  }

  function combinedFactor(terms, side) {
    const entries = simplifyTerms(terms, (term) => term[side].key);
    if (!entries.length) {
      throw theoryError(
        "Els termes que contenen X s'anul·len entre si.",
        "En aquest cas l'equació ja no determina X; caldria estudiar la igualtat que queda.",
      );
    }
    const tex = signedSumTex(entries, (term) => term[side].tex);
    const identity = entries.length === 1 && entries[0].term[side].identity && entries[0].coefficient === 1;
    const simple = entries.length === 1 && entries[0].coefficient === 1 && entries[0].term[side].simple;
    const inverseBaseTex = entries.length === 1 && entries[0].coefficient === 1
      ? entries[0].term[side].inverseBaseTex
      : "";
    return { key: tex, tex, identity, simple, inverseBaseTex };
  }

  function displayedFactor(factor) {
    if (factor.identity) return "";
    return factor.simple ? factor.tex : `\\left(${factor.tex}\\right)`;
  }

  function inverseOfFactor(factor) {
    if (factor.identity) return "";
    if (factor.inverseBaseTex) return factor.inverseBaseTex;
    return factor.simple ? `${factor.tex}^{-1}` : `\\left(${factor.tex}\\right)^{-1}`;
  }

  function constantSum(terms) {
    const entries = simplifyTerms(terms, (term) => factorSequenceKey(term.factors));
    return {
      entries,
      tex: signedSumTex(entries, (term) => factorSequenceTex(term.factors)),
      needsParentheses: entries.length > 1 || (entries[0] && entries[0].coefficient < 0),
    };
  }

  function xTermSumTex(terms) {
    const entries = simplifyTerms(terms, (term) => `${term.left.key}|${term.right.key}`);
    return signedSumTex(entries, (term) => `${displayedFactor(term.left)}X${displayedFactor(term.right)}`);
  }

  function resultTex(leftFactor, rightFactor, constants) {
    if (constants.tex === "0") return "X=0";
    const leftInverse = inverseOfFactor(leftFactor);
    const rightInverse = inverseOfFactor(rightFactor);
    const middle = constants.needsParentheses && (leftInverse || rightInverse)
      ? `\\left(${constants.tex}\\right)`
      : constants.tex;
    return `X=${leftInverse}${middle}${rightInverse}`;
  }

  function analyze(source) {
    const normalized = normalize(source);
    if (!normalized) throw new Error("Escriu una equació matricial abans de continuar.");
    const equalityParts = normalized.split("=");
    if (equalityParts.length !== 2 || !equalityParts[0] || !equalityParts[1]) {
      throw new Error("L'equació ha de contenir un únic signe igual amb dos membres complets.");
    }

    const leftAnalysis = parseExpression(equalityParts[0]);
    const rightAnalysis = parseExpression(equalityParts[1]);
    const leftTerms = leftAnalysis.polynomial;
    const rightTerms = rightAnalysis.polynomial;
    const parsedTerms = leftTerms.concat(rightTerms);

    parsedTerms.forEach((term) => {
      const xCount = term.factors.filter((factor) => factor.key === "X").length;
      if (xCount > 1) {
        throw theoryError(
          "La incògnita X apareix més d'una vegada en un mateix producte.",
          "Aquesta eina resol equacions lineals en X; no admet termes com X² o XAX.",
        );
      }
    });

    function makeXTerm(term, multiplier) {
      const position = term.factors.findIndex((factor) => factor.key === "X");
      return {
        sign: term.sign * multiplier,
        left: sequenceFactor(term.factors.slice(0, position)),
        right: sequenceFactor(term.factors.slice(position + 1)),
      };
    }

    const xTerms = leftTerms.filter((term) => term.factors.some((factor) => factor.key === "X")).map((term) => makeXTerm(term, 1))
      .concat(rightTerms.filter((term) => term.factors.some((factor) => factor.key === "X")).map((term) => makeXTerm(term, -1)));
    if (!xTerms.length) throw new Error("L'equació no conté la incògnita X.");

    const constantTerms = rightTerms.filter((term) => !term.factors.some((factor) => factor.key === "X"))
      .concat(leftTerms.filter((term) => !term.factors.some((factor) => factor.key === "X")).map((term) => ({ ...term, sign: -term.sign })));
    const constants = constantSum(constantTerms);
    const commonRight = xTerms.every((term) => term.right.key === xTerms[0].right.key);
    const commonLeft = xTerms.every((term) => term.left.key === xTerms[0].left.key);
    let leftFactor;
    let rightFactor;

    if (commonRight) {
      leftFactor = combinedFactor(xTerms, "left");
      rightFactor = xTerms[0].right;
    } else if (commonLeft) {
      leftFactor = xTerms[0].left;
      rightFactor = combinedFactor(xTerms, "right");
    } else {
      throw theoryError(
        "No es pot treure X com a factor comú perquè ocupa posicions diferents.",
        "La multiplicació de matrius no és commutativa: només podem agrupar termes si X és un factor comú pel mateix costat.",
      );
    }

    const steps = [{
      title: "Escrivim l'equació",
      explanation: "Identifiquem els termes que contenen la matriu incògnita X.",
      tex: `${rawTex(equalityParts[0])}=${rawTex(equalityParts[1])}`,
    }];

    if (leftAnalysis.expandedParentheses || rightAnalysis.expandedParentheses) {
      steps.push({
        title: "Desenvolupem els parèntesis",
        explanation: "Apliquem la propietat distributiva mantenint l'ordre dels factors.",
        tex: `${polynomialTex(leftTerms)}=${polynomialTex(rightTerms)}`,
      });
    }

    const gatheredTex = `${xTermSumTex(xTerms)}=${constants.tex}`;
    const previousTex = steps[steps.length - 1].tex;
    if (gatheredTex !== previousTex) {
      steps.push({
        title: "Reunim els termes",
        explanation: "Passem els termes amb X al primer membre i la resta al segon membre, canviant el signe quan travessen l'igual.",
        tex: gatheredTex,
      });
    }

    const factoredTex = `${displayedFactor(leftFactor)}X${displayedFactor(rightFactor)}=${constants.tex}`;
    if (xTerms.length > 1 || factoredTex !== gatheredTex) {
      const side = commonRight ? "l'esquerra" : "la dreta";
      steps.push({
        title: "Traiem X com a factor comú",
        explanation: `X ocupa la mateixa posició en tots els termes i la podem treure com a factor comú per ${side}.`,
        tex: factoredTex,
      });
    }

    let explanation;
    if (!leftFactor.identity && !rightFactor.identity) {
      explanation = "Multipliquem per la inversa del factor esquerre a l'esquerra i per la inversa del factor dret a la dreta.";
    } else if (!leftFactor.identity) {
      explanation = "Multipliquem els dos membres per l'esquerra per la inversa del factor que acompanya X.";
    } else if (!rightFactor.identity) {
      explanation = "Multipliquem els dos membres per la dreta per la inversa del factor que acompanya X.";
    } else {
      explanation = "La matriu X ja ha quedat aïllada.";
    }
    if (!leftFactor.identity || !rightFactor.identity) explanation += " Suposem que les matrius que invertim són invertibles.";

    steps.push({ title: "Aïllem X", explanation, tex: `\\boxed{${resultTex(leftFactor, rightFactor, constants)}}` });
    return { normalized, steps };
  }

  function formula(tex) {
    return `<div class="fa-formula">\\[${tex}\\]</div>`;
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

  function init(root) {
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";

    const expression = root.querySelector("#me-expression");
    const solveButton = root.querySelector("#me-solve");
    const resetButton = root.querySelector("#me-reset");
    const status = root.querySelector("#me-status");
    const message = root.querySelector("#me-message");
    const results = root.querySelector("#me-results");
    const stepList = root.querySelector("#me-step-list");
    const progress = root.querySelector("#me-progress");
    const nextButton = root.querySelector("#me-next");
    const showAllButton = root.querySelector("#me-show-all");
    const revealActions = root.querySelector("#me-reveal-actions");
    let analysis = null;
    let revealed = 0;

    function clearResult() {
      analysis = null;
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
    }

    function updateReveal() {
      const cards = Array.from(stepList.querySelectorAll(".dt-step-card"));
      cards.forEach((card, index) => { card.hidden = index >= revealed; });
      progress.textContent = `${revealed} de ${cards.length} passos`;
      const complete = revealed >= cards.length;
      nextButton.disabled = complete;
      nextButton.textContent = complete ? "Procediment complet" : "Mostra el pas següent";
      showAllButton.hidden = complete;
      revealActions.hidden = complete;
    }

    function present(nextAnalysis) {
      analysis = nextAnalysis;
      stepList.innerHTML = analysis.steps.map((item, index) => `<li class="dt-step-card"><p class="fa-step-number">Pas ${index + 1}</p><h3>${item.title}</h3><p class="dt-step-explanation">${item.explanation}</p>${formula(item.tex)}</li>`).join("");
      revealed = Math.min(1, analysis.steps.length);
      results.hidden = false;
      revealActions.hidden = false;
      renderMath(results);
      updateReveal();
      status.textContent = "Procediment preparat.";
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function showError(error) {
      message.replaceChildren();
      const summary = document.createElement("p");
      summary.textContent = error && error.message ? error.message : "No s'ha pogut aïllar X.";
      message.append(summary);
      if (error && error.theory) {
        const theory = document.createElement("p");
        const label = document.createElement("strong");
        label.textContent = "Recorda la teoria: ";
        theory.append(label, document.createTextNode(error.theory));
        message.append(theory);
      }
      message.hidden = false;
      status.textContent = "";
    }

    function solve() {
      message.hidden = true;
      results.hidden = true;
      solveButton.disabled = true;
      status.textContent = "Preparant el procediment…";
      window.setTimeout(() => {
        try { present(analyze(expression.value)); }
        catch (error) {
          analysis = null;
          showError(error);
        } finally {
          solveButton.disabled = false;
        }
      }, 20);
    }

    root.querySelectorAll("[data-me-example]").forEach((button) => button.addEventListener("click", () => {
      expression.value = EXAMPLES[button.dataset.meExample];
      clearResult();
      expression.focus();
    }));
    solveButton.addEventListener("click", solve);
    resetButton.addEventListener("click", () => {
      expression.value = EXAMPLES.combined;
      clearResult();
      expression.focus();
    });
    nextButton.addEventListener("click", () => {
      if (!analysis || revealed >= analysis.steps.length) return;
      revealed += 1;
      updateReveal();
      const current = stepList.querySelectorAll(".dt-step-card")[revealed - 1];
      if (current) current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    showAllButton.addEventListener("click", () => {
      if (!analysis) return;
      revealed = analysis.steps.length;
      updateReveal();
    });
    expression.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        solve();
      }
    });
  }

  window.MatrixEquationIsolator = { init, analyze };
  init(document.getElementById("matrix-equation-isolator"));
}());
