import React, { useState } from "react";
import { styles } from "../styles";
import { Link, NavLink, } from "react-router-dom";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // useState snipet
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
    bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">Nipuna Chamod <span className="sm:block hidden">| Frontend Developer</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-0">
          {NavLink.map((link) => (
            <li 
            key={link.id}
            className={`${
              active === Text.title
              ? "text-white"
              : "text-secondary"

            } hover:text-white text-[18px]
            font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
