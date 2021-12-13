import { QuestLevel, questType } from 'const';

export const translateQuestLevel = (level) => {
  switch (level) {
    case QuestLevel.Easy:
      return 'легкий';
    case QuestLevel.Medium:
      return 'средний';
    case QuestLevel.Hard:
      return 'сложный';
    default:
      return level;
  }
};

export const translateQuestType = (type) => {
  switch (type) {
    case questType.Adventures:
      return 'приключения';
    case questType.Horror:
      return 'ужасы';
    case questType.Mystic:
      return 'мистика';
    case questType.Detective:
      return 'детектив';
    case questType.SciFi:
      return 'sci-fi';
    default:
      return type;
  }
}
