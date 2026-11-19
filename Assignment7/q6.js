// Q6 - Real time table filter using the input event

const searchBox = document.getElementById("search");
const rows = document.querySelectorAll("#tableBody tr");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", () => {
  // lowercase both sides so search is case-insensitive
  const keyword = searchBox.value.toLowerCase().trim();
  let visibleCount = 0;

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    if (rowText.includes(keyword)) {
      row.style.display = "";       // show
      visibleCount++;
    } else {
      row.style.display = "none";   // hide
    }
  });

  // show message only when nothing matched
  noResult.style.display = visibleCount === 0 ? "block" : "none";
});
