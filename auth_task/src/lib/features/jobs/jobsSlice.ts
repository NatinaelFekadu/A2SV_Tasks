import { createSlice } from "@reduxjs/toolkit";
import { Job } from "./types";

interface JobsState {
  jobs: Job[];
  dataFetched: boolean;
  bookmarkedJobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
  dataFetched: false,
  bookmarkedJobs: [],

};
export const jobsSlice = createSlice({
  name: "jobs",
  reducerPath: "jobs",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.dataFetched = true;
    },
    addToBookmarkedJobs: (state, action) => {
      state.bookmarkedJobs.push(action.payload);
    },
  },
});

export const { setJobs, addToBookmarkedJobs } = jobsSlice.actions;

