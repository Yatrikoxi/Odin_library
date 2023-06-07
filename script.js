let plusIcon = document.getElementById("plusIcon");
let popupForm = document.getElementById("popupFormId");
let bookName = document.getElementById("bookName");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let readOrNot = document.getElementById("readOrNot");
let yesBtn = document.getElementsByClassName("yesBtn");

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
let bName = "";
let bAuthor = "";
let bPages = "";
let yesOrNot = false;

function Book(name, author, pages,Boolean) {
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.Boolean = Boolean
}
