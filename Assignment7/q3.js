// Q3 - 3 step form with validation

const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const errorBox = document.getElementById("error");
const stepInfo = document.getElementById("stepInfo");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

let currentStep = 0;

// each step has its own validation, returns error message or "" if ok
function validate(stepIndex) {
  if (stepIndex === 0) {
    const name = document.getElementById("name").value.trim();
    if (name.length < 2) return "Name must be at least 2 characters.";
  }
  if (stepIndex === 1) {
    const email = document.getElementById("email").value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) return "Please enter a valid email.";
  }
  if (stepIndex === 2) {
    const pass = document.getElementById("password").value;
    if (pass.length < 6) return "Password must be at least 6 characters.";
  }
  return "";
}

// show only the current step
function showStep() {
  steps.forEach((s, i) => s.classList.toggle("active", i === currentStep));
  stepInfo.textContent = `Step ${currentStep + 1} of 3`;
  backBtn.disabled = currentStep === 0;
  nextBtn.textContent = currentStep === steps.length - 1 ? "Finish" : "Next";
  errorBox.textContent = "";
}

nextBtn.addEventListener("click", () => {
  const message = validate(currentStep);
  if (message) {
    errorBox.textContent = message;  // stay on this step
    return;
  }

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  } else {
    showSummary(); // all steps done
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

function showSummary() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;

  formArea.style.display = "none";
  summary.style.display = "block";
  summary.innerHTML = `
    <h3>Summary</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${"*".repeat(pass.length)}</p>
  `;
}

showStep();
