// Q2. String Manipulation Report

const productName = "  wireless headphones PRO  ";

// Step 1: remove extra spaces and convert to lowercase
const trimmedLower = productName.trim().toLowerCase();

// Step 2: capitalize the first letter of each word
const capitalized = trimmedLower
  .split(" ")                                          // split into words
  .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
  .join(" ");                                          // join back together

// Step 3: replace the word "Pro" with "Pro Edition"
const cleanTitle = capitalized.replace(/\bpro\b/i, "Pro Edition");

// Step 4: display result and length
console.log(`Original  : "${productName}"`);
console.log(`Cleaned   : "${cleanTitle}"`);
console.log(`Length    : ${cleanTitle.length}`);
