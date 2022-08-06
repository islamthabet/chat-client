import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onCall: false,
};

const callSlice = createSlice({
  name: 'call',
  initialState,
  reducers: {
    startCall: (state) => {
      state.onCall = true;
    },
    endCall: (state) => {
      state.onCall = false;
    },
  },
});

export const { startCall, endCall } = callSlice.actions;

export const getCallState = (state) => state.call.onCall;

export default callSlice.reducer;
