import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flippedTileIndex: undefined,
    flippedType: -1
}

const flippedTileIndexSlice = createSlice({
    name:'tileTracker',
    initialState,
    reducers:{
        resetFlippedTileIndex: state=>{
            state.flippedTileIndex = undefined
            state.flippedType = -1
        },
        setFlippedTileIndex: (state, {payload})=>{
            const {index, type} = payload
            state.flippedTileIndex = index
            state.flippedType = type
        }
    }
})

export const {setFlippedTileIndex, resetFlippedTileIndex} = flippedTileIndexSlice.actions
export default flippedTileIndexSlice.reducer