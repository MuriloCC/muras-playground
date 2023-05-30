
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
    changeShowAmountState(state) {
      return { ...state, amountVisibility: !state.amountVisibility }
    }
  }
});

export const { showLoader, hideLoader, changeShowAmountState } = slice.actions

export default slice.reducer