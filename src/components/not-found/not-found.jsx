import Footer from 'components/common/footer/footer';
import Header from 'components/common/header/header';
import { AppRoute, Screen } from 'const';
import { useDispatch } from 'react-redux';
import { changeScreen } from 'store/action';
import * as S from './not-found.styled';

const NotFound = () => {
  const dispatch = useDispatch();

  const handleLinkClick = (screen) => {
    dispatch(changeScreen(screen));
  }

  return (
    <S.Container>
      <Header/>
      <S.Main>
        <S.Section>
          <S.Title>404. Страница не найдена</S.Title>
          <S.LinkToMain
            onClick={() => handleLinkClick(Screen.Quests)}
            to={AppRoute.Home}
          >
            Вернуться на главную
          </S.LinkToMain>
        </S.Section>
      </S.Main>
      <Footer/>
    </S.Container>
  );
};

export default NotFound;
