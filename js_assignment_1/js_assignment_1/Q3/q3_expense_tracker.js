// Q3. Monthly Expense Tracker
// Order: food, travel, rent, bills, leisure
const expenses = [4500, 2000, 12000, 3000, 1500];

let total = 0;
for (const amount of expenses) {
  total += amount;                    // assignment operator: add each expense
}

const average = total / expenses.length;

const taxRate = 0.10;                 // 10% tax
let finalAmount = total;
finalAmount += total * taxRate;       // add tax using +=

console.log(`Total expenses : ${total.toFixed(2)}`);
console.log(`Average expense: ${average.toFixed(2)}`);
console.log(`Final (+10% tax): ${finalAmount.toFixed(2)}`);
