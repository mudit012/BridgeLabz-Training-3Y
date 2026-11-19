// Q3 - Library Management System

class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false; // every book is available at the start
  }

  issueBook() {
    if (this.isIssued) {
      console.log(`"${this.title}" is already issued.`);
      return false;
    }
    this.isIssued = true;
    console.log(`"${this.title}" has been issued.`);
    return true;
  }

  returnBook() {
    if (!this.isIssued) {
      console.log(`"${this.title}" was not issued.`);
      return false;
    }
    this.isIssued = false;
    console.log(`"${this.title}" has been returned.`);
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
  new Book("Wings of Fire", "A.P.J. Abdul Kalam", "ISBN002"),
  new Book("Clean Code", "Robert C. Martin", "ISBN003"),
  new Book("Atomic Habits", "James Clear", "ISBN004"),
];

// shows only the books that are not issued
function showAvailableBooks() {
  console.log("\nAvailable books:");
  const available = books.filter((book) => !book.isIssued);
  if (available.length === 0) {
    console.log("No books available right now.");
    return;
  }
  available.forEach((b) => console.log(`${b.ISBN} - ${b.title} by ${b.author}`));
}

// search a book by ISBN and issue it
function issueBookByISBN(isbn) {
  const foundBook = books.find((book) => book.ISBN === isbn);
  if (!foundBook) {
    console.log(`No book found with ISBN ${isbn}.`);
    return;
  }
  foundBook.issueBook();
}

// ---- testing ----
showAvailableBooks();
issueBookByISBN("ISBN003");   // issue Clean Code
issueBookByISBN("ISBN003");   // try again -> already issued
issueBookByISBN("ISBN999");   // wrong ISBN
showAvailableBooks();
books[2].returnBook();        // return Clean Code
showAvailableBooks();
