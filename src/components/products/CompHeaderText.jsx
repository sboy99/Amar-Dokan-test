import React from "react";

const CompHeaderText = ({ subject, title, desc }) => {
  return (
    <>
      <h1 className="font-lexend font-semibold text-indigo-600 md:text-xl">
        {subject}
      </h1>
      <h1 className="font-lexend text-4xl font-extrabold capitalize tracking-tight text-slate-800 md:text-5xl">
        {title}
      </h1>
      <p className="my-2 max-w-sm font-inter text-sm !leading-5 tracking-tight text-slate-600 md:text-base">
        {desc}
      </p>
    </>
  );
};

export default CompHeaderText;
