import { useState } from "react";

const NavItemTransition = ({
  isGlobalNavOpen,
  isSubNavOpen,
  delay,
  children,
}: {
  isGlobalNavOpen: boolean;
  isSubNavOpen: boolean;
  delay: number;
  children: React.ReactNode;
}) => {
  const style: React.CSSProperties = {};
  if (isGlobalNavOpen && !isSubNavOpen) {
    style["transitionDelay"] = `${delay}ms`;
  }

  return (
    <div
      className={`transition-all ${
        isGlobalNavOpen && !isSubNavOpen
          ? "opacity-100 duration-1000 "
          : "opacity-0"
      } ${
        isSubNavOpen
          ? "-translate-x-8 invisible duration-500 delay-200 ease-linear"
          : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};

export const GlobalNav = ({
  isGlobalNavOpen,
}: {
  isGlobalNavOpen: boolean;
}) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);

  const toggleSubNav = () => {
    setIsSubNavOpen(!isSubNavOpen);
  };

  return (
    <li
      className={`absolute bg-[#161617] z-10 w-full transition-all duration-[600ms] ${
        isGlobalNavOpen ? "h-screen visible" : "h-0 invisible"
      }`}
    >
      <button onClick={() => setIsSubNavOpen(false)}>Back</button>
      <div className="pt-12">
        <ul className="text-2xl font-semibold relative">
          <li className="px-12">
            <NavItemTransition
              isGlobalNavOpen={isGlobalNavOpen}
              isSubNavOpen={isSubNavOpen}
              delay={50}
            >
              <button className="w-full text-left" onClick={toggleSubNav}>
                Store
              </button>
            </NavItemTransition>
            <div
              className={`absolute top-0 z-20 transition-all delay-500 duration-500 ${
                isSubNavOpen
                  ? "opacity-100 ease-linear"
                  : "invisible translate-x-8 opacity-0"
              }`}
            >
              <ul>
                <li>Shop the Latest</li>
                <li>Mac</li>
                <li>iPad</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
};
