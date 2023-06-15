import { useReducer } from "react";

type NavState = {
  isGlobalNavOpen: boolean;
};
type NavAction = { type: "OPEN_GLOBAL_NAV" } | { type: "CLOSE_GLOBAL_NAV" };

const initialState: NavState = {
  isGlobalNavOpen: false,
};

const navReducer = (state: NavState, action: NavAction) => {
  switch (action.type) {
    case "OPEN_GLOBAL_NAV":
      return { ...state, isGlobalNavOpen: true };
    case "CLOSE_GLOBAL_NAV":
      return { ...state, isGlobalNavOpen: false };
  }
};

export const useNavReducer = () => {
  const [state, dispatch] = useReducer(navReducer, initialState);
  return { state, dispatch };
};
