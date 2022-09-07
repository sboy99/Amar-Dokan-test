import React from "react";

//TODO: ...
const ShopByCategory = () => {
  return (
    <div className="container mx-auto p-4 py-8">
      <div className="grid h-44 grid-cols-12 grid-rows-6 gap-4 sm:h-screen-33 lg:min-h-screen-50">
        {/* vertical */}
        <div className="col-span-4 row-span-full row-start-1 hidden h-full w-full bg-yellow-200 lg:block">
          <img
            className="h-full w-full overflow-hidden rounded-lg object-cover object-center transition duration-300 ease-in-out hover:opacity-90"
            src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        {/* horizontal */}
        <div className="col-span-full row-span-full h-full w-full overflow-hidden rounded-lg bg-blue-200 sm:row-span-3 lg:col-start-5 ">
          <img
            className="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:opacity-90"
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        {/* first small */}
        <div className="col-span-4 row-span-full row-start-4 hidden h-full w-full overflow-hidden rounded-lg bg-pink-200 sm:block">
          <img
            className="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:opacity-90"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
            alt=""
          />
        </div>
        {/* second small */}
        <div className="col-span-full col-start-5 row-span-full row-start-4 hidden h-full w-full overflow-hidden rounded-lg bg-pink-400 sm:block lg:col-start-9">
          <img
            className="h-full w-full object-cover object-center transition duration-300 ease-in-out hover:opacity-90"
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
