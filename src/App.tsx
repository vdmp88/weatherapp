import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { HomePage } from './components/pages/HomePage/HomePage';
import { CityPage } from './components/pages/CityPage/CityPage';
import { NoMatchPage } from './components/pages/NoMatchPage/NoMatchPage';
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
            <nav>
              <ul>
                <li>
                  <Link to="/weather-page">weather</Link>
                </li>
                <li>
                  <Link to="/broken-page">broken</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/weather-page" element={<CityPage />} />
              <Route path="*" element={<NoMatchPage />} />
            </Routes>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
