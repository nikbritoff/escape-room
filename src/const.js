export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  Quest: '/detailed-quest/:id',
  NotFoud: '/404',
};

export const APIRoute = {
  Quests: 'quests',
}

export const ActionType = {
  ChangeGenre: 'app/changeGenre',
  QuestsLoading: 'quests/questsLoading',
  LoadQuestsSuccess: 'quests/loadQuestsSuccess',
  LoadQuestsError: 'quests/loadQuestsError',
};

export const questTypes = [
  'all',
  'adventures',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
];

export const QuestLevel = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
};
