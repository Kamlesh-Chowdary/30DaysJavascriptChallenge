//Task 1:  Create a module that exports a function to add two numbers. Import and use this module in another script.

const { addTwoNumber } = require("./day13.js");
let sum = addTwoNumber(5, 10);
console.log(sum);

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const { person } = require("./day13.js");

console.log(person);

//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
const { anotherFunction } = require("./day13.js");
console.log(anotherFunction());

//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

// const anotherFunction2 = require("./day13.js");
// console.log(anotherFunction2());

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const wholeModule = require("./day13.js");
console.log("This is the whole module", wholeModule);
console.log(wholeModule.easy);
console.log(wholeModule.hard);
console.log(wholeModule.addTwoNumber(2, 1));
console.log(wholeModule.person);
console.log(wholeModule.anotherFunction());

//Activity 4: Using Third-Party Modules

//Task 6:  Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

const lodash = require("lodash");
console.log(lodash.add(3, 5));

//Task 7:  Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
const axios = require("axios");
axios
  .get("https://api.restful-api.dev/objects")
  .then((data) => {
    return data.data;
  })
  .then((data) => {
    console.log(data[11]);
  });

//Activity 5: Module Bundling (Optional)
//Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
