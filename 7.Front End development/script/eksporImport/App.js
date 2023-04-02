import { kopi as coffee, kopiSelesai as done, kopiSelesai } from "./jk.js";

function tampilkanDom(kopi) {
  for (const t in kopi) {
    const k = document.getElementById("kopi");
    const li = document.createElement("li");
    li.innerText = `${t} : ${kopi[t]}`;
    k.appendChild(li);
  }
}
document.addEventListener("DOMContentLoaded", tampilkanDom(coffee));

function promise(tipe, mili) {
  return new Promise(function (resolve, reject) {
    if (done) {
      if (coffee[tipe] >= mili) {
        resolve("kopi siap disajikan");
      } else {
        reject("Kopi kebanyakan");
      }
    } else {
      reject("mesin rusak");
    }
  });
}

const btn = document.getElementById("pesanKopi");
btn.addEventListener("click", function (e) {
  //   const promp = prompt("Kopi apa ?");
  //   const mili = prompt("berapa mili ?");
  promise("hitam", 10)
    .then((r) => console.log(r))
    .catch((r) => console.log(r));
});
