import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/outline";
import {
  BellIcon,
  ShoppingCartIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
// import { useResize } from "../../hooks";
import { Menu, Transition } from "@headlessui/react";
import { NavbarItems } from "../../data";
import { IconButton, Brand } from "../../utils";

const Navbar = () => {
  // const [width] = useResize(window);

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

  const NavbarItem = () => {
    return NavbarItems.map((item) => (
      <Menu.Item key={item.id}>
        {({ active }) => (
          <NavLink
            to={item.to}
            className={`${
              active ? `text-sky-500` : `text-slate-800`
            } group mx-auto flex w-full items-center gap-2 rounded-md px-4 py-2 text-lg font-semibold tracking-tight`}
          >
            <span className="text-xl ">{item.name}</span>
          </NavLink>
        )}
      </Menu.Item>
    ));
  };

  const SmLinks = () => {
    return (
      <Menu as={`div`} className="z-10 inline-block text-left">
        <div>
          <Menu.Button className="rounded-full  p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <MenuIcon className="h-6 w-6 text-slate-900 dark:text-slate-100" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-1/2 z-50 mt-3 flex w-[90%] origin-top-left -translate-x-1/2 flex-col gap-2 overflow-hidden rounded-2xl bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 backdrop-blur-xl focus:outline-none">
            <div className="ml-4">
              <Brand />
            </div>
            <NavbarItem />
            <div className="float-right w-full py-3 px-4">
              <button className="w-full rounded-md bg-gradient-to-r from-blue-600 to-cyan-500 py-2 text-center text-lg font-bold capitalize tracking-wide text-white focus:outline-none">
                Login
              </button>
            </div>
          </Menu.Items>
        </Transition>
        <Menu.Items className="fixed inset-0 -z-10 h-screen w-full bg-slate-300/50 "></Menu.Items>
      </Menu>
    );
  };

  return (
    <div className="relative h-16 border-b-2 border-white/70 bg-white/50 text-gray-700 backdrop-blur dark:text-gray-100">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* links for devices */}
        <div className="hidden md:block">
          <MdLinks />
        </div>
        <div className=" md:hidden">
          <SmLinks />{" "}
        </div>

        {/* buttons */}
        <div className=" flex items-center gap-1 md:gap-2">
          <IconButton Icon={ShoppingCartIcon} link={true} to="/cart" />
          <IconButton
            Icon={BellIcon}
            onClick={() => {
              console.log("Belled");
            }}
            notify={true}
          />
          <IconButton
            Icon={DotsVerticalIcon}
            onClick={() => {}}
            className="md:hidden"
          />
          <NavLink
            to={"/signin"}
            className="hidden items-center justify-center rounded-md bg-indigo-600 px-4 py-1 font-bold capitalize tracking-wide text-gray-100 dark:bg-blue-500 md:flex"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
