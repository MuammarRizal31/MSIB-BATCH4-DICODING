/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

// TODO
function minimal(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    return a;
  }
}

function power(a, b) {
  return a ** b;
}
minimal(1, 4);
minimal(3, 2);
minimal(3, 3);
/**
 * Jangan hapus kode di bawah ini
 */

module.exports = { minimal, power };

// function akan otomatis dipanggil
(function () {
  console.log("hello world!");
})();

// menggunakan parameter objek
function param({ param1, param2, param3 } = {}) {
  console.log(`param satu : ${param1}
  param dua : ${param2},
  param tiga : ${param3}
  `);
}

param({
  param1: "jange",
  param2: "topet",
  param3: "lil jangs",
});

//contoh function expression dengan inputan/callback
function tampilkan(data) {
  console.log(data);
}

function pertambahan(nilai1, nilai2, callback) {
  const result = nilai1 + nilai2;
  callback(result);
}

pertambahan(2, 4, tampilkan);

//contoh function dengan rest parameter
function rest(param1, param2, ...param3) {
  console.log("param 1 : ", param1);
  console.log("param 2 : ", param2);
  console.log("param 3 : ", param3[1]);

  for (let a of param3) {
    console.log(a);
  }
}

rest("halo", "jange", "topet", "ganteng", "hensom");

console.dir(rest);
