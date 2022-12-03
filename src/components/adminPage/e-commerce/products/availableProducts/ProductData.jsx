import React from "react";
import { Button } from "../../../../../utils";
import {
  PencilSquareIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/24/outline";
import InstantUpdateProduct from "./InstantUpdateProduct";

const ProductData = ({ data = {} }) => {
  const [isEditMode, setEditMode] = React.useState(false);
  const toogleEditMode = () => setEditMode((val) => !val);

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
        <td className="py-2 px-4 sm:py-4 sm:px-6">{data}</td>
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
      <th scope="row" className="py-2 px-4 sm:py-4 sm:px-6">
        <Button
          hover={isEditMode ? `Save` : `Edit`}
          className=""
          onClick={toogleEditMode}
        >
          {isEditMode ? (
            <DocumentArrowUpIcon className="h-6 w-6" />
          ) : (
            <PencilSquareIcon className="h-6 w-6" />
          )}
        </Button>
      </th>
    </tr>
  );
};

export default ProductData;
