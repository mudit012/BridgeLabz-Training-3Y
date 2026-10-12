// Q7. Smart Guessing Game
const secretNumber = Math.floor(Math.random() * 50) + 1; // 1-50
const userGuess = 25;                                     // test value

console.log(`(Secret number: ${secretNumber}, Your guess: ${userGuess})`);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const difference = Math.abs(userGuess - secretNumber);
  if (difference <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
