(function () {
  "use strict";

  const EPS = 1e-8;
  const ROOT_EPS = 1e-6;
  const MAX_ABS_BREAKS = 6;
  const ALLOWED_FUNCTIONS = new Set(["abs", "sqrt", "cbrt", "exp", "log"]);
  const COLORS = ["#1565c0", "#7b1fa2", "#00897b"];

  function normalizeExpression(value) {
    return String(value || "")
      .trim()
      .replace(/[−–—]/g, "-")
      .replace(/[·×]/g, "*")
      .replace(/(\d),(\d)/g, "$1.$2")
      .replace(/\bln\s*\(/gi, "log(")
      .replace(/\bln\s+([a-zA-Z0-9.]+)/gi, "log($1)")
      .replace(/\be\s*\^/g, "e^");
  }

  function assertMath() {
    if (!window.math) {
      throw new Error("No s'ha pogut carregar el motor matemàtic. Recarrega la pàgina i torna-ho a provar.");
    }
  }

  function validateNode(node) {
    node.traverse(function (child) {
      if (child.isSymbolNode && !["x", "e", "pi", ...ALLOWED_FUNCTIONS].includes(child.name)) {
        throw new Error(`El símbol «${child.name}» no està admès. Utilitza només la variable x.`);
      }
      if (child.isFunctionNode) {
        const name = child.fn && child.fn.name;
        if (!ALLOWED_FUNCTIONS.has(name)) {
          throw new Error(`La funció «${name || child.toString()}» queda fora de l'abast de l'analitzador.`);
        }
        if (name === "log" && ![1, 2].includes(child.args.length)) {
          throw new Error("Escriu el logaritme com ln(x) o log(x,base). ");
        }
      }
      if (child.isOperatorNode && !["+", "-", "*", "/", "^"].includes(child.op)) {
        throw new Error(`L'operador «${child.op}» no està admès.`);
      }
      if (child.isAssignmentNode || child.isAccessorNode || child.isArrayNode || child.isObjectNode) {
        throw new Error("L'entrada no és una funció d'una variable admesa.");
      }
    });
  }

  function parseExpression(value) {
    assertMath();
    const normalized = normalizeExpression(value);
    if (!normalized) throw new Error("Escriu una funció abans de començar l'estudi.");
    let node;
    try {
      node = math.parse(normalized);
    } catch (error) {
      throw new Error("No s'ha pogut interpretar l'expressió. Comprova els parèntesis i els signes d'operació.");
    }
    validateNode(node);
    return { normalized, node };
  }

  function simplifyNode(node) {
    try {
      return math.simplify(node);
    } catch (_error) {
      return node;
    }
  }

  function derivativeNode(node) {
    try {
      return simplifyNode(math.derivative(node, "x"));
    } catch (_error) {
      return null;
    }
  }

  function safeCompile(node) {
    const compiled = node.compile();
    return function (x) {
      try {
        const value = compiled.evaluate({ x });
        if (typeof value === "number" && Number.isFinite(value)) return value;
        if (value && typeof value.re === "number" && Math.abs(value.im || 0) < EPS && Number.isFinite(value.re)) {
          return value.re;
        }
      } catch (_error) {
        return NaN;
      }
      return NaN;
    };
  }

  function containsNode(node, predicate) {
    let found = false;
    node.traverse(function (child) {
      if (predicate(child)) found = true;
    });
    return found;
  }

  function nodeFunctionName(node) {
    return node && node.isFunctionNode && node.fn ? node.fn.name : "";
  }

  function classifyNode(node) {
    if (containsNode(node, (n) => nodeFunctionName(n) === "abs")) return "amb valor absolut";
    const fraction = fractionParts(node);
    if (fraction && polynomialCoefficients(fraction.numerator) && polynomialCoefficients(fraction.denominator)) return "racional";
    if (polynomialCoefficients(node)) return "polinòmica";
    if (containsNode(node, (n) => ["sqrt", "cbrt"].includes(nodeFunctionName(n)))) return "irracional";
    if (containsNode(node, (n) => nodeFunctionName(n) === "log")) return "logarítmica o combinada amb logaritmes";
    if (containsNode(node, (n) => nodeFunctionName(n) === "exp") || containsNode(node, isExponentialPower)) {
      return "exponencial o combinada amb exponencials";
    }
    return "combinada";
  }

  function isExponentialPower(node) {
    if (!node || !node.isOperatorNode || node.op !== "^") return false;
    const base = node.args[0];
    return (base.isConstantNode && Number(base.value) > 0) || (base.isSymbolNode && base.name === "e");
  }

  function trimPolynomial(coefficients) {
    if (!coefficients) return null;
    const result = coefficients.slice();
    while (result.length > 1 && Math.abs(result[result.length - 1]) < EPS) result.pop();
    return result;
  }

  function addPolynomials(a, b, sign) {
    const length = Math.max(a.length, b.length);
    const result = Array(length).fill(0);
    for (let i = 0; i < length; i += 1) result[i] = (a[i] || 0) + sign * (b[i] || 0);
    return trimPolynomial(result);
  }

  function multiplyPolynomials(a, b) {
    if (a.length + b.length - 2 > 8) return null;
    const result = Array(a.length + b.length - 1).fill(0);
    for (let i = 0; i < a.length; i += 1) {
      for (let j = 0; j < b.length; j += 1) result[i + j] += a[i] * b[j];
    }
    return trimPolynomial(result);
  }

  function polynomialPower(base, exponent) {
    if (!Number.isInteger(exponent) || exponent < 0 || exponent > 8) return null;
    let result = [1];
    for (let i = 0; i < exponent; i += 1) {
      result = multiplyPolynomials(result, base);
      if (!result) return null;
    }
    return result;
  }

  function polynomialCoefficients(node) {
    if (!node) return null;
    if (node.isParenthesisNode) return polynomialCoefficients(node.content);
    if (node.isConstantNode) {
      const value = Number(node.value);
      return Number.isFinite(value) ? [value] : null;
    }
    if (node.isSymbolNode) {
      if (node.name === "x") return [0, 1];
      if (node.name === "e") return [Math.E];
      if (node.name === "pi") return [Math.PI];
      return null;
    }
    if (!node.isOperatorNode) return null;
    if (node.isUnary()) {
      const value = polynomialCoefficients(node.args[0]);
      if (!value) return null;
      return node.op === "-" ? value.map((coefficient) => -coefficient) : value;
    }
    const left = polynomialCoefficients(node.args[0]);
    const right = polynomialCoefficients(node.args[1]);
    if (node.op === "+" || node.op === "-") {
      return left && right ? addPolynomials(left, right, node.op === "+" ? 1 : -1) : null;
    }
    if (node.op === "*") return left && right ? multiplyPolynomials(left, right) : null;
    if (node.op === "/") {
      if (!left || !right || right.length !== 1 || Math.abs(right[0]) < EPS) return null;
      return left.map((coefficient) => coefficient / right[0]);
    }
    if (node.op === "^") {
      if (!left || !node.args[1].isConstantNode) return null;
      return polynomialPower(left, Number(node.args[1].value));
    }
    return null;
  }

  function evaluatePolynomial(coefficients, x) {
    let result = 0;
    for (let i = coefficients.length - 1; i >= 0; i -= 1) result = result * x + coefficients[i];
    return result;
  }

  function derivativePolynomial(coefficients) {
    if (coefficients.length <= 1) return [0];
    return coefficients.slice(1).map((coefficient, index) => coefficient * (index + 1));
  }

  function bisectFunction(fn, left, right) {
    let a = left;
    let b = right;
    let fa = fn(a);
    let fb = fn(b);
    if (!Number.isFinite(fa) || !Number.isFinite(fb)) return NaN;
    for (let i = 0; i < 80; i += 1) {
      const middle = (a + b) / 2;
      const fm = fn(middle);
      if (!Number.isFinite(fm)) return NaN;
      if (Math.abs(fm) < 1e-11 || Math.abs(b - a) < 1e-10) return middle;
      if (fa * fm <= 0) {
        b = middle;
        fb = fm;
      } else {
        a = middle;
        fa = fm;
      }
    }
    return (a + b) / 2;
  }

  function uniqueNumbers(values, tolerance) {
    return values
      .filter(Number.isFinite)
      .sort((a, b) => a - b)
      .filter((value, index, array) => index === 0 || Math.abs(value - array[index - 1]) > (tolerance || 1e-5));
  }

  function polynomialRealRoots(coefficients) {
    const p = trimPolynomial(coefficients);
    const degree = p.length - 1;
    if (degree <= 0) return [];
    if (degree === 1) return [-p[0] / p[1]];
    if (degree === 2) {
      const [c, b, a] = p;
      const radicand = b * b - 4 * a * c;
      if (radicand < -EPS) return [];
      if (Math.abs(radicand) < EPS) return [-b / (2 * a)];
      const root = Math.sqrt(radicand);
      return uniqueNumbers([(-b - root) / (2 * a), (-b + root) / (2 * a)]);
    }
    const leading = Math.abs(p[degree]);
    const bound = 1 + Math.max(...p.slice(0, degree).map((value) => Math.abs(value) / leading));
    const critical = polynomialRealRoots(derivativePolynomial(p)).filter((x) => x > -bound && x < bound);
    const partitions = [-bound, ...critical, bound];
    const roots = [];
    critical.forEach((x) => {
      if (Math.abs(evaluatePolynomial(p, x)) < 1e-6) roots.push(x);
    });
    for (let i = 0; i < partitions.length - 1; i += 1) {
      const a = partitions[i];
      const b = partitions[i + 1];
      const fa = evaluatePolynomial(p, a);
      const fb = evaluatePolynomial(p, b);
      if (fa * fb < 0) roots.push(bisectFunction((x) => evaluatePolynomial(p, x), a, b));
      if (Math.abs(fa) < 1e-7) roots.push(a);
      if (Math.abs(fb) < 1e-7) roots.push(b);
    }
    return uniqueNumbers(roots);
  }

  function findRootsNumeric(node, range) {
    const polynomial = polynomialCoefficients(node);
    if (polynomial) return polynomialRealRoots(polynomial);
    const fn = safeCompile(node);
    const min = range && Number.isFinite(range.min) ? range.min : -50;
    const max = range && Number.isFinite(range.max) ? range.max : 50;
    const steps = 2400;
    const roots = [];
    const sampled = [];
    for (let i = 0; i <= steps; i += 1) {
      const x = min + ((max - min) * i) / steps;
      const y = fn(x);
      sampled.push({ x, y });
      if (i > 0 && Number.isFinite(y)) {
        const previous = sampled[i - 1];
        if (Number.isFinite(previous.y) && previous.y * y < 0) {
          const root = bisectFunction(fn, previous.x, x);
          if (Number.isFinite(root) && Math.abs(fn(root)) < 1e-4) roots.push(root);
        }
      }
    }
    for (let i = 1; i < sampled.length - 1; i += 1) {
      const previous = sampled[i - 1];
      const current = sampled[i];
      const next = sampled[i + 1];
      if (![previous.y, current.y, next.y].every(Number.isFinite)) continue;
      const currentAbs = Math.abs(current.y);
      if (currentAbs < 1e-8 && currentAbs <= Math.abs(previous.y) * 0.2 && currentAbs <= Math.abs(next.y) * 0.2) roots.push(current.x);
    }
    return uniqueNumbers(roots, 2e-3);
  }

  function fractionParts(node) {
    let current = node;
    while (current && current.isParenthesisNode) current = current.content;
    if (current && current.isOperatorNode && current.op === "/") {
      return { numerator: current.args[0], denominator: current.args[1] };
    }
    return null;
  }

  function collectConstraints(node) {
    const constraints = [];
    node.traverse(function (child) {
      if (child.isOperatorNode && child.op === "/") {
        constraints.push({ kind: "nonzero", node: child.args[1], source: "denominador" });
      }
      const name = nodeFunctionName(child);
      if (name === "log") constraints.push({ kind: "positive", node: child.args[0], source: "logaritme" });
      if (name === "sqrt") constraints.push({ kind: "nonnegative", node: child.args[0], source: "arrel quadrada" });
    });
    const seen = new Set();
    return constraints.filter((constraint) => {
      const key = `${constraint.kind}:${constraint.node.toString()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function constraintBoundaries(constraints) {
    const values = [];
    constraints.forEach((constraint) => values.push(...findRootsNumeric(constraint.node)));
    return uniqueNumbers(values);
  }

  function satisfiesConstraints(x, constraints, atBoundary) {
    return constraints.every((constraint) => {
      const value = safeCompile(constraint.node)(x);
      if (!Number.isFinite(value)) return false;
      if (constraint.kind === "nonzero") return Math.abs(value) > (atBoundary ? 1e-10 : 1e-7);
      if (constraint.kind === "positive") return value > (atBoundary ? 1e-10 : 1e-7);
      return value >= (atBoundary ? -1e-9 : -1e-7);
    });
  }

  function intervalContains(interval, x, atBoundary) {
    const lowerOk = x > interval.lower + EPS || (Math.abs(x - interval.lower) <= EPS && interval.lowerClosed && atBoundary);
    const upperOk = x < interval.upper - EPS || (Math.abs(x - interval.upper) <= EPS && interval.upperClosed && atBoundary);
    return lowerOk && upperOk;
  }

  function chooseSample(left, right) {
    if (!Number.isFinite(left) && !Number.isFinite(right)) return 0;
    if (!Number.isFinite(left)) return right - Math.max(1, Math.abs(right) * 0.25 + 1);
    if (!Number.isFinite(right)) return left + Math.max(1, Math.abs(left) * 0.25 + 1);
    return (left + right) / 2;
  }

  function domainIntervalsForBranch(branch) {
    const boundaries = uniqueNumbers([
      ...constraintBoundaries(branch.constraints),
      ...(Number.isFinite(branch.interval.lower) ? [branch.interval.lower] : []),
      ...(Number.isFinite(branch.interval.upper) ? [branch.interval.upper] : []),
    ]);
    const cuts = [-Infinity, ...boundaries, Infinity];
    const intervals = [];
    for (let i = 0; i < cuts.length - 1; i += 1) {
      const left = cuts[i];
      const right = cuts[i + 1];
      const sample = chooseSample(left, right);
      if (!intervalContains(branch.interval, sample, false) || !satisfiesConstraints(sample, branch.constraints, false)) continue;
      const lowerClosed = Number.isFinite(left) && intervalContains(branch.interval, left, true) && satisfiesConstraints(left, branch.constraints, true);
      const upperClosed = Number.isFinite(right) && intervalContains(branch.interval, right, true) && satisfiesConstraints(right, branch.constraints, true);
      intervals.push({ lower: left, upper: right, lowerClosed, upperClosed });
    }
    return intervals;
  }

  function mergeIntervals(intervals) {
    const sorted = intervals.slice().sort((a, b) => a.lower - b.lower || a.upper - b.upper);
    const merged = [];
    sorted.forEach((interval) => {
      const previous = merged[merged.length - 1];
      if (previous && (interval.lower < previous.upper - EPS || (Math.abs(interval.lower - previous.upper) < EPS && (previous.upperClosed || interval.lowerClosed)))) {
        if (interval.upper > previous.upper) {
          previous.upper = interval.upper;
          previous.upperClosed = interval.upperClosed;
        } else if (Math.abs(interval.upper - previous.upper) < EPS) {
          previous.upperClosed = previous.upperClosed || interval.upperClosed;
        }
      } else {
        merged.push({ ...interval });
      }
    });
    return merged;
  }

  function texNumber(value, approximate) {
    if (!Number.isFinite(value)) return value < 0 ? "-\\infty" : "+\\infty";
    if (Math.abs(value) < 5e-10) return "0";
    if (Math.abs(value - Math.round(value)) < 1e-9) return String(Math.round(value));
    for (let denominator = 2; denominator <= 24; denominator += 1) {
      const numerator = Math.round(value * denominator);
      if (Math.abs(value - numerator / denominator) < 1e-8) {
        const sign = numerator < 0 ? "-" : "";
        return `${sign}\\frac{${Math.abs(numerator)}}{${denominator}}`;
      }
    }
    const rounded = Number(value.toPrecision(5));
    return `${approximate === false ? "" : "\\approx "}${String(rounded).replace(".", "{,}")}`;
  }

  function texInterval(interval) {
    const left = interval.lowerClosed ? "[" : "(";
    const right = interval.upperClosed ? "]" : ")";
    return `${left}${texNumber(interval.lower, false)},${texNumber(interval.upper, false)}${right}`;
  }

  function texDomain(intervals) {
    if (intervals.length === 1 && intervals[0].lower === -Infinity && intervals[0].upper === Infinity) return "\\mathbb{R}";
    return intervals.map(texInterval).join("\\cup");
  }

  function toTex(node) {
    try {
      return node.toTex({ parenthesis: "keep", implicit: "show" }).replace(/\\log(?=\\left)/g, "\\ln");
    } catch (_error) {
      return node.toString();
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formula(tex, display) {
    return display === false ? `\\(${tex}\\)` : `<div class="fa-formula">\\[${tex}\\]</div>`;
  }

  function formatPoint(x, y) {
    return `(${texNumber(x, false)},${texNumber(y)})`;
  }

  function syntheticDivision(coefficients, root) {
    const descending = coefficients.slice().reverse();
    const bottom = [descending[0]];
    const products = [];
    for (let i = 1; i < descending.length; i += 1) {
      products.push(bottom[i - 1] * root);
      bottom.push(descending[i] + products[i - 1]);
    }
    return { descending, products, bottom };
  }

  function divisors(integer) {
    const n = Math.abs(Math.round(integer));
    if (n === 0) return [0];
    const result = [];
    for (let i = 1; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) result.push(i, n / i);
    }
    return uniqueNumbers(result, 0);
  }

  function rationalRootCandidate(coefficients) {
    if (!coefficients.every((value) => Math.abs(value - Math.round(value)) < EPS)) return null;
    const constant = coefficients[0];
    const leading = coefficients[coefficients.length - 1];
    const candidates = [];
    divisors(constant).forEach((p) => {
      divisors(leading).forEach((q) => {
        if (q !== 0) candidates.push(p / q, -p / q);
      });
    });
    return uniqueNumbers(candidates).find((x) => Math.abs(evaluatePolynomial(coefficients, x)) < 1e-7) ?? null;
  }

  function signedTexNumber(value) {
    const tex = texNumber(value, false);
    return value < 0 ? `(${tex})` : tex;
  }

  function rootFactorTex(root) {
    if (Math.abs(root) < EPS) return "x";
    return root > 0 ? `(x-${texNumber(root, false)})` : `(x+${texNumber(-root, false)})`;
  }

  function dividePolynomialByRoot(coefficients, root) {
    const division = syntheticDivision(coefficients, root);
    if (Math.abs(division.bottom[division.bottom.length - 1]) > 1e-6) return null;
    return trimPolynomial(division.bottom.slice(0, -1).reverse());
  }

  function removeRootMultiplicity(coefficients, root) {
    let reduced = trimPolynomial(coefficients);
    let multiplicity = 0;
    while (reduced.length > 1) {
      const quotient = dividePolynomialByRoot(reduced, root);
      if (!quotient) break;
      reduced = quotient;
      multiplicity += 1;
    }
    return { multiplicity, reduced };
  }

  function linearEquationExplanation(coefficients) {
    const [b, a] = coefficients;
    const root = -b / a;
    const steps = Math.abs(a - 1) < EPS
      ? `${polynomialToTex(coefficients)}=0\\;\\Longrightarrow\\;x=${texNumber(root)}`
      : `${polynomialToTex(coefficients)}=0\\;\\Longrightarrow\\;${polynomialToTex([0, a])}=${texNumber(-b, false)}\\;\\Longrightarrow\\;x=${texNumber(root)}`;
    return `<p>És una equació de primer grau. Aïllem la incògnita:</p>${formula(steps)}`;
  }

  function quadraticEquationExplanation(coefficients) {
    const [c, b, a] = coefficients;
    const radicand = b * b - 4 * a * c;
    let html = `<p>És una equació de segon grau, amb ${formula(`a=${texNumber(a, false)},\\quad b=${texNumber(b, false)},\\quad c=${texNumber(c, false)}`, false)}. Apliquem directament la fórmula general:</p>`;
    html += formula(`x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}=\\frac{${texNumber(-b, false)}\\pm\\sqrt{${signedTexNumber(b)}^2-4\\cdot${signedTexNumber(a)}\\cdot${signedTexNumber(c)}}}{${texNumber(2 * a, false)}}`);
    if (radicand < -EPS) return `${html}<p>El nombre que queda dins de l'arrel és ${formula(texNumber(radicand), false)}. Com que no té arrel quadrada real, l'equació no té solucions reals.</p>`;
    html += formula(`x=\\frac{${texNumber(-b, false)}\\pm\\sqrt{${texNumber(radicand, false)}}}{${texNumber(2 * a, false)}}`);
    if (Math.abs(radicand) < EPS) {
      const root = -b / (2 * a);
      return `${html}<p>Hi ha una única solució, que és doble:</p>${formula(`x=${texNumber(root)}`)}`;
    }
    const squareRoot = Math.sqrt(radicand);
    const root1 = (-b - squareRoot) / (2 * a);
    const root2 = (-b + squareRoot) / (2 * a);
    return `${html}<p>Separem els dos signes:</p>${formula(`x_1=${texNumber(root1)},\\qquad x_2=${texNumber(root2)}`)}`;
  }

  function polynomialEquationExplanation(coefficients, label) {
    const normalized = trimPolynomial(coefficients);
    const degree = normalized.length - 1;
    if (degree <= 0) return "";
    if (degree === 1) return linearEquationExplanation(normalized);
    if (degree === 2) return quadraticEquationExplanation(normalized);

    const ruffiniRoot = rationalRootCandidate(normalized);
    if (ruffiniRoot === null) {
      const roots = polynomialRealRoots(normalized);
      return roots.length
        ? `<p>No hi ha cap arrel racional que permeti aplicar Ruffini directament. Amb els mètodes algebraics del curs no es pot continuar la factorització; els zeros ${roots.map((root) => formula(`x\\simeq${texNumber(root)}`, false)).join(", ")} són aproximacions numèriques.</p>`
        : "<p>No hi ha cap arrel racional per aplicar Ruffini ni cap solució real.</p>";
    }

    const division = syntheticDivision(normalized, ruffiniRoot);
    const quotient = trimPolynomial(division.bottom.slice(0, -1).reverse());
    let html = `<p>Provem els divisors del terme independent. Com que ${formula(`${label}(${texNumber(ruffiniRoot, false)})=0`, false)}, ${formula(`${rootFactorTex(ruffiniRoot)}=0`, false)} és un factor i apliquem <strong>Ruffini</strong> amb ${formula(`x=${texNumber(ruffiniRoot, false)}`, false)}.</p>`;
    const top = division.descending.map((value) => `<td>${formula(texNumber(value, false), false)}</td>`).join("");
    const products = [`<td></td>`, ...division.products.map((value) => `<td>${formula(texNumber(value, false), false)}</td>`)].join("");
    const bottom = division.bottom.map((value) => `<td>${formula(texNumber(value, false), false)}</td>`).join("");
    html += `<div class="fa-table-scroll"><table class="fa-ruffini"><tbody><tr><th rowspan="3">${formula(texNumber(ruffiniRoot, false), false)}</th>${top}</tr><tr>${products}</tr><tr>${bottom}</tr></tbody></table></div>`;
    html += `<p>El residu és ${formula("0", false)} i el quocient és ${formula(`Q(x)=${polynomialToTex(quotient)}`, false)}. Per tant:</p>`;
    html += formula(`${label}(x)=${rootFactorTex(ruffiniRoot)}\\,(${polynomialToTex(quotient)})`);
    html += `<p>Ja tenim la solució ${formula(`x=${texNumber(ruffiniRoot)}`, false)}. Ara resolem ${formula(`${polynomialToTex(quotient)}=0`, false)}:</p>`;
    return html + polynomialEquationExplanation(quotient, "Q");
  }

  function makeBranch(node, interval, label) {
    const simplified = simplifyNode(node);
    const derivative = derivativeNode(simplified);
    const fn = safeCompile(simplified);
    const symbolicDerivativeFn = derivative ? safeCompile(derivative) : function () { return NaN; };
    const derivativeFn = function (x) {
      const symbolic = symbolicDerivativeFn(x);
      if (Number.isFinite(symbolic)) return symbolic;
      const h = 1e-5 * Math.max(1, Math.abs(x));
      const left = fn(x - h);
      const right = fn(x + h);
      return Number.isFinite(left) && Number.isFinite(right) ? (right - left) / (2 * h) : NaN;
    };
    return {
      node: simplified,
      tex: toTex(simplified),
      fn,
      derivative,
      derivativeFn,
      constraints: collectConstraints(simplified),
      interval,
      label: label || "",
    };
  }

  function allRealInterval() {
    return { lower: -Infinity, upper: Infinity, lowerClosed: false, upperClosed: false };
  }

  function branchContains(branch, x, atBoundary) {
    return intervalContains(branch.interval, x, atBoundary) && satisfiesConstraints(x, branch.constraints, atBoundary);
  }

  function evaluateModel(model, x) {
    for (const branch of model.branches) {
      if (branchContains(branch, x, true)) return branch.fn(x);
    }
    return NaN;
  }

  function derivativeAt(model, x) {
    for (const branch of model.branches) {
      if (branchContains(branch, x, false)) return branch.derivativeFn(x);
    }
    return NaN;
  }

  function makeStandardModel(value) {
    const parsed = parseExpression(value);
    if (containsNode(parsed.node, (n) => nodeFunctionName(n) === "abs")) {
      return makeAbsoluteModel(value);
    }
    const branch = makeBranch(parsed.node, allRealInterval());
    return {
      mode: "standard",
      type: classifyNode(parsed.node),
      sourceNode: parsed.node,
      sourceTex: toTex(parsed.node),
      branches: [branch],
      preliminary: "",
      joins: [],
    };
  }

  function makePiecewiseModel(config) {
    const count = config.count;
    const a = Number(config.break1);
    const b = Number(config.break2);
    if (!Number.isFinite(a) || (count === 3 && !Number.isFinite(b))) {
      throw new Error("Els punts de canvi han de ser nombres reals.");
    }
    if (count === 3 && !(a < b)) throw new Error("El segon punt de canvi ha de ser més gran que el primer.");
    const parsed = config.expressions.slice(0, count).map(parseExpression);
    const firstRight = config.owner1 === "right";
    const secondRight = config.owner2 === "right";
    const intervals = count === 2
      ? [
          { lower: -Infinity, upper: a, lowerClosed: false, upperClosed: !firstRight },
          { lower: a, upper: Infinity, lowerClosed: firstRight, upperClosed: false },
        ]
      : [
          { lower: -Infinity, upper: a, lowerClosed: false, upperClosed: !firstRight },
          { lower: a, upper: b, lowerClosed: firstRight, upperClosed: !secondRight },
          { lower: b, upper: Infinity, lowerClosed: secondRight, upperClosed: false },
        ];
    const branches = parsed.map((entry, index) => makeBranch(entry.node, intervals[index], `f_${index + 1}`));
    const joins = count === 2 ? [a] : [a, b];
    return {
      mode: "piecewise",
      type: `definida a trossos (${count} trams)`,
      sourceNode: null,
      sourceTex: piecewiseTex(branches),
      branches,
      preliminary: "",
      joins,
    };
  }

  function collectAbsoluteArguments(node) {
    const entries = [];
    const seen = new Set();
    node.traverse(function (child) {
      if (nodeFunctionName(child) !== "abs") return;
      const argument = child.args[0];
      const key = argument.toString();
      if (!seen.has(key)) {
        seen.add(key);
        entries.push({ key, node: argument, fn: safeCompile(argument), tex: toTex(argument) });
      }
    });
    return entries;
  }

  function replaceAbsoluteValues(node, argumentsList, sample) {
    const signs = new Map(argumentsList.map((entry) => [entry.key, entry.fn(sample) >= 0 ? 1 : -1]));
    return simplifyNode(node.transform(function (child) {
      if (nodeFunctionName(child) !== "abs") return child;
      const argument = child.args[0];
      const sign = signs.get(argument.toString()) || 1;
      return sign > 0 ? argument.cloneDeep() : math.parse(`-(${argument.toString()})`);
    }));
  }

  function piecewiseTex(branches) {
    const rows = branches.map((branch) => {
      const interval = branch.interval;
      let condition;
      if (interval.lower === -Infinity) condition = `x${interval.upperClosed ? "\\leq" : "<"}${texNumber(interval.upper, false)}`;
      else if (interval.upper === Infinity) condition = `x${interval.lowerClosed ? "\\geq" : ">"}${texNumber(interval.lower, false)}`;
      else {
        condition = `${texNumber(interval.lower, false)}${interval.lowerClosed ? "\\leq " : "<"}x${interval.upperClosed ? "\\leq" : "<"}${texNumber(interval.upper, false)}`;
      }
      return `${branch.tex},& ${condition}`;
    });
    return `\\begin{cases}${rows.join("\\\\[3pt]")}\\end{cases}`;
  }

  function makeAbsoluteModel(value) {
    const parsed = parseExpression(value);
    const absoluteArguments = collectAbsoluteArguments(parsed.node);
    if (!absoluteArguments.length) throw new Error("Aquesta expressió no conté cap valor absolut. Escriu-lo amb abs(...). ");
    const breakpoints = uniqueNumbers(absoluteArguments.flatMap((entry) => findRootsNumeric(entry.node)));
    if (breakpoints.length > MAX_ABS_BREAKS) {
      throw new Error("La funció genera massa canvis d'expressió per als casos treballats als apunts.");
    }
    const cuts = [-Infinity, ...breakpoints, Infinity];
    const branches = [];
    const signRows = [];
    for (let i = 0; i < cuts.length - 1; i += 1) {
      const lower = cuts[i];
      const upper = cuts[i + 1];
      const sample = chooseSample(lower, upper);
      const transformed = replaceAbsoluteValues(parsed.node, absoluteArguments, sample);
      const interval = {
        lower,
        upper,
        lowerClosed: i > 0,
        upperClosed: i === cuts.length - 2,
      };
      branches.push(makeBranch(transformed, interval, `f_${i + 1}`));
      signRows.push({ lower, upper, sample, signs: absoluteArguments.map((entry) => entry.fn(sample) >= 0 ? "+" : "-") });
    }
    const headers = signRows.map((row) => `<th>${formula(texInterval({ lower: row.lower, upper: row.upper, lowerClosed: false, upperClosed: false }), false)}</th>`).join("");
    const rows = absoluteArguments.map((entry, index) => {
      const cells = signRows.map((row) => `<td>${row.signs[index]}</td>`).join("");
      return `<tr><th>${formula(entry.tex, false)}</th>${cells}</tr>`;
    }).join("");
    const transformedRow = branches.map((branch) => `<td>${formula(branch.tex, false)}</td>`).join("");
    const preliminary = `
      <div class="fa-preliminary-card">
        <p class="fa-step-number">Pas previ obligatori</p>
        <h3>Transformació a funció definida a trossos</h3>
        <p>Igualem a zero ${absoluteArguments.length === 1 ? "l'expressió interior" : "les expressions interiors"} dels valors absoluts. Els punts de canvi són ${breakpoints.length ? breakpoints.map((x) => formula(`x=${texNumber(x)}`, false)).join(", ") : "cap"}.</p>
        <div class="fa-table-scroll"><table><thead><tr><th>Expressió</th>${headers}</tr></thead><tbody>${rows}<tr><th>Expressió de $f$</th>${transformedRow}</tr></tbody></table></div>
        <p>Substituïm cada valor absolut per l'expressió interior quan és positiva i pel seu oposat quan és negativa. Així obtenim:</p>
        ${formula(`f(x)=${piecewiseTex(branches)}`)}
      </div>`;
    return {
      mode: "absolute",
      type: "amb valor absolut",
      sourceNode: parsed.node,
      sourceTex: toTex(parsed.node),
      branches,
      preliminary,
      joins: breakpoints,
      absoluteArguments,
    };
  }

  function globalDomain(model) {
    return mergeIntervals(model.branches.flatMap(domainIntervalsForBranch));
  }

  function rootsForBranch(branch) {
    let rootNode = branch.node;
    const fraction = fractionParts(branch.node);
    if (fraction) rootNode = fraction.numerator;
    const functionName = nodeFunctionName(branch.node);
    if (["sqrt", "cbrt"].includes(functionName)) rootNode = branch.node.args[0];
    if (functionName === "log") rootNode = math.parse(`(${branch.node.args[0].toString()})-1`);
    return findRootsNumeric(rootNode).filter((x) => branchContains(branch, x, true) && Math.abs(branch.fn(x)) < 1e-4);
  }

  function modelRoots(model) {
    return uniqueNumbers(model.branches.flatMap(rootsForBranch));
  }

  function oneSidedValue(model, point, side) {
    const scales = [1e-2, 1e-3, 1e-4, 1e-5];
    const values = scales.map((scale) => evaluateModel(model, point + side * scale * Math.max(1, Math.abs(point))));
    const finite = values.filter(Number.isFinite);
    if (!finite.length) return { kind: "absent", value: NaN };
    const last = finite[finite.length - 1];
    if (Math.abs(last) > 1e5 || (finite.length >= 3 && Math.abs(last) > 20 * Math.abs(finite[finite.length - 3]) && Math.abs(last) > 100)) {
      return { kind: "infinite", value: Math.sign(last) * Infinity };
    }
    if (finite.length >= 4) {
      const differences = finite.slice(1).map((value, index) => value - finite[index]);
      const sameDirection = differences.every((difference) => Math.sign(difference) === Math.sign(differences[0]));
      const notConverging = Math.abs(differences[2]) > 0.6 * Math.abs(differences[1])
        && Math.abs(differences[1]) > 0.6 * Math.abs(differences[0]);
      if (sameDirection && notConverging && Math.abs(last) > 8) return { kind: "infinite", value: Math.sign(last) * Infinity };
    }
    const previous = finite.length > 1 ? finite[finite.length - 2] : last;
    const extrapolated = (10 * last - previous) / 9;
    return { kind: "finite", value: extrapolated };
  }

  function sameLimit(a, b) {
    if (a.kind !== b.kind) return false;
    if (a.kind === "absent") return false;
    if (a.kind === "infinite") return a.value === b.value;
    return Math.abs(a.value - b.value) < 2e-3 * Math.max(1, Math.abs(a.value), Math.abs(b.value));
  }

  function limitTex(result) {
    if (result.kind === "absent") return "\\text{no correspon}";
    return texNumber(result.value);
  }

  function analyzeSpecialPoints(model) {
    const constraintPoints = uniqueNumbers(model.branches.flatMap((branch) => constraintBoundaries(branch.constraints).filter((x) => intervalContains(branch.interval, x, true))));
    const allPoints = uniqueNumbers([...constraintPoints, ...model.joins]);
    return allPoints.map((x) => {
      const left = oneSidedValue(model, x, -1);
      const right = oneSidedValue(model, x, 1);
      const value = evaluateModel(model, x);
      const isJoin = model.joins.some((join) => Math.abs(join - x) < ROOT_EPS);
      let type = "extrem del domini";
      if (left.kind === "infinite" || right.kind === "infinite") type = "asímptota vertical";
      else if (left.kind === "finite" && right.kind === "finite") {
        if (sameLimit(left, right)) {
          type = Number.isFinite(value) && Math.abs(value - left.value) < 2e-3 ? (isJoin ? "unió contínua" : "punt regular") : "discontinuïtat evitable";
        } else type = "discontinuïtat de salt finit";
      }
      return { x, left, right, value, type, isJoin };
    });
  }

  function asymptoticPolynomial(coefficients, side) {
    const degree = coefficients.length - 1;
    if (degree === 0) return { kind: "finite", value: coefficients[0], method: "constant" };
    const leading = coefficients[degree];
    const sign = Math.sign(leading) * (side < 0 && degree % 2 ? -1 : 1);
    return { kind: "infinite", value: sign * Infinity, method: `term:${leading}:${degree}` };
  }

  function polynomialLongDivision(numerator, denominator) {
    let n = numerator.slice();
    const d = trimPolynomial(denominator);
    const quotient = Array(Math.max(1, n.length - d.length + 1)).fill(0);
    while (n.length >= d.length && n.some((value) => Math.abs(value) > EPS)) {
      const degreeDifference = n.length - d.length;
      const factor = n[n.length - 1] / d[d.length - 1];
      quotient[degreeDifference] = factor;
      for (let i = 0; i < d.length; i += 1) n[i + degreeDifference] -= factor * d[i];
      n = trimPolynomial(n);
    }
    return { quotient: trimPolynomial(quotient), remainder: trimPolynomial(n) };
  }

  function polynomialToTex(coefficients) {
    const terms = [];
    for (let degree = coefficients.length - 1; degree >= 0; degree -= 1) {
      const coefficient = coefficients[degree];
      if (Math.abs(coefficient) < EPS) continue;
      const sign = coefficient < 0 ? "-" : "+";
      const absolute = Math.abs(coefficient);
      const coefficientTex = degree > 0 && Math.abs(absolute - 1) < EPS ? "" : texNumber(absolute, false);
      const variable = degree === 0 ? "" : degree === 1 ? "x" : `x^{${degree}}`;
      terms.push({ sign, text: `${coefficientTex}${variable}` });
    }
    if (!terms.length) return "0";
    return terms.map((term, index) => `${index === 0 && term.sign === "+" ? "" : term.sign}${term.text}`).join("");
  }

  function infinityBehaviorForBranch(branch, side) {
    const polynomial = polynomialCoefficients(branch.node);
    if (polynomial) return asymptoticPolynomial(polynomial, side);
    const fraction = fractionParts(branch.node);
    if (fraction) {
      const numerator = polynomialCoefficients(fraction.numerator);
      const denominator = polynomialCoefficients(fraction.denominator);
      if (numerator && denominator) {
        const nDegree = numerator.length - 1;
        const dDegree = denominator.length - 1;
        if (nDegree < dDegree) return { kind: "finite", value: 0, method: "rational-order" };
        if (nDegree === dDegree) return { kind: "finite", value: numerator[nDegree] / denominator[dDegree], method: "rational-order" };
        const division = polynomialLongDivision(numerator, denominator);
        const leadingBehavior = asymptoticPolynomial(division.quotient, side);
        return { ...leadingBehavior, method: "division", quotient: division.quotient };
      }
    }
    const samples = [10, 30, 100, 300, 1000, 10000, 1000000].map((magnitude) => branch.fn(side * magnitude)).filter(Number.isFinite);
    if (!samples.length) return { kind: "absent", value: NaN, method: "numeric" };
    const last = samples[samples.length - 1];
    if (Math.abs(last) < 1e-5) return { kind: "finite", value: 0, method: "numeric" };
    if (Math.abs(last) > 1e7) return { kind: "infinite", value: Math.sign(last) * Infinity, method: "numeric" };
    if (samples.length >= 4) {
      const tail = samples.slice(-4);
      const variation = Math.max(...tail) - Math.min(...tail);
      if (variation < 1e-4 * Math.max(1, Math.abs(last))) return { kind: "finite", value: last, method: "numeric" };
      const monotone = tail.every((value, index) => index === 0 || value >= tail[index - 1]) || tail.every((value, index) => index === 0 || value <= tail[index - 1]);
      if (monotone && Math.abs(last) > Math.abs(tail[0]) + 1) return { kind: "infinite", value: Math.sign(last) * Infinity, method: "numeric" };
    }
    return { kind: "finite", value: last, method: "numeric-approx" };
  }

  function infinityBehavior(model, side) {
    const branch = side < 0 ? model.branches[0] : model.branches[model.branches.length - 1];
    if (side < 0 && branch.interval.lower !== -Infinity) return { kind: "absent", value: NaN };
    if (side > 0 && branch.interval.upper !== Infinity) return { kind: "absent", value: NaN };
    return infinityBehaviorForBranch(branch, side);
  }

  function criticalPointsForBranch(branch) {
    if (!branch.derivative) return [];
    const zeros = findRootsNumeric(branch.derivative);
    const singularities = derivativeSingularitiesForBranch(branch);
    return uniqueNumbers([...zeros, ...singularities])
      .filter((x) => branchContains(branch, x, true))
      .filter((x) => singularities.some((point) => Math.abs(point - x) < ROOT_EPS) || !Number.isFinite(branch.derivativeFn(x)) || Math.abs(branch.derivativeFn(x)) < 1e-4);
  }

  function derivativeSingularitiesForBranch(branch) {
    const singularities = [];
    branch.node.traverse(function (node) {
      if (nodeFunctionName(node) === "cbrt") singularities.push(...findRootsNumeric(node.args[0]));
    });
    return uniqueNumbers(singularities).filter((x) => branchContains(branch, x, true));
  }

  function allDerivativeSingularities(model) {
    return uniqueNumbers(model.branches.flatMap(derivativeSingularitiesForBranch));
  }

  function allCriticalPoints(model) {
    return uniqueNumbers(model.branches.flatMap(criticalPointsForBranch));
  }

  function finiteDomainBoundaries(model) {
    return uniqueNumbers(globalDomain(model).flatMap((interval) => [interval.lower, interval.upper]).filter(Number.isFinite));
  }

  function signSymbol(value) {
    if (!Number.isFinite(value)) return "\\text{no existeix}";
    if (Math.abs(value) < 1e-7) return "0";
    return value > 0 ? "+" : "-";
  }

  function behaviorWord(derivative) {
    if (!Number.isFinite(derivative)) return "fora del domini";
    if (derivative > 0) return "creix";
    if (derivative < 0) return "decreix";
    return "constant";
  }

  function intervalLabel(left, right) {
    return `(${texNumber(left, false)},${texNumber(right, false)})`;
  }

  function analyzeMonotonicity(model, specialPoints, criticalPoints, derivativeSingularities) {
    const cuts = uniqueNumbers([...finiteDomainBoundaries(model), ...model.joins, ...criticalPoints, ...specialPoints.map((point) => point.x)]);
    const extended = [-Infinity, ...cuts, Infinity];
    const intervalInfo = [];
    for (let i = 0; i < extended.length - 1; i += 1) {
      const left = extended[i];
      const right = extended[i + 1];
      const sample = chooseSample(left, right);
      const value = evaluateModel(model, sample);
      const derivative = derivativeAt(model, sample);
      intervalInfo.push({ left, right, sample, allowed: Number.isFinite(value) && Number.isFinite(derivative), derivative });
    }
    const columns = [];
    intervalInfo.forEach((interval, index) => {
      if (interval.allowed) columns.push({ kind: "interval", ...interval });
      if (index >= cuts.length) return;
      const x = cuts[index];
      const before = intervalInfo[index];
      const after = intervalInfo[index + 1];
      const special = specialPoints.find((point) => Math.abs(point.x - x) < ROOT_EPS);
      const isCritical = criticalPoints.some((point) => Math.abs(point - x) < ROOT_EPS);
      const isDerivativeSingularity = derivativeSingularities.some((point) => Math.abs(point - x) < ROOT_EPS);
      const isJoin = model.joins.some((point) => Math.abs(point - x) < ROOT_EPS);
      if (!special && !isCritical && !isJoin && !Number.isFinite(evaluateModel(model, x))) return;
      let classification = special && special.type !== "punt regular" ? special.type : "punt important";
      const leftSign = before && before.allowed ? Math.sign(before.derivative) : 0;
      const rightSign = after && after.allowed ? Math.sign(after.derivative) : 0;
      const y = evaluateModel(model, x);
      const isContinuousPoint = !special || special.type === "punt regular" || special.type === "unió contínua" || special.type === "extrem del domini";
      const isMaximum = (leftSign > 0 && rightSign <= 0) || (leftSign >= 0 && rightSign < 0);
      const isMinimum = (leftSign < 0 && rightSign >= 0) || (leftSign <= 0 && rightSign > 0);
      if (Number.isFinite(y) && isContinuousPoint && isMaximum) classification = `màxim ${formatPoint(x, y)}`;
      else if (Number.isFinite(y) && isContinuousPoint && isMinimum) classification = `mínim ${formatPoint(x, y)}`;
      else if (isJoin && (!special || special.type === "unió contínua")) classification = "punt d'unió sense extrem";
      else if (isDerivativeSingularity) classification = "punt no derivable sense extrem";
      else if (isCritical && (!special || special.type === "punt regular")) classification = "punt estacionari sense extrem";
      columns.push({ kind: "point", x, classification, special, derivative: isDerivativeSingularity ? NaN : derivativeAt(model, x) });
    });
    return { cuts, intervals: intervalInfo, columns };
  }

  function createAnalysis(model) {
    const domain = globalDomain(model);
    const roots = modelRoots(model);
    const specialPoints = analyzeSpecialPoints(model);
    const criticalPoints = allCriticalPoints(model);
    const derivativeSingularities = allDerivativeSingularities(model);
    const monotonicity = analyzeMonotonicity(model, specialPoints, criticalPoints, derivativeSingularities);
    const minusInfinity = infinityBehavior(model, -1);
    const plusInfinity = infinityBehavior(model, 1);
    return { model, domain, roots, specialPoints, criticalPoints, derivativeSingularities, monotonicity, minusInfinity, plusInfinity };
  }

  function domainConditionHtml(model) {
    const constraints = [];
    model.branches.forEach((branch) => {
      branch.constraints.forEach((constraint) => {
        const relation = constraint.kind === "positive" ? ">0" : constraint.kind === "nonnegative" ? "\\geq0" : "\\neq0";
        constraints.push(`<li>${constraint.source === "denominador" ? "El denominador" : constraint.source === "logaritme" ? "L'argument del logaritme" : "El radicand"} ha de complir ${formula(`${toTex(constraint.node)}${relation}`, false)}.</li>`);
      });
    });
    if (!constraints.length) {
      if (model.mode === "piecewise" || model.mode === "absolute") return "<p>Cada expressió és definida dins del seu tram; cal respectar-ne els intervals.</p>";
      return `<p>Una funció ${escapeHtml(model.type)} d'aquest tipus no imposa cap restricció addicional.</p>`;
    }
    return `<ul>${constraints.join("")}</ul>`;
  }

  function polynomialRationalParts(model) {
    if (model.mode !== "standard" || model.branches.length !== 1) return null;
    const fraction = fractionParts(model.branches[0].node);
    if (!fraction) return null;
    const numerator = polynomialCoefficients(fraction.numerator);
    const denominator = polynomialCoefficients(fraction.denominator);
    if (!numerator || !denominator) return null;
    return { fraction, numerator, denominator };
  }

  function excludedRealSetTex(values) {
    if (!values.length) return "\\mathbb{R}";
    return `\\mathbb{R}\\setminus\\{${values.map((value) => texNumber(value)).join(",")}\\}`;
  }

  function buildStep1(analysis) {
    const rational = polynomialRationalParts(analysis.model);
    if (!rational) return `${domainConditionHtml(analysis.model)}${formula(`D_f=${texDomain(analysis.domain)}`)}`;

    const excluded = polynomialRealRoots(rational.denominator);
    let html = `<p>En una funció racional, el denominador no pot ser zero. Per tant, busquem els valors que anul·len el denominador:</p>`;
    html += formula(`${toTex(rational.fraction.denominator)}=0`);
    html += polynomialEquationExplanation(rational.denominator, "Q");
    if (excluded.length) {
      html += `<p>Aquests valors no pertanyen al domini. Així, el domini és el conjunt de tots els nombres reals menys els que converteixen el denominador en zero:</p>`;
    } else {
      html += `<p>El denominador no s'anul·la per a cap nombre real; per tant, el domini és tot ${formula("\\mathbb{R}", false)}.</p>`;
    }
    return `${html}${formula(`D_f=${excludedRealSetTex(excluded)}`)}`;
  }

  function buildStep2(analysis) {
    const y = evaluateModel(analysis.model, 0);
    if (!Number.isFinite(y)) return `<p>Com que ${formula(`0\\notin D_f`, false)}, la funció no talla l'eix d'ordenades.</p>`;
    return `<p>Substituïm ${formula("x=0", false)} a l'expressió que correspon:</p>${formula(`f(0)=${texNumber(y)}`)}<p>El tall amb l'eix $Y$ és ${formula(formatPoint(0, y), false)}.</p>`;
  }

  function rootListHtml(roots) {
    if (!roots.length) return "<p>La funció no té cap zero real dins del domini.</p>";
    return `<p>Els talls amb l'eix $X$ són ${roots.map((x) => formula(`(${texNumber(x)},0)`, false)).join(", ")}.</p>`;
  }

  function nonconstantPolynomialFactor(node) {
    const coefficients = polynomialCoefficients(node);
    if (coefficients && coefficients.length > 1) return { node, coefficients };
    if (node && node.isOperatorNode && node.op === "*") {
      for (const argument of node.args) {
        const factor = nonconstantPolynomialFactor(argument);
        if (factor) return factor;
      }
    }
    return null;
  }

  function buildStep3(analysis) {
    const model = analysis.model;
    let html = `<p>Imposem ${formula("f(x)=0", false)} i conservem només les solucions que pertanyen al domini i al tram corresponent.</p>`;
    if (model.mode === "standard") {
      const node = model.branches[0].node;
      const fraction = fractionParts(node);
      const polynomial = polynomialCoefficients(fraction ? fraction.numerator : node);
      if (fraction) html += `<p>Una fracció és zero quan el numerador és zero i el denominador no ho és. Resolem ${formula(`${toTex(fraction.numerator)}=0`, false)}.</p>`;
      const functionName = nodeFunctionName(node);
      if (functionName === "exp" || isExponentialPower(node)) {
        html += "<p>Una exponencial és estrictament positiva. Per tant, no pot ser igual a zero.</p>";
      } else if (functionName === "log") {
        html += `<p>Utilitzem que ${formula("\\log_a(u)=0\\Longleftrightarrow u=1", false)} i resolem ${formula(`${toTex(node.args[0])}=1`, false)} dins del domini.</p>`;
        const argument = polynomialCoefficients(node.args[0]);
        if (argument) {
          const equation = argument.slice();
          equation[0] -= 1;
          html += polynomialEquationExplanation(equation, "P");
        }
      } else if (["sqrt", "cbrt"].includes(functionName)) {
        html += `<p>Una arrel és zero quan ho és el radicand. Resolem ${formula(`${toTex(node.args[0])}=0`, false)}.</p>`;
        const radicand = polynomialCoefficients(node.args[0]);
        if (radicand) html += polynomialEquationExplanation(radicand, "P");
      } else if (polynomial) {
        html += polynomialEquationExplanation(polynomial, fraction ? "P" : "f");
        if (fraction) {
          const algebraicRoots = polynomialRealRoots(polynomial);
          const discarded = algebraicRoots.filter((root) => !model.branches.some((branch) => branchContains(branch, root, false)));
          if (discarded.length) {
            html += `<p>Cal comprovar les solucions en el denominador. ${discarded.map((root) => `${formula(`x=${texNumber(root)}`, false)} s'ha de descartar perquè anul·la el denominador`).join("; ")}.</p>`;
          }
        }
      } else {
        const factor = nonconstantPolynomialFactor(node);
        if (factor && containsNode(node, (entry) => nodeFunctionName(entry) === "exp")) {
          html += `<p>El factor exponencial és sempre positiu. Per tant, els zeros provenen de ${formula(`${toTex(factor.node)}=0`, false)}.</p>`;
          html += polynomialEquationExplanation(factor.coefficients, "P");
        }
      }
    } else {
      html += `<p>Resolem l'equació de cada expressió i descartem qualsevol solució que no pertanyi al seu interval.</p>`;
    }
    html += rootListHtml(analysis.roots);
    return html;
  }

  function limitLine(point) {
    return `${formula(`\\lim_{x\\to ${texNumber(point.x, false)}^-}f(x)=${limitTex(point.left)}`, false)} i ${formula(`\\lim_{x\\to ${texNumber(point.x, false)}^+}f(x)=${limitTex(point.right)}`, false)}`;
  }

  function factorPowerTex(root, multiplicity) {
    if (multiplicity <= 0) return "";
    const factor = rootFactorTex(root);
    return multiplicity === 1 ? factor : `${factor}^{${multiplicity}}`;
  }

  function divideByRootTimes(coefficients, root, times) {
    let result = trimPolynomial(coefficients);
    for (let i = 0; i < times; i += 1) result = dividePolynomialByRoot(result, root) || result;
    return result;
  }

  function signedZeroTex(value) {
    return value < 0 ? "0^-" : "0^+";
  }

  function verticalLimitWork(numerator, denominator, point) {
    const x = point.x;
    const h = 1e-5 * Math.max(1, Math.abs(x));
    const numeratorAtPoint = evaluatePolynomial(numerator, x);
    const denominatorLeft = evaluatePolynomial(denominator, x - h);
    const denominatorRight = evaluatePolynomial(denominator, x + h);
    return `<p>Estudiem el signe del denominador a cada costat de ${formula(`x=${texNumber(x)}`, false)}:</p>`
      + formula(`\\lim_{x\\to ${texNumber(x, false)}^-}f(x)=\\frac{${texNumber(numeratorAtPoint, false)}}{${signedZeroTex(denominatorLeft)}}=${limitTex(point.left)}`)
      + formula(`\\lim_{x\\to ${texNumber(x, false)}^+}f(x)=\\frac{${texNumber(numeratorAtPoint, false)}}{${signedZeroTex(denominatorRight)}}=${limitTex(point.right)}`);
  }

  function rationalSpecialPointExplanation(rational, point) {
    const x = point.x;
    const numeratorValue = evaluatePolynomial(rational.numerator, x);
    const denominatorValue = evaluatePolynomial(rational.denominator, x);
    let html = `<h4>Candidat ${formula(`x=${texNumber(x)}`, false)}</h4>`;
    html += `<p>Substituïm el valor al numerador i al denominador:</p>`;
    html += formula(`P(${texNumber(x, false)})=${texNumber(numeratorValue, false)},\\qquad Q(${texNumber(x, false)})=${texNumber(denominatorValue, false)}`);

    if (Math.abs(numeratorValue) > 1e-6) {
      html += `<p>Obtenim una expressió del tipus ${formula(`\\frac{${texNumber(numeratorValue, false)}}{0}`, false)}. No és una indeterminació: cal calcular els dos límits laterals.</p>`;
      html += verticalLimitWork(rational.numerator, rational.denominator, point);
      return `${html}<p>Per tant, ${formula(`x=${texNumber(x)}`, false)} és una <strong>asímptota vertical</strong>.</p>`;
    }

    html += `<p>Obtenim la indeterminació ${formula("\\frac{0}{0}", false)}. Factoritzem numerador i denominador per trobar el factor comú.</p>`;
    const numeratorFactors = removeRootMultiplicity(rational.numerator, x);
    const denominatorFactors = removeRootMultiplicity(rational.denominator, x);
    const commonMultiplicity = Math.min(numeratorFactors.multiplicity, denominatorFactors.multiplicity);
    const numeratorCancelled = divideByRootTimes(rational.numerator, x, commonMultiplicity);
    const denominatorCancelled = divideByRootTimes(rational.denominator, x, commonMultiplicity);
    html += formula(`P(x)=${factorPowerTex(x, numeratorFactors.multiplicity)}\\,(${polynomialToTex(numeratorFactors.reduced)}),\\qquad Q(x)=${factorPowerTex(x, denominatorFactors.multiplicity)}\\,(${polynomialToTex(denominatorFactors.reduced)})`);
    html += `<p>Simplifiquem ${commonMultiplicity === 1 ? "el factor comú" : `els ${commonMultiplicity} factors comuns`} només per calcular el límit, mantenint la restricció ${formula(`x\\ne${texNumber(x)}`, false)}:</p>`;
    html += formula(`f(x)=\\frac{${polynomialToTex(numeratorCancelled)}}{${polynomialToTex(denominatorCancelled)}},\\qquad x\\ne${texNumber(x, false)}`);

    const reducedDenominatorValue = evaluatePolynomial(denominatorCancelled, x);
    if (Math.abs(reducedDenominatorValue) > 1e-7) {
      const limit = evaluatePolynomial(numeratorCancelled, x) / reducedDenominatorValue;
      html += formula(`\\lim_{x\\to ${texNumber(x, false)}}f(x)=\\frac{${texNumber(evaluatePolynomial(numeratorCancelled, x), false)}}{${texNumber(reducedDenominatorValue, false)}}=${texNumber(limit)}`);
      return `${html}<p>El límit és finit, però el punt no pertany al domini. Per tant, hi ha una <strong>discontinuïtat evitable</strong> (un forat) a ${formula(formatPoint(x, limit), false)}.</p>`;
    }

    html += `<p>Després de simplificar encara queda el denominador igual a zero. Per tant, estudiem els límits laterals de l'expressió reduïda.</p>`;
    html += verticalLimitWork(numeratorCancelled, denominatorCancelled, point);
    return `${html}<p>Per tant, ${formula(`x=${texNumber(x)}`, false)} és una <strong>asímptota vertical</strong>.</p>`;
  }

  function buildStep4(analysis) {
    const candidates = analysis.specialPoints.filter((point) => !point.isJoin || point.type === "asímptota vertical" || point.type === "discontinuïtat evitable");
    if (!candidates.length) return "<p>No hi ha punts exclosos del domini que calgui estudiar en aquest pas.</p>";
    const rational = polynomialRationalParts(analysis.model);
    if (rational) return `<p>Partim dels valors exclosos del domini i estudiem cada cas algebraicament.</p>${candidates.map((point) => rationalSpecialPointExplanation(rational, point)).join("")}`;
    const items = candidates.map((point) => `<li>En ${formula(`x=${texNumber(point.x)}`, false)}, ${limitLine(point)}. Per tant, és una <strong>${escapeHtml(point.type)}</strong>.</li>`).join("");
    return `<p>Calculem els límits laterals dels punts candidats:</p><ul>${items}</ul>`;
  }

  function buildStep5(analysis) {
    if (!analysis.model.joins.length) return "<p>La funció no està definida a trossos i no té altres punts d'unió.</p>";
    const items = analysis.model.joins.map((join) => {
      const point = analysis.specialPoints.find((entry) => Math.abs(entry.x - join) < ROOT_EPS);
      if (!point) return "";
      const value = Number.isFinite(point.value) ? formula(`f(${texNumber(join, false)})=${texNumber(point.value)}`, false) : formula(`f(${texNumber(join, false)})\\text{ no existeix}`, false);
      return `<li>En ${formula(`x=${texNumber(join, false)}`, false)}, ${limitLine(point)} i ${value}. Classificació: <strong>${escapeHtml(point.type)}</strong>.</li>`;
    }).join("");
    return `<p>En cada punt d'unió comparem els dos límits laterals i el valor de la funció.</p><ul>${items}</ul>`;
  }

  function rationalInfinityExplanation(result, side, numerator, denominator) {
    const destination = side < 0 ? "-\\infty" : "+\\infty";
    const numeratorDegree = numerator.length - 1;
    const denominatorDegree = denominator.length - 1;
    const numeratorLeading = numerator[numeratorDegree];
    const denominatorLeading = denominator[denominatorDegree];
    let html = `<p>Els graus són ${formula(`\\deg P=${numeratorDegree}`, false)} i ${formula(`\\deg Q=${denominatorDegree}`, false)}.</p>`;

    if (numeratorDegree < denominatorDegree) {
      html += `<p>Dividim numerador i denominador per ${formula(`x^{${denominatorDegree}}`, false)}.</p>`;
      html += formula(`\\lim_{x\\to${destination}}\\frac{P(x)}{Q(x)}=\\lim_{x\\to${destination}}\\frac{${texNumber(numeratorLeading, false)}x^{${numeratorDegree}}+\\cdots}{${texNumber(denominatorLeading, false)}x^{${denominatorDegree}}+\\cdots}=\\lim_{x\\to${destination}}\\frac{${texNumber(numeratorLeading, false)}}{${texNumber(denominatorLeading, false)}x^{${denominatorDegree - numeratorDegree}}}=0`);
    } else if (numeratorDegree === denominatorDegree) {
      html += `<p>Dividim numerador i denominador per ${formula(`x^{${denominatorDegree}}`, false)}.</p>`;
      html += formula(`\\lim_{x\\to${destination}}\\frac{P(x)}{Q(x)}=\\lim_{x\\to${destination}}\\frac{${texNumber(numeratorLeading, false)}+\\frac{\\cdots}{x}}{${texNumber(denominatorLeading, false)}+\\frac{\\cdots}{x}}=\\frac{${texNumber(numeratorLeading, false)}}{${texNumber(denominatorLeading, false)}}=${texNumber(numeratorLeading / denominatorLeading)}`);
    } else {
      const division = polynomialLongDivision(numerator, denominator);
      html += `<p>Com que el grau del numerador és més gran, fem la divisió de polinomis:</p>`;
      html += formula(`${polynomialToTex(numerator)}=(${polynomialToTex(denominator)})\\,(${polynomialToTex(division.quotient)})+(${polynomialToTex(division.remainder)})`);
      html += formula(`\\frac{P(x)}{Q(x)}=${polynomialToTex(division.quotient)}+\\frac{${polynomialToTex(division.remainder)}}{${polynomialToTex(denominator)}}`);
      html += `<p>La fracció del residu tendeix a zero, de manera que domina el quocient:</p>`;
      html += formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}(${polynomialToTex(division.quotient)})=${limitTex(result)}`);
      if (division.quotient.length === 2) html += `<p>L'asímptota obliqua és ${formula(`y=${polynomialToTex(division.quotient)}`, false)}.</p>`;
    }

    if (numeratorDegree <= denominatorDegree) {
      html += `<p>Per tant, ${formula(`\\lim_{x\\to${destination}}f(x)=${limitTex(result)}`, false)}.</p>`;
    }
    return html;
  }

  function infinityExplanation(result, side, branch) {
    const destination = side < 0 ? "-\\infty" : "+\\infty";
    const fraction = fractionParts(branch.node);
    if (fraction) {
      const numerator = polynomialCoefficients(fraction.numerator);
      const denominator = polynomialCoefficients(fraction.denominator);
      if (numerator && denominator) return rationalInfinityExplanation(result, side, numerator, denominator);
    }
    const polynomial = polynomialCoefficients(branch.node);
    if (polynomial && polynomial.length > 1) {
      const degree = polynomial.length - 1;
      const leadingTerm = `${texNumber(polynomial[degree], false)}x^{${degree}}`;
      return `<p>Quan ${formula(`x\\to${destination}`, false)}, el terme de grau més alt domina la resta:</p>${formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}${leadingTerm}=${limitTex(result)}`)}`;
    }
    let method = "";
    if (result.method && result.method.startsWith("term:")) {
      const [, coefficient, degree] = result.method.split(":");
      method = `<p>En aquest extrem domina el terme de grau més alt, ${formula(`${texNumber(Number(coefficient), false)}x^{${degree}}`, false)}.</p>`;
    } else if (result.method === "rational-order") {
      method = "<p>Comparem els graus i els coeficients principals del numerador i del denominador.</p>";
    } else if (result.method === "division" && result.quotient) {
      method = `<p>La divisió de polinomis dona com a part principal ${formula(`y=${polynomialToTex(result.quotient)}`, false)}.</p>`;
    } else if (result.method && result.method.startsWith("numeric")) {
      method = "<p>El comportament s'ha estimat amb valors progressivament més grans en valor absolut; el resultat és orientatiu.</p>";
    }
    const conclusion = result.kind === "absent"
      ? `<p>No hi ha cap branca del domini quan ${formula(`x\\to${destination}`, false)}.</p>`
      : `<p>${formula(`\\lim_{x\\to${destination}} f(x)=${limitTex(result)}`)}${result.kind === "finite" ? `La funció convergeix a ${formula(texNumber(result.value), false)}.` : "La funció té una branca infinita."}</p>`;
    return `${method}${conclusion}`;
  }

  function buildStep6(analysis) {
    const first = analysis.model.branches[0];
    const last = analysis.model.branches[analysis.model.branches.length - 1];
    return `<h4>Quan ${formula("x\\to-\\infty", false)}</h4>${infinityExplanation(analysis.minusInfinity, -1, first)}<h4>Quan ${formula("x\\to+\\infty", false)}</h4>${infinityExplanation(analysis.plusInfinity, 1, last)}`;
  }

  function polynomialDerivativeCalculationTex(coefficients) {
    const terms = [];
    for (let degree = coefficients.length - 1; degree >= 1; degree -= 1) {
      const coefficient = coefficients[degree];
      if (Math.abs(coefficient) < EPS) continue;
      const sign = coefficient < 0 ? "-" : "+";
      const absolute = Math.abs(coefficient);
      const coefficientTex = Math.abs(absolute - 1) < EPS ? "" : `${texNumber(absolute, false)}\\cdot`;
      const variable = degree === 1 ? "" : degree === 2 ? "x" : `x^{${degree - 1}}`;
      terms.push({ sign, text: `${coefficientTex}${degree}${variable}` });
    }
    if (!terms.length) return "0";
    return terms.map((term, index) => `${index === 0 && term.sign === "+" ? "" : term.sign}${term.text}`).join("");
  }

  function rationalDerivativeData(branch) {
    const fraction = fractionParts(branch.node);
    if (!fraction) return null;
    const numerator = polynomialCoefficients(fraction.numerator);
    const denominator = polynomialCoefficients(fraction.denominator);
    if (!numerator || !denominator) return null;
    const numeratorDerivative = derivativePolynomial(numerator);
    const denominatorDerivative = derivativePolynomial(denominator);
    const derivativeNumerator = trimPolynomial(addPolynomials(
      multiplyPolynomials(numeratorDerivative, denominator),
      multiplyPolynomials(numerator, denominatorDerivative),
      -1,
    ));
    return { fraction, numerator, denominator, numeratorDerivative, denominatorDerivative, derivativeNumerator };
  }

  function rationalDerivativeTex(data) {
    return `\\frac{${polynomialToTex(data.derivativeNumerator)}}{(${polynomialToTex(data.denominator)})^2}`;
  }

  function derivativeProcedureHtml(branch, index, branchCount) {
    const title = branchCount > 1 ? `Tram ${index + 1}` : "Càlcul de la derivada";
    const rationalData = rationalDerivativeData(branch);
    const finalDerivative = rationalData ? rationalDerivativeTex(rationalData) : branch.derivative ? toTex(branch.derivative) : "\\text{no disponible}";
    let html = `<h4>${title}</h4>`;
    const fraction = fractionParts(branch.node);
    if (fraction) {
      const u = fraction.numerator;
      const v = fraction.denominator;
      const du = derivativeNode(u);
      const dv = derivativeNode(v);
      if (du && dv) {
        html += `<p>Apliquem la regla del quocient. Prenem ${formula(`u=${toTex(u)}`, false)} i ${formula(`v=${toTex(v)}`, false)}:</p>`;
        html += formula(`u'=${rationalData ? polynomialToTex(rationalData.numeratorDerivative) : toTex(du)},\\qquad v'=${rationalData ? polynomialToTex(rationalData.denominatorDerivative) : toTex(dv)}`);
        html += formula(`f'(x)=\\frac{u'v-uv'}{v^2}`);
        html += formula(`f'(x)=\\frac{(${rationalData ? polynomialToTex(rationalData.numeratorDerivative) : toTex(du)})(${toTex(v)})-(${toTex(u)})(${rationalData ? polynomialToTex(rationalData.denominatorDerivative) : toTex(dv)})}{(${toTex(v)})^2}`);
        return `${html}<p>Desenvolupem i simplifiquem:</p>${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
      }
    }

    if (branch.node.isOperatorNode && branch.node.op === "*" && branch.node.args.length === 2) {
      const [u, v] = branch.node.args;
      const du = derivativeNode(u);
      const dv = derivativeNode(v);
      if (du && dv) {
        html += `<p>Apliquem la regla del producte. Prenem ${formula(`u=${toTex(u)}`, false)} i ${formula(`v=${toTex(v)}`, false)}:</p>`;
        html += formula(`u'=${toTex(du)},\\qquad v'=${toTex(dv)}`);
        html += formula(`f'(x)=u'v+uv'=(${toTex(du)})(${toTex(v)})+(${toTex(u)})(${toTex(dv)})`);
        return `${html}<p>Simplifiquem:</p>${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
      }
    }

    const functionName = nodeFunctionName(branch.node);
    if (functionName && branch.node.args && branch.node.args.length) {
      const inner = branch.node.args[0];
      const innerDerivative = derivativeNode(inner);
      if (innerDerivative) {
        const rules = {
          log: branch.node.args.length > 1 ? `(\\log_a u)'=\\frac{u'}{u\\ln a}` : `(\\ln u)'=\\frac{u'}{u}`,
          exp: `(e^u)'=e^u\\,u'`,
          sqrt: `(\\sqrt{u})'=\\frac{u'}{2\\sqrt{u}}`,
          cbrt: `(\\sqrt[3]{u})'=\\frac{u'}{3\\sqrt[3]{u^2}}`,
        };
        if (rules[functionName]) {
          html += `<p>Apliquem la regla de la cadena amb ${formula(`u=${toTex(inner)}`, false)} i ${formula(`u'=${toTex(innerDerivative)}`, false)}:</p>`;
          html += formula(rules[functionName]);
          return `${html}<p>Substituïm i simplifiquem:</p>${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
        }
      }
    }

    if (isExponentialPower(branch.node)) {
      const exponent = branch.node.args[1];
      const exponentDerivative = derivativeNode(exponent);
      if (exponentDerivative) {
        html += `<p>Apliquem ${formula(`(a^{u})'=a^u\\ln(a)\\,u'`, false)}, amb ${formula(`u=${toTex(exponent)}`, false)} i ${formula(`u'=${toTex(exponentDerivative)}`, false)}.</p>`;
        return `${html}${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
      }
    }

    const polynomial = polynomialCoefficients(branch.node);
    if (polynomial) {
      html += `<p>Derivem terme a terme amb ${formula(`(ax^n)'=anx^{n-1}`, false)} i ${formula(`c'=0`, false)}:</p>`;
      html += formula(`f'(x)=${polynomialDerivativeCalculationTex(polynomial)}=${finalDerivative}`);
      return `${html}${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
    }

    return `${html}<p>Apliquem les regles de derivació corresponents i simplifiquem el resultat:</p>${formula(`\\boxed{f'(x)=${finalDerivative}}`)}`;
  }

  function buildStep7(analysis) {
    const procedures = analysis.model.branches.map((branch, index) => derivativeProcedureHtml(branch, index, analysis.model.branches.length)).join("");
    const rows = analysis.model.branches.map((branch, index) => {
      const interval = domainIntervalsForBranch(branch).map(texInterval).join("\\cup");
      const rationalData = rationalDerivativeData(branch);
      const derivative = rationalData ? rationalDerivativeTex(rationalData) : branch.derivative ? toTex(branch.derivative) : "\\text{no disponible}";
      return `<tr><th>${analysis.model.branches.length > 1 ? `Tram ${index + 1}` : "Funció"}</th><td>${formula(`x\\in${interval}`, false)}</td><td>${formula(`f'(x)=${derivative}`, false)}</td></tr>`;
    }).join("");
    const methods = [];
    const seenMethods = new Set();
    analysis.model.branches.forEach((branch) => {
      if (!branch.derivative) return;
      const rationalData = rationalDerivativeData(branch);
      if (rationalData && rationalData.derivativeNumerator.length > 1) {
        const key = rationalData.derivativeNumerator.join(":");
        if (seenMethods.has(key)) return;
        seenMethods.add(key);
        methods.push(`<p>Una fracció és zero quan ho és el numerador i el denominador no ho és. Per trobar els punts estacionaris resolem ${formula(`${polynomialToTex(rationalData.derivativeNumerator)}=0`, false)}.</p>`);
        methods.push(polynomialEquationExplanation(rationalData.derivativeNumerator, "P'"));
        const discarded = polynomialRealRoots(rationalData.derivativeNumerator).filter((root) => !branchContains(branch, root, false));
        if (discarded.length) methods.push(`<p>Descartem ${discarded.map((root) => formula(`x=${texNumber(root)}`, false)).join(", ")} perquè no pertany al domini de la funció.</p>`);
        return;
      }
      const fraction = fractionParts(branch.derivative);
      const equationNode = fraction ? fraction.numerator : branch.derivative;
      const directCoefficients = polynomialCoefficients(equationNode);
      const factor = directCoefficients && directCoefficients.length > 1
        ? { node: equationNode, coefficients: directCoefficients }
        : containsNode(equationNode, (entry) => nodeFunctionName(entry) === "exp")
          ? nonconstantPolynomialFactor(equationNode)
          : null;
      if (!factor || seenMethods.has(factor.node.toString())) return;
      seenMethods.add(factor.node.toString());
      if (fraction) methods.push(`<p>Com que el denominador de la derivada no pot fer que una fracció sigui zero, resolem ${formula(`${toTex(equationNode)}=0`, false)}.</p>`);
      else if (containsNode(branch.derivative, (entry) => nodeFunctionName(entry) === "exp") && factor.node.toString() !== branch.derivative.toString()) {
        methods.push(`<p>El factor exponencial és sempre positiu; per tant, resolem ${formula(`${toTex(factor.node)}=0`, false)}.</p>`);
      }
      methods.push(polynomialEquationExplanation(factor.coefficients, "f'"));
    });
    const candidates = uniqueNumbers([...analysis.criticalPoints, ...analysis.model.joins, ...finiteDomainBoundaries(analysis.model)]);
    const candidateText = candidates.length
      ? candidates.map((x) => formula(`x=${texNumber(x)}`, false)).join(", ")
      : "cap";
    return `<p>Derivem cada expressió dins del seu interval, indicant la regla utilitzada i les substitucions:</p>${procedures}<h4>Derivades finals i intervals</h4><div class="fa-table-scroll"><table><thead><tr><th></th><th>Interval</th><th>Derivada</th></tr></thead><tbody>${rows}</tbody></table></div>${methods.join("")}<p>Resolem ${formula("f'(x)=0", false)} i afegim els punts on la derivada no existeix, els extrems del domini i els punts d'unió. Els candidats són: ${candidateText}.</p>`;
  }

  function buildStep8(analysis) {
    const columns = analysis.monotonicity.columns;
    if (!columns.length) return "<p>No s'ha pogut construir una taula de monotonia amb els casos admesos.</p>";
    const header = columns.map((column) => `<th>${column.kind === "interval" ? formula(intervalLabel(column.left, column.right), false) : formula(texNumber(column.x), false)}</th>`).join("");
    const tests = columns.map((column) => `<td>${column.kind === "interval" ? formula(`x=${texNumber(column.sample)}`, false) : "—"}</td>`).join("");
    const derivatives = columns.map((column) => `<td>${column.kind === "interval" ? formula(`f'(${texNumber(column.sample)})=${texNumber(column.derivative)}`, false) : Number.isFinite(column.derivative) ? formula(texNumber(column.derivative), false) : "no existeix"}</td>`).join("");
    const signs = columns.map((column) => `<td>${column.kind === "interval" ? formula(signSymbol(column.derivative), false) : Number.isFinite(column.derivative) ? formula(signSymbol(column.derivative), false) : "no existeix"}</td>`).join("");
    const behavior = columns.map((column) => `<td>${column.kind === "interval" ? behaviorWord(column.derivative) : escapeHtml(column.classification)}</td>`).join("");
    return `<p>Situem tots els punts importants en columnes pròpies i estudiem el signe de la derivada en cada interval.</p><div class="fa-table-scroll"><table><thead><tr><th>Valor de $x$</th>${header}</tr></thead><tbody><tr><th>Valor de prova</th>${tests}</tr><tr><th>Càlcul de la derivada</th>${derivatives}</tr><tr><th>Signe de $f'$</th>${signs}</tr><tr><th>Comportament de $f$</th>${behavior}</tr></tbody></table></div>`;
  }

  const STEP_BUILDERS = [
    ["Domini", buildStep1],
    ["Tall amb l'eix d'ordenades", buildStep2],
    ["Talls amb l'eix d'abscisses", buildStep3],
    ["Asímptotes verticals i discontinuïtats evitables", buildStep4],
    ["Altres discontinuïtats", buildStep5],
    ["Comportament a l'infinit", buildStep6],
    ["Candidats a extrem relatiu", buildStep7],
    ["Taula de monotonia", buildStep8],
  ];

  function renderSteps(analysis, container) {
    container.innerHTML = STEP_BUILDERS.map(([title, builder], index) => `
      <details class="fa-step" ${index < 3 ? "open" : ""}>
        <summary><span class="fa-step-number">Pas ${index + 1}</span> <span class="fa-step-title">${escapeHtml(title)}</span></summary>
        <div class="fa-step-body">${builder(analysis)}</div>
      </details>`).join("");
  }

  function quantile(sorted, proportion) {
    if (!sorted.length) return 0;
    const index = (sorted.length - 1) * proportion;
    const lower = Math.floor(index);
    const upper = Math.ceil(index);
    if (lower === upper) return sorted[lower];
    return sorted[lower] * (upper - index) + sorted[upper] * (index - lower);
  }

  function niceStep(span, targetLines) {
    const rough = span / targetLines;
    const power = Math.pow(10, Math.floor(Math.log10(rough)));
    const scaled = rough / power;
    const factor = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
    return factor * power;
  }

  function graphExtrema(analysis) {
    return analysis.monotonicity.columns
      .filter((column) => column.kind === "point" && /^(màxim|mínim)/.test(column.classification))
      .map((column) => ({ x: column.x, y: evaluateModel(analysis.model, column.x) }))
      .filter((point) => Number.isFinite(point.y));
  }

  function drawGraph(analysis, canvas, xMin, xMax) {
    if (!(xMin < xMax)) throw new Error("El valor mínim de x ha de ser menor que el màxim.");
    const wrapper = canvas.parentElement;
    const width = Math.max(480, Math.round(wrapper.clientWidth || 900));
    const height = Math.round(width * 9 / 16);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const context = canvas.getContext("2d");
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const samples = [];
    const sampleCount = Math.max(900, Math.round(width * 1.5));
    for (let i = 0; i <= sampleCount; i += 1) {
      const x = xMin + ((xMax - xMin) * i) / sampleCount;
      const y = evaluateModel(analysis.model, x);
      if (Number.isFinite(y) && Math.abs(y) < 1e8) samples.push({ x, y });
    }
    const yValues = samples.map((sample) => sample.y).sort((a, b) => a - b);
    let yMin = quantile(yValues, 0.03);
    let yMax = quantile(yValues, 0.97);
    const highlighted = [
      ...analysis.roots.map((x) => ({ x, y: 0 })),
      ...graphExtrema(analysis),
      { x: 0, y: evaluateModel(analysis.model, 0) },
    ].filter((point) => Number.isFinite(point.y) && point.x >= xMin && point.x <= xMax);
    highlighted.forEach((point) => {
      yMin = Math.min(yMin, point.y);
      yMax = Math.max(yMax, point.y);
    });
    if (!Number.isFinite(yMin) || !Number.isFinite(yMax)) {
      yMin = -5;
      yMax = 5;
    }
    if (Math.abs(yMax - yMin) < 1e-6) {
      yMin -= 1;
      yMax += 1;
    }
    const yPadding = (yMax - yMin) * 0.12;
    yMin -= yPadding;
    yMax += yPadding;
    if (yMin > 0 && yMin < 0.2 * yMax) yMin = 0;
    if (yMax < 0 && yMax > 0.2 * yMin) yMax = 0;

    const margin = { left: 58, right: 20, top: 20, bottom: 42 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const mapX = (x) => margin.left + ((x - xMin) / (xMax - xMin)) * plotWidth;
    const mapY = (y) => margin.top + ((yMax - y) / (yMax - yMin)) * plotHeight;

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.save();
    context.beginPath();
    context.rect(margin.left, margin.top, plotWidth, plotHeight);
    context.clip();

    const xStep = niceStep(xMax - xMin, 10);
    const yStep = niceStep(yMax - yMin, 8);
    context.lineWidth = 1;
    context.strokeStyle = "#e3e8ef";
    context.fillStyle = "#536273";
    context.font = "12px system-ui, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "top";
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + EPS; x += xStep) {
      const px = mapX(x);
      context.beginPath();
      context.moveTo(px, margin.top);
      context.lineTo(px, margin.top + plotHeight);
      context.stroke();
    }
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + EPS; y += yStep) {
      const py = mapY(y);
      context.beginPath();
      context.moveTo(margin.left, py);
      context.lineTo(margin.left + plotWidth, py);
      context.stroke();
    }

    analysis.specialPoints.filter((point) => point.type === "asímptota vertical" && point.x >= xMin && point.x <= xMax).forEach((point) => {
      const px = mapX(point.x);
      context.save();
      context.setLineDash([7, 5]);
      context.strokeStyle = "#c62828";
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(px, margin.top);
      context.lineTo(px, margin.top + plotHeight);
      context.stroke();
      context.restore();
    });

    analysis.model.branches.forEach((branch, branchIndex) => {
      context.strokeStyle = COLORS[branchIndex % COLORS.length];
      context.lineWidth = 2.6;
      context.lineJoin = "round";
      context.lineCap = "round";
      context.beginPath();
      let drawing = false;
      let previousPy = NaN;
      for (let i = 0; i <= sampleCount; i += 1) {
        const x = xMin + ((xMax - xMin) * i) / sampleCount;
        if (!branchContains(branch, x, false)) {
          drawing = false;
          continue;
        }
        const y = branch.fn(x);
        const px = mapX(x);
        const py = mapY(y);
        if (!Number.isFinite(y) || py < margin.top - plotHeight * 3 || py > margin.top + plotHeight * 4 || (drawing && Math.abs(py - previousPy) > plotHeight * 0.65)) {
          drawing = false;
          continue;
        }
        if (!drawing) {
          context.moveTo(px, py);
          drawing = true;
        } else context.lineTo(px, py);
        previousPy = py;
      }
      context.stroke();
    });

    context.strokeStyle = "#263238";
    context.fillStyle = "#263238";
    context.lineWidth = 1.4;
    const axisY = yMin <= 0 && yMax >= 0 ? mapY(0) : margin.top + plotHeight;
    const axisX = xMin <= 0 && xMax >= 0 ? mapX(0) : margin.left;
    context.beginPath();
    context.moveTo(margin.left, axisY);
    context.lineTo(margin.left + plotWidth, axisY);
    context.moveTo(axisX, margin.top);
    context.lineTo(axisX, margin.top + plotHeight);
    context.stroke();
    context.restore();

    context.fillStyle = "#455a64";
    context.font = "12px system-ui, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "top";
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + EPS; x += xStep) {
      if (Math.abs(x) < EPS) continue;
      context.fillText(String(Number(x.toPrecision(4))).replace(".", ","), mapX(x), margin.top + plotHeight + 7);
    }
    context.textAlign = "right";
    context.textBaseline = "middle";
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + EPS; y += yStep) {
      if (Math.abs(y) < EPS) continue;
      context.fillText(String(Number(y.toPrecision(4))).replace(".", ","), margin.left - 8, mapY(y));
    }
    context.font = "italic 14px Georgia, serif";
    context.textAlign = "right";
    context.fillText("x", margin.left + plotWidth, Math.min(height - 10, axisY + 17));
    context.textAlign = "left";
    context.fillText("y", Math.max(6, axisX + 8), margin.top + 10);

    function drawPoint(point, color, open) {
      if (point.x < xMin || point.x > xMax || point.y < yMin || point.y > yMax || !Number.isFinite(point.y)) return;
      context.beginPath();
      context.arc(mapX(point.x), mapY(point.y), 4.5, 0, Math.PI * 2);
      context.fillStyle = open ? "#ffffff" : color;
      context.strokeStyle = color;
      context.lineWidth = 2;
      context.fill();
      context.stroke();
    }

    analysis.roots.forEach((x) => drawPoint({ x, y: 0 }, "#1565c0", false));
    const yIntercept = evaluateModel(analysis.model, 0);
    if (Number.isFinite(yIntercept)) drawPoint({ x: 0, y: yIntercept }, "#1565c0", false);
    graphExtrema(analysis).forEach((point) => drawPoint(point, "#ef6c00", false));
    analysis.specialPoints.filter((point) => point.type === "discontinuïtat evitable").forEach((point) => {
      const finiteSide = point.left.kind === "finite" ? point.left.value : point.right.value;
      drawPoint({ x: point.x, y: finiteSide }, "#c62828", true);
    });
    if (analysis.model.mode === "piecewise") {
      analysis.model.joins.forEach((join) => {
        analysis.model.branches.forEach((branch, index) => {
          if (Math.abs(branch.interval.lower - join) < EPS || Math.abs(branch.interval.upper - join) < EPS) {
            const y = branch.fn(join);
            const closed = (Math.abs(branch.interval.lower - join) < EPS && branch.interval.lowerClosed) || (Math.abs(branch.interval.upper - join) < EPS && branch.interval.upperClosed);
            drawPoint({ x: join, y }, COLORS[index % COLORS.length], !closed);
          }
        });
      });
    }
    canvas.dataset.yMin = String(yMin);
    canvas.dataset.yMax = String(yMax);
  }

  function renderLegend(analysis, container) {
    const items = analysis.model.branches.map((branch, index) => `<span class="fa-legend-item" style="--legend-color:${COLORS[index % COLORS.length]}">${analysis.model.branches.length > 1 ? `Tram ${index + 1}: ` : ""}${formula(`y=${branch.tex}`, false)}</span>`);
    if (analysis.specialPoints.some((point) => point.type === "asímptota vertical")) items.push('<span class="fa-legend-item" style="--legend-color:#c62828">Asímptota vertical</span>');
    if (graphExtrema(analysis).length) items.push('<span class="fa-legend-item" style="--legend-color:#ef6c00">Extrem relatiu</span>');
    container.innerHTML = items.join("");
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

  function initTool(root) {
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";
    const tabs = Array.from(root.querySelectorAll(".fa-mode-tab"));
    const panels = Array.from(root.querySelectorAll(".fa-mode-panel"));
    const status = root.querySelector("#fa-status");
    const message = root.querySelector("#fa-message");
    const results = root.querySelector("#fa-results");
    const preliminary = root.querySelector("#fa-preliminary");
    const steps = root.querySelector("#fa-steps");
    const canvas = root.querySelector("#fa-graph");
    const legend = root.querySelector("#fa-legend");
    const xMinInput = root.querySelector("#fa-x-min");
    const xMaxInput = root.querySelector("#fa-x-max");
    let activeMode = "standard";
    let currentAnalysis = null;

    function setMode(mode) {
      activeMode = mode;
      tabs.forEach((tab) => {
        const active = tab.dataset.mode === mode;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => { panel.hidden = panel.id !== `fa-panel-${mode}`; });
      message.hidden = true;
    }

    tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));

    root.querySelectorAll("[data-example]").forEach((button) => button.addEventListener("click", () => {
      root.querySelector("#fa-expression").value = button.dataset.example;
    }));
    root.querySelectorAll("[data-absolute-example]").forEach((button) => button.addEventListener("click", () => {
      root.querySelector("#fa-absolute-expression").value = button.dataset.absoluteExample;
    }));

    const pieceExamples = {
      "exercise-a": { count: 2, expressions: ["-x^2+4*x+1", "x^2-2*x+3"], break1: 1, owner1: "right" },
      "exercise-c": { count: 2, expressions: ["3^x", "3/x"], break1: 1, owner1: "left" },
      three: { count: 3, expressions: ["-3*x-3", "x+5", "3*x+3"], break1: -2, break2: 1, owner1: "right", owner2: "right" },
    };

    function updatePieceCount(count) {
      const third = root.querySelector(".fa-third-piece");
      third.hidden = Number(count) !== 3;
    }

    root.querySelectorAll('input[name="fa-piece-count"]').forEach((radio) => radio.addEventListener("change", () => updatePieceCount(radio.value)));
    root.querySelectorAll("[data-piece-example]").forEach((button) => button.addEventListener("click", () => {
      const example = pieceExamples[button.dataset.pieceExample];
      root.querySelector(`input[name="fa-piece-count"][value="${example.count}"]`).checked = true;
      updatePieceCount(example.count);
      root.querySelector("#fa-piece-1").value = example.expressions[0];
      root.querySelector("#fa-piece-2").value = example.expressions[1];
      root.querySelector("#fa-piece-3").value = example.expressions[2] || "";
      root.querySelector("#fa-break-1").value = example.break1;
      root.querySelector("#fa-owner-1").value = example.owner1;
      if (example.count === 3) {
        root.querySelector("#fa-break-2").value = example.break2;
        root.querySelector("#fa-owner-2").value = example.owner2;
      }
    }));

    function readPiecewiseConfig() {
      const count = Number(root.querySelector('input[name="fa-piece-count"]:checked').value);
      return {
        count,
        expressions: [root.querySelector("#fa-piece-1").value, root.querySelector("#fa-piece-2").value, root.querySelector("#fa-piece-3").value],
        break1: root.querySelector("#fa-break-1").value,
        break2: root.querySelector("#fa-break-2").value,
        owner1: root.querySelector("#fa-owner-1").value,
        owner2: root.querySelector("#fa-owner-2").value,
      };
    }

    function redraw() {
      if (!currentAnalysis) return;
      drawGraph(currentAnalysis, canvas, Number(xMinInput.value), Number(xMaxInput.value));
    }

    function analyze() {
      status.textContent = "Calculant…";
      root.querySelector("#fa-analyze").disabled = true;
      message.hidden = true;
      results.hidden = true;
      window.setTimeout(function () {
        try {
          let model;
          if (activeMode === "standard") model = makeStandardModel(root.querySelector("#fa-expression").value);
          else if (activeMode === "piecewise") model = makePiecewiseModel(readPiecewiseConfig());
          else model = makeAbsoluteModel(root.querySelector("#fa-absolute-expression").value);
          currentAnalysis = createAnalysis(model);
          root.querySelector("#fa-result-title").innerHTML = `Estudi de ${formula(`f(x)=${model.sourceTex}`, false)}`;
          preliminary.innerHTML = model.preliminary;
          renderSteps(currentAnalysis, steps);
          root.querySelector("#fa-expand-all").textContent = "Desplega tots els passos";
          renderLegend(currentAnalysis, legend);
          results.hidden = false;
          renderMath(results);
          redraw();
          status.textContent = "Estudi completat.";
          results.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (error) {
          currentAnalysis = null;
          message.textContent = error && error.message ? error.message : "No s'ha pogut completar l'estudi.";
          message.hidden = false;
          status.textContent = "";
        } finally {
          root.querySelector("#fa-analyze").disabled = false;
        }
      }, 20);
    }

    root.querySelector("#fa-analyze").addEventListener("click", analyze);
    root.querySelector("#fa-redraw").addEventListener("click", function () {
      try {
        redraw();
        message.hidden = true;
      } catch (error) {
        message.textContent = error.message;
        message.hidden = false;
      }
    });
    root.querySelector("#fa-expand-all").addEventListener("click", function (event) {
      const details = Array.from(root.querySelectorAll(".fa-step"));
      const shouldOpen = details.some((detail) => !detail.open);
      details.forEach((detail) => { detail.open = shouldOpen; });
      event.currentTarget.textContent = shouldOpen ? "Plega tots els passos" : "Desplega tots els passos";
    });
    root.querySelector("#fa-reset").addEventListener("click", function () {
      root.querySelector("#fa-expression").value = "x^3-3*x^2-9*x+27";
      root.querySelector("#fa-absolute-expression").value = "abs(x^2+2*x-3)";
      root.querySelector('input[name="fa-piece-count"][value="2"]').checked = true;
      updatePieceCount(2);
      root.querySelector("[data-piece-example='exercise-a']").click();
      xMinInput.value = -10;
      xMaxInput.value = 10;
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
      currentAnalysis = null;
      setMode("standard");
    });
    root.querySelectorAll('input[type="text"]').forEach((input) => input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") analyze();
    }));
    let resizeTimer;
    window.addEventListener("resize", function () {
      if (!currentAnalysis) return;
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(redraw, 120);
    });
  }

  const publicApi = {
    normalizeExpression,
    parseExpression,
    polynomialCoefficients,
    polynomialRealRoots,
    makeStandardModel,
    makePiecewiseModel,
    makeAbsoluteModel,
    createAnalysis,
  };
  window.FunctionAnalyzer = publicApi;
  initTool(document.getElementById("function-analyzer"));
}());
