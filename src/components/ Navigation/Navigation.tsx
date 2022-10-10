import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useGetCitiesQuery } from '../../services/CitiesService';
import { setOffset } from '../../store/reducers/CitiesPagination';

export const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );
  const [skip, setSkip] = useState(true);
  const citiesOffset = Number(localStorage.getItem('citiesOffset'));
  const { data: cities } = useGetCitiesQuery(
    { offset, limit, countryIds },
    { skip },
  );
  const totalPostsCount = cities?.metadata?.totalCount ?? 0;
  const lastPage = Math.floor(totalPostsCount / 10);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setOffset((page - 1) * limit));
  };

  useEffect(() => {
    if (citiesOffset) {
      dispatch(setOffset(citiesOffset));
      setSkip(false);
    } else {
      setSkip(false);
    }
  }, [citiesOffset]);

  useEffect(() => {
    localStorage.setItem('citiesOffset', String(offset));
  }, [offset]);

  return (
    <Stack className="navigation navigation--cities">
      <Pagination
        page={offset / 10 + 1}
        count={lastPage + 1}
        siblingCount={0}
        onChange={handleChange}
        color="primary"
        size="large"
        showLastButton
      />
    </Stack>
  );
};
