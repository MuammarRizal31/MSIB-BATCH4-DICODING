/* 
CONTOH INCREMENT DAN DECREMENT
jadi hasil dari x++ dan ++x berbeda;
    - kalau x++ dia akan menghasilkan nilai awalnya dulu baru nilai barunya
    - kalau ++x dia akan langsung menghasilkan nilai barunya
*/

// contoh x++
let x = 5;
console.log(x++); // hasilnya 5
console.log(x); //hasilnya baru bertambah menjadi 6;

let a = 5;
console.log(++a); //hasilnya langsung 6

/*
CONTOH BIG NUMBER DAN INT
untuk membedakan tipe bigInt dan number,tambahkan karakter n diakhir angka
 */

const bigNumber = 1234123141123153141231251231512323124n;
const myInt = 12341321312311431123145123435234234212313;
console.log("Ini hasil dari Big number : ", bigNumber);
console.log("Ini hasil dari integer : ", myInt);
