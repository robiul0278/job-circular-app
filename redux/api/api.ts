import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: "/tasks",
        method: "GET",
      }),
      providesTags: ['job']
    }),
    createJob: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["job"]
    })
  }),
});


export const {useGetAllJobsQuery,useCreateJobMutation } = baseApi;
