import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favoriteJobs",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const jobExists = state.favorites.some(
        (job) => job.id === action.payload.id
      );
      if (!jobExists) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (job) => job.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
