//Day 11: Promises and Async/Await

//Activity 1: Understanding Promises

//Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved");
  }, 2000);
});
promise.then((message) => {
  console.log(message);
});

//Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Rejected");
  }, 2000);
});
promise1.then().catch((error) => console.log(error));

//Activity 2: Chaining Promises

//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

function callMe(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject();
    }, delay);
  });
}

callMe("This is the 1st Data fetched", 2000)
  .then((res) => {
    console.log(res);
    return callMe("This is the 2nd Data Fetched", 1500);
  })
  .then((res) => {
    console.log(res);
    return callMe("THis is the 3rd Data fetched", 500);
  })
  .then((res) => {
    console.log(res);
  });

//Activity 3: Using Async/Await

//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function willWait() {
  const res = await callMe("Hello i am inside await", 3000);
  console.log(res);
}
willWait();

//Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function rejectedFunction() {
  try {
    const res = await promise1;
    console.log(res);
  } catch (error) {
    console.log(error, "promise rejected");
  }
}
rejectedFunction();

//Activity 4: Fetching Data from an API

//Task 6: Use the fetch  API to get data from a public API and log the response data to the console using promises.

fetch("https://api.restful-api.dev/objects")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data[10]);
  });

//Task 7:Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchApi() {
  const response = await fetch("https://api.restful-api.dev/objects");
  const data = await response.json();
  console.log(data[10], "Await se aya hu mai!!!!!!!!!");
}
fetchApi();

//Activity 5: Concurrent Promises

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("!st promise resolved");
  }, 2000);
});
const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd promise resolved");
  }, 1000);
});
const prom3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3rd promise resolved");
  }, 5000);
});

Promise.all([prom1, prom2, prom3]).then((data) => {
  console.log(data);
});

//Task 9: Use the Promise.race  to log the value of the first promise that resolves among multiple promises.

Promise.race([prom1, prom2, prom3]).then((data) => {
  console.log(data, "race");
});
