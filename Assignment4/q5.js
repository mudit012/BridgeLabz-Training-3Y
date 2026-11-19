// Q5 - Movie ticket booking with RegExp validation

const form = document.getElementById("bookingForm");
const ticketBox = document.getElementById("ticket");

const rules = {
  name:  { regex: /^[A-Za-z ]+$/,               message: "Name should contain only alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." },
  seats: { regex: /^([1-9]|10)$/,               message: "Seats must be a number from 1 to 10." },
};

function validateField(id) {
  const input = document.getElementById(id);
  const isValid = rules[id].regex.test(input.value.trim());
  input.classList.toggle("valid", isValid);
  input.classList.toggle("invalid", !isValid);
  document.getElementById(id + "Error").textContent = isValid ? "" : rules[id].message;
  return isValid;
}

Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const allValid = Object.keys(rules).map(validateField).every(Boolean);

  if (!allValid) {
    ticketBox.style.display = "none";
    return;
  }

  // store booking info in an object
  const booking = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    seats: Number(document.getElementById("seats").value),
  };

  ticketBox.style.display = "block";
  ticketBox.innerHTML = `
    <h3>Ticket Booked!</h3>
    <p><b>Name:</b> ${booking.name}</p>
    <p><b>Email:</b> ${booking.email}</p>
    <p><b>Seats:</b> ${booking.seats}</p>
  `;
  console.log(booking);
});
