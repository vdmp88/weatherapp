import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const testingAPI = createApi({
  reducerPath: 'testingAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query({
      query: (limit) => ({
        url: `/posts?_limit=${limit}`,
      }),
    }),
  }),
});

export const { useFetchPostsQuery } = testingAPI;
