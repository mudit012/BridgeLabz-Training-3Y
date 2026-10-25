// Q4. Array Performance Analyzer

// Create 8 random scores between 30 and 100 (inclusive)
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

// Average using reduce()
const total = scores.reduce((sum, s) => sum + s, 0);
const average = total / scores.length;

// Passed students (>= 50) using filter()
const passed = scores.filter(s => s >= 50);

// Pass/Fail labels using map()
const results = scores.map(s => (s >= 50 ? "Pass" : "Fail"));

console.log("===== Student Performance Summary =====");
console.log("Scores         :", scores.join(", "));
console.log("Results        :", results.join(", "));
console.log("Highest Score  :", highest);
console.log("Lowest Score   :", lowest);
console.log("Average Score  :", average.toFixed(2));
console.log("Students Passed:", passed.length, "out of", scores.length);
console.log("Students Failed:", scores.length - passed.length);
