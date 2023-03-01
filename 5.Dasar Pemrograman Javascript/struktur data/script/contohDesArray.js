const faforit = ["games", "ngoding", "movies"];
const [permainan, kode, film] = faforit;
console.log(permainan);

const [, , seru] = faforit;
console.log(seru);

// algoritma sorting menukar dua nilai
console.log("melakukan pertukaran menggunakan argoritma sorting");
let a = 41;
let b = 123;
let c = null;

console.log("sebelum pertukaran A : ", a);
console.log("sebelum pertukaran B : ", b);

c = a;
a = b;
b = c;

console.log("Hasil pertukaran A : ", a);
console.log("Hasil pertukaran B : ", b);

// melakukan pertukaran menggunakan destructuring assignment
console.log();
console.log("melakukan pertukaran menggunakan destructuring assignment");
let a1 = 2;
let b1 = 3;

console.log("Sebelum melakukan pertukaran A1 = ", a1);
console.log("Sebelum melakukan pertukaran B1 = ", b1);

console.log();
[a1, b1] = [b1, a1];

console.log("Setelah melakukan pertukaran A1 = ", a1);
console.log("Setelah melakukan pertukaran B1 = ", b1);
