let visit = new Map(); // menyimpan daftar user

function countUser(user) {
  let count = visit.get(user) || 0;
  visit.set(user, count + 1);
}

let jonas = { name: "jonas" };

countUser(jonas);

jonas = null; //data object 'jonas' dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visit);
}, 10000);

console.log("ini weak map");

const { inspect } = require("util");

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser2(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas2 = { name: "Jonas" };
countUser2(jonas2); // Menambahkan user "Jonas"

jonas2 = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);

/* output
  WeakMap {  }
*/
