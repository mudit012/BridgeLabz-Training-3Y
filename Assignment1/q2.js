// Q2 - Multi-Type Data Summary

// variables of different data types
const userName = "Riya Sharma";
const age = 21;
const isStudent = true;
const hobbies = ["reading", "cricket", "coding"];
const address = { city: "Mathura", state: "Uttar Pradesh" };
const middleName = null;
let phoneNumber; // not assigned, so it is undefined

// helper to find the type. typeof gives "object" for arrays and null,
// so we check those two separately
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// one array of objects -> printed with a single console.table()
const report = [
  { Label: "userName",    Value: userName,                 Type: getType(userName) },
  { Label: "age",         Value: age,                      Type: getType(age) },
  { Label: "isStudent",   Value: isStudent,                Type: getType(isStudent) },
  { Label: "hobbies",     Value: JSON.stringify(hobbies),  Type: getType(hobbies) },
  { Label: "address",     Value: JSON.stringify(address),  Type: getType(address) },
  { Label: "middleName",  Value: middleName,               Type: getType(middleName) },
  { Label: "phoneNumber", Value: phoneNumber,              Type: getType(phoneNumber) },
];

console.table(report);
