export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  Quest: '/detailed-quest/:id',
  NotFoud: '/404',
};

export const APIRoute = {
  Quests: 'quests/',
}

export const ActionType = {
  ChangeGenre: 'app/changeGenre',
  QuestsLoading: 'quests/questsLoading',
  LoadQuestsSuccess: 'quests/loadQuestsSuccess',
  LoadQuestsError: 'quests/loadQuestsError',
  DetailedQuestLoading: 'detailedQuest/detailedQuestLoading',
  LoadDetailedQuestSuccess: 'detailedQuest/loadDetailedQuestSuccess',
  LoadDetailedQuestError: 'detailedQuest/loadDetailedQuestError',
};

export const questType = {
  All: 'all',
  Adventures: 'adventures',
  Horror: 'horror',
  Mystic: 'mystic',
  Detective: 'detective',
  SciFi: 'sci-fi',
};

export const QuestLevel = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};

export const ErrorMessage = {
  Loading: 'Загрузка данных...',
  Failed: 'Ошибка загрузки данных',
}
