// const coffeBreak = (resolve, reject) => {
//   const isCoffeeMakerReady = true;

//   if (isCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Kopi tidak bisa digunakan");
//   }
// };

// const o = new Promise(coffeBreak);
// console.log(o);

// const executorFunction = (resolve, reject) => {
//   const ifCoffeeMakerReady = false;
//   if (ifCoffeeMakerReady) {
//     resolve("Kopi berhasil dibuat");
//   } else {
//     reject("Mesin kopi tidak bisa digunakan");
//   }
// };

// const handlerSuccess = (resolve) => {
//   console.log(resolve);
// };

// const rejectHand = (reject) => {
//   console.log(reject);
// };

// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess, rejectHand);

// const promise = (resolve, reject) => {
//   const jange = false;
//   if (jange) {
//     resolve("Kamu benar jange");
//   } else {
//     reject("Kamu bukan jange");
//   }
// };

// function benar(resolve) {
//   console.log(resolve);
// }

// function salah(reject) {
//   console.log(reject);
// }

// const updet = new Promise(promise);
// updet.then(benar).catch(salah);

// PROMISE BERANTAI

// const state = {
//   isCoffeeMakerReady: true,
//   seedStocks: {
//     arabica: 250,
//     robusta: 60,
//     liberica: 80,
//   },
// };

// const getSeeds = (type, miligrams) => {
//   return new Promise((resolve, reject) => {
//     if (state.seedStocks[type] >= miligrams) {
//       resolve("Biji kopi masih ada");
//     } else {
//       reject("biji kopi habis bung");
//     }
//   });
// };

// const makeCoffee = (seeds) => {
//   return new Promise((resolve, reject) => {
//     if (state.isCoffeeMakerReady) {
//       resolve("Kopi berhasil dibuat");
//     } else {
//       reject("Mesin kopi rusak");
//     }
//   });
// };

// const antarPelayanan = (coffee) => {
//   return new Promise((resolve) => {
//     resolve("Pesanan kopi sudah selesai!");
//   });
// };

// function pesanKopi(type, miligrams) {
//   getSeeds(type, miligrams)
//     .then(makeCoffee)
//     .then(antarPelayanan)
//     .then((resolvedValue) => {
//       console.log(resolvedValue);
//     })
//     .catch((reject) => {
//       console.log(reject);
//     });
// }

// pesanKopi("liberica", 80);

const kopi = {
  kopiReady: true,
  merekKopi: {
    robusta: 50,
    expresso: 70,
    liong: 10,
  },
};

function memilihKopi(type, mili) {
  return new Promise((resolve, reject) => {
    if (kopi.merekKopi[type] >= mili) {
      kopi.merekKopi[type] -= mili;
      resolve("Biji Kopi tersedia");
    } else {
      reject("maaf biji kopi kosong");
    }
  });
}

function membuatKopi() {
  return new Promise((resolve, reject) => {
    if (kopi.kopiReady) {
      resolve("kopi berhasil dibuat");
    } else {
      reject("mesin nya kayanya rusak deh");
    }
  });
}

const servingToTable = (kopi) => {
  return new Promise((resolv) => {
    resolv("pesanan kopi sudah selesai");
  });
};

function ngops(tipe, mili) {
  memilihKopi(tipe, mili)
    .then(membuatKopi)
    .then(servingToTable)
    .then((resolvedValue) => {
      console.log(resolvedValue);
    })
    .catch((reject) => {
      console.log(reject);
    });
}

ngops("robusta", 50);
