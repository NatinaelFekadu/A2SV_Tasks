import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://akil-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (query: string) => query,
    }),
    getJob: builder.query({
      query: (query: string) => query,
    }),
    
  }),
});

export const { useGetJobsQuery } = apiSlice;
export const { useGetJobQuery } = apiSlice;

