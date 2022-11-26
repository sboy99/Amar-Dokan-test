import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAdmin } from "../../../../../app/store";
import { useDispatch } from "react-redux";
import { closeProductForm, createProduct } from "../../../../../features";
// import { Button } from "../../../../../utils";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "../../../../../api/local";
import RenderForm from "./RenderForm";

const ProductForm = () => {
  const { isLoading } = useAdmin();
  const dispatch = useDispatch();
  const {
    product: { isOpenProductForm: isOpen },
  } = useAdmin();

  const hideProductForm = () => {
    dispatch(closeProductForm());
  };

  const handleSubmit = (values) => {
    dispatch(createProduct(values));
    hideProductForm();
  };

  const handleReset = (values) => {
    values.images.forEach(async (image) => {
      try {
        await axios.delete(`product/upload-image?id=${image.id}`);
      } catch (error) {
        console.log(error);
      }
    });
    hideProductForm();
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog onClose={() => {}} as="div" className={`fixed inset-0 z-50`}>
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
              className={`mx-auto w-full max-w-3xl rounded-lg bg-white p-4 shadow-md shadow-slate-500/20`}
            >
              {/* Title & Close Button*/}
              <div className="flex items-center justify-between">
                <h2 className="font-inter text-2xl font-semibold capitalize tracking-tight text-slate-700">
                  Create new product
                </h2>
                {/* <Button
                  onClick={hideProductForm}
                  hover="Close"
                  className="hover:text-rose-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </Button> */}
              </div>
              <RenderForm
                onReset={handleReset}
                onSubmit={handleSubmit}
                disabled={isLoading}
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductForm;
