import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFlippedCount, flipTile, setCanFlip } from "./tilesSlice";
import { resetFlippedTileIndex, setFlippedTileIndex } from "./flippedTileIndexSlice";
import { incrementTurn } from "../turnSlice";
import { activateAnimation, activateDisplayHurt } from "../pickUpFruit/pickUpFruitActions";

export const handleMove = createAsyncThunk(
    'tiles/handleMove',
    async (payload, {getState, dispatch}) => {
        const state = getState()
        const {canFlip} = state.tiles
        const {flippedTileIndex, flippedType} = state.flippedTileIndex
        const {index, flipped, type, animationDuration} = payload

        // check if we are clicking a tile that is already flipped
        if(flipped || !canFlip || flippedTileIndex===index) return

        // always flip the tile
        dispatch(flipTile(index))
        dispatch(incrementTurn())

        // we have not flipped a tile
        if(!flippedTileIndex){
            dispatch(setFlippedTileIndex({
                index:index,
                type:type
            }))
        } 
        // we have flipped a tile.
        //the types match, keep them and dispatch addFlippedCount
        else if(flippedType===type){ 
            dispatch(addFlippedCount())
            dispatch(resetFlippedTileIndex())
            dispatch(activateAnimation(animationDuration))
        }
        //the types do not match, turn off canFlip for 2 seconds then flip both
        else{
            dispatch(setCanFlip(false))
            dispatch(activateDisplayHurt())

            setTimeout(_=>{
                dispatch(setCanFlip(true))
                dispatch(flipTile(index))
                dispatch(flipTile(flippedTileIndex))

                dispatch(resetFlippedTileIndex())
            }, 2000)
        }
    }
)