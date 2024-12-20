import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkModeRedux: (state) => !state,
  },
});

export const { toggleDarkModeRedux } = darkModeSlice.actions;

export default darkModeSlice.reducer;
