import { createReducer } from '@reduxjs/toolkit';
import { QuestsList } from 'mock/mock';
import { loadQuestsError, loadQuestsSuccess, requestQuests } from 'store/action';

const initialState = {
  questsList: QuestsList,
  questsLoading: false,
  questsError: false,
}

const quests = createReducer(initialState, (builder) => {
  builder
    .addCase(loadQuestsSuccess, (state, action) => {
      state.questsList = action.payload;
      state.questsLoading = false;
      state.questsError = false;
    })
    .addCase(requestQuests, (state) => {
      state.questsLoading = true;
    })
    .addCase(loadQuestsError, (state) => {
      state.questsLoading = false;
      state.loadQuestsError = true;
    });
});

export {quests};
