import React from "react";

const Headline = ({ mainHeading = null, subHeading = null }) => {
  return (
    <div className="mt-8 w-full px-4 py-2">
      {mainHeading && (
        <h1 className="font-inter text-4xl font-extrabold capitalize tracking-tight text-white lg:text-5xl">
          {mainHeading}
        </h1>
      )}
      {subHeading && (
        <p className="mt-1 w-full max-w-xl font-lexend text-sm leading-4 text-gray-200 md:text-base ">
          {subHeading}
        </p>
      )}
    </div>
  );
};

export default Headline;
