import { useContext } from "react";
import { NavContext } from "./navContext";
import { HiChevronLeft } from "react-icons/hi";

const fadeOutToLeft = "-translate-x-4 duration-200 delay-100 ease-linear";

const NavItemTransition = ({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  const {
    state: { action },
  } = useContext(NavContext);

  const actionIsOpenGlobalNav = action === "OPEN_GLOBAL_NAV";
  const actionIsOpenSubNav = action === "OPEN_SUB_NAV";
  const actionIsCloseSubNav = action === "CLOSE_SUB_NAV";

  const style: React.CSSProperties = {};
  if (actionIsOpenGlobalNav) {
    style["transitionDelay"] = `${delay}ms`;
  }

  const classWhenOpenGlobalNav = actionIsOpenGlobalNav
    ? "opacity-100 duration-1000 "
    : "opacity-0";

  const classWhenOpenSubNav = actionIsOpenSubNav
    ? `invisible ${fadeOutToLeft}`
    : "";

  const whenCloseSubNav = actionIsCloseSubNav
    ? "visible opacity-100 duration-200 delay-200 ease-linear"
    : "";

  return (
    <div
      className={`transition-all ${classWhenOpenGlobalNav} ${classWhenOpenSubNav} ${whenCloseSubNav}`}
      style={style}
    >
      {children}
    </div>
  );
};

const SubNavItemTransition = ({ children }: React.PropsWithChildren) => {
  const {
    state: { action },
  } = useContext(NavContext);

  const actionIsOpenSubNav = action === "OPEN_SUB_NAV";
  const actionIsCloseGlobalNav = action === "CLOSE_GLOBAL_NAV";

  const whenOpenSubNav = actionIsOpenSubNav
    ? "duration-200 opacity-100 ease-linear delay-300"
    : "invisible delay-100 translate-x-4";

  const whenCloseGlobalNav = actionIsCloseGlobalNav
    ? "opacity-0 duration-500"
    : "";

  return (
    <div
      className={`opacity-0 absolute top-0 z-20 transition-all ${whenOpenSubNav} ${whenCloseGlobalNav}`}
    >
      {children}
    </div>
  );
};

const BackSubNavItemTransition = ({ children }: React.PropsWithChildren) => {
  const {
    state: { action },
  } = useContext(NavContext);

  const actionIsOpenSubNav = action === "OPEN_SUB_NAV";
  const actionIsCloseSubNav = action === "CLOSE_SUB_NAV";

  const whenOpenSubNav = actionIsOpenSubNav
    ? "visible duration-200 opacity-100 ease-linear delay-300"
    : "invisible translate-x-4 opacity-0";
  const whenCloseSubNav = actionIsCloseSubNav ? "duration-500 delay-100" : "";

  return (
    <div className={`transition-all ${whenOpenSubNav} ${whenCloseSubNav}`}>
      {children}
    </div>
  );
};

export const GlobalNav = () => {
  const {
    state: { isGlobalNavOpen, isSubNavOpen },
    dispatch,
  } = useContext(NavContext);

  const toggleSubNav = () => {
    if (isSubNavOpen) dispatch({ type: "CLOSE_SUB_NAV" });
    else dispatch({ type: "OPEN_SUB_NAV" });
  };

  return (
    <li
      className={`absolute bg-[#161617] z-10 w-full transition-all duration-[600ms] ${
        isGlobalNavOpen ? "h-screen visible" : "h-0 invisible"
      }`}
    >
      <BackSubNavItemTransition>
        <button
          onClick={() => dispatch({ type: "CLOSE_SUB_NAV" })}
          className="text-xl absolute top-0 left-0 py-3 px-4"
        >
          <HiChevronLeft />
        </button>
      </BackSubNavItemTransition>
      <div className="pt-12">
        <ul className="text-2xl font-semibold relative">
          <li className="px-12 py-1">
            <NavItemTransition delay={50}>
              <button className="w-full text-left" onClick={toggleSubNav}>
                Store
              </button>
            </NavItemTransition>
            <SubNavItemTransition>
              <ul>
                <li className="py-1">Shop the Latest</li>
                <li className="py-1">Mac</li>
                <li className="py-1">iPad</li>
              </ul>
            </SubNavItemTransition>
          </li>
        </ul>
      </div>
    </li>
  );
};
