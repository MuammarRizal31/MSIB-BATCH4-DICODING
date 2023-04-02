// menggunakan function biasa
const upperCase = ["muammar", "rizal", "jange"].map(function (name) {
  return name.toUpperCase();
});

console.log(upperCase);

// menggunakan arrow function
const upperCase2 = ["jange", "jangs", "topet"].map((name) => name.toUpperCase());
console.log(upperCase2);

const sayHello = (_) => console.log("hei");
sayHello();
