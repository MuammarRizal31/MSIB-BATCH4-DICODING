// const contents = document.querySelector(".container");
// function welcome() {
//   alert("Ayo semangat");
//   contents.removeAttribute("hidden");
// }
// document.body.onload = welcome;

// const eventButton = document.querySelector(".event");
// eventButton.addEventListener("click", () => {
//   const jange = document.getElementById("count").innerText++;

//   if (jange == 5) {
//     // contents.toggleAttribute("hidden");
//     let attributeBaru = document.createElement("h4");
//     attributeBaru.innerText = "Hallo taniaaaaaa";
//     const img = document.createElement("img");
//     img.setAttribute("src", "../../../tugasMSIB/portfolioDicoding/img/dicoding-header-logo.png");
//     contents.appendChild(attributeBaru).appendChild(img);
//     document.querySelector(".oi").toggleAttribute("hidden");
//   }
// });

function helo() {
  console.log("Hello world");
}

helo();

function Biodata(nama, umur, lahir) {
  this.nama = nama;
  this.umur = umur;
  this.lahir = lahir;
}

console.log(Biodata("jange", "20", "jakarta"));
console.log(Biodata("janggsss", "20", "jakarta"));

let jange = function () {
  let a = "jange";
  return a;
};
console.log(jange);
console.log(Date());
console.log(new Date());
let hari = new Date();
