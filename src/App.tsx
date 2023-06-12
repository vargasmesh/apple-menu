import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

const GlobalNavContent = ({ show }: { show: boolean }) => {
  const visibility = show ? "visible" : "invisible";
  return (
    <li className={`absolute bg-[#161617] h-full z-10 w-full ${visibility}`}>
      <div className="pt-12">
        <div className="text-2xl px-12 py-1 font-semibold">Store</div>
        <div className="text-2xl px-12 py-1 font-semibold">Mac</div>
        <div className="text-2xl px-12 py-1 font-semibold">iPad</div>
        <div className="text-2xl px-12 py-1 font-semibold">iPhone</div>
        <div className="text-2xl px-12 py-1 font-semibold">Watch</div>
        <div className="text-2xl px-12 py-1 font-semibold">Vision</div>
        <div className="text-2xl px-12 py-1 font-semibold">AirPods</div>
        <div className="text-2xl px-12 py-1 font-semibold">TV & Home</div>
        <div className="text-2xl px-12 py-1 font-semibold">Entertaiment</div>
        <div className="text-2xl px-12 py-1 font-semibold">Accessories</div>
        <div className="text-2xl px-12 py-1 font-semibold">Support</div>
      </div>
    </li>
  );
};

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-[#161617cc] text-[#ffffffcc] h-12 ">
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
            <div>
              <button
                className="block w-max px-4 h-12"
                aria-label="Menu"
                onClick={() => setShow(true)}
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
