// CONTOH MENGGUNAKAN ARRAY DAN SPREAD

// array biasa
let arr1 = ["jange", "jangs", "rizal"];
console.log("Hasilnya adalah : ", arr1);
/*
 output : 
 Hasilnya adalah :  [ 'jange', 'jangs', 'rizal' ]
*/

// operator spread
let arr2 = ["jange", "jangs", "topet"];
console.log("Hasilnya adalah : ", ...arr2);
/*
output : 
Hasilnya adalah :  jange jangs topet
 */

// MENGGABUNGKAN DUA BUAH ARRAY biasa
let arrr1 = ["jange", "jangs", "topet"];
let arrr2 = ["oi", "apa", "lu dimana"];
let jumlahArr = [arrr1, arrr2];
console.log("Hasil penjumlahan array : ", jumlahArr);
/*
output : 
Hasil penjumlahan array :  [ [ 'jange', 'jangs', 'topet' ], [ 'oi', 'apa', 'lu dimana' ] ]
 */

// menggabungkan dua buah array menggunakan spread operator
let ar1 = ["muammar", "rizal", "jange"];
let ar2 = ["itu", "nama", "saya"];
let ar3 = [...ar1, ...ar2];
console.log("hasil dari penjumlahan array spread : ", ar3);

// contoh menggunakan spread pada object
let object1 = {
  nama: "muammar rizal",
  umur: 21,
  kelamin: "pria",
};

let object2 = {
  nama1: "ardhian",
  umur1: 20,
  kelamin1: "pria",
};

let object3 = {
  ...object1,
  ...object2,
};

console.log("Contoh object spread : ", object3);
