import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const store = configureStore({
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    reducer: {
      main: mainSlice.reducer,
    },
  });
export default store;