import React, { useState } from "react";
import { Button, ImageUploader } from "../../../../../utils";
import { TrashIcon } from "@heroicons/react/24/outline";
import ProcessImage from "./ProcessImage";
import { useDispatch } from "react-redux";
import {
  deleteProductImage,
  insertToDeleteImages,
} from "../../../../../features";

const UploadProductImage = ({ formik = null }) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([...formik.values.images]);
  const [preventUpload, setPreventUpload] = useState(false);
  const [files, setFiles] = useState([]);

  const handleUpload = (files) => {
    setFiles((file) => [...file, ...files]);
  };

  const handleSuccess = (ImageObj) => {
    if (formik.values.images.length < 10) {
      formik.values.images = [...formik.values.images, ImageObj];
      formik.validateField("images");
      setImages((img) => [...img, ImageObj]);
      setPreventUpload(false);
    } else {
      dispatch(deleteProductImage(ImageObj));
      setPreventUpload(true);
    }
  };

  const handleRemove = (id) => {
    const imgObj = formik.values.images.find((image) => image.id === id);
    formik.values.images = formik.values.images.filter(
      (image) => image.id !== id
    );
    setImages([...formik.values.images]);
    dispatch(insertToDeleteImages(imgObj));
    formik.validateField("images");
    if (formik.values.images.length < 10) setPreventUpload(false);
    // deleteImage(id);
  };

  const handleFilterOut = (file) => {
    const newFiles = files.filter((f) => f.id !== file.id);
    setFiles(newFiles);
  };

  return (
    <div className="flex items-center gap-4 overflow-auto p-4 pb-8">
      {images.length > 0 &&
        images.map((image) => (
          <div
            key={image.id}
            className="relative h-[12rem] w-full max-w-xs flex-shrink-0 rounded-lg bg-slate-100 "
          >
            <img
              src={image.url}
              alt="product_image"
              className="h-full w-full rounded-lg object-cover object-center"
            />
            <Button
              hover="Remove"
              onClick={() => handleRemove(image.id)}
              className="absolute bottom-0 left-1/2 z-10 translate-y-1/2 -translate-x-1/2 rounded-full bg-white p-2 text-rose-600"
            >
              <TrashIcon className="h-6 w-6" />
            </Button>
          </div>
        ))}
      {files.map((file) => (
        <ProcessImage
          key={file.id}
          file={file}
          onSuccess={handleSuccess}
          filterOut={handleFilterOut}
        />
      ))}
      {!preventUpload && <ImageUploader onUpload={handleUpload} />}
      {formik.errors?.images ? (
        <div className="absolute bottom-5 left-4 font-medium text-rose-600">
          *{formik.errors.images}
        </div>
      ) : null}
    </div>
  );
};

export default UploadProductImage;
