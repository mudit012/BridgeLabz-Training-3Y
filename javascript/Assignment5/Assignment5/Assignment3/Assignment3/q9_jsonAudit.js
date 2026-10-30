"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const cleanData = [];
const requiredKeys = ["user", "age"];

for (let index = 0; index < rawData.length; index++) {
  const lineNumber = index + 1;

  try {
    const parsed = JSON.parse(rawData[index]);

    const missing = requiredKeys.filter((key) => !(key in parsed));
    if (missing.length > 0) {
      throw new Error(`Missing key(s): ${missing.join(", ")}`);
    }
    cleanData.push(parsed);
    console.log(`Line ${lineNumber}: OK`);
  } catch (error) {
    const kind = error instanceof SyntaxError ? "Invalid JSON" : "Validation";
    console.log(`Line ${lineNumber}: ${kind} -> ${error.message}`);
  }
}

console.log("\nClean entries:", cleanData);

const adults = cleanData
  .map((entry) => ({ ...entry, age: Number(entry.age) }))
  .filter((entry) => entry.age >= 18);
console.log("Adults (age >= 18, age as Number):", adults);

const demo = [{ user: "Kid", age: "15" }, { user: "Adult", age: "30" }]
  .map((e) => ({ ...e, age: Number(e.age) }))
  .filter((e) => e.age >= 18);
console.log("Filter demo:", demo);
