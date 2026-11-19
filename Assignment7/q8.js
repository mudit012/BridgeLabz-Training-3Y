// Q8 - Custom dropdown without <select>

const dropdown = document.getElementById("dropdown");
const dropBtn = document.getElementById("dropBtn");
const options = document.getElementById("options");

// button toggles the option list
dropBtn.addEventListener("click", () => {
  options.classList.toggle("show");
});

// clicking an option updates button text and closes list
options.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    dropBtn.textContent = e.target.textContent + " ▼";
    options.classList.remove("show");
  }
});

// close when clicking outside.
// The third argument "true" means this listener runs in the CAPTURING phase
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    options.classList.remove("show");
  }
}, true);
