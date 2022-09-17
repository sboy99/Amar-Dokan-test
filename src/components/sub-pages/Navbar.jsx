import React from "react";
import { NavLink } from "react-router-dom";
import {
  Bars3Icon,
  MagnifyingGlassIcon as SearchIcon,
  ShoppingCartIcon,
  BellIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
  ArrowRightOnRectangleIcon as LoginIcon,
} from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { NavbarItems } from "../../data";
import { IconButton, Brand, Panel, PopBtn, PopLink } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setSearchOpen, setMenuOpen as setIsOpen } from "../../features";
import { auth, layout } from "../../app/store";
import { useAuth } from "../../context/authContext";

const Navbar = () => {
  const { menuOpen: isOpen } = useSelector(layout);
  const dispatch = useDispatch();
  const { user } = useSelector(auth);
  const { logoutUser } = useAuth();

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
    <div
      className={`sticky inset-x-0 top-0 z-50 h-16 snap-start 
       border-b-2 border-white/70 bg-white
       font-inter text-gray-700 backdrop-blur dark:text-gray-100`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* links for devices */}
        <div className="hidden md:block">
          <MdLinks />
        </div>
        <div className="flex items-center md:hidden">
          <IconButton
            Icon={isOpen ? XMarkIcon : Bars3Icon}
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
          <Panel
            photo={user?.photo}
            Icon={EllipsisVerticalIcon}
            popClass={`${!user && `lg:hidden`}`}
            className="flex flex-col divide-y bg-white py-1 shadow-xl ring-1 ring-slate-900/10"
          >
            {user ? (
              <PopBtn onClick={() => logoutUser()} Icon={LogoutIcon}>
                logout
              </PopBtn>
            ) : (
              <PopLink to={`/signin`} Icon={LoginIcon}>
                Sign In
              </PopLink>
            )}
          </Panel>
          {!user && (
            <NavLink
              to={"/signin"}
              className="hidden items-center justify-center rounded-md bg-indigo-600 px-4 py-1 font-poppins font-bold capitalize tracking-wide text-gray-100 dark:bg-blue-500 lg:flex"
            >
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
