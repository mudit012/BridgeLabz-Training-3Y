// Q4 - Academic Performance Evaluator

// marks of 5 subjects (each out of 100)
const marks = [78, 85, 92, 66, 88];
const totalSubjects = marks.length;
const maxMarksPerSubject = 100;

// calculate total, average and percentage
let totalMarks = 0;
for (const mark of marks) {
  totalMarks += mark;
}
const average = totalMarks / totalSubjects;
const percentage = (totalMarks / (totalSubjects * maxMarksPerSubject)) * 100;

// validation: if ANY subject is below 35, student is detained
const failedInAnySubject = marks.some((mark) => mark < 35);

console.log(`Marks      : ${marks.join(", ")}`);
console.log(`Average    : ${average.toFixed(2)}`);
console.log(`Percentage : ${percentage.toFixed(2)}%`);

if (failedInAnySubject) {
  console.log("Detained (scored below 35 in a subject)");
} else if (percentage >= 85) {
  console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
