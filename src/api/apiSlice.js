import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { products_url } from "../data";

export const apiSlice = createApi({
  reducerPath: `productsApi`,
  baseQuery: fetchBaseQuery({ baseUrl: `https://course-api.com` }),
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: () => products_url,
    }),
  }),
});

export const { useFetchProductsQuery } = apiSlice;
