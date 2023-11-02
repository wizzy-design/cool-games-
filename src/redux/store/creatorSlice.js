import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const creatorSlice = createSlice({
  name: "creator",
  initialState,
  builder: (builder) => {
    // builder.addCase(someAction, (state, action) => {
    // handle the action
    //    });
    // Add more cases using builder.addCase(...)
  },
  reducers: {},
});

export default creatorSlice.reducer;
