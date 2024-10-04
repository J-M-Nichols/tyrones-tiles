import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetTurn } from "./turnSlice";
import { nextLevel, setLevel, setSize } from "./gameSlice";
import { resetFlippedTileIndex } from "./tileSlice/flippedTileIndexSlice";
import { setTiles } from "./tileSlice/tilesSlice";
import generateImageArray from "../generator/generateImageArray";
import { GitHubStorageHandler } from "github-localstorage-handler";
import trackedPaths from "../helpers/trackedPaths";

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
        const levelHandler = new GitHubStorageHandler(trackedPaths.level)
        const level = levelHandler.getNumber(0)
        
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