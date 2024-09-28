import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetTurn } from "./turnSlice";
import { nextLevel, setSize, startGame } from "./gameSlice";
import { resetFlippedTileIndex } from "./tileSlice/flippedTileIndexSlice";
import { setTiles } from "./tileSlice/tilesSlice";
import generateImageArray from "../generator/generateImageArray";

export const handleCasualGameStart = createAsyncThunk(
    'game/handleCasualGameStart',
    async (payload, {getState, dispatch}) => {
        const state = getState()
        const {gameSize} = state.game

        dispatch(resetTurn())
        dispatch(resetFlippedTileIndex())
        dispatch(setSize(payload))

        if(payload===gameSize) dispatch(setTiles(generateImageArray(gameSize)))
    }
)

export const handleChallengeGameStart = createAsyncThunk(
    'game/handleChallengeGameStart',
    async (_, {dispatch}) => {
        dispatch(resetTurn())
        dispatch(resetFlippedTileIndex())
        dispatch(startGame())
    }
)

export const handleNextChallengeGame = createAsyncThunk(
    'game/handleNextChallengeGame',
    async (_, {dispatch}) => {
        dispatch(resetTurn())
        dispatch(resetFlippedTileIndex())
        dispatch(nextLevel())
    }
)