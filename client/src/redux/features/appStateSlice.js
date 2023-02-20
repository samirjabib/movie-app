import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "app",
  initialState: {
    openNav: false,
  },
  reducers: {
    setOpenNav: (state, { payload }) => {
      state.openNav = payload;
    },
  },
});

export const { setOpenNav } = appStateSlice.actions;
