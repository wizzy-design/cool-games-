import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../utils/status";
import { fetchAsyncGameDetails, fetchAsyncGames } from "../utils/gameUtils";

const initialState = {
  games: [],
  gamesStatus: STATUS.IDLE,
  gamesSingle: [],
  gamesSingleStatus: STATUS.IDLE,
  gamesDetails: [],
};

const gamesSlice = createSlice({
  name: "game",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGames.pending, (state) => {
      state.gamesStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGames.fulfilled, (state, action) => {
      // It is assumed that the response from the successful API call is stored in the action.payload
      state.games = action.payload;
      state.gamesStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGameDetails.pending, (state) => {
      state.gamesSingleStatus = STATUS.LOADING;
    });

    builder.addCase(fetchAsyncGameDetails.fulfilled, (state, action) => {
      state.gamesSingle = action.payload;
      state.gamesSingleStatus = STATUS.SUCCEEDED;
    });

    builder.addCase(fetchAsyncGameDetails.rejected, (state) => {
      state.gamesSingleStatus = STATUS.FAILED;
    });
  },
  reducers: {},
});

// To get array of info from API
export const selectAllGames = (state) => state.game.games.results;
// To get Status of game slice
export const selectAllGamesStatus = (state) => state.game.gamesStatus;
// To fo to the next page of the Game API display
export const selectGamesNextPage = (state) => state.game.games.next;
export const selectGamesPrevPage = (state) => state.game.games.previous;
export const selectSingleGame = (state) => state.game.gamesSingle;
export const selectSingleGameStatus = (state) => state.game.gamesSingleStatus;
export const selectGameDetails = (state) => state.game.gamesDetails;

export default gamesSlice.reducer;
