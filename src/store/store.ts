import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import { weatherAPI } from '../services/WeatherService';
import { citiesAPI } from '../services/CitiesService';

const rootReducer = combineReducers({
  userReducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
  [citiesAPI.reducerPath]: citiesAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(weatherAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
