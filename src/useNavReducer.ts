import { useReducer } from "react";

type NavState = {
  isGlobalNavOpen: boolean;
  isSubNavOpen: boolean;
};
type NavAction =
  | { type: "OPEN_GLOBAL_NAV" }
  | { type: "CLOSE_GLOBAL_NAV" }
  | { type: "OPEN_SUB_NAV" }
  | { type: "CLOSE_SUB_NAV" };

const initialState: NavState = {
  isGlobalNavOpen: false,
  isSubNavOpen: false,
};

const navReducer = (state: NavState, action: NavAction) => {
  switch (action.type) {
    case "OPEN_GLOBAL_NAV":
      return { ...state, isGlobalNavOpen: true };
    case "CLOSE_GLOBAL_NAV":
      return { ...state, isGlobalNavOpen: false };
    case "OPEN_SUB_NAV":
      return { ...state, isSubNavOpen: true };
    case "CLOSE_SUB_NAV":
      return { ...state, isSubNavOpen: false };
  }
};

export const useNavReducer = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  return { state, dispatch };
};
