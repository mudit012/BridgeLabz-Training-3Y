// Q6 - E-Commerce Inventory System

const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 5 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000, stock: 25 },
  { id: 3, name: "T-Shirt", category: "Clothing", price: 600, stock: 8 },
  { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 40 },
  { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 100 },
  { id: 6, name: "Pen Pack", category: "Stationery", price: 50, stock: 6 },
];

// 1. products whose stock is low (less than 10) using filter()
function getLowStockProducts() {
  return products.filter((p) => p.stock < 10);
}

// 2. sort by price (low to high). Copy first with [...] so original order is not changed
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// 3. total value = price * stock for every product, added using reduce()
function calculateTotalInventoryValue() {
  return products.reduce((total, p) => total + p.price * p.stock, 0);
}

// 4. group products by category using reduce()
function groupByCategory() {
  return products.reduce((groups, p) => {
    // create the array for this category if it doesn't exist yet
    if (!groups[p.category]) {
      groups[p.category] = [];
    }
    groups[p.category].push(p.name);
    return groups;
  }, {});
}

console.log("Low stock products:");
console.table(getLowStockProducts());

console.log("\nSorted by price:");
console.table(sortProductsByPrice().map((p) => ({ name: p.name, price: p.price })));

console.log("\nTotal inventory value: Rs.", calculateTotalInventoryValue());

console.log("\nGrouped by category:");
console.log(groupByCategory());
