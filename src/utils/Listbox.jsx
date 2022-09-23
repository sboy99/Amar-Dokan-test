import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

const List = ({ list = [], title = "" }) => {
  const [selected, setSelected] = useState(list[0]);

  return (
    <>
      {title && (
        <h1 className="mb-2 pl-2 font-medium text-slate-900">{title}</h1>
      )}
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Button className="w-full rounded-lg bg-indigo-50 p-2 text-left font-poppins text-lg font-medium text-indigo-600 outline-none">
              {selected?.name}
            </Listbox.Button>
            <Listbox.Options className="w-full cursor-pointer divide-y divide-slate-700/5 p-2 outline-none">
              {list.map((item) => (
                <Listbox.Option
                  className="flex w-full items-center justify-between"
                  value={item}
                  key={item?.id}
                >
                  {({ active, selected }) => (
                    <div
                      className={`flex w-full items-center gap-x-2 rounded p-2 ${
                        active && `bg-sky-100 text-blue-600`
                      } ${selected && `font-semibold`}`}
                    >
                      {item.name}
                      {selected && (
                        <CheckIcon className="h-5 w-5 text-emerald-500" />
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </>
  );
};

export default List;
