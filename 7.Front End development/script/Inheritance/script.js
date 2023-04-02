class Parent {
  constructor(lisensi, model) {
    this.lisensi = lisensi;
    this.model = model;
    this.engineActive = false;
  }

  startEngine() {
    console.log(`Mesin Kendaraan ${this.lisensi} dinyalakan`);
  }

  info() {
    console.log(`Nomor kendaraan : ${this.lisensi}`);
    console.log(`Model/manufacture : ${this.model}`);
    console.log(`Mesin : ${this.engineActive ? "Aktif" : "tidak Aktif"}`);
  }

  parking() {
    console.log(`Kendaraan ${this.lisensi} parkir!`);
  }
}

class Car extends Parent {
  constructor(lisensi, model, roda) {
    super(lisensi, model);
    this.roda = roda;
  }

  driveOff() {
    console.log(`Kendaraan ${this.lisensi} maju!`);
  }

  info() {
    super.info();
    console.log(`Roda : ${this.roda}`);
  }

  openDoor() {
    console.log("pintu terbuka");
  }
}

const car = new Car("H123", "Honda", 4);
car.startEngine();
car.info();
