import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAdmin } from "../../../../../app/store";
import { useDispatch } from "react-redux";
import {
  closeProductForm,
  createProduct,
  getSingleProduct,
  closeProductEditMode,
  clearDeleteImages,
  deleteProductImage,
  updateProduct,
} from "../../../../../features";
// import { Button } from "../../../../../utils";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import RenderForm from "./RenderForm";
import { useEffect } from "react";

const ProductForm = () => {
  const { isLoading } = useAdmin();
  const dispatch = useDispatch();
  const {
    product: {
      isOpenProductForm: isOpen,
      productEditMode: isEditMode,
      editProductId: productId,
      singleProduct,
      deleteImages,
    },
  } = useAdmin();

  useEffect(() => {
    if (productId && isEditMode) {
      dispatch(getSingleProduct({ id: productId }));
    }
    //eslint-disable-next-line
  }, [productId, isEditMode]);

  const hideProductForm = () => {
    dispatch(closeProductForm());
  };

  // image Cleane Up
  const handleSubmitForUpdation = (values) => {
    deleteImages.forEach((img) => dispatch(deleteProductImage(img)));
    dispatch(clearDeleteImages());
    dispatch(updateProduct({ payload: values, id: productId }));
    dispatch(closeProductEditMode());
    hideProductForm();
  };
  const handleResetForUpdation = (values) => {
    if (singleProduct.images) {
      const filterIds = singleProduct.images.map((img) => img.id);
      values.images.forEach((img) => {
        if (!filterIds.includes(img.id)) {
          dispatch(deleteProductImage(img));
        }
      });
    }
    dispatch(closeProductEditMode());
    hideProductForm();
  };

  const handleSubmitForCreation = (values) => {
    dispatch(createProduct(values));
    deleteImages.forEach((img) => dispatch(deleteProductImage(img)));
    dispatch(clearDeleteImages());
    hideProductForm();
  };

  const handleResetForCreation = (values) => {
    values.images.forEach((img) => {
      dispatch(deleteProductImage(img));
    });
    deleteImages.forEach((img) => dispatch(deleteProductImage(img)));
    dispatch(clearDeleteImages());
    hideProductForm();
  };

  const handleSubmit =
    !isOpen && isEditMode ? handleSubmitForUpdation : handleSubmitForCreation;
  const handleReset =
    !isOpen && isEditMode ? handleResetForUpdation : handleResetForCreation;

  return (
    <Transition appear show={isOpen || isEditMode}>
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
              <div className="relative flex items-center justify-between">
                <h2 className="font-inter text-2xl font-semibold capitalize tracking-tight text-slate-700">
                  {!isOpen && isEditMode
                    ? `Update Product`
                    : `Create new product`}
                </h2>
                {/* <Button
                  onClick={hideProductForm}
                  hover="Close"
                  className="hover:text-rose-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </Button> */}
              </div>
              {isLoading ? (
                <>
                  <div className="absolute inset-x-0 top-0 z-40 grid h-full w-full place-content-center bg-white/30 backdrop-blur-md">
                    Loading
                  </div>
                  <RenderForm
                    onReset={handleReset}
                    onSubmit={handleSubmit}
                    disabled={isLoading}
                  />
                </>
              ) : (
                <RenderForm
                  onReset={handleReset}
                  onSubmit={handleSubmit}
                  data={isEditMode ? singleProduct : null}
                  disabled={isLoading}
                />
              )}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProductForm;
