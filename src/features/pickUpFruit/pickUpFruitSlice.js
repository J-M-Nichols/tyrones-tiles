import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    animateClass:'',
    displayHurt:false,
    fruitIndex:0
}

const pickUpFruitSlice = createSlice({
    name:'pickUpFruit',
    initialState,
    reducers:{
        setDisplayHurt:(state, {payload})=>{
            state.displayHurt = payload
        },
        setAnimation:(state, {payload})=>{
            const {animateClass, fruitIndex} = payload
            state.animateClass = animateClass
            state.fruitIndex = fruitIndex
        }
    }
})

export const {setDisplayHurt, setAnimation} = pickUpFruitSlice.actions
export default pickUpFruitSlice.reducer