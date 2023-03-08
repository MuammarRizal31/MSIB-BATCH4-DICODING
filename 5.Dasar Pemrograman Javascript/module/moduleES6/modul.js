import ngops from "./tesModul/tesModul.js";

const displayStock = (stock) => {
  for (const tampung in stock) {
    console.log(`hello ${tampung}`);
  }
};

displayStock(ngops);
