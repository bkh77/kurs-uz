import { configureStore } from "@reduxjs/toolkit";
import { api } from "./middleware/api";
import homeReducer from "./reducers/home";

export default configureStore({
  reducer: { homeReducer },
  middleware: [api],
});
