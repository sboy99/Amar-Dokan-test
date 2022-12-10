import React, { useEffect, useState, useRef } from "react";
import axios from "../../../../../api/local";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const ProcessImage = ({ file, onSuccess, filterOut }) => {
  const alreadyUploaded = useRef(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(``);
  const [success, setSuccess] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  // Todo: Handle errors and push on success;
  const _2MB = 1024 * 1024 * 2;
  const supportedImage = ["image/jpeg", "image/jpg", "image/png"];
  const waitFunc = (fn, timeOut) =>
    new Promise((resolve, reject) => {
      try {
        resolve(setTimeout(fn, timeOut));
      } catch (error) {
        reject(error);
      }
    });

  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const { data } = await axios.post("product/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(true);
      setUploadedImage(data);
    } catch (error) {
      setError(true);
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      file.publicId = uploadedImage.id;
      onSuccess(uploadedImage);
    }
    //eslint-disable-next-line
  }, [success]);

  useEffect(() => {
    let timeOut;
    if (error)
      waitFunc(() => {
        filterOut(file);
        setError(false);
      }, 5 * 1000)
        .then((val) => (timeOut = val))
        .catch((error) => console.log(error));

    return () => clearTimeout(timeOut);
    //eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (!supportedImage.includes(file.type)) {
      setError(true);
      setErrorMessage(`Please provide an image`);
      setLoading(false);
      return;
    }
    if (file.size > _2MB) {
      setError(true);
      setErrorMessage(`Image should be larger than 2 MB`);
      setLoading(false);
      return;
    }
    if (!alreadyUploaded.current) uploadImage(file);

    return () => (alreadyUploaded.current = true);
    //eslint-disable-next-line
  }, []);

  // Render while uploading
  if (loading)
    return (
      <div className="relative grid h-[12rem] w-full max-w-xs flex-shrink-0 animate-pulse place-content-center rounded-lg bg-slate-200 p-4 text-lg font-semibold capitalize text-slate-500">
        uploading...
      </div>
    );

  // Render if any error
  if (error)
    return (
      <div className="relative flex h-[12rem] w-full max-w-xs flex-shrink-0 flex-col items-center justify-center rounded-lg bg-rose-100 p-4 text-center text-lg font-semibold capitalize text-rose-500">
        <ExclamationCircleIcon className="h-16 w-16 " />
        <p>{errorMessage}</p>
      </div>
    );

  return <></>;
};

export default ProcessImage;
