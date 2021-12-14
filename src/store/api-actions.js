import { APIRoute, Message } from 'const';
import { loadDetailedQuestError, loadDetailedQuestSuccess, loadQuestsError, loadQuestsSuccess, postingNewBooking, postNewBookingError, postNewBookingSuccess, requestDetailedQuest, requestQuests } from './action';
import { toast } from 'react-toastify';

export const fetchQuestsAction = () => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestQuests());
      const {data} = await api.get(APIRoute.Quests);
      dispatch(loadQuestsSuccess(data));
    }
    catch {
      dispatch(loadQuestsError());
    }
  }
);

export const fetchDetailedQuestAction = (id) => (
  async (dispatch, _, api) => {
    try {
      dispatch(requestDetailedQuest());
      const {data} = await api.get(`${APIRoute.Quests}${id}`);
      dispatch(loadDetailedQuestSuccess(data));
    }
    catch {
      dispatch(loadDetailedQuestError());
    }
  }
);

export const postBookingDataAction = ({name, peopleCount, phone, isLegal}) => (
  async (dispatch, _, api) => {
    try {
      dispatch(postingNewBooking());
      const response = await api.post(APIRoute.Booking, {name, peopleCount, phone, isLegal});
      console.log(response);
      dispatch(postNewBookingSuccess(true));
      toast.success(Message.PostSuccess);
    }
    catch {
      dispatch(postNewBookingError());
      toast.error(Message.PostFailed);
    }
  }
);
