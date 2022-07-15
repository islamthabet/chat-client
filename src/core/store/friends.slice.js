import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  friends: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriendState: (state, action) => {
      state.friends = [...action.payload];
    },
    resetFriends: () => initialState,
  },
});

export const {setFriendState, resetFriends} = friendsSlice.actions;

export const getFriendsState = (state) => state.friends.friends;

export default friendsSlice.reducer;
