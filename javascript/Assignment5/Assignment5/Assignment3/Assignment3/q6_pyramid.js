"use strict";

const userInput = Number(process.argv[2]);
const rows = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

console.log(`--- Pyramid with let (${rows} rows) ---`);
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trimEnd());
}

console.log("\n--- Same pyramid with var ---");
for (var a = 1; a <= rows; a++) {
  var row = "";
  for (var b = 1; b <= a; b++) {
    row += "* ";
  }
  console.log(row.trimEnd());
}
console.log(`After loops (var): a=${a}, b=${b}  <-- leaked and still accessible`);
try {
  console.log(i);
} catch (e) {
  console.log(`After loops (let): ${e.name}: ${e.message}`);
}

console.log("\n--- Closure difference ---");
const withVar = [], withLet = [];
for (var v = 0; v < 3; v++) withVar.push(() => v);
for (let l = 0; l < 3; l++) withLet.push(() => l);
console.log("var results:", withVar.map((f) => f()));
console.log("let results:", withLet.map((f) => f()));

try {
  new Function('"use strict"; for (k = 0; k < 3; k++) {}')();
} catch (e) {
  console.log(`\nStrict mode caught undeclared loop variable -> ${e.name}: ${e.message}`);
}
