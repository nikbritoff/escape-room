import { combineReducers } from 'redux';
import { appState } from './app-state/app-state';
import { quests } from './quests/quests';

export const NameSpace = {
  App: 'APP',
  Quests: 'QUESTS',
};

export const rootReducer = combineReducers({
  [NameSpace.App]: appState,
  [NameSpace.Quests]: quests,
});
