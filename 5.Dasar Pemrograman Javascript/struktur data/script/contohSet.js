const numberSet = new Set([1, 4, 6, 3, 1, 3]);
console.log(numberSet);

const number2Set = new Set([1, 3, 2, 1, 2, 4, 5, 5, 6]);
console.log(number2Set);
number2Set.add(10);
console.log(number2Set);

number2Set.delete(2);
console.log(number2Set);
