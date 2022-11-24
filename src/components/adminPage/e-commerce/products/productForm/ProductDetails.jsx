import React, { useState, useEffect } from "react";
import { useFormikError } from "../../../../../hooks";
import { useAdmin } from "../../../../../app/store";
import { FormikInput } from "../../../../../utils";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Categories as CategoryTypes } from "../../../../../data/dummy";

const ProductDetails = ({ formik }) => {
  const formikError = useFormikError(formik);
  const [selectedType, setSelectedType] = useState(null);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const {
    category: { allCategories },
  } = useAdmin();

  useEffect(() => {
    //? filtering category based on selected type
    if (selectedType) {
      const filteredCategories = allCategories.reduce((acc, curr) => {
        if (curr.type === selectedType) acc.push(curr.name);
        return acc;
      }, []);
      setCategories(filteredCategories);
    } else {
      setCategories([]);
    }
    //eslint-disable-next-line
  }, [selectedType]);

  useEffect(() => {}, [selectedType]);

  const handleSelectType = (selectedType) => {
    //? tracking selected type and filtering category based on selected type
    if (selectedType && !selectedType.startsWith("--")) {
      if (formik.values.category) {
        const filteredCategory = allCategories.find(
          (category) => category._id === formik.values.category
        );
        if (filteredCategory.type !== selectedType) {
          formik.values.category = null;
        }
      }
      formik.values.type = selectedType;
      setSelectedType(selectedType);
    }
  };

  const handleSelectCategory = (selectedCategory) => {
    if (selectedCategory && !selectedCategory.startsWith("--")) {
      const filteredCategory = allCategories.find(
        (category) =>
          category.name === selectedCategory && category.type === selectedType
      );
      if (filteredCategory) {
        formik.values.category = filteredCategory._id;
      }
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-start justify-between rounded-md">
        <div className="w-full max-w-xs">
          <FormikInput
            label={`name`}
            name="name"
            placeholder="Enter product name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formikError}
            className="rounded-lg"
          />
          <FormikInput
            label={`price`}
            name="price"
            type="number"
            placeholder="Enter product price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formikError}
            className="rounded-lg"
          />
          <FormikInput
            label={`inventory`}
            name="stock"
            type="number"
            placeholder="Enter product name"
            value={formik.values.inventory}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formikError}
            className="rounded-lg"
          />
        </div>
        <div className="w-full max-w-xs">
          {/* select type */}
          <Select
            onChange={handleSelectType}
            error={formikError}
            label="Category Type"
            name="type"
            list={CategoryTypes}
            selected={formik.values.type}
            className="z-20"
          />
          {/* select category */}
          <Select
            onChange={handleSelectCategory}
            error={formikError}
            label="Category"
            name="category"
            list={categories}
            selected={
              allCategories.find(
                (category) => category._id === formik.values.category
              )?.name || ``
            }
            className="z-10"
          />
        </div>
      </div>
      {/* Description */}
      <div className="flex w-full flex-col gap-1">
        <label
          htmlFor="description"
          className="text-sm font-semibold capitalize text-slate-700"
        >
          Description
        </label>
        <textarea
          name="description"
          value={formik.values.description}
          id="description"
          cols="30"
          rows="7"
          placeholder="Write a brief introduction about the product"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`resize-none  rounded-md border px-4 outline-none placeholder:text-slate-500/80 focus:border focus:ring-0 ${
            formik.errors.description
              ? `border-rose-600 focus:border-rose-600`
              : `border-gray-300 focus:border-indigo-600`
          }`}
        ></textarea>
        <p className="ml-5 text-sm text-rose-600">
          {formik.errors.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;

const Select = ({
  onChange,
  error,
  label = "",
  list = [],
  name = "",
  selected = ``,
  className = "",
}) => {
  const [selectedType, setSelectedType] = React.useState(``);

  useEffect(() => {
    if (selected !== ``) {
      setSelectedType(selected);
      return;
    }
    if (!selected && list.length > 0) {
      setSelectedType("--SELECT--");
    } else {
      setSelectedType("--No Category Available--");
    }
    //eslint-disable-next-line
  }, [list.length, selected]);

  React.useEffect(() => {
    onChange(selectedType);
    //eslint-disable-next-line
  }, [selectedType]);

  const errorMessage = error(name);

  return (
    <Listbox
      value={selectedType}
      onChange={setSelectedType}
      as="div"
      className={`relative flex flex-col gap-1 ${className}`}
    >
      <Listbox.Label
        className={`text-sm font-semibold capitalize text-slate-700`}
      >
        {label}
      </Listbox.Label>
      <Listbox.Button
        disabled={list.length === 0}
        className={`flex items-center justify-between rounded-lg border bg-transparent py-2 px-4 text-left outline-none placeholder:text-slate-500/80 focus:border focus:ring-0 ${
          errorMessage
            ? `border-rose-600 focus:border-rose-600`
            : `border-gray-300 focus:border-indigo-600`
        }`}
      >
        {selectedType} <ChevronDownIcon className="h-5 w-5" />
      </Listbox.Button>

      <Listbox.Options
        className={`absolute z-50 mt-[4.5rem] w-full origin-bottom-left rounded-md bg-white shadow-md shadow-slate-500/20 focus:outline-none`}
      >
        {list.map((category, index) => (
          <Listbox.Option key={category + index} value={category}>
            {({ active, selected }) => (
              <div
                className={`flex cursor-pointer items-center justify-between px-3 py-1 text-sm font-medium ${
                  active ? `bg-indigo-100 text-indigo-600` : `text-slate-600`
                }`}
              >
                {category} {selected && <CheckIcon className="h-4 w-4" />}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
      <p className="ml-5 max-w-15 text-xs text-rose-600">{errorMessage}</p>
    </Listbox>
  );
};
