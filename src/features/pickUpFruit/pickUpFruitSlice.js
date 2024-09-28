import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    animateClass:'',
    displayHurt:false,
}

const pickUpFruitSlice = createSlice({
    name:'pickUpFruit',
    initialState,
    reducers:{
        setDisplayHurt:(state, {payload})=>{
            state.displayHurt = payload
        },
        setAnimation:(state, {payload})=>{
            state.animateClass = payload
        }
    }
})

export const {setDisplayHurt, setAnimation} = pickUpFruitSlice.actions
export default pickUpFruitSlice.reducer