import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flippedCount: 0,
    canFlip: true,
    tiles: [],
    isComplete: false,
}

const tilesSlice = createSlice({
    name:'tiles',
    initialState,
    reducers:{
        setCanFlip: (state, {payload})=>{
            state.canFlip = payload
        },
        setTiles: (state, {payload})=>{
            state.tiles = payload
            state.flippedCount = 0
            state.canFlip = true
            state.isComplete = false
        },
        flipTile: (state, {payload})=>{
            const {row, col} = payload
            
            state.tiles[row][col].flipped = !state.tiles[row][col].flipped
        },
        addFlippedCount: state => {
            const flippedCount = state.flippedCount + 2
            
            state.flippedCount = flippedCount
            state.isComplete = flippedCount === state.tiles.reduce((accumulator, subArray) => accumulator + subArray.length, 0)
        }
    }
})

export const {setCanFlip, setTiles, flipTile, addFlippedCount} = tilesSlice.actions
export default tilesSlice.reducer