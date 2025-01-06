import {configureStore} from "@reduxjs/toolkit"      // configureStore imported

const store = configureStore({
    reducer: {
        // Define your reducers here
        // Example:
        // counter: counterReducer,
    },          // reducer is an empty object for now
})

export default store;  // store exported 
