import React from "react";
import { Tip } from ".";

const Button = ({
  children,
  className = ``,
  hover = ``,
  active = false,
  onClick = () => {},
  type = "button",
  disabled = false,
}) => {
  return (
    <Tip tip={hover}>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`${className} outline-none ${
          active && `bg-sky-50 text-sky-500 hover:bg-sky-100`
        }`}
      >
        {children}
      </button>
    </Tip>
  );
};

export default Button;
