import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    timers: [],
  },
  reducers: {
    addTime: (state, payload) => {
      state.timers.push({ date: new Date(), seconds: Number(payload.payload) });
    },
    startTimer: (state) => {
      state.timers = state.timers.map((item) => {
        return {
          ...item,
          seconds: item.seconds - 0.005,
        };
      });
      state.timers = state.timers.filter((item) => {
        return item.seconds > 0;
      });
    },
  },
});

export const { addTime, startTimer } = timerSlice.actions;

export default timerSlice.reducer;
