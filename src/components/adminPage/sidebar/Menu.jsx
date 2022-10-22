import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { AdminMenu } from "../../../data";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="relative h-full overflow-auto p-4 xl:p-6">
      {/* menu */}
      <div className="mt-2 flex flex-col gap-y-2">
        {AdminMenu.map((link) => (
          <Disclosure as="div" className="" key={link?.id} defaultOpen>
            <Disclosure.Button
              as={Link}
              to={link?.to}
              className="flex items-center gap-x-2 font-inter  font-semibold capitalize text-slate-700"
            >
              <span className="rounded-md border border-slate-700 p-1 text-slate-700">
                {<link.icon className="h-4 w-4" />}
              </span>{" "}
              {link?.mainTitle}
            </Disclosure.Button>
            <Transition
              enter="transition duration-300 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-200 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="my-2 pl-3">
                {link.subLinks.map((sublink) => (
                  <Link
                    key={sublink?.id}
                    to={sublink?.to}
                    className={`block border-l border-slate-200 py-1 pl-4 font-inter  font-normal  tracking-tight text-slate-600 hover:border-slate-500`}
                  >
                    {sublink?.title}
                  </Link>
                ))}
              </Disclosure.Panel>
            </Transition>
          </Disclosure>
        ))}
      </div>
      <div className="h-screen"></div>
    </aside>
  );
};

export default Menu;
