// Q5 - Image gallery with modal preview

const gallery = document.getElementById("gallery");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const bigImage = document.getElementById("bigImage");

// open modal when any image in the grid is clicked (delegation)
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    bigImage.src = e.target.src;
    bigImage.alt = e.target.alt;
    overlay.style.display = "flex";
  }
});

// clicking on the dark background closes the modal
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// clicking inside the modal should NOT close it,
// so we stop the click from reaching the overlay
modal.addEventListener("click", (e) => {
  e.stopPropagation();
});
