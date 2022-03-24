import React from "react";
import { fetchData } from "./api";
import Basket from "./components/Basket/";
import Loader from "./components/Loader";
import ProductsList from "./components/ProductsList/";
import { DataResponse, Product } from "./types";
import styles from "./App.module.css";
import { mapProductsByNutritient, willProductExceedTUL } from "./utils";

function App() {
  const [data, setData] = React.useState<DataResponse>();
  const [productsInBasket, setProductsInBasket] = React.useState<Product[]>([]);
  const productsInBasketByNutritient =
    mapProductsByNutritient(productsInBasket);
  const tolerableUpperLimits = data?.config?.tolerableUpperLimits || [];

  const fetch = async () => {
    const data = await fetchData();
    setData(data);
  };

  React.useEffect(() => {
    fetch();
  }, []);

  const handleAddToBasket = (product: Product) => {
    const isProductExceedingTUL = willProductExceedTUL(
      product,
      tolerableUpperLimits,
      productsInBasketByNutritient
    );

    if (isProductExceedingTUL) {
      window.alert(
        `${product.name} can't be added to the basket because it will exceed TUL`
      );
      return;
    }
    setProductsInBasket((prev) => [...prev, product]);
  };

  const handleRemoveFromBasket = (productToRemove: Product) => {
    setProductsInBasket((prev) =>
      prev.filter((product) => product.name !== productToRemove.name)
    );
  };

  if (!data) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Basket
        products={productsInBasket}
        onRemove={handleRemoveFromBasket}
        currency={data?.config.currency}
      />

      <ProductsList
        products={data?.products}
        onAddToBasket={handleAddToBasket}
      />
    </div>
  );
}

export default App;
