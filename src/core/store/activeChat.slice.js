import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profile: {},
};

const activeChatSlice = createSlice({
  name: 'activeChat',
  initialState,
  reducers: {
    setActiveChatState: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {setActiveChatState} = activeChatSlice.actions;

export const getActiveChatState = (state) => state.activeChat.profile;

export default activeChatSlice.reducer;
