export const apiURL = "http://25.30.27.67:8080";
export const apiEndPoint = {
  homeProduct: "/home/product",
  products: "/product",
  productGroup: "/productGroup",
  postProductType: "/productType",
  product: "/product",
  productType: "/product/product-type",
  productTechnical: "/product/product-technical",
  productImage: "/product/product-image",
  deleteProduct: "/product/delete",
  orderStat: "/admin/order-stat",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
