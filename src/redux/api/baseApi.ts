import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000
// https://grocery-store-server-one.vercel.app

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://grocery-store-server-one.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["fish", "cartFish", "ordersFish"],
});
