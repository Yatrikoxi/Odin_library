let plusIcon = document.getElementById("plusIcon");
let popupForm = document.getElementById("popupFormId");
let bookName = document.getElementById("bookName");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let readOrNot = document.getElementById("readOrNot");
let yesBtn = document.getElementsByClassName("yesBtn");
let form = document.getElementById("form");
let submitBtn = document.getElementById("submitBtn");
let closeSymbol = document.getElementById("closeBtn");

function openPopup() {
    popupForm.classList.add("openPopup")
}
function closePopup() {
    popupForm.classList.remove("openPopup")
}
plusIcon.addEventListener('click', () => {
    openPopup();
});
closeSymbol.addEventListener('click', () => {
    closePopup();
})

// Library constructor

const formBook = function Book(name, author, pages,Boolean) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.Boolean = Boolean;
}
const addBookToLibrary = () => {
    let title = bookName.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

const getReadValue = () => {
    if(form.querySelector('input[id="readOrNot"]:checked').value == 'yes') return true;
    else return false;
  }

const myLibrary = [];

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary)
})