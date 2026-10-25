// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words: trim, split on whitespace, ignore empty strings
const wordCount = feedback.trim().split(/\s+/).length;

// Case-insensitive check for negative keywords
const lowerFeedback = feedback.toLowerCase();
const hasNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log("Feedback  :", feedback);
console.log("Word count:", wordCount);

if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
