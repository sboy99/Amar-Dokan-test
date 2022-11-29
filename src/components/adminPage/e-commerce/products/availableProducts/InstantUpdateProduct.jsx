import React from "react";
import { useDispatch } from "react-redux";
import { useAdmin } from "../../../../../app/store";
import { setRequestId, updateProduct } from "../../../../../features";
import { SpinCircle, Toogle } from "../../../../../utils";

const InstantUpdateProduct = ({ value, id, field }) => {
  const [enabled, setEnabled] = React.useState(value); // Updating the local state based on toogle value
  const {
    isLoading,
    request: { id: toogleId },
  } = useAdmin();
  const dispatch = useDispatch();

  const onToggle = (val, toggleId) => {
    const payload = { [field]: val };
    dispatch(setRequestId(toggleId));
    dispatch(updateProduct({ payload, id }));
    setEnabled(val);
  };

  const wait = isLoading && toogleId && toogleId === `${id}${field}`;
  return (
    <div className="relative w-[5.5rem] ">
      {wait && (
        <SpinCircle
          className={`${
            enabled ? `text-emerald-500` : `text-rose-500`
          } absolute inset-y-0 right-0`}
        />
      )}
      <Toogle
        value={enabled}
        onToggle={onToggle}
        loading={wait}
        toggleId={`${id}${field}`}
      />
    </div>
  );
};

export default InstantUpdateProduct;
