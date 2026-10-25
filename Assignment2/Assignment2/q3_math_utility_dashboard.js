// Q3. Math Utility Dashboard

const x = 16.75;

const rounded = Math.round(x);                         // nearest integer
const squareRoot = Math.sqrt(x);                       // square root
const power = Math.pow(x, 3);                          // x cubed
const randomNum = Math.floor(Math.random() * 41) + 10; // random 10-50

// Formatted summary using template literals
console.log(`
===== Math Dashboard =====
Number          : ${x}
Rounded         : ${rounded}
Square Root     : ${squareRoot.toFixed(4)}
Power (x^3)     : ${power.toFixed(2)}
Random (10-50)  : ${randomNum}
==========================
`);
