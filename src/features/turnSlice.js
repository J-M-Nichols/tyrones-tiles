import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    turn:0
}

const turnSlice = createSlice({
    name:'turnSlice',
    initialState,
    reducers:{
        incrementTurn:state=>{
            state.turn+=1
        },
        resetTurn:state=>{
            state.turn=0
        }
    }
})

export const {incrementTurn, resetTurn} = turnSlice.actions
export default turnSlice.reducer