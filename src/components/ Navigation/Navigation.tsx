import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useGetCitiesQuery } from '../../services/CitiesService';
import {
  setNext,
  setPrevious,
  setPage,
} from '../../store/reducers/CitiesPagination';

export const Navigation: React.FC = () => {
  const { offset, limit, countryIds } = useAppSelector(
    (state) => state.citiesPaginationReducer,
  );
  const { data: cities } = useGetCitiesQuery(offset, limit, countryIds);
  const currentOffset = cities?.metadata?.currentOffset;
  const totalPostsCount = cities?.metadata?.totalCount;
  const currentPostsCount = currentOffset + 1;
  const test = currentOffset + cities.data.length;
  const lastPage = Math.floor(totalPostsCount / 10) * 10;
  const itLastPage = totalPostsCount === test;
  const dispatch = useAppDispatch();

  console.log(test, totalPostsCount);
  console.log('leng', cities.data.length);

  return (
    <>
      <div>{`Showing ${currentPostsCount} to ${test} of ${totalPostsCount} cities`}</div>
      <button
        disabled={!offset}
        type="button"
        onClick={() => {
          dispatch(setPrevious(10));
        }}
      >
        prev
      </button>
      <button
        disabled={itLastPage}
        type="button"
        onClick={() => {
          dispatch(setNext(10));
        }}
      >
        next
      </button>
      <button
        disabled={itLastPage}
        type="button"
        onClick={() => {
          dispatch(setPage(lastPage));
        }}
      >
        last
      </button>
    </>
  );
};
