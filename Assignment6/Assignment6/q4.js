// Q4 - DevOps Delay: Promise.all and Promise.race

// creates a server that responds after "seconds" seconds
// it has a 10% chance to fail (random failure)
function deployToServer(serverName, seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error(`${serverName} failed to respond`));
      } else {
        resolve(`${serverName} responded after ${seconds} seconds`);
      }
    }, seconds * 1000);
  });
}

const serverA = deployToServer("Server A", 2);
const serverB = deployToServer("Server B", 3);

// Promise.all waits for BOTH servers (fails if any one fails)
Promise.all([serverA, serverB])
  .then((results) => {
    console.log(results.join("\n"));
    console.log("Deployment completed for all servers");
  })
  .catch((error) => {
    console.log("Promise.all failed:", error.message);
  });

// Promise.race gives the result of whichever settles first
Promise.race([serverA, serverB])
  .then((fastest) => {
    console.log("Fastest response:", fastest);
  })
  .catch((error) => {
    console.log("Promise.race failed:", error.message);
  });
