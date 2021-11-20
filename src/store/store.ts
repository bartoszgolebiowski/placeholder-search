import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "@/features/users/usersSlice";
import { placeholderApi } from "@/services/placeholder";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [placeholderApi.reducerPath]: placeholderApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(placeholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
