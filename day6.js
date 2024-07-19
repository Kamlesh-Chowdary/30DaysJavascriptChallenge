//Day 6: Arrays

//Activity 1: Array Creation and Access

//Task 1:  Create an array of numbers from 1 to 5 and log the array to the console.

let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = i + 1;
}
console.log(arr);

//Task 2:  Access the first and last elements of the array and log them to the console.

console.log(arr[0], arr[arr.length - 1]);

//Activity 2: Array Methods (Basic)

//Task 3: Use the push  method to add a new number to the end of the array and log the updated array.

arr.push(6);
console.log(arr);

//Task 4: Use the pop method to remove the last element from the array and log the updated array.
arr.pop();
console.log(arr);

//Task 5: Use the shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr);

//Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr);

//Activity 3: Array Methods (Intermediate)

//Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const newArr = arr.map((value) => value * 2);

console.log(newArr);

//Task 8: Use the filter method to create a new array with only even numbers and log the new array.

const evenArr = arr.filter((num) => num % 2 === 0);
console.log(evenArr);

//Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sum = arr.reduce((acc, init) => {
  acc += init;
  return acc;
}, 0);
console.log(sum);

//Activity 4: Array Iteration

//Task 10: Use the for loop to iterate over the array and log each element to the console.

for (let i in evenArr) {
  console.log(evenArr[i]);
}

//Task 11: use forEach method to iterate over the array and log each element to the console.

newArr.forEach((value, index) => {
  console.log(value, index);
});

//Activity 5: Multi-dimensional Arrays

//Task 12:  Create a two-dimensional array (matrix) and log the entire array to the console.

const twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(twoDArray);

//Task 13:  Access and log a specific element from the two-dimensional array.

console.log(twoDArray[1][1]);
