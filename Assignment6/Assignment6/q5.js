// Q5 - Avoiding Callback Hell

// ---------- PART 1: Callback hell (nested callbacks) ----------
function stageWithCallback(stageName, callback) {
  setTimeout(() => {
    console.log(`(callback) ${stageName} done`);
    callback();
  }, 1000);
}

function runWithCallbacks(onFinish) {
  console.log("=== Pipeline using nested callbacks ===");
  stageWithCallback("design", () => {
    stageWithCallback("build", () => {
      stageWithCallback("test", () => {
        stageWithCallback("deploy", () => {
          stageWithCallback("celebrate", () => {
            console.log("(callback) Pipeline finished!\n");
            onFinish();
          });
        });
      });
    });
  }); // see the pyramid shape? with more stages it gets worse
}

// ---------- PART 2: Same pipeline using async/await ----------
function stageWithPromise(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`(async/await) ${stageName} done`);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("=== Pipeline using async/await ===");
  await stageWithPromise("design");
  await stageWithPromise("build");
  await stageWithPromise("test");
  await stageWithPromise("deploy");
  await stageWithPromise("celebrate");
  console.log("(async/await) Pipeline finished!");
}

// run the callback version first, then the async/await version
runWithCallbacks(runWithAsyncAwait);

/*
  Why async/await is more readable:
  - The code reads top to bottom like normal synchronous code, so there is
    no deep nesting (no "pyramid of doom").
  - Each stage is one simple line, so adding or removing a stage is easy.
  - Error handling is simple: one try/catch can cover the whole flow,
    while with callbacks every level needs its own error handling.
  - Under the hood, await just pauses this function and lets the event loop
    do other work, so nothing is blocked.
*/
