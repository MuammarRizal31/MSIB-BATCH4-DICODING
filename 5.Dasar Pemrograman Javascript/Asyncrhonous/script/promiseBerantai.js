// function withDrawMoney(amount) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amount > 100) {
//         reject(new Error("Tidak cukup uang untuk menukarkan"));
//       }

//       resolve(amount);
//     }, 1000);
//   });
// }

// function buyCinemaTicket(money) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (money < 10) {
//         reject(new Error("tidak cukup uang untuk beli tiket"));
//       }
//       resolve("tiket ada 1");
//     }, 1000);
//   });
// }

// function goInsideCinema(ticket) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!ticket) {
//         reject(new Error("no tiket"));
//       }
//       resolve("enjoy the movie");
//     }, 1000);
//   });
// }

// function watchMovie() {
//   withDrawMoney(99)
//     .then((money) => {
//       return buyCinemaTicket(money);
//     })
//     .then((ticket) => {
//       return goInsideCinema(ticket);
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// }

// watchMovie();

function tukarkanUang(jumlah) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jumlah > 100) {
        reject(new Error("Uang anda tidak cukup hanya ada Rp", jumlah));
      }
      resolve(jumlah);
    }, 1000);
  });
}

function tukarkanTiket(tiket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tiket < 10) {
        reject(new Error("maaf uang anda tidak cukup untuk membeli tiket"));
      }
      resolve("anda memiliki 1 tiket");
    }, 1000);
  });
}

function jalanKebioskop(tiket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!tiket) {
        reject(new Error("anda tidak memiliki tiket"));
      }
      resolve("selamat menonton");
    }, 1000);
  });
}

function jalankan() {
  tukarkanUang(100)
    .then((uang) => {
      return tukarkanTiket(uang);
    })
    .then((tiket) => {
      return jalanKebioskop("tiket");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      console.log(e.message);
    });
}

jalankan();
