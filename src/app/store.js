import { configureStore } from "@reduxjs/toolkit";
import countdownReducer from "../features/countdown/countdownSlice";

export const store = configureStore({
    reducer: {
        countdown: countdownReducer
    }
})
