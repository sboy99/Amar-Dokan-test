import React from "react";

const HeadLine = ({ Icon }) => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <Icon className="h-10 w-10 fill-indigo-600 text-indigo-600" />
      <p></p>
    </div>
  );
};

export default HeadLine;
