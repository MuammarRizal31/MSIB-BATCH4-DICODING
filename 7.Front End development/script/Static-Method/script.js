// contoh biasa

/*
class Parent {
  constructor(lisensi, model) {
    this.lisensi = lisensi;
    this.model = model;
    this.angineActive = false;
  }

  info() {
    console.log(`lisensi : ${this.lisensi}`);
    console.log(`model : ${this.model}`);
  }

  startEngine() {
    console.log("Mesin dinyalakan");
    this.angineActive = true;
  }

  jalankan() {
    if (this.angineActive) {
      console.log("Mesin berjalan");
    } else {
      console.log("silahkan jalankan mesin");
    }
  }
}

class Car extends Parent {
  constructor(lisensi, model, roda) {
    super(lisensi, model);
    this.roda = roda;
  }

  info() {
    super.info();
    console.log("Roda : ", this.roda);
  }
}

class Motor extends Car {
  constructor(lisensi, model, roda) {
    super(lisensi, model, roda);
  }
}

class PabrikKendaraan {
  bengkel(kendaraan) {
    kendaraan.forEach((kendaraan) => {
      console.log(`kendaraan ${kendaraan.lisensi} sedang melakukan perawatan`);
    });
  }
}

const motor = new Motor("H123", "Yamaha", 2);
const mobil = new Car("A222", "BMW", 4);

const pabrikKendaraan = new PabrikKendaraan();
pabrikKendaraan.bengkel([motor, mobil]);
*/

// contoh menggunakan method static
class Parent {
  constructor(lisensi, model) {
    this.lisensi = lisensi;
    this.model = model;
    this.angineActive = false;
  }

  info() {
    console.log(`lisensi : ${this.lisensi}`);
    console.log(`model : ${this.model}`);
  }

  startEngine() {
    console.log("Mesin dinyalakan");
    this.angineActive = true;
  }

  jalankan() {
    if (this.angineActive) {
      console.log("Mesin berjalan");
    } else {
      console.log("silahkan jalankan mesin");
    }
  }
}

class Car extends Parent {
  constructor(lisensi, model, roda) {
    super(lisensi, model);
    this.roda = roda;
  }

  info() {
    super.info();
    console.log("Roda : ", this.roda);
  }
}

class Motor extends Car {
  constructor(lisensi, model, roda) {
    super(lisensi, model, roda);
  }
}

class PabrikKendaraan {
  static bengkel(kendaraan) {
    kendaraan.forEach((kendaraan) => {
      console.log(`kendaraan ${kendaraan.lisensi} sedang melakukan perawatan`);
    });
  }
}

const motor = new Motor("H123", "Yamaha", 2);
const mobil = new Car("A222", "BMW", 4);

PabrikKendaraan.bengkel([motor, mobil]);
