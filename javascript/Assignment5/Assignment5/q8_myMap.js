// Q8: Custom Array.prototype.myMap

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) { // `this` is the array myMap is called on
    // Same arguments as built-in map: (element, index, array)
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3].myMap((num) => num * 2));            // [2, 4, 6]
console.log([1, 2, 3].myMap((num, idx) => num + idx));     // [1, 3, 5]
console.log(["a", "b"].myMap((s) => s.toUpperCase()));     // ["A", "B"]
console.log("Same as map():",
  JSON.stringify([1, 2, 3].myMap((n) => n * 2)) === JSON.stringify([1, 2, 3].map((n) => n * 2)));
