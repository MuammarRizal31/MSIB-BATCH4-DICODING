// try {
//   console.log("awal blok try");

//   console.log("akhir blok try");
// } catch (e) {
//   console.log("Error terjadi : ", e.name, e.messege, e.stack);
// }

let pars = '{ "nama": "rizal" }';

try {
  let pars2 = JSON.parse(pars);
  console.log(pars2.name);
  if (!pars2.name) {
    throw new SyntaxError("belum terdefinisikan");
  }
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log(`JSON Error : ${e.messege}`);
  } else if (error instanceof ReferenceError) {
    console.log(e.messege);
  } else {
    console.log(error.stack);
  }
}
