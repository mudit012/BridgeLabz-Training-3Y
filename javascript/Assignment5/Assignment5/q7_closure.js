// Q7: Closure

function makeMultiplier(multiplier) {
  // The inner function "remembers" `multiplier` from its outer scope
  return function (number) {
    return number * multiplier;
  };
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(triple(5)); // 15
console.log(double(5)); // 10

/*
 EXPLANATION (Closure):
 When makeMultiplier(3) finishes, its local variable `multiplier` would normally
 be destroyed. But the returned inner function still references it, so JavaScript
 keeps that variable alive. This combination of a function + the variables from
 the scope where it was created is a closure.
 triple remembers multiplier = 3 and double remembers multiplier = 2; each call
 to makeMultiplier creates its own separate private copy.
*/
