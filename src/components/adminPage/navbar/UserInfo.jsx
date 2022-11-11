import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { auth } from "../../../app/store";
import { UserIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const UserInfo = ({
  className,
  children,
  allignPanel = "-right-2 origin-top-right",
}) => {
  const { user } = useSelector(auth);

  return (
    <Popover as="div" className={`relative z-0`}>
      {({ open }) => (
        <>
          <Popover.Button
            className={`group z-10 flex w-fit items-center gap-x-2 rounded-md outline-none `}
          >
            {/* user photo */}
            {user?.image ? (
              <img
                src={user.image}
                loading="lazy"
                decoding="async"
                alt=""
                className="h-8 w-8 rounded-full object-cover object-center"
              />
            ) : (
              <div
                className={`rounded-full p-2 text-white transition-all duration-300 ease-in-out group-hover:bg-sky-500 ${
                  open ? `bg-sky-500` : `bg-indigo-600`
                }`}
              >
                <UserIcon className="h-5 w-5" />
              </div>
            )}
            {/* user Name */}
            <h1 className="hidden font-lexend font-semibold capitalize text-slate-600 sm:block">
              {open ? `close` : user?.name ? user.name.split(" ")[0] : `Admin`}
            </h1>
            {/* mark */}
            {open ? (
              <XMarkIcon className="h-5 w-5 text-slate-600" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-slate-600" />
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
            <Popover.Overlay className="fixed inset-0 -z-10 h-screen bg-slate-300/50" />
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
            <Popover.Panel
              className={`absolute z-10 mt-3 min-w-[16rem] overflow-hidden rounded shadow-md ring-slate-900/5 ${allignPanel}`}
            >
              <div className={className}>{children}</div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default UserInfo;
