import { QuestLevel, QuestType } from 'const';

export const translateQuestLevel = (level) => {
  switch (level) {
    case QuestLevel.Easy.Eng:
      return QuestLevel.Easy.Ru;
    case QuestLevel.Medium.Eng:
      return QuestLevel.Medium.Ru;
    case QuestLevel.Hard.Eng:
      return QuestLevel.Hard.Ru;
    default:
      return level;
  }
};

export const translateQuestType = (type) => {
  switch (type) {
    case QuestType.Adventures.Eng:
      return QuestType.Adventures.Ru;
    case QuestType.Horror.Eng:
      return QuestType.Horror.Ru;
    case QuestType.Mystic.Eng:
      return QuestType.Mystic.Ru;
    case QuestType.Detective.Eng:
      return QuestType.Detective.Ru;
    case QuestType.SciFi.Eng:
      return QuestType.SciFi.Ru;
    default:
      return type;
  }
}
