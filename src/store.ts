import { configureStore } from "@reduxjs/toolkit";

import { placeholderApi } from "./services/placeholder";

export const store = configureStore({
  reducer: {
    [placeholderApi.reducerPath]: placeholderApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(placeholderApi.middleware),
});
