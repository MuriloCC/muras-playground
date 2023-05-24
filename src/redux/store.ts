import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./global/globalSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    global: globalReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export default store;