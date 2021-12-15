import { MainLayout, PageTitle, PageSubtext } from 'components/common/common';
import contactsMap from 'assets/img/contacts-map.jpg';
import * as S from './contacts.styled';
import { useDispatch } from 'react-redux';
import { changeScreen } from 'store/action';
import { useEffect } from 'react';
import { ADDRESS_COORDINATES, ADDRESS_PLACEMARK_COLOR, Screen } from 'const';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeScreen(Screen.Contacts));
  });


  return (
    <YMaps>
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageTitle>Контакты</PageTitle>
            <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
          </S.PageHeading>

          <S.Contacts>
            <S.ContactsList>
              <S.ContactTitle>Адрес</S.ContactTitle>
              <S.ContactValue>
                <S.ContactAddress>
                  Санкт-Петербург,
                  <br />
                  Набережная реки Карповка, д 5
                </S.ContactAddress>
              </S.ContactValue>

              <S.ContactTitle>Режим работы</S.ContactTitle>
              <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

              <S.ContactTitle>Телефон</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="tel:8 (800) 333-55-99">
                  8 (800) 333-55-99
                </S.ContactLink>
              </S.ContactValue>

              <S.ContactTitle>E-mail</S.ContactTitle>
              <S.ContactValue>
                <S.ContactLink href="mailto:info@escape-room.ru">
                  info@escape-room.ru
                </S.ContactLink>
              </S.ContactValue>
            </S.ContactsList>

            <S.ContactsMap>
              <S.ContactsMapImage
                src={contactsMap}
                alt="мы находимся по адресу Санкт-Петербург, Набережная реки Карповка, д 5"
                width="649"
                height="336"
              />

              <Map
                width="100%"
                height="100%"
                defaultState={
                    {
                      center: ADDRESS_COORDINATES,
                      zoom: 17,
                    }
                  }
                >
                  <Placemark
                    geometry={ADDRESS_COORDINATES}
                    options={{iconColor: ADDRESS_PLACEMARK_COLOR}}
                  />
                </Map>
            </S.ContactsMap>
          </S.Contacts>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
    </YMaps>
  );
};

export default Contacts;
