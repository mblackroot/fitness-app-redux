import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workouts: 0,
  kcal: 0,
  minutes: 0,
  completedExercises: [],
};

export const counterSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    increment: (state) => {
      state.workouts += 1;
      state.kcal += 2.6;
      state.minutes += 6;
    },
    complete: (state, payload) => {
      state.completedExercises.push(payload.payload.name);
    },
    reset: (state) => {
      state.workouts = 0;
      state.kcal = 0;
      state.minutes = 0;
      state.completedExercises = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount, reset, complete } =
  counterSlice.actions;

export default counterSlice.reducer;
