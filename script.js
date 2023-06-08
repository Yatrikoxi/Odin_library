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
const myLibrary = [];
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
function bookCard() {
let card = document.createElement("div");
card.classList.add("bookCard");
bottomWrapper.appendChild(card);
let name = document.createElement("p");
name.classList.add("headerText")
name.innerHTML = 'Name: ';
let nameContent = document.createElement("span");
nameContent.classList.add("dataText");
nameContent.innerHTML = `${this.title}`;
let author = document.createElement("p");
author.classList.add("headerText")
author.innerHTML = 'Author: ';
let authorContent = document.createElement("span");
authorContent.classList.add("dataText");
authorContent.innerHTML = `${this.author}`;
let pages = document.createElement("p");
pages.classList.add("headerText")
pages.innerHTML = 'Pages: ';
let pagesContent = document.createElement("span");
pagesContent.classList.add("dataText");
pagesContent.innerHTML = `${this.pages}`;

let read = document.createElement("p");
read.classList.add("headerText");
read.innerHTML = 'Read: ';
let readContent = document.createElement("button");
 if (getReadValue() == true) {
    readContent.classList.add("noBtn")
    readContent.textContent = "YES";
}else {
    readContent.classList.add("yesBtn")
    readContent.textContent = "NO";
}
// Content.classList.add("dataText");
// authorContent.innerHTML = `${this.author}`;
name.appendChild(nameContent);
author.appendChild(authorContent);
pages.appendChild(pagesContent);
read.appendChild(readContent);

card.appendChild(name);
card.appendChild(author);
card.appendChild(pages);
card.appendChild(read);
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    bookCard(myLibrary)
    console.log(myLibrary);
    clearForm();
    closePopup();
})
