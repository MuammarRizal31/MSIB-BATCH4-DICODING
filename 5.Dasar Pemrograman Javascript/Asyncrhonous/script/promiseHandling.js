// tanpa menggunakan promise
// function getUsers(kondisi, isOffline) {
//   //tes jaringan
//   setTimeout(() => {
//     let data = ["muammar", "rizal", "jangs"];

//     if (kondisi) {
//       return isOffline(new Error("maaf tidak bisa mengambil data"), null);
//     }
//     isOffline(null, data);
//   }, 3000);
// }

// function ambilData(kondisi, data) {
//   if (kondisi) {
//     console.log(kondisi.message);
//     return;
//   }
//   console.log(data);
// }
// getUsers(false, ambilData);

function getUsers2(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {
    // simulasi jaringan lelet
    setTimeout(() => {
      const users = ["john", "jack", "rizal"];

      if (isOffline) {
        reject(new Error("tidak bisa mendapatkan data karena offline"));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

console.log(getUsers2(false));
getUsers2(false)
  .then((users) => console.log(users))
  .catch((err) => console.log(err));
