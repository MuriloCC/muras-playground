import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account/accountSlice";
import globalReducer from "./global/globalSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer,
    account: accountReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;