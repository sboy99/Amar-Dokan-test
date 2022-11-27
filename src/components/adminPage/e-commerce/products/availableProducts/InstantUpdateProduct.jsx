import React from "react";
import { useDispatch } from "react-redux";
import { useAdmin } from "../../../../../app/store";
import { SpinCircle, Toogle } from "../../../../../utils";

const InstantUpdateProduct = ({ value }) => {
  const { isLoading } = useAdmin();
  const dispatch = useDispatch();

  const onToggle = (val) => {
    console.log(val);
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
