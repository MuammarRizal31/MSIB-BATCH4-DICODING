// destructuring array biasa
const makanan = ["nasi goreng", "mie ayam", "pempek"];

const [lauk1, lauk2, lauk3] = makanan;
console.log(lauk1);

// mengambil index array dengan melompati index sebelumnya
const makanan2 = ["nasi goreng", "mie ayam", "pempek"];

const [, , itemketiga, itemkeempat] = makanan2;
console.log(itemketiga);
/*
    output: pempek
 */

// DESTRUCTURING ASSIGNMENT
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* Output:
Seafood
Salad
*/

// menukar isi dari variable
let a = 1;
let b = 2;

console.log("Sebelum swap");
console.log(a);
console.log(b);

[a, b] = [b, a];

console.log("setelah swap");
console.log(a);
console.log(b);

// memberikan default values
const Arr = ["jange"];

const [nama, umur = 20] = Arr;
console.log(umur);

console.log(Arr[1]);
