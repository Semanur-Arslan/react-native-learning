import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import notificationReducer from "./notificationSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    notification: notificationReducer,
    user: userReducer,
  },
});
