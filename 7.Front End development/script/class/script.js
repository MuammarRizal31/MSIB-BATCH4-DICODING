// const mhs = {
//   nama: "rizal",
//   umur: 2,
//   say: () => {
//     console.log(`nama saya ${this.z}`);
//   },
// };

// mhs.say();

// membuat constructor sebelum ES6
function Car(manufacture, color) {
  this.manufacture = manufacture;
  this.color = color;
  this.engine = false;
}

Car.prototype.nyalakanMobil = function () {
  this.engine = true;
  console.log("mesin sedang dinyalakan");
};

Car.prototype.info = function () {
  console.log("Pembuatan mobil ini di : ", this.manufacture);
};

Car.prototype.jalankanMobil = function () {
  return this.engine ? "Mobil berjalan" : "Silahkan nyalahkan mesin";
  // if (this.engine) {
  //   console.log("Mobil sedang dijalankan");
  // } else {
  //   console.log("silahkan nyalakan mesin dahulu");
  // }
};

const car1 = new Car("Indonesia", "blue");
console.log(car1.jalankanMobil());
car1.nyalakanMobil();
console.log(car1.jalankanMobil());
car1.info();

// getter dan setter
class Biodata {
  constructor(nama, umur, lahir) {
    this.nama = nama;
    this.umur = umur;
    this.lahir = lahir;
  }

  get say() {
    console.log("Hallo ", this.nama);
  }

  set say(nama) {
    console.log(`${this.nama} telah diganti oleh ${nama}`);
    this.nama = nama;
  }
}

const b = new Biodata("rizal", 21, "Jakarta");
b.say;
b.say = "Jangs";

class CarLagi {
  constructor(nama, warna) {
    this.nama = nama;
    this.warna = warna;
    this.startEngine = false;
  }

  nyalakanMesin() {
    console.log("Mesin dinyalakan");
    this.startEngine = true;
  }

  jalankanMobil() {
    return this.startEngine ? "Mobil dijalankan" : "Silahkan nyalahkan mesin dulu";
  }
}

const mobil2 = new CarLagi("marcedes", "hitam");
console.log(mobil2.jalankanMobil());
mobil2.nyalakanMesin();
console.log(mobil2.jalankanMobil());
