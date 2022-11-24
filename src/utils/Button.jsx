import React from "react";
import { Tip } from ".";

const Button = ({
  children,
  className = ``,
  hover = ``,
  active = false,
  onClick = () => {},
  type = "button",
}) => {
  return (
    <Tip tip={hover}>
      <button
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
