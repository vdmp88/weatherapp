import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CitiesPagination {
  offset: number;
  limit: number;
  countryIds: string;
}

const initialState: CitiesPagination = {
  offset: 0,
  limit: 10,
  countryIds: 'Q212',
};

export const citiesPaginationSlice = createSlice({
  name: 'citiesPagination',
  initialState,
  reducers: {
    setOffset(state, action: PayloadAction<number>) {
      state.offset = action.payload;
    },
  },
});

export const { setOffset } = citiesPaginationSlice.actions;
export default citiesPaginationSlice.reducer;
