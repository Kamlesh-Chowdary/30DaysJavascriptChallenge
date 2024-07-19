//Day 3: Control Structures

//Activity 1: If-Else Statements

//Task 1:  Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num = -1;

if (num === 0) {
  console.log("Zero");
} else if (num > 0) {
  console.log("positive");
} else {
  console.log("negative");
}

//Task 2:  Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not Eligible to vote");
}

//Activity 2: Nested If-Else Statements

//Task 3:  Write a program to find the largest of three numbers using nested if-else statements.

let a = 1,
  b = 3,
  c = 0;

if (a > b) {
  if (a > c) {
    console.log("a is the largest");
  } else {
    console.log("c is largest");
  }
} else if (b > c) {
  console.log("b is largest");
} else {
  console.log("c is largest");
}

//Task 4:  Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 5;

switch (day) {
  case 1: {
    console.log("Monday");
    break;
  }
  case 2: {
    console.log("Tuesday");
    break;
  }
  case 3: {
    console.log("Wednesday");
    break;
  }
  case 4: {
    console.log("Thursday");
    break;
  }
  case 5: {
    console.log("Friday");
    break;
  }
  case 6: {
    console.log("Saturday");
    break;
  }
  case 7: {
    console.log("Sunday");
    break;
  }
  default: {
    console.log("Incorrect Expression");
  }
}

//Task 5:  Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

let marks = 61;
switch (true) {
  case marks > 90 && marks <= 100:
    console.log("A grade");
    break;
  case marks > 80 && marks <= 90:
    console.log("B grade");
    break;
  case marks > 70 && marks <= 80:
    console.log("C grade");
    break;
  case marks > 60 && marks <= 70:
    console.log("D grade");
    break;
  case marks <= 60:
    console.log("F grade");
    break;
  default:
    console.log("Please enter a valid input");
    break;
}

//Activity 4: Conditional (Ternary) Operator

//Task 6:  Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

const number = 91;
number % 2 === 0 ? console.log("Even") : console.log("Odd");

//Activity 5: Combining Conditions

//Task 7:  Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2400;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap year");
}
