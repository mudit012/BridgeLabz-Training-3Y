// Q2: Higher-order function with callback

// Applies the callback to every element and returns a new array
function applyOperation(numbers, operation) {
  const result = [];
  for (const num of numbers) {
    result.push(operation(num)); // callback decides what happens to each number
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Callback 1: double
const double = (n) => n * 2;
// Callback 2: square
const square = (n) => n * n;

console.log("Original:", numbers);
console.log("Doubled :", applyOperation(numbers, double)); // [2, 4, 6, 8]
console.log("Squared :", applyOperation(numbers, square)); // [1, 4, 9, 16]
