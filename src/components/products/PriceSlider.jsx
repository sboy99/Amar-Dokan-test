import React, { useState } from "react";

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState(100);
  const handleChange = (e) => {
    setPriceRange(e.target.value);
  };
  return (
    <div className="flex flex-col gap-y-2 p-2">
      <label
        htmlFor="medium-range"
        className=" block font-medium capitalize text-slate-800"
      >
        Select price range
      </label>
      <p className=" mb-1 text-lg text-blue-700">${priceRange}</p>
      <input
        type="range"
        id="medium-range"
        min="0"
        max="500"
        value={priceRange}
        onChange={handleChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg border-0 bg-slate-300 text-indigo-600 outline-none "
      />
    </div>
  );
};

export default PriceSlider;
