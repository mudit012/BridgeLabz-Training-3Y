"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class DivideByZeroError extends Error { constructor() { super("Cannot divide by zero"); this.name = "DivideByZeroError"; } }
class NegativeRootError extends Error { constructor(n) { super(`Cannot take root of negative number (${n})`); this.name = "NegativeRootError"; } }
class InvalidOperationError extends Error { constructor(op) { super(`Operation "${op}" is not recognized`); this.name = "InvalidOperationError"; } }

function calculate(operation, a, b) {
  switch (operation) {
    case "add":      return a + b;
    case "subtract": return a - b;
    case "divide":
      if (b === 0) throw new DivideByZeroError();
      return a / b;
    case "power":    return a ** b;
    case "root":
      if (a < 0) throw new NegativeRootError(a);
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(operation);
  }
}

function runAll(opList, a, b) {
  console.log(`\n===== SUMMARY (num1=${a}, num2=${b}) =====`);
  for (const op of opList) {
    try {
      const result = calculate(op, a, b);
      console.log(`${op.padEnd(9)} -> ${result}`);
    } catch (error) {
      console.log(`${op.padEnd(9)} -> ERROR [${error.name}]: ${error.message}`);
    }
  }
}

runAll(operations, num1, num2);
runAll(["root", "modulo", "divide"], -9, 3);
