import { createContext } from "react";

export interface LoaderContextType {
  loading: number;
  setLoading: React.Dispatch<React.SetStateAction<number>>;
}

export const LoaderContext = createContext<LoaderContextType | null>(null);
