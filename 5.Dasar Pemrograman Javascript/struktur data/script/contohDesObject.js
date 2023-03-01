const profile = {
  nama: "muammar rizal",
  npm: "202043502004",
  kelas: "R64",
};

const { nama, npm, kelas } = profile;
console.log(npm);

// MELAKUKAN PADA VARIABLE YANG SUDAH DIDEKLARASIKAN
const profile2 = {
  first: "jange",
  last: "jangs",
  age: 21,
};

let first = "rizal";
let age = 22;

// menginilisasi nilai baru melalui destructuring object
({ first, age } = profile2);
console.log(first);
