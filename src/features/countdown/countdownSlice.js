import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
    name: 'time',
    initialState: [],
    reducers: {
        setTime(state){

        }
    }
})

export const { setTime } = countdownSlice.actions;

export default countdownSlice.reducer;
