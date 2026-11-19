// Q9 - Debugging the Event Loop

/*
  PREDICTED OUTPUT (before running):
    1. Script start
    2. Script end
    3. Promise callback
    4. Timeout callback
*/

console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

/*
  ACTUAL OUTPUT (after running):
    Script start
    Script end
    Promise callback
    Timeout callback
  -> It matches my prediction.

  EXPLANATION:
  - "Script start" and "Script end" are synchronous, so they run right away
    on the call stack.
  - setTimeout() hands its callback to the browser/Node timer; when the timer
    finishes, the callback is placed in the MACROTASK queue.
  - Promise.then() places its callback in the MICROTASK queue.
  - When the call stack is empty, the event loop always drains the whole
    microtask queue first, and only then takes the next macrotask.
  - So "Promise callback" is printed before "Timeout callback", even though
    the timeout is 0 ms.
*/
