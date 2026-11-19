// Q3 - Monthly Expense Tracker

// expenses of 5 categories: food, travel, rent, bills, leisure
const expenses = [4500, 1800, 12000, 2500, 1500];
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

// add all expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
  console.log(`${categories[i]}: Rs. ${expenses[i].toFixed(2)}`);
}

const average = total / expenses.length;

// add 10% tax using assignment operator
let finalAmount = total;
finalAmount += total * 0.10;

console.log("-----------------------------");
console.log(`Total expense   : Rs. ${total.toFixed(2)}`);
console.log(`Average expense : Rs. ${average.toFixed(2)}`);
console.log(`Final (with 10% tax): Rs. ${finalAmount.toFixed(2)}`);
