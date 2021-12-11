import Footer from 'components/common/footer/footer';
import Header from 'components/common/header/header';
import { AppRoute } from 'components/const';
import * as S from './not-found.styled';

const NotFound = () => (
  <S.Container>
    <Header/>
    <S.Main>
      <S.Section>
        <S.Title>404. Страница не найдена</S.Title>
        <S.LinkToMain to={AppRoute.Home}>Вернуться на главную</S.LinkToMain>
      </S.Section>
    </S.Main>
    <Footer/>
  </S.Container>
)

export default NotFound;
