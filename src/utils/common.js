import { QuestLevel, QuestType } from 'const';

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
    case QuestType.Adventures:
      return 'приключения';
    case QuestType.Horror:
      return 'ужасы';
    case QuestType.Mystic:
      return 'мистика';
    case QuestType.Detective:
      return 'детектив';
    case QuestType.SciFi:
      return 'sci-fi';
    default:
      return type;
  }
}
