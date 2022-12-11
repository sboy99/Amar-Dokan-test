import React from "react";
import { Button } from "../../../../../utils";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import InstantUpdateProduct from "./InstantUpdateProduct";
import { deleteProduct, openProductEditMode } from "../../../../../features";
import { useDispatch } from "react-redux";

const ProductData = ({ data = {} }) => {
  const dispatch = useDispatch();

  const openProductUpdateForm = () => {
    dispatch(openProductEditMode(data.productId));
  };

  const delProduct = (id) => {
    dispatch(deleteProduct({ id }));
  };

  const TableData = (
    <>
      <td className="hidden py-4 px-6 md:block ">
        <span className="rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-500">
          ...{data.productId.slice(data.productId.length - 6)}
        </span>
      </td>
      <th scope="row" className="py-2 px-4 sm:py-4 sm:px-6">
        <p className="whitespace-nowrap text-slate-600">{data.name}</p>
      </th>
      {[data.price, data.type, data.categoryName].map((data) => (
        <td key={data} className="py-2 px-4 sm:py-4 sm:px-6">
          {data}
        </td>
      ))}
      <td className="py-2 px-4 sm:py-4 sm:px-6">
        {
          <InstantUpdateProduct
            value={data.freeShipping}
            id={data.productId}
            field={`freeShipping`}
          />
        }
      </td>
      <td className="py-2 px-4 sm:py-4 sm:px-6">
        {
          <InstantUpdateProduct
            value={data.published}
            id={data.productId}
            field={`published`}
          />
        }
      </td>
    </>
  );

  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      {TableData}
      {/* actions */}
      <th
        scope="row"
        className="flex items-center gap-x-2 py-2 px-4 sm:py-4 sm:px-6"
      >
        <Button hover={`Edit`} className="" onClick={openProductUpdateForm}>
          {<PencilSquareIcon className="h-6 w-6" />}
        </Button>
        <Button
          hover={`Delete`}
          className=""
          onClick={() => delProduct(data.productId)}
        >
          {<TrashIcon className="h-6 w-6" />}
        </Button>
      </th>
    </tr>
  );
};

export default ProductData;
