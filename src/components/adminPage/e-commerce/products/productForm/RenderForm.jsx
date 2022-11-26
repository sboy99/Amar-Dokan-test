import React, { useState, useEffect, Fragment } from "react";
import { useFormik } from "formik";
import { Tab } from "@headlessui/react";
import * as yup from "yup";
import { Button, SpinCircle } from "../../../../../utils";
import { Categories as CategoryTypes } from "../../../../../data/dummy";
import { MONGODB_OBJECT_ID_RGEX } from "../../../../../data";
import ProductDetails from "./ProductDetails";
import UploadProductImage from "./uploadProductImage";

const validationSchema = yup.object({
  name: yup
    .string()
    .required(`Please provide a name`)
    .trim()
    .min(3, `Minimum length of name should be 3`)
    .max(50, `Maximum length of name shoul be 50`),
  price: yup
    .number()
    .required(`Please provide product price`)
    .min(0, `Negetive price is not allowed`),
  images: yup
    .array(
      yup.object({
        id: yup.string().required(`Please provide an public_id`),
        url: yup.string().required(`Image URL is required`),
      })
    )
    .required(`Please provide images of the product`)
    .min(5, `Minimum 5 image of the product is required`)
    .max(10, `Max image should not be more than 10`),
  description: yup
    .string()
    .trim()
    .required(`Please provide a complete description of the product`)
    .min(256, `Minimum description length should be 256 characters`),
  type: yup
    .string()
    .required(`Please select a type`)
    // .test((value) => !value.startsWith("--"), `Please select a proper value`)
    .oneOf(CategoryTypes, `Please select an valid category`),
  category: yup
    .string()
    .required(`Please select an category`)
    .matches(MONGODB_OBJECT_ID_RGEX, `Please select an valid Category`),
  subCategories: yup
    .array(
      yup
        .string()
        .required(`Please select a sub category`)
        .min(2, `Minimum length of Sub category should be atleast 2`)
        .max(30, `Maximum length of sub category should be 30`)
    )
    .required(`Please select sub categories`),
  inventory: yup
    .number()
    .required(`Stock size is required`)
    .min(1, `Minimum stock size should be 1`),
  freeShipping: yup.boolean(),
  published: yup.boolean(),
});

const RenderForm = ({ onReset, onSubmit, disabled = false }) => {
  const [detailError, setDetailError] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const initialValues = {
    name: ``,
    price: 0.0,
    images: [],
    description: ``,
    type: ``,
    category: ``,
    subCategories: [],
    inventory: 1,
    freeShipping: false,
    published: false,
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    onReset,
    validationSchema,
    validateOnBlur: true,
  });

  useEffect(() => {
    if (Object.keys(formik.errors).includes("images")) setUploadError(true);
    else setUploadError(false);

    if (Object.keys(formik.errors).includes("images")) {
      if (Object.keys(formik.errors).length > 1) setDetailError(true);
      else setDetailError(false);
    } else {
      if (Object.keys(formik.errors).length > 0) setDetailError(true);
      else setDetailError(false);
    }

    //eslint-disable-next-line
  }, [Object.keys(formik.errors).length]);

  const tabs = [
    {
      title: "Product Details",
      error: detailError,
    },
    {
      title: "Upload Image",
      error: uploadError,
    },
  ].map((tab) => (
    <Tab key={tab.title} as={Fragment}>
      {({ selected }) => (
        <button
          className={`px-2 py-1 outline-none ${
            selected
              ? `border-b-2 border-blue-600 font-semibold text-blue-600`
              : `font-medium text-slate-600`
          }
          ${tab.error && `!border-rose-600 !text-rose-600`}
          `}
        >
          {tab.title}
        </button>
      )}
    </Tab>
  ));

  return (
    <Tab.Group as="div" className={`mt-2 ${disabled && `opacity-70`}`}>
      <Tab.List className={`flex items-center border-b border-slate-300/50`}>
        {tabs}
      </Tab.List>
      <form
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        className="relative flex flex-col justify-start"
        encType="multipart/form-data"
      >
        <Tab.Panels className={`flex-auto p-2`}>
          {/* Product Details */}
          <Tab.Panel>{<ProductDetails formik={formik} />}</Tab.Panel>
          {/* Upload Product Image */}
          <Tab.Panel>{<UploadProductImage formik={formik} />}</Tab.Panel>
        </Tab.Panels>
        {/* Action & Buttons */}
        <div className="mt-2 flex w-full items-center justify-end gap-4 p-2">
          <Button
            type="reset"
            disabled={disabled}
            className="rounded-full bg-slate-100 px-4 py-2 font-medium capitalize text-slate-700"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!formik.isValid || disabled}
            className={`rounded-full bg-blue-600 px-6 py-2 font-medium capitalize text-white ${
              !formik.isValid || disabled
                ? `cursor-not-allowed opacity-75`
                : `cursor-pointer opacity-100`
            }`}
          >
            {disabled ? (
              <div className="flex items-center capitalize">
                <SpinCircle />
                Creating...
              </div>
            ) : (
              `Create`
            )}
          </Button>
        </div>
      </form>
    </Tab.Group>
  );
};

export default RenderForm;
