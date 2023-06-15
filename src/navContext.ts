import { createContext } from "react";
import { useNavReducer } from "./useNavReducer";

type State = ReturnType<typeof useNavReducer>["state"];
type Dispatch = ReturnType<typeof useNavReducer>["dispatch"];

type Context = {
  state: State;
  dispatch: Dispatch;
};

export const NavContext = createContext<Context>({} as Context);
