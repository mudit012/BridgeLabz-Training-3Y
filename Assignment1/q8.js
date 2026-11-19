// Q8 - Employee Salary Projection

const currentSalary = 500000;  // yearly salary
const incrementRate = 8;       // annual increment in %

let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
  const increment = (salary * incrementRate) / 100;
  salary += increment;   // assignment operator to update salary

  projection.push({
    Year: year,
    "Increment (Rs.)": Math.round(increment),
    "Salary (Rs.)": Math.round(salary),
  });
}

console.log(`Starting salary: Rs. ${currentSalary}, increment: ${incrementRate}% per year`);
console.table(projection);
