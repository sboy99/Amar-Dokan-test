import React, { useState, useRef } from "react";
import { Combobox } from "@headlessui/react";
import {
  MagnifyingGlassIcon as SearchIcon,
  ArrowUturnRightIcon as EnterIcon,
} from "@heroicons/react/24/outline";

const Categories = [
  "All Categories",
  "Electronics",
  "Appliances",
  "Foods",
  "Grocery",
  "Health & Care",
  "Sports & Fitness",
  "Books",
  "Cloths",
  "Furniture",
  "Daily Essentials"
];

const SearchCategory = () => {
  const Input = useRef(null);
  const [selectedCaterogy, setSelectedCaterogy] = useState(``);
  const [query, setQuery] = useState(``);

  const filteredCategory =
    query === ``
      ? Categories
      : Categories.filter((cat) =>
          cat.toLowerCase().includes(query.toLowerCase())
        );

  function handleSubmit(selectedItem) {
    setSelectedCaterogy(selectedItem);
    Input.current.blur();
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <Combobox
      as="div"
      className="relative"
      value={selectedCaterogy}
      onChange={handleSubmit}
    >
      {/* serch box */}
      <div className="relative">
        <SearchIcon className="absolute inset-x-0 top-2 ml-2 h-5 w-5" />
        <Combobox.Input
          ref={Input}
          onChange={handleChange}
          placeholder="Search.."
          className="h-9 w-full max-w-xs rounded-full border-none bg-white pl-8 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-500 md:w-72 "
        />
      </div>
      {/* options */}
      {filteredCategory.length === 0 && query ? (
        <p className="absolute z-20 mt-1 w-full origin-bottom-left rounded-md bg-white py-2 text-center text-sm font-semibold capitalize text-slate-500 shadow">
          No results found
        </p>
      ) : (
        <Combobox.Options className="absolute z-20 mt-1 w-full origin-bottom-left rounded-md bg-white py-2 shadow">
          {filteredCategory.map((category, index) => (
            <Combobox.Option key={index + category} value={category}>
              {({ active }) => (
                <div
                  className={`flex items-center justify-between py-1 px-3 capitalize ${
                    active
                      ? `bg-sky-600 font-medium text-white`
                      : `text-slate-700`
                  }`}
                >
                  {category}{" "}
                  {active && (
                    <span>
                      <EnterIcon className="h-5 w-5 rotate-180" />
                    </span>
                  )}
                </div>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}
    </Combobox>
  );
};

export default SearchCategory;
