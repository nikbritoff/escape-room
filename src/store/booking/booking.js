import { createReducer } from '@reduxjs/toolkit';
import { postingNewBooking, postNewBookingSuccess, postNewBookingError } from 'store/action';

const initialState = {
  postingNewBooking: false,
  postNewBookingSuccess: false,
  postNewBookingError: false,
}

const booking = createReducer(initialState, (builder) => {
  builder
    .addCase(postingNewBooking, (state) => {
      state.postingNewBooking = true;
      state.postNewBookingSuccess = false;
      state.postNewBookingError = false;
    })
    .addCase(postNewBookingSuccess, (state, action) => {
      state.postNewBookingSuccess = action.payload;
      state.postingNewBooking = false;
    })
    .addCase(postNewBookingError, (state) => {
      state.postNewBookingError = true;
      state.postingNewBooking = false;
    });
});

export {booking};
