import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Disclosure, Transition } from "@headlessui/react";

const CollapsibleMenu = ({ title = "", children }) => {
  return (
    <Disclosure as="div" className="z-0">
      {({ open }) => (
        <>
          <Disclosure.Button
            className={`group z-10 flex w-full items-center justify-between rounded-md p-2 font-lexend font-medium text-stone-600 hover:bg-slate-100 ${
              open && `bg-indigo-600 !text-white hover:bg-indigo-700`
            }`}
          >
            {title}
            <ChevronRightIcon
              className={`${
                open ? `rotate-90 transform ` : ``
              } h-5 w-5 transition-transform duration-300 ease-in-out`}
            />
          </Disclosure.Button>

          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-y-95 opacity-0"
            enterTo="transform scale-y-100 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform scale-y-100 opacity-100"
            leaveTo="transform scale-y-90 opacity-0"
          >
            <Disclosure.Panel
              as="div"
              className="-z-10 rounded-md bg-slate-100 p-2"
              static
            >
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default CollapsibleMenu;
