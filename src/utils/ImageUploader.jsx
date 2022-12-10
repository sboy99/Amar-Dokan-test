import React from "react";
import { Button } from ".";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

const ImageUploader = ({ onUpload }) => {
  const inputRef = React.useRef(null);

  const handleFiles = (files) => {
    const fileList = Object.values(files).reduce((acc, curr, index) => {
      curr.id = curr.name + index;
      acc.push(curr);
      return acc;
    }, []);
    onUpload(fileList);
  };

  const handleChange = (e) => {
    e.preventDefault();
    // for atleast 1 file
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  // For Keyboard only upload
  const onButtonClick = (e) => {
    inputRef.current.click();
  };

  //* Enhancement: Implement Drag And Drop feature

  return (
    <div className="relative w-full max-w-xs flex-shrink-0 rounded-lg bg-slate-50">
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        name="image"
        multiple={true}
        onChange={handleChange}
        className="hidden"
      />
      <label
        id="label-file-upload"
        htmlFor="input-file-upload"
        className={`flex min-h-[12rem] w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-300`}
      >
        <Button
          className="flex flex-col items-center justify-center font-inter text-xl font-semibold capitalize text-slate-600"
          onClick={onButtonClick}
        >
          <CloudArrowUpIcon className="h-16 w-16" />
          Upload an image
          <span className="font-sans text-sm font-light lowercase italic text-slate-500">
            {"[ jpeg, jpg, png ]"}
          </span>
        </Button>
      </label>
    </div>
  );
};

export default ImageUploader;
