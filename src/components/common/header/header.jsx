import logo from 'assets/img/logo.svg';
import { AppRoute, Screen } from 'const';
import { useSelector, useDispatch } from 'react-redux';
import { changeScreen } from 'store/action';
import { getCurrentScreen } from 'store/app-state/selectors';
import * as S from './header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const currentScreen = useSelector(getCurrentScreen);

  const handleLinkClick = (screen) => {
    dispatch(changeScreen(screen));
  }

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink to={AppRoute.Home}>
          <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
        </S.LogoLink>

        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link
                $isActiveLink={currentScreen === Screen.Quests}
                onClick={() => handleLinkClick(Screen.Quests)}
                to={AppRoute.Home}
              >
                Квесты
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentScreen === Screen.ForBegginers}
                onClick={() => handleLinkClick(Screen.ForBegginers)}
                to={AppRoute.NotFoud}
              >
                Новичкам
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentScreen === Screen.Reviews}
                onClick={() => handleLinkClick(Screen.Reviews)}
                to={AppRoute.NotFoud}
              >
                Отзывы
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentScreen === Screen.Promo}
                onClick={() => handleLinkClick(Screen.Promo)}
                to={AppRoute.NotFoud}
              >
                Акции
              </S.Link>
            </S.LinkItem>

            <S.LinkItem>
              <S.Link
                $isActiveLink={currentScreen === Screen.Contacts}
                onClick={() => handleLinkClick(Screen.Contacts)}
                to={AppRoute.Contacts}
              >
                Контакты
              </S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
};

export default Header;
