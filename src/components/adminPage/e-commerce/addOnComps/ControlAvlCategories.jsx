import React, { useState } from "react";
import { useAdmin } from "../../../../app/store";
import { PencilIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Tip } from "../../../../utils";
import { Formik, Form, FieldArray, Field } from "formik";
import { Categories } from "../../../../data/dummy";
import { Listbox, Transition } from "@headlessui/react";

const CategoryTypes = Categories.filter(
  (category) => category !== `All Categories`
);

const ControlAvlCategories = () => {
  const {
    category: { filteredCategories: Categories },
  } = useAdmin();

  return (
    <div className="w-full p-4 ">
      {/* Grid Layout for categories  */}
      <div className="grid grid-flow-dense grid-cols-autofill-16 place-content-start gap-3">
        {Categories.map((category) => (
          <SingleCategory key={category._id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default ControlAvlCategories;

function SingleCategory({ _id, name, type, subCategories = [] }) {
  const [editMode, setEditMode] = useState(false);
  const [selectedType, setSelectedType] = useState(type);
  // Final Submit
  const handleSubmit = (values) => {
    values.type = selectedType;
    console.log(values);
    setEditMode(false);
  };

  // Handle cancel
  const handleCancel = () => {
    setSelectedType(type);
    setEditMode(false);
  };

  // Form initial value
  const initialValues = {
    name,
    type,
    subCategories,
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className="h-fit rounded-lg bg-white p-4 shadow-md shadow-slate-300/20 transition-all duration-300 ease-in-out">
          {/* Category Type */}
          {!editMode ? (
            <h6
              name="type"
              className=" -ml-1 w-fit rounded-full text-xs font-medium text-slate-700"
            >
              {selectedType}
            </h6>
          ) : (
            <SelectType value={selectedType} onChange={setSelectedType} />
          )}

          {/* Category Title */}
          <h2 className="my-2 flex items-center justify-between font-lexend text-lg font-semibold text-slate-700">
            <div className="flex items-center gap-x-2">
              {/* Activate indicator */}
              <span className="rounded-full bg-emerald-500 p-1"></span>
              {/* Name */}
              {!editMode ? (
                formik.values.name
              ) : (
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="rounded-full border-transparent py-1 pl-0 outline-none ring-0 transition-all duration-300 ease-in-out focus:border-sky-600 focus:pl-4 focus:ring-0"
                />
              )}
            </div>

            {/* Edit Button */}
            {!editMode && (
              <Tip tip={editMode ? `Close` : `Edit`}>
                <button
                  className="justify-self-end rounded-full p-2 text-sky-500 outline-none hover:bg-sky-50"
                  onClick={() => setEditMode(true)}
                >
                  <PencilIcon className="h-4 w-4" />
                </button>
              </Tip>
            )}
          </h2>

          {/* sub Categories array */}
          <FieldArray name="subCategories">
            {(arrayHelpers) => (
              <div className="flex flex-wrap items-center gap-2">
                {formik.values.subCategories &&
                formik.values.subCategories.length > 0
                  ? subCategories.map((sub, i) => (
                      <div
                        className="w-fit rounded-full bg-sky-50 py-1 px-3 font-inter text-sm font-medium capitalize text-sky-600"
                        key={sub + i}
                      >
                        {!editMode ? (
                          formik.values.subCategories[i]
                        ) : (
                          <Field
                            name={`subCategories.${i}`}
                            className="w-auto bg-transparent outline-none"
                          />
                        )}
                      </div>
                    ))
                  : null}
              </div>
            )}
          </FieldArray>
          {/* actions on edit mode */}
          {editMode && (
            <div className="float-right mt-4 flex items-center gap-x-2">
              <button
                type="button"
                className="w-fit rounded-full bg-slate-100 px-4 py-2 font-medium capitalize leading-none text-slate-600 hover:bg-slate-200"
                onClick={handleCancel}
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
          )}
        </Form>
      )}
    </Formik>
  );
}

function SelectType({ value, onChange }) {
  return (
    <>
      <Listbox value={value} onChange={onChange} as="div" className="relative">
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
