"use strict";

function showMessageBroken() {
  greeting = "Welcome";
  console.log(greeting);
}
try {
  showMessageBroken();
} catch (error) {
  console.log(`1) ${error.name}: ${error.message}`);
}

function showMessage() {
  const greeting = "Welcome";
  console.log(`2) ${greeting}`);
}
showMessage();

function level2(text) {
  const watchMe = text.toUpperCase();
  debugger;
  console.log(`3) ${watchMe}`);
}
function level1() {
  level2("welcome");
}
level1();
