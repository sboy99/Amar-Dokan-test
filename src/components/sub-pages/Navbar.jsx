import React from "react";
import { NavLink } from "react-router-dom";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  BellIcon,
  XIcon,
} from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { NavbarItems } from "../../data";
import { IconButton, Brand } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchOpen,
  setMenuOpen as setIsOpen,
} from "../../features/LayoutSlice";
import { layout } from "../../app/store";

const Navbar = () => {
  const { menuOpen: isOpen } = useSelector(layout);
  const dispatch = useDispatch();

  const MdLinks = () => {
    return (
      <div className=" flex items-center gap-7">
        <Brand />
        <div className="ml-4 flex flex-shrink-0 items-center gap-7 text-lg font-semibold leading-6">
          {NavbarItems.map((item) => (
            <NavLink
              key={item?.id}
              to={item?.to}
              className={({ isActive }) =>
                `px-4 py-1 hover:text-sky-500 ${
                  isActive
                    ? `rounded-full bg-sky-500/5 text-sky-500 dark:text-blue-500`
                    : `text-slate-700`
                }`
              }
            >
              {item?.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 h-16 border-b-2 border-white/70 bg-white/50 text-gray-700 backdrop-blur dark:text-gray-100">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* links for devices */}
        <div className="hidden md:block">
          <MdLinks />
        </div>
        <div className="flex items-center md:hidden">
          <IconButton
            Icon={isOpen ? XIcon : MenuIcon}
            onClick={() => dispatch(setIsOpen(true))}
            className="z-50"
          />
        </div>

        {/* buttons */}
        <div className=" flex items-center gap-1 md:gap-2">
          {/* Search Icon */}
          <IconButton
            Icon={SearchIcon}
            onClick={() => dispatch(setSearchOpen(true))}
          />
          {/* Cart Icon */}
          <IconButton Icon={ShoppingCartIcon} link={true} to="/cart" />
          {/* Bell Icon */}
          <IconButton
            Icon={BellIcon}
            onClick={() => {}}
            notify={true}
            className="hidden lg:block"
          />
          {/* Dot Icon */}
          <IconButton
            Icon={DotsVerticalIcon}
            onClick={() => {}}
            className="lg:hidden"
          />
          <NavLink
            to={"/signin"}
            className="hidden items-center justify-center rounded-md bg-indigo-600 px-4 py-1 font-bold capitalize tracking-wide text-gray-100 dark:bg-blue-500 lg:flex"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
