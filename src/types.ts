export interface Nutrient {
  id: string;
  amount: number;
}

export interface Product {
  name: string;
  price: number;
  nutrients: Nutrient[];
}

export interface TolerableUpperLimit {
  id: string;
  amount: number;
  unit: string;
}

export interface Config {
  tolerableUpperLimits: TolerableUpperLimit[];
  currency: string;
}

export interface DataResponse {
  products: Product[];
  config: Config;
}
