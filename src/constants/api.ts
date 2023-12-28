export const apiURL = "http://25.30.27.67:8080";
export const apiEndPoint = {
  productGroup: "/productGroup",
  postProductType: "/productType",
  product: "/product",
  productType: "/product/product-type",
  productTechnical: "/product/product-technical",
  productImage: "/product/product-image",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
