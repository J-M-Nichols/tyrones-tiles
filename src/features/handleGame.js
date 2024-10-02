import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetTurn } from "./turnSlice";
import { nextLevel, setLevel, setSize } from "./gameSlice";
import { resetFlippedTileIndex } from "./tileSlice/flippedTileIndexSlice";
import { setTiles } from "./tileSlice/tilesSlice";
import generateImageArray from "../generator/generateImageArray";

export const handleCasualGameStart = createAsyncThunk(
    'game/handleCasualGameStart',
    async (payload, {dispatch}) => {
        dispatch(resetTurn())
        dispatch(resetFlippedTileIndex())
        dispatch(setSize(payload))
        dispatch(setTiles(generateImageArray(payload)))
    }
)

export const handleChallengeGameStart = createAsyncThunk(
    'game/handleChallengeGameStart',
    async (_, {dispatch}) => {
        const level = Number(localStorage.getItem('level')) | 0
        
        dispatch(resetTurn())
        dispatch(resetFlippedTileIndex())
        dispatch(setLevel(level))
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