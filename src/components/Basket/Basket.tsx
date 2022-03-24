import React from "react";
import { Product as IProduct } from "../../types";
import Container from "../Container/Container";
import Product from "../Product";
import { getTotalBasketSum, flatProducts } from "./utils";

interface Props {
  products: IProduct[];
  onRemove: (product: IProduct) => void;
  currency: string;
}

export default function Basket({ products, onRemove, currency }: Props) {
  const flattenProducts = flatProducts(products);
  const header =
    products.length > 0
      ? `Basket - ${currency}${getTotalBasketSum(products)}`
      : "Basket";
  return (
    <Container header={header}>
      {flattenProducts?.map((product) => (
        <Product
          key={product.name}
          product={product}
          onAction={onRemove}
          actionType={"secondary"}
          actionLabel="Remove"
        />
      ))}
    </Container>
  );
}
