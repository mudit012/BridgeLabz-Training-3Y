// Q9 - Form validation with preventDefault() and live errors

const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMsg = document.getElementById("success");

// each function returns an error message, or "" if the field is fine
function checkName() {
  return nameInput.value.trim() === "" ? "Name is required." : "";
}
function checkEmail() {
  const value = emailInput.value.trim();
  if (value === "") return "Email is required.";
  if (!value.includes("@")) return "Email must contain @.";
  return "";
}
function checkPassword() {
  return passwordInput.value.length < 6 ? "Password must be at least 6 characters." : "";
}

// shows or clears the error under a field
function showError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.classList.toggle("invalid", message !== "");
}

// runs all checks, returns true only if everything is valid
function validateAll() {
  const nameMsg = checkName();
  const emailMsg = checkEmail();
  const passMsg = checkPassword();

  showError(nameInput, "nameError", nameMsg);
  showError(emailInput, "emailError", emailMsg);
  showError(passwordInput, "passwordError", passMsg);

  return !nameMsg && !emailMsg && !passMsg;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop the page from reloading / submitting
  successMsg.textContent = "";

  if (validateAll()) {
    successMsg.textContent = "Form Submitted Successfully";
    form.reset();
  }
});

// live errors: when the user fixes a field, its error disappears automatically
nameInput.addEventListener("input", () => showError(nameInput, "nameError", checkName()));
emailInput.addEventListener("input", () => showError(emailInput, "emailError", checkEmail()));
passwordInput.addEventListener("input", () => showError(passwordInput, "passwordError", checkPassword()));
