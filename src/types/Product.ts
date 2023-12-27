export interface Product {
  id?: number;
  name: string;
  currentPrice: number;
  lastPrice: number | null;
  quantity: number;

  categoryId: number;

  productTypeId: ProductTypeId[];

  productTechnical: ProductTechnical[];

  productImage: ProductImage[];
}

export interface ProductTypeId {
  id: number;
}

export interface ProductImage {
  imageURL: string;
}

export interface ProductTechnical {
  title: string;
  description: string;
}

export type ProductRowResponseType = Pick<
  Product,
  "id" | "name" | "currentPrice" | "lastPrice" | "quantity" | "categoryId"
> & {
  sold: number;
};

export interface ProductType {
  id: number;
  title: string;
}

export interface ProductGroup {
  id: number;
  title: string;
  productType: ProductType[];
}

export interface ProductId {
  id: number;
}

export type ProductRequestBody = Pick<
  Product,
  "name" | "currentPrice" | "lastPrice" | "quantity" | "categoryId"
>;

export type ProductTypeRequestBody = Pick<Product, "productTypeId"> & ProductId;

export type ProductTechnicalRequestBody = Pick<Product, "productTechnical"> &
  ProductId;

export type ProductImageRequestBody = Pick<Product, "productImage"> & ProductId;
