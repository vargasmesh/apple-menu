import { createContext } from "react";

export type GlobalNavContextType = {
  isNavOpen: boolean;
  isSubNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
  setIsSubNavOpen: (value: boolean) => void;
};

export const GlobalNavContext = createContext<GlobalNavContextType | undefined>(
  undefined
);
