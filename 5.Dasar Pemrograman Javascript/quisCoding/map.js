/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// TODO
const currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);
/**
 * Jangan hapus kode di bawah ini
 */
module.exports = { currency, priceInJPY, priceInIDR };

//membuat set
const set = new Set(["apel", "jeruk", "anggur", "jeruk"]);

set.add("strawberi");
set.add("melon");

console.log(set); //output -> {'apel','jeruk','anggur','strawberi','melon'}

// 1. contoh menggunakan set.add dan set.delete()
set.add("salak");
set.delete("jeruk");
console.log(set);

console.log(set.size);
const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2
phoneticAlphabet.splice(2, 0, "Charlie");

console.log(phoneticAlphabet);
