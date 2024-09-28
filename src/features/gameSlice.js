import { createSlice } from "@reduxjs/toolkit"

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
            const level = state.level + 1
            state.gameLevel = level
            state.gameSize = (level%10)+2
        },
        setSize: (state, {payload})=>{
            state.gameSize = payload
        },
    }
})

export const {startGame, nextLevel, setSize} = gameSlice.actions
export default gameSlice.reducer