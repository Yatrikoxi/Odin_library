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
let bottomWrapper = document.getElementById("bottomWrapper");


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
const myLibrary = [
    {name: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: "423",
    boolean: false,
}];

function Book(name, author, pages, boolean) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.boolean = boolean;
}
const addBookToLibrary = () => {
    let name = bookName.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = getReadValue();
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook)
}

const getReadValue = () => {
    if(readOrNot.value == "yes") return true;
    else return false;
}

const cardCreateFunc = function cardCreate() {
    let card = document.createElement("div");
            card.classList.add("bookCard");
            bottomWrapper.appendChild(card);
    let nameBook = document.createElement("p");
            nameBook.classList.add("headerText")
            nameBook.innerHTML = 'Name: ';
    let nameContent = document.createElement("span");
            nameContent.classList.add("dataText");
            nameContent.innerHTML = `${this.name}`;
    let authorBook = document.createElement("p");
            authorBook.classList.add("headerText")
            authorBook.innerHTML = 'Author: ';
    let authorContent = document.createElement("span");
            authorContent.classList.add("dataText");
            authorContent.innerHTML = `${this.author}`;
    let pagesBook = document.createElement("p");
            pagesBook.classList.add("headerText")
            pagesBook.innerHTML = 'Pages: ';
    let pagesContent = document.createElement("span");
            pagesContent.classList.add("dataText");
            pagesContent.innerHTML = `${this.pages}`;
    let readBook = document.createElement("p");
        readBook.classList.add("headerText");
        readBook.innerHTML = 'Read: ';
    let readContent = document.createElement("button");
        if (getReadValue() == true) {
            readContent.classList.add("noBtn")
            readContent.textContent = "YES";
        } else {
            readContent.classList.add("yesBtn")
            readContent.textContent = "NO";
        }
nameBook.appendChild(nameContent);
authorBook.appendChild(authorContent);
pagesBook.appendChild(pagesContent);
readBook.appendChild(readContent);

card.appendChild(nameBook);
card.appendChild(authorBook);
card.appendChild(pagesBook);
card.appendChild(readBook);
}

myLibrary.forEach(cardCreateFunc);
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
    clearForm();
    closePopup();
})