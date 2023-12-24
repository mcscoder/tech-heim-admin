import { Loader } from "@/components/Layouts";
import { LoaderContext } from "@/contexts";
import { CommonTypes } from "@/types";
import { useState } from "react";

export const LoaderProvider = ({ children }: CommonTypes.ChildrenProp) => {
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};
