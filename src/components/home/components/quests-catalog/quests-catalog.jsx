import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentGenre } from 'store/app-state/selectors';
import { Message, QuestType } from 'const';
import { changeGenre } from 'store/action';
import { getQuestsError, getQuestsLoading, getQuestsSuccess, selectCurrentQuests } from 'store/quests/selectors';
import { translateQuestLevel } from 'utils/common';

const QuestsCatalog = () => {
  const dispatch = useDispatch();
  const currentGenre = useSelector(getCurrentGenre);
  const questsList = useSelector(selectCurrentQuests);
  const isQuestsListLoading = useSelector(getQuestsLoading);
  const isLoadQuestsError = useSelector(getQuestsError);
  const isLoadQuestsSuccess = useSelector(getQuestsSuccess);

  const changeGenreHandler = (genre) => {
    dispatch(changeGenre(genre));
  }

    return (
    <>
      <S.Tabs>
        {/* {Object.values(QuestType).map((type) => {
          console.log(type);
          return (
            <S.TabItem onClick={() => changeGenreHandler(type.Eng)}>
              <S.TabBtn isActive={currentGenre === type.Eng}>
                <IconAllQuests />
                <S.TabTitle>{type.Ru}</S.TabTitle>
              </S.TabBtn>
            </S.TabItem>
          );
        })} */}

        <S.TabItem onClick={() => changeGenreHandler(QuestType.All.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.All.Eng}>
            <IconAllQuests />
            <S.TabTitle>Все квесты</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick={() => changeGenreHandler(QuestType.Adventures.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.Adventures.Eng}>
            <IconAdventures/>
            <S.TabTitle>Приключения</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick={() => changeGenreHandler(QuestType.Horror.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.Horror.Eng}>
            <IconHorrors />
            <S.TabTitle>Ужасы</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick={() => changeGenreHandler(QuestType.Mystic.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.Mystic.Eng}>
            <IconMystic />
            <S.TabTitle>Мистика</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick={() => changeGenreHandler(QuestType.Detective.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.Detective.Eng}>
            <IconDetective />
            <S.TabTitle>Детектив</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem onClick={() => changeGenreHandler(QuestType.SciFi.Eng)}>
          <S.TabBtn isActive={currentGenre === QuestType.SciFi.Eng}>
            <IconScifi />
            <S.TabTitle>Sci-fi</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      {isQuestsListLoading && <S.ErrorTitle>{Message.Loading}</S.ErrorTitle>}

      {isLoadQuestsError && <S.ErrorTitle>{Message.Failed}</S.ErrorTitle>}

      {isLoadQuestsSuccess && <S.QuestsList>
        {questsList.map((quest) => (
          <S.QuestItem key={quest.id}>
            <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
              <S.Quest>
                <S.QuestImage
                  src={quest.previewImg}
                  width="344"
                  height="232"
                  alt={`Квест ${quest.title}`}
                />

                <S.QuestContent>
                  <S.QuestTitle>{quest.title}</S.QuestTitle>

                  <S.QuestFeatures>
                    <S.QuestFeatureItem>
                      <IconPerson />
                      {quest.peopleCount[0]}–{quest.peopleCount[1]} чел
                    </S.QuestFeatureItem>
                    <S.QuestFeatureItem>
                      <IconPuzzle />
                      {translateQuestLevel(quest.level)}
                    </S.QuestFeatureItem>
                  </S.QuestFeatures>
                </S.QuestContent>
              </S.Quest>
            </S.QuestItemLink>
          </S.QuestItem>
        ))}
      </S.QuestsList>}
    </>
  );
}

export default QuestsCatalog;
