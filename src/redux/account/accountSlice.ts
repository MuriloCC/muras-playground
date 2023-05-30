
import { createSlice } from "@reduxjs/toolkit";
import { AccountModel } from "../../common/model/AccountModel";
import { accountInitialState } from "./accountInitialState";

export const slice = createSlice({
  name: "account",
  initialState: accountInitialState,
  reducers: {
    handleAccountData(state, { payload }: { payload: AccountModel }) {
      return { ...state, ...payload }
    }
  }
});

export const { handleAccountData } = slice.actions

export default slice.reducer