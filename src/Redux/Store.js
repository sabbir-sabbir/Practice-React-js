import {configureStore} from "@reduxjs/toolkit"      // configureStore imported
import mycounter from "./CounterSlice"

const store = configureStore({
    reducer: {
        counter: mycounter
    },          // reducer is an empty object for now
})

export default store  // store exported 
