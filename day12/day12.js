//Day 12: Error Handling

//Activity 1: Basic Error Handling with Try-Catch

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function errorFekega() {
  throw new Error("Aagaya Error");
}

try {
  errorFekega();
} catch (error) {
  console.log(error.message);
}

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function dumDiv(one, two) {
  if (two === 0) {
    throw new Error("Denominator can't be zero");
  }
  return one / two;
}

try {
  const res = dumDiv(5, 0);
  console.log(res);
} catch (error) {
  console.log("Error", error.message);
}

//Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  throw new Error("Hogaya");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("This will run with or without the error");
}

//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

class MyError extends Error {
  constructor(message) {
    super(message);
  }
}
function throwCustomError() {
  throw new MyError("Throws extended error from Error class");
}

try {
  throwCustomError();
} catch (error) {
  console.log("Custom Error Class", error.message);
}

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

function checkString(string) {
  if (string.length < 1) {
    throw new MyError("String is empty which is invalid");
  } else {
    return `This is the length of the String: ${string.length}`;
  }
}

try {
  const res = checkString("");
  console.log(res);
} catch (error) {
  console.log(error.message);
}

//Activity 4: Error Handling in Promises

//Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise = new Promise((resolve, reject) => {
  if (Math.random() < 0.5) {
    setTimeout(() => {
      resolve("The random value Resolved this");
    }, 1000);
  } else {
    setTimeout(() => {
      reject("The random value Rejected this");
    }, 2000);
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handleError() {
  try {
    const res = await promise;
    console.log(res, "using async await");
  } catch (error) {
    console.log(error, "using async await");
  }
}

handleError();

//Activity 5: Graceful Error Handling in Fetch

//Task 8: Use the fetch  API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("Https://Magic.com")
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message, "due to invalid URL");
  });

//Task 9: Use the fetch() API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function invalidUrl() {
  fetch("Https://Magic.com")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(
        error.message,
        "due to invalid URL,(Handled using async await)"
      );
    });
}
invalidUrl();
