import React from 'react';
import List from '@mui/material/List';
import { CitiesCard } from '../CitiesCard/CitiesCard';
import { useGetCitiesQuery } from '../../services/CitiesService';
import { City } from '../../interfaces/city';
import { useAppSelector } from '../../hooks/redux';

export const CitiesList = () => {
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );
  const { data: cities } = useGetCitiesQuery(offset, limit, countryIds);

  return (
    <List
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      {cities?.data.map((city: City) => (
        <CitiesCard key={city.id + city.name} city={city} />
      ))}
    </List>
  );
};
