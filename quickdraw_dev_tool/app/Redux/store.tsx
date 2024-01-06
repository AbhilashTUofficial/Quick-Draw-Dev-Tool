import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../Redux/App/appSlice'
export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});