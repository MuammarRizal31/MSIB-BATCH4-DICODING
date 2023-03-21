const imgDomTree = document.querySelector(".container");

imgDomTree.setAttribute("style", "background-color:blue");

const buttonPlay = document.querySelectorAll(".btn");
const btnbtn = buttonPlay[1];
btnbtn.innerText = "belajar";

for (const button of buttonPlay) {
  button.style.height = "100px";
}
