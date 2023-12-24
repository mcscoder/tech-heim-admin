import { LoaderContext } from "@/contexts";
import { useContext } from "react";

export const useLoaderContext = () => {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error("useLoaderContext must be used within LoaderProvider");
  }

  const { loading, setLoading } = loaderContext;

  const handleFetchApi = async (fetchApi: () => Promise<void>) => {
    try {
      setLoading(true);
      await fetchApi();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, setLoading, handleFetchApi };
};
