console.log("menyalakan mesin kopi");
console.log("menggiling biji kopi");
console.log("memanaskan Air");
console.log("mencampurkan air dan kopi");
console.log("menuangkan kopi kedalam gelas");
console.log("menuangkan susu ke dalam gelas");
console.log("kopi anda sudah siap!");

const kopi = require("./../../../5.Dasar Pemrograman Javascript/module/script/belajarModule/state");

const makeCoffe = (type, limi) => {
  console.log(kopi[type]);
  if (kopi[type] >= limi) {
    console.log("kopi berhasil dibuat");
  } else {
    console.log("biji kopi habis");
  }
};
makeCoffe("robusta", 80);
