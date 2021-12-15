import { createAction } from '@reduxjs/toolkit';
import { ActionType } from 'const';

export const changeGenre = createAction(
  ActionType.ChangeGenre,
  (genre) => ({
    payload: genre,
  }),
);

export const changeScreen = createAction(
  ActionType.ChangeScreen,
  (screen) => ({
    payload: screen,
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
  }),
);

export const postingNewBooking = createAction(ActionType.PostNewBooking);

export const postNewBookingSuccess = createAction(
  ActionType.PostNewBookingSuccess,
  (status) => ({
    payload: status,
  }),
);

export const postNewBookingError = createAction(ActionType.PostNewBookingError);
