import { createSlice } from "@reduxjs/toolkit";
import { apiCallHistory } from "../middleware/apiCallAction";

const slice = createSlice({
  name: "rateHistory",
  initialState: {
    markaz: [],
  },
  reducers: {
    saveMarkaz: (state, action) => {
      state.markaz = action.payload.slice(0, 3);
    },
  },
});

export const getMarkaz = () =>
  apiCallHistory({
    url: "",
    method: "GET",
    onSuccess: slice.actions.saveMarkaz.type,
    onFail: slice.actions.saveMarkaz.type,
  });

export default slice.reducer;
