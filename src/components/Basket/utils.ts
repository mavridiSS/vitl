import { Product } from "../../types";
import _ from "lodash";

const sumReducer = (accumulator: number, curr: number) => accumulator + curr;

// Flatten the duplicate products by name and sum the price
export const flatProducts = (products: Product[]): Product[] =>
  _(products)
    .groupBy("name")
    .map((item, id) => ({
      name: id,
      nutrients: item[0].nutrients,
      price: _.sumBy(item, "price"),
    }))
    .value();

export const getTotalBasketSum = (products: Product[]) =>
  products
    .map((product) => product.price)
    .reduce(sumReducer, 0)
    .toFixed(2);
