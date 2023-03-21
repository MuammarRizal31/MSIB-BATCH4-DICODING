const ol = document.getElementById("daftar");
const li = document.createElement("li");
li.innerText = "Hidupkan Kompor";
// ol.appendChild(li);

const akhir = document.getElementById("akhir");
ol.insertBefore(li, akhir);
