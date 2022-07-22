import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { setLoadingState } = loadingSlice.actions;

export const getLoadingState = (state) => state.loading.state;

export default loadingSlice.reducer;
