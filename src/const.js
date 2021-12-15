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
  Phone: 'Номер телефоа должен содержать 10 символов',
};

export const ADDRESS_COORDINATES = [59.968137, 30.316272];

export const ADDRESS_PLACEMARK_COLOR = '#1A1A1A';
