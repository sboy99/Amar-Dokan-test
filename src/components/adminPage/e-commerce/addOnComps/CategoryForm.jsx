import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { closeCategoryForm } from "../../../../features";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { useAdmin } from "../../../../app/store";
import { useFormik } from "formik";
import { FormikInput, FormikCheckBox } from "../../../../utils";
import { useFormikError } from "../../../../hooks";
import { Categories as CategoryTypes } from "../../../../data/dummy";
import * as yup from "yup";
import {
  ChevronDownIcon,
  CheckIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const CategoryForm = () => {
  const dispatch = useDispatch();
  const {
    category: { isOpenCategoryForm: isOpen },
  } = useAdmin();

  function hideCategoryForm() {
    dispatch(closeCategoryForm());
  }

  function handeSubmit(values) {
    console.log(values);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        onClose={hideCategoryForm}
        className="fixed inset-0 z-40 "
      >
        {/* adding a backdrop so that main panel get focused */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-300/30"></div>
        </Transition.Child>
        {/* centering the panel */}
        <div className="fixed inset-0 flex items-center justify-center ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`mx-auto w-full max-w-sm rounded-lg bg-white p-4 shadow-md shadow-slate-500/20`}
            >
              <RenderForm onReset={hideCategoryForm} onSubmit={handeSubmit} />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CategoryForm;

const validationSchema = yup.object({
  name: yup
    .string()
    .required(`Please provide a category name`)
    .min(2, `Name should be atleaset 2 letters long`)
    .max(30, `Max lengrh exceeds`),
  subCategories: yup.array(
    yup
      .string()
      .required(`Sub category should not be empty`)
      .min(2, `Name should be atleaset 2 letters long`)
      .max(30, `Max lengrh exceeds`)
  ),
  type: yup
    .string()
    .required(`Please select a type`)
    .oneOf(CategoryTypes, `Please select a valid type`),
  published: yup.boolean(),
});

const RenderForm = ({ onReset, onSubmit }) => {
  const [reRender, setReRender] = React.useState(0);
  const initialValues = {
    name: ``,
    subCategories: [],
    type: ``,
    published: false,
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    onReset,
    validationSchema,
    validateOnBlur: true,
  });

  const formikError = useFormikError(formik);

  function selectedType(value) {
    formik.values.type = value;
  }

  function insertToSubCategories({ subCategory }) {
    if (!formik.values.subCategories.indexOf(subCategory.toLowerCase())) {
      formik.values.subCategories.push(subCategory.toLowerCase());
      setReRender(reRender + 1);
    }
  }

  function removeFromSubCategories(index) {
    formik.values.subCategories = formik.values.subCategories.filter(
      (sub, idx) => idx !== index
    );
    setReRender(reRender + 1);
  }

  return (
    <form
      className="mx-auto flex max-w-xs flex-col justify-center gap-y-3"
      onReset={formik.handleReset}
      onSubmit={formik.handleSubmit}
    >
      {/* Head Text */}
      <h1 className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text py-2 font-inter text-2xl font-extrabold text-transparent md:text-4xl">
        Category
        <p className="mt-2 text-sm font-medium leading-none tracking-tight text-slate-500">
          Add some sub categories as well, in order to serve better convenience
        </p>
      </h1>
      {/* form body */}
      <div className="z-0 flex flex-col justify-center gap-y-2">
        {/* category Type */}
        <SelectType onChange={selectedType} error={formikError} />
        {/* category Name */}
        <FormikInput
          label={`name`}
          name="Category Name"
          value={formik.values.name}
          placeholder="ex: Smart Phones"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formikError}
        />

        {/* subCategories Array */}
        <div className="">
          <AddSubCategory onSubmit={insertToSubCategories} />
          {/* subcategory list */}
          <div className="mt-2 flex flex-wrap gap-1">
            {formik.values.subCategories.map((sub, i) => (
              <div
                key={i + sub}
                className="flex items-center justify-between gap-x-2 rounded-full bg-indigo-50 px-3 py-1 capitalize text-indigo-700"
              >
                {sub}{" "}
                <button
                  type="button"
                  className="outline-none"
                  onClick={() => removeFromSubCategories(i)}
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* publish checkbox */}
        <FormikCheckBox
          name={`published`}
          onChange={formik.handleChange}
          value={formik.values.published}
        >
          Publish the category
        </FormikCheckBox>
      </div>

      {/* actions */}
      <div className="flex items-center justify-end gap-x-2">
        <button
          type="reset"
          className="rounded-full bg-slate-100 px-4 py-1 font-medium capitalize text-slate-600 outline-none hover:bg-slate-200"
        >
          cancel
        </button>
        <button
          type="submit"
          className="min-w-[8rem] rounded-full bg-indigo-600 px-4 py-1 font-medium capitalize text-white outline-none hover:bg-violet-600"
        >
          create
        </button>
      </div>
    </form>
  );
};

const SelectType = ({ onChange, error }) => {
  const [selectedType, setSelectedType] = React.useState(`--SELECT--`);

  React.useEffect(() => {
    onChange(selectedType);
    //eslint-disable-next-line
  }, [selectedType]);

  const errorMessage = error("type");

  return (
    <Listbox
      value={selectedType}
      onChange={setSelectedType}
      as="div"
      className={`relative z-10 flex flex-col gap-1`}
    >
      <Listbox.Label
        className={`text-sm font-semibold capitalize text-slate-700`}
      >
        Category Type
      </Listbox.Label>
      <Listbox.Button
        className={`flex items-center justify-between rounded-full border bg-transparent py-2 px-4 text-left outline-none placeholder:text-slate-500/80 focus:border focus:ring-0 ${
          errorMessage
            ? `border-rose-600 focus:border-rose-600`
            : `border-gray-300 focus:border-indigo-600`
        }`}
      >
        {selectedType} <ChevronDownIcon className="h-5 w-5" />
      </Listbox.Button>

      <Listbox.Options
        className={`absolute mt-[4.5rem] w-full origin-bottom-left rounded-md bg-white shadow-md shadow-slate-500/20 focus:outline-none`}
      >
        {CategoryTypes.map((category, index) => (
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

const subCategoryValidationSchema = yup.object({
  subCategory: yup
    .string()
    .required(`Sub category should not be empty`)
    .min(2, `Name should be atleaset 2 letters long`)
    .max(30, `Max lengrh exceeds`),
});

const AddSubCategory = ({ onSubmit: reply }) => {
  function onSubmit(value) {
    formik.resetForm();
    reply(value);
  }

  const formik = useFormik({
    initialValues: {
      subCategory: ``,
    },
    onSubmit,
    validationSchema: subCategoryValidationSchema,
    validateOnBlur: true,
  });

  const errorMessage = formik.errors.subCategory;
  return (
    <div className="z-0 flex flex-col gap-y-1">
      <label
        htmlFor="subCategory"
        className="text-sm font-semibold capitalize text-slate-700"
      >
        Sub Categories
      </label>
      {/* input with button */}
      <div className="relative">
        <input
          type="text"
          id="subCategory"
          placeholder="ex: Android"
          className={`w-full rounded-full border bg-transparent px-4 outline-none placeholder:text-slate-500/80 focus:border focus:ring-0 ${
            errorMessage
              ? `border-rose-600 focus:border-rose-600`
              : `border-gray-300 focus:border-indigo-600`
          }`}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subCategory}
        />
        {/* add button */}
        <button
          type="button"
          onClick={formik.handleSubmit}
          className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-indigo-600 p-2 text-white outline-none"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <p className="ml-5 max-w-15 text-xs text-rose-600">{errorMessage}</p>
    </div>
  );
};
