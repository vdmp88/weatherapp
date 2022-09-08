import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    fetchAllUsers: builder.query({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
});
