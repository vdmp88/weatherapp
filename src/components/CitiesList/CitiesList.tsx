import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import { CitiesCard } from '../CitiesCard/CitiesCard';
import { useGetCitiesQuery } from '../../services/CitiesService';
import { City } from '../../types/city';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { setOffset } from '../../store/reducers/CitiesPagination';

export const CitiesList = () => {
  const dispatch = useAppDispatch();
  const [skip, setSkip] = useState(true);
  const citiesOffset = Number(localStorage.getItem('citiesOffset'));
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );

  const { data: cities } = useGetCitiesQuery(
    { offset, limit, countryIds },
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
    <List className="list list--cities">
      {cities?.data.map((city: City) => (
        <CitiesCard key={city.id + city.name} city={city} />
      ))}
    </List>
  );
};
