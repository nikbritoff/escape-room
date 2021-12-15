import { createReducer } from '@reduxjs/toolkit';
import { loadQuestsError, loadQuestsSuccess, requestQuests } from 'store/action';

const initialState = {
  questsList: [],
  questsLoading: false,
  questsError: false,
  questsSuccess: false,
}

const quests = createReducer(initialState, (builder) => {
  builder
    .addCase(requestQuests, (state) => {
      state.questsLoading = true;
    })
    .addCase(loadQuestsSuccess, (state, action) => {
      state.questsList = action.payload;
      state.questsLoading = false;
      state.questsError = false;
      state.questsSuccess = true;
    })
    .addCase(loadQuestsError, (state) => {
      state.questsLoading = false;
      state.questsError = true;
      state.questsSuccess = false;
    });
});

export {quests};
