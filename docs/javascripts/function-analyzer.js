(function () {
  "use strict";

  const EPS = 1e-8;
  const ROOT_EPS = 1e-6;
  const MAX_ABS_BREAKS = 6;
  const ALLOWED_FUNCTIONS = new Set(["abs", "sqrt", "cbrt", "root", "exp", "log"]);
  const COLORS = ["#1565c0", "#7b1fa2", "#00897b"];
  const POINT_COLORS = {
    xIntercept: "#6d4c41",
    yIntercept: "#546e7a",
    bothIntercepts: "#3949ab",
    maximum: "#ef6c00",
    minimum: "#c2185b",
    removable: "#c62828",
  };

  function normalizeDecimalCommas(value) {
    const frames = [];
    let result = "";
    for (let index = 0; index < value.length; index += 1) {
      const character = value[index];
      if (character === "(") {
        const functionMatch = result.trimEnd().match(/([a-zA-Z]+)$/);
        frames.push(functionMatch ? functionMatch[1].toLowerCase() : "");
        result += character;
        continue;
      }
      if (character === ")") {
        frames.pop();
        result += character;
        continue;
      }
      if (character === ",") {
        const previous = value[index - 1] || "";
        const next = value[index + 1] || "";
        const currentFunction = frames[frames.length - 1] || "";
        const isFunctionSeparator = currentFunction === "log" || currentFunction === "root" || currentFunction === "nroot";
        result += /\d/.test(previous) && /\d/.test(next) && !isFunctionSeparator ? "." : ",";
        continue;
      }
      result += character;
    }
    return result;
  }

  function normalizeExpression(value) {
    return normalizeDecimalCommas(String(value || "").trim())
      .replace(/[−–—]/g, "-")
      .replace(/[·×]/g, "*")
      .replace(/\bnroot\s*\(/gi, "root(")
      .replace(/\bln\s*\(/gi, "log(")
      .replace(/\bln\s+([a-zA-Z0-9.]+)/gi, "log($1)")
      .replace(/\be\s*\^/g, "e^");
  }

  function unwrapParentheses(node) {
    let current = node;
    while (current && current.isParenthesisNode) current = current.content;
    return current;
  }

  function constantInteger(node) {
    const current = unwrapParentheses(node);
    if (!current) return null;
    if (current.isOperatorNode && current.isUnary() && ["+", "-"].includes(current.op)) {
      const value = constantInteger(current.args[0]);
      if (value === null) return null;
      return current.op === "-" ? -value : value;
    }
    if (!current.isConstantNode) return null;
    const value = Number(current.value);
    return Number.isInteger(value) ? value : null;
  }

  function constantRationalData(node) {
    const current = unwrapParentheses(node);
    if (!current) return null;
    const integer = constantInteger(current);
    if (integer !== null) return { numerator: integer, denominator: 1 };
    if (current.isOperatorNode && current.op === "/") {
      const numerator = constantInteger(current.args[0]);
      const denominator = constantInteger(current.args[1]);
      if (numerator === null || denominator === null || denominator === 0) return null;
      const sign = denominator < 0 ? -1 : 1;
      const divisor = greatestCommonInteger([numerator, denominator]);
      return {
        numerator: sign * numerator / divisor,
        denominator: Math.abs(denominator) / divisor,
      };
    }
    return null;
  }

  function rationalTex(rational) {
    if (rational.denominator === 1) return String(rational.numerator);
    const sign = rational.numerator < 0 ? "-" : "";
    return `${sign}\\frac{${Math.abs(rational.numerator)}}{${rational.denominator}}`;
  }

  function rootIndexFromPower(node) {
    if (!node || !node.isOperatorNode || node.op !== "^" || node.args.length !== 2) return null;
    const exponent = unwrapParentheses(node.args[1]);
    if (!exponent || !exponent.isOperatorNode || exponent.op !== "/") return null;
    const numerator = unwrapParentheses(exponent.args[0]);
    const denominator = constantInteger(exponent.args[1]);
    if (!numerator || !numerator.isConstantNode || Number(numerator.value) !== 1) return null;
    return denominator && denominator >= 2 ? denominator : null;
  }

  function normalizeRootPowers(node) {
    return node.transform(function (child) {
      const index = rootIndexFromPower(child);
      if (!index) return child;
      return new math.FunctionNode("root", [new math.ConstantNode(index), child.args[0]]);
    });
  }

  function radicalParts(node) {
    const name = nodeFunctionName(node);
    if (name === "sqrt") return { index: 2, radicand: node.args[0] };
    if (name === "cbrt") return { index: 3, radicand: node.args[0] };
    if (name !== "root" || !node.args || node.args.length !== 2) return null;
    const index = constantInteger(node.args[0]);
    return index && index >= 2 ? { index, radicand: node.args[1] } : null;
  }

  function realRoot(index, value) {
    const n = Number(index);
    const radicand = Number(value);
    if (!Number.isInteger(n) || n < 2 || !Number.isFinite(radicand)) return NaN;
    if (radicand < 0 && n % 2 === 0) return NaN;
    if (radicand < 0) return -Math.pow(-radicand, 1 / n);
    return Math.pow(radicand, 1 / n);
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
        if (name === "root") {
          const index = child.args.length === 2 ? constantInteger(child.args[0]) : null;
          if (!index || index < 2) {
            throw new Error("Escriu l'arrel com root(índex,radicand), amb un índex enter més gran o igual que 2.");
          }
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
      node = normalizeRootPowers(math.parse(normalized));
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
      if (containsNode(node, (child) => nodeFunctionName(child) === "root")) {
        return simplifyNode(derivativeWithRealRoots(node));
      }
      return simplifyNode(math.derivative(node, "x"));
    } catch (_error) {
      return null;
    }
  }

  function safeCompile(node) {
    const compiled = node.compile();
    return function (x) {
      try {
        const value = compiled.evaluate({ x, root: realRoot });
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

  function parsedOperation(expression) {
    return math.parse(expression);
  }

  function derivativeWithRealRoots(node) {
    const current = unwrapParentheses(node);
    if (current.isConstantNode) return new math.ConstantNode(0);
    if (current.isSymbolNode) return new math.ConstantNode(current.name === "x" ? 1 : 0);

    if (current.isOperatorNode) {
      const args = current.args;
      if (current.isUnary()) {
        const derivative = derivativeWithRealRoots(args[0]);
        return current.op === "-" ? parsedOperation(`-(${derivative.toString()})`) : derivative;
      }
      const left = args[0];
      const right = args[1];
      const leftDerivative = derivativeWithRealRoots(left);
      const rightDerivative = derivativeWithRealRoots(right);
      if (current.op === "+" || current.op === "-") {
        return parsedOperation(`(${leftDerivative.toString()})${current.op}(${rightDerivative.toString()})`);
      }
      if (current.op === "*") {
        return parsedOperation(`(${leftDerivative.toString()})*(${right.toString()})+(${left.toString()})*(${rightDerivative.toString()})`);
      }
      if (current.op === "/") {
        return parsedOperation(`(((${leftDerivative.toString()})*(${right.toString()}))-(( ${left.toString()} )*(${rightDerivative.toString()})))/((${right.toString()})^2)`);
      }
      if (current.op === "^") {
        const exponent = unwrapParentheses(right);
        if (exponent && exponent.isConstantNode) {
          return parsedOperation(`(${right.toString()})*(${left.toString()})^((${right.toString()})-1)*(${leftDerivative.toString()})`);
        }
        return parsedOperation(`(${current.toString()})*((${rightDerivative.toString()})*log(${left.toString()})+(${right.toString()})*(${leftDerivative.toString()})/(${left.toString()}))`);
      }
    }

    if (current.isFunctionNode) {
      const radical = radicalParts(current);
      if (radical && nodeFunctionName(current) === "root") {
        const innerDerivative = derivativeWithRealRoots(radical.radicand);
        return parsedOperation(`(${innerDerivative.toString()})/(${radical.index}*root(${radical.index},${radical.radicand.toString()})^${radical.index - 1})`);
      }
      const inner = current.args[0];
      const innerDerivative = derivativeWithRealRoots(inner);
      const name = nodeFunctionName(current);
      if (name === "sqrt") return parsedOperation(`(${innerDerivative.toString()})/(2*sqrt(${inner.toString()}))`);
      if (name === "cbrt") return parsedOperation(`(${innerDerivative.toString()})/(3*cbrt(${inner.toString()})^2)`);
      if (name === "exp") return parsedOperation(`exp(${inner.toString()})*(${innerDerivative.toString()})`);
      if (name === "log") {
        if (current.args.length === 1) return parsedOperation(`(${innerDerivative.toString()})/(${inner.toString()})`);
        return parsedOperation(`(${innerDerivative.toString()})/((${inner.toString()})*log(${current.args[1].toString()}))`);
      }
      if (name === "abs") return parsedOperation(`(${inner.toString()})/abs(${inner.toString()})*(${innerDerivative.toString()})`);
    }

    return math.derivative(current, "x");
  }

  function classifyNode(node) {
    if (containsNode(node, (n) => nodeFunctionName(n) === "abs")) return "amb valor absolut";
    const fraction = fractionParts(node);
    if (fraction && polynomialCoefficients(fraction.numerator) && polynomialCoefficients(fraction.denominator)) return "racional";
    if (polynomialCoefficients(node)) return "polinòmica";
    if (containsNode(node, (n) => Boolean(radicalParts(n)))) return "irracional";
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
      const radical = radicalParts(child);
      if (radical && radical.index % 2 === 0) constraints.push({ kind: "nonnegative", node: radical.radicand, source: "arrel d'índex parell" });
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
      const handler = {
        root: function (current, options) {
          return `\\sqrt[${current.args[0].toTex(options)}]{${current.args[1].toTex(options)}}`;
        },
        exp: function (current, options) {
          return `e^{${current.args[0].toTex(options)}}`;
        },
        log: function (current, options) {
          const argument = current.args[0].toTex(options);
          if (current.args.length === 1) return `\\ln\\left(${argument}\\right)`;
          return `\\log_{${current.args[1].toTex(options)}}\\left(${argument}\\right)`;
        },
        abs: function (current, options) {
          return `\\left|${current.args[0].toTex(options)}\\right|`;
        },
      };
      return node.toTex({ parenthesis: "keep", implicit: "show", handler });
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
    const radical = radicalParts(branch.node);
    if (radical) rootNode = radical.radicand;
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

  function unwrapParentheses(node) {
    let current = node;
    while (current && current.isParenthesisNode) current = current.content;
    return current;
  }

  function additiveTerms(node, sign) {
    const current = unwrapParentheses(node);
    const currentSign = sign === undefined ? 1 : sign;
    if (current && current.isOperatorNode && current.isUnary()) {
      return additiveTerms(current.args[0], current.op === "-" ? -currentSign : currentSign);
    }
    if (current && current.isOperatorNode && current.op === "+") {
      return [...additiveTerms(current.args[0], currentSign), ...additiveTerms(current.args[1], currentSign)];
    }
    if (current && current.isOperatorNode && current.op === "-") {
      return [...additiveTerms(current.args[0], currentSign), ...additiveTerms(current.args[1], -currentSign)];
    }
    return [{ node: current, sign: currentSign }];
  }

  function multiplicativeFactors(node, sign) {
    const current = unwrapParentheses(node);
    const currentSign = sign === undefined ? 1 : sign;
    if (current && current.isOperatorNode && current.isUnary()) {
      return multiplicativeFactors(current.args[0], current.op === "-" ? -currentSign : currentSign);
    }
    if (current && current.isOperatorNode && current.op === "*") {
      const left = multiplicativeFactors(current.args[0], currentSign);
      const right = multiplicativeFactors(current.args[1], 1);
      return { sign: left.sign * right.sign, factors: [...left.factors, ...right.factors] };
    }
    return { sign: currentSign, factors: [current] };
  }

  function exponentialScale(node) {
    const current = unwrapParentheses(node);
    let base;
    let exponent;
    if (nodeFunctionName(current) === "exp") {
      base = Math.E;
      exponent = current.args[0];
    } else if (isExponentialPower(current)) {
      const baseNode = current.args[0];
      base = baseNode.isSymbolNode && baseNode.name === "e" ? Math.E : Number(baseNode.value);
      exponent = current.args[1];
    } else return null;
    if (!Number.isFinite(base) || base <= 0) return null;
    const exponentPolynomial = polynomialCoefficients(exponent);
    if (!exponentPolynomial || exponentPolynomial.length > 2) return null;
    const constant = exponentPolynomial[0] || 0;
    const linear = exponentPolynomial[1] || 0;
    return {
      coefficient: Math.pow(base, constant),
      rate: linear * Math.log(base),
    };
  }

  function polynomialScale(node) {
    const current = unwrapParentheses(node);
    if (current && current.isOperatorNode && current.op === "^") {
      const base = unwrapParentheses(current.args[0]);
      const exponent = current.args[1];
      const value = exponent && exponent.isConstantNode ? Number(exponent.value) : NaN;
      if (base && base.isSymbolNode && base.name === "x" && Number.isInteger(value) && value >= 0) {
        return { coefficient: 1, degree: value };
      }
    }
    const polynomial = polynomialCoefficients(current);
    if (!polynomial) return null;
    const degree = polynomial.length - 1;
    return { coefficient: polynomial[degree], degree };
  }

  function asymptoticTermData(term, side) {
    const product = multiplicativeFactors(term.node);
    let coefficient = term.sign * product.sign;
    let rate = 0;
    let degree = 0;
    for (const factor of product.factors) {
      const exponential = exponentialScale(factor);
      if (exponential) {
        coefficient *= exponential.coefficient;
        rate += exponential.rate;
        continue;
      }
      const polynomial = polynomialScale(factor);
      if (!polynomial) return null;
      coefficient *= polynomial.coefficient;
      degree += polynomial.degree;
    }
    if (side < 0 && degree % 2) coefficient *= -1;
    return { ...term, coefficient, rate, degree };
  }

  function compareAsymptoticScale(first, second, side) {
    const rateDifference = side * (first.rate - second.rate);
    if (Math.abs(rateDifference) > EPS) return Math.sign(rateDifference);
    return Math.sign(first.degree - second.degree);
  }

  function termsToTex(terms) {
    return terms.map((term, index) => {
      const tex = toTex(term.node);
      if (index === 0) return term.sign < 0 ? `-${tex}` : tex;
      return `${term.sign < 0 ? "-" : "+"}${tex}`;
    }).join("");
  }

  function asymptoticExpressionData(node, side) {
    const data = additiveTerms(node).map((term) => asymptoticTermData(term, side));
    if (!data.length || data.some((term) => !term)) return null;
    const ordered = data.slice().sort((first, second) => compareAsymptoticScale(second, first, side));
    while (ordered.length) {
      const reference = ordered[0];
      const selected = ordered.filter((term) => compareAsymptoticScale(term, reference, side) === 0);
      const coefficient = selected.reduce((total, term) => total + term.coefficient, 0);
      if (Math.abs(coefficient) > EPS) {
        return {
          coefficient,
          rate: reference.rate,
          degree: reference.degree,
          tex: termsToTex(selected),
        };
      }
      ordered.splice(0, selected.length);
    }
    return null;
  }

  function simplifiedFractionInfinityData(fraction, side) {
    const numerator = asymptoticExpressionData(fraction.numerator, side);
    const denominator = asymptoticExpressionData(fraction.denominator, side);
    if (!numerator || !denominator) return null;
    const comparison = compareAsymptoticScale(numerator, denominator, side);
    if (comparison < 0) return { kind: "finite", value: 0, numerator, denominator, comparison };
    if (comparison > 0) {
      const sign = Math.sign(numerator.coefficient / denominator.coefficient);
      return { kind: "infinite", value: sign * Infinity, numerator, denominator, comparison };
    }
    return {
      kind: "finite",
      value: numerator.coefficient / denominator.coefficient,
      numerator,
      denominator,
      comparison,
    };
  }

  function simplifiedExpressionInfinityData(node, side) {
    const expression = asymptoticExpressionData(node, side);
    if (!expression) return null;
    const exponentialDirection = side * expression.rate;
    if (exponentialDirection > EPS) {
      return { kind: "infinite", value: Math.sign(expression.coefficient) * Infinity, expression };
    }
    if (exponentialDirection < -EPS) return { kind: "finite", value: 0, expression };
    if (expression.degree > 0) {
      return { kind: "infinite", value: Math.sign(expression.coefficient) * Infinity, expression };
    }
    return { kind: "finite", value: expression.coefficient, expression };
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
      const simplifiedFraction = simplifiedFractionInfinityData(fraction, side);
      if (simplifiedFraction) return { ...simplifiedFraction, method: "simplified-fraction" };
    }
    const simplifiedExpression = simplifiedExpressionInfinityData(branch.node, side);
    if (simplifiedExpression) return { ...simplifiedExpression, method: "simplified-expression" };
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
      const radical = radicalParts(node);
      if (radical && radical.index % 2 === 1) singularities.push(...findRootsNumeric(radical.radicand));
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
    const branch = analysis.model.branches.find((candidate) => branchContains(candidate, 0, true));
    const expression = analysis.model.sourceNode || branch.node;
    const substituted = expression.transform(function (node) {
      return node.isSymbolNode && node.name === "x" ? new math.ConstantNode(0) : node;
    });
    const simplified = simplifyNode(substituted);
    let lastExpression = toTex(substituted);
    const calculation = [`f(0)=${lastExpression}`];
    if (simplified.toString() !== substituted.toString()) {
      lastExpression = toTex(simplified);
      calculation.push(lastExpression);
    }
    const result = texNumber(y);
    const simplifiedPolynomial = polynomialCoefficients(simplified);
    const exactConstant = simplifiedPolynomial && simplifiedPolynomial.length === 1 && Math.abs(simplifiedPolynomial[0] - y) < EPS;
    if (!exactConstant && lastExpression !== result) calculation.push(result);
    return `<p>Per calcular ${formula("f(0)", false)}, canviem cada ${formula("x", false)} de l'expressió per ${formula("0", false)}:</p>${formula(calculation.join("="))}<p>El tall amb l'eix $Y$ és ${formula(formatPoint(0, y), false)}.</p>`;
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
      const radical = radicalParts(node);
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
      } else if (radical) {
        html += `<p>Una arrel és zero quan ho és el radicand. Resolem ${formula(`${toTex(radical.radicand)}=0`, false)}.</p>`;
        const radicand = polynomialCoefficients(radical.radicand);
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

  function rationalInfinityExplanation(result, side, numerator, denominator, fraction) {
    const destination = side < 0 ? "-\\infty" : "+\\infty";
    const numeratorDegree = numerator.length - 1;
    const denominatorDegree = denominator.length - 1;
    const numeratorLeading = numerator[numeratorDegree];
    const denominatorLeading = denominator[denominatorDegree];
    const numeratorTerm = polynomialToTex([...Array(numeratorDegree).fill(0), numeratorLeading]);
    const denominatorTerm = polynomialToTex([...Array(denominatorDegree).fill(0), denominatorLeading]);
    const original = `\\frac{${toTex(fraction.numerator)}}{${toTex(fraction.denominator)}}`;
    let steps = `\\lim_{x\\to${destination}}${original}=\\lim_{x\\to${destination}}\\frac{${numeratorTerm}}{${denominatorTerm}}`;
    let html = "";

    if (numeratorDegree < denominatorDegree) {
      const difference = denominatorDegree - numeratorDegree;
      const remainingDenominator = polynomialToTex([...Array(difference).fill(0), denominatorLeading]);
      steps += `=\\lim_{x\\to${destination}}\\frac{${texNumber(numeratorLeading, false)}}{${remainingDenominator}}=0`;
      html += formula(steps);
    } else if (numeratorDegree === denominatorDegree) {
      steps += `=\\frac{${texNumber(numeratorLeading, false)}}{${texNumber(denominatorLeading, false)}}=${texNumber(numeratorLeading / denominatorLeading)}`;
      html += formula(steps);
    } else {
      const difference = numeratorDegree - denominatorDegree;
      const quotientLeading = numeratorLeading / denominatorLeading;
      const simplifiedTerm = polynomialToTex([...Array(difference).fill(0), quotientLeading]);
      steps += `=\\lim_{x\\to${destination}}${simplifiedTerm}=${limitTex(result)}`;
      html += formula(steps);
      if (difference === 1) {
        const division = polynomialLongDivision(numerator, denominator);
        html += `<p>Per trobar l'asímptota obliqua, fem la divisió de polinomis:</p>`;
        html += formula(`${polynomialToTex(numerator)}=(${polynomialToTex(denominator)})\\,(${polynomialToTex(division.quotient)})+(${polynomialToTex(division.remainder)})`);
        html += formula(`${original}=${polynomialToTex(division.quotient)}+\\frac{${polynomialToTex(division.remainder)}}{${polynomialToTex(denominator)}}`);
        html += `<p>L'asímptota obliqua és ${formula(`y=${polynomialToTex(division.quotient)}`, false)}.</p>`;
      }
    }
    return html;
  }

  function simplifiedFractionInfinityExplanation(result, side, fraction) {
    const destination = side < 0 ? "-\\infty" : "+\\infty";
    const data = simplifiedFractionInfinityData(fraction, side);
    if (!data) return "";
    const original = `\\frac{${toTex(fraction.numerator)}}{${toTex(fraction.denominator)}}`;
    let steps = `\\lim_{x\\to${destination}}${original}=\\lim_{x\\to${destination}}\\frac{${data.numerator.tex}}{${data.denominator.tex}}`;
    if (data.comparison === 0) {
      steps += `=\\frac{${texNumber(data.numerator.coefficient, false)}}{${texNumber(data.denominator.coefficient, false)}}=${limitTex(result)}`;
    } else steps += `=${limitTex(result)}`;
    return formula(steps);
  }

  function infinityExplanation(result, side, branch) {
    const destination = side < 0 ? "-\\infty" : "+\\infty";
    const fraction = fractionParts(branch.node);
    if (fraction) {
      const numerator = polynomialCoefficients(fraction.numerator);
      const denominator = polynomialCoefficients(fraction.denominator);
      if (numerator && denominator) return rationalInfinityExplanation(result, side, numerator, denominator, fraction);
      const simplifiedFraction = simplifiedFractionInfinityExplanation(result, side, fraction);
      if (simplifiedFraction) return simplifiedFraction;
    }
    const polynomial = polynomialCoefficients(branch.node);
    if (polynomial && polynomial.length > 1) {
      const degree = polynomial.length - 1;
      const leadingTerm = `${texNumber(polynomial[degree], false)}x^{${degree}}`;
      return formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}(${toTex(branch.node)})=\\lim_{x\\to${destination}}${leadingTerm}=${limitTex(result)}`);
    }
    if (result.method === "simplified-expression" && result.expression) {
      return formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}(${toTex(branch.node)})=\\lim_{x\\to${destination}}${result.expression.tex}=${limitTex(result)}`);
    }
    let method = "";
    if (result.method && result.method.startsWith("term:")) {
      const [, coefficient, degree] = result.method.split(":");
      method = formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}${texNumber(Number(coefficient), false)}x^{${degree}}=${limitTex(result)}`);
    } else if (result.method === "division" && result.quotient) {
      method = formula(`\\lim_{x\\to${destination}}f(x)=\\lim_{x\\to${destination}}(${polynomialToTex(result.quotient)})=${limitTex(result)}`);
    } else if (result.method && result.method.startsWith("numeric")) {
      method = "<p>El resultat s'ha estimat amb valors progressivament més grans en valor absolut i és orientatiu.</p>";
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

  function dependsOnX(node) {
    return containsNode(node, (child) => child.isSymbolNode && child.name === "x");
  }

  function isDirectPolynomialSyntax(node) {
    const current = unwrapParentheses(node);
    if (!current) return false;
    if (current.isConstantNode) return true;
    if (current.isSymbolNode) return current.name === "x" || current.name === "e" || current.name === "pi";
    if (!current.isOperatorNode) return false;
    if (current.isUnary()) return isDirectPolynomialSyntax(current.args[0]);
    if (current.op === "+" || current.op === "-") {
      return current.args.every(isDirectPolynomialSyntax);
    }
    if (current.op === "*") {
      return current.args.every(isDirectPolynomialSyntax) && !current.args.every(dependsOnX);
    }
    if (current.op === "/") {
      return isDirectPolynomialSyntax(current.args[0]) && !dependsOnX(current.args[1]);
    }
    if (current.op === "^") {
      const exponent = constantInteger(current.args[1]);
      const base = unwrapParentheses(current.args[0]);
      return Boolean(base && base.isSymbolNode && base.name === "x" && exponent !== null && exponent >= 0);
    }
    return false;
  }

  function derivativePrimeTex(node) {
    return `\\left(${toTex(node)}\\right)'`;
  }

  function derivativeFactorTex(node) {
    const current = unwrapParentheses(node);
    if (current && current.isOperatorNode && ["+", "-"].includes(current.op)) {
      return `\\left(${toTex(current)}\\right)`;
    }
    return toTex(current || node);
  }

  function derivativeProductTex(parts) {
    return parts.filter(Boolean).join("\\,");
  }

  function isVariableX(node) {
    const current = unwrapParentheses(node);
    return Boolean(current && current.isSymbolNode && current.name === "x");
  }

  function derivativeExpansion(node, depth) {
    const current = unwrapParentheses(node);
    if (depth <= 0) return { tex: derivativePrimeTex(current), hasPrime: true };
    if (current.isConstantNode || (current.isSymbolNode && current.name !== "x")) {
      return { tex: "0", hasPrime: false };
    }
    if (current.isSymbolNode && current.name === "x") return { tex: "1", hasPrime: false };

    const polynomial = polynomialCoefficients(current);
    if (polynomial && isDirectPolynomialSyntax(current)) {
      return { tex: polynomialToTex(derivativePolynomial(polynomial)), hasPrime: false };
    }

    if (current.isOperatorNode) {
      if (current.isUnary()) {
        const child = derivativeExpansion(current.args[0], depth - 1);
        return { tex: current.op === "-" ? `-${child.tex}` : child.tex, hasPrime: child.hasPrime };
      }

      const [left, right] = current.args;
      if (current.op === "+" || current.op === "-") {
        const leftDerivative = derivativeExpansion(left, depth - 1);
        const rightDerivative = derivativeExpansion(right, depth - 1);
        return {
          tex: `${leftDerivative.tex}${current.op}${rightDerivative.tex}`,
          hasPrime: leftDerivative.hasPrime || rightDerivative.hasPrime,
        };
      }

      if (current.op === "*") {
        const leftDepends = dependsOnX(left);
        const rightDepends = dependsOnX(right);
        if (!leftDepends || !rightDepends) {
          const constant = leftDepends ? right : left;
          const variable = leftDepends ? left : right;
          const variableDerivative = derivativeExpansion(variable, depth - 1);
          return {
            tex: derivativeProductTex([derivativeFactorTex(constant), variableDerivative.tex]),
            hasPrime: variableDerivative.hasPrime,
          };
        }
        const leftDerivative = derivativeExpansion(left, depth - 1);
        const rightDerivative = derivativeExpansion(right, depth - 1);
        return {
          tex: `${derivativeProductTex([leftDerivative.tex, derivativeFactorTex(right)])}+${derivativeProductTex([derivativeFactorTex(left), rightDerivative.tex])}`,
          hasPrime: leftDerivative.hasPrime || rightDerivative.hasPrime,
        };
      }

      if (current.op === "/") {
        if (!dependsOnX(right)) {
          const numeratorDerivative = derivativeExpansion(left, depth - 1);
          return {
            tex: `\\frac{${numeratorDerivative.tex}}{${toTex(right)}}`,
            hasPrime: numeratorDerivative.hasPrime,
          };
        }
        const numeratorDerivative = derivativeExpansion(left, depth - 1);
        const denominatorDerivative = derivativeExpansion(right, depth - 1);
        return {
          tex: `\\frac{${derivativeProductTex([numeratorDerivative.tex, derivativeFactorTex(right)])}-${derivativeProductTex([derivativeFactorTex(left), denominatorDerivative.tex])}}{\\left(${toTex(right)}\\right)^2}`,
          hasPrime: numeratorDerivative.hasPrime || denominatorDerivative.hasPrime,
        };
      }

      if (current.op === "^") {
        if (isExponentialPower(current)) {
          const exponent = current.args[1];
          const exponentDerivative = isVariableX(exponent)
            ? { tex: "", hasPrime: false }
            : derivativeExpansion(exponent, depth - 1);
          const base = unwrapParentheses(current.args[0]);
          const exponential = base.isSymbolNode && base.name === "e"
            ? `e^{${toTex(exponent)}}`
            : derivativeProductTex([`\\ln\\left(${toTex(base)}\\right)`, `${toTex(base)}^{${toTex(exponent)}}`]);
          return {
            tex: derivativeProductTex([exponential, exponentDerivative.tex]),
            hasPrime: exponentDerivative.hasPrime,
          };
        }
        const exponent = constantInteger(right);
        if (exponent !== null) {
          if (exponent === 0) return { tex: "0", hasPrime: false };
          const baseDerivative = isVariableX(left)
            ? { tex: "", hasPrime: false }
            : derivativeExpansion(left, depth - 1);
          const power = exponent === 1 ? "" : `\\left(${toTex(left)}\\right)^{${exponent - 1}}`;
          return {
            tex: derivativeProductTex([texNumber(exponent, false), power, baseDerivative.tex]),
            hasPrime: baseDerivative.hasPrime,
          };
        }
        const rationalExponent = constantRationalData(right);
        if (rationalExponent) {
          if (rationalExponent.numerator === 0) return { tex: "0", hasPrime: false };
          const baseDerivative = isVariableX(left)
            ? { tex: "", hasPrime: false }
            : derivativeExpansion(left, depth - 1);
          const differenceNumerator = rationalExponent.numerator - rationalExponent.denominator;
          const divisor = greatestCommonInteger([differenceNumerator, rationalExponent.denominator]);
          const reducedExponent = {
            numerator: differenceNumerator / divisor,
            denominator: rationalExponent.denominator / divisor,
          };
          const power = reducedExponent.numerator === 0
            ? ""
            : `\\left(${toTex(left)}\\right)^{${rationalTex(reducedExponent)}}`;
          return {
            tex: derivativeProductTex([rationalTex(rationalExponent), power, baseDerivative.tex]),
            hasPrime: baseDerivative.hasPrime,
          };
        }
      }
    }

    const functionName = nodeFunctionName(current);
    if (functionName && current.args && current.args.length) {
      const radical = radicalParts(current);
      const inner = radical ? radical.radicand : current.args[0];
      const innerDerivative = isVariableX(inner)
        ? { tex: "", hasPrime: false }
        : derivativeExpansion(inner, depth - 1);
      if (radical) {
        const radicalTex = toTex(current);
        const denominator = radical.index === 2
          ? `2\\sqrt{${toTex(inner)}}`
          : `${radical.index}\\left(${radicalTex}\\right)^{${radical.index - 1}}`;
        return {
          tex: derivativeProductTex([`\\frac{1}{${denominator}}`, innerDerivative.tex]),
          hasPrime: innerDerivative.hasPrime,
        };
      }
      if (functionName === "log") {
        const coefficient = current.args.length > 1
          ? `\\frac{1}{\\ln\\left(${toTex(current.args[1])}\\right)}\\,`
          : "";
        return {
          tex: derivativeProductTex([`${coefficient}\\frac{1}{${derivativeFactorTex(inner)}}`, innerDerivative.tex]),
          hasPrime: innerDerivative.hasPrime,
        };
      }
      if (functionName === "exp") {
        return {
          tex: derivativeProductTex([`e^{${toTex(inner)}}`, innerDerivative.tex]),
          hasPrime: innerDerivative.hasPrime,
        };
      }
      if (functionName === "abs") {
        return {
          tex: derivativeProductTex([`\\frac{${toTex(inner)}}{\\left|${toTex(inner)}\\right|}`, innerDerivative.tex]),
          hasPrime: innerDerivative.hasPrime,
        };
      }
    }

    const derivative = derivativeNode(current);
    return { tex: derivative ? toTex(derivative) : derivativePrimeTex(current), hasPrime: !derivative };
  }

  function derivativeCalculationSteps(node) {
    const steps = [];
    for (let depth = 1; depth <= 10; depth += 1) {
      const expansion = derivativeExpansion(node, depth);
      if (!steps.includes(expansion.tex)) steps.push(expansion.tex);
      if (!expansion.hasPrime) break;
    }
    return steps;
  }

  function derivativeExpansionStages(node) {
    const stages = [];
    for (let depth = 1; depth <= 10; depth += 1) {
      const expansion = derivativeExpansion(node, depth);
      if (!stages.some((stage) => stage.tex === expansion.tex)) stages.push({ ...expansion, depth });
      if (!expansion.hasPrime) break;
    }
    return stages;
  }

  function derivativeStudyStep(title, explanation, tex, rule) {
    return { title, explanation, tex, rule: rule || "Simplificació algebraica" };
  }

  function uniqueRuleLabels(labels) {
    return labels.filter((label, index) => labels.indexOf(label) === index);
  }

  function immediateDerivativeRules(node) {
    const current = unwrapParentheses(node);
    const polynomial = polynomialCoefficients(current);
    if (polynomial && isDirectPolynomialSyntax(current)) return ["Derivació terme a terme"];
    if (current.isConstantNode || (current.isSymbolNode && current.name !== "x")) return ["Derivada d’una constant"];
    if (isVariableX(current)) return ["Derivada de x"];
    if (current.isOperatorNode) {
      if (current.isUnary()) return ["Multiplicació per una constant"];
      const [left, right] = current.args;
      if (current.op === "+" || current.op === "-") return ["Regla de la suma o la resta"];
      if (current.op === "*") {
        return [current.args.every(dependsOnX) ? "Regla del producte" : "Multiplicació per una constant"];
      }
      if (current.op === "/") return [dependsOnX(right) ? "Regla de la divisió" : "Multiplicació per una constant"];
      if (current.op === "^") {
        if (isExponentialPower(current)) {
          return uniqueRuleLabels(["Derivada d’una funció exponencial", ...(!isVariableX(right) ? ["Regla de la cadena"] : [])]);
        }
        return uniqueRuleLabels(["Derivada d’una potència", ...(!isVariableX(left) ? ["Regla de la cadena"] : [])]);
      }
    }
    const name = nodeFunctionName(current);
    if (name && current.args && current.args.length) {
      const radical = radicalParts(current);
      const inner = radical ? radical.radicand : current.args[0];
      const mainRule = radical
        ? "Derivada d’una arrel"
        : name === "log"
          ? "Derivada d’un logaritme"
          : name === "exp"
            ? "Derivada de l’exponencial neperiana"
            : "Regla de derivació corresponent";
      return uniqueRuleLabels([mainRule, ...(!isVariableX(inner) ? ["Regla de la cadena"] : [])]);
    }
    return ["Regla de derivació corresponent"];
  }

  function derivativeRulesAtDepth(node, depth) {
    const current = unwrapParentheses(node);
    const polynomial = polynomialCoefficients(current);
    if (polynomial && isDirectPolynomialSyntax(current)) return depth === 1 ? immediateDerivativeRules(current) : [];
    if (depth <= 1) return immediateDerivativeRules(current);
    if (current.isOperatorNode) {
      if (current.isUnary()) return derivativeRulesAtDepth(current.args[0], depth - 1);
      const [left, right] = current.args;
      if (current.op === "+" || current.op === "-") {
        return uniqueRuleLabels([
          ...derivativeRulesAtDepth(left, depth - 1),
          ...derivativeRulesAtDepth(right, depth - 1),
        ]);
      }
      if (current.op === "*") {
        return uniqueRuleLabels(current.args
          .filter(dependsOnX)
          .flatMap((argument) => derivativeRulesAtDepth(argument, depth - 1)));
      }
      if (current.op === "/") {
        return uniqueRuleLabels([
          ...derivativeRulesAtDepth(left, depth - 1),
          ...(dependsOnX(right) ? derivativeRulesAtDepth(right, depth - 1) : []),
        ]);
      }
      if (current.op === "^") {
        const inner = isExponentialPower(current) ? right : left;
        return isVariableX(inner) ? [] : derivativeRulesAtDepth(inner, depth - 1);
      }
    }
    const name = nodeFunctionName(current);
    if (name && current.args && current.args.length) {
      const radical = radicalParts(current);
      const inner = radical ? radical.radicand : current.args[0];
      return isVariableX(inner) ? [] : derivativeRulesAtDepth(inner, depth - 1);
    }
    return [];
  }

  function compositionOuterData(node) {
    const current = unwrapParentheses(node);
    if (!current) return null;
    if (current.isOperatorNode && current.op === "^") {
      if (isExponentialPower(current)) {
        const base = unwrapParentheses(current.args[0]);
        const baseTex = toTex(base);
        const outerTex = base.isSymbolNode && base.name === "e" ? "e^x" : `${baseTex}^x`;
        const derivativeTex = base.isSymbolNode && base.name === "e"
          ? "e^x"
          : `\\ln\\left(${baseTex}\\right)${baseTex}^x`;
        return { inner: current.args[1], outerTex, derivativeTex };
      }
      const exponent = constantInteger(current.args[1]);
      if (exponent !== null) {
        const power = exponent === 1 ? "" : `x^{${exponent - 1}}`;
        return { inner: current.args[0], outerTex: `x^{${exponent}}`, derivativeTex: `${exponent}${power}` };
      }
      const rationalExponent = constantRationalData(current.args[1]);
      if (rationalExponent) {
        const differenceNumerator = rationalExponent.numerator - rationalExponent.denominator;
        const divisor = greatestCommonInteger([differenceNumerator, rationalExponent.denominator]);
        const reducedExponent = {
          numerator: differenceNumerator / divisor,
          denominator: rationalExponent.denominator / divisor,
        };
        const power = reducedExponent.numerator === 0 ? "" : `x^{${rationalTex(reducedExponent)}}`;
        return {
          inner: current.args[0],
          outerTex: `x^{${rationalTex(rationalExponent)}}`,
          derivativeTex: `${rationalTex(rationalExponent)}${power}`,
        };
      }
    }
    const name = nodeFunctionName(current);
    if (!name || !current.args || !current.args.length) return null;
    const radical = radicalParts(current);
    if (radical) {
      const rootTex = radical.index === 2 ? "\\sqrt{x}" : `\\sqrt[${radical.index}]{x}`;
      const denominator = radical.index === 2
        ? "2\\sqrt{x}"
        : `${radical.index}\\left(\\sqrt[${radical.index}]{x}\\right)^{${radical.index - 1}}`;
      return { inner: radical.radicand, outerTex: rootTex, derivativeTex: `\\frac{1}{${denominator}}` };
    }
    if (name === "log") {
      if (current.args.length > 1) {
        const baseTex = toTex(current.args[1]);
        return {
          inner: current.args[0],
          outerTex: `\\log_{${baseTex}}(x)`,
          derivativeTex: `\\frac{1}{\\ln\\left(${baseTex}\\right)}\\cdot\\frac{1}{x}`,
        };
      }
      return { inner: current.args[0], outerTex: "\\ln(x)", derivativeTex: "\\frac{1}{x}" };
    }
    if (name === "exp") return { inner: current.args[0], outerTex: "e^x", derivativeTex: "e^x" };
    return null;
  }

  function derivativeMethodStudyStep(node) {
    const current = unwrapParentheses(node);
    const polynomial = polynomialCoefficients(current);
    if (polynomial && isDirectPolynomialSyntax(current)) {
      return derivativeStudyStep(
        "Recordem les derivades elementals",
        "Derivem terme a terme. Multipliquem pel grau, restem una unitat a l’exponent i recordem que la derivada d’una constant és zero.",
        "(ax^n)'=a\\cdot n x^{n-1},\\qquad c'=0",
        "Derivada d’una potència i derivada d’una constant",
      );
    }

    if (current.isOperatorNode && !current.isUnary()) {
      const [left, right] = current.args;
      if (current.op === "+" || current.op === "-") {
        const sign = current.op === "+" ? "+" : "-";
        return derivativeStudyStep(
          "Identifiquem una suma o una resta",
          "Derivem cadascun dels termes per separat i conservem el signe que els uneix.",
          `\\begin{aligned}u(x)&=${toTex(left)},&v(x)&=${toTex(right)}\\\\(u${sign}v)'&=u'${sign}v'\\end{aligned}`,
          "Regla de la suma o la resta",
        );
      }
      if (current.op === "*") {
        const leftDepends = dependsOnX(left);
        const rightDepends = dependsOnX(right);
        if (!leftDepends || !rightDepends) {
          const constant = leftDepends ? right : left;
          const variable = leftDepends ? left : right;
          return derivativeStudyStep(
            "Identifiquem la multiplicació per una constant",
            "La constant es conserva i derivem només la funció que depèn de x.",
            `\\begin{aligned}k&=${toTex(constant)},&u(x)&=${toTex(variable)}\\\\(ku)'&=ku'\\end{aligned}`,
            "Multiplicació per una constant",
          );
        }
        return derivativeStudyStep(
          "Identifiquem els dos factors",
          "Com que tots dos factors depenen de x, apliquem la regla del producte.",
          `\\begin{aligned}u(x)&=${toTex(left)},&v(x)&=${toTex(right)}\\\\(uv)'&=u'v+uv'\\end{aligned}`,
          "Regla del producte",
        );
      }
      if (current.op === "/") {
        if (!dependsOnX(right)) {
          return derivativeStudyStep(
            "Identifiquem una divisió per una constant",
            "El denominador constant es conserva i derivem el numerador.",
            `\\left(\\frac{u}{k}\\right)'=\\frac{u'}{k}`,
            "Multiplicació per una constant",
          );
        }
        return derivativeStudyStep(
          "Identifiquem el numerador i el denominador",
          "Apliquem la regla de la divisió. El quadrat del denominador afecta tota la fracció.",
          `\\begin{aligned}u(x)&=${toTex(left)},&v(x)&=${toTex(right)}\\\\\\left(\\frac{u}{v}\\right)'&=\\frac{u'v-uv'}{v^2}\\end{aligned}`,
          "Regla de la divisió",
        );
      }
    }

    const composition = compositionOuterData(current);
    if (composition) {
      if (isVariableX(composition.inner)) {
        return derivativeStudyStep(
          "Recordem la derivada elemental",
          "La funció interior és x i la seva derivada és 1.",
          `f(x)=${composition.outerTex}\\quad\\longrightarrow\\quad f'(x)=${composition.derivativeTex}`,
          immediateDerivativeRules(current).join(" + "),
        );
      }
      return derivativeStudyStep(
        "Identifiquem la funció exterior i la interior",
        "Tal com als apunts, escrivim la composició com h(x)=f(g(x)). Derivem la funció exterior sense canviar la interior i multipliquem per la derivada de la funció interior.",
        `\\begin{aligned}h(x)&=f(g(x)),&h'(x)&=f'(g(x))g'(x)\\\\f(x)&=${composition.outerTex},&f'(x)&=${composition.derivativeTex}\\\\g(x)&=${toTex(composition.inner)}\\end{aligned}`,
        "Regla de la cadena",
      );
    }

    return derivativeStudyStep(
      "Identifiquem les regles necessàries",
      "Derivem primer l’operació exterior i mantenim indicades les derivades interiors fins que les calculem.",
      `f(x)=${toTex(current)}`,
      immediateDerivativeRules(current).join(" + "),
    );
  }

  function greatestCommonInteger(values) {
    const integers = values
      .filter((value) => Math.abs(value) > EPS)
      .map((value) => Math.abs(value));
    if (!integers.length || integers.some((value) => !Number.isInteger(value))) return 1;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    return integers.reduce((result, value) => gcd(result, value));
  }

  function reducedPolynomialNumerator(node, denominatorFactor) {
    const coefficients = polynomialCoefficients(node);
    if (!coefficients || !Number.isInteger(denominatorFactor)) {
      return { numeratorTex: toTex(node), denominatorFactor, reduced: false };
    }
    const divisor = greatestCommonInteger([...coefficients, denominatorFactor]);
    if (divisor <= 1) return { numeratorTex: polynomialToTex(coefficients), denominatorFactor, reduced: false };
    return {
      numeratorTex: polynomialToTex(coefficients.map((coefficient) => coefficient / divisor)),
      denominatorFactor: denominatorFactor / divisor,
      reduced: true,
    };
  }

  function groupedFactorTex(node, hasLeadingFactor) {
    const current = unwrapParentheses(node);
    const tex = toTex(current);
    if (hasLeadingFactor && current.isOperatorNode && ["+", "-"].includes(current.op)) {
      return `\\left(${tex}\\right)`;
    }
    return tex;
  }

  function cleanDerivativeTex(node) {
    const polynomial = polynomialCoefficients(node);
    return polynomial ? polynomialToTex(polynomial) : toTex(node);
  }

  function denominatorProductTex(numericFactor, factors) {
    const parts = [];
    if (numericFactor !== 1) parts.push(String(numericFactor));
    parts.push(...factors.filter(Boolean));
    return parts.join("\\,");
  }

  function simpleExponentialData(node) {
    const current = unwrapParentheses(node);
    if (current.isOperatorNode && current.op === "^" && isExponentialPower(current) && isVariableX(current.args[1])) {
      const base = unwrapParentheses(current.args[0]);
      const baseTex = toTex(base);
      const isNatural = base.isSymbolNode && base.name === "e";
      return {
        tex: toTex(current),
        squareTex: isNatural ? "e^{2x}" : `${baseTex}^{2x}`,
        derivativeConstantTex: isNatural ? "" : `\\ln\\left(${baseTex}\\right)`,
      };
    }
    if (nodeFunctionName(current) === "exp" && isVariableX(current.args[0])) {
      return { tex: toTex(current), squareTex: "e^{2x}", derivativeConstantTex: "" };
    }
    return null;
  }

  function logRadicalSimplification(node) {
    const current = unwrapParentheses(node);
    if (nodeFunctionName(current) !== "log") return null;
    const radicalNode = unwrapParentheses(current.args[0]);
    const radical = radicalParts(radicalNode);
    if (!radical) return null;
    const innerDerivative = derivativeNode(radical.radicand);
    if (!innerDerivative) return null;
    const index = radical.index;
    const rootTex = toTex(radicalNode);
    const baseLogTex = current.args.length > 1 ? `\\ln\\left(${toTex(current.args[1])}\\right)` : "";
    const derivativeFraction = fractionParts(innerDerivative);
    const derivativeNumerator = derivativeFraction ? derivativeFraction.numerator : innerDerivative;
    const derivativeDenominatorTex = derivativeFraction
      ? groupedFactorTex(derivativeFraction.denominator, true)
      : "";
    const numeratorTex = cleanDerivativeTex(derivativeNumerator);
    const rootDenominator = denominatorProductTex(index, [baseLogTex, derivativeDenominatorTex, `\\left(${rootTex}\\right)^{${index}}`]);
    const radicandTex = groupedFactorTex(radical.radicand, true);
    const exactDenominator = denominatorProductTex(index, [baseLogTex, derivativeDenominatorTex, radicandTex]);
    const reduced = reducedPolynomialNumerator(derivativeNumerator, index);
    const reducedDenominator = denominatorProductTex(reduced.denominatorFactor, [baseLogTex, derivativeDenominatorTex, radicandTex]);
    const steps = [
      derivativeStudyStep(
        "Multipliquem les fraccions",
        "Agrupem el numerador i sumem els exponents de la mateixa arrel en el denominador.",
        `f'(x)=\\frac{${numeratorTex}}{${rootDenominator}}`,
      ),
      derivativeStudyStep(
        "Eliminem la potència de l’arrel",
        `Utilitzem la identitat exacta \\(\\left(\\sqrt[n]{u}\\right)^n=u\\).`,
        `f'(x)=\\frac{${numeratorTex}}{${exactDenominator}}`,
      ),
    ];
    if (reduced.reduced) {
      steps.push(derivativeStudyStep(
        "Simplifiquem el factor numèric comú",
        "Dividim el numerador i el factor numèric del denominador pel mateix nombre.",
        `f'(x)=\\frac{${reduced.numeratorTex}}{${reducedDenominator}}`,
      ));
    }
    return { steps, finalTex: reduced.reduced ? `\\frac{${reduced.numeratorTex}}{${reducedDenominator}}` : `\\frac{${numeratorTex}}{${exactDenominator}}` };
  }

  function directRadicalSimplification(node) {
    const current = unwrapParentheses(node);
    const radical = radicalParts(current);
    if (!radical) return null;
    const innerDerivative = derivativeNode(radical.radicand);
    if (!innerDerivative) return null;
    const index = radical.index;
    const rootTex = toTex(current);
    const powerTex = index === 2 ? rootTex : `\\left(${rootTex}\\right)^{${index - 1}}`;
    const derivativeFraction = fractionParts(innerDerivative);
    const derivativeNumerator = derivativeFraction ? derivativeFraction.numerator : innerDerivative;
    const derivativeDenominatorTex = derivativeFraction
      ? groupedFactorTex(derivativeFraction.denominator, true)
      : "";
    const numeratorTex = cleanDerivativeTex(derivativeNumerator);
    const firstDenominator = denominatorProductTex(index, [derivativeDenominatorTex, powerTex]);
    const reduced = reducedPolynomialNumerator(derivativeNumerator, index);
    const reducedDenominator = denominatorProductTex(reduced.denominatorFactor, [derivativeDenominatorTex, powerTex]);
    const steps = [derivativeStudyStep(
      "Multipliquem els factors",
      derivativeFraction
        ? "Multipliquem les fraccions: agrupem els numeradors i els denominadors en una sola fracció."
        : "Col·loquem la derivada de la funció interior al numerador de la fracció.",
      `f'(x)=\\frac{${numeratorTex}}{${firstDenominator}}`,
    )];
    if (reduced.reduced) {
      steps.push(derivativeStudyStep(
        "Simplifiquem el factor numèric comú",
        "Dividim el numerador i el factor numèric del denominador pel mateix nombre.",
        `f'(x)=\\frac{${reduced.numeratorTex}}{${reducedDenominator}}`,
      ));
    }
    return { steps, finalTex: reduced.reduced ? `\\frac{${reduced.numeratorTex}}{${reducedDenominator}}` : `\\frac{${numeratorTex}}{${firstDenominator}}` };
  }

  function logarithmSimplification(node) {
    const current = unwrapParentheses(node);
    if (nodeFunctionName(current) !== "log" || isVariableX(current.args[0])) return null;
    if (radicalParts(unwrapParentheses(current.args[0]))) return null;
    const inner = current.args[0];
    const innerDerivative = derivativeNode(inner);
    if (!innerDerivative) return null;
    const baseLogTex = current.args.length > 1 ? `\\ln\\left(${toTex(current.args[1])}\\right)` : "";
    const derivativeFraction = fractionParts(innerDerivative);
    if (!derivativeFraction && !isDirectPolynomialSyntax(inner)) return null;
    const derivativeNumerator = derivativeFraction ? derivativeFraction.numerator : innerDerivative;
    const derivativeDenominatorTex = derivativeFraction
      ? groupedFactorTex(derivativeFraction.denominator, true)
      : "";
    const denominator = denominatorProductTex(1, [baseLogTex, derivativeDenominatorTex, groupedFactorTex(inner, true)]);
    const finalTex = `\\frac{${cleanDerivativeTex(derivativeNumerator)}}{${denominator}}`;
    return {
      steps: [derivativeStudyStep(
        "Multipliquem les fraccions",
        derivativeFraction
          ? "Agrupem els numeradors i els denominadors en una sola fracció; l’argument del logaritme també queda al denominador."
          : "La derivada de la funció interior queda al numerador i l’argument del logaritme queda al denominador.",
        `f'(x)=${finalTex}`,
      )],
      finalTex,
    };
  }

  function exponentialProductSimplification(node) {
    const current = unwrapParentheses(node);
    if (!current.isOperatorNode || current.op !== "*") return null;
    const leftExponential = simpleExponentialData(current.args[0]);
    const rightExponential = simpleExponentialData(current.args[1]);
    const exponential = leftExponential || rightExponential;
    if (!exponential) return null;
    const other = leftExponential ? current.args[1] : current.args[0];
    const otherDerivative = derivativeNode(other);
    if (!otherDerivative) return null;
    const firstTerm = derivativeProductTex([cleanDerivativeTex(otherDerivative), exponential.tex]);
    const secondTerm = derivativeProductTex([exponential.derivativeConstantTex, derivativeFactorTex(other), exponential.tex]);
    const finalTex = `${firstTerm}+${secondTerm}`;
    return {
      steps: [derivativeStudyStep(
        "Ordenem els factors",
        "Col·loquem les constants al davant de cada terme, tal com es fa als apunts.",
        `f'(x)=${finalTex}`,
      )],
      finalTex,
    };
  }

  function exponentialQuotientSimplification(node) {
    const current = unwrapParentheses(node);
    if (!current.isOperatorNode || current.op !== "/") return null;
    const exponential = simpleExponentialData(current.args[1]);
    if (!exponential) return null;
    const numerator = current.args[0];
    const numeratorDerivative = derivativeNode(numerator);
    if (!numeratorDerivative) return null;
    const numeratorTex = derivativeFactorTex(numerator);
    const numeratorDerivativeTex = derivativeFactorTex(numeratorDerivative);
    const firstProduct = derivativeProductTex([numeratorDerivativeTex, exponential.tex]);
    const secondProduct = derivativeProductTex([exponential.derivativeConstantTex, numeratorTex, exponential.tex]);
    const firstFraction = `\\frac{${firstProduct}}{${exponential.squareTex}}`;
    const secondFractionNumerator = derivativeProductTex([exponential.derivativeConstantTex, numeratorTex, exponential.tex]);
    const secondFraction = `\\frac{${secondFractionNumerator}}{${exponential.squareTex}}`;
    const reducedFirst = `\\frac{${cleanDerivativeTex(numeratorDerivative)}}{${exponential.tex}}`;
    const reducedSecondNumerator = derivativeProductTex([exponential.derivativeConstantTex, derivativeFactorTex(numerator)]);
    const reducedSecond = `\\frac{${reducedSecondNumerator}}{${exponential.tex}}`;
    const orderedTex = `\\frac{${firstProduct}-${secondProduct}}{${exponential.squareTex}}`;
    const splitTex = `${firstFraction}-${secondFraction}`;
    const finalTex = `${reducedFirst}-${reducedSecond}`;
    return {
      steps: [
        derivativeStudyStep(
          "Simplifiquem la potència del denominador",
          "Ordenem les constants al davant i utilitzem la propietat de les potències amb la mateixa base.",
          `f'(x)=${orderedTex}`,
        ),
        derivativeStudyStep(
          "Separem els dos termes",
          "Dividim cadascun dels termes del numerador pel mateix denominador.",
          `f'(x)=${splitTex}`,
        ),
        derivativeStudyStep(
          "Simplifiquem els factors comuns",
          `En cada fracció simplifiquem una potència: \\(a^x/a^{2x}=1/a^x\\).`,
          `f'(x)=${finalTex}`,
        ),
      ],
      finalTex,
    };
  }

  function derivativeSimplificationStudy(node, fallbackFinalTex) {
    const special = logRadicalSimplification(node)
      || directRadicalSimplification(node)
      || logarithmSimplification(node)
      || exponentialQuotientSimplification(node)
      || exponentialProductSimplification(node);
    if (special) return special;
    return { steps: [], finalTex: fallbackFinalTex };
  }

  function detailedDerivativeStudy(node, fallbackFinalTex) {
    const polynomial = polynomialCoefficients(node);
    const steps = [derivativeMethodStudyStep(node)];
    if (polynomial && isDirectPolynomialSyntax(node)) {
      const calculation = polynomialDerivativeCalculationTex(polynomial);
      const finalTex = polynomialToTex(derivativePolynomial(polynomial));
      steps.push(derivativeStudyStep(
        "Derivem terme a terme",
        "Apliquem la regla de la potència a cada terme; el terme independent deriva a zero.",
        `f'(x)=${calculation}`,
        "Derivació terme a terme",
      ));
      if (calculation !== finalTex) {
        steps.push(derivativeStudyStep(
          "Fem les multiplicacions",
          "Calculem els coeficients i escrivim el resultat final ordenat.",
          `f'(x)=${finalTex}`,
          "Simplificació algebraica",
        ));
      }
      return { steps, finalTex };
    }

    const stages = derivativeExpansionStages(node);
    stages.forEach((stage, index) => {
      let title;
      let explanation;
      if (index === 0) {
        title = "Apliquem la regla a la funció";
        explanation = "Escrivim la regla amb les funcions concretes i mantenim indicades les derivades que encara hem de calcular.";
      } else if (stage.hasPrime) {
        title = "Avancem cap a la funció interior";
        explanation = "Derivem la capa següent de la composició i deixem indicada la derivada que queda més a dins.";
      } else {
        title = "Calculem les derivades indicades";
        explanation = "Substituïm les últimes derivades elementals que quedaven pendents.";
      }
      const rules = derivativeRulesAtDepth(node, stage.depth);
      steps.push(derivativeStudyStep(
        title,
        explanation,
        `f'(x)=${stage.tex}`,
        rules.length ? rules.join(" + ") : "Derivada elemental",
      ));
    });

    const simplification = derivativeSimplificationStudy(node, fallbackFinalTex);
    steps.push(...simplification.steps);
    const lastExpression = steps.length ? steps[steps.length - 1].tex : "";
    const finalEquation = `f'(x)=${simplification.finalTex}`;
    if (!simplification.steps.length && lastExpression !== finalEquation) {
      steps.push(derivativeStudyStep(
        "Simplifiquem el resultat",
        "Agrupem els factors i fem només les simplificacions algebraiques exactes.",
        finalEquation,
      ));
    }
    return { steps, finalTex: simplification.finalTex };
  }

  function keepsSymbolicDerivativeConstants(node) {
    return containsNode(node, (current) => {
      if (nodeFunctionName(current) === "log" && current.args.length > 1) return true;
      if (!isExponentialPower(current)) return false;
      const base = unwrapParentheses(current.args[0]);
      return !(base.isSymbolNode && base.name === "e");
    });
  }

  function simplifyExactRadicalPowers(node) {
    let current = node;
    for (let pass = 0; pass < 3; pass += 1) {
      current = simplifyNode(current).transform(function (child) {
        const unwrapped = unwrapParentheses(child);
        if (!unwrapped || !unwrapped.isOperatorNode || unwrapped.op !== "^") return child;
        const radical = radicalParts(unwrapParentheses(unwrapped.args[0]));
        const exponent = constantInteger(unwrapped.args[1]);
        return radical && exponent === radical.index ? radical.radicand : child;
      });
    }
    return simplifyNode(current);
  }

  function directRadicalDerivativeTex(node) {
    const radical = radicalParts(unwrapParentheses(node));
    if (!radical) return "";
    const innerDerivative = derivativeNode(radical.radicand);
    if (!innerDerivative) return "";
    const radicalTex = toTex(unwrapParentheses(node));
    const denominator = radical.index === 2
      ? `2\\sqrt{${toTex(radical.radicand)}}`
      : `${radical.index}\\left(${radicalTex}\\right)^{${radical.index - 1}}`;
    return `\\frac{${toTex(innerDerivative)}}{${denominator}}`;
  }

  function displayedDerivativeTex(branch, steps) {
    const rationalData = rationalDerivativeData(branch);
    if (rationalData) return rationalDerivativeTex(rationalData);
    if (!branch.derivative) return "\\text{no disponible}";
    const calculationSteps = steps || derivativeCalculationSteps(branch.node);
    const current = unwrapParentheses(branch.node);
    const ruleExpansionIsFinal = current.isOperatorNode && (
      current.op === "+"
      || current.op === "-"
      || (current.op === "*" && current.args.every(dependsOnX))
    );
    if ((keepsSymbolicDerivativeConstants(branch.node) || ruleExpansionIsFinal) && calculationSteps.length) {
      return calculationSteps[calculationSteps.length - 1];
    }
    const directRadical = directRadicalDerivativeTex(current);
    if (directRadical) return directRadical;
    return toTex(simplifyExactRadicalPowers(branch.derivative));
  }

  function derivativeAlignedTex(steps) {
    if (!steps.length) return "f'(x)=\\text{no disponible}";
    return `\\begin{aligned}f'(x)&=${steps[0]}${steps.slice(1).map((step) => `\\\\&=${step}`).join("")}\\end{aligned}`;
  }

  function derivativeRuleLabels(node, labels) {
    const result = labels || [];
    const add = (label) => { if (!result.includes(label)) result.push(label); };
    const current = unwrapParentheses(node);
    const polynomial = polynomialCoefficients(current);
    if (polynomial && isDirectPolynomialSyntax(current)) {
      add("Derivació terme a terme");
      return result;
    }

    if (current.isOperatorNode) {
      if (current.isUnary()) {
        derivativeRuleLabels(current.args[0], result);
        return result;
      }
      const [left, right] = current.args;
      if (current.op === "+" || current.op === "-") {
        add("Regla de la suma o la resta");
        derivativeRuleLabels(left, result);
        derivativeRuleLabels(right, result);
      } else if (current.op === "*") {
        const variableArguments = current.args.filter(dependsOnX);
        add(variableArguments.length === 2 ? "Regla del producte" : "Multiplicació per una constant");
        variableArguments.forEach((argument) => derivativeRuleLabels(argument, result));
      } else if (current.op === "/") {
        add(dependsOnX(right) ? "Regla de la divisió" : "Multiplicació per una constant");
        derivativeRuleLabels(left, result);
        if (dependsOnX(right)) derivativeRuleLabels(right, result);
      } else if (current.op === "^") {
        if (isExponentialPower(current)) {
          if (!isVariableX(right)) add("Regla de la cadena");
          add("Derivada d'una exponencial");
          if (!isVariableX(right)) derivativeRuleLabels(right, result);
        } else {
          if (!isVariableX(left)) add("Regla de la cadena");
          add("Derivada d'una potència");
          if (!isVariableX(left)) derivativeRuleLabels(left, result);
        }
      }
      return result;
    }

    const functionName = nodeFunctionName(current);
    if (functionName && current.args && current.args.length) {
      const radical = radicalParts(current);
      const inner = radical ? radical.radicand : current.args[0];
      if (!isVariableX(inner)) add("Regla de la cadena");
      if (radical) add("Derivada d'una arrel");
      else if (functionName === "log") add("Derivada d'un logaritme");
      else if (functionName === "exp") add("Derivada de l'exponencial neperiana");
      if (!isVariableX(inner)) derivativeRuleLabels(inner, result);
      return result;
    }

    add("Regla de derivació corresponent");
    return result;
  }

  function variablePowerExponent(node) {
    const current = unwrapParentheses(node);
    if (isVariableX(current)) return 1;
    if (!current.isOperatorNode || current.op !== "^") return null;
    if (!isVariableX(current.args[0])) return null;
    const exponent = constantInteger(current.args[1]);
    return exponent !== null && exponent > 0 ? exponent : null;
  }

  function reducedRational(numerator, denominator) {
    const divisor = greatestCommonInteger([numerator, denominator]);
    return { numerator: numerator / divisor, denominator: denominator / divisor };
  }

  function rationalPowerTex(baseTex, exponent) {
    if (exponent.numerator === exponent.denominator) return baseTex;
    return `${baseTex}^{${rationalTex(exponent)}}`;
  }

  function rationalPowerDerivativeTerm(baseTex, exponent, negative) {
    const difference = reducedRational(exponent.numerator - exponent.denominator, exponent.denominator);
    const coefficient = rationalTex(exponent);
    const power = difference.numerator === 0 ? "" : rationalPowerTex(baseTex, difference);
    return `${negative ? "-" : ""}${coefficient}${power ? `\\,${power}` : ""}`;
  }

  function evenRadicalPowerStudy(node) {
    const current = unwrapParentheses(node);
    const radical = radicalParts(current);
    if (!radical || radical.index % 2 !== 0) return null;
    const radicandExponent = variablePowerExponent(radical.radicand);
    if (radicandExponent === null || radicandExponent % 2 !== 0) return null;
    const exponent = reducedRational(radicandExponent, radical.index);
    const exponentValue = exponent.numerator / exponent.denominator;
    const rawExponent = { numerator: radicandExponent, denominator: radical.index };
    const absolutePower = rationalPowerTex("\\left|x\\right|", exponent);
    const negativePower = rationalPowerTex("(-x)", exponent);
    const positivePower = rationalPowerTex("x", exponent);
    const negativeDerivative = rationalPowerDerivativeTerm("(-x)", exponent, true);
    const positiveDerivative = rationalPowerDerivativeTerm("x", exponent, false);
    const steps = [
      derivativeStudyStep(
        "Pas previ: transformem l’arrel en una potència",
        `Com que ${formula(`x^{${radicandExponent}}\\geq0`, false)} per a tot ${formula("x\\in\\mathbb{R}", false)}, el domini és tot ${formula("\\mathbb{R}", false)}. No podem imposar ${formula("x\\geq0", false)} i necessitem el valor absolut per conservar també la branca ${formula("x<0", false)}.`,
        `\\begin{aligned}x&\\in\\mathbb{R},\\\\f(x)&=${toTex(current)}=\\left|x\\right|^{${rationalTex(rawExponent)}}=${absolutePower}\\end{aligned}`,
        "Propietats de les potències",
      ),
      derivativeStudyStep(
        "Transformem el valor absolut en una funció a trossos",
        "Escrivim una expressió sense valor absolut a cada costat de zero.",
        `f(x)=\\begin{cases}${negativePower},&x<0\\\\0,&x=0\\\\${positivePower},&x>0\\end{cases}`,
        "Transformació del valor absolut",
      ),
      derivativeStudyStep(
        "Derivem els dos trams",
        "A l’esquerra també apliquem la regla de la cadena perquè la funció interior és -x.",
        `\\begin{aligned}x<0:\\quad f'(x)&=${rationalTex(exponent)}\\,${rationalPowerTex("(-x)", reducedRational(exponent.numerator - exponent.denominator, exponent.denominator))}\\cdot(-1)=${negativeDerivative}\\\\x>0:\\quad f'(x)&=${positiveDerivative}\\end{aligned}`,
        "Derivada d’una potència + regla de la cadena",
      ),
    ];
    let zeroDerivativeTex = "\\text{no existeix}";
    if (exponentValue > 1) {
      zeroDerivativeTex = "0";
      steps.push(derivativeStudyStep(
        "Estudiem la derivada en x=0",
        "Com que l’exponent és més gran que 1, el quocient incremental tendeix a zero pels dos costats.",
        `f'(0)=\\lim_{h\\to0}\\frac{|h|^{${rationalTex(exponent)}}}{h}=0`,
        "Definició de derivada en un punt",
      ));
    } else {
      steps.push(derivativeStudyStep(
        "Estudiem la derivada en x=0",
        "Les derivades laterals no coincideixen o no són finites; per tant, la funció no és derivable en zero.",
        "f'(0)=\\text{no existeix}",
        "Derivades laterals",
      ));
    }
    const finalTex = `\\begin{cases}${negativeDerivative},&x<0\\\\${zeroDerivativeTex},&x=0\\\\${positiveDerivative},&x>0\\end{cases}`;
    steps.push(derivativeStudyStep(
      "Escrivim la derivada completa",
      "Reunim les derivades dels dos trams i el resultat obtingut en zero.",
      `f'(x)=${finalTex}`,
      "Derivació d’una funció a trossos",
    ));
    return {
      derivativeTex: finalTex,
      rules: [
        "Propietats de les potències",
        "Transformació del valor absolut",
        "Derivada d’una potència",
        "Regla de la cadena",
        "Derivació d’una funció a trossos",
      ],
      steps,
    };
  }

  function derivativeFriendlyTransformation(node) {
    let changedDivision = false;
    let changedRadical = false;
    const nonnegativeRadicalPowers = [];
    const transformed = node.transform(function (child) {
      const current = unwrapParentheses(child);
      if (current.isOperatorNode && current.op === "/" && !dependsOnX(current.args[0])) {
        const denominatorExponent = variablePowerExponent(current.args[1]);
        if (denominatorExponent !== null) {
          changedDivision = true;
          const numerator = unwrapParentheses(current.args[0]);
          const numeratorSource = numerator.isConstantNode || numerator.isSymbolNode
            ? numerator.toString()
            : `(${numerator.toString()})`;
          return math.parse(`${numeratorSource}*x^-${denominatorExponent}`);
        }
      }
      const radical = radicalParts(current);
      if (radical) {
        const radicandExponent = variablePowerExponent(radical.radicand);
        const needsAbsoluteValue = radical.index % 2 === 0 && radicandExponent !== null && radicandExponent % 2 === 0;
        if (radicandExponent !== null && !needsAbsoluteValue) {
          changedRadical = true;
          if (radical.index % 2 === 0) {
            nonnegativeRadicalPowers.push({ index: radical.index, exponent: radicandExponent });
          }
          return math.parse(`x^(${radicandExponent}/${radical.index})`);
        }
      }
      return child;
    });
    if (!changedDivision && !changedRadical) return { node, steps: [] };
    const explanations = [];
    if (changedDivision) explanations.push("transformem les divisions per una potència de x amb la propietat 1/x^n=x^{-n}");
    if (changedRadical) explanations.push("escrivim cada arrel d’una potència com una potència d’exponent fraccionari");
    let domainExplanation = "";
    let domainTex = "";
    if (nonnegativeRadicalPowers.length) {
      const conditions = nonnegativeRadicalPowers
        .filter((item, index, items) => items.findIndex((other) => other.index === item.index && other.exponent === item.exponent) === index)
        .map((item) => `${formula(`x^{${item.exponent}}\\geq0\\Longleftrightarrow x\\geq0`, false)}`);
      domainExplanation = ` Com que l’índex és parell i l’exponent de x dins del radical és senar, la condició ${conditions.join(" i ")} forma part del domini. En aquest domini x no és negativa; per això podem escriure la potència fraccionària sense valor absolut.`;
      domainTex = "x\\geq0,\\qquad ";
    }
    return {
      node: transformed,
      steps: [derivativeStudyStep(
        "Pas previ: escrivim la funció amb potències",
        `Abans de derivar, ${explanations.join(" i ")}.${domainExplanation}`,
        `${domainTex}f(x)=${toTex(node)}=${toTex(transformed)}`,
        "Propietats de les potències",
      )],
    };
  }

  function deriveExpressionStudy(value) {
    const parsed = parseExpression(value);
    if (containsNode(parsed.node, (current) => nodeFunctionName(current) === "abs")) {
      throw new Error("Per derivar una funció amb valor absolut, transforma-la primer en una funció a trossos i deriva cada tram.");
    }
    const sourceNode = simplifyNode(parsed.node);
    const evenRadicalStudy = evenRadicalPowerStudy(sourceNode);
    if (evenRadicalStudy) {
      return {
        sourceTex: toTex(sourceNode),
        derivativeTex: evenRadicalStudy.derivativeTex,
        rules: evenRadicalStudy.rules,
        steps: evenRadicalStudy.steps,
      };
    }
    const preparation = derivativeFriendlyTransformation(sourceNode);
    const node = preparation.node;
    const derivative = derivativeNode(node);
    if (!derivative) throw new Error("No s'ha pogut calcular la derivada amb les regles admeses.");
    const branch = { node, derivative };
    const calculationSteps = derivativeCalculationSteps(node);
    const displayedDerivative = displayedDerivativeTex(branch, calculationSteps);
    const study = detailedDerivativeStudy(node, displayedDerivative);
    return {
      sourceTex: toTex(sourceNode),
      derivativeTex: study.finalTex,
      rules: uniqueRuleLabels([
        ...(preparation.steps.length ? ["Propietats de les potències"] : []),
        ...derivativeRuleLabels(node),
      ]),
      steps: [...preparation.steps, ...study.steps],
    };
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
    let html = `<h4>${title}</h4>`;
    const polynomial = polynomialCoefficients(branch.node);
    if (polynomial && isDirectPolynomialSyntax(branch.node)) {
      html += `<p>Derivem terme a terme amb ${formula(`(ax^n)'=a\\cdot n x^{n-1}`, false)} i ${formula(`c'=0`, false)}:</p>`;
      const calculation = polynomialDerivativeCalculationTex(polynomial);
      const finalDerivative = displayedDerivativeTex(branch);
      const steps = calculation === finalDerivative ? [calculation] : [calculation, finalDerivative];
      return `${html}${formula(derivativeAlignedTex(steps))}`;
    }

    const fraction = fractionParts(branch.node);
    const current = unwrapParentheses(branch.node);
    if (fraction && dependsOnX(fraction.denominator)) {
      html += "<p>Apliquem la regla de la divisió directament sobre el numerador i el denominador:</p>";
    } else if (current.isOperatorNode && current.op === "*" && current.args.every(dependsOnX)) {
      html += "<p>Apliquem la regla del producte directament sobre els dos factors:</p>";
    } else if ((nodeFunctionName(current) || (current.isOperatorNode && current.op === "^")) && dependsOnX(current)) {
      html += "<p>Apliquem la regla de la cadena i mantenim indicada la derivada de la funció interior fins al pas següent:</p>";
    } else {
      html += "<p>Apliquem les regles de derivació corresponents i substituïm les derivades indicades pas a pas:</p>";
    }

    const steps = derivativeCalculationSteps(branch.node);
    const finalDerivative = displayedDerivativeTex(branch, steps);
    if (steps[steps.length - 1] !== finalDerivative) steps.push(finalDerivative);
    return `${html}${formula(derivativeAlignedTex(steps))}`;
  }

  function buildStep7(analysis) {
    const procedures = analysis.model.branches.map((branch, index) => derivativeProcedureHtml(branch, index, analysis.model.branches.length)).join("");
    const rows = analysis.model.branches.map((branch, index) => {
      const interval = domainIntervalsForBranch(branch).map(texInterval).join("\\cup");
      const derivative = displayedDerivativeTex(branch);
      return `<tr><th>${analysis.model.branches.length > 1 ? `Tram ${index + 1}` : "Funció"}</th><td>${formula(`x\\in${interval}`, false)}</td><td>${formula(`f'(x)=${derivative}`, false)}</td></tr>`;
    }).join("");
    const methods = [];
    const seenMethods = new Set();
    analysis.model.branches.forEach((branch) => {
      if (!branch.derivative) return;
      if (keepsSymbolicDerivativeConstants(branch.node)) return;
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
      .map((column) => ({ x: column.x, y: evaluateModel(analysis.model, column.x), label: column.classification }))
      .filter((point) => Number.isFinite(point.y));
  }

  function graphHorizontalAsymptotes(analysis) {
    return uniqueNumbers([analysis.minusInfinity, analysis.plusInfinity]
      .filter((limit) => limit.kind === "finite" && Number.isFinite(limit.value))
      .map((limit) => limit.value));
  }

  function graphMarkedPoints(analysis) {
    const points = [];
    function add(point) {
      if (!Number.isFinite(point.x) || !Number.isFinite(point.y)) return;
      const existing = points.find((entry) => Math.abs(entry.x - point.x) < ROOT_EPS && Math.abs(entry.y - point.y) < ROOT_EPS);
      if (existing) {
        if (!existing.labels.includes(point.label)) existing.labels.push(point.label);
        if (!point.open) {
          existing.open = false;
          existing.color = point.color;
        }
        return;
      }
      points.push({ ...point, labels: [point.label] });
    }

    analysis.roots.forEach((x) => add({ x, y: 0, label: "Tall amb l'eix X", color: POINT_COLORS.xIntercept, open: false }));
    const yIntercept = evaluateModel(analysis.model, 0);
    if (Number.isFinite(yIntercept)) add({ x: 0, y: yIntercept, label: "Tall amb l'eix Y", color: POINT_COLORS.yIntercept, open: false });
    graphExtrema(analysis).forEach((point) => add({
      ...point,
      color: point.label.startsWith("màxim") ? POINT_COLORS.maximum : POINT_COLORS.minimum,
      open: false,
    }));
    analysis.specialPoints.filter((point) => point.type === "discontinuïtat evitable").forEach((point) => {
      const finiteSide = point.left.kind === "finite" ? point.left.value : point.right.value;
      add({ x: point.x, y: finiteSide, label: "Discontinuïtat evitable", color: POINT_COLORS.removable, open: true });
    });
    if (analysis.model.mode === "piecewise") {
      analysis.model.joins.forEach((join) => {
        analysis.model.branches.forEach((branch, index) => {
          if (Math.abs(branch.interval.lower - join) >= EPS && Math.abs(branch.interval.upper - join) >= EPS) return;
          const y = branch.fn(join);
          const closed = (Math.abs(branch.interval.lower - join) < EPS && branch.interval.lowerClosed)
            || (Math.abs(branch.interval.upper - join) < EPS && branch.interval.upperClosed);
          add({ x: join, y, label: `Punt d'unió · Tram ${index + 1}`, color: COLORS[index % COLORS.length], open: !closed });
        });
      });
    }
    return points.map((point) => {
      const axisX = point.labels.includes("Tall amb l'eix X");
      const axisY = point.labels.includes("Tall amb l'eix Y");
      const maximum = point.labels.some((label) => label.startsWith("màxim"));
      const minimum = point.labels.some((label) => label.startsWith("mínim"));
      const removable = point.labels.includes("Discontinuïtat evitable");
      let kind = "join";
      let color = point.color;
      if (maximum) {
        kind = "maximum";
        color = POINT_COLORS.maximum;
      } else if (minimum) {
        kind = "minimum";
        color = POINT_COLORS.minimum;
      } else if (removable) {
        kind = "removable";
        color = POINT_COLORS.removable;
      } else if (axisX && axisY) {
        kind = "both-intercepts";
        color = POINT_COLORS.bothIntercepts;
      } else if (axisX) {
        kind = "x-intercept";
        color = POINT_COLORS.xIntercept;
      } else if (axisY) {
        kind = "y-intercept";
        color = POINT_COLORS.yIntercept;
      }
      const otherLabels = point.labels.filter((label) => label !== "Tall amb l'eix X" && label !== "Tall amb l'eix Y");
      const axisLabel = axisX && axisY ? "Tall amb els eixos X i Y" : axisX ? "Tall amb l'eix X" : axisY ? "Tall amb l'eix Y" : "";
      const label = [axisLabel, ...otherLabels].filter(Boolean).join(" · ");
      return { ...point, color, kind, label };
    });
  }

  function graphCoordinateText(value) {
    if (!Number.isFinite(value)) return "";
    const absolute = Math.abs(value);
    if (absolute >= 1e5 || (absolute > 0 && absolute < 1e-3)) {
      return value.toExponential(3).replace(".", ",");
    }
    const normalized = absolute < 5e-10 ? 0 : Number(value.toFixed(3));
    return String(normalized).replace(".", ",");
  }

  function clearGraphTracking(canvas) {
    const overlay = canvas.parentElement.querySelector("#fa-graph-overlay");
    const tooltip = canvas.parentElement.querySelector("#fa-graph-tooltip");
    if (overlay) {
      const context = overlay.getContext("2d");
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.clearRect(0, 0, overlay.width, overlay.height);
    }
    if (tooltip) tooltip.hidden = true;
  }

  function trackGraphPoint(canvas, event) {
    const state = canvas._functionAnalyzerGraph;
    if (!state) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const pointerX = (event.clientX - rect.left) * state.width / rect.width;
    const pointerY = (event.clientY - rect.top) * state.height / rect.height;
    const { margin, plotWidth, plotHeight } = state;
    if (pointerX < margin.left || pointerX > margin.left + plotWidth || pointerY < margin.top || pointerY > margin.top + plotHeight) {
      clearGraphTracking(canvas);
      return;
    }

    const x = state.xMin + ((pointerX - margin.left) / plotWidth) * (state.xMax - state.xMin);
    let nearest = null;
    state.markedPoints.forEach((point) => {
      if (point.x < state.xMin || point.x > state.xMax || point.y < state.yMin || point.y > state.yMax) return;
      const pointX = margin.left + ((point.x - state.xMin) / (state.xMax - state.xMin)) * plotWidth;
      const pointY = margin.top + ((state.yMax - point.y) / (state.yMax - state.yMin)) * plotHeight;
      const distance = Math.hypot(pointerX - pointX, pointerY - pointY);
      if (!nearest || distance < nearest.distance) nearest = { ...point, pointX, pointY, distance, marked: true };
    });

    const touchInteraction = event.pointerType === "touch";
    const markerThreshold = (touchInteraction ? 28 : 18) * state.width / rect.width;
    if (!nearest || nearest.distance > markerThreshold) {
      nearest = null;
      state.analysis.model.branches.forEach((branch, branchIndex) => {
        if (!branchContains(branch, x, true)) return;
        const y = branch.fn(x);
        if (!Number.isFinite(y) || y < state.yMin || y > state.yMax) return;
        const pointY = margin.top + ((state.yMax - y) / (state.yMax - state.yMin)) * plotHeight;
        const distance = Math.abs(pointerY - pointY);
        if (!nearest || distance < nearest.distance) {
          nearest = { x, y, pointX: pointerX, pointY, branchIndex, color: COLORS[branchIndex % COLORS.length], distance, marked: false };
        }
      });
    }

    const threshold = nearest && nearest.marked ? markerThreshold : (touchInteraction ? 36 : 22) * state.width / rect.width;
    if (!nearest || nearest.distance > threshold) {
      clearGraphTracking(canvas);
      return;
    }

    const overlay = canvas.parentElement.querySelector("#fa-graph-overlay");
    const tooltip = canvas.parentElement.querySelector("#fa-graph-tooltip");
    if (!overlay || !tooltip) return;
    const context = overlay.getContext("2d");
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    context.clearRect(0, 0, state.width, state.height);
    context.save();
    context.beginPath();
    context.rect(margin.left, margin.top, plotWidth, plotHeight);
    context.clip();
    context.strokeStyle = "rgba(38, 50, 56, 0.42)";
    context.lineWidth = 1;
    context.setLineDash([4, 4]);
    context.beginPath();
    context.moveTo(nearest.pointX, margin.top);
    context.lineTo(nearest.pointX, margin.top + plotHeight);
    context.moveTo(margin.left, nearest.pointY);
    context.lineTo(margin.left + plotWidth, nearest.pointY);
    context.stroke();
    context.restore();

    const branchLabel = !nearest.marked && state.analysis.model.branches.length > 1 ? `Tram ${nearest.branchIndex + 1}` : "";
    const pointLabel = nearest.marked ? nearest.label : branchLabel;
    tooltip.textContent = `${pointLabel ? `${pointLabel} · ` : ""}x = ${graphCoordinateText(nearest.x)} · y = ${graphCoordinateText(nearest.y)}`;
    tooltip.hidden = false;
    const pointCssX = nearest.pointX * rect.width / state.width;
    const pointCssY = nearest.pointY * rect.height / state.height;
    const gap = 12;
    let left = pointCssX + gap;
    let top = pointCssY - tooltip.offsetHeight - gap;
    if (left + tooltip.offsetWidth > rect.width - 8) left = pointCssX - tooltip.offsetWidth - gap;
    if (top < 8) top = pointCssY + gap;
    tooltip.style.left = `${Math.max(8, left)}px`;
    tooltip.style.top = `${Math.min(rect.height - tooltip.offsetHeight - 8, top)}px`;
  }

  function drawGraph(analysis, canvas, xMin, xMax, yWindow) {
    if (!(xMin < xMax)) throw new Error("El valor mínim de x ha de ser menor que el màxim.");
    const wrapper = canvas.parentElement;
    const width = Math.max(480, Math.round(wrapper.clientWidth || 900));
    const height = Math.round(width * 9 / 16);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    const overlay = wrapper.querySelector("#fa-graph-overlay");
    if (overlay) {
      overlay.width = Math.round(width * dpr);
      overlay.height = Math.round(height * dpr);
      overlay.style.width = "100%";
      overlay.style.height = "100%";
    }
    clearGraphTracking(canvas);
    const context = canvas.getContext("2d");
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const sampleCount = Math.max(900, Math.round(width * 1.5));
    let yMin = Number(yWindow && yWindow.yMin);
    let yMax = Number(yWindow && yWindow.yMax);
    if (!(Number.isFinite(yMin) && Number.isFinite(yMax) && yMin < yMax)) {
      const samples = [];
      for (let i = 0; i <= sampleCount; i += 1) {
        const x = xMin + ((xMax - xMin) * i) / sampleCount;
        const y = evaluateModel(analysis.model, x);
        if (Number.isFinite(y) && Math.abs(y) < 1e8) samples.push({ x, y });
      }
      const yValues = samples.map((sample) => sample.y).sort((a, b) => a - b);
      yMin = quantile(yValues, 0.03);
      yMax = quantile(yValues, 0.97);
      const highlighted = [
        ...analysis.roots.map((x) => ({ x, y: 0 })),
        ...graphExtrema(analysis),
        ...graphHorizontalAsymptotes(analysis).map((y) => ({ x: (xMin + xMax) / 2, y })),
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
    }

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

    const horizontalAsymptotes = graphHorizontalAsymptotes(analysis);
    horizontalAsymptotes.filter((y) => y >= yMin && y <= yMax).forEach((y) => {
      const py = mapY(y);
      context.save();
      context.setLineDash([7, 5]);
      context.strokeStyle = "#c62828";
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(margin.left, py);
      context.lineTo(margin.left + plotWidth, py);
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

    const markedPoints = graphMarkedPoints(analysis);
    markedPoints.forEach((point) => drawPoint(point, point.color, point.open));
    canvas.dataset.xMin = String(xMin);
    canvas.dataset.xMax = String(xMax);
    canvas.dataset.yMin = String(yMin);
    canvas.dataset.yMax = String(yMax);
    canvas.dataset.horizontalAsymptotes = horizontalAsymptotes.join(",");
    canvas._functionAnalyzerGraph = {
      analysis,
      xMin,
      xMax,
      yMin,
      yMax,
      margin,
      plotWidth,
      plotHeight,
      width,
      height,
      dpr,
      markedPoints,
      horizontalAsymptotes,
    };
    return canvas._functionAnalyzerGraph;
  }

  function renderLegend(analysis, container) {
    const items = analysis.model.branches.map((branch, index) => `<span class="fa-legend-item" style="--legend-color:${COLORS[index % COLORS.length]}">${analysis.model.branches.length > 1 ? `Tram ${index + 1}: ` : ""}${formula(`y=${branch.tex}`, false)}</span>`);
    if (analysis.specialPoints.some((point) => point.type === "asímptota vertical")) items.push('<span class="fa-legend-item" style="--legend-color:#c62828">Asímptota vertical</span>');
    graphHorizontalAsymptotes(analysis).forEach((y) => items.push(`<span class="fa-legend-item" style="--legend-color:#c62828">Asímptota horitzontal ${formula(`y=${texNumber(y)}`, false)}</span>`));
    const markedPoints = graphMarkedPoints(analysis);
    [
      ["x-intercept", "Tall amb l'eix X", POINT_COLORS.xIntercept],
      ["y-intercept", "Tall amb l'eix Y", POINT_COLORS.yIntercept],
      ["both-intercepts", "Tall amb els eixos X i Y", POINT_COLORS.bothIntercepts],
      ["maximum", "Màxim relatiu", POINT_COLORS.maximum],
      ["minimum", "Mínim relatiu", POINT_COLORS.minimum],
      ["removable", "Discontinuïtat evitable", POINT_COLORS.removable],
    ].forEach(([kind, label, color]) => {
      if (markedPoints.some((point) => point.kind === kind)) items.push(`<span class="fa-legend-item fa-legend-item--point" style="--legend-color:${color}">${label}</span>`);
    });
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

  function initialGraphXWindow(analysis) {
    const defaultWindow = { xMin: -10, xMax: 10 };
    const relevant = [
      ...analysis.roots,
      ...analysis.model.joins,
      ...analysis.specialPoints.map((point) => point.x),
      ...graphExtrema(analysis).map((point) => point.x),
    ].filter(Number.isFinite);
    if (!relevant.length || relevant.some((x) => x >= defaultWindow.xMin && x <= defaultWindow.xMax)) return defaultWindow;
    const minimum = Math.min(...relevant);
    const maximum = Math.max(...relevant);
    const center = (minimum + maximum) / 2;
    const span = Math.max(20, (maximum - minimum) * 1.4 + 4);
    return { xMin: center - span / 2, xMax: center + span / 2 };
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
    const zoomInButton = root.querySelector("#fa-zoom-in");
    const zoomOutButton = root.querySelector("#fa-zoom-out");
    let activeMode = "standard";
    let currentAnalysis = null;
    let graphView = { xMin: -10, xMax: 10, yMin: null, yMax: null };
    let graphDrag = null;
    const graphTouches = new Map();
    let touchGesture = null;

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
      const state = drawGraph(currentAnalysis, canvas, graphView.xMin, graphView.xMax, graphView);
      graphView = { xMin: state.xMin, xMax: state.xMax, yMin: state.yMin, yMax: state.yMax };
    }

    function scaledInterval(minimum, maximum, focus, factor, minSpan, maxSpan) {
      const currentSpan = maximum - minimum;
      const nextSpan = Math.min(maxSpan, Math.max(minSpan, currentSpan * factor));
      const effectiveFactor = nextSpan / currentSpan;
      return {
        minimum: focus - (focus - minimum) * effectiveFactor,
        maximum: focus + (maximum - focus) * effectiveFactor,
      };
    }

    function zoomGraph(factor, focus) {
      const state = canvas._functionAnalyzerGraph;
      if (!currentAnalysis || !state) return;
      const focusX = focus && Number.isFinite(focus.x) ? focus.x : (state.xMin + state.xMax) / 2;
      const focusY = focus && Number.isFinite(focus.y) ? focus.y : (state.yMin + state.yMax) / 2;
      const horizontal = scaledInterval(state.xMin, state.xMax, focusX, factor, 1e-4, 1e7);
      const vertical = scaledInterval(state.yMin, state.yMax, focusY, factor, 1e-4, 1e9);
      graphView = {
        xMin: horizontal.minimum,
        xMax: horizontal.maximum,
        yMin: vertical.minimum,
        yMax: vertical.maximum,
      };
      redraw();
      message.hidden = true;
    }

    function graphPointFromEvent(event, state) {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return null;
      const pointerX = (event.clientX - rect.left) * state.width / rect.width;
      const pointerY = (event.clientY - rect.top) * state.height / rect.height;
      if (pointerX < state.margin.left || pointerX > state.margin.left + state.plotWidth || pointerY < state.margin.top || pointerY > state.margin.top + state.plotHeight) return null;
      return {
        x: state.xMin + ((pointerX - state.margin.left) / state.plotWidth) * (state.xMax - state.xMin),
        y: state.yMax - ((pointerY - state.margin.top) / state.plotHeight) * (state.yMax - state.yMin),
      };
    }

    function captureGraphPointer(event) {
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch (_error) {
        // Alguns navegadors antics no permeten capturar punters tàctils sintètics.
      }
    }

    function releaseGraphPointer(event) {
      try {
        if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
      } catch (_error) {
        // La captura ja pot haver acabat si el sistema ha cancel·lat el gest.
      }
    }

    function graphTouchMetrics() {
      const touches = Array.from(graphTouches.values()).slice(0, 2);
      if (touches.length < 2) return null;
      return {
        centerX: (touches[0].clientX + touches[1].clientX) / 2,
        centerY: (touches[0].clientY + touches[1].clientY) / 2,
        distance: Math.max(1, Math.hypot(touches[1].clientX - touches[0].clientX, touches[1].clientY - touches[0].clientY)),
      };
    }

    function rememberGraphTouch(event) {
      graphTouches.set(event.pointerId, {
        pointerId: event.pointerId,
        pointerType: "touch",
        clientX: event.clientX,
        clientY: event.clientY,
      });
    }

    function startGraphDrag(event) {
      if (!currentAnalysis || !canvas._functionAnalyzerGraph || event.button !== 0) return;
      event.preventDefault();
      graphDrag = { pointerId: event.pointerId, clientX: event.clientX, clientY: event.clientY };
      captureGraphPointer(event);
      canvas.classList.add("is-dragging");
      clearGraphTracking(canvas);
    }

    function startGraphInteraction(event) {
      if (!currentAnalysis || !canvas._functionAnalyzerGraph || event.button !== 0) return;
      if (event.pointerType !== "touch") {
        startGraphDrag(event);
        return;
      }
      event.preventDefault();
      rememberGraphTouch(event);
      captureGraphPointer(event);
      if (graphTouches.size === 1) {
        touchGesture = null;
        canvas.classList.add("is-tracking");
        trackGraphPoint(canvas, event);
        return;
      }
      touchGesture = graphTouchMetrics();
      canvas.classList.remove("is-tracking");
      canvas.classList.add("is-dragging");
      clearGraphTracking(canvas);
    }

    function moveGraphTouch(event) {
      if (!graphTouches.has(event.pointerId)) return false;
      event.preventDefault();
      rememberGraphTouch(event);
      if (graphTouches.size === 1) {
        touchGesture = null;
        canvas.classList.remove("is-dragging");
        canvas.classList.add("is-tracking");
        trackGraphPoint(canvas, event);
        return true;
      }

      const nextGesture = graphTouchMetrics();
      const state = canvas._functionAnalyzerGraph;
      const rect = canvas.getBoundingClientRect();
      if (!nextGesture || !state || !rect.width || !rect.height) return true;
      if (!touchGesture) {
        touchGesture = nextGesture;
        return true;
      }

      const focus = graphPointFromEvent({ clientX: touchGesture.centerX, clientY: touchGesture.centerY }, state);
      if (!focus) {
        touchGesture = nextGesture;
        return true;
      }
      const factor = Math.min(2, Math.max(0.5, touchGesture.distance / nextGesture.distance));
      const horizontal = scaledInterval(state.xMin, state.xMax, focus.x, factor, 1e-4, 1e7);
      const vertical = scaledInterval(state.yMin, state.yMax, focus.y, factor, 1e-4, 1e9);
      const cssPlotWidth = state.plotWidth * rect.width / state.width;
      const cssPlotHeight = state.plotHeight * rect.height / state.height;
      const deltaX = nextGesture.centerX - touchGesture.centerX;
      const deltaY = nextGesture.centerY - touchGesture.centerY;
      const xShift = -deltaX * (horizontal.maximum - horizontal.minimum) / cssPlotWidth;
      const yShift = deltaY * (vertical.maximum - vertical.minimum) / cssPlotHeight;
      graphView = {
        xMin: horizontal.minimum + xShift,
        xMax: horizontal.maximum + xShift,
        yMin: vertical.minimum + yShift,
        yMax: vertical.maximum + yShift,
      };
      touchGesture = nextGesture;
      redraw();
      return true;
    }

    function moveGraph(event) {
      if (event.pointerType === "touch" && moveGraphTouch(event)) return;
      if (!graphDrag || graphDrag.pointerId !== event.pointerId) {
        trackGraphPoint(canvas, event);
        return;
      }
      event.preventDefault();
      const state = canvas._functionAnalyzerGraph;
      const rect = canvas.getBoundingClientRect();
      if (!state || !rect.width || !rect.height) return;
      const deltaX = (event.clientX - graphDrag.clientX) * state.width / rect.width;
      const deltaY = (event.clientY - graphDrag.clientY) * state.height / rect.height;
      graphDrag.clientX = event.clientX;
      graphDrag.clientY = event.clientY;
      const xShift = -deltaX * (state.xMax - state.xMin) / state.plotWidth;
      const yShift = deltaY * (state.yMax - state.yMin) / state.plotHeight;
      graphView = {
        xMin: state.xMin + xShift,
        xMax: state.xMax + xShift,
        yMin: state.yMin + yShift,
        yMax: state.yMax + yShift,
      };
      redraw();
    }

    function endGraphDrag(event) {
      if (!graphDrag || graphDrag.pointerId !== event.pointerId) return;
      graphDrag = null;
      releaseGraphPointer(event);
      canvas.classList.remove("is-dragging");
    }

    function endGraphInteraction(event, cancelled) {
      if (event.pointerType !== "touch" || !graphTouches.has(event.pointerId)) {
        endGraphDrag(event);
        return;
      }
      graphTouches.delete(event.pointerId);
      releaseGraphPointer(event);
      if (graphTouches.size >= 2) {
        touchGesture = graphTouchMetrics();
        return;
      }
      canvas.classList.remove("is-dragging");
      touchGesture = null;
      if (graphTouches.size === 1 && !cancelled) {
        const remainingTouch = Array.from(graphTouches.values())[0];
        canvas.classList.add("is-tracking");
        trackGraphPoint(canvas, remainingTouch);
        return;
      }
      canvas.classList.remove("is-tracking");
      if (cancelled) clearGraphTracking(canvas);
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
          graphView = { ...initialGraphXWindow(currentAnalysis), yMin: null, yMax: null };
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
    zoomInButton.addEventListener("click", () => zoomGraph(0.7));
    zoomOutButton.addEventListener("click", () => zoomGraph(1.4));
    canvas.addEventListener("wheel", function (event) {
      const state = canvas._functionAnalyzerGraph;
      if (!currentAnalysis || !state) return;
      const focus = graphPointFromEvent(event, state);
      if (!focus) return;
      event.preventDefault();
      zoomGraph(event.deltaY < 0 ? 0.84 : 1.19, focus);
    }, { passive: false });
    canvas.addEventListener("pointerdown", startGraphInteraction);
    canvas.addEventListener("pointermove", moveGraph);
    canvas.addEventListener("pointerup", (event) => endGraphInteraction(event, false));
    canvas.addEventListener("pointercancel", (event) => endGraphInteraction(event, true));
    canvas.addEventListener("lostpointercapture", function (event) {
      if (event.pointerType === "touch" && graphTouches.has(event.pointerId)) {
        graphTouches.delete(event.pointerId);
        touchGesture = graphTouchMetrics();
      } else if (graphDrag && graphDrag.pointerId === event.pointerId) graphDrag = null;
      if (!graphDrag && graphTouches.size < 2) canvas.classList.remove("is-dragging");
    });
    canvas.addEventListener("pointerleave", (event) => {
      if (event.pointerType !== "touch" && !graphDrag) clearGraphTracking(canvas);
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
      graphView = { xMin: -10, xMax: 10, yMin: null, yMax: null };
      graphDrag = null;
      graphTouches.clear();
      touchGesture = null;
      canvas.classList.remove("is-dragging", "is-tracking");
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
      currentAnalysis = null;
      canvas._functionAnalyzerGraph = null;
      clearGraphTracking(canvas);
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
    deriveExpressionStudy,
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
