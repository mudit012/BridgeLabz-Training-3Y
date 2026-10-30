// Q9: ES6 classes vs prototype version

// ---------- Prototype version ----------
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};
function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// ---------- ES6 class version ----------
class Person {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(`Name: ${this.name}`);
  }
}
class Student extends Person {
  constructor(name, branch) {
    super(name); // calls Person constructor
    this.branch = branch;
  }
  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

// ---------- Compare behaviour ----------
const s1 = new StudentProto("Amit", "CS");
const s2 = new Student("Amit", "CS");

console.log("--- Prototype version ---");
s1.printName();
s1.printBranch();
console.log("--- Class version ---");
s2.printName();
s2.printBranch();

console.log("--- Same behaviour check ---");
console.log("Proto instanceof Person:", s1 instanceof PersonProto); // true
console.log("Class instanceof Person:", s2 instanceof Person);      // true
console.log("Proto chain linked:", Object.getPrototypeOf(StudentProto.prototype) === PersonProto.prototype); // true
console.log("Class chain linked:", Object.getPrototypeOf(Student.prototype) === Person.prototype);          // true
// Classes are just cleaner syntax over the same prototype mechanism.
