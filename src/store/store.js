import { configureStore } from "@reduxjs/toolkit";
import { api } from "./middleware/api";
import { api2 } from "./middleware/api2";
import home from "./reducers/home";
import rateHistory from "./reducers/rateHistory";

export default configureStore({
  reducer: { home, rateHistory },
  middleware: [api, api2],
});
