import { createSelector } from '@reduxjs/toolkit';
import { QuestType } from 'const';
import { getCurrentGenre } from 'store/app-state/selectors';
import { NameSpace } from 'store/root-reducer';

export const getQuestsList = (state) => state[NameSpace.Quests].questsList;
export const getQuestsLoading = (state) => state[NameSpace.Quests].questsLoading;
export const getQuestsError = (state) => state[NameSpace.Quests].questsError;
export const getQuestsSuccess = (state) => state[NameSpace.Quests].questsSuccess;

export const selectCurrentQuests = createSelector([getQuestsList, getCurrentGenre],
  (questsList, currentGenre) => {
    if (currentGenre === QuestType.All.Eng) {
      return questsList;
    }

    const filteredQuests = questsList.filter((quest) => quest.type === currentGenre);

    return filteredQuests;
  })
