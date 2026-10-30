const sloppyCode = `
  function demo(a, a) {
    total = 10;
    delete total;
    return a;
  }
  return demo(5, 10);
`;
const strictCode = '"use strict";' + sloppyCode;

console.log("--- WITHOUT strict mode ---");
try {
  const result = new Function(sloppyCode)();
  console.log(`Runs fine. demo(5, 10) returned a = ${result} (last duplicate wins)`);
  console.log(`'total' leaked as global: typeof total = ${typeof total}`);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

console.log("\n--- WITH strict mode ---");
try {
  new Function(strictCode)();
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

const strictTests = {
  "duplicate parameters": '"use strict"; function f(a, a) {}',
  "undeclared assignment": '"use strict"; total = 10;',
  "delete a variable": '"use strict"; var x = 1; delete x;',
};
console.log("\n--- Each violation in strict mode ---");
for (const [name, code] of Object.entries(strictTests)) {
  try {
    new Function(code)();
    console.log(`${name}: allowed`);
  } catch (e) {
    console.log(`${name}: ${e.name} - ${e.message}`);
  }
}

"use strict";
function demo(first, second) {
  let total = 10;
  total += first + second;
  return total;
}
console.log("\n--- Correct version ---");
console.log(`demo(5, 10) = ${demo(5, 10)}`);
