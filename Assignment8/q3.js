// Q3 - Product Discount System (constructor function + prototype)

// constructor function
function Product(name, price) {
  this.name = name;
  this.price = price;
}

// method added on the prototype, so all products share one copy of it
Product.prototype.applyDiscount = function (percent) {
  return this.price - (this.price * percent) / 100;
};

const laptop = new Product("Laptop", 60000);
const phone = new Product("Phone", 20000);
const shoes = new Product("Shoes", 3000);

console.log(`${laptop.name}: Rs. ${laptop.price} -> Rs. ${laptop.applyDiscount(10)} (10% off)`);
console.log(`${phone.name}: Rs. ${phone.price} -> Rs. ${phone.applyDiscount(15)} (15% off)`);
console.log(`${shoes.name}: Rs. ${shoes.price} -> Rs. ${shoes.applyDiscount(30)} (30% off)`);

// ---- Abstraction ----
// The person using a product only calls applyDiscount(percent).
// They don't need to know the formula behind it. If the calculation
// changes later (like adding tax), we change it in ONE place and
// all the code using it keeps working.
const products = [laptop, phone, shoes];
const festivalPrices = products.map((p) => `${p.name}: Rs. ${p.applyDiscount(20)}`);
console.log("\nFestival sale (20% off on everything):");
console.log(festivalPrices.join("\n"));
