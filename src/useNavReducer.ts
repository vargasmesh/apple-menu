import { useReducer } from "react";

type NavAction =
  | { type: "OPEN_GLOBAL_NAV" }
  | { type: "CLOSE_GLOBAL_NAV" }
  | { type: "OPEN_SUB_NAV" }
  | { type: "CLOSE_SUB_NAV" };

type NavState = {
  isGlobalNavOpen: boolean;
  isSubNavOpen: boolean;
  action: NavAction["type"] | undefined;
};

const initialState: NavState = {
  isGlobalNavOpen: false,
  isSubNavOpen: false,
  action: undefined,
};

const navReducer = (state: NavState, action: NavAction) => {
  switch (action.type) {
    case "OPEN_GLOBAL_NAV":
      return { ...state, action: action.type, isGlobalNavOpen: true };
    case "CLOSE_GLOBAL_NAV":
      return { ...state, action: action.type, isGlobalNavOpen: false };
    case "OPEN_SUB_NAV":
      return { ...state, action: action.type, isSubNavOpen: true };
    case "CLOSE_SUB_NAV":
      return { ...state, action: action.type, isSubNavOpen: false };
    default:
      return state;
  }
};

export const useNavReducer = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  return { state, dispatch };
};
