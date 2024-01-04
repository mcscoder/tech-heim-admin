export interface ProductImage {
  imageURL: string;
}

export interface ProductTechnical {
  title: string;
  description: string;
}

export interface ProductType {
  id: number;
  title: string;
}

export interface ProductGroup {
  id: number;
  title: string;
  productType: ProductType[];
}

export interface Product {
  id: number;
  name: string;
  currentPrice: number;
  lastPrice: number | null;
  quantity: number;
  sold: number;
  rate: number;
  productImage: ProductImage[];
  productTechnical: ProductTechnical[];
  productGroup: Pick<ProductGroup, "title" | "productType">[];
}

export type ProductCardType = Pick<
  Product,
  | "id"
  | "name"
  | "currentPrice"
  | "lastPrice"
  | "quantity"
  | "sold"
  | "rate"
  | "productImage"
>;
