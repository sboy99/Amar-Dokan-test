import React from "react";
import { CollapsibleMenu, Listbox } from "../../utils";
import { Comapny, PriceSlider } from "../../components";
import { Categories } from "../../data";

const ProductMenu = () => {
  return (
    <div className="flex min-w-[16rem] flex-col gap-y-2 rounded-lg bg-white p-4 shadow shadow-stone-500/20 ">
      {/* Heading */}
      <h1 className="flex-shrink-0 font-lexend text-lg font-bold tracking-wide text-stone-600">
        Product Filters
      </h1>
      {/* Collapsible Property */}
      <div className="z-0 w-full flex-shrink-0 divide-y divide-slate-900/5">
        <Listbox list={Categories} title="Select Category" />
        <PriceSlider />
        <CollapsibleMenu title="Company">
          <Comapny />
        </CollapsibleMenu>
      </div>
    </div>
  );
};

export default ProductMenu;
