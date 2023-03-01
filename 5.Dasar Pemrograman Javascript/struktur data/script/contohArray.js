let arr = ["jange", "top", "bottom"];
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// CONTOH METHOD PUSH
let arr2 = ["jange", "jangs", "yoms"];
arr2.push("jange lagi");
console.log(arr2);

// CONTOH METHOD POP
let arr3 = ["oi", "uoo", "yoo"];
arr3.pop();
console.log(arr3);

// CONTOH METHOD SHIFT DAN UNSHIFT
let arr4 = ["halo", 20, true, "jange"];
console.log("contoh unshift dan shift :", arr4);
arr4.unshift("jange"); //menambahkan array diawal
arr4.shift(); //menghapus elemen array diawal
console.log(arr4);

// contoh method delete
let arr5 = ["halo", 21, "jange"];
delete arr5[1];
console.log("contoh menggunakan delete : ", arr5);

//contoh splice
let arr6 = ["muammar", "topet", "rizal"];
arr6.splice(1, 1); //menghapus dari index 0 sebanyak 1 elemen
console.log(arr6);
