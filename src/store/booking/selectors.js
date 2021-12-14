import { NameSpace } from 'store/root-reducer';

export const getPostingNewBooking = (state) => state[NameSpace.NewBooking].postingNewBooking;
export const getNewBookingSuccess = (state) => state[NameSpace.NewBooking].postNewBookingSuccess;
export const getNewBookingError = (state) => state[NameSpace.NewBooking].postNewBookingError;
