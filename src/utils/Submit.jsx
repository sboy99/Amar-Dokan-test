import React from "react";

const Submit = ({ children, disabled = true, className }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`mt-2 rounded-full ${className} px-4 py-2  font-poppins text-lg font-semibold text-white ${
        disabled && `opacity-75`
      }`}
    >
      {children}
    </button>
  );
};

export default Submit;
