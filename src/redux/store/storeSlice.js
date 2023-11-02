import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const storeSlice = createSlice({
  name: "store",
  initialState,
  builder: (builder) => {
    // builder.addCase(someAction, (state, action) => {
    // handle the action
    //    });
    // Add more cases using builder.addCase(...)
  },
  reducers: {},
});

export default storeSlice.reducer;
