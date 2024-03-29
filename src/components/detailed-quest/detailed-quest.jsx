import { useEffect, useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailedQuest, getDetailedQuestError, getDetailedQuestLoading } from 'store/detailed-quest/selectors';
import { fetchDetailedQuestAction } from 'store/api-actions';
import { translateQuestLevel, translateQuestType } from 'utils/common';
import { Message } from 'const';

const DetailedQuest = () => {
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();
  const quest = useSelector(getDetailedQuest);
  const isDetailedQuestLoading = useSelector(getDetailedQuestLoading);
  const isDetailedQuestError = useSelector(getDetailedQuestError);

  useEffect(() => {
    dispatch(fetchDetailedQuestAction(id));
  }, [id, dispatch]);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  const onModalCloseBtnClick = () => {
    setIsBookingModalOpened(false);
  };

  if (isDetailedQuestError) {
    return (
      <MainLayout>
      <S.Main>
        <p>{Message.Failed}</p>
      </S.Main>
    </MainLayout>
    )
  }

  if (isDetailedQuestLoading || !Object.keys(quest).length) {
    return (
      <MainLayout>
      <S.Main>
        <p>{Message.Loading}</p>
      </S.Main>
    </MainLayout>
    )
  }

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{translateQuestType(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{quest.duration} мин</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{quest.peopleCount[0]}–{quest.peopleCount[1]} чел</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{translateQuestLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onModalCloseBtnClick={onModalCloseBtnClick} />}
      </S.Main>
    </MainLayout>
  );
};

export default DetailedQuest;
