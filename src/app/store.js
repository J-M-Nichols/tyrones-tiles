import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tilesReducer from "../features/tileSlice/tilesSlice";
import flippedTileIndexReducer from "../features/tileSlice/flippedTileIndexSlice";
import turnReducer from "../features/turnSlice";

const rootReducer = combineReducers({
    tiles:tilesReducer,
    flippedTileIndex:flippedTileIndexReducer,
    turn:turnReducer
})

export const store = configureStore({
    reducer: rootReducer,
})