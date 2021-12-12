import { QuestLevel } from 'const';

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
