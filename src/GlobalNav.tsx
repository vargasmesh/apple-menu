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

export const GlobalNav = ({ show }: { show: boolean }) => {
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
