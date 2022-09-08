import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
  'X-RapidAPI-Key': '6edc61a7a4mshdb45068f4660e7ep1843f5jsnc42d7639c8dd',
  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
};

export const citiesAPI = createApi({
  reducerPath: 'citiesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: () => ({
        url: '/cities?limit=10&countryIds=Q212',
        headers,
      }),
    }),
  }),
});

export const { useGetCitiesQuery } = citiesAPI;
