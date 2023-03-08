function biodata(nama) {
  return function (umur) {
    return console.log(`nama saya adalah ${nama} dan umur saya adalah ${umur}`);
  };
}

const biodata1 = biodata("rizal");
biodata1("31");

// closure memungkinkan kita membuat fungsi dan variable secara private
function ubah() {
  let counter = 0;
  return () => {
    return ++counter;
  };
}

const masukan = ubah();
console.log(masukan());
console.log(masukan());
console.log(masukan());
