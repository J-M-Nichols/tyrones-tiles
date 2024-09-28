import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import tilesReducer from "../features/tileSlice/tilesSlice";
import flippedTileIndexReducer from "../features/tileSlice/flippedTileIndexSlice";
import turnReducer from "../features/turnSlice";
import gameReducer from "../features/gameSlice";
import pickUpFruitReducer from "../features/pickUpFruit/pickUpFruitSlice";

const rootReducer = combineReducers({
    tiles:tilesReducer,
    flippedTileIndex:flippedTileIndexReducer,
    turn:turnReducer,
    game:gameReducer,
    pickUpFruit:pickUpFruitReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})