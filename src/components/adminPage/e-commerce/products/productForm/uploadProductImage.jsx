import React, { useState } from "react";
import axios from "../../../../../api/local";
import { Button, ImageUploader } from "../../../../../utils";
import { TrashIcon } from "@heroicons/react/24/outline";
import ProcessImage from "./ProcessImage";

const UploadProductImage = ({ formik = null }) => {
  const [images, setImages] = useState([...formik.values.images]);
  const [files, setFiles] = useState([]);

  const deleteImage = async (id) => {
    try {
      await axios.delete(`product/upload-image?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = (files) => {
    setFiles((file) => [...file, ...files]);
  };

  const handleSuccess = (ImageObj) => {
    formik.values.images.push(ImageObj);
    formik.validateField("images");
    setImages((img) => [...img, ImageObj]);
  };

  const handleRemove = (id) => {
    formik.values.images = formik.values.images.filter(
      (image) => image.id !== id
    );
    setImages([...formik.values.images]);
    formik.validateField("images");
    deleteImage(id);
  };

  const handleFilterOut = (file) => {
    const newFiles = files.filter((f) => f.id !== file.id);
    setFiles(newFiles);
  };

  return (
    <div className="flex items-center gap-4 overflow-auto p-4 pb-8">
      {images.length > 0 &&
        images.map((image) => (
          <div className="relative h-[12rem] w-full max-w-xs flex-shrink-0 rounded-lg bg-slate-100 ">
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
      <ImageUploader onUpload={handleUpload} />
      {formik.errors?.images ? (
        <div className="absolute bottom-5 left-4 font-medium text-rose-600">
          *{formik.errors.images}
        </div>
      ) : null}
    </div>
  );
};

export default UploadProductImage;
