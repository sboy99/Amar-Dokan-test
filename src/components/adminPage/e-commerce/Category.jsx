import React from "react";
import { AddCategory, ControlAvlCategories, Headline } from "..";

const Category = () => {
  return (
    <section className="flex w-full flex-col">
      {/* Comp Info */}
      <Headline
        mainHeading={`Category`}
        subHeading="Here's some utilities to manage your categories, Also you can create modify exisiting categories"
      />

      {/* add category */}
      <div className="">
        <AddCategory />
      </div>
      {/* control current category */}
      <div className="">
        <ControlAvlCategories />
      </div>
    </section>
  );
};

export default Category;
