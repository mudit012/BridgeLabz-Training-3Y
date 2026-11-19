// Q4 - Employee Inheritance and runtime polymorphism

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  work() {
    return `${this.name} from ${this.department} is doing their daily tasks.`;
  }
}

// Manager inherits Employee and overrides work()
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // call parent constructor
    this.teamSize = teamSize;
  }

  work() {
    return `${this.name} from ${this.department} is managing a team of ${this.teamSize} people.`;
  }
}

const emp = new Employee("Rahul", "IT");
const mgr = new Manager("Neha", "IT", 8);

// Runtime polymorphism: same method call work(),
// but which version runs is decided at runtime by the object's actual class
const staff = [emp, mgr, new Employee("Pooja", "HR"), new Manager("Amit", "Finance", 5)];

staff.forEach((person) => {
  console.log(person.work());
});

console.log("\nmgr instanceof Manager  :", mgr instanceof Manager);
console.log("mgr instanceof Employee :", mgr instanceof Employee);
