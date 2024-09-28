import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFlippedCount, flipTile, setCanFlip } from "./tilesSlice";
import { resetFlippedTileIndex, setFlippedTileIndex } from "./flippedTileIndexSlice";
import { incrementTurn } from "../turnSlice";

export const handleMove = createAsyncThunk(
    'tiles/handleMove',
    async (payload, {getState, dispatch}) => {
        const state = getState()
        const {tiles, canFlip} = state.tiles
        const {flippedTileIndex, flippedType} = state.flippedTileIndex
        const {index, flipped, type} = payload

        // check if we are clicking a tile that is already flipped
        if(flipped || !canFlip || flippedTileIndex===index) return

        console.log(`flippedTileIndex:${flippedTileIndex?`row${flippedTileIndex.row} col${flippedTileIndex.col}`:'empty'}, flippedType:${flippedType}`)
        console.log(`flipping at row:${index.row}, col:${index.col}`)

        // always flip the tile
        dispatch(flipTile(index))
        dispatch(incrementTurn())

        // we have not flipped a tile
        if(!flippedTileIndex){
            console.log('flipped first')
            dispatch(setFlippedTileIndex({
                index:index,
                type:type
            }))
        } 
        // we have flipped a tile.
        //the types match, keep them and dispatch addFlippedCount
        else if(flippedType===type){ 
            console.log('flipped matching tiles start')
            dispatch(addFlippedCount())
            dispatch(resetFlippedTileIndex())
            console.log('flipped matching tiles done')
        }
        //the types do not match, turn off canFlip for 3 seconds then flip both
        else{
            console.log('flipped mismatched tyles')
            dispatch(setCanFlip(false))

            setTimeout(_=>{
                console.log('flip both back')
                dispatch(setCanFlip(true))
                dispatch(flipTile(index))
                dispatch(flipTile(flippedTileIndex))

                dispatch(resetFlippedTileIndex())
            }, 3000)
        }
    }
)