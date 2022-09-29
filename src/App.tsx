import React from 'react';
import { CitiesList } from './components/CitiesList/CitiesList';
import { Navigation } from './components/ Navigation/Navigation';
import { useGetCitiesQuery } from './services/CitiesService';
import { useAppSelector } from './hooks/redux';
import './main.scss';

function App() {
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );
  const { data, isLoading, error } = useGetCitiesQuery(
    offset,
    limit,
    countryIds,
  );
  const onSuccess = !isLoading && !error && data;

  return (
    <div className="App">
      <div className="container">
        {error && "Something's wrong"}
        {onSuccess && (
          <>
            <CitiesList />
            <Navigation />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
