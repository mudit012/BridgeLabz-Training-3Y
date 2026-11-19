// Q7 - Smart Guessing Game

// random number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // test value, change it to try different guesses

console.log(`Your guess: ${userGuess}`);
console.log(`(Secret number was: ${secretNumber})`); // shown only for testing

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  // not equal, so check how far the guess is
  const difference = Math.abs(userGuess - secretNumber);

  if (difference <= 3) {
    console.log("Very close!");
  } else {
    // nested if to decide high or low
    if (userGuess > secretNumber) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}
