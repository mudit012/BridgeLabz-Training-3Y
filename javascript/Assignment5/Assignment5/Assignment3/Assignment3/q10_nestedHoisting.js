"use strict";

function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

function outerArrow() {
  console.log(count);
  var count = 5;
  var inner = () => {
    console.log(count);
    var count = 10;
  };
  inner();

}
console.log("--- Arrow version ---");
outerArrow();

try {
  (function demo() {
    early();
    var early = () => {};
  })();
} catch (e) {
  console.log(`Arrow called before assignment -> ${e.name}: ${e.message}`);
}

function outerFixed() {
  var count = 5;
  function inner() {
    console.log(count);
  }
  inner();
}
console.log("--- Fixed (closure) ---");
outerFixed();
