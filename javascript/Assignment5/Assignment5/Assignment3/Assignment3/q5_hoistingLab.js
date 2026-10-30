"use strict";

console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }

let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

try {
  console.log(tdzValue);
} catch (e) {
  console.log(`TDZ -> ${e.name}: ${e.message}`);
}
let tdzValue = "now initialized";

console.log("\n--- Fixed version ---");
const fixedScore = 50;
const fixedStatus = "ready";
function announceFixed() { console.log("Game started"); }
function startGameFixed() { console.log(fixedStatus); }
console.log(fixedScore);
announceFixed();
startGameFixed();

console.log("\n--- Arrow function version ---");
try {
  announceArrow();
} catch (e) {
  console.log(`Arrow before definition -> ${e.name}: ${e.message}`);
}
const announceArrow = () => console.log("Game started (arrow)");
announceArrow();
