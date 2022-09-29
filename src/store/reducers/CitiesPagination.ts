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
    setNext(state, action: PayloadAction<any>) {
      state.offset += action.payload;
    },

    setPrevious(state, action: PayloadAction<any>) {
      state.offset -= action.payload;
    },

    setPage(state, action: PayloadAction<any>) {
      state.offset = action.payload;
    },
  },
});

export const { setNext, setPrevious, setPage } = citiesPaginationSlice.actions;
export default citiesPaginationSlice.reducer;
