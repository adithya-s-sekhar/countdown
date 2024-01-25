import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
  name: 'countdown',
  initialState: { targetTime: 1706184000000, msUpdateSpeed: 1 },
  reducers: {
    setTargetTime(state, action) {
      state['targetTime'] = action.payload;
    },
    setMsUpdateSpeed(state, action){
      state['msUpdateSpeed'] = action.payload;
    }
  }
})

export const { setTargetTime, setMsUpdateSpeed } = countdownSlice.actions;

export default countdownSlice.reducer;
