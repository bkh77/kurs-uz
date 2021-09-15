import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "home",
  initialState: {
    banks: [],
    month: [],
    ratesHistory: [],
  },
  reducers: {
    saveBanks: (state, action) => {
      state.banks = action.payload;
    },

    saveMonth: (state, action) => {
      state.month = action.payload;
    },

    saveRatesHistory: (state, action) => {
      state.ratesHistory = action.payload;
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

export const getRatesHistory = () =>
  apiCall({
    url: "central/",
    method: "GET",
    onSuccess: slice.actions.saveRatesHistory.type,
    onFail: slice.actions.saveRatesHistory.type,
  });

export default slice.reducer;
