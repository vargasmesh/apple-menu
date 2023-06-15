import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { GlobalNav } from "./GlobalNav";
import { useState } from "react";
import { NavContext } from "./navContext";
import { useNavReducer } from "./useNavReducer";

function App() {
  const { state, dispatch } = useNavReducer();

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onClick = () => {
    if (state.isGlobalNavOpen) dispatch({ type: "CLOSE_GLOBAL_NAV" });
    else dispatch({ type: "OPEN_GLOBAL_NAV" });
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 600);
  };

  return (
    <div>
      <NavContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <nav className="bg-[#161617cc] text-[#ffffffcc] h-12 fixed w-full top-0 left-0 right-0">
          <div className="flex h-full">
            <ul className="flex flex-1">
              <li className="flex-1">
                <a href="#" className="block w-max px-4 h-12">
                  <FaApple className="h-full" />
                </a>
              </li>
              <GlobalNav />
              <li>
                <a href="#" className="block w-max px-4 h-12">
                  <BsSearch className="h-full" />
                </a>
              </li>
              <li>
                <a href="#" className="block w-max px-4 h-12">
                  <IoBagOutline className="h-full" />
                </a>
              </li>
            </ul>
            <div className="z-10">
              <button
                className="block w-max px-4 h-12"
                aria-label="Menu"
                onClick={onClick}
                disabled={isButtonDisabled}
              >
                <HiOutlineMenuAlt4 className="h-full" />
              </button>
            </div>
          </div>
        </nav>
      </NavContext.Provider>
    </div>
  );
}

export default App;
