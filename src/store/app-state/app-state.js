import { createReducer } from '@reduxjs/toolkit';
import { questType } from 'const';
import { changeGenre } from 'store/action';

const initialState = {
  currentGenre: questType.All,
}

const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    });
});

export {appState};
