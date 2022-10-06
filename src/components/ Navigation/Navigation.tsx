import React from 'react';
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
  const { data: cities } = useGetCitiesQuery({ offset, limit, countryIds });
  const totalPostsCount = cities?.metadata?.totalCount ?? 0;
  const lastPage = Math.floor(totalPostsCount / 10);

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setOffset((page - 1) * limit));
  };

  return (
    <Stack className="navigation navigation--cities">
      <Pagination
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
