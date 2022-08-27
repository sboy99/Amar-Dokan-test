import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Panel = ({
  children,
  Icon = null,
  text,
  popClass,
  className,
  photo = null,
}) => {
  return (
    <Popover as={`div`} className={`${popClass} relative`}>
      {({ open }) => (
        <>
          <Popover.Button
            className="group relative z-10 rounded-full p-2 text-indigo-600 outline-none hover:bg-sky-50/50 hover:text-sky-500 focus:outline-none  dark:text-blue-500 dark:hover:bg-slate-700
          "
          >
            {photo ? (
              <img
                src={photo}
                className="h-7 w-7 rounded-full object-cover object-center ring-2 ring-white group-hover:ring-sky-500"
                alt="profile"
              />
            ) : Icon ? (
              open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Icon className="h-6 w-6" />
              )
            ) : (
              text
            )}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 h-screen bg-slate-300/50" />
          </Transition>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-3 "
            enterTo="opacity-100 translate-y-0 "
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0 "
            leaveTo="opacity-0 translate-y-3 "
          >
            <Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-15 overflow-hidden rounded-lg bg-slate-300 shadow-md ring-slate-900/5">
              <div className={className}>{children}</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Panel;

export const PopBtn = ({
  children,
  onClick = () => {},
  className = ``,
  Icon = null,
}) => {
  return (
    <Popover.Button
      as="button"
      onClick={onClick}
      className={`${className} group flex items-center gap-3 px-4 py-1 text-left text-lg font-semibold capitalize tracking-tight text-slate-700 outline-none transition-colors duration-500 ease-in-out hover:bg-indigo-600 hover:text-white
      focus:bg-indigo-600 focus:text-white 
      `}
    >
      {Icon && (
        <Icon className="h-6 w-6 text-slate-600 transition-colors duration-500 ease-in-out group-hover:text-white group-focus:text-white" />
      )}{" "}
      {children}
    </Popover.Button>
  );
};

export const PopLink = ({ children, to, className = ``, Icon = null }) => {
  return (
    <Popover.Button
      as={Link}
      to={to}
      className={`${className} group flex items-center gap-3 px-4 py-1 text-left text-lg font-semibold capitalize tracking-tight text-slate-700 outline-none transition-colors duration-500 ease-in-out hover:bg-indigo-600 hover:text-white
      focus:bg-indigo-600 focus:text-white 
      `}
    >
      {Icon && (
        <Icon className="h-6 w-6 text-slate-600 transition-colors duration-500 ease-in-out group-hover:text-white group-focus:text-white" />
      )}{" "}
      {children}{" "}
    </Popover.Button>
  );
};
