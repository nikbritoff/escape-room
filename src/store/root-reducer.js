import { combineReducers } from 'redux';
import { appState } from './app-state/app-state';
import { detailedQuest } from './detailed-quest/detailed-quest';
import { quests } from './quests/quests';

export const NameSpace = {
  App: 'APP',
  Quests: 'QUESTS',
  DetailedQuest: 'DETAILED-QUEST',
};

export const rootReducer = combineReducers({
  [NameSpace.App]: appState,
  [NameSpace.Quests]: quests,
  [NameSpace.DetailedQuest]: detailedQuest,
});
