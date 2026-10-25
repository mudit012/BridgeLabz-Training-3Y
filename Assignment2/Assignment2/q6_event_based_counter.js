// Q6. Event-Based Counter Simulation

let count = 0; // shared counter

function increment() {
  count++;
  console.log("Incremented -> count =", count);
}

function decrement() {
  count--;
  console.log("Decremented -> count =", count);
}

// Nested function: demonstrates function scope (closure over 'count')
function counterWithNested() {
  let localCount = 0; // local to this function

  function step(change) {
    // inner function can read and modify the outer function's variable
    localCount += change;
    console.log(`  [nested] localCount = ${localCount}`);
  }

  step(1);
  step(1);
  step(-1);
  return localCount;
}

// Simulate click events manually
console.log("--- Simulated clicks ---");
increment(); // click +
increment(); // click +
increment(); // click +
decrement(); // click -
console.log("Final global count:", count);

console.log("--- Nested function scope ---");
const result = counterWithNested();
console.log("Value returned from nested updates:", result);
console.log("Global count unaffected by nested function:", count);
