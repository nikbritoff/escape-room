import { createSelector } from "@reduxjs/toolkit";
import { questTypes } from "const";
import { getCurrentGenre } from "store/app-state/selectors";
import { NameSpace } from "store/root-reducer";

export const getQuestsList = (state) => state[NameSpace.Quests].questsList;
export const getQuestsLoading = (state) => state[NameSpace.Quests].questsLoading;
export const getQuestsError = (state) => state[NameSpace.Quests].questsError;

export const selectCurrentQuests = createSelector([getQuestsList, getCurrentGenre],
  (questsList, currentGenre) => {
    if (currentGenre === questTypes[0]) {
      return questsList;
    }

    const filteredQuests = questsList.filter((quest) => quest.type === currentGenre);

    return filteredQuests;
  })
