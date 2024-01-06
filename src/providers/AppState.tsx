import { CommonTypes } from "@/types";
import { LoaderProvider } from "./Loader";
import { OrderProvider, ProductProvider } from ".";

export const AppState = ({ children }: CommonTypes.ChildrenProp) => {
  return (
    <LoaderProvider>
      <ProductProvider>
        <OrderProvider>{children}</OrderProvider>
      </ProductProvider>
    </LoaderProvider>
  );
};
