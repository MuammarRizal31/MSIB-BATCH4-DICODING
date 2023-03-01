const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }

cara mengakses propertinya menggunakan method
-get untuk mengambil nilainya
-set untuk mengubah nilainya
-size untuk mengetahui ukurannya
*/

console.log(myMap.get(1));
console.log(myMap.set("{}", "object"));
console.log(myMap.get("{}"));
console.log(myMap.size);
