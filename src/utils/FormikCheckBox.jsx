import React from "react";

const FormikCheckBox = ({ name, children, onChange, value }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        className="h-5 w-5 rounded border-indigo-600 bg-white/5 text-indigo-600 ring-0 focus:ring-0"
        name={name}
        onChange={onChange}
        checked={value}
        type="checkbox"
      />
      <h1 className="text-base font-semibold text-slate-800">{children}</h1>
    </div>
  );
};

export default FormikCheckBox;