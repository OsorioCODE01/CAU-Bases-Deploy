export interface Product {
  description: string;
  price: number;
}
const phone: Product = {
  description: "iphone",
  price: 150.0,
};
const tablet: Product = {
  description: "ipad Air",
  price: 250.0,
};

const shoppingCart = [phone, tablet];

const tax = 0.15;

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}
// function taxCalculation(options: TaxCalculationOptions): [number, number]
export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  const { tax, products } = options;

  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

// const [total, taxTotal] = taxCalculation({
//   products: shoppingCart,
//   tax: tax,
// });

// console.log("Total", total);
// console.log("Tax", taxTotal);
