// Q10. Citizen Eligibility Validator
// Note: the brief's rules overlap for citizens aged 18+, so "all services"
// is applied to citizens aged 21 and above (driving/passport), and
// citizens aged 18-20 are "vote only", as the second rule intends.
const age = 19;
const isCitizen = true;

if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18) {
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
