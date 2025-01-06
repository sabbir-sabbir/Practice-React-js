import {createSlice} from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name: "counter",
    initialState: {value:0},
    reducers: {

        increment: (state)=> {
            state.value++;
        },
        decrement: (state)=> {
            state.value--;
        },
        incrementByamount: (state, action)=> {
            state.value *= action.payload 
        }
    }
})

export const { increment, decrement, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;