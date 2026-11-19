// Q2 - Live character counter with warning colors

const textArea = document.getElementById("text");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const MAX = 100;

// updates the number and the color
function updateCounter() {
  const remaining = MAX - textArea.value.length;
  counter.textContent = remaining;

  counter.classList.remove("warning", "danger");
  if (remaining <= 0) {
    counter.classList.add("danger");   // red at 0
  } else if (remaining <= 20) {
    counter.classList.add("warning");  // yellow at 20 or less
  }
}

// block typing once limit is reached
textArea.addEventListener("keydown", (e) => {
  const limitReached = textArea.value.length >= MAX;

  // keys that should still work (deleting, moving cursor, shortcuts)
  const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight",
                       "ArrowUp", "ArrowDown", "Home", "End", "Tab"];
  const isShortcut = e.ctrlKey || e.metaKey;

  if (limitReached && !allowedKeys.includes(e.key) && !isShortcut) {
    e.preventDefault();
  }
});

// input event also handles paste, so trim anything extra
textArea.addEventListener("input", () => {
  if (textArea.value.length > MAX) {
    textArea.value = textArea.value.slice(0, MAX);
  }
  updateCounter();
});

// reset everything
resetBtn.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
  textArea.focus();
});

updateCounter();
