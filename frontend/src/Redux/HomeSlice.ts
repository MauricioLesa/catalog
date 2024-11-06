import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:0};
export const homeSlice = createSlice({
    name: 'asd',
    initialState,
    reducers: {
        increment(state) {
          state.value++
        },
        decrement(state) {
          state.value--
        },
    },
})