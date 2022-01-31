import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: ['Selena'],
};

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
