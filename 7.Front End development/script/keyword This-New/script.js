const Biodata = function (nama, umur, hoby) {
  this.nama = nama;
  this.umur = umur;
  this.hoby = hoby;
};

let nama;
const orang1 = new Biodata("jange", 21, ["ngoding", "main game"]);

console.log(orang1.nama);

const People = function (nama, umur, hoby) {
  this.nama = nama;
  this.umur = umur;
  this.hoby = hoby;
  this.intro = function () {
    setTimeout(() => {
      console.log("hello", this.nama);
    }),
      2000;
  };
};

// People.prototype.intro = function () {
//   setTimeout(function () {
//     console.log(`hello nama saya ${this.nama}`);
//   });
// };

const orang = new People("jange", 21, ["ngoding", "main game"]);
orang.intro();
