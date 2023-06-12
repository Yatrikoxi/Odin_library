let plusIcon = document.getElementById("plusIcon");
let popupForm = document.getElementById("popupFormId");
let bookName = document.getElementById("bookName");
let bookAuthor = document.getElementById("bookAuthor");
let bookPages = document.getElementById("bookPages");
let readOrNot = document.querySelector('#readOrNot');
let yesBtn = document.querySelector("#yesBtn");
let submitBtn = document.getElementById("submitBtn");
let closeSymbol = document.getElementById("closeBtn");
let bottomWrapper = document.getElementById("bottomWrapper");
let deleteBtn = document.querySelector("#deleteBookBtn");
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

]

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
  Book.prototype.toggleRead = function() {
    this.read = !this.read;
  };
  

const addBookToLibrary = () => {
    let name = bookName.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = getReadValue();
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook)
}

const getReadValue = () => {
    return readOrNot.value === "yes";
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    cardCreate();
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    cardCreate();
  };
  
function cardCreate() {
    let libraryEl = document.querySelector("#bottomWrapper");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
      let book = myLibrary[i];
      let card = document.createElement("div");
      card.className = "bookCard";
      card.innerHTML = `
        <p class="headerText">Name: <span class="dataText">${book.name}</span></p>
        <p class="headerText">Author: <span class="dataText">${book.author}</span></p>
        <p class="headerText">Pages: <span class="dataText">${book.pages}</span></p>
        <div class="buttonDiv">
          <p class="headerText">Read: </p>
          <button class="toggleReadBtn ${book.read ? "noBtn" : "yesBtn"}">${book.read ? "YES" : "NO"}</button>
        </div>
        <div class="buttonDiv">
          <p class="headerText">Delete: </p>
          <button class="deleteBtn">DELETE</button>
        </div>`;
  
      bottomWrapper.appendChild(card);
    }
  }
  
  bottomWrapper.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("toggleReadBtn")) {
      const card = target.closest('.bookCard');
      const index = Array.from(bottomWrapper.children).indexOf(card);
      toggleRead(index);
    } else if (target.classList.contains("deleteBtn")) {
      const card = target.closest('.bookCard');
      const index = Array.from(bottomWrapper.children).indexOf(card);
      removeBook(index);
    }
  });
  
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    clearForm();
    closePopup();
    cardCreate();
})
cardCreate();