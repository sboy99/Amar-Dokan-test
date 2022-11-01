import React, { useState } from "react";
import { useAdmin } from "../../../../app/store";
import { Tip } from "../../../../utils";
import { useFormik } from "formik";
import { Categories as CategoryTypes } from "../../../../data/dummy";
import { Listbox, Transition, Switch } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as yup from "yup";
import {
  PencilIcon,
  ChevronDownIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../../../features";

const ControlAvlCategories = () => {
  const {
    category: { filteredCategories: Categories },
  } = useAdmin();

  return (
    <div className="w-full p-4 ">
      {/* Grid Layout for categories  */}
      <div className="grid h-fit grid-flow-dense grid-cols-autofill-16 place-content-start gap-3">
        {Categories.map((category) => (
          <SingleCategory key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ControlAvlCategories;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, `Minimum 2 letters`)
    .max(30, `Max length exceeds`)
    .required(`Name should not be empty`),
  subCategories: yup.array(
    yup
      .string()
      .required(`Sub-Category sould not be empty`)
      .min(2, `Minimum 2 letters`)
      .max(30, `Max length exceeds`)
  ),
  type: yup.string().oneOf(CategoryTypes, `Please Select a valid type`),
  published: yup.boolean(),
});

function SingleCategory({ _id, name, type, subCategories = [], published }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [isPublic, setIsPublic] = useState(published);
  const [childCategories, setChildCategories] = useState([...subCategories]);
  const [selectedType, setSelectedType] = useState(type);
  // const { isLoading } = useAdmin();

  // Form initial form values
  const initialValues = {
    name,
    type,
    subCategories,
    published,
  };

  // Final Submit
  const handleSubmit = (values) => {
    values.type = selectedType;
    values.published = isPublic;
    setEditMode(false);
    dispatch(updateCategory({ id: _id, data: values }));
  };

  // Handle cancel
  const handleCancel = () => {
    setSelectedType(type);
    setEditMode(false);
    formik.resetForm({ values: initialValues });
    setChildCategories(subCategories);
    setIsPublic(published);
  };

  // Remove a item from array
  const removeItem = (index) => {
    setChildCategories((array) =>
      array.filter((category, idx) => idx !== index)
    );
    formik.values.subCategories = formik.values.subCategories.filter(
      (category, idx) => idx !== index
    );
  };

  // Inserting Item to array
  const insertItem = () => {
    setChildCategories((array) => [...array, ""]);
    formik.values.subCategories = [...formik.values.subCategories, ""];
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validateOnBlur: true,
    validationSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={handleCancel}
      className="relative z-0 h-fit rounded-lg bg-white p-4 shadow-md shadow-slate-300/20 transition-all duration-300 ease-in-out"
    >
      {/* Category Type */}
      {!editMode ? (
        <h6
          name="type"
          className="-ml-1 w-fit rounded-full text-xs font-medium text-slate-700"
        >
          {selectedType}
        </h6>
      ) : (
        <div className="flex items-center justify-between">
          {/* // In edit mode we can select type */}
          <SelectType value={selectedType} onChange={setSelectedType} />
          {/* // publish Toogle */}
          <ToogleIsPublic value={isPublic} onChange={setIsPublic} />
        </div>
      )}

      {/* Category Title */}
      <h2 className="my-2 flex items-center justify-between font-lexend text-lg font-semibold text-slate-700">
        <div className="flex items-center gap-x-2">
          {/* Activate indicator */}
          <span
            className={`rounded-full ${
              isPublic ? `bg-emerald-500 ` : `bg-rose-500`
            } p-1`}
          ></span>
          {/* Name */}
          {!editMode ? (
            formik.values.name
          ) : (
            <>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={`rounded-full py-1 outline-none ring-0 transition-all duration-300 ease-in-out ${
                  formik.errors.name
                    ? `border-rose-600 pl-4`
                    : `border-transparent pl-0  focus:border-sky-600`
                } focus:pl-4 focus:ring-0`}
              />
            </>
          )}
        </div>

        {/* Edit Button */}
        {!editMode && (
          <Tip tip={editMode ? `Close` : `Edit`}>
            <button
              type="button"
              className="justify-self-end rounded-full p-2 text-sky-500 outline-none hover:bg-sky-50"
              onClick={() => setEditMode(true)}
            >
              <PencilIcon className="h-4 w-4" />
            </button>
          </Tip>
        )}
      </h2>
      {formik?.errors?.name && (
        <p className="pointer-events-none mb-2 pl-4 text-xs font-medium leading-none text-rose-600">
          {formik?.errors?.name}
        </p>
      )}

      {/* sub Categories array */}
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {formik.values.subCategories && formik.values.subCategories.length > 0
            ? childCategories.map((sub, index) => (
                <div key={sub + index}>
                  <div
                    className={`relative w-fit rounded-full font-inter text-sm font-medium capitalize ${
                      formik?.errors?.subCategories?.at(index)
                        ? `bg-red-50 text-rose-600`
                        : `bg-sky-50 text-sky-600 `
                    } `}
                  >
                    {!editMode ? (
                      <div className="py-1 px-3">
                        {formik.values.subCategories[index]}
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type="text"
                          name={`subCategories[${index}]`}
                          value={formik.values.subCategories[index]}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="w-full rounded-full border-none bg-transparent py-1 px-3 outline-none focus:ring-0 "
                        />

                        {/* floats right */}
                        <button
                          type="button"
                          className="absolute top-1 right-1 rounded-full p-1 outline-none"
                          onClick={() => removeItem(index)}
                        >
                          <XMarkIcon className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Validation alert */}
                  {formik?.errors?.subCategories?.at(index) && (
                    <p className="pointer-events-none my-1 pl-2 text-xs font-medium leading-none text-rose-600">
                      {formik?.errors?.subCategories?.at(index)}
                    </p>
                  )}
                </div>
              ))
            : null}
        </div>
      </div>

      {/* actions on edit mode */}
      {editMode && (
        <div className="-z-20 mt-4 flex items-center justify-between">
          {/* add new Category...*/}
          <Tip className="z-0" tip={`New Sub Category`}>
            <button
              type="button"
              onClick={insertItem}
              className="w-fit rounded-full bg-sky-400 p-1 font-semibold text-white outline-none hover:bg-blue-500"
            >
              <PlusIcon className="h-6 w-6" />
            </button>
          </Tip>
          <div className="flex items-center gap-x-2">
            <button
              type="reset"
              className="w-fit rounded-full bg-slate-100 px-4 py-2 font-medium capitalize leading-none text-slate-600 hover:bg-slate-200"
            >
              cancel
            </button>
            <button
              type="submit"
              className="w-fit rounded-full bg-sky-400 px-4 py-2 font-medium capitalize leading-none text-white hover:bg-sky-500"
            >
              save
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

function SelectType({ value, onChange }) {
  return (
    <>
      <Listbox
        value={value}
        onChange={onChange}
        as="div"
        className="relative z-50"
      >
        <Listbox.Button className="flex items-center gap-x-2 rounded-full bg-slate-200 px-3 py-1 text-sm font-medium leading-none outline-none">
          {value}{" "}
          <span>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </Listbox.Button>
        <Transition
          enter="transition duration-300 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute z-10 my-1 origin-top-left cursor-pointer rounded-md bg-white text-sm shadow-md shadow-gray-200">
            {CategoryTypes.map((category, index) => (
              <Listbox.Option key={category + index} value={category}>
                {({ active }) => (
                  <div
                    className={`${
                      active ? `bg-sky-500 font-medium text-white` : ``
                    } py-0.5 px-4`}
                  >
                    {category}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </>
  );
}

function ToogleIsPublic({ value, onChange }) {
  return (
    <Tip tip={`Publish Category`}>
      <Switch
        checked={value}
        onChange={onChange}
        className={`${
          value ? "bg-emerald-600" : "bg-rose-600"
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            value ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
    </Tip>
  );
}
