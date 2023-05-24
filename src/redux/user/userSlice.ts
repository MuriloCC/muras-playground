
import { createSlice } from "@reduxjs/toolkit";
import { UserStateModel } from "../../common/model/UserModel";
import { userInitialState } from "./userInitialState";

export const slice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    handleUserData(state, { payload }: { payload: UserStateModel }) {
      return { ...state, ...payload };
    },
    logout() {
      return {} as UserStateModel
    },
  }
});

export const { handleUserData, logout } = slice.actions

export default slice.reducer