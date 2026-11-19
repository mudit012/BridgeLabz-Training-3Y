// Q1 - Product list with Add / Edit / Delete using event delegation

const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

// keeps track of which <li> is currently being edited (if any)
let currentlyEditing = null;

// creates one product row
function createProduct(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span class="name">${text}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  return li;
}

// ADD product
function addProduct() {
  const text = input.value.trim();
  if (text === "") return; // ignore empty input
  list.appendChild(createProduct(text));
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addProduct);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addProduct();
});

// switch a row into edit mode
function startEdit(li) {
  // if some other row is already open, save it first
  if (currentlyEditing && currentlyEditing !== li) saveEdit(currentlyEditing);

  const nameSpan = li.querySelector(".name");
  const box = document.createElement("input");
  box.type = "text";
  box.className = "edit-box";
  box.value = nameSpan.textContent;
  li.replaceChild(box, nameSpan);
  li.querySelector(".edit").textContent = "Save";
  box.focus();
  currentlyEditing = li;
}

// save the text and go back to normal mode
function saveEdit(li) {
  const box = li.querySelector(".edit-box");
  if (!box) return;
  const span = document.createElement("span");
  span.className = "name";
  span.textContent = box.value.trim() || "(empty)";
  li.replaceChild(span, box);
  li.querySelector(".edit").textContent = "Edit";
  currentlyEditing = null;
}

// EVENT DELEGATION: only one listener on the parent <ul>
list.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  if (e.target.classList.contains("delete")) {
    if (currentlyEditing === li) currentlyEditing = null;
    li.remove();
  } else if (e.target.classList.contains("edit")) {
    // same button works as Edit / Save
    if (li === currentlyEditing) saveEdit(li);
    else startEdit(li);
  }
});

// clicking anywhere outside the edited item -> auto save
document.addEventListener("click", (e) => {
  if (currentlyEditing && !currentlyEditing.contains(e.target)) {
    saveEdit(currentlyEditing);
  }
});
