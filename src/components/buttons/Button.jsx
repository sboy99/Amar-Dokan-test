import React from "react";

function Button({ onClick = () => {}, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-md py-3 font-inter font-semibold capitalize leading-none tracking-tighter outline-none ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
