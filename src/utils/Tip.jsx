import React from "react";

const Tip = ({ children, tip }) => {
  return (
    <div className="group relative flex flex-col items-center">
      {children}
      <div className="absolute bottom-0 mb-8 hidden flex-col items-center group-hover:flex">
        <span className="relative z-10 w-full whitespace-nowrap rounded-md bg-gray-600 p-2 text-xs leading-none text-white shadow-lg">
          {tip}
        </span>
        <div className="-mt-2 h-3 w-3 rotate-45 bg-gray-600"></div>
      </div>
    </div>
  );
};

export default Tip;
