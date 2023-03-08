function Biodata(nama, umur, kelas, asal, tenaga) {
  this.nama = nama;
  this.umur = umur;
  this.kelas = kelas;
  this.asal = asal;
  this.tenaga = tenaga;

  this.main = function bermain(jam) {
    this.tenaga -= jam;
    return `anda telah bermain ${jam} maka tenaga anda tersisa ${this.tenaga}`;
  };
}

const rizal = new Biodata("rizal", 20, "R64", "Jakarta", 100);
const adlian = new Biodata("adlian", 20, "R55", "jakarta", 30);

Biodata.prototype.perkenalan = function () {
  return `Hallo nama saya  ${this.nama} asal saya dari ${this.asal}`;
};
console.log(rizal.perkenalan());

//      CONSTRUCTOR ES6
class Biodata2 {
  constructor(nama, npm, kelas, kota, umur) {
    this.n = nama;
    this.npm = npm;
    this.kelas = kelas;
    this.kota = kota;
    this.umur = umur;
  }

  sapa() {
    console.log(`halo semua perkenalkan nama saya adalah ${this.n} dan npm saya ${this.npm}`);
  }

  ketua() {
    console.log(`saya adalah ketua kelas dari kelas ${this.kelas}`);
  }

  asal() {
    console.log(`saya berumur ${this.umur} dan saya berasal dari ${this.kota}`);
  }
}

const muammar = new Biodata2("rizal", "202043502004", "R54", "jakarta", 20);
muammar.sapa();

let jange = "hello nama saya rizal";
console.log(jange.split("-"));

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chasisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

class Mail {
  constructor(sender, receiver, subject, body) {
    this.sender = sender;
    this.receiver = receiver;
    this.subject = subject;
    this.body = body;
  }
}

const mobil1 = new Car("avanza", "white", 500, 312);
const mobil2 = new Car("BMW", "black", 700, 344);
console.log(mobil1.chasisNumber);
console.log(mobil2);
console.log(mobil1.chasisNumber);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName = "a"] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("Muammar", "rizal");
console.log(user.fullName);
user.fullName = "jange";
console.log(user.firstName);
console.log(user.lastName);
