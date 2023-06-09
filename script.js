let plusIcon = document.getElementById("plusIcon");
let popupForm = document.getElementById("popupFormId");
let bookName = document.getElementById("bookName");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let readOrNot = document.getElementById("readOrNot");
let yesBtn = document.getElementById("yesBtn");
let form = document.getElementById("form");
let submitBtn = document.getElementById("submitBtn");
let closeSymbol = document.getElementById("closeBtn");
let bottomWrapper = document.getElementById("bottomWrapper");
let deleteBtn = document.getElementById("deleteBookBtn");
let buttonDiv = document.getElementsByClassName("buttonDiv");

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

function cardCreate(myLibrary) {
    let card = document.createElement("div");
            card.classList.add("bookCard");
            bottomWrapper.appendChild(card);
    let nameBook = document.createElement("p");
            nameBook.classList.add("headerText")
            nameBook.innerHTML = 'Name: ';
    let nameContent = document.createElement("span");
            nameContent.classList.add("dataText");
            nameContent.innerHTML = `${myLibrary.name}`;
    let authorBook = document.createElement("p");
            authorBook.classList.add("headerText")
            authorBook.innerHTML = 'Author: ';
    let authorContent = document.createElement("span");
            authorContent.classList.add("dataText");
            authorContent.innerHTML = `${myLibrary.author}`;
    let pagesBook = document.createElement("p");
            pagesBook.classList.add("headerText")
            pagesBook.innerHTML = 'Pages: ';
    let pagesContent = document.createElement("span");
            pagesContent.classList.add("dataText");
            pagesContent.innerHTML = `${myLibrary.pages}`;
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
        readContent.setAttribute("id", "yesBtn");
let buttonDivRead = document.createElement('div');
        buttonDivRead.classList.add("buttonDiv");
    
    let deleteBtn = document.createElement("p");
        deleteBtn.classList.add("headerText");
        deleteBtn.innerHTML = 'Delete? ';
    let deleteBtnContent = document.createElement("button");
        deleteBtnContent.classList.add("deleteBtn")
        deleteBtnContent.innerHTML = 'DELETE';
let buttonDivDelete = document.createElement('div');
        buttonDivDelete.classList.add("buttonDiv");


nameBook.appendChild(nameContent);
authorBook.appendChild(authorContent);
pagesBook.appendChild(pagesContent);
buttonDivRead.appendChild(readBook);
buttonDivRead.appendChild(readContent)
buttonDivDelete.appendChild(deleteBtn);
buttonDivDelete.appendChild(deleteBtnContent);

card.appendChild(nameBook);
card.appendChild(authorBook);
card.appendChild(pagesBook);
card.appendChild(buttonDivRead);
card.appendChild(buttonDivDelete);
}
function readOrNotFunc(boolean) {
    if (boolean == true){
        yesBtn.classList.add("noBtn");
        yesBtn.innerHTML = "YES";
    } else {
        yesBtn.classList.add("yesBtn");
        yesBtn.innerHTML = 'NO'; 
    }
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    cardCreate(myLibrary)
    clearForm();
    closePopup();
})

// yesBtn.addEventListener('click', () => {
//     readOrNotFunc()
// })
myLibrary.forEach(cardCreate);