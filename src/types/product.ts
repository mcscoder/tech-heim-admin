export interface ProductImage {
  id: number;
  imageURL: string;
}

export interface ProductTechnical {
  id: number;
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
  categoryId: number;
  productImage: ProductImage[];
  productTechnical: ProductTechnical[];
  productGroup: ProductGroup[];
}

export interface NewProduct {
  id?: number;
  name: string;
  currentPrice: number;
  lastPrice: number | null;
  quantity: number;
  sold: number;

  categoryId: number;

  productTypeId: ProductTypeId[];

  productTechnical: NewProductTechnical[];

  productImage: NewProductImage[];
}

export interface ProductTypeId {
  id: number;
}

export interface NewProductImage {
  imageURL: string;
}

export interface NewProductTechnical {
  title: string;
  description: string;
}

export type ProductRowResponseType = Pick<
  NewProduct,
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
  NewProduct,
  "name" | "currentPrice" | "lastPrice" | "quantity" | "sold" | "categoryId"
>;

export type ProductTypeRequestBody = Pick<NewProduct, "productTypeId"> &
  ProductId;

export type ProductTechnicalRequestBody = Pick<NewProduct, "productTechnical"> &
  ProductId;

export type ProductImageRequestBody = Pick<NewProduct, "productImage"> &
  ProductId;

export type AddProductGroupRequestBody = Pick<NewProduct, "categoryId"> &
  Pick<ProductGroup, "title">;

export interface AddProductTypeRequestBody {
  productGroupId: number;
  title: string;
}
