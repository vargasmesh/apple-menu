import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import React, { useEffect, useState } from "react";

const MenuItem = ({
  children,
  show,
  index,
}: {
  children: ((showSubMenu: boolean) => React.ReactNode) | React.ReactNode;
  show: boolean;
  index: number;
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  useEffect(() => {
    if (!show) {
      setShowSubMenu(false);
    }
  }, [show]);

  return (
    <div
      className={`text-2xl px-12 py-1 font-semibold duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transitionDelay: show ? `${index * 50}ms` : "0ms",
      }}
      role="button"
      onClick={() => !showSubMenu && setShowSubMenu(!showSubMenu)}
    >
      {typeof children === "function"
        ? children(show && showSubMenu)
        : children}
    </div>
  );
};

const SubMenuItem = ({
  active,
  subMenu,
}: {
  active: boolean;
  subMenu: string[];
}) => {
  return (
    <div
      className={`pt-12 absolute z-20 bg-[#161617] w-full h-full top-0 left-0 right-0 ${
        active ? "visible" : "invisible"
      }`}
    >
      <ul>
        {subMenu.map((item, index) => (
          <li key={index} className="text-2xl font-semibold px-12 py-1">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const GlobalNavContent = ({ show }: { show: boolean }) => {
  const items = [
    {
      label: "Store",
      subMenu: [
        "Shop the Latest",
        "Mac",
        "iPad",
        "iPhone",
        "Apple Watch",
        "Accessories",
      ],
    },
    { label: "Mac", subMenu: [] },
    { label: "iPad", subMenu: [] },
    { label: "iPhone", subMenu: [] },
    { label: "Watch", subMenu: [] },
    { label: "Vision", subMenu: [] },
    { label: "AirPods", subMenu: [] },
    { label: "TV & Home", subMenu: [] },
    { label: "Entertaiment", subMenu: [] },
    { label: "Accessories", subMenu: [] },
    { label: "Support", subMenu: [] },
  ];

  return (
    <li
      className={`absolute bg-[#161617] z-10 w-full transition-all duration-[600ms] ${
        show ? "h-screen visible" : "h-0 invisible"
      }`}
    >
      <div className="pt-12 relative">
        {items.map((item, index) => (
          <MenuItem show={show} index={index} key={index}>
            {(active) => (
              <div>
                <span>{item.label}</span>
                <SubMenuItem active={active} subMenu={item.subMenu} />
              </div>
            )}
          </MenuItem>
        ))}
      </div>
    </li>
  );
};

function App() {
  const [show, setShow] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setShow(!show);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 600);
    }
  };

  return (
    <>
      <div>
        <nav className="bg-[#161617cc] text-[#ffffffcc] h-12 fixed w-full top-0 left-0 right-0">
          <div className="flex h-full">
            <ul className="flex flex-1">
              <li className="flex-1">
                <a href="#" className="block w-max px-4 h-12">
                  <FaApple className="h-full" />
                </a>
              </li>
              <GlobalNavContent show={show} />
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
                onClick={handleButtonClick}
              >
                <HiOutlineMenuAlt4 className="h-full" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
