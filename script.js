const addBookBtn = document.querySelector('.add-book-btn');
const bookForm = document.querySelector('#book-form');
const closeForm = document.querySelector('.close-form');
const content = document.querySelector('.content');



addBookBtn.addEventListener('click', () => {
  content.appendChild(bookForm);
});

closeForm.addEventListener('click', () => {
  content.removeChild(bookForm);
});

let myLibrary = [];

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function addBookToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
    let bookCard = document.createElement('div');
    let bookInfo = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let removeBook = document.createElement('button');
    let libraryTitle = myLibrary[i].title;
    let libraryAuthor = myLibrary[i].author;
    let libraryPages = myLibrary[i].pages;
    title.textContent = libraryTitle;
    author.textContent = libraryAuthor;
    pages.textContent = libraryPages;
    removeBook.textContent = 'Remove';
    content.appendChild(bookCard);
    bookCard.classList.add('book-card');
    bookCard.appendChild(bookInfo);
    bookInfo.classList.add('book-info');
    bookInfo.appendChild(title);
    title.classList.add('book-title');
    bookInfo.appendChild(author);
    author.classList.add('book-author');
    bookInfo.appendChild(pages);
    pages.classList.add('book-pg');
    bookInfo.appendChild(removeBook);
    removeBook.classList.add('remove-book-btn');
    incrementCardId();
  }
}


function incrementCardId() {
  let bookCardSelect = document.querySelectorAll('.book-card');
  for (i = 0; i < bookCardSelect.length; i++) {
    bookCardSelect[i].setAttribute('id', i)
  }
  let remove = document.querySelector('.remove-book-btn');
  remove.addEventListener('click', function deleteBook() {
    myLibrary.pop(bookCardSelect[i]);
    
  }
  
)}

let submit = document.querySelector('.submit-btn');

submit.addEventListener('click', function getTarget(e) {
  e.preventDefault();
  let titleInput = `Title: ` + document.getElementById('title').value; 
  let authorInput = `Author: ` + document.getElementById('author').value; 
  let pagesInput = `Pages: ` + document.getElementById('pgnum').value; 
  let newBook = new Book(titleInput, authorInput, pagesInput);
  let addBook = myLibrary.slice(myLibrary.length - 1);
  
  myLibrary.push(newBook);
  if (myLibrary.length >= 2) {
    myLibrary.shift()
  };

  addBookToLibrary();
  });
