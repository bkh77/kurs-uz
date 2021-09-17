import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "home",
  initialState: {
    banks: [],
    ratesHistory: [],
    bestBuy: [],
    bestSale: [],
  },
  reducers: {
    saveBanks: (state, action) => {
      state.banks = action.payload;
    },

    saveRatesHistory: (state, action) => {
      state.ratesHistory = Array.prototype.reverse.call(action.payload);
    },

    saveBestBuy: (state, action) => {
      if (action.payload) {
        state.bestBuy.push(action.payload);
      }
    },
    saveBestSale: (state, action) => {
      if (action.payload) {
        state.bestSale.push(action.payload);
      }
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

export const { saveBestBuy, saveBestSale } = slice.actions;

export default slice.reducer;
