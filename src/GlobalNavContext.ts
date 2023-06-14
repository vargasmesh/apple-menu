import { createContext } from "react";

export type GlobalNavContextType = {
  isNavOpen: boolean;
  isSubNavOpen: boolean;
};

export const GlobalNavContext = createContext<GlobalNavContextType | undefined>(
  undefined
);
