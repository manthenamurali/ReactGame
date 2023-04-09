import { configureStore, createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "app-slice",
  initialState: {
    theme: "light",
  },
  reducers: {
    toogleTheme(state, action) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

export const appReducer = appslice.reducer;
export const appActions = appslice.actions;

const appStore = configureStore({
  reducer: { app: appReducer },
});

export default appStore;
