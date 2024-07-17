//Day 1: Variables and Data Types

//Activity 1: Variable Declaration

//Task 1: Declare a variable using var , assign it a number and log the value to the console.

var age = 20;
console.log(age);

//Task 2: Declare a variable using let, assign it a string and log the value to the console.

let customerName = "Rajpal Yadav";
console.log(customerName);

//Activity 2: Constant Declaration

//Task 3: Declare a variable using const, assign it a boolean value and log the value to the console.

const married = false;
console.log(married);

//Activity 3: Data Types

//Task 4: Create variable of different data types (number, string, boolean, object, array) and log each variable's type using typeof operator.

const num = 1;
const str = "value";
const bool = true;
const obj = {
  num,
  str,
  bool,
};
const arr = [num, str, bool, obj];

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value and log both the values.

let speed = 20;
console.log(speed);
speed = 100;
console.log(speed);

//Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error.

const isHappy = !true;
console.log(isHappy);
isHappy = true;
console.log(isHappy); // TypeError: Assignment to constant variable.
