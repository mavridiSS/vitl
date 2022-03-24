import React from "react";
import { Product as IProduct } from "../../types";
import Button from "../Button";
import { Variant } from "../Button/Button";
import styles from "./Product.module.css";

interface Props {
  product: IProduct;
  onAction: (product: IProduct) => void;
  actionType?: Variant;
  actionLabel: string;
}

const IMAGE_URL =
  "https://p-media.vitl.com/438f1ad5-4413-43b1-a1bd-11e6c01a7460.png?w=475";

export default function Product({
  product,
  onAction,
  actionType,
  actionLabel,
}: Props) {
  const handleClick = () => {
    onAction(product);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={IMAGE_URL} alt={product.name} />
      <h4>{product.name}</h4>
      {/* {product.nutrients.map(nutritient => <><hr7>{nutritient.id}()</hr7></>) }
      <h7>{product.name}</h7>
      <h7>{product.name}</h7>
      <h7>{product.name}</h7> */}
      <Button onClick={handleClick} label={actionLabel} variant={actionType} />
    </div>
  );
}
