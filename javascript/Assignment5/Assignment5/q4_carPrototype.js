// Q4: Constructor function + prototype method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Defined ONCE on the prototype and shared by all Car objects
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails();
car2.getDetails();

// Proof of method sharing: both objects use the exact same function in memory
console.log("Same method shared?", car1.getDetails === car2.getDetails); // true
console.log("Method on object itself?", car1.hasOwnProperty("getDetails")); // false
console.log("Method on prototype?", Car.prototype.hasOwnProperty("getDetails")); // true
