"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidEntries = [];

function isValidNumeric(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  return !Number.isNaN(Number(value));
}

console.log("===== DETAILED REPORT =====");
for (let i = 0; i < apiData.length; i++) {
  const raw = apiData[i];

  const asNumber = Number(raw);
  const asBoolean = Boolean(raw);
  const asString = String(raw);

  if (isValidNumeric(raw)) {
    validNumbers.push(asNumber);
    console.log(`[${i}] VALID   raw=${JSON.stringify(raw)} | Number=${asNumber} | Boolean=${asBoolean} | String="${asString}"`);
  } else {
    invalidEntries.push(raw);
    console.log(`[${i}] INVALID raw=${JSON.stringify(raw)} | Number=${asNumber} | Boolean=${asBoolean} | String="${asString}"  <-- skipped`);
  }
}

console.log("\n===== SUMMARY =====");
console.log("Valid numeric data :", validNumbers);
console.log("Invalid data       :", invalidEntries);
console.log(`Total: ${apiData.length}, Valid: ${validNumbers.length}, Invalid: ${invalidEntries.length}`);
