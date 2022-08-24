import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import { searchItems } from "../data";
import { layout } from "../app/store";
import {
  setSearchOpen as setIsOpen,
  setSearchText,
} from "../features/LayoutSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchPallete = () => {
  const { searchOpen: isOpen } = useSelector(layout);
  const dispatch = useDispatch();
  const [query, setQuery] = useState(``);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "i" && (event.metaKey || event.ctrlKey)) {
        dispatch(setIsOpen(!isOpen));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    //eslint-disable-next-line
  }, [isOpen]);

  const filteredQuery = query
    ? searchItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSearch = (event) => {
    dispatch(setSearchText(event.target.value));
    setQuery(event.target.value);
  };

  const handleSubmit = (searchItem) => {
    dispatch(setSearchText(searchItem?.title));
    dispatch(setIsOpen(false));
    //TODO: Fire query to API
  };

  const SearchItem = () => {
    return filteredQuery.map((item) => (
      <Combobox.Option key={item?.id} value={item}>
        {({ active }) => (
          <div
            className={`${
              active ? `bg-sky-400/20 font-semibold text-sky-500` : ``
            } px-4 py-2`}
          >
            {item?.title}
          </div>
        )}
      </Combobox.Option>
    ));
  };

  return (
    <Transition.Root
      as={Fragment}
      show={isOpen}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        onClose={() => dispatch(setIsOpen(false))}
        className="fixed inset-0 overflow-y-auto p-4 pt-5"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-slate-300/50 " />
        </Transition.Child>

        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-90"
          enterTo="opacity-100 scale-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-90"
        >
          <Combobox
            as="div"
            onChange={handleSubmit}
            className="relative mx-auto max-w-xl divide-y divide-slate-600/20 overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-slate-900/5"
          >
            <div className="flex items-center">
              <SearchIcon className="mx-4 h-6 w-6 text-sky-500" />
              <Combobox.Input
                onChange={handleSearch}
                className="stext-slate-600 h-12 w-full border-0 bg-transparent pl-0 placeholder:text-slate-400 focus:ring-0"
                placeholder="Search..."
              />
              <button
                onClick={() => dispatch(setIsOpen(false))}
                className="mx-3 rounded-lg bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow-md outline-none ring-1 ring-slate-400/10 hover:text-sky-500 hover:ring-sky-400/50"
              >
                Esc
              </button>
            </div>
            {filteredQuery.length > 0 ? (
              <Combobox.Options
                static
                className="max-h-64 overflow-y-auto py-4 text-sm"
              >
                <SearchItem />
              </Combobox.Options>
            ) : (
              query &&
              filteredQuery.length === 0 && (
                <p className="py-2 px-6 text-sm font-semibold text-slate-500">
                  No results found
                </p>
              )
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default SearchPallete;
