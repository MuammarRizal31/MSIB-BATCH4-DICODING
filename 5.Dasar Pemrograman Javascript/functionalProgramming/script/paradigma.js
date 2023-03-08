const names = ["jange", "topet", "jangs"];

const namaPanggil = names.map((name) => `${name}`);

console.log(namaPanggil);

// contoh pure function
let jange = (age, person, hobi) => {
  person.age = age;
  person.hobi = hobi;
  return person;
};

const person = {
  name: "bobo",
};

const newPerson = jange(18, person, "main Bola");

console.log({ person, newPerson });

let user = {
  firstName: "Muammar Rizal",
  npm: "202043502000",
  kelas: "R54",
};

function gantiSalah(namaBaru, user) {
  return { ...user, npm: namaBaru };
}

const userBaru = gantiSalah("2004", user);

console.log(userBaru);
