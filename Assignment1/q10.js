// Q10 - Citizen Eligibility Validator

const age = 19;
const isCitizen = true;

/*
  Note: the assignment gives two overlapping rules for citizens
  ("citizen and age >= 18" for all services, and "citizen and 18-20" for voting only).
  To make both work, I treat citizens aged 21 and above as eligible for all services,
  and citizens aged 18 to 20 as eligible to vote only.
*/

if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
