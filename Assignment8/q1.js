// Q1 - Student Result Processing (reduce + classes)

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks; // array of marks
  }

  // average of marks using reduce()
  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    return total / this.marks.length;
  }

  // grade depends on the average
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 80) return "A";
    if (avg >= 60) return "B";
    if (avg >= 40) return "C";
    return "F";
  }
}

// testing with 3 students
const students = [
  new Student("Aman", [90, 85, 92, 88]),
  new Student("Riya", [65, 70, 58, 72]),
  new Student("Karan", [30, 45, 28, 35]),
];

students.forEach((student) => {
  console.log(
    `${student.name} -> Average: ${student.calculateAverage().toFixed(2)}, Grade: ${student.getGrade()}`
  );
});
