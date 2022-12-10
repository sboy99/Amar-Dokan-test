import React from "react";

const FormikInput = ({
  name = null,
  label,
  type = `text`,
  placeholder = ``,
  onChange,
  onBlur,
  value,
  error,
  className = "rounded-full bg-transparent",
}) => {
  const errorMessage = error(label);
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        htmlFor={label}
        className="text-sm font-semibold capitalize text-slate-700"
      >
        {name || label}
      </label>
      <input
        id={label}
        name={label}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`${className} border  px-4 outline-none placeholder:text-slate-500/80 focus:border focus:ring-0 ${
          errorMessage
            ? `border-rose-600 focus:border-rose-600`
            : `border-gray-300 focus:border-indigo-600`
        }`}
      />
      <p className="ml-5 max-w-15 text-xs text-rose-600">{errorMessage}</p>
    </div>
  );
};

export default FormikInput;
