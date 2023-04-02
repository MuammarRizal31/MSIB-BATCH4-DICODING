const favorites = ["buah", "salak", "nugget"];
const favorites2 = ["buah2", "salak", "nugget2"];
const favorites3 = [...favorites, ...favorites2];

console.log(favorites3);

// mencari nilai terbesar
const numbers = [23, 252, 3, 532, 52333];

// sama seperti kita menuliskan
// console.log(Math.max(numbers[0], numbers[1], numbers[2], numbers[3]));

console.log(Math.min(...numbers));

/*          REST PARAMETER           */
const numbers2 = [1, 2, 3, 4, 5];
function sum(...numbers2) {
  let result = 0;
  for (let number of numbers2) {
    result += number;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));

// contoh menggunakan rest parameter dengan destructuring
const arr = ["jange", 21, "jakarta", "main game", "muammar rizal"];
const [nama, umur, lahir, ...lain] = arr;
console.log(nama);
console.log(umur);
console.log(lain);
console.log(lain[1]);
