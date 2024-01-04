import { CommonTypes } from "@/types";
import { LoaderProvider } from "./Loader";

export const AppState = ({ children }: CommonTypes.ChildrenProp) => {
  return <LoaderProvider>{children}</LoaderProvider>;
};
