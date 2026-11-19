// Q8 - Order Processing Flow: retry mechanism

// fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) resolve("Order submitted");
      else reject(new Error("Server error"));
    }, 500);
  });
}

async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed successfully"; // stop retrying after a success
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
      // loop continues -> next attempt
    }
  }

  // reached only if all attempts failed
  throw new Error("Order could not be processed");
}

// handle the final failure
async function main() {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (error) {
    console.log("Final error:", error.message);
  }
}

main();
