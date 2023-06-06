let plusIcon = document.getElementById("plusIcon");
let popupForm = document.getElementById("popupFormId");
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