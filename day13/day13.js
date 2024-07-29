//Day 13: Modules

//Activity 1: Creating and Exporting Modules

//Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
function addTwoNumber(a, b) {
  return a + b;
}

//Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
  name: "Kaluva Singh",
  age: 20,
  greeting() {
    return `Hello ${this.name}`;
  },
};

//Activity 2: Named and Default Exports

//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
function anotherFunction() {
  return "This is another function";
}

//Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
function anotherFunction2() {
  return "This is another function";
}
// module.exports = anotherFunction2;

//Activity 3: Importing Entire Modules

//Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const easy = "easy";
const hard = "hard";

module.exports = { easy, hard, addTwoNumber, person, anotherFunction };
