function getUsers(kondisi, data) {
  setTimeout(() => {
    let user = ["muammar", "rizal", "jange"];
    if (kondisi) {
      return data(new Error("Maaf data tidak bisa ditampilkan"), null);
    }
    data(null, user);
  }, 2000);
}

function taroData(kondisi, hasil) {
  if (kondisi) {
    console.log(kondisi.message);
    return;
  }
  console.log(hasil);
}

getUsers(true, taroData);

const { promisify } = require("util");
