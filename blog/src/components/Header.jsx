import { images } from "../constants/index.js";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "FAQ's" },
];

const Navitem = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2 ">
        {name}
      </a>
      <span className="text-blue-500 relative transition-all duration-500 font-bold right-0 bottom-0.5 opacity-0 group-hover:right-[90%] group-hover:opacity-100">
        /
      </span>{" "}
    </li>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section className="sticky top-0 left-0 right-0 z-50 bg-white">
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-50">
          {navIsVisible ? (
            <IoClose className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <IoMenuOutline className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-300 mt-[56px] lg:mt-[0] bg-sky-950 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}
        >
          <ul className="text-white gap-y-5 lg:text-sky-950 flex flex-col lg:flex-row gap-x-3 px-5 font-semibold items-center">
            {navItemsInfo.map((item) => (
              <Navitem key={item.name} name={item.name} />
            ))}
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Sign IN
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
