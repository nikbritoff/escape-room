import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { postBookingDataAction } from 'store/api-actions';
import { useSelector } from 'react-redux';
import { getNewBookingSuccess, getPostingNewBooking } from 'store/booking/selectors';
import { FormValidateMessage, Message } from 'const';
import { postNewBookingSuccess } from 'store/action';

const initialState = {
  name : {
    value: '',
    error: false,
    touched: false,
    regex: /([а-яА-Я]+\w*)|([a-zA-Z]+\w*)/,
  },
  peopleCount : {
    value: '',
    error: false,
    touched: false,
    regex: /^[0-9]+$/,
  },
  phone : {
    value: '',
    error: false,
    touched: false,
    regex: /^[0-9]{10}$/,
  },
  isLegal : {
    value: false,
    error: false,
    touched: false,
  },
}

const BookingModal = ({onModalCloseBtnClick}) => {
  const dispatch = useDispatch();
  const isBookingPosting = useSelector(getPostingNewBooking);
  const isBookingPostSuccess = useSelector(getNewBookingSuccess);

  const submitBookingData = (bookingData) => {
    dispatch(postBookingDataAction(bookingData));
  }

  const [formState, setFormState] = useState(initialState);

  const handleInputBookingNameChange = ({target}) => {
    const {value} = target;
    const rule = formState.name.regex;
    const isValid = rule.test(value);

    setFormState({
      ...formState,
      name: {
        ...formState.name,
        value: value,
        touched: true,
        error: !isValid,
      }
    });
  }

  const handleInputBookingPhoneChange = ({target}) => {
    const {value} = target;
    const rule = formState.phone.regex;
    const isValid = rule.test(value);

    setFormState({
      ...formState,
      phone: {
        ...formState.phone,
        value: value,
        touched: true,
        error: !isValid,
      }
    });
  }

  const handleInputBookingPeopleChange = ({target}) => {
    const {value} = target;
    const rule = formState.peopleCount.regex;
    const isValid = rule.test(value);

    setFormState({
      ...formState,
      peopleCount: {
        ...formState.peopleCount,
        value: value,
        touched: true,
        error: !isValid,
      }
    });
  }

  const handleInputClick = () => {
    setFormState({
      ...formState,
      isLegal: {
        value: !formState.isLegal.value,
        touched: true,
        error: false,
      }
    });
  }


  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      onModalCloseBtnClick(false);
    }
  }, [onModalCloseBtnClick]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      dispatch(postNewBookingSuccess(false));
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction, dispatch]);

  useEffect(() => {
    if (isBookingPostSuccess) {
      setFormState(initialState);
      onModalCloseBtnClick(false);

    }
  }, [isBookingPostSuccess, onModalCloseBtnClick]);

  const isFormValid = Object.values(formState).every((item) => !item.error && item.touched);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    submitBookingData({
      name: formState.name.value,
      peopleCount: Number(formState.peopleCount.value),
      phone: formState.phone.value,
      isLegal: formState.isLegal.value,
    });
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn
          onClick={onModalCloseBtnClick}
        >
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              value={formState.name.value}
              placeholder="Имя"
              required
              onChange={handleInputBookingNameChange}
              disabled={isBookingPosting}
            />
            {formState.name.error
            && <S.BookingInputErrorText>
              {FormValidateMessage.Name}
            </S.BookingInputErrorText>}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              value={formState.phone.value}
              placeholder="Телефон"
              required
              onChange={handleInputBookingPhoneChange}
              disabled={isBookingPosting}
            />
            {formState.phone.error
            && <S.BookingInputErrorText>
              {FormValidateMessage.Phone}
            </S.BookingInputErrorText>}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              value={formState.peopleCount.value}
              placeholder="Количество участников"
              required
              onChange={handleInputBookingPeopleChange}
              disabled={isBookingPosting}
            />
            {formState.peopleCount.error
            && <S.BookingInputErrorText>
              {FormValidateMessage.PeopleCount}
            </S.BookingInputErrorText>}
          </S.BookingField>
          <S.BookingSubmit
            type="submit"
            disabled={!isFormValid || isBookingPosting}
          >
            {isBookingPosting ? Message.Posting : Message.Post}
          </S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              checked={formState.isLegal.value}
              required
              onChange={handleInputClick}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
              disabled={isBookingPosting}
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
