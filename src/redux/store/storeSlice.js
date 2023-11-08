import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncStores, fetchAsyncStoresDetails } from "../utils/storeUtils";

const initialState = {
  stores: [],
  storesStatus: STATUS.IDLE,
  storesSingle: [],
  storesSingleStatus: STATUS.IDLE,
};

const storeSlice = createSlice({
  name: "store",
  initialState,
  extraReducers: (builder) => {
    // For the Game Stores
    builder.addCase(fetchAsyncStores.pending, (state) => {
      state.storesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncStores.fulfilled, (state, action) => {
      state.stores = action.payload; // Data recieved from API call
      state.storesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncStores.rejected, (state) => {
      state.storesStatus = STATUS.FAILED;
    });

    // For the game details
    builder.addCase(fetchAsyncStoresDetails.pending, (state) => {
      state.storesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncStoresDetails.fulfilled, (state, action) => {
      state.storesSingle = action.payload; // Data recieved from API call
      state.storesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncStoresDetails.rejected, (state) => {
      state.storesSingleStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

// Selector functions
export const selectAllStores = (state) => state.store.stores.results;
export const selectAllStoresStatus = (state) => state.store.storesStatus;
export const selectSingleStore = (state) => state.store.storesSingle;
export const selectSingleStoreStatus = (state) =>
  state.store.storesSingleStatus;

export default storeSlice.reducer;
