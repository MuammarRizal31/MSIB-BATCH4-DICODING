let json = [
  {
    id: 14,
    title: "Belajar Fundamental Aplikasi Android",
    author: "Google ATP",
  },
  {
    id: 51,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    author: "Google ATP",
  },
  {
    id: 123,
    title: "Belajar Dasar Pemrograman Web",
    author: "Dicoding Indonesia",
  },
  {
    id: 163,
    title: "Belajar Fundamental Front-End Web Development",
    author: "Dicoding Indonesia",
  },
];

console.log(json[1].title);

// sebelum ada destructuring
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const age = profile.age;

console.log(firstName, lastName, age);

/* output:
John Doe 18
*/
