import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { layout } from "../../app/store";
import { setMenuOpen as setIsOpen } from "../../features/LayoutSlice";
import { NavbarItems } from "../../data";
import { Brand } from "../../utils";

const MobileNavbar = () => {
  const { menuOpen: isOpen } = useSelector(layout);
  const dispatch = useDispatch();

  const NavItem = () => {
    return NavbarItems.map((item) => (
      <NavLink
        key={item.id}
        to={item.to}
        onClick={() => dispatch(setIsOpen(false))}
        className="block w-full p-2 outline-none"
      >
        {item.name}
      </NavLink>
    ));
  };

  return (
    <Transition as={Fragment} show={isOpen}>
      <Dialog
        onClose={() => dispatch(setIsOpen(false))}
        className="fixed inset-0 overflow-y-auto p-4 pt-16 md:hidden"
      >
        <Transition.Child
          enter="duration-200 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>

        <Transition.Child
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-90 -translate-y-8 -translate-x-6"
          enterTo="opacity-100 scale-100 translate-y-0 translate-x-0"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100 translate-y-0 translate-x-0"
          leaveTo="opacity-0 scale-90 -translate-y-8 -translate-x-6"
        >
          <div className="relative mx-auto  max-w-xl divide-y divide-slate-900/10 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5">
            <div className="pb-2">
              <Brand />
            </div>
            <div className="mb-2 flex flex-col text-xl tracking-tight text-slate-900">
              <NavItem />
            </div>
            <NavLink
              className="block w-full p-2 text-xl text-slate-900 outline-none"
              to="/signin"
              onClick={() => dispatch(setIsOpen(false))}
            >
              Sign In
            </NavLink>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default MobileNavbar;
