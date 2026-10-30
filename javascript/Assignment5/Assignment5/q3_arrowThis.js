// Q3: Arrow function vs normal function and `this`

// --- Version 1: arrow function (problem) ---
const userArrow = {
  name: "Rahul",
  showName: () => {
    console.log("Arrow  ->", this.name);
  },
};
userArrow.showName(); // undefined

/*
 EXPLANATION:
 Arrow functions do NOT have their own `this`. They inherit `this` from the
 surrounding (lexical) scope. An object literal { } does not create a scope,
 so the surrounding scope here is the module/global scope.
 - In Node.js (CommonJS), `this` at top level is module.exports = {} -> no `name`.
 - In a browser, `this` is window -> window.name is "" or undefined.
 So this.name is undefined, NOT the user object's name.
*/

// --- Version 2: normal function (fix) ---
const userNormal = {
  name: "Rahul",
  showName: function () {
    console.log("Normal ->", this.name);
  },
};
userNormal.showName(); // Rahul

/*
 A normal function gets `this` from HOW it is called. Calling
 userNormal.showName() makes `this` the object before the dot (userNormal).
*/
