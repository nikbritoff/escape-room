import { createReducer } from '@reduxjs/toolkit';
import { questTypes } from 'const';
import { changeGenre } from 'store/action';

const initialState = {
  currentGenre: questTypes[0],
}

const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    });
});

export {appState};
