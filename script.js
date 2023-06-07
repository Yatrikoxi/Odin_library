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
function clearForm() {
    bookName.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
}
plusIcon.addEventListener('click', () => {
    openPopup();
});
closeSymbol.addEventListener('click', () => {
    closePopup();
    clearForm();
})

// Library constructor
const myLibrary = [];
const formBook = function Book(name, author, pages, boolean) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.boolean = boolean;
}
const addBookToLibrary = () => {
    let title = bookName.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = getReadValue();
    let newBook = new formBook(title, author, pages, read);
    myLibrary.push(newBook)
}

const getReadValue = () => {
    if(readOrNot.value == "yes") return true;
    else return false;
  }



submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    clearForm();
    closePopup();

})