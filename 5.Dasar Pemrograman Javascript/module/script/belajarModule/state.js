const kopi = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

let isCoffeeMachineReady = true;

const displayStock = (stock) => {
  for (const ngops in stock) {
    console.log(ngops);
  }
};

displayStock(kopi);
module.exports = kopi;
console.log(module);
