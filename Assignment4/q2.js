// Q2 - Student form validation using RegExp

const form = document.getElementById("studentForm");

// each field has its own regex and error message
const rules = {
  name: {
    regex: /^[A-Za-z ]+$/,   // only alphabets (spaces allowed for full names)
    message: "Name should contain only alphabets.",
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,   // example@domain.com
    message: "Enter a valid email like example@domain.com.",
  },
  phone: {
    regex: /^\d{10}$/,       // exactly 10 digits
    message: "Phone number must be exactly 10 digits.",
  },
  password: {
    // lookaheads check: 1 uppercase, 1 number, 1 special character
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase, 1 number and 1 special character.",
  },
};

// validate one field, show red/green border and message
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const errorBox = document.getElementById(fieldId + "Error");
  const isValid = rules[fieldId].regex.test(input.value.trim());

  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  errorBox.textContent = isValid ? "" : rules[fieldId].message;
  return isValid;
}

// live validation while typing
Object.keys(rules).forEach((fieldId) => {
  document.getElementById(fieldId).addEventListener("input", () => validateField(fieldId));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // check every field (map first so all errors show, not just the first)
  const results = Object.keys(rules).map(validateField);
  const allValid = results.every(Boolean);

  document.getElementById("result").textContent =
    allValid ? "Registration successful!" : "";
});
