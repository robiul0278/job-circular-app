import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  tagTypes: ["jobs", "auth", "bookmark"],
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: (params) => {
        return {
          url: "/jobs",
          method: "GET",
          params: params,
        }
      },
      providesTags: ['jobs']
    }),
    createJob: builder.mutation({
      query: (data) => {
        console.log(data);
        return{
           url: "/jobs/create",
        method: "POST",
        body: data,
        }
      },
      invalidatesTags: ["jobs"]
    }),
    getSingleJob: builder.query({
      query: (jobId) => {
        return {
          url: `/jobs/${jobId}`,
          method: "GET",
        }
      },
      providesTags: ["jobs"]
    }),
    updateViews: builder.mutation({
      query: (jobId) => {
        return {
          url: `/jobs/views/${jobId}`,
          method: "POST",
        }
      },
       invalidatesTags: ["jobs"]
    }),
    registerUser: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/auth/register`,
          method: "POST",
          body: data
        }
      },
       invalidatesTags: ["auth"]
    }),
    loginUser: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/auth/login`,
          method: "POST",
          body: data
        }
      },
       invalidatesTags: ["auth"]
    }),
    getBookmark: builder.query({
      query: (userId) => {
        // console.log("API",userId);
        return {
          url: `/user/bookmark/${userId}`,
          method: "GET",
        }
      },
       providesTags: ["bookmark"]
    }),
    addBookmark: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/user/bookmark/add/${data.userId}`,
          method: "PATCH",
          body: {jobId: data.jobId}
        }
      },
       invalidatesTags: ["bookmark"]
    }),
    removeBookmark: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/user/bookmark/remove/${data.userId}`,
          method: "PATCH",
          body: {jobId: data.jobId}
        }
      },
       invalidatesTags: ["bookmark"]
    }),
  }),
});


export const { 
  //job route
  useGetAllJobsQuery, 
  useCreateJobMutation, 
  useGetSingleJobQuery, 
  useUpdateViewsMutation, 
  //auth route
  useLoginUserMutation, 
  useRegisterUserMutation,
  //bookmark route
  useGetBookmarkQuery,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
  
 } = baseApi;
