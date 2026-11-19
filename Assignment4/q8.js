// Q8 - Dynamic Object Updater

const user = { name: "John", email: "john@mail.com", age: 21 };

const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const display = document.getElementById("display");

// puts the current object values inside the form fields
function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

// shows the object below the form
function showUser() {
  display.textContent = JSON.stringify(user, null, 2);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // update the object with the new values
  user.name = nameInput.value.trim();
  user.email = emailInput.value.trim();
  user.age = Number(ageInput.value);
  showUser();
  console.log("Updated user:", user);
});

fillForm();
showUser();
