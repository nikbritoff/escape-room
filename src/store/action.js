import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre) => ({
    payload: genre,
  }),
);

export const requestQuests = createAction(ActionType.QuestsLoading);

export const loadQuestsError = createAction(ActionType.LoadQuestsError);

export const loadQuestsSuccess = createAction(
  ActionType.LoadQuestsSuccess,
  (quests) => ({
    payload: quests,
  }),
);

export const requestDetailedQuest = createAction(ActionType.DetailedQuestLoading);

export const loadDetailedQuestError = createAction(ActionType.LoadDetailedQuestError);

export const loadDetailedQuestSuccess = createAction(
  ActionType.LoadDetailedQuestSuccess,
  (detailedQuest) => ({
    payload: detailedQuest,
  })
);
