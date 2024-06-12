import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    currentVideo: {},
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    currentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu, currentVideo } =
  appSlice.actions;
export default appSlice.reducer;
