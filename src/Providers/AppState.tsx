import { CommonTypes } from "@/types";
import { LoaderProvider } from ".";

export const AppState = ({ children }: CommonTypes.ChildrenProp) => {
  return <LoaderProvider>{children}</LoaderProvider>;
};
