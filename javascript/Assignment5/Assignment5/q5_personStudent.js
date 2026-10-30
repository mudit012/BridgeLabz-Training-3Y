// Q5: Prototypal inheritance Person -> Student

function Person(name) {
  this.name = name;
}
Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name); // reuse Person's constructor to set `name`
  this.branch = branch;
}

// Link prototype chain: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore constructor reference

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};
Student.prototype.printDetails = function () {
  this.printName();   // inherited from Person
  this.printBranch(); // from Student
};

const student = new Student("Amit", "Computer Science");
student.printDetails();

// Demonstrate prototype chain
console.log("student instanceof Student:", student instanceof Student); // true
console.log("student instanceof Person :", student instanceof Person);  // true
console.log("Chain OK:", Object.getPrototypeOf(student) === Student.prototype &&
  Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
// student -> Student.prototype -> Person.prototype -> Object.prototype -> null
