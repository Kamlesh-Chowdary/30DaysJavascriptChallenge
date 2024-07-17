//Day 2: Operators

//Activity 1: Arithmetic Operations

//Task 1-5: Write a program to add, substract, multiply, divide and find remainder when one number is divided by another  and log the results to the console.

let a = 10;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Activity 2: Assignment Operators

//Task 6: use the +=  operator to add a number to a variable and log the result to the console.

let age = 10;
console.log(age);
age += 20;
console.log(age);

//Task 7: use the -= operator to subtract a number from a variable and log the result to the console.

age -= 20;
console.log(age);

//Activity 3: Comparison Operators

//Task 8:  Write a program to compare two numbers using > and < and log the result to the console.

let height = 5;
console.log(height > 10);
console.log(height < 10);

//Task 9:  Write a program to compare two numbers using >= and <= and log the result to the console.

console.log(height >= 5);
console.log(height <= 5);

//Task 10:  Write a program to compare two numbers using == and === and log the result to the console.

console.log(height == "5");
console.log(height === "5");

//Activity 4: Logical Operators

//Task 11 :  Write a program that uses the &&  operator to combine two conditions and log the result to the console.

console.log(height == "5" && height === "5");

//Task 12 :  Write a program that uses the ||  operator to combine two conditions and log the result to the console.

console.log(height == "5" || height === "5");

//Task 13 :  Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(!(height === "5"));

//Activity 5: Ternary Operator

//Task 14:  Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let value = 0.00009;
let isPositive = value >= 0 ? true : false;
console.log(isPositive);
