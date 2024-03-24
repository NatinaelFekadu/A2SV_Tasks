//create jobsslice with initial state and reducers with setJobs
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Job } from "./types";
// Define a type for the slice state
interface JobsState {
  jobs: Job[];
  bookmarkedJobs: Job[];
}
// Define the initial state using that type
const initialState: JobsState = {
  jobs: [],
  bookmarkedJobs: [],
};
export const jobsSlice = createSlice({
  name: "jobs",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addToBookmarkedJobs: (state, action) => {
      state.bookmarkedJobs.push(action.payload);
    },
  },
});
