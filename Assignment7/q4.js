// Q4 - Theme switcher using setAttribute()

const body = document.body;
const buttons = document.querySelectorAll("[data-theme-btn]");
const currentText = document.getElementById("current");

function applyTheme(themeName) {
  // class applied using setAttribute (this replaces the old theme class)
  body.setAttribute("class", "theme-" + themeName);
  // current theme saved in a custom attribute
  body.setAttribute("data-theme", themeName);
  currentText.textContent = "Current theme: " + body.getAttribute("data-theme");
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTheme(btn.getAttribute("data-theme-btn"));
  });
});
