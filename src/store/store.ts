import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { weatherAPI } from '../services/WeatherService';
import { citiesAPI } from '../services/CitiesService';
import citiesPaginationReducer from './reducers/CitiesPagination';
import { testingAPI } from '../services/ServiceForTesting';

const rootReducer = combineReducers({
  citiesPaginationReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  [citiesAPI.reducerPath]: citiesAPI.reducer,
  [testingAPI.reducerPath]: testingAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        weatherAPI.middleware,
        citiesAPI.middleware,
      ),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
