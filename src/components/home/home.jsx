import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { Screen } from 'const';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeScreen } from 'store/action';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScreen(Screen.Quests));
  });

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
};

export default HomePage;
