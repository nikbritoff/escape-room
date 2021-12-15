export const AppRoute = {
  Home: '/',
  Contacts: '/contacts',
  Quest: '/detailed-quest/:id',
  NotFoud: '/404',
};

export const APIRoute = {
  Quests: 'quests/',
  Booking: 'orders',
}

export const ActionType = {
  ChangeGenre: 'app/changeGenre',
  ChangeScreen: 'app/ChangeScreen',
  QuestsLoading: 'quests/questsLoading',
  LoadQuestsSuccess: 'quests/loadQuestsSuccess',
  LoadQuestsError: 'quests/loadQuestsError',
  DetailedQuestLoading: 'detailedQuest/detailedQuestLoading',
  LoadDetailedQuestSuccess: 'detailedQuest/loadDetailedQuestSuccess',
  LoadDetailedQuestError: 'detailedQuest/loadDetailedQuestError',
  PostNewBooking: 'booking/postNewBooking',
  PostNewBookingSuccess: 'booking/postNewBookingSuccess',
  PostNewBookingError: 'booking/postNewBookingError',
};

export const Screen = {
  Quests: 'Квесты',
  ForBegginers: 'Новичкам',
  Reviews: 'Отзывы',
  Promo: 'Акции',
  Contacts: 'Контакты',
};

export const QuestType = {
  All: {
    Eng: 'all',
    Ru: 'все квесты',
  },
  Adventures: {
    Eng: 'adventures',
    Ru: 'приключения',
  },
  Horror: {
    Eng: 'horror',
    Ru: 'ужасы',
  },
  Mystic: {
    Eng: 'mystic',
    Ru: 'мистика',
  },
  Detective: {
    Eng: 'detective',
    Ru: 'детектив',
  },
  SciFi: {
    Eng: 'sci-fi',
    Ru: 'sci-fi',
  },
};

export const QuestLevel = {
  Easy: {
    Eng: 'easy',
    Ru: 'легкий'
  },
  Medium: {
    Eng: 'medium',
    Ru: 'средний',
  },
  Hard: {
    Eng: 'hard',
    Ru: 'сложный',
  },
};

export const Message = {
  Loading: 'Загрузка данных...',
  Failed: 'Ошибка загрузки данных',
  Post: 'Отправить заявку',
  Posting: 'Отправка заявки...',
  PostFailed: 'Ошибка отправки данных',
  PostSuccess: 'Заявка успешно отправлена',
};

export const FormValidateMessage = {
  Name: 'Введите символы а-я или a-z',
  PeopleCount: 'Введите число',
  Phone: 'Номер телефона должен содержать 10 символов',
};

export const MapSetting = {
  Coordinates: [59.968137, 30.316272],
  PlacemarkColor: '#1A1A1A',
  Zoom: 17,
};
