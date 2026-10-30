"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

function calculateBonus(employee) {

  if (!("salary" in employee) || !("years" in employee)) {
    throw new Error(`Missing property for employee "${employee.name}"`);
  }

  const salary = Number(employee.salary);
  const years = Number(employee.years);
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to number for "${employee.name}"`);
  }

  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { salary, years, bonus };
}

function printReport(list) {
  for (const emp of list) {
    try {
      const { salary, years, bonus } = calculateBonus(emp);

      console.log(`Employee: ${emp.name} | Salary: ₹${salary.toLocaleString("en-IN")} | Years: ${years} | Bonus: ₹${bonus.toLocaleString("en-IN")}`);
    } catch (error) {
      console.log(`ERROR (${error.name}): ${error.message}`);
    }
  }
}

console.log("--- Given data ---");
printReport(employees);

console.log("\n--- Error handling demo (bad data) ---");
printReport([
  { name: "Ravi", salary: "abc", years: "4" },
  { name: "Neha", salary: "40000" },
]);

try {
  undeclaredVar = 1;
} catch (e) {
  console.log(`\nStrict mode blocked implicit global -> ${e.name}: ${e.message}`);
}
