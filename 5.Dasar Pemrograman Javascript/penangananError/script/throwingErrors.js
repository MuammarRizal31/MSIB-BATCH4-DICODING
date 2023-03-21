// let json = '{"name": "rizal","age": 20}';

// try {
//   let user = JSON.parse(json);

//   console.log(user.name);
//   console.log(user.age);
// } catch (e) {
//   console.log(e.name);
//   console.log(e.messege);
// }

// throw
let json2 = '{"nama : rizal","umur: 20"}';
try {
  let user = JSON.parse(json2);
  if (!user.name) {
    throw new SyntaxError("'name is not found'");
  }
} catch (e) {
  console.log(e);
}
