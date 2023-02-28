const ul = document.querySelector(".nav-items ul");
const dropdown = document.getElementsByClassName("dropdown-menu")[0];

dropdown.addEventListener("click", function () {
  ul.classList.toggle("dropdown2");
});
