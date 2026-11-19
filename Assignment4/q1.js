// Q1 - E-Commerce Product Manager

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // reduces the price by the given percentage
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // returns product details as a formatted string
  getDetails() {
    return `#${this.id} | ${this.name} | Rs. ${this.price.toFixed(2)} | ${this.category}`;
  }
}

// array of product objects
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 499, "Accessories"),
  new Product(3, "Headphones", 2499, "Electronics"),
  new Product(4, "Notebook", 80, "Stationery"),
  new Product(5, "Office Chair", 7999, "Furniture"),
];

console.log("All products:");
products.forEach((p) => console.log(p.getDetails()));

// apply 10% discount on the laptop
products[0].applyDiscount(10);
console.log("\nAfter 10% discount on Laptop:");
console.log(products[0].getDetails());

// filter products with price greater than 1000
const expensiveProducts = products.filter((p) => p.price > 1000);
console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((p) => console.log(p.getDetails()));
