import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    // add: (state, payload) => {},
  },
});

export default reservationSlice.reducer;
