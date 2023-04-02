// // contoh biasa
// const getCake = () => {
//   let cake = null;
//   console.log("Sedang membuat kue,silahkan tunggu ...");

//   setTimeout(() => {
//     cake = "Kue Selesai!";
//   }, 3000);
//   return cake;
// };

// getCake();

// contoh callback
const ambilKue = (callback) => {
  console.log("Sedang membuat kue,silahkan tunggu");
  let cake = null;

  setTimeout(() => {
    cake = "kue selesai";
    callback(cake);
  }, 3000);
};

ambilKue((e) => {
  console.log(e);
});
