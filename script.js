const addBookBtn = document.querySelector('.add-book-btn');
const bookForm = document.querySelector('#book-form');

addBookBtn.addEventListener('click', () => {
  bookForm.style.display = 'block';
});

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.read =
}

function addBookToLibrary() {
  
}