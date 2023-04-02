// const arabicaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("kopi arabika selesai!");
//     }, 4000);
//   });
// };

// const robustaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("kopi Robusta selesai");
//     }, 2000);
//   });
// };

// const libericaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("kopi liberica selesai!");
//     }, 3000);
//   });
// };

// const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];

// Promise.all(promises).then((resolveValue) => {
//   console.log(resolveValue);
// });
const ambilKopi = () => {
  return new Promise((resolve, reject) => {
    const seeds = 100;

    setTimeout(() => {
      if (seeds >= 10) {
        resolve("kopi didapatkan");
      } else {
        reject("kopi tidak berhasil diambil");
      }
    }, 1000);
  });
};

function getKopi() {
  ambilKopi().then((e) => console.log(e));
}

ambilKopi()
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  });
