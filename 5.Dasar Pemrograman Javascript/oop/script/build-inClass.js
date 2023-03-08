const waktu = new Date();

const timeInJakarta = waktu.toLocaleString("id-ID", {
  timeZone: "Asia/Jakarta",
});

console.log(timeInJakarta);

const timeInTokyo = waktu.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
});

console.log(timeInTokyo);

const timeInMakassar = waktu.toLocaleString("id-ID", {
  timeZone: "Asia/Makassar",
});

console.log(timeInMakassar);

// MANIPULASI ARRAY
class ArrayUnik extends Array {
  constructor(...args) {
    const isiArr = args.filter((item, index) => args.indexOf(item) === index);

    super(...isiArr);
  }
  add(item) {
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const someArray = new ArrayUnik("a", "r", "e", "p", "a");
console.log(someArray);
someArray.add("masuk");
console.log(someArray);
someArray.add("masuk");
console.log(someArray);

class Car {
  #engine = false;
  constructor(wheels = 4, color = null, speed = 100, nitro = null) {
    this.ban = wheels;
    this.warna = color;
    this.kecepatan = speed;
    this.nitro = nitro;
  }

  startEngine() {
    console.log("Mesin menyala");
    return (this.#engine = true);
  }

  driveOff() {
    if (!this.#engine) {
      console.log("Silahkan nyalakan mesin dahulu");
      return false;
    }
    console.log("jalan");
  }

  get speed() {
    return this.kecepatan;
  }
}

class Buggati extends Car {
  constructor(warna = "black", nitro = 100, wheels = 4, speed = 100) {
    super(wheels, warna, speed, nitro);
    this.warna = warna;
    this.nitro = nitro;
  }

  get speed() {
    return this.speed + this.nitro;
  }
}

const buggati = new Buggati();
console.log(buggati.startEngine());
console.log(buggati.driveOff());
