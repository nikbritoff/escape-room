const { createReducer } = require("@reduxjs/toolkit");
const { requestDetailedQuest, loadDetailedQuestSuccess, loadDetailedQuestError } = require("store/action");

const initialState = {
  detailedQuest: {},
  detailedQuestLoading: false,
  detailedQuestError: false,
  detailedQuestSuccess: false,
}

const detailedQuest = createReducer(initialState, (builder) => {
  builder
    .addCase(requestDetailedQuest, (state) => {
      state.detailedQuestLoading = true;
    })
    .addCase(loadDetailedQuestSuccess, (state, action) => {
      state.detailedQuest = action.payload;
      state.detailedQuestLoading = false;
      state.detailedQuestError = false;
      state.detailedQuestSuccess = true;
    })
    .addCase(loadDetailedQuestError, (state) => {
      state.detailedQuestLoading = false;
      state.detailedQuestError = true;
      state.detailedQuestSuccess = false;
    });
});

export {detailedQuest};
