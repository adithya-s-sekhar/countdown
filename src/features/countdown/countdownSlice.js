import { createSlice } from "@reduxjs/toolkit";

const countdownSlice = createSlice({
  name: 'countdown',
  initialState: { targetTime: 1706866200000, msUpdateSpeed: 1, showMs: false },
  reducers: {
    setTargetTime(state, action) {
      state['targetTime'] = action.payload;
    },
    setMsUpdateSpeed(state, action){
      state['msUpdateSpeed'] = action.payload;
    },
    setShowMs(state, action){
      state['showMs'] = action.payload;
    }
  }
})

export const { setTargetTime, setMsUpdateSpeed, setShowMs } = countdownSlice.actions;

export default countdownSlice.reducer;
