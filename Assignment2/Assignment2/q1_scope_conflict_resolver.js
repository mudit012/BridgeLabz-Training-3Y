// Q1. Scope Conflict Resolver

// Global variable: accessible everywhere in the script
var bonus = 5000;

function calculateSalary(permanentStatus) {
  // Local variables: exist only inside this function
  let salary = 40000;
  let isPermanent = permanentStatus; // local boolean flag

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    salary += bonus;
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
}

console.log("--- Scope demonstration ---");
calculateSalary(true);   // salary = 45000
calculateSalary(false);  // salary = 40000

// The global 'bonus' is untouched by changing isPermanent
console.log("Global bonus after calls:", bonus);

// The local variables are not visible outside the function
console.log("Is 'salary' visible globally?", typeof salary !== "undefined");
console.log("Is 'isPermanent' visible globally?", typeof isPermanent !== "undefined");
