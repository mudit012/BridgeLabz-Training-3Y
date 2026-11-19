// Q6 - Employee Management System

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // annual salary = monthly salary * 12
  getAnnualSalary() {
    return this.salary * 12;
  }

  // increases monthly salary by the given percent
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

const employees = [
  new Employee(101, "Amit", "IT", 50000),
  new Employee(102, "Neha", "HR", 40000),
  new Employee(103, "Rahul", "Finance", 45000),
  new Employee(104, "Pooja", "IT", 60000),
  new Employee(105, "Vikas", "Marketing", 35000),
];

console.log("Annual salary of each employee:");
employees.forEach((emp) => {
  console.log(`${emp.name} (${emp.department}): Rs. ${emp.getAnnualSalary()}`);
});

// total annual payout using reduce()
const totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: Rs. ${totalPayout}`);

// give 10% bonus to Amit and check again
employees[0].applyBonus(10);
console.log(`\nAfter 10% bonus, Amit's annual salary: Rs. ${employees[0].getAnnualSalary()}`);
const newTotal = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);
console.log(`New total annual payout: Rs. ${newTotal}`);
