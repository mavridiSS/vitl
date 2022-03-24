import { Product, TolerableUpperLimit } from "../types";

export const mapProductsByNutritient = (products: Product[]) =>
  products.reduce<Record<string, number>>((obj, product) => {
    const { nutrients } = product;
    nutrients.forEach((nutrient) => {
      if (obj[nutrient.id]) {
        obj[nutrient.id] += nutrient.amount;
      } else {
        obj[nutrient.id] = nutrient.amount;
      }
    });

    return obj;
  }, {});

export const willProductExceedTUL = (
  product: Product,
  tolerableUpperLimits: TolerableUpperLimit[],
  productsInBasketByNutritient: Record<string, number>
) =>
  product.nutrients.filter((nutrient) => {
    const nutritientTolerableUpperLimit =
      tolerableUpperLimits?.find((limit) => limit.id === nutrient.id)?.amount ||
      0;
    return (
      nutrient.amount + (productsInBasketByNutritient[nutrient.id] || 0) >
      nutritientTolerableUpperLimit
    );
  }).length > 0;
