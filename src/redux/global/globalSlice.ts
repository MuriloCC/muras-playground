
import { createSlice } from "@reduxjs/toolkit";
import { globalInitialState } from "./globalInitialState";

export const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    showLoader(state) {
      return { ...state, loaderScreen: true };
    },
    hideLoader(state) {
      return { ...state, loaderScreen: false };
    },
  }
});

export const { showLoader, hideLoader } = slice.actions

export default slice.reducer