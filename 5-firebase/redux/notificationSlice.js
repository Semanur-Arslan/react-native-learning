import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  message: "",
  type: "info",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isVisible = true;
      state.message = action.payload.message;
      state.type = action.payload.type || "info";
    },
    hideModal: (state) => {
      state.isVisible = false;
      state.message = "";
      state.type = "info";
    },
  },
});

export const { showModal, hideModal } = notificationSlice.actions;

export default notificationSlice.reducer;
