// Q9 - Random Math Quiz Generator

// random whole number between 1 and 20
function randomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

const num1 = randomNumber();
const num2 = randomNumber();

// pick a random operator from the array
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// switch statement to calculate the answer
switch (operator) {
  case "+":
    correctAnswer = num1 + num2;
    break;
  case "-":
    correctAnswer = num1 - num2;
    break;
  case "*":
    correctAnswer = num1 * num2;
    break;
  case "/":
    // division rounded to 2 decimals (num2 is never 0, so it is safe)
    correctAnswer = (num1 / num2).toFixed(2);
    break;
  default:
    correctAnswer = "Invalid operator";
}

console.log(`Question: ${num1} ${operator} ${num2} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
