// Q8. Employee Salary Projection
let currentSalary = 500000;   // starting annual salary
const incrementRate = 8;      // annual increment in %
const years = 5;

const projection = [];
let salary = currentSalary;

for (let year = 1; year <= years; year++) {
  salary += (salary * incrementRate) / 100;   // assignment operator: apply increment
  projection.push({ Year: year, Salary: Math.round(salary) });
}

console.table(projection);
