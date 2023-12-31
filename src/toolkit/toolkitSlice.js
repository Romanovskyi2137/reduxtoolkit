import { createSlice } from "@reduxjs/toolkit";



const slice = createSlice({
    name: "counter",
    initialState: {
        counter: 0,
        // counter2: 0,
        // ...
    },
    reducers: {
        increment (state, action) {
            state.counter += 1
        },
        decrement (state, action) {
            state.counter -= 1
        }
    }
});



export default slice.reducer;
export const { increment, decrement } = slice.actions