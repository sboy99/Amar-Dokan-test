import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAdmin } from "../../../../app/store";
import { useDispatch } from "react-redux";
import { closeProductForm } from "../../../../features";
import { useFormik } from "formik";
import { Categories as CategoryTypes } from "../../../../data/dummy";
import * as yup from "yup";
import { MONGODB_OBJECT_ID_RGEX } from "../../../../data";

const ProductForm = () => {
  const dispatch = useDispatch();
  const {
    product: { isOpenProductForm: isOpen },
  } = useAdmin();

  const hideProductForm = () => {
    dispatch(closeProductForm());
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog
        onClose={hideProductForm}
        as="div"
        className={`fixed inset-0 z-40`}
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
              className={`mx-auto min-h-64 w-full max-w-3xl rounded-lg bg-white p-4 shadow-md shadow-slate-500/20`}
            >
              <RenderForm onReset={hideProductForm} onSubmit={handleSubmit} />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductForm;

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
    .required(`Please select sub categories`)
    .min(1, `Please select atleast 1 sub category`),
  inventory: yup
    .number()
    .required(`Stock size is required`)
    .min(1, `Minimum stock size should be 1`),
  freeShipping: yup.boolean(),
  published: yup.boolean(),
});

const RenderForm = ({ onReset, onSubmit }) => {
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

  return <div></div>;
};
