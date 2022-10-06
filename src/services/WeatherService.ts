import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherData } from '../types/weather';

const API_KEY = '6a22f4f1a92040811034600d268182bc';

type Coordinates = {
  latitude: number;
  longitude: number;
};

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/',
  }),
  endpoints: (builder) => ({
    fetchDateWeather: builder.query<WeatherData, Coordinates>({
      query: ({ latitude, longitude }) => ({
        url: `weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`,
      }),
    }),
  }),
});

export const { useFetchDateWeatherQuery } = weatherAPI;
