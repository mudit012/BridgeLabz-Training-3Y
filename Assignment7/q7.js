// Q7 - Mouse coordinates logger + red dot on double click

const box = document.getElementById("box");
const coords = document.getElementById("coords");

// live coordinates while moving inside the box
box.addEventListener("mousemove", (e) => {
  coords.textContent = `clientX: ${e.clientX}, clientY: ${e.clientY}`;
});

// reset text when mouse leaves
box.addEventListener("mouseleave", () => {
  coords.textContent = "clientX: -, clientY: -";
});

// double click -> drop a red dot
box.addEventListener("dblclick", (e) => {
  // clientX/Y are relative to the window, but the dot is positioned
  // relative to the box, so subtract the box's position
  const boxPosition = box.getBoundingClientRect();
  const x = e.clientX - boxPosition.left - box.clientLeft;
  const y = e.clientY - boxPosition.top - box.clientTop;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  box.appendChild(dot);
});
