import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { HomePage } from './components/pages/HomePage/HomePage';
import { CityPage } from './components/pages/CityPage/CityPage';
import { NoMatchPage } from './components/pages/NoMatchPage/NoMatchPage';
import { useGetCitiesQuery } from './services/CitiesService';
import { useAppSelector, useAppDispatch } from './hooks/redux';
import { setOffset } from './store/reducers/CitiesPagination';
import './main.scss';

function App() {
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(true);
  const citiesOffset = Number(localStorage.getItem('citiesOffset'));
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );

  const { data, isLoading, error } = useGetCitiesQuery(
    {
      offset,
      limit,
      countryIds,
    },
    { skip },
  );

  useEffect(() => {
    if (citiesOffset) {
      dispatch(setOffset(citiesOffset));
      setSkip(false);
    } else {
      setSkip(false);
    }
  }, [citiesOffset]);

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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weather-page" element={<CityPage />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
