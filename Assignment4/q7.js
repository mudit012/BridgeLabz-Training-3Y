// Q7 - Login form validation using RegExp

const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// returns a list of error messages for the username
function checkUsername(value) {
  const errors = [];
  if (!/^.{5,}$/.test(value)) errors.push("Username must be at least 5 characters.");
  return errors;
}

// returns a list of specific error messages for the password
function checkPassword(value) {
  const errors = [];
  if (!/^.{8,}$/.test(value)) errors.push("Password must be at least 8 characters.");
  if (!/\d/.test(value)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(value)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(value)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(value)) errors.push("Password must include a special character.");
  return errors;
}

// shows errors (one per line) and updates border color
function showErrors(input, errorId, errors) {
  document.getElementById(errorId).innerHTML = errors.join("<br>");
  input.classList.toggle("invalid", errors.length > 0);
  input.classList.toggle("valid", errors.length === 0);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameErrors = checkUsername(usernameInput.value);
  const passwordErrors = checkPassword(passwordInput.value);

  showErrors(usernameInput, "usernameError", usernameErrors);
  showErrors(passwordInput, "passwordError", passwordErrors);

  const result = document.getElementById("result");
  if (usernameErrors.length === 0 && passwordErrors.length === 0) {
    result.textContent = "Login successful!";
  } else {
    result.textContent = "";
  }
});
