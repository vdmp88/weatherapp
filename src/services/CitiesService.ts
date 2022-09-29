import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { City } from '../interfaces/city';

const headers = {
  'X-RapidAPI-Key': '7c24610edcmsh3ee0847ee1acff5p188c3bjsn77b76accb141',
  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
};

export const citiesAPI: any = createApi({
  reducerPath: 'citiesAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1/geo',
  }),
  endpoints: (build) => ({
    getCities: build.query<City[], number>({
      query: (offset = 0, limit = 10, countryIds = 'Q212') => ({
        url: `/cities?offset=${offset}&limit=${limit}&countryIds=${countryIds}&minPopulation=123000&types=CITY&countryIds=UA`,
        headers,
      }),
    }),
  }),
});

export const { useGetCitiesQuery } = citiesAPI;
