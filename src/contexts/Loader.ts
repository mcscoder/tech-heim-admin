import { createContext } from "react";

export interface LoaderContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<LoaderContextType | null>(null);
