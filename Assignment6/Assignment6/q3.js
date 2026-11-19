// Q3 - Bug Tracker: callback to Promise migration

// ORIGINAL callback version (kept for reference)
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// NEW Promise version
// simulateFailure is a boolean to test the failure case
function getBugs(simulateFailure = false) {
  return new Promise((resolve, reject) => {
    // we reuse the old function and connect its callback to the Promise
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API failure: could not fetch bugs"));
      } else {
        resolve(bugs);
      }
    });
  });
}

// random boolean: true means the API fails this time
const apiFails = Math.random() < 0.5;
console.log(`Fetching bugs... (simulated failure: ${apiFails})`);

getBugs(apiFails)
  .then((bugs) => {
    // convert to objects so console.table shows nice columns
    const bugTable = bugs.map((bug, index) => ({ ID: index + 1, Bug: bug }));
    console.table(bugTable);
  })
  .catch((error) => {
    console.log("Error:", error.message);
  });
