import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { setModalOpen } from "../../features";
import { useDispatch, useSelector } from "react-redux";
import { layout } from "../../app/store";
import { resetModalContext } from "../../features";
import { sleep } from "../../utils";
const Modal = () => {
  const dispatch = useDispatch();
  const { isModalOpen, modalContext } = useSelector(layout);
  const { layoutColor, title, desc, buttonText } = modalContext;

  const [color] = useState(
    layoutColor === "success"
      ? {
          bg: "bg-emerald-50",
          overlayBg: "bg-emerald-300/20",
          text: "text-emerald-600",
          divide: "divide-emerald-100",
          outline: "outline-emerald-600",
        }
      : {
          bg: "bg-rose-50",
          overlayBg: "bg-rose-300/20",
          text: "text-rose-600",
          divide: "divide-rose-100",
          outline: "outline-rose-600",
        }
  );

  async function closeModal() {
    dispatch(setModalOpen(false));
    await sleep(2);
    dispatch(resetModalContext());
  }

  return (
    isModalOpen && (
      <Transition.Root appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 grid place-content-center p-4"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className={`fixed inset-0 -z-10 ${color.overlayBg} backdrop-blur-sm`}
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              as="div"
              className={`z-10 mx-auto w-full max-w-2xl divide-y ${color.divide} rounded-md bg-white p-4 shadow`}
            >
              <Dialog.Title
                className={`flex items-center gap-x-2 pb-1 font-inter text-2xl font-bold capitalize tracking-tight ${color.text} sm:text-3xl`}
              >
                {/* {icon && (
                  <span
                    className={`rounded-full ${color.bg} p-2 ${color.text}`}
                  >
                    {<Icon className="h-7 w-7 sm:h-8 sm:w-8 " />}
                  </span> 
                )} 
                */}
                {title}
              </Dialog.Title>
              <Dialog.Description className="py-2 font-inter text-sm leading-5 tracking-tight text-slate-500 sm:px-2 sm:text-base">
                {desc}
              </Dialog.Description>
              {/* Action */}
              <div className="px-2 pt-2">
                <button
                  onClick={() => {
                    closeModal();
                  }}
                  className={`float-right rounded-md ${color.bg} px-4 py-2 text-center font-inter font-semibold tracking-tight ${color.text} ${color.outline} sm:text-lg`}
                >
                  {buttonText}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    )
  );
};

export default Modal;
