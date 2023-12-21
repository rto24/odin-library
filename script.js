const addBookBtn = document.querySelector('.add-book-btn');
const bookForm = document.querySelector('#book-form');
const closeForm = document.querySelector('.close-form');
const bookCard = document.querySelector('.book-card');

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
}

function Library() {
  this.book = [];
  this.addBook = function(book) {
    this.book.push(book);
  }
}

let library = new Library();

function addBookToLibrary() {
  for (let i = 0; i < library.book.length; i++) {
    let bookInfo = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let libraryTitle = library.book[i].title;
    let libraryAuthor = library.book[i].author;
    let libraryPages = library.book[i].pages;
    title.textContent = libraryTitle;
    author.textContent = libraryAuthor;
    pages.textContent = libraryPages;
    bookCard.appendChild(bookInfo);
    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
  }
}

let submit = document.querySelector('.submit-btn');

submit.addEventListener('click', function getTarget(e) {
  e.preventDefault()
  let titleInput = document.getElementById('title').value; 
  let authorInput = document.getElementById('author').value; 
  let pagesInput = document.getElementById('pgnum').value; 
  let newBook = new Book(titleInput, authorInput, pagesInput);
  library.addBook(newBook);
  addBookToLibrary();
});
