//Day 7: Objects

//Activity 1: Object Creation and Access

//Task 1:  Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book = {
  title: "Hero",
  author: "Ganna",
  year: 2019,
};
console.log(book);

//Task 2:  Access and log the title and author properties of the book object.

console.log(book.author, book.title);

//Activity 2: Object Methods

//Task 3:  Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.details = function () {
  return this.title + " " + this.author;
};
console.log(book.details());

//Task 4:  Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function (newYear) {
  this.year = newYear;
};

console.log("Before updating year:", book);
book.updateYear(1950);
console.log("After updating year:", book);

//Activity 3: Nested Objects

//Task 5:  Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Yelp",
  books: [
    {
      title: "Hero",
      author: "Ganna",
    },
    {
      title: "Zero",
      author: "Anna",
    },
  ],
};
console.log(library);

//Task 6:  Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
for (let i in library.books) {
  console.log(library.books[i].title);
}

//Activity 4: The This Keyword

//Task 7:  Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

book.titleYear = function () {
  return this.title + " " + this.year;
};
console.log(book);
console.log(book.titleYear());

//Activity 5: Object Iteration

//Task 8:  use a for .. in  loop to iterate over the properties of the book object and log each property and its value.

for (let i in book) {
  console.log(i, book[i]);
}

//Task 9: Use Object.keys and Object.values   methods to log all the keys and values of the book object.

const keys = Object.keys(book);
console.log("Keys:", keys);

const values = Object.values(book);
console.log("Values:", values);
