let body = document.querySelector("body");
let buttonColorMode = document.querySelector(".button-light");

buttonColorMode.addEventListener("click", () =>{
    body.classList.toggle("dark-mode");
})