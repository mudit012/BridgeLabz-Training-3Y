// Q8. Dynamic Discount Evaluator

const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

// Original total before any discount
const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

// Per-item category discounts using a loop and conditionals
const discountedItems = [];
for (const product of cart) {
  let discountRate = 0;
  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }
  const finalPrice = product.price - product.price * discountRate;
  discountedItems.push({ ...product, discountRate, finalPrice });
  console.log(`${product.item.padEnd(8)} | ${product.price} | discount ${discountRate * 100}% | ${finalPrice}`);
}

// Subtotal after category discounts (reduce)
const subtotal = discountedItems.reduce((sum, p) => sum + p.finalPrice, 0);

// Extra 5% if the cart value is above 50000
// (Checked on the original total: 48100 here, so condition uses cart value as given)
let finalTotal = subtotal;
let extraDiscountApplied = false;
if (originalTotal > 50000) {
  finalTotal = subtotal * 0.95;
  extraDiscountApplied = true;
}

console.log("\nOriginal total        :", originalTotal);
console.log("After category offers :", subtotal);
console.log("Extra 5% applied      :", extraDiscountApplied ? "Yes" : "No");
console.log("Final payable total   :", finalTotal);
