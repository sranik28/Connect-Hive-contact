import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { NavLink } from "react-router-dom/dist";

const NavBarr = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="container">
      <div className="flex justify-between ">
        <span className="md:hidden">
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} />
          ) : (
            <HiMenuAlt2 onClick={() => setToggle(!toggle)} />
          )}
        </span>
        <div>
          <img src="" alt="" />
          <h1>Logo</h1>
        </div>

        <ul
          className={`font-semibold flex items-center duration-300 flex-col py-5 px-5 md:p-0 text-white bg-opacity-90 top-[13%] bg-black md:bg-transparent w-36 md:w-auto md:flex-row rounded-md   gap-6 absolute md:static z-50 ${
            toggle ? "top-0 left-0" : "-left-full duration-300"
          }`}
        >
          <li>
            <NavLink to="/allContacts">All Contacts</NavLink>
          </li>
          <li>
            <NavLink to="/addContact">Add Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarr;
