import { CommonTypes } from "@/types";
import { LoaderProvider } from "./Loader";
import { ProductProvider } from ".";

export const AppState = ({ children }: CommonTypes.ChildrenProp) => {
  return (
    <LoaderProvider>
      <ProductProvider>{children}</ProductProvider>
    </LoaderProvider>
  );
};
