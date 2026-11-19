// Q2 - Task Scheduler: Microtask vs Macrotask

console.log("Start");

// macrotask: goes to the macrotask (callback) queue, even with 0 delay
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// microtask: goes to the microtask queue
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// synchronous log: runs immediately on the call stack
console.log("Synchronous log");

console.log("End");

/*
  Output order:
    Start
    Synchronous log
    End
    Promise.then callback (microtask)
    setTimeout callback (macrotask)

  Why do microtasks run before macrotasks?
  1. First, JavaScript runs all the synchronous code on the call stack
     (Start, Synchronous log, End).
  2. When the call stack becomes empty, the event loop first empties the
     ENTIRE microtask queue (Promise callbacks).
  3. Only after the microtask queue is empty does the event loop pick ONE task
     from the macrotask queue (setTimeout callbacks), and after that
     it checks the microtask queue again.
  So microtasks always have a higher priority than macrotasks, even if the
  setTimeout delay is 0.
*/
