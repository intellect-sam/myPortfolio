import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between py-4 md:items-center md:mt-6 md:py-6 md:mx-80 md:px-14">
      <a href="/" className="font-bold font-pop">Sam.Dev</a>

      <div className="flex justify-between md:gap-8">
          <ul className="items-center justify-end flex-1 hidden list-none sm:flex">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-pop font-light cursor-pointer hover:text-blue-800 text-[10px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-6"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
          
              </li>
            ))}
          </ul>
          <div className="justify-end">

              <button className="justify-end px-2 py-2 text-sm font-light text-white bg-red-500 rounded shadow-md hover:bg-blue-700">
                Download CV
              </button>

          </div>
      </div>


      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain text-black"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex-col gap-10"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col items-start justify-end flex-1 list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-pop font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimBlack"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          <button className="justify-end px-2 py-2 text-sm font-light text-white bg-red-500 rounded shadow-md hover:bg-blue-700">
                Download CV
              </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;