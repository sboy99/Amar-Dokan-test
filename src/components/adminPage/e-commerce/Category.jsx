import React from "react";
import { AddCategory, ControlAvlCategories, Headline } from "..";

const Category = () => {
  return (
    <section className="z-0 flex w-full flex-col">
      {/* Comp Info */}
      <Headline
        mainHeading={`Category`}
        subHeading="Here's some utilities to manage your categories, Also you can create modify exisiting categories"
      />

      {/* add category */}
      <div className="sticky inset-x-0 top-16 z-20">
        <AddCategory />
      </div>
      {/* control current category */}
      <div className="mt-4">
        <ControlAvlCategories />
      </div>
    </section>
  );
};

export default Category;
