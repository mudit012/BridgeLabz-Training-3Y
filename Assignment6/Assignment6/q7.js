// Q7 - Lazy Loader: Promise.allSettled

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

// wraps a loader so it rejects (after finishing its normal delay) if shouldFail is true
function withRandomFailure(loader, shouldFail) {
  return loader().then((result) => {
    if (shouldFail) throw new Error("Network error");
    return result;
  });
}

async function loadDashboard() {
  const moduleNames = ["Profile", "Posts", "Messages"];

  // randomly choose which ONE module will fail (0, 1 or 2)
  const failingIndex = Math.floor(Math.random() * 3);
  console.log(`(Randomly failing module: ${moduleNames[failingIndex]})\n`);

  const startTime = Date.now();

  // allSettled waits for ALL promises and never rejects, it reports each result
  const results = await Promise.allSettled([
    withRandomFailure(loadProfile, failingIndex === 0),
    withRandomFailure(loadPosts, failingIndex === 1),
    withRandomFailure(loadMessages, failingIndex === 2),
  ]);

  const endTime = Date.now();

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]}: SUCCESS - ${result.value}`);
    } else {
      console.log(`${moduleNames[index]}: FAILED - ${result.reason.message}`);
    }
  });

  console.log(`\nTotal time taken: ${endTime - startTime} ms`);
  // the time is about 2000ms because all loaders run in parallel
  // (total = time of the slowest one, not the sum)
}

loadDashboard();
