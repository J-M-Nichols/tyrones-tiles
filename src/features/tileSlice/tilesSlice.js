import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    flippedCount: 0,
    canFlip: true,
    tiles: []
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
        },
        flipTile: (state, {payload})=>{
            const {row, col} = payload
            
            state.tiles[row][col].flipped = !state.tiles[row][col].flipped
        },
        addFlippedCount: state => {
            state.flippedCount += 2
        }
    }
})

export const {setCanFlip, setTiles, flipTile, addFlippedCount} = tilesSlice.actions
export default tilesSlice.reducer