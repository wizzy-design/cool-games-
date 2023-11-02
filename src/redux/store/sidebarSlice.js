import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarStatus: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  extraReducers: () => {
    // (builder)
    // builder.addCase(someAction, (state, action) => {
    // handle the action
    //    });
    // Add more cases using builder.addCase(...)
  },
  reducers: {
    setSidebarOn: (state) => {
      state.sidebarStatus = true;
    },
    setSidebarOff: (state) => {
      state.sidebarStatus = false;
    },
  },
});

// The action creators
export const { setSidebarOff, setSidebarOn } = sidebarSlice.actions;

// Selector function that updates me on the sidebarStatus state
export const selectSidebarStatus = (state) => state.sidebar.sidebarStatus;

export default sidebarSlice.reducer;
