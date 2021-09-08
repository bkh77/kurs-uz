import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "home",
  initialState: {
    banks: [],
    markaz: [],
  },
  reducers: {
    getData: (state, action) => {
      state.banks = action.payload;


    },
    getMarkaz: (state, action) => {
      // console.log(action.payload);
      state.markaz = [
        { id: "USD", cbr: action.payload[0].amount_usd },
        { id: "EUR", cbr: action.payload[0].amount_eur },
        { id: "RUB", cbr: action.payload[0].amount_rub },
      ];
    },
  },
});

export const getBanks = () =>
  apiCall({
    url: "mainday/",
    method: "GET",
    onSuccess: slice.actions.getData.type,
    onFail: slice.actions.getData.type,
  });

export const getMarkaz = () =>
  apiCall({
    url: "markaziyday/",
    method: "GET",
    onSuccess: slice.actions.getMarkaz.type,
    onFail: slice.actions.getMarkaz.type,
  });

export default slice.reducer;
