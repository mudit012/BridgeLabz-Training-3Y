// Q2. Multi-Type Data Summary
const userName = "Priya";                         // string
const userAge = 25;                               // number
const isActive = true;                            // boolean
const hobbies = ["reading", "coding", "chess"];   // array
const profile = { city: "Mathura", state: "UP" }; // object
const middleName = null;                          // null
let phoneNumber;                                  // undefined

// Helper: typeof gives "object" for arrays and null, so refine the result
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Build the report rows (label + value + type)
const report = [
  { label: "userName",    value: userName,    type: getType(userName) },
  { label: "userAge",     value: userAge,     type: getType(userAge) },
  { label: "isActive",    value: isActive,    type: getType(isActive) },
  { label: "hobbies",     value: JSON.stringify(hobbies), type: getType(hobbies) },
  { label: "profile",     value: JSON.stringify(profile), type: getType(profile) },
  { label: "middleName",  value: middleName,  type: getType(middleName) },
  { label: "phoneNumber", value: phoneNumber, type: getType(phoneNumber) }
];

// Exactly one console.table() statement
console.table(report);
