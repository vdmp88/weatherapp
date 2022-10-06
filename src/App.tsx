import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { CitiesList } from './components/CitiesList/CitiesList';
import { Navigation } from './components/ Navigation/Navigation';
import { useGetCitiesQuery } from './services/CitiesService';
import { useAppSelector } from './hooks/redux';
import './main.scss';

function App() {
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );
  const { data, isLoading, error } = useGetCitiesQuery({
    offset,
    limit,
    countryIds,
  });

  return (
    <div className="App">
      <div className="container">
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              minHeight: '100vh',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {error && "Something's wrong"}
        {data && (
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
