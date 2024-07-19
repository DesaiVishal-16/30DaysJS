//Day 7: Objects

//Tasks/Acrivities:

//Activity 1: Object Creation and Access

//Task 1: Create an object representing a book with properties like title.author,and year, an log the object to the console,

const book = {
  title: "The Book Of Rings",
  author: "Miyamoto Musashi",
  year: 1645,
};
console.log("Object Book is: ");
console.log(book);

//Task 2: Access and log the title and author properties of the book object.

const titleName = book.title;
const authorName = book.author;
console.log("Name of the title is:", titleName);
console.log("Name of the author is:", authorName);

//Activity 2: Object Methods

//Task 3: Add  a method to the book that returns a string with the book`s title and author, and log the result of calling this method.

book.getBookInfo = function () {
  return `${this.title} by ${this.author}`;
};
console.log("Added new method getBookInfo");
console.log(book);
console.log("New Mehod returns:", book.getBookInfo());

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book`s year property, then log the updated object.

book.updateYear = function (year) {
  this.year = year;
};
console.log("Added new Method updateYear:");
console.log(book);
book.updateYear(2024);
console.log("Book Object with change Year:", book);

//Activity 3: Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

const library = {
  name: "Unversity library",
  book: [
    {
      title: "Alogrithms",
      author: "Robert Sedgewick",
      year: 2010,
    },
    {
      title: "Computer Networking,8e",
      author: "Kurose",
      year: 2022,
    },
    {
      title: "Operating System Concepts",
      author: "Silberschatz",
      year: 2018,
    },
  ],
};
console.log("Library Object:", library);

//Task 6: Acess and log the name of the library and the titles of all the books in the library.

const nameOfLibrary = library.name;
console.log("Name of Library is:", nameOfLibrary);

console.log("All book Titles are:");
const titlesOfAllBooks = library.book.forEach((book) => {
  console.log(book.title);
});

//Activity 4: The this Keyword

//Task 7: Add a method to the book object that uses the thid keyword to return a string with the book`s title and year, and log the result of calling thid method.

library.book.forEach((book) => {
  book.getBookDetails = function () {
    return `${this.title} in ${this.year}`;
  };
});
console.log(library);
library.book.forEach((book) => {
  console.log(book.getBookDetails());
});

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
console.log("All Properties in books are:");
for (let property in book) {
  if (book.hasOwnProperty(property)) {
    console.log(`${property}:${book[property]}`);
  }
}

//Task 9 : Use Object.keys and Object.value methods to log all the keys and values of the book Object.

const keysInBook = Object.keys(book);
const valuesOfBooksKeys = Object.values(book);

console.log(keysInBook);

console.log(valuesOfBooksKeys);
