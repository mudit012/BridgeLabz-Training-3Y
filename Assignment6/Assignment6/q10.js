// Q10 - Async Delivery Pipeline

// every step takes a random 1-2 seconds and has a 10% chance of failing
function runStep(stepName, successMessage) {
  const delay = Math.floor(Math.random() * 1000) + 1000;

  return new Promise((resolve, reject) => {
    // setTimeout hands the work to the timer; the call stack is free meanwhile
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`${stepName} failed`));
      } else {
        resolve(successMessage);
      }
    }, delay);
  });
}

const takeOrder = () => runStep("takeOrder", "Step 1: Order taken");
const prepare   = () => runStep("prepare",   "Step 2: Food prepared");
const pack      = () => runStep("pack",      "Step 3: Package ready");
const dispatch  = () => runStep("dispatch",  "Step 4: Out for delivery");
const deliver   = () => runStep("deliver",   "Delivery completed!");

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // "await" pauses ONLY this function. The event loop is free to run
    // other code while the timer is waiting. When the promise resolves,
    // its continuation is put in the microtask queue and the function
    // resumes from this exact line.
    console.log(await takeOrder());
    console.log(await prepare());
    console.log(await pack());
    console.log(await dispatch());
    console.log(await deliver());
  } catch (error) {
    // if any step rejects, the later steps never run and control jumps here
    console.log(`(${error.message})`);
    console.log("Pipeline failed!");
  }
}

runPipeline();

// This line runs immediately, BEFORE the pipeline finishes, because
// runPipeline() pauses at its first await and gives control back here.
console.log("(main script finished, pipeline is still running in the background)");
