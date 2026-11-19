// Q9 - Fitness App Analytics

class FitnessAnalytics {
  constructor(data) {
    // throw an error if the dataset is empty or missing
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Dataset is empty. Cannot perform analytics.");
    }
    this.data = data;
  }

  // users who walked more than 7000 steps
  getActiveUsers() {
    return this.data.filter((entry) => entry.steps > 7000);
  }

  // average calories using reduce()
  getAverageCalories() {
    const totalCalories = this.data.reduce((sum, entry) => sum + entry.calories, 0);
    return totalCalories / this.data.length;
  }

  // readable message for each user using map()
  getUserSummary() {
    return this.data.map(
      (entry) => `User ${entry.user} walked ${entry.steps} steps and burned ${entry.calories} calories.`
    );
  }
}

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 },
];

const analytics = new FitnessAnalytics(workoutData);

console.log("Active users (steps > 7000):");
console.log(analytics.getActiveUsers().map((entry) => entry.user).join(", "));

console.log("\nAverage calories:", analytics.getAverageCalories().toFixed(2));

console.log("\nUser summary:");
analytics.getUserSummary().forEach((message) => console.log(message));

// empty dataset test
try {
  new FitnessAnalytics([]);
} catch (error) {
  console.log("\nError:", error.message);
}
