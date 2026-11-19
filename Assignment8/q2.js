// Q2 - Online Food Ordering (map + reduce + error handling)

// menu with prices
const menu = [
  { item: "Pizza", price: 250 },
  { item: "Burger", price: 120 },
  { item: "Pasta", price: 180 },
  { item: "Coke", price: 50 },
];

function calculateBill(orderItems) {
  // map() converts the ordered item names into a list of prices
  const priceList = orderItems.map((orderedName) => {
    const found = menu.find((m) => m.item.toLowerCase() === orderedName.toLowerCase());
    if (!found) {
      // invalid item -> throw an error
      throw new Error(`"${orderedName}" is not available on the menu.`);
    }
    return found.price;
  });

  // reduce() adds all the prices
  return priceList.reduce((total, price) => total + price, 0);
}

// test 1: valid order
try {
  const bill = calculateBill(["Pizza", "Coke", "Burger"]);
  console.log(`Order 1 total bill: Rs. ${bill}`);
} catch (error) {
  console.log("Error:", error.message);
}

// test 2: order with an invalid item
try {
  const bill = calculateBill(["Pasta", "Sushi"]);
  console.log(`Order 2 total bill: Rs. ${bill}`);
} catch (error) {
  console.log("Error:", error.message);
}
