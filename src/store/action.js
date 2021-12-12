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
