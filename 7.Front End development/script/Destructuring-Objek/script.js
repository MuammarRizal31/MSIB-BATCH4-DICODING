// contoh biasa destruksi
const profile = {
  nama: "Muammar Rizal",
  lahir: "Jakarta",
  umur: 21,
};

// const { nama, lahir, umur } = profile;

// contoh ketika kita ingin menginisiasi nilainya
let nama = "jange";
({ nama, lahir } = profile);
console.log(nama);

// default values
const profile2 = {
  nama2: "jange",
  umur: 21,
};

const { nama2, umur, kelamin = "gender" } = profile2;
console.log(kelamin);

// mengubah nama menjadi yang kita inginkan
const profile3 = {
  nama: "Muammar Rizal",
  lahir: "Jakarta",
};

const { nama: namaSaya, lahir: lahirSaya } = profile3;
console.log(namaSaya);
