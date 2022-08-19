import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="relative h-16 text-gray-700 dark:text-gray-100">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* links */}
        <div className="flex items-center gap-3 font-bold">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
        {/* buttons */}
        <div className="flex items-center">
          <NavLink
            to={"/signin"}
            className="flex items-center justify-center rounded-md bg-secondary-dark-bg px-4 py-1 font-bold capitalize tracking-wide text-gray-100 dark:bg-gray-100 dark:text-gray-700"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
