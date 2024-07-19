//Day 5: Functions

//Activity 1: Function Declaration

//Task 1:  Write a function to check if a number is even or odd and log the result to the console.

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(2) ? "Even" : "Odd");

//Task 2:  Write a function to calculate the square of a number and return the result.

function squareOf(num) {
  return num ** 2;
}

console.log(squareOf(2));

//Activity 2: Function Expression

//Task 3:  Write a function expression to find the maximum of two numbers and log the result to the console.

const maxMe = function (a, b) {
  return a > b ? a : b;
};
console.log(maxMe(100, 20));

//Task 4:  Write a function expression to concatenate two strings and return the result.
const stringJodo = function (pehla, doosra) {
  return pehla + " " + doosra;
};
console.log(stringJodo("String", "Judgaya Saab"));

//Activity 3: Arrow Functions

//Task 5:  Write an arrow function to calculate the sum of two numbers and return the result.

const sum = (a, b) => a + b;
console.log(sum(2, 3));

//Task 6:  Write an arrow function to check if a string contains a specific character and return a boolean value.

const milaKya = (mujhmeDoondo, mujheDoondo) => {
  return mujhmeDoondo.includes(mujheDoondo);
};

console.log(milaKya("Character", "ra"));

//Activity 4: Function Parameters and Default Values

//Task 7:  Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const productHai = function (pehla, doosra = 1) {
  return pehla * doosra;
};
console.log(productHai(5, 69));

//Task 8:  Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const apkaNameAurUmar = function (name, age = 15) {
  return `Name apka ${name} hai aur umar apki ${age} saal hai.`;
};

console.log(apkaNameAurUmar("kya"));

//Activity 5: Higher-Order Functions

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const highWalaFunction = function (runMe, itteBar) {
  let i = 1;
  while (i <= itteBar) {
    runMe(i);
    i++;
  }
};

highWalaFunction(function (num) {
  console.log("BHAHAhAhaAH", num);
}, 10);

//Task 10:  Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const bohathHighFunction = function (pehla, doosra, value) {
  return doosra(pehla(value));
};

console.log(
  bohathHighFunction(
    (x) => x + 2,
    (x) => x - 2,
    0
  )
);
