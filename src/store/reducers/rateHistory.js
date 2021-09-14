import { createSlice } from "@reduxjs/toolkit";
import { apiCallHistory } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "rateHistory",
  initialState: {
    USD: [],
    EUR: [],
    RUB: [],
  },
  reducers: {
    saveUSD: (state, action) => {
      state.USD.push(action.payload[0]);
    },

    saveEUR: (state, action) => {
      state.EUR.push(action.payload[0]);
    },
    saveRUB: (state, action) => {
      state.RUB.push(action.payload[0]);
    },
  },
});

export const getUSD = (date) =>
  apiCallHistory({
    url: `USD/${date}/`,
    method: "GET",
    onSuccess: slice.actions.saveUSD.type,
    onFail: slice.actions.saveUSD.type,
  });

export const getEUR = (date) =>
  apiCallHistory({
    url: `EUR/${date}/`,
    method: "GET",
    onSuccess: slice.actions.saveEUR.type,
    onFail: slice.actions.saveEUR.type,
  });

export const getRUB = (date) =>
  apiCallHistory({
    url: `RUB/${date}/`,
    method: "GET",
    onSuccess: slice.actions.saveRUB.type,
    onFail: slice.actions.saveRUB.type,
  });

export default slice.reducer;
