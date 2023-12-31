import { configureStore } from "@reduxjs/toolkit";
import { kanbanReducer } from "./slice/kanbanSlice";
import { calendarReducer } from "./slice/calendarSlice";

export const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
    calendar: calendarReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
