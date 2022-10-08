import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../app/store";
import { fetchSingleProduct } from "../features";
import { RecommendedProduct, PriceSection } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, singleProduct } = useSelector(products);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchSingleProduct({ id, signal: controller.signal }));
    return () => controller.abort();

    //eslint-disable-next-line
  }, [id]);

  if (isLoading) return <div className="">Loading</div>;

  return (
    <div className="">
      <div className="container mx-auto min-h-screen divide-y divide-slate-200 ">
        {/* Image Grid */}
        <div className="py-4">
          <div className="lg:hidden">
            <ImageGridMd images={singleProduct?.images} />
          </div>
          <div className="hidden lg:block">
            <ImageGridLg images={singleProduct?.images} />
          </div>
          {/* Information */}
          <div className="mx-auto mt-8 grid min-h-64 w-full max-w-7xl grid-cols-1 px-4 lg:grid-cols-3 lg:divide-x lg:divide-slate-200 lg:px-6">
            {/* Name & about */}
            <div className="col-span-2 lg:pr-4">
              <InfoOfProduct />
            </div>
            {/* add to bag etc */}
            <div className="hidden w-full lg:block lg:pl-4">
              <PriceSection />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl p-4">
          <RecommendedProduct />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;

function ImageGridMd({ images = [] }) {
  return (
    <Tab.Group
      as={`div`}
      className="flex min-h-64 w-full flex-col-reverse items-center justify-center"
    >
      <Tab.List as="div" className="flex gap-2 overflow-auto">
        {images.map((tab) => (
          <Tab
            key={tab?.id}
            className="h-12 w-12 overflow-hidden rounded-full outline-none sm:h-14 sm:w-14  "
          >
            <img
              src={tab?.url}
              alt={tab?.id}
              className="h-full w-full object-cover object-center"
            />
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels as="div" className="h-full w-full max-w-2xl p-4">
        {images.map((image) => (
          <Tab.Panel
            key={image?.id}
            as={`div`}
            className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg"
          >
            <img
              src={image?.url}
              alt={images?.id}
              className="h-full w-full object-cover object-center"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}

function ImageGridLg({ images = [] }) {
  return (
    <div className="mx-auto mt-6 grid max-w-7xl grid-cols-3 gap-x-6 px-8">
      <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img
          src={images[0]?.url}
          alt="Two each of gray, white, and black shirts laying flat."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-1 gap-y-6">
        <div className="aspect-w-3 aspect-h-1 overflow-hidden rounded-lg">
          <img
            src={images[1]?.url}
            alt="Model wearing plain black basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-w-3 aspect-h-3 overflow-hidden rounded-lg">
          <img
            src={images[2]?.url}
            alt="Model wearing plain gray basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-6">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img
            src={images[3]?.url}
            alt="Model wearing plain white basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img
            src={images[4]?.url}
            alt="Model wearing plain white basic tee."
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

function InfoOfProduct() {
  const {
    singleProduct: { name, category, description, company },
  } = useSelector(products);
  return (
    <div className="">
      {/* Product Name Category */}
      <h1 className="-space-y-1">
        <p className="font-inter text-2xl font-bold capitalize tracking-tight text-slate-800 lg:text-3xl">
          {name}
        </p>
        <p className="font-semibold capitalize text-slate-400 lg:text-lg ">
          {company}
        </p>
      </h1>
      {/* Product Details */}
      {/* description */}
      <p className="mt-4 font-inter text-sm leading-5 tracking-tight text-slate-600 line-clamp-3 lg:text-base">
        {description?.slice(0, 250)}...
      </p>

      {/* action for sm device */}
      <div className="mt-2 lg:hidden">
        <PriceSection />
      </div>

      {/* Category */}
      <h4 className="mt-4 font-inter tracking-tight text-slate-900">
        Category
      </h4>
      <button className="ml-2 mt-2  w-fit rounded-full bg-slate-700 px-4 py-1 font-inter font-semibold capitalize tracking-tight text-slate-50 outline-none transition duration-200 ease-in-out hover:bg-slate-600">
        {category}
      </button>
      {/* Details */}
      <h4 className="mt-4 font-inter tracking-tight text-slate-900">Details</h4>
      <p className="mt-2 text-sm leading-5 text-slate-600">{description}</p>
    </div>
  );
}
