import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
  {
    description: "Nokia",
    price: 100,
  },
  {
    description: "Khe",
    price: 200,
  },
];

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log("total", total);
console.log("Tax", tax);
