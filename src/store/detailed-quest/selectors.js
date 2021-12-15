import { NameSpace } from 'store/root-reducer';

export const getDetailedQuest = (state) => state[NameSpace.DetailedQuest].detailedQuest;
export const getDetailedQuestLoading = (state) => state[NameSpace.DetailedQuest].detailedQuestLoading;
export const getDetailedQuestError = (state) => state[NameSpace.DetailedQuest].detailedQuestError;
export const getDetailedQuestSuccess = (state) => state[NameSpace.DetailedQuest].detailedQuestSuccess;
