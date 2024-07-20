//Day 8: ES6+ Features

//Activity 1: Template Literals

//Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const person = {
  name: "Kanjura",
  age: 29,
};

console.log(`I am ${person.name} and my age is ${person.age}`);

//Task 2: Create a multi-line string using template literals and log it to the console.
let a = `I am ${person.name}
and my age is 


       ${person.age}`;

console.log(a);

//Activity 2: Destructuring

//Task 3:  Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second] = numbers;
console.log(first, second);

//Task 4:  Use object destructuring to extract the title and author from a book object and log them to the console.

const book = {
  title: "Kumba letantche",
  author: "Yalkonkh letantche",
  year: 1969,
};
const { title, author } = book;

console.log(title, author);

//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const alphaNumberic = [...numbers, "a", "b", "@", "%"];
console.log(alphaNumberic);

//Task 6:  Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sumThem(first, second, ...all) {
  return all.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumThem(1, 2, 3, 4, 5, 6));

// const [pehla, ...bachaHua] = numbers;
// console.log(pehla, bachaHua);

//Activity 4: Default Parameters

//Task 7:  Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function productNikaltaHu(pehla, doosra = 1) {
  return pehla * doosra;
}
console.log(productNikaltaHu(2, 10));
console.log(productNikaltaHu(20));

//Activity 5: Enhanced Object Literals

//Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

const borrowed = 2000;
const returned = 500;

const udhari = {
  borrowed,
  returned,
  bakiKitnaHai() {
    return this.borrowed - this.returned;
  },
};
console.log(udhari);
console.log(udhari.bakiKitnaHai());

//Task 9: Create an object with computed property names based on variables and log the object to the console.

const property1 = "name";
const property2 = "age";

const Male = {
  [property1]: "Chikunjar",
  [property2]: 20,
};

console.log(Male);
