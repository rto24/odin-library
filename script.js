const bookCard = document.createElement('div');
bookCard.classList.add('book-card');

const bookInfo = document.createElement('div');
bookInfo.classList.add('book-info');
bookCard.appendChild(bookInfo);

const bookTitle = document.createElement('p');
bookTitle.classList.add('book-title');
bookTitle.textContent = `Title: ${this.title}`;

const bookAuthor = document.createElement('p');
bookAuthor.classList.add('book-author');
bookAuthor.textContent = `Author: ${this.author}`;

const bookPages = document.createElement('p');
bookPages.classList.add('book-pg');
bookAuthor.textContent = `Pages: ${this.pages}`;


console.log(bookCard);
console.log(bookInfo);

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {

}