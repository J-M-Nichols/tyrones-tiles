import { createSlice } from "@reduxjs/toolkit"
import challengeSize from "../helpers/challengeSize"
import { GitHubStorageHandler } from "github-localstorage-handler"
import trackedPaths from "../helpers/trackedPaths"

const levelHandler = new GitHubStorageHandler(trackedPaths.level)

const initialState = {
    gameSize:2,
    gameLevel:0
}

const gameSlice = createSlice({
    name:'game',
    initialState,
    reducers:{
        startGame: state=>{
            state.gameLevel = 0
            state.gameSize = 2
        },
        nextLevel: state=>{
            const level = state.gameLevel + 1
            const index = Math.floor(level/challengeSize)
            
            state.gameSize = index+2
            state.gameLevel = level
            levelHandler.setNumber(level)
        },
        setLevel: (state, {payload})=>{
            const level = payload
            const index = Math.floor(level/challengeSize)
            
            state.gameSize = index+2
            state.gameLevel = level
        },
        setSize: (state, {payload})=>{
            state.gameSize = payload
        },
    }
})

export const {startGame, nextLevel, setLevel, setSize} = gameSlice.actions
export default gameSlice.reducer