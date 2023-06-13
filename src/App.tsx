import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

const MenuItem = ({
  children,
  show,
  index,
}: {
  children: React.ReactNode;
  show: boolean;
  index: number;
}) => {
  return (
    <div
      className={`text-2xl px-12 py-1 font-semibold duration-1000 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transitionDelay: show ? `${index * 50}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

const GlobalNavContent = ({ show }: { show: boolean }) => {
  return (
    <li
      className={`absolute bg-[#161617] z-10 w-full  transition-all duration-[600ms] ${
        show ? "h-screen visible" : "h-0 invisible"
      }`}
    >
      <div className="pt-12 relative">
        <MenuItem show={show} index={0}>
          Store
        </MenuItem>
        <MenuItem show={show} index={1}>
          Mac
        </MenuItem>
        <MenuItem show={show} index={2}>
          iPad
        </MenuItem>
        <MenuItem show={show} index={3}>
          iPhone
        </MenuItem>
        <MenuItem show={show} index={4}>
          Watch
        </MenuItem>
        <MenuItem show={show} index={5}>
          Vision
        </MenuItem>
        <MenuItem show={show} index={6}>
          AirPods
        </MenuItem>
        <MenuItem show={show} index={7}>
          TV & Home
        </MenuItem>
        <MenuItem show={show} index={8}>
          Entertaiment
        </MenuItem>
        <MenuItem show={show} index={9}>
          Accessories
        </MenuItem>
        <MenuItem show={show} index={10}>
          Support
        </MenuItem>
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
