const sidebar = document.querySelector(".sidebar");
const buttonClick = document.querySelector(".toggler");

buttonClick.addEventListener("click",() =>{
    sidebar.classList.toggle("collapsed");
});