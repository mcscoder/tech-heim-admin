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
  productGroup: Pick<ProductGroup, "title" | "productType">[];
}
