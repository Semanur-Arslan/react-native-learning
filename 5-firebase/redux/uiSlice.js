import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAuthScreen: (state) => {
      state.isSignIn = !state.isSignIn;
    },
  },
});

export const { toggleAuthScreen } = uiSlice.actions;
export default uiSlice.reducer;
