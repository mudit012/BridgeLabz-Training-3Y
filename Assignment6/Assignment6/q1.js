// Q1 - Async Coffee Maker (Promise chaining)

// small helper: random delay between 1000ms and 2000ms
function randomDelay() {
  return Math.floor(Math.random() * 1000) + 1000;
}

// each step returns a Promise that resolves after 1-2 seconds
// there is a 15% chance that the step fails (simulated using Math.random)
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Kettle stopped working"));
      else resolve("Water boiled");
    }, randomDelay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Out of coffee beans"));
      else resolve("Coffee brewed");
    }, randomDelay());
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) reject(new Error("Cup broke"));
      else resolve("Coffee poured into cup");
    }, randomDelay());
  });
}

console.log("Making coffee...");

// Promise chaining: each .then() runs only after the previous step succeeds
boilWater()
  .then((message) => {
    console.log("Step 1:", message);
    return brewCoffee();
  })
  .then((message) => {
    console.log("Step 2:", message);
    return pourIntoCup();
  })
  .then((message) => {
    console.log("Step 3:", message);
    console.log("Coffee ready for the team!");
  })
  .catch((error) => {
    // if ANY step rejects, the remaining .then() steps are skipped and we land here
    console.log("Coffee making failed:", error.message);
  });
