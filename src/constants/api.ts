export const apiURL = "http://25.30.27.67:8080";
export const apiEndPoint = {
  homeProduct: "/home/product",
  products: "/product",
};
export type ApiEndPointTypes = keyof typeof apiEndPoint;
