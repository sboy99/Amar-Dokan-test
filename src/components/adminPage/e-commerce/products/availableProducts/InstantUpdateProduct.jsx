import React from "react";
import { useDispatch } from "react-redux";
import { useAdmin } from "../../../../../app/store";
import { updateProduct } from "../../../../../features";
import { SpinCircle, Toogle } from "../../../../../utils";

const InstantUpdateProduct = ({ value, id, field }) => {
  const { isLoading } = useAdmin();
  const dispatch = useDispatch();

  const onToggle = (val) => {
    const payload = { [field]: val };
    dispatch(updateProduct({ payload, id }));
  };
  return (
    <div className="flex items-center ">
      {isLoading && (
        <SpinCircle className={value ? `text-rose-500` : `text-emerald-500`} />
      )}
      <Toogle value={value} onToggle={onToggle} loading={isLoading} />
    </div>
  );
};

export default InstantUpdateProduct;
