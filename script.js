const addBookBtn = document.querySelector('.add-book-btn');
const bookForm = document.querySelector('#book-form');
const closeForm = document.querySelector('.close-form');

addBookBtn.addEventListener('click', () => {
  bookForm.style.display = 'block';
});

closeForm.addEventListener('click', () => {
  bookForm.style.display = 'none';
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