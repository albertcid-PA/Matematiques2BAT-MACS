(function () {
  "use strict";

  const VARIABLE_TEX = ["x", "y", "z"];
  const PARAMETER_TEX = ["\\lambda", "\\mu", "\\nu"];

  function bigintGcd(a, b) {
    let x = a < 0n ? -a : a;
    let y = b < 0n ? -b : b;
    while (y !== 0n) {
      const remainder = x % y;
      x = y;
      y = remainder;
    }
    return x;
  }

  class Fraction {
    constructor(numerator, denominator) {
      let n = BigInt(numerator);
      let d = denominator === undefined ? 1n : BigInt(denominator);
      if (d === 0n) throw new Error("No es pot dividir entre zero.");
      if (d < 0n) {
        n = -n;
        d = -d;
      }
      const divisor = bigintGcd(n, d) || 1n;
      this.n = n / divisor;
      this.d = d / divisor;
    }

    add(other) { return new Fraction(this.n * other.d + other.n * this.d, this.d * other.d); }
    sub(other) { return new Fraction(this.n * other.d - other.n * this.d, this.d * other.d); }
    mul(other) { return new Fraction(this.n * other.n, this.d * other.d); }
    div(other) {
      if (other.n === 0n) throw new Error("No es pot dividir entre zero.");
      return new Fraction(this.n * other.d, this.d * other.n);
    }
    neg() { return new Fraction(-this.n, this.d); }
    abs() { return new Fraction(this.n < 0n ? -this.n : this.n, this.d); }
    isZero() { return this.n === 0n; }
    isOne() { return this.n === this.d; }
    isMinusOne() { return this.n === -this.d; }
    isInteger() { return this.d === 1n; }
    toTex() {
      if (this.d === 1n) return this.n.toString();
      const sign = this.n < 0n ? "-" : "";
      const numerator = this.n < 0n ? -this.n : this.n;
      return `${sign}\\frac{${numerator.toString()}}{${this.d.toString()}}`;
    }
  }

  const ZERO = new Fraction(0n);
  const ONE = new Fraction(1n);

  function parseDecimal(value) {
    let source = String(value).trim().replace(",", ".");
    if (!source) throw new Error("Cal omplir tots els coeficients i termes independents.");
    let sign = 1n;
    if (source[0] === "+") source = source.slice(1);
    else if (source[0] === "-") {
      sign = -1n;
      source = source.slice(1);
    }
    if (!/^\d+(?:\.\d+)?$/.test(source)) throw new Error(`El valor «${value}» no és un nombre vàlid.`);
    const parts = source.split(".");
    if (parts.length === 1) return new Fraction(sign * BigInt(parts[0]));
    const denominator = 10n ** BigInt(parts[1].length);
    const numerator = BigInt(parts[0]) * denominator + BigInt(parts[1]);
    return new Fraction(sign * numerator, denominator);
  }

  function parseFraction(value) {
    const source = String(value).trim();
    const slash = source.indexOf("/");
    if (slash === -1) return parseDecimal(source);
    if (source.indexOf("/", slash + 1) !== -1) throw new Error(`La fracció «${value}» no és vàlida.`);
    const numerator = parseDecimal(source.slice(0, slash));
    const denominator = parseDecimal(source.slice(slash + 1));
    return numerator.div(denominator);
  }

  function cloneMatrix(matrix) {
    return matrix.map((row) => row.slice());
  }

  function fractionAbsTex(value) {
    return value.abs().toTex();
  }

  function coefficientVariableTerm(value, variable, first) {
    if (value.isZero()) return "";
    const negative = value.n < 0n;
    let coefficient = fractionAbsTex(value);
    if (value.abs().isOne()) coefficient = "";
    const body = `${coefficient}${variable}`;
    if (first) return negative ? `-${body}` : body;
    return negative ? `-${body}` : `+${body}`;
  }

  function equationTex(row, size) {
    let left = "";
    for (let column = 0; column < size; column += 1) {
      const term = coefficientVariableTerm(row[column], VARIABLE_TEX[column], left === "");
      if (term) left += term;
    }
    return `${left || "0"}=${row[size].toTex()}`;
  }

  function systemTex(matrix, size) {
    return `\\begin{cases}${matrix.map((row) => equationTex(row, size)).join("\\\\")}\\end{cases}`;
  }

  function matrixTex(matrix, size) {
    const columns = `${"c".repeat(size)}|c`;
    const rows = matrix.map((row) => row.map((value) => value.toTex()).join("&")).join("\\\\");
    return `\\left(\\begin{array}{${columns}}${rows}\\end{array}\\right)`;
  }

  function firstNonzeroColumn(row, size) {
    for (let column = 0; column < size; column += 1) {
      if (!row[column].isZero()) return column;
    }
    return -1;
  }

  function integerRowTerm(coefficient, rowIndex) {
    const absolute = coefficient < 0n ? -coefficient : coefficient;
    const scalar = absolute === 1n ? "" : absolute.toString();
    return `${scalar}F_{${rowIndex + 1}}`;
  }

  function combinationLabel(targetIndex, pivotIndex, alpha, beta) {
    const first = integerRowTerm(alpha, targetIndex);
    const second = integerRowTerm(beta, pivotIndex);
    const operator = beta < 0n ? "+" : "-";
    return `F_{${targetIndex + 1}}=${first}${operator}${second}`;
  }

  function fractionCombinationLabel(targetIndex, pivotIndex, multiplier) {
    const operator = multiplier.n < 0n ? "+" : "-";
    const absolute = multiplier.abs();
    const scalar = absolute.isOne() ? "" : absolute.toTex();
    return `F_{${targetIndex + 1}}=F_{${targetIndex + 1}}${operator}${scalar}F_{${pivotIndex + 1}}`;
  }

  function commonIntegerDivisor(row, size) {
    if (!row.slice(0, size).some((value) => !value.isZero())) return 1n;
    if (!row.every((value) => value.isInteger())) return 1n;
    let divisor = 0n;
    row.forEach((value) => {
      if (!value.isZero()) divisor = divisor === 0n ? (value.n < 0n ? -value.n : value.n) : bigintGcd(divisor, value.n);
    });
    return divisor || 1n;
  }

  function makeEchelon(source, size) {
    const matrix = cloneMatrix(source);
    const operations = [];
    let pivotRow = 0;

    for (let column = 0; column < size && pivotRow < size; column += 1) {
      let candidate = pivotRow;
      while (candidate < size && matrix[candidate][column].isZero()) candidate += 1;
      if (candidate === size) continue;

      if (candidate !== pivotRow) {
        const before = cloneMatrix(matrix);
        const temporary = matrix[pivotRow];
        matrix[pivotRow] = matrix[candidate];
        matrix[candidate] = temporary;
        operations.push({
          title: "Permutem dues files",
          explanation: `Necessitem un pivot no nul a la columna ${column + 1}.`,
          label: `F_{${pivotRow + 1}}\\leftrightarrow F_{${candidate + 1}}`,
          before,
          after: cloneMatrix(matrix),
        });
      }

      for (let row = pivotRow + 1; row < size; row += 1) {
        if (matrix[row][column].isZero()) continue;
        const before = cloneMatrix(matrix);
        const pivot = matrix[pivotRow][column];
        const entry = matrix[row][column];
        let label;

        if (pivot.isInteger() && entry.isInteger()) {
          const divisor = bigintGcd(pivot.n, entry.n) || 1n;
          let alpha = pivot.n / divisor;
          let beta = entry.n / divisor;
          if (alpha < 0n) {
            alpha = -alpha;
            beta = -beta;
          }
          const alphaFraction = new Fraction(alpha);
          const betaFraction = new Fraction(beta);
          matrix[row] = matrix[row].map((value, index) => value.mul(alphaFraction).sub(matrix[pivotRow][index].mul(betaFraction)));
          label = combinationLabel(row, pivotRow, alpha, beta);
        } else {
          const multiplier = entry.div(pivot);
          matrix[row] = matrix[row].map((value, index) => value.sub(matrix[pivotRow][index].mul(multiplier)));
          label = fractionCombinationLabel(row, pivotRow, multiplier);
        }

        operations.push({
          title: "Anul·lem un coeficient",
          explanation: `Fem zero a la fila ${row + 1}, columna ${column + 1}.`,
          label,
          before,
          after: cloneMatrix(matrix),
        });

        const divisor = commonIntegerDivisor(matrix[row], size);
        if (divisor > 1n) {
          const simplifyBefore = cloneMatrix(matrix);
          const divisorFraction = new Fraction(divisor);
          matrix[row] = matrix[row].map((value) => value.div(divisorFraction));
          operations.push({
            title: "Simplifiquem una fila",
            explanation: `Tots els termes de la fila ${row + 1} són divisibles entre ${divisor.toString()}.`,
            label: `F_{${row + 1}}=\\frac{1}{${divisor.toString()}}F_{${row + 1}}`,
            before: simplifyBefore,
            after: cloneMatrix(matrix),
          });
        }
      }
      pivotRow += 1;
    }

    return { matrix, operations };
  }

  function emptyExpression() {
    return { constant: ZERO, parameters: new Map() };
  }

  function constantExpression(value) {
    return { constant: value, parameters: new Map() };
  }

  function parameterExpression(index) {
    return { constant: ZERO, parameters: new Map([[index, ONE]]) };
  }

  function expressionAdd(left, right) {
    const result = { constant: left.constant.add(right.constant), parameters: new Map(left.parameters) };
    right.parameters.forEach((value, key) => {
      const current = result.parameters.get(key) || ZERO;
      const next = current.add(value);
      if (next.isZero()) result.parameters.delete(key);
      else result.parameters.set(key, next);
    });
    return result;
  }

  function expressionScale(expression, scalar) {
    const result = { constant: expression.constant.mul(scalar), parameters: new Map() };
    expression.parameters.forEach((value, key) => {
      const next = value.mul(scalar);
      if (!next.isZero()) result.parameters.set(key, next);
    });
    return result;
  }

  function expressionSub(left, right) {
    return expressionAdd(left, expressionScale(right, new Fraction(-1n)));
  }

  function expressionTex(expression) {
    const terms = [];
    if (!expression.constant.isZero()) terms.push({ value: expression.constant, body: expression.constant.abs().toTex() });
    Array.from(expression.parameters.entries()).sort((a, b) => a[0] - b[0]).forEach(([index, value]) => {
      if (value.isZero()) return;
      const coefficient = value.abs().isOne() ? "" : value.abs().toTex();
      terms.push({ value, body: `${coefficient}${PARAMETER_TEX[index]}` });
    });
    if (!terms.length) return "0";
    return terms.map((term, index) => {
      const negative = term.value.n < 0n;
      if (index === 0) return negative ? `-${term.body}` : term.body;
      return negative ? `-${term.body}` : `+${term.body}`;
    }).join("");
  }

  function pivotRows(matrix, size) {
    const pivots = [];
    matrix.forEach((row, index) => {
      const column = firstNonzeroColumn(row, size);
      if (column !== -1) pivots.push({ row: index, column });
    });
    return pivots;
  }

  function solveExpressions(matrix, size) {
    const pivots = pivotRows(matrix, size);
    const pivotColumns = new Set(pivots.map((pivot) => pivot.column));
    const freeColumns = [];
    for (let column = 0; column < size; column += 1) {
      if (!pivotColumns.has(column)) freeColumns.push(column);
    }

    const expressions = new Array(size);
    freeColumns.forEach((column, index) => { expressions[column] = parameterExpression(index); });

    for (let index = pivots.length - 1; index >= 0; index -= 1) {
      const pivot = pivots[index];
      const row = matrix[pivot.row];
      let result = constantExpression(row[size]);
      for (let column = pivot.column + 1; column < size; column += 1) {
        if (!row[column].isZero()) result = expressionSub(result, expressionScale(expressions[column], row[column]));
      }
      expressions[pivot.column] = expressionScale(result, ONE.div(row[pivot.column]));
    }
    return { expressions, pivots, freeColumns };
  }

  function numericSubstitutionLine(row, pivotColumn, values, size) {
    let left = coefficientVariableTerm(row[pivotColumn], VARIABLE_TEX[pivotColumn], true);
    for (let column = pivotColumn + 1; column < size; column += 1) {
      if (row[column].isZero()) continue;
      const coefficient = row[column];
      const value = values[column];
      const negative = coefficient.n < 0n;
      const absoluteCoefficient = coefficient.abs();
      const coefficientTex = absoluteCoefficient.isOne() ? "" : absoluteCoefficient.toTex();
      const valueTex = value.n < 0n ? `\\left(${value.toTex()}\\right)` : value.toTex();
      const product = `${coefficientTex}${coefficientTex ? "\\cdot" : ""}${valueTex}`;
      left += negative ? `-${product}` : `+${product}`;
    }
    return `${left}=${row[size].toTex()}\\Rightarrow ${VARIABLE_TEX[pivotColumn]}=${values[pivotColumn].toTex()}`;
  }

  function analyzeSystem(source, size) {
    const echelon = makeEchelon(source, size);
    const matrix = echelon.matrix;
    const steps = [{
      title: "Escrivim la matriu ampliada",
      explanation: "Mantenim el mateix ordre de les incògnites a totes les files.",
      tex: `${systemTex(source, size)}\\quad\\Longleftrightarrow\\quad${matrixTex(source, size)}`,
    }];

    echelon.operations.forEach((operation) => {
      steps.push({
        title: operation.title,
        explanation: operation.explanation,
        tex: `${matrixTex(operation.before, size)}\\xrightarrow{${operation.label}}${matrixTex(operation.after, size)}`,
      });
    });

    steps.push({
      title: "Llegim el sistema esglaonat",
      explanation: "Traduïm de nou cada fila a una equació.",
      tex: systemTex(matrix, size),
    });

    const contradictionRow = matrix.find((row) => row.slice(0, size).every((value) => value.isZero()) && !row[size].isZero());
    if (contradictionRow) {
      steps.push({
        title: "Classifiquem el sistema",
        explanation: `Apareix la igualtat impossible $0=${contradictionRow[size].toTex()}$. Per tant, el sistema no té cap solució.`,
        tex: `\\boxed{\\text{Sistema incompatible (SI)}}`,
        classification: "SI",
      });
      return { classification: "SI", steps };
    }

    const solution = solveExpressions(matrix, size);
    if (solution.freeColumns.length === 0) {
      const values = solution.expressions.map((expression) => expression.constant);
      const substitutionLines = [];
      for (let index = solution.pivots.length - 1; index >= 0; index -= 1) {
        const pivot = solution.pivots[index];
        substitutionLines.push(numericSubstitutionLine(matrix[pivot.row], pivot.column, values, size));
      }
      steps.push({
        title: "Fem la substitució enrere",
        explanation: "Resolem de baix cap amunt.",
        tex: `\\begin{aligned}${substitutionLines.join("\\\\")}\\end{aligned}`,
      });
      const tuple = values.map((value) => value.toTex()).join(",");
      steps.push({
        title: "Classifiquem el sistema",
        explanation: "Hem pogut determinar totes les incògnites. El sistema té una única solució.",
        tex: `\\boxed{\\left(${VARIABLE_TEX.slice(0, size).join(",")}\\right)=\\left(${tuple}\\right)}\\qquad\\boxed{\\text{SCD}}`,
        classification: "SCD",
      });
      return { classification: "SCD", steps };
    }

    const freeAssignments = solution.freeColumns.map((column, index) => `${VARIABLE_TEX[column]}=${PARAMETER_TEX[index]}`);
    const pivotAssignments = solution.pivots.slice().reverse().map((pivot) => `${VARIABLE_TEX[pivot.column]}=${expressionTex(solution.expressions[pivot.column])}`);
    steps.push({
      title: "Expressem les infinites solucions",
      explanation: "Assignem un paràmetre a cada incògnita lliure i expressem les altres incògnites en funció d'aquests paràmetres.",
      tex: `\\begin{aligned}${freeAssignments.concat(pivotAssignments).join("\\\\")}\\end{aligned}`,
    });
    const tuple = solution.expressions.map((expression) => expressionTex(expression)).join(",");
    const parameterSet = solution.freeColumns.map((column, index) => `${PARAMETER_TEX[index]}\\in\\mathbb{R}`).join(",\\ ");
    steps.push({
      title: "Classifiquem el sistema",
      explanation: "Queda almenys una incògnita lliure. Per tant, el sistema té infinites solucions.",
      tex: `\\boxed{\\left(${VARIABLE_TEX.slice(0, size).join(",")}\\right)=\\left(${tuple}\\right)}\\quad ${parameterSet}\\qquad\\boxed{\\text{SCI}}`,
      classification: "SCI",
    });
    return { classification: "SCI", steps };
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

  const EXAMPLES = {
    2: {
      scd: [["1", "1", "5"], ["1", "-1", "1"]],
      sci: [["1", "1", "4"], ["2", "2", "8"]],
      si: [["1", "1", "4"], ["2", "2", "10"]],
    },
    3: {
      scd: [["1", "1", "1", "2"], ["2", "-1", "1", "-1"], ["1", "2", "-1", "6"]],
      sci: [["1", "1", "1", "4"], ["1", "-1", "1", "2"], ["2", "0", "2", "6"]],
      si: [["1", "1", "1", "4"], ["1", "-1", "1", "2"], ["2", "0", "2", "7"]],
    },
  };

  function initLinearSystemTool(root) {
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";

    const tabs = Array.from(root.querySelectorAll("[data-system-size]"));
    const rows = Array.from(root.querySelectorAll("[data-equation-row]"));
    const zTerms = Array.from(root.querySelectorAll(".ls-z-term"));
    const solveButton = root.querySelector("#ls-solve");
    const resetButton = root.querySelector("#ls-reset");
    const status = root.querySelector("#ls-status");
    const message = root.querySelector("#ls-message");
    const results = root.querySelector("#ls-results");
    const stepList = root.querySelector("#ls-step-list");
    const progress = root.querySelector("#ls-progress");
    const nextButton = root.querySelector("#ls-next");
    const showAllButton = root.querySelector("#ls-show-all");
    const revealActions = root.querySelector("#ls-reveal-actions");
    let size = 2;
    let analysis = null;
    let revealedSteps = 0;

    function inputId(row, column) {
      return column < size ? `ls-a${row + 1}${column + 1}` : `ls-b${row + 1}`;
    }

    function setExample(kind) {
      const example = EXAMPLES[size][kind];
      example.forEach((row, rowIndex) => {
        for (let column = 0; column < size; column += 1) root.querySelector(`#ls-a${rowIndex + 1}${column + 1}`).value = row[column];
        root.querySelector(`#ls-b${rowIndex + 1}`).value = row[size];
      });
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
    }

    function setSize(nextSize) {
      size = Number(nextSize);
      root.dataset.systemSize = String(size);
      tabs.forEach((tab) => {
        const active = Number(tab.dataset.systemSize) === size;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      rows[2].hidden = size === 2;
      zTerms.forEach((term) => { term.hidden = size === 2; });
      setExample("scd");
    }

    function readMatrix() {
      const matrix = [];
      for (let row = 0; row < size; row += 1) {
        const values = [];
        for (let column = 0; column <= size; column += 1) {
          const input = root.querySelector(`#${inputId(row, column)}`);
          values.push(parseFraction(input.value));
        }
        matrix.push(values);
      }
      return matrix;
    }

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
      if (!analysis || revealedSteps >= analysis.steps.length) return;
      revealedSteps += 1;
      updateRevealedSteps();
      const current = stepList.querySelectorAll(".dt-step-card")[revealedSteps - 1];
      if (current) current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function solve() {
      status.textContent = "Calculant…";
      solveButton.disabled = true;
      message.hidden = true;
      results.hidden = true;
      window.setTimeout(() => {
        try {
          const matrix = readMatrix();
          analysis = analyzeSystem(matrix, size);
          stepList.innerHTML = analysis.steps.map((step, index) => {
            const classification = step.classification ? `<span class="ls-classification ls-classification--${step.classification.toLowerCase()}">${step.classification}</span>` : "";
            return `<li class="dt-step-card ls-step-card"><p class="fa-step-number">Pas ${index + 1}</p><div class="ls-step-heading"><h3>${step.title}</h3>${classification}</div><p class="dt-step-explanation">${step.explanation}</p>${formula(step.tex)}</li>`;
          }).join("");
          revealedSteps = Math.min(1, analysis.steps.length);
          results.hidden = false;
          revealActions.hidden = false;
          renderMath(results);
          updateRevealedSteps();
          status.textContent = "Resolució preparada.";
          results.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          analysis = null;
          message.textContent = error && error.message ? error.message : "No s'ha pogut resoldre el sistema.";
          message.hidden = false;
          status.textContent = "";
        } finally {
          solveButton.disabled = false;
        }
      }, 20);
    }

    tabs.forEach((tab) => tab.addEventListener("click", () => setSize(tab.dataset.systemSize)));
    root.querySelectorAll("[data-system-example]").forEach((button) => button.addEventListener("click", () => setExample(button.dataset.systemExample)));
    solveButton.addEventListener("click", solve);
    nextButton.addEventListener("click", revealNextStep);
    showAllButton.addEventListener("click", () => {
      if (!analysis) return;
      revealedSteps = analysis.steps.length;
      updateRevealedSteps();
    });
    resetButton.addEventListener("click", () => setSize(2));
    root.querySelectorAll("input").forEach((input) => input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") solve();
    }));
  }

  window.LinearSystemTool = { init: initLinearSystemTool, analyzeSystem, parseFraction };
  initLinearSystemTool(document.getElementById("linear-system-tool"));
}());

