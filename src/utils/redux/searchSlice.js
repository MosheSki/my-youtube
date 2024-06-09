import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    videoResults: [],
  },
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
    videoResults: (state, action) => {
      state.videoResults = action.payload;
    },
  },
});

export const { cacheResults, videoResults } = searchSlice.actions;
export default searchSlice.reducer;
