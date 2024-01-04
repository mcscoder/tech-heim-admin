import { Loader } from "@/components/Layouts";
import { LoaderContext } from "@/contexts";
import { CommonTypes } from "@/types";
import { useState } from "react";

export const LoaderProvider = ({ children }: CommonTypes.ChildrenProp) => {
  const [loading, setLoading] = useState<number>(0);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading !== 0 && <Loader />}
      {children}
    </LoaderContext.Provider>
  );
};
