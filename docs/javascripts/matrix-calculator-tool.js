(function () {
  "use strict";

  function gcd(a, b) {
    let x = a < 0n ? -a : a;
    let y = b < 0n ? -b : b;
    while (y !== 0n) [x, y] = [y, x % y];
    return x;
  }

  class Fraction {
    constructor(numerator, denominator) {
      let n = BigInt(numerator);
      let d = denominator === undefined ? 1n : BigInt(denominator);
      if (d === 0n) throw new Error("No es pot dividir entre zero.");
      if (d < 0n) { n = -n; d = -d; }
      const divisor = gcd(n, d) || 1n;
      this.n = n / divisor;
      this.d = d / divisor;
    }
    add(value) { return new Fraction(this.n * value.d + value.n * this.d, this.d * value.d); }
    sub(value) { return new Fraction(this.n * value.d - value.n * this.d, this.d * value.d); }
    mul(value) { return new Fraction(this.n * value.n, this.d * value.d); }
    div(value) {
      if (value.isZero()) throw new Error("No es pot dividir entre zero.");
      return new Fraction(this.n * value.d, this.d * value.n);
    }
    neg() { return new Fraction(-this.n, this.d); }
    abs() { return new Fraction(this.n < 0n ? -this.n : this.n, this.d); }
    isZero() { return this.n === 0n; }
    isOne() { return this.n === this.d; }
    isInteger() { return this.d === 1n; }
    equals(value) { return this.n === value.n && this.d === value.d; }
    toTex() {
      if (this.d === 1n) return this.n.toString();
      const sign = this.n < 0n ? "-" : "";
      const absolute = this.n < 0n ? -this.n : this.n;
      return `${sign}\\frac{${absolute}}{${this.d}}`;
    }
  }

  const ZERO = new Fraction(0n);
  const ONE = new Fraction(1n);

  function theoryError(message, theory) {
    const error = new Error(message);
    error.theory = theory;
    return error;
  }

  class LinearExpression {
    constructor(constant, coefficients) {
      this.constant = constant || ZERO;
      this.coefficients = {};
      Object.entries(coefficients || {}).forEach(([variable, coefficient]) => {
        if (!coefficient.isZero()) this.coefficients[variable] = coefficient;
      });
    }
    static fromFraction(value) { return new LinearExpression(value, {}); }
    add(value) {
      const coefficients = { ...this.coefficients };
      Object.entries(value.coefficients).forEach(([variable, coefficient]) => {
        coefficients[variable] = (coefficients[variable] || ZERO).add(coefficient);
      });
      return new LinearExpression(this.constant.add(value.constant), coefficients);
    }
    sub(value) { return this.add(value.neg()); }
    neg() {
      return new LinearExpression(this.constant.neg(), Object.fromEntries(Object.entries(this.coefficients).map(([variable, coefficient]) => [variable, coefficient.neg()])));
    }
    mul(value) {
      if (this.hasVariables() && value.hasVariables()) {
        throw theoryError(
          "L'equació deixa de ser lineal perquè es multipliquen dues expressions amb incògnites.",
          "En una equació lineal, les incògnites només poden aparèixer elevades a 1 i no es poden multiplicar entre elles.",
        );
      }
      const coefficients = {};
      Object.entries(this.coefficients).forEach(([variable, coefficient]) => {
        coefficients[variable] = coefficient.mul(value.constant);
      });
      Object.entries(value.coefficients).forEach(([variable, coefficient]) => {
        coefficients[variable] = (coefficients[variable] || ZERO).add(coefficient.mul(this.constant));
      });
      return new LinearExpression(this.constant.mul(value.constant), coefficients);
    }
    hasVariables() { return Object.keys(this.coefficients).length > 0; }
    coefficient(variable) { return this.coefficients[variable] || ZERO; }
    toTex() {
      let expression = "";
      Object.keys(this.coefficients).sort().forEach((variable) => {
        expression += variableTerm(this.coefficients[variable], variable, expression === "");
      });
      if (!this.constant.isZero() || expression === "") {
        const constantTex = this.constant.toTex();
        if (expression === "") expression = constantTex;
        else expression += this.constant.n < 0n ? constantTex : `+${constantTex}`;
      }
      return expression;
    }
  }

  function parseDecimal(raw) {
    let source = String(raw).trim().replace(",", ".");
    if (!source) throw new Error("Cal omplir totes les caselles necessàries.");
    let sign = 1n;
    if (source.startsWith("+")) source = source.slice(1);
    else if (source.startsWith("-")) { sign = -1n; source = source.slice(1); }
    if (!/^\d+(?:\.\d+)?$/.test(source)) throw new Error(`El valor «${raw}» no és vàlid.`);
    const [integer, decimal] = source.split(".");
    if (decimal === undefined) return new Fraction(sign * BigInt(integer));
    const denominator = 10n ** BigInt(decimal.length);
    return new Fraction(sign * (BigInt(integer) * denominator + BigInt(decimal)), denominator);
  }

  function parseFraction(raw) {
    const source = String(raw).trim();
    const parts = source.split("/");
    if (parts.length === 1) return parseDecimal(source);
    if (parts.length !== 2) throw new Error(`La fracció «${raw}» no és vàlida.`);
    return parseDecimal(parts[0]).div(parseDecimal(parts[1]));
  }

  function matrixAdd(left, right) {
    return left.map((row, i) => row.map((value, j) => value.add(right[i][j])));
  }

  function matrixSub(left, right) {
    return left.map((row, i) => row.map((value, j) => value.sub(right[i][j])));
  }

  function matrixScale(scalar, matrix) {
    return matrix.map((row) => row.map((value) => scalar.mul(value)));
  }

  function matrixMul(left, right) {
    return left.map((row) => right[0].map((_, column) => row.reduce((sum, value, index) => sum.add(value.mul(right[index][column])), ZERO)));
  }

  function matrixTranspose(matrix) {
    return matrix[0].map((_, column) => matrix.map((row) => row[column]));
  }

  function variableTerm(coefficient, variable, first) {
    if (coefficient.isZero()) return "";
    const negative = coefficient.n < 0n;
    const absolute = negative ? coefficient.neg() : coefficient;
    const scalar = absolute.isOne() ? "" : absolute.toTex();
    const body = `${scalar}${variable}`;
    if (first) return negative ? `-${body}` : body;
    return negative ? `-${body}` : `+${body}`;
  }

  function twoVariableExpression(firstCoefficient, firstVariable, secondCoefficient, secondVariable) {
    let expression = variableTerm(firstCoefficient, firstVariable, true);
    expression += variableTerm(secondCoefficient, secondVariable, expression === "");
    return expression || "0";
  }

  function zeroMatrix(matrix) {
    return matrix.every((row) => row.every((value) => value.isZero()));
  }

  function matrixTex(matrix) {
    return `\\begin{pmatrix}${matrix.map((row) => row.map((value) => value.toTex()).join("&")).join("\\\\")}\\end{pmatrix}`;
  }

  function augmentedTex(matrix, size) {
    const columns = `${"c".repeat(size)}|${"c".repeat(size)}`;
    return `\\left(\\begin{array}{${columns}}${matrix.map((row) => row.map((value) => value.toTex()).join("&")).join("\\\\")}\\end{array}\\right)`;
  }

  function formula(tex) {
    return `<div class="fa-formula">\\[${tex}\\]</div>`;
  }

  function step(title, explanation, tex, classification) {
    return { title, explanation, tex, classification: classification || "" };
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

  function readMatrix(root, prefix) {
    return [1, 2].map((row) => [1, 2].map((column) => parseFraction(root.querySelector(`#${prefix}${row}${column}`).value)));
  }

  function matrixOrder(matrix) {
    return { rows: matrix.length, columns: matrix[0].length };
  }

  function identityMatrix(size) {
    return Array.from({ length: size }, (_, row) => Array.from({ length: size }, (_, column) => row === column ? ONE : ZERO));
  }

  function parseMatrixLiteralWith(literal, parseEntry) {
    const inner = literal.slice(1, -1).trim();
    const rows = [];
    const rowPattern = /\[([^\[\]]*)\]/g;
    let match;
    let consumed = "";
    while ((match = rowPattern.exec(inner)) !== null) {
      consumed += match[0];
      const values = match[1].trim().split(/\s+/).filter(Boolean);
      if (values.length === 0) throw new Error("Hi ha una fila buida dins la matriu.");
      rows.push(values.map(parseEntry));
    }
    if (rows.length === 0 || inner.replace(/\s/g, "") !== consumed.replace(/\s/g, "")) {
      throw new Error("La matriu no està ben escrita. Escriu-la, per exemple, com [[1 2][3 4]].");
    }
    const width = rows[0].length;
    if (!rows.every((row) => row.length === width)) {
      throw new Error("Totes les files d'una matriu han de tenir el mateix nombre d'elements.");
    }
    return rows;
  }

  function parseMatrixLiteral(literal) {
    return parseMatrixLiteralWith(literal, parseFraction);
  }

  function parseLinearEntry(raw) {
    const source = String(raw).trim().replace(/−/g, "-");
    if (!source) throw new Error("Hi ha un element buit dins la matriu.");
    const terms = source.match(/[+-]?[^+-]+/g);
    if (!terms || terms.join("") !== source) throw new Error(`L'element «${raw}» no és una expressió lineal vàlida.`);
    let result = LinearExpression.fromFraction(ZERO);
    const numberPattern = "\\d+(?:[.,]\\d+)?(?:/\\d+(?:[.,]\\d+)?)?";
    terms.forEach((term) => {
      const variableMatch = term.match(new RegExp(`^([+-]?)(?:(${numberPattern})\\*?)?([a-zA-Z])$`));
      if (variableMatch) {
        if (variableMatch[3] !== variableMatch[3].toLowerCase()) {
          throw theoryError(
            `La lletra «${variableMatch[3]}» no pot representar un element de la matriu.`,
            "Per conveni, les lletres majúscules designen matrius i les minúscules designen els seus elements o coeficients.",
          );
        }
        const sign = variableMatch[1] === "-" ? new Fraction(-1n) : ONE;
        const magnitude = variableMatch[2] ? parseFraction(variableMatch[2]) : ONE;
        const variable = variableMatch[3];
        result = result.add(new LinearExpression(ZERO, { [variable]: sign.mul(magnitude) }));
        return;
      }
      try {
        result = result.add(LinearExpression.fromFraction(parseFraction(term)));
      } catch (_error) {
        throw new Error(`L'element «${raw}» no és una expressió lineal vàlida. Pots escriure, per exemple, x, -y o 2x+1.`);
      }
    });
    return result;
  }

  function parseLinearMatrixLiteral(literal) {
    return parseMatrixLiteralWith(literal, parseLinearEntry);
  }

  function parseMatrixExpression(raw, matrixParser, allowVariableScalars) {
    const source = String(raw).trim().replace(/−/g, "-").replace(/[·×]/g, "*");
    if (!source) throw new Error("Escriu una operació matricial.");
    const matrices = [];
    let normalized = "";

    for (let index = 0; index < source.length;) {
      if (source[index] === "[" && source.slice(index).match(/^\[\s*\[/)) {
        const start = index;
        let depth = 0;
        do {
          if (source[index] === "[") depth += 1;
          else if (source[index] === "]") depth -= 1;
          index += 1;
        } while (index < source.length && depth > 0);
        if (depth !== 0) throw new Error("Falta tancar algun claudàtor de la matriu.");
        const literal = source.slice(start, index);
        matrices.push((matrixParser || parseMatrixLiteral)(literal));
        normalized += `@${matrices.length - 1}`;
      } else {
        normalized += source[index];
        index += 1;
      }
    }

    normalized = normalized.trim();
    if (matrices.length === 0) throw new Error("No s'ha trobat cap matriu. Utilitza el format [[1 2][3 4]].");

    const tokens = [];
    for (let index = 0; index < normalized.length;) {
      if (/\s/.test(normalized[index])) { index += 1; continue; }
      const rest = normalized.slice(index);
      let match = rest.match(/^@(\d+)/);
      if (match) {
        tokens.push({ type: "matrix", value: Number(match[1]) });
        index += match[0].length;
        continue;
      }
      match = rest.match(/^\d+(?:[.,]\d+)?(?:\/\d+(?:[.,]\d+)?)?/);
      if (match) {
        tokens.push({ type: "number", value: parseFraction(match[0]), raw: match[0] });
        index += match[0].length;
        continue;
      }
      if ("+-*()^".includes(normalized[index])) {
        tokens.push({ type: normalized[index] });
        index += 1;
        continue;
      }
      if (normalized[index].toLowerCase() === "t" && tokens.length > 0 && tokens[tokens.length - 1].type === "^") {
        tokens.push({ type: "T" });
        index += 1;
        continue;
      }
      if (/[A-Z]/.test(normalized[index])) {
        throw theoryError(
          `La lletra «${normalized[index]}» representa una matriu, però no se n'han indicat els elements.`,
          "Una majúscula com A o B designa tota una matriu. Per calcular-ne una operació, cal introduir els seus elements amb el format [[1 2][3 4]].",
        );
      }
      if (/[a-z]/.test(normalized[index])) {
        if (allowVariableScalars) {
          tokens.push({ type: "variable", value: normalized[index] });
          index += 1;
          continue;
        }
        throw theoryError(
          `La lletra «${normalized[index]}» representa un coeficient numèric, però l'expressió no permet calcular-ne el valor.`,
          "Una minúscula pot aparèixer dins d'una matriu o fora multiplicant-la. Si és desconeguda, cal escriure una igualtat matricial amb el signe =.",
        );
      }
      throw new Error(`No s'ha reconegut el símbol «${normalized[index]}». Utilitza +, -, *, ^t, ^-1 o parèntesis.`);
    }

    let position = 0;
    function peek(type) { return tokens[position] && tokens[position].type === type; }
    function take(type) {
      if (!peek(type)) throw new Error("L'expressió està incompleta o els parèntesis no estan ben col·locats.");
      const token = tokens[position];
      position += 1;
      return token;
    }
    function parsePrimary() {
      if (peek("matrix")) {
        const token = take("matrix");
        return { type: "matrix", value: matrices[token.value] };
      }
      if (peek("variable")) return { type: "variable", value: take("variable").value };
      if (peek("number")) return { type: "scalar", value: take("number").value };
      if (peek("(")) {
        take("(");
        const node = parseAdditive();
        take(")");
        return node;
      }
      throw new Error("Falta una matriu, un nombre o un parèntesi dins l'expressió.");
    }
    function parseUnary() {
      if (peek("+")) { take("+"); return parseUnary(); }
      if (peek("-")) { take("-"); return { type: "unary", operation: "negate", child: parseUnary() }; }
      return parsePostfix();
    }
    function parsePostfix() {
      let node = parsePrimary();
      while (peek("^")) {
        take("^");
        if (peek("T")) {
          take("T");
          node = { type: "postfix", operation: "transpose", child: node };
          continue;
        }
        let negative = false;
        if (peek("-")) { take("-"); negative = true; }
        const exponentToken = take("number");
        if (!exponentToken.value.isInteger()) throw new Error("L'exponent d'una matriu ha de ser un nombre enter.");
        const exponent = Number(exponentToken.value.n);
        if (negative) {
          if (exponent !== 1) throw new Error("En aquesta calculadora, l'única potència negativa admesa és -1, que representa la matriu inversa.");
          node = { type: "postfix", operation: "inverse", child: node };
        } else {
          if (exponent > 10) throw new Error("Per mostrar el procediment pas a pas, la potència ha de ser com a màxim 10.");
          node = { type: "postfix", operation: "power", exponent, child: node };
        }
      }
      return node;
    }
    function parseMultiplicative() {
      let node = parseUnary();
      while (peek("*")) {
        take("*");
        node = { type: "binary", operation: "multiply", left: node, right: parseUnary() };
      }
      return node;
    }
    function parseAdditive() {
      let node = parseMultiplicative();
      while (peek("+") || peek("-")) {
        const operation = take(tokens[position].type).type === "+" ? "add" : "subtract";
        node = { type: "binary", operation, left: node, right: parseMultiplicative() };
      }
      return node;
    }

    const tree = parseAdditive();
    if (position !== tokens.length) throw new Error("No s'ha pogut interpretar tota l'expressió. Revisa els operadors i els parèntesis.");
    return tree;
  }

  function multiplicationDevelopment(left, right) {
    const cells = [];
    for (let i = 0; i < left.length; i += 1) {
      const row = [];
      for (let j = 0; j < right[0].length; j += 1) {
        row.push(left[i].map((value, index) => `${calculationNumberTex(value)}\\cdot${calculationNumberTex(right[index][j])}`).join("+"));
      }
      cells.push(row);
    }
    return `\\begin{pmatrix}${cells.map((row) => row.join("&")).join("\\\\")}\\end{pmatrix}`;
  }

  function calculationNumberTex(value) {
    return value.n < 0n ? `\\left(${value.toTex()}\\right)` : value.toTex();
  }

  function elementwiseDevelopment(left, right, symbol) {
    return `\\begin{pmatrix}${left.map((row, i) => row.map((value, j) => `${calculationNumberTex(value)}${symbol}${calculationNumberTex(right[i][j])}`).join("&")).join("\\\\")}\\end{pmatrix}`;
  }

  function scalarDevelopment(scalar, matrix) {
    return `\\begin{pmatrix}${matrix.map((row) => row.map((value) => `${calculationNumberTex(scalar)}\\cdot${calculationNumberTex(value)}`).join("&")).join("\\\\")}\\end{pmatrix}`;
  }

  function inverseGauss(source, symbol) {
    const size = source.length;
    if (!source.every((row) => row.length === size)) {
      throw theoryError(
        "No es pot calcular la inversa perquè la matriu no és quadrada.",
        "La inversa A^{-1} només es defineix per a una matriu quadrada, ja que ha de complir AA^{-1}=A^{-1}A=I del mateix ordre.",
      );
    }
    const augmented = source.map((row, i) => row.concat(Array.from({ length: size }, (_, j) => i === j ? ONE : ZERO)));
    const steps = [step(`Preparem la inversa de ${symbol}`, "Escrivim la matriu al costat de la identitat i apliquem Gauss-Jordan.", `${symbol}\\mid I=${augmentedTex(augmented, size)}`)];

    for (let column = 0; column < size; column += 1) {
      let pivotRow = column;
      while (pivotRow < size && augmented[pivotRow][column].isZero()) pivotRow += 1;
      if (pivotRow === size) {
        throw theoryError(
          `La matriu ${symbol.replace(/\\/g, "")} no és invertible perquè no es pot transformar en la identitat.`,
          "Una matriu quadrada té inversa només si, mitjançant Gauss-Jordan, la part esquerra de (A|I) es pot convertir en la identitat.",
        );
      }
      if (pivotRow !== column) {
        const before = augmented.map((row) => row.slice());
        [augmented[pivotRow], augmented[column]] = [augmented[column], augmented[pivotRow]];
        steps.push(step("Permutem dues files", "Col·loquem un pivot no nul.", `${augmentedTex(before, size)}\\xrightarrow{F_{${column + 1}}\\leftrightarrow F_{${pivotRow + 1}}}${augmentedTex(augmented, size)}`));
      }
      const pivot = augmented[column][column];
      if (!pivot.isOne()) {
        const before = augmented.map((row) => row.slice());
        augmented[column] = augmented[column].map((value) => value.div(pivot));
        steps.push(step("Fem que el pivot sigui 1", "Dividim tota la fila pel pivot.", `${augmentedTex(before, size)}\\xrightarrow{F_{${column + 1}}=\\frac{1}{${pivot.toTex()}}F_{${column + 1}}}${augmentedTex(augmented, size)}`));
      }
      for (let row = 0; row < size; row += 1) {
        if (row === column || augmented[row][column].isZero()) continue;
        const before = augmented.map((currentRow) => currentRow.slice());
        const factor = augmented[row][column];
        augmented[row] = augmented[row].map((value, index) => value.sub(factor.mul(augmented[column][index])));
        const operator = factor.n < 0n ? "+" : "-";
        const absolute = factor.n < 0n ? factor.neg() : factor;
        const coefficient = absolute.isOne() ? "" : absolute.toTex();
        steps.push(step("Anul·lem l'altre element de la columna", "Continuem Gauss-Jordan fins a obtenir la identitat a l'esquerra.", `${augmentedTex(before, size)}\\xrightarrow{F_{${row + 1}}=F_{${row + 1}}${operator}${coefficient}F_{${column + 1}}}${augmentedTex(augmented, size)}`));
      }
    }
    const inverse = augmented.map((row) => row.slice(size));
    steps.push(step("Llegim la matriu inversa", "Quan a l'esquerra hi ha la identitat, a la dreta hi ha la inversa.", `${symbol}^{-1}=${matrixTex(inverse)}`));
    return { inverse, steps };
  }

  function operationNodeTex(node, parentPrecedence) {
    const parent = parentPrecedence || 0;
    if (node.type === "matrix") return matrixTex(node.value);
    if (node.type === "variable") return node.value;
    if (node.type === "scalar") return node.value.toTex();
    if (node.type === "unary") {
      const tex = `-${operationNodeTex(node.child, 3)}`;
      return parent > 3 ? `\\left(${tex}\\right)` : tex;
    }
    if (node.type === "postfix") {
      const exponent = node.operation === "transpose" ? "t" : node.operation === "inverse" ? "-1" : node.exponent;
      const child = operationNodeTex(node.child);
      const base = node.child.type === "matrix" || node.child.type === "scalar" ? child : `\\left(${child}\\right)`;
      return `${base}^{${exponent}}`;
    }
    const precedence = node.operation === "multiply" ? 2 : 1;
    const symbol = node.operation === "add" ? "+" : node.operation === "subtract" ? "-" : "\\cdot";
    const left = operationNodeTex(node.left, precedence);
    let right = operationNodeTex(node.right, precedence);
    if (node.operation === "subtract" && node.right.type === "binary" && node.right.operation !== "multiply") {
      right = `\\left(${right}\\right)`;
    }
    const tex = `${left}${symbol}${right}`;
    return precedence < parent ? `\\left(${tex}\\right)` : tex;
  }

  function evaluatedTex(result) {
    return result.type === "matrix" ? matrixTex(result.value) : result.value.toTex();
  }

  function evaluateOperationNode(node, steps) {
    if (node.type === "matrix" || node.type === "scalar") return { type: node.type, value: node.value };

    if (node.type === "unary") {
      const child = evaluateOperationNode(node.child, steps);
      const value = child.type === "matrix" ? matrixScale(new Fraction(-1n), child.value) : child.value.neg();
      const result = { type: child.type, value };
      steps.push(step("Apliquem el signe", "Canviem el signe de tots els elements.", `${operationNodeTex(node)}=${evaluatedTex(result)}`));
      return result;
    }

    if (node.type === "postfix") {
      const child = evaluateOperationNode(node.child, steps);
      if (child.type !== "matrix") {
        throw theoryError(
          "Aquesta operació no es pot aplicar a un nombre.",
          "La transposició, les potències matricials i la inversa són operacions definides sobre matrius.",
        );
      }
      const order = matrixOrder(child.value);
      if (node.operation === "transpose") {
        const result = { type: "matrix", value: matrixTranspose(child.value) };
        steps.push(step("Calculem la transposada", `Intercanviem files i columnes. L'ordre passa de ${order.rows}×${order.columns} a ${order.columns}×${order.rows}.`, `${operationNodeTex(node)}=${evaluatedTex(result)}`));
        return result;
      }
      if (order.rows !== order.columns) {
        const operationName = node.operation === "inverse" ? "la inversa" : "la potència";
        throw theoryError(
          `No es pot calcular ${operationName}: la matriu és d'ordre ${order.rows}×${order.columns} i no és quadrada.`,
          node.operation === "inverse"
            ? "Només una matriu quadrada pot tenir inversa, perquè el producte amb la seva inversa ha de donar una matriu identitat del mateix ordre."
            : "Per formar A^n cal multiplicar A per ella mateixa; això només és possible si el nombre de files coincideix amb el de columnes.",
        );
      }
      if (node.operation === "inverse") {
        steps.push(step("Identifiquem la matriu que cal invertir", "Calculem la inversa mitjançant el mètode de Gauss-Jordan.", `M=${matrixTex(child.value)}`));
        const inverseData = inverseGauss(child.value, "M");
        steps.push(...inverseData.steps);
        return { type: "matrix", value: inverseData.inverse };
      }

      let value;
      if (node.exponent === 0) {
        value = identityMatrix(order.rows);
        steps.push(step("Calculem la potència zero", "La potència zero d'una matriu quadrada és la identitat del mateix ordre.", `M^0=I=${matrixTex(value)}`));
      } else {
        value = child.value;
        if (node.exponent === 1) steps.push(step("Calculem la potència primera", "Una matriu elevada a 1 és ella mateixa.", `M^1=${matrixTex(value)}`));
        for (let exponent = 2; exponent <= node.exponent; exponent += 1) {
          const before = value;
          value = matrixMul(value, child.value);
          steps.push(step(`Calculem la potència ${exponent}`, "Multipliquem la potència anterior una vegada més per la matriu.", `M^{${exponent}}=M^{${exponent - 1}}\\cdot M=${matrixTex(before)}${matrixTex(child.value)}=${matrixTex(value)}`));
        }
      }
      return { type: "matrix", value };
    }

    const left = evaluateOperationNode(node.left, steps);
    const right = evaluateOperationNode(node.right, steps);
    if (node.operation === "add" || node.operation === "subtract") {
      const symbol = node.operation === "add" ? "+" : "-";
      if (left.type !== right.type) {
        throw theoryError(
          "No es pot sumar o restar una matriu i un nombre.",
          "La suma i la resta de matrius es fan element a element; per això els dos operands han de ser matrius del mateix ordre.",
        );
      }
      if (left.type === "scalar") {
        const value = node.operation === "add" ? left.value.add(right.value) : left.value.sub(right.value);
        const result = { type: "scalar", value };
        steps.push(step("Fem l'operació numèrica", "Calculem primer aquesta operació segons la prioritat establerta.", `${evaluatedTex(left)}${symbol}${evaluatedTex(right)}=${evaluatedTex(result)}`));
        return result;
      }
      const leftOrder = matrixOrder(left.value);
      const rightOrder = matrixOrder(right.value);
      if (leftOrder.rows !== rightOrder.rows || leftOrder.columns !== rightOrder.columns) {
        throw theoryError(
          `No es poden ${node.operation === "add" ? "sumar" : "restar"} les matrius: una és d'ordre ${leftOrder.rows}×${leftOrder.columns} i l'altra és d'ordre ${rightOrder.rows}×${rightOrder.columns}.`,
          "Per sumar o restar matrius, han de tenir el mateix ordre perquè s'operen els elements que ocupen la mateixa posició.",
        );
      }
      const value = node.operation === "add" ? matrixAdd(left.value, right.value) : matrixSub(left.value, right.value);
      const result = { type: "matrix", value };
      steps.push(step("Operem element a element", `Les dues matrius són d'ordre ${leftOrder.rows}×${leftOrder.columns}; l'operació és possible.`, `${evaluatedTex(left)}${symbol}${evaluatedTex(right)}=${elementwiseDevelopment(left.value, right.value, symbol)}=${evaluatedTex(result)}`));
      return result;
    }

    if (left.type === "scalar" && right.type === "scalar") {
      const result = { type: "scalar", value: left.value.mul(right.value) };
      steps.push(step("Fem el producte numèric", "Calculem aquest factor abans de continuar.", `${evaluatedTex(left)}\\cdot${evaluatedTex(right)}=${evaluatedTex(result)}`));
      return result;
    }
    if (left.type === "scalar" || right.type === "scalar") {
      const scalar = left.type === "scalar" ? left.value : right.value;
      const matrix = left.type === "matrix" ? left.value : right.value;
      const result = { type: "matrix", value: matrixScale(scalar, matrix) };
      steps.push(step("Multipliquem la matriu pel nombre", "Multipliquem cadascun dels elements de la matriu pel mateix nombre.", `${evaluatedTex(left)}\\cdot${evaluatedTex(right)}=${scalarDevelopment(scalar, matrix)}=${evaluatedTex(result)}`));
      return result;
    }

    const leftOrder = matrixOrder(left.value);
    const rightOrder = matrixOrder(right.value);
    if (leftOrder.columns !== rightOrder.rows) {
      throw theoryError(
        `No es poden multiplicar les matrius: la primera té ${leftOrder.columns} columnes i la segona té ${rightOrder.rows} files.`,
        "El producte AB només existeix si el nombre de columnes d'A coincideix amb el nombre de files de B, perquè cada element s'obté multiplicant una fila per una columna.",
      );
    }
    const result = { type: "matrix", value: matrixMul(left.value, right.value) };
    steps.push(step("Multipliquem files per columnes", `El producte d'una matriu ${leftOrder.rows}×${leftOrder.columns} per una matriu ${rightOrder.rows}×${rightOrder.columns} dona una matriu ${leftOrder.rows}×${rightOrder.columns}.`, `${evaluatedTex(left)}\\cdot${evaluatedTex(right)}=${multiplicationDevelopment(left.value, right.value)}=${evaluatedTex(result)}`));
    return result;
  }

  function linearMatrixScale(scalar, matrix) {
    return matrix.map((row) => row.map((value) => scalar.mul(value)));
  }

  function linearMatrixMul(left, right) {
    return left.map((row) => right[0].map((_, column) => row.reduce(
      (sum, value, index) => sum.add(value.mul(right[index][column])),
      LinearExpression.fromFraction(ZERO),
    )));
  }

  function linearCalculationTex(value) {
    const tex = value.toTex();
    return tex.startsWith("-") || /[+-].+/.test(tex.slice(1)) ? `\\left(${tex}\\right)` : tex;
  }

  function linearMultiplicationDevelopment(left, right) {
    const cells = left.map((row) => right[0].map((_, column) => row.map(
      (value, index) => `${linearCalculationTex(value)}\\cdot ${linearCalculationTex(right[index][column])}`,
    ).join("+")));
    return `\\begin{pmatrix}${cells.map((row) => row.join("&")).join("\\\\")}\\end{pmatrix}`;
  }

  function linearEvaluatedTex(result) {
    return result.type === "matrix" ? matrixTex(result.value) : result.value.toTex();
  }

  function evaluateLinearOperationNode(node, steps) {
    if (node.type === "matrix") return { type: "matrix", value: node.value };
    if (node.type === "variable") return { type: "scalar", value: new LinearExpression(ZERO, { [node.value]: ONE }) };
    if (node.type === "scalar") return { type: "scalar", value: LinearExpression.fromFraction(node.value) };

    if (node.type === "unary") {
      const child = evaluateLinearOperationNode(node.child, steps);
      const value = child.type === "matrix"
        ? linearMatrixScale(LinearExpression.fromFraction(new Fraction(-1n)), child.value)
        : child.value.neg();
      const result = { type: child.type, value };
      steps.push(step("Apliquem el signe", "Canviem el signe de tots els elements.", `${operationNodeTex(node)}=${linearEvaluatedTex(result)}`));
      return result;
    }

    if (node.type === "postfix") {
      const child = evaluateLinearOperationNode(node.child, steps);
      if (child.type !== "matrix") {
        throw theoryError(
          "La transposició no es pot aplicar a un nombre.",
          "Transposar una matriu consisteix a intercanviar-ne les files i les columnes; per tant, l'operand ha de ser una matriu.",
        );
      }
      if (node.operation !== "transpose") {
        throw new Error("En una igualtat amb incògnites, utilitza sumes, restes, productes i transposicions. Les potències i les inverses es poden calcular amb matrius numèriques.");
      }
      const order = matrixOrder(child.value);
      const result = { type: "matrix", value: matrixTranspose(child.value) };
      steps.push(step("Calculem la transposada", `Intercanviem files i columnes. L'ordre passa de ${order.rows}×${order.columns} a ${order.columns}×${order.rows}.`, `${operationNodeTex(node)}=${linearEvaluatedTex(result)}`));
      return result;
    }

    const left = evaluateLinearOperationNode(node.left, steps);
    const right = evaluateLinearOperationNode(node.right, steps);
    if (node.operation === "add" || node.operation === "subtract") {
      const symbol = node.operation === "add" ? "+" : "-";
      const operation = node.operation === "add" ? (a, b) => a.add(b) : (a, b) => a.sub(b);
      if (left.type !== right.type) {
        throw theoryError(
          "No es pot sumar o restar una matriu i un nombre.",
          "La suma i la resta de matrius es fan element a element; per això els dos operands han de ser matrius del mateix ordre.",
        );
      }
      if (left.type === "scalar") {
        const result = { type: "scalar", value: operation(left.value, right.value) };
        steps.push(step("Simplifiquem l'expressió", "Operem els termes semblants.", `${linearEvaluatedTex(left)}${symbol}${linearEvaluatedTex(right)}=${linearEvaluatedTex(result)}`));
        return result;
      }
      const leftOrder = matrixOrder(left.value);
      const rightOrder = matrixOrder(right.value);
      if (leftOrder.rows !== rightOrder.rows || leftOrder.columns !== rightOrder.columns) {
        throw theoryError(
          `No es poden ${node.operation === "add" ? "sumar" : "restar"} les matrius: una és d'ordre ${leftOrder.rows}×${leftOrder.columns} i l'altra és d'ordre ${rightOrder.rows}×${rightOrder.columns}.`,
          "Per sumar o restar matrius, han de tenir el mateix ordre perquè s'operen els elements que ocupen la mateixa posició.",
        );
      }
      const value = left.value.map((row, i) => row.map((entry, j) => operation(entry, right.value[i][j])));
      const result = { type: "matrix", value };
      steps.push(step("Operem element a element", "Les dues matrius tenen el mateix ordre.", `${linearEvaluatedTex(left)}${symbol}${linearEvaluatedTex(right)}=${linearEvaluatedTex(result)}`));
      return result;
    }

    if (left.type === "scalar" && right.type === "scalar") {
      const result = { type: "scalar", value: left.value.mul(right.value) };
      steps.push(step("Fem el producte", "Multipliquem els factors.", `${linearEvaluatedTex(left)}\\cdot${linearEvaluatedTex(right)}=${linearEvaluatedTex(result)}`));
      return result;
    }
    if (left.type === "scalar" || right.type === "scalar") {
      const scalar = left.type === "scalar" ? left.value : right.value;
      const matrix = left.type === "matrix" ? left.value : right.value;
      const result = { type: "matrix", value: linearMatrixScale(scalar, matrix) };
      steps.push(step("Multipliquem la matriu pel nombre", "Multipliquem cadascun dels elements pel mateix factor.", `${linearEvaluatedTex(left)}\\cdot${linearEvaluatedTex(right)}=${linearEvaluatedTex(result)}`));
      return result;
    }

    const leftOrder = matrixOrder(left.value);
    const rightOrder = matrixOrder(right.value);
    if (leftOrder.columns !== rightOrder.rows) {
      throw theoryError(
        `No es poden multiplicar les matrius: la primera té ${leftOrder.columns} columnes i la segona té ${rightOrder.rows} files.`,
        "El producte AB només existeix si el nombre de columnes d'A coincideix amb el nombre de files de B, perquè cada element s'obté multiplicant una fila per una columna.",
      );
    }
    const result = { type: "matrix", value: linearMatrixMul(left.value, right.value) };
    steps.push(step("Multipliquem files per columnes", `El resultat és una matriu ${leftOrder.rows}×${rightOrder.columns}.`, `${linearEvaluatedTex(left)}\\cdot${linearEvaluatedTex(right)}=${linearMultiplicationDevelopment(left.value, right.value)}=${linearEvaluatedTex(result)}`));
    return result;
  }

  function solveLinearEquations(equations, variables) {
    const rows = equations.map(({ left, right }) => [
      ...variables.map((variable) => left.coefficient(variable).sub(right.coefficient(variable))),
      right.constant.sub(left.constant),
    ]);
    let pivotRow = 0;
    const pivotColumns = [];
    for (let column = 0; column < variables.length && pivotRow < rows.length; column += 1) {
      let selected = pivotRow;
      while (selected < rows.length && rows[selected][column].isZero()) selected += 1;
      if (selected === rows.length) continue;
      [rows[pivotRow], rows[selected]] = [rows[selected], rows[pivotRow]];
      const pivot = rows[pivotRow][column];
      rows[pivotRow] = rows[pivotRow].map((value) => value.div(pivot));
      for (let row = 0; row < rows.length; row += 1) {
        if (row === pivotRow || rows[row][column].isZero()) continue;
        const factor = rows[row][column];
        rows[row] = rows[row].map((value, index) => value.sub(factor.mul(rows[pivotRow][index])));
      }
      pivotColumns.push(column);
      pivotRow += 1;
    }
    const inconsistent = rows.some((row) => row.slice(0, variables.length).every((value) => value.isZero()) && !row[variables.length].isZero());
    if (inconsistent) return { classification: "SI", solutions: {} };
    if (pivotColumns.length < variables.length) return { classification: "SCI", solutions: {} };
    const solutions = {};
    pivotColumns.forEach((column, row) => { solutions[variables[column]] = rows[row][variables.length]; });
    return { classification: "SCD", solutions };
  }

  function analyzeLinearMatrixEquality(expression) {
    const parts = String(expression).split("=");
    if (parts.length !== 2 || !parts[0].trim() || !parts[1].trim()) {
      throw new Error("Escriu una sola igualtat matricial, amb un membre a cada costat del signe =.");
    }
    const leftTree = parseMatrixExpression(parts[0], parseLinearMatrixLiteral, true);
    const rightTree = parseMatrixExpression(parts[1], parseLinearMatrixLiteral, true);
    const steps = [step("Enunciat", "Aquesta és la igualtat matricial que hem de resoldre.", `${operationNodeTex(leftTree)}=${operationNodeTex(rightTree)}`)];
    const left = evaluateLinearOperationNode(leftTree, steps);
    const right = evaluateLinearOperationNode(rightTree, steps);
    if (left.type !== "matrix" || right.type !== "matrix") {
      throw theoryError(
        "Els dos membres de la igualtat han de donar una matriu.",
        "Una igualtat matricial compara dues matrius: han de tenir el mateix ordre i han de coincidir tots els elements corresponents.",
      );
    }
    const leftOrder = matrixOrder(left.value);
    const rightOrder = matrixOrder(right.value);
    if (leftOrder.rows !== rightOrder.rows || leftOrder.columns !== rightOrder.columns) {
      throw theoryError(
        `No es poden igualar les matrius: una és d'ordre ${leftOrder.rows}×${leftOrder.columns} i l'altra és d'ordre ${rightOrder.rows}×${rightOrder.columns}.`,
        "Dues matrius només poden ser iguals si tenen el mateix ordre i coincideixen tots els elements que ocupen la mateixa posició.",
      );
    }

    const equations = [];
    const equationKeys = new Set();
    let contradiction = false;
    left.value.forEach((row, i) => row.forEach((entry, j) => {
      const other = right.value[i][j];
      const difference = entry.sub(other);
      if (difference.hasVariables()) {
        const key = difference.toTex();
        if (!equationKeys.has(key)) {
          equationKeys.add(key);
          equations.push({ left: entry, right: other });
        }
      }
      else if (!difference.constant.isZero()) contradiction = true;
    }));
    const variables = [...new Set(equations.flatMap(({ left, right }) => [
      ...Object.keys(left.coefficients), ...Object.keys(right.coefficients),
    ]))].sort();
    if (variables.length === 0) {
      const conclusion = contradiction ? "La igualtat és falsa." : "La igualtat es compleix.";
      steps.push(step("Comprovem els elements corresponents", conclusion, contradiction ? "\\boxed{\\text{Igualtat incompatible}}" : "\\boxed{\\text{Igualtat certa}}"));
      return { title: "Igualtat matricial", steps };
    }

    const equationsTex = equations.map(({ left: entry, right: other }) => `${entry.toTex()}=${other.toTex()}`).join("\\\\");
    steps.push(step("Igualem els elements corresponents", "Només conservem les posicions que proporcionen equacions amb incògnites.", `\\begin{cases}${equationsTex}\\end{cases}`));
    if (contradiction) {
      steps.push(step("Classifiquem el sistema", "Una altra posició de les matrius produeix una igualtat numèrica falsa.", "\\boxed{\\text{Sistema incompatible (SI)}}", "SI"));
      return { title: "Elements desconeguts en una igualtat matricial", steps };
    }
    const solution = solveLinearEquations(equations, variables);
    if (solution.classification === "SI") {
      steps.push(step("Resolem el sistema", "Les equacions obtingudes són contradictòries.", "\\boxed{\\text{Sistema incompatible (SI)}}", "SI"));
    } else if (solution.classification === "SCI") {
      steps.push(step("Resolem el sistema", "Les equacions no determinen un únic valor per a totes les incògnites.", "\\boxed{\\text{Sistema compatible indeterminat (SCI)}}", "SCI"));
    } else {
      const resultTex = variables.map((variable) => `${variable}=${solution.solutions[variable].toTex()}`).join("\\qquad ");
      steps.push(step("Resolem el sistema", "La solució determina els elements desconeguts de la matriu.", `\\boxed{${resultTex}}`, "SCD"));
    }
    return { title: "Elements desconeguts en una igualtat matricial", steps };
  }

  function analyzeOperation(expression) {
    if (String(expression).includes("=")) return analyzeLinearMatrixEquality(expression);
    if (/[a-z]/.test(String(expression).replace(/\^[tT]/g, ""))) {
      const symbolicTree = parseMatrixExpression(expression, parseLinearMatrixLiteral, true);
      const symbolicSteps = [step("Enunciat", "Aquesta és l'operació amb coeficients que hem de simplificar.", operationNodeTex(symbolicTree))];
      const symbolicResult = evaluateLinearOperationNode(symbolicTree, symbolicSteps);
      symbolicSteps.push(step("Resultat", "Hem operat els coeficients i els elements de la matriu respectant l'ordre dels factors.", `\\boxed{${linearEvaluatedTex(symbolicResult)}}`));
      return { title: "Operació amb coeficients i matrius", steps: symbolicSteps };
    }
    const tree = parseMatrixExpression(expression);
    const steps = [step("Enunciat", "Aquesta és l'operació completa que hem de calcular.", operationNodeTex(tree))];
    const result = evaluateOperationNode(tree, steps);
    steps.push(step("Resultat", "Hem respectat la prioritat de les operacions i hem completat el càlcul.", `\\boxed{${evaluatedTex(result)}}`));
    return { title: "Operació amb matrius", steps };
  }

  function equationInitialTex(kind, a, b, c) {
    if (kind === "xplus") return `X+${matrixTex(a)}=${matrixTex(b)}`;
    if (kind === "ax" || kind === "coefficients") return `${matrixTex(a)}X=${matrixTex(b)}`;
    if (kind === "xa") return `X${matrixTex(a)}=${matrixTex(b)}`;
    if (kind === "axb") return `${matrixTex(a)}X${matrixTex(b)}=${matrixTex(c)}`;
    return `${matrixTex(a)}X-${matrixTex(b)}X=${matrixTex(c)}`;
  }

  function analyzeEquation(kind, a, b, c) {
    const steps = [step("Escrivim l'equació", "Identifiquem la posició de la matriu incògnita i conservem l'ordre dels factors.", equationInitialTex(kind, a, b, c))];
    let result;

    if (kind === "xplus") {
      result = matrixSub(b, a);
      steps.push(step("Aïllem la matriu incògnita", "Restem A als dos membres.", `X=B-A=${matrixTex(b)}-${matrixTex(a)}=${matrixTex(result)}`));
    } else if (kind === "coefficients") {
      const inverseData = inverseGauss(a, "A");
      result = matrixMul(inverseData.inverse, b);
      const [p, q] = a[0];
      const [r, s] = a[1];
      const symbolic = `\\begin{pmatrix}${twoVariableExpression(p, "x", q, "z")}&${twoVariableExpression(p, "y", q, "t")}\\\\${twoVariableExpression(r, "x", s, "z")}&${twoVariableExpression(r, "y", s, "t")}\\end{pmatrix}`;
      const equations = `\\begin{cases}${twoVariableExpression(p, "x", q, "z")}=${b[0][0].toTex()}\\\\${twoVariableExpression(p, "y", q, "t")}=${b[0][1].toTex()}\\\\${twoVariableExpression(r, "x", s, "z")}=${b[1][0].toTex()}\\\\${twoVariableExpression(r, "y", s, "t")}=${b[1][1].toTex()}\\end{cases}`;
      steps.push(step("Escrivim els elements desconeguts", "Representem la matriu incògnita amb quatre incògnites.", `X=\\begin{pmatrix}x&y\\\\z&t\\end{pmatrix}`));
      steps.push(step("Efectuem el producte", "Multipliquem files per columnes.", `AX=${symbolic}=${matrixTex(b)}`));
      steps.push(step("Igualem les posicions corresponents", "La igualtat de matrius proporciona quatre equacions.", equations));
      steps.push(step("Resolem les equacions", "Reconstruïm X amb els quatre valors obtinguts.", `x=${result[0][0].toTex()},\\ y=${result[0][1].toTex()},\\ z=${result[1][0].toTex()},\\ t=${result[1][1].toTex()}`));
    } else {
      let leftInverse;
      let rightInverse;
      let middle = c;
      if (kind === "ax") {
        steps.push(step("Aïllem X", "Multipliquem els dos membres per l'esquerra per A^{-1}.", `X=A^{-1}B`));
        const inverseData = inverseGauss(a, "A");
        steps.push(...inverseData.steps);
        result = matrixMul(inverseData.inverse, b);
        steps.push(step("Efectuem el producte", "Conservem l'ordre dels factors.", `X=${matrixTex(inverseData.inverse)}${matrixTex(b)}=${matrixTex(result)}`));
      } else if (kind === "xa") {
        steps.push(step("Aïllem X", "Multipliquem els dos membres per la dreta per A^{-1}.", `X=BA^{-1}`));
        const inverseData = inverseGauss(a, "A");
        steps.push(...inverseData.steps);
        result = matrixMul(b, inverseData.inverse);
        steps.push(step("Efectuem el producte", "La inversa ha de quedar a la dreta de B.", `X=${matrixTex(b)}${matrixTex(inverseData.inverse)}=${matrixTex(result)}`));
      } else if (kind === "axb") {
        steps.push(step("Aïllem X", "Multipliquem per A^{-1} a l'esquerra i per B^{-1} a la dreta.", `X=A^{-1}CB^{-1}`));
        leftInverse = inverseGauss(a, "A");
        rightInverse = inverseGauss(b, "B");
        steps.push(...leftInverse.steps, ...rightInverse.steps);
        result = matrixMul(matrixMul(leftInverse.inverse, middle), rightInverse.inverse);
        steps.push(step("Efectuem els productes", "Mantenim l'ordre A^{-1}CB^{-1}.", `X=${matrixTex(leftInverse.inverse)}${matrixTex(c)}${matrixTex(rightInverse.inverse)}=${matrixTex(result)}`));
      } else {
        const difference = matrixSub(a, b);
        steps.push(step("Traiem factor comú", "Com que X és a la dreta en tots dos termes, obtenim (A-B)X=C.", `(A-B)X=C\\qquad A-B=${matrixTex(difference)}`));
        const inverseData = inverseGauss(difference, "A-B");
        steps.push(...inverseData.steps);
        result = matrixMul(inverseData.inverse, c);
        steps.push(step("Aïllem i calculem X", "Multipliquem per l'esquerra per (A-B)^{-1}.", `X=(A-B)^{-1}C=${matrixTex(result)}`));
      }
    }
    steps.push(step("Comprovem el resultat", "La matriu obtinguda compleix l'equació inicial.", `\\boxed{X=${matrixTex(result)}}`));
    return { title: "Resolució de l'equació matricial", steps };
  }

  function analyzeSystem(a, b, c, d, p, q) {
    const firstEquation = twoVariableExpression(a, "X", b, "Y");
    const secondEquation = twoVariableExpression(c, "X", d, "Y");
    const steps = [step("Escrivim el sistema", "Les incògnites X i Y són matrius d'ordre 2 per 2.", `\\begin{cases}${firstEquation}=${matrixTex(p)}\\\\${secondEquation}=${matrixTex(q)}\\end{cases}`)];
    const allZero = [a, b, c, d].every((value) => value.isZero());
    if (allZero) {
      const consistent = zeroMatrix(p) && zeroMatrix(q);
      steps.push(step("Llegim les dues equacions", "Tots els coeficients de X i Y són zero; no cal fer cap eliminació.", `\\begin{cases}0=${matrixTex(p)}\\\\0=${matrixTex(q)}\\end{cases}`));
      if (consistent) {
        steps.push(step("Interpretem el resultat", "Les dues igualtats són certes per a qualsevol parella de matrius X i Y; el sistema no en determina una única parella.", `\\boxed{\\text{No hi ha una solució única}}`));
      } else {
        steps.push(step("Interpretem el resultat", "Almenys una de les dues igualtats és contradictòria; no hi ha cap parella de matrius que les compleixi totes dues.", `\\boxed{\\text{No es pot obtenir una solució}}`));
      }
      return { title: "Resolució del sistema matricial", steps };
    }

    const eliminateX = !a.isZero() || !c.isZero();
    const firstFactor = eliminateX ? a : b;
    const secondFactor = eliminateX ? c : d;
    const remainingCoefficient = eliminateX
      ? a.mul(d).sub(c.mul(b))
      : b.mul(c).sub(d.mul(a));
    const reducedRight = eliminateX
      ? matrixSub(matrixScale(a, q), matrixScale(c, p))
      : matrixSub(matrixScale(b, q), matrixScale(d, p));
    const remainingVariable = eliminateX ? "Y" : "X";
    const eliminatedVariable = eliminateX ? "X" : "Y";
    const operation = `F_2=${twoVariableExpression(firstFactor, "F_2", secondFactor.neg(), "F_1")}`;
    const reducedEquation = variableTerm(remainingCoefficient, remainingVariable, true) || "0";

    steps.push(step(
      `Eliminem ${eliminatedVariable}`,
      "Apliquem la combinació indicada a tots els termes de la segona fila.",
      `\\begin{cases}${firstEquation}=${matrixTex(p)}\\\\${secondEquation}=${matrixTex(q)}\\end{cases}\\xrightarrow{${operation}}\\begin{cases}${firstEquation}=${matrixTex(p)}\\\\${reducedEquation}=${matrixTex(reducedRight)}\\end{cases}`,
    ));

    if (!remainingCoefficient.isZero()) {
      const remainingMatrix = matrixScale(ONE.div(remainingCoefficient), reducedRight);
      steps.push(step(
        `Calculem ${remainingVariable}`,
        "Dividim tots els elements de la matriu pel coeficient que acompanya la incògnita.",
        `${remainingVariable}=${ONE.div(remainingCoefficient).toTex()}${matrixTex(reducedRight)}=${matrixTex(remainingMatrix)}`,
      ));

      const useFirstEquation = eliminateX ? !a.isZero() : !b.isZero();
      const solvedCoefficient = eliminateX
        ? (useFirstEquation ? a : c)
        : (useFirstEquation ? b : d);
      const otherCoefficient = eliminateX
        ? (useFirstEquation ? b : d)
        : (useFirstEquation ? a : c);
      const rightMatrix = useFirstEquation ? p : q;
      const rightSymbol = useFirstEquation ? "P" : "Q";
      const numerator = matrixSub(rightMatrix, matrixScale(otherCoefficient, remainingMatrix));
      const solvedScale = ONE.div(solvedCoefficient);
      const solvedMatrix = matrixScale(solvedScale, numerator);
      const isolatedRight = `${rightSymbol}${variableTerm(otherCoefficient.neg(), remainingVariable, false)}`;
      let explicitOperation = matrixTex(rightMatrix);
      if (!otherCoefficient.isZero()) {
        const operator = otherCoefficient.n < 0n ? "+" : "-";
        const absoluteCoefficient = otherCoefficient.abs();
        const coefficient = absoluteCoefficient.isOne() ? "" : absoluteCoefficient.toTex();
        explicitOperation += `${operator}${coefficient}${matrixTex(remainingMatrix)}`;
      }
      const symbolicCalculation = solvedScale.isOne()
        ? isolatedRight
        : `${solvedScale.toTex()}\\left(${isolatedRight}\\right)`;
      const explicitCalculation = solvedScale.isOne()
        ? explicitOperation
        : `${solvedScale.toTex()}\\left(${explicitOperation}\\right)`;

      steps.push(step(
        `Substituïm i calculem ${eliminatedVariable}`,
        `Fem servir la ${useFirstEquation ? "primera" : "segona"} equació, substituïm la matriu coneguda i operem element a element.`,
        `${eliminatedVariable}=${symbolicCalculation}=${explicitCalculation}=${matrixTex(solvedMatrix)}`,
      ));

      const x = eliminateX ? solvedMatrix : remainingMatrix;
      const y = eliminateX ? remainingMatrix : solvedMatrix;
      steps.push(step("Solució del sistema", "Hem determinat les dues matrius que compleixen les equacions.", `\\boxed{\\left\\{\\begin{aligned}X&=${matrixTex(x)}\\\\Y&=${matrixTex(y)}\\end{aligned}\\right.}`));
      return { title: "Resolució del sistema matricial", steps };
    }

    if (zeroMatrix(reducedRight)) {
      steps.push(step("Interpretem el resultat", "L'eliminació produeix una igualtat certa, però no permet determinar una única parella de matrius X i Y.", `\\boxed{\\text{No hi ha una solució única}}`));
    } else {
      steps.push(step("Interpretem el resultat", `Després d'eliminar ${eliminatedVariable}, obtenim una igualtat impossible entre la matriu zero i una matriu no nul·la.`, `\\boxed{\\text{No es pot obtenir una solució}}`));
    }
    return { title: "Resolució del sistema matricial", steps };
  }

  function initMatrixCalculator(root) {
    if (!root || root.dataset.initialized === "true") return;
    root.dataset.initialized = "true";
    const tabs = Array.from(root.querySelectorAll("[data-mc-mode]"));
    const panels = Array.from(root.querySelectorAll("[data-mc-panel]"));
    const message = root.querySelector("#mc-message");
    const status = root.querySelector("#mc-status");
    const results = root.querySelector("#mc-results");
    const title = root.querySelector("#mc-result-title");
    const stepList = root.querySelector("#mc-step-list");
    const progress = root.querySelector("#mc-progress");
    const revealActions = root.querySelector("#mc-reveal-actions");
    const nextButton = root.querySelector("#mc-next");
    const showAllButton = root.querySelector("#mc-show-all");
    let analysis = null;
    let revealed = 0;

    function setMode(mode) {
      tabs.forEach((tab) => {
        const active = tab.dataset.mcMode === mode;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => { panel.hidden = panel.dataset.mcPanel !== mode; });
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
      title.textContent = analysis.title;
      stepList.innerHTML = analysis.steps.map((item, index) => {
        const badge = item.classification ? `<span class="ls-classification ls-classification--${item.classification.toLowerCase()}">${item.classification}</span>` : "";
        return `<li class="dt-step-card"><p class="fa-step-number">Pas ${index + 1}</p><div class="ls-step-heading"><h3>${item.title}</h3>${badge}</div><p class="dt-step-explanation">${item.explanation}</p>${formula(item.tex)}</li>`;
      }).join("");
      revealed = Math.min(1, analysis.steps.length);
      results.hidden = false;
      revealActions.hidden = false;
      renderMath(results);
      updateReveal();
      status.textContent = "Procediment preparat.";
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function run(callback) {
      message.hidden = true;
      results.hidden = true;
      status.textContent = "Calculant…";
      window.setTimeout(() => {
        try { present(callback()); }
        catch (error) {
          analysis = null;
          message.replaceChildren();
          const summary = document.createElement("p");
          summary.textContent = error && error.message ? error.message : "No s'ha pogut completar el càlcul.";
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
      }, 20);
    }

    function calculateOperation() {
      run(() => analyzeOperation(root.querySelector("#mc-op-expression").value));
    }

    function calculateSystem() {
      function signedCoefficient(coefficientId, operatorId) {
        const input = root.querySelector(`#${coefficientId}`);
        const operator = root.querySelector(`#${operatorId}`);
        let source = input.value.trim();
        if (source.startsWith("-")) {
          source = source.slice(1);
          input.value = source;
          input.dataset.sign = "-1";
        } else if (source.startsWith("+")) {
          source = source.slice(1);
          input.value = source;
          input.dataset.sign = "1";
        }
        operator.textContent = input.dataset.sign === "-1" ? "−" : "+";
        return parseFraction(source).mul(parseFraction(input.dataset.sign || "1"));
      }
      run(() => analyzeSystem(
        parseFraction(root.querySelector("#mc-sys-a").value), signedCoefficient("mc-sys-b", "mc-sys-b-operator"),
        parseFraction(root.querySelector("#mc-sys-c").value), signedCoefficient("mc-sys-d", "mc-sys-d-operator"),
        readMatrix(root, "mc-sys-p"), readMatrix(root, "mc-sys-q"),
      ));
    }

    function resetOperation() {
      root.querySelector("#mc-op-expression").value = "[[1 2][3 4]] + [[2 -1][0 3]]";
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
    }

    function resetSystem() {
      const values = { a: "1", b: "1", c: "1", d: "1", p11: "4", p12: "6", p21: "2", p22: "0", q11: "2", q12: "0", q21: "0", q22: "2" };
      Object.entries(values).forEach(([key, value]) => { root.querySelector(`#mc-sys-${key}`).value = value; });
      root.querySelector("#mc-sys-b").dataset.sign = "1";
      root.querySelector("#mc-sys-d").dataset.sign = "-1";
      root.querySelector("#mc-sys-b-operator").textContent = "+";
      root.querySelector("#mc-sys-d-operator").textContent = "−";
      results.hidden = true;
    }

    tabs.forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mcMode)));
    root.querySelector("#mc-op-calculate").addEventListener("click", calculateOperation);
    root.querySelector("#mc-op-example").addEventListener("click", () => {
      root.querySelector("#mc-op-expression").value = "[[1 2][0 -1][3 1]]^t * [[x 1][2 -1][y 0]] = [[7 1][2 3]]";
      calculateOperation();
    });
    const operationExamples = {
      sum: "[[-2 3][-2 3][3 -2]] + [[1 0][4 -1][-2 5]]",
      product: "[[1 2 3][0 -1 2]] * [[2 1][-1 0][3 2]]",
      scalar: "-2 * [[1 -3][2 4][0 1]]",
      literal: "a * [[1 2][3 4]]",
      transpose: "[[-2 3][-2 3][3 -2]]^t",
      power: "[[1 2][0 1]]^3",
      inverse: "[[1 2][3 5]]^-1",
      combined: "2 * [[1 0][2 1]] + ([[1 1][0 1]]^2) - [[1 0][0 1]]",
      incompatible: "[[1 2][3 4]] + [[1 0 2][2 1 3]]",
    };
    root.querySelectorAll("[data-mc-op-example]").forEach((button) => button.addEventListener("click", () => {
      root.querySelector("#mc-op-expression").value = operationExamples[button.dataset.mcOpExample];
      results.hidden = true;
      message.hidden = true;
      status.textContent = "";
    }));
    root.querySelector("#mc-op-reset").addEventListener("click", resetOperation);
    [["mc-sys-b", "mc-sys-b-operator"], ["mc-sys-d", "mc-sys-d-operator"]].forEach(([inputId, operatorId]) => {
      const input = root.querySelector(`#${inputId}`);
      const operator = root.querySelector(`#${operatorId}`);
      input.addEventListener("focus", () => {
        if (input.dataset.sign === "-1" && !input.value.trim().startsWith("-")) input.value = `-${input.value.trim()}`;
        operator.style.visibility = "hidden";
      });
      input.addEventListener("blur", () => {
        let source = input.value.trim();
        if (source.startsWith("-")) {
          input.dataset.sign = "-1";
          source = source.slice(1);
        } else if (source.startsWith("+")) {
          input.dataset.sign = "1";
          source = source.slice(1);
        }
        input.value = source;
        operator.textContent = input.dataset.sign === "-1" ? "−" : "+";
        operator.style.visibility = "visible";
      });
    });
    root.querySelector("#mc-sys-calculate").addEventListener("click", calculateSystem);
    root.querySelector("#mc-sys-reset").addEventListener("click", resetSystem);
    nextButton.addEventListener("click", () => {
      if (!analysis || revealed >= analysis.steps.length) return;
      revealed += 1;
      updateReveal();
      const current = stepList.children[revealed - 1];
      if (current) current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    showAllButton.addEventListener("click", () => {
      if (!analysis) return;
      revealed = analysis.steps.length;
      updateReveal();
    });
    root.querySelectorAll("input, textarea").forEach((input) => input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      const panel = input.closest("[data-mc-panel]");
      if (input.tagName === "TEXTAREA" && event.shiftKey) return;
      event.preventDefault();
      if (panel.dataset.mcPanel === "operations") calculateOperation();
      else calculateSystem();
    }));
  }

  window.MatrixCalculatorTool = { init: initMatrixCalculator };
  initMatrixCalculator(document.getElementById("matrix-calculator-tool"));
}());
