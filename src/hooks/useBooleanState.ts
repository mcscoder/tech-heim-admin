import { useState } from "react";

export const useBooleanState = (initialState?: boolean) => {
  const [state, setState] = useState<boolean>(initialState || false);

  const setToFalse = () => {
    setState(false);
  };

  const setToTrue = () => {
    setState(true);
  };

  const toggle = () => {
    setState(!state);
  };

  return { state, setToFalse, setToTrue, toggle };
};
