"use client";
import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "../../app/[locale]/redux/ground-surface-slice";

// Create the root store
export const makeStore = () =>
  configureStore({
    reducer: {
      map: mapSlice,
    },
  });

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
