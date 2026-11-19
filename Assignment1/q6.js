// Q6 - Progressive Discount System

const totalAmount = 6500; // purchase amount, change to test
let discountPercent;

if (totalAmount >= 10000) {
  discountPercent = 25;
} else if (totalAmount >= 5000) {
  discountPercent = 15;
} else if (totalAmount >= 2000) {
  discountPercent = 5;
} else {
  discountPercent = 0;
}

const discountAmount = (totalAmount * discountPercent) / 100;
const finalPrice = Math.round(totalAmount - discountAmount);

console.log(`Original total      : Rs. ${totalAmount}`);
console.log(`Discount percentage : ${discountPercent}%`);
console.log(`Final price         : Rs. ${finalPrice}`);
