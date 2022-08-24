import React from "react";

const HeadLine = ({ Icon, className }) => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <Icon className={`h-10 w-10 ${className}`} />
      <p></p>
    </div>
  );
};

export default HeadLine;
