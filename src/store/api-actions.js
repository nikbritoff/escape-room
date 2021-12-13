import { APIRoute } from 'const';
import { loadDetailedQuestError, loadDetailedQuestSuccess, loadQuestsError, loadQuestsSuccess, requestDetailedQuest, requestQuests } from './action';

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
)
