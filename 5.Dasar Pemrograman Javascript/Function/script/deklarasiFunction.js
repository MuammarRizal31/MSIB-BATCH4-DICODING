function greeting(name, language) {
  if (language.toLowerCase() == "inggris") {
    console.log("welcome", name);
  } else {
    console.log("selamat datang", name);
  }
}

greeting("rizal", "inggris");

// mengembalikan nilai string
function greeting2(name, language) {
  if (language === "English") {
    return `Good Morning ${name}!`;
  } else if (language === "French") {
    return `Bonjour ${name}!`;
  } else {
    return `Selamat Pagi ${name}!`;
  }
}

let greetingMessage = greeting2("Harry", "French");
console.log(greetingMessage);

function ambil({ npm }) {
  return npm;
}

// argument dengan object
const biodata = {
  nama: "muammar rizal",
  npm: "202043502004",
  kelas: "r54",
};

console.log(ambil(biodata));

// default parameter
function penjumlahan(nilai1, nilai2 = 0) {
  let hasil = nilai1 + nilai2;
  console.log(`hasil dari ${nilai1} dan ${nilai2} adalah : ${hasil}`);
}

penjumlahan(2);

//rest parameter
function sum(...angka) {
  let hasil = 0;
  for (let a of angka) {
    hasil += a;
  }
  console.log(hasil);
}

sum(1, 2, 3, 4, 1, 2, 3, 5, 6, 8, 2, 4);
