// function ambilData(callback) {
//   setTimeout(() => {
//     let data = ["jange", "jangs", "rizal"];
//     callback(data);
//   }, 3000);
// }

// function dataNamSy(nama) {
//   console.log(nama);
// }

// ambilData(dataNamSy);

// contoh memakai argument error
// function getUsers(isOffline, callback) {
//   setTimeout(() => {
//     let user = ["john", "jack", "jangs"];

//     if (isOffline) {
//       callback(new Error("cannot retrieve users due offile"), null);
//       return;
//     }
//     callback(null, user);
//   }, 3000);
// }

// function online(error, users) {
//   if (error) {
//     console.log("proses failed : ", error.message);
//     return;
//   }

//   console.log("proses sukses : ", users);
// }

// getUsers(false, online);
// getUsers(true, online);

//coba
// function getUser(off, data) {
//   setTimeout(() => {
//     let dataMhs = ["rizal", "jange", "muammar"];
//     if (off) {
//       data(new Error("Maaf gabisa diakses"), null);

//       return;
//     }
//     data(null, dataMhs);
//   }, 3000);
// }

// function ambil(error, berhasil) {
//   if (error) {
//     console.log("Pengambilan data gagal karena : ", error.message);
//     return;
//   }
//   console.log("data Mahasiswa : ", berhasil);
// }

// getUser(false, ambil);
// getUser(true, ambil);

let called = 0;
function getProvinces(kota) {
  // called++;
  setTimeout(() => {
    let provinces = ["jakarta", "bandung", "sumatra"];
    called += 1;
    if (called % 2 == 0) {
      kota(new Error("Pengambilan data tidak bisa 2x"), null);

      return;
    }
    kota(null, provinces);
  }, 3000);
}

function ambil(failed, success) {
  if (failed) {
    console.log("Pengambilan gagal : ", failed.message);
    return;
  }
  console.log("pengambilan berhasil ", success);
}

getProvinces(ambil);
getProvinces(ambil);
getProvinces(ambil);
getProvinces(ambil);
