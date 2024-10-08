import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAnimation, setDisplayHurt } from "./pickUpFruitSlice";

export const activateAnimation = createAsyncThunk(
    'pickUpFruit/activateAnimation',
    async ({animationDuration, fruitIndex}, {getState, dispatch}) =>{
        const state = getState()
        const {animateClass} = state.pickUpFruit

        if(animateClass===''){
            dispatch(setAnimation({
                animateClass:'animate', 
                fruitIndex
            }))

            setTimeout(()=>{
                dispatch(setAnimation({
                    animateClass:'',
                    fruitIndex
                }))
            }, animationDuration*1000)
        }
    }
)

export const activateDisplayHurt = createAsyncThunk(
    'pickUpFruit/activateDisplayHurt',
    async (_, {getState, dispatch}) => {
        const state = getState()
        const {displayHurt, animateClass} = state.pickUpFruit

        if(!displayHurt && animateClass===''){
            dispatch(setDisplayHurt(true))

            setTimeout(()=>{
                dispatch(setDisplayHurt(false))
            },500)
        }
    }
)