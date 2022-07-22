import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  section: 1,
};

const activeSlideSlice = createSlice({
  name: 'activeSlide',
  initialState,
  reducers: {
    setActiveSlideState: (state, action) => {
      state.section = action.payload;
    },
  },
});

export const { setActiveSlideState } = activeSlideSlice.actions;

export const getActiveSlideState = (state) => state.activeSlide.section;

export default activeSlideSlice.reducer;
