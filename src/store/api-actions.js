import { APIRoute } from 'const';
import { loadQuestsError, loadQuestsSuccess, requestQuests } from './action';

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
