import React from "react";
import { Product as IProduct } from "../../types";
import Container from "../Container/Container";
import Product from "../Product";

interface Props {
  products?: IProduct[];
  onAddToBasket: (product: IProduct) => void;
}

export default function ProductsList({ products, onAddToBasket }: Props) {
  return (
    <Container header="Products">
      {products?.map((product) => (
        <Product
          key={product.name}
          product={product}
          onAction={onAddToBasket}
          actionLabel="Add to basket"
          actionType="primary"
        />
      ))}
    </Container>
  );
}
