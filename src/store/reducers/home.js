import { createSlice } from "@reduxjs/toolkit";
import { apiCall, apiCallHistory } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "home",
  initialState: {
    banks: [],
    month: [],
    markaz: [],
  },
  reducers: {
    saveBanks: (state, action) => {
      state.banks = action.payload;
    },

    saveMonth: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const getBanks = () =>
  apiCall({
    url: "mainday/",
    method: "GET",
    onSuccess: slice.actions.saveBanks.type,
    onFail: slice.actions.saveBanks.type,
  });

export const getMonth = () =>
  apiCall({
    url: "month/",
    method: "GET",
    onSuccess: slice.actions.saveMonth.type,
    onFail: slice.actions.saveMonth.type,
  });



export default slice.reducer;
