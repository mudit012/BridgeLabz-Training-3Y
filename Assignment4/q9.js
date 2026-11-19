// Q9 - Shopping Cart with coupon validation using RegExp

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  // total price of all items (before discount)
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // coupon format: SAVE or DISC followed by 2 digits, e.g. SAVE20 -> 20% off
  applyCoupon(code) {
    const couponPattern = /^(SAVE|DISC)(\d{2})$/;
    const match = code.trim().toUpperCase().match(couponPattern);

    if (!match) {
      this.discountPercent = 0;
      return false; // invalid coupon
    }
    this.discountPercent = Number(match[2]); // digits part is the percentage
    return true;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }
}

const cart = new Cart();

const itemForm = document.getElementById("itemForm");
const cartBody = document.getElementById("cartBody");
const totalSpan = document.getElementById("total");
const couponInput = document.getElementById("coupon");
const couponMsg = document.getElementById("couponMsg");
const finalBox = document.getElementById("finalBox");

// redraws the cart table and totals
function renderCart() {
  cartBody.innerHTML = "";
  cart.items.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>`;
    cartBody.appendChild(row);
  });
  totalSpan.textContent = cart.getTotal().toFixed(2);
}

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("itemName").value.trim();
  const price = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("itemQty").value);

  cart.addItem(name, price, quantity);
  renderCart();
  itemForm.reset();
  document.getElementById("itemQty").value = 1;
});

document.getElementById("applyCoupon").addEventListener("click", () => {
  const isValid = cart.applyCoupon(couponInput.value);

  if (isValid) {
    couponMsg.textContent = "";
    couponInput.className = "valid";
    finalBox.textContent =
      `Coupon applied: ${cart.discountPercent}% off. Final total: Rs. ${cart.getFinalTotal().toFixed(2)}`;
  } else {
    couponInput.className = "invalid";
    couponMsg.textContent = "Invalid coupon. Use format like SAVE20 or DISC10.";
    finalBox.textContent = "";
  }
});
