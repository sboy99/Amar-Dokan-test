import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const Toogle = ({
  text = "",
  value = false,
  onToggle = () => {},
  loading = false,
  toggleId,
}) => {
  const [enabled, setEnabled] = useState(value);
  const handleChange = (val) => {
    setEnabled(val);
    onToggle(val, toggleId);
  };

  return (
    <Switch
      disabled={loading}
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? "bg-emerald-500" : "bg-rose-500"
      } relative inline-flex h-6 w-11 items-center rounded-full ${
        loading ? `!opacity-90` : `!opacity-100`
      }`}
    >
      <span className="sr-only">{text}</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition duration-300 ease-in-out`}
      />
    </Switch>
  );
};

export default Toogle;
