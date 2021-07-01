const menuButton = document.querySelector(".expand-button");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("show");
    this.querySelector("i").classList.toggle("bi-list");
    this.querySelector("i").classList.toggle("bi-x");
})

