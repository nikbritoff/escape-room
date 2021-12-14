import { createReducer } from '@reduxjs/toolkit';
import { QuestType, Screen } from 'const';
import { changeGenre, changeScreen } from 'store/action';

const initialState = {
  currentGenre: QuestType.All,
  currentScreen: Screen.Quests,
}

const appState = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(changeScreen, (state, action) => {
    state.currentScreen = action.payload
    });
});

export {appState};
