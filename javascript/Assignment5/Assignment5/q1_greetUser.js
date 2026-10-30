// Q1: Callback demonstration

// Callback function: runs AFTER the greeting is printed
function showEndMessage() {
  console.log("Welcome to the course!");
}

// greetUser prints a greeting, then calls the function passed to it
function greetUser(name, callback) {
  console.log(`Hello ${name}`); // Step 1: greeting
  callback();                   // Step 2: execute the callback
}

// Passing showEndMessage WITHOUT () so it is passed as a value, not called now
greetUser("Rahul", showEndMessage);
// Flow: greetUser starts -> prints "Hello Rahul" -> callback() -> prints "Welcome to the course!"
