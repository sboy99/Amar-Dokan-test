import React from "react";

const Submit = ({ children, disabled = true }) => {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={`mt-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2  font-poppins text-lg font-semibold text-white ${
        disabled && `opacity-75`
      }`}
    >
      {children}
    </button>
  );
};

export default Submit;
