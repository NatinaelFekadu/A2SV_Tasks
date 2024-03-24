//create api slice to interact with the api using RTK query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (query:string) => query,
    }),
    getJob: builder.query({
      query: (query: string) => query,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetJobsQuery } = apiSlice;
export const { useGetJobQuery } = apiSlice;
