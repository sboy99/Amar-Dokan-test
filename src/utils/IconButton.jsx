import React from "react";
import { Link } from "react-router-dom";

const IconButton = ({
  Icon,
  onClick = () => {},
  notify = false,
  className,
  link = false,
  to,
}) => {
  const Content = () => (
    <div
      type="button"
      className={`${className} relative rounded-full p-2 text-indigo-600 hover:bg-slate-100  dark:text-blue-500 dark:hover:bg-slate-700`}
    >
      {notify && (
        <div className="absolute right-2 top-1 flex h-2 w-2 items-center justify-center rounded-full bg-rose-600 p-1 text-xss leading-none text-white"></div>
      )}
      <Icon className="h-6 w-6" />
    </div>
  );

  if (link)
    return (
      <Link to={to}>
        <Content />
      </Link>
    );

  return (
    <button onClick={onClick}>
      <Content />
    </button>
  );
};

export default IconButton;
