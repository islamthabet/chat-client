import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileState: {
    name: '',
    email: '',
    DOB: '',
    gender: '',
    phone: '',
    country: '',
    image: '',
    role: '',
    sendRequest: [],
    pendingResponse: [],
    friends: [],
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileInfo: (state, action) => {
      state.profileState = { ...action.payload };
    },
    setFriendState: (state, action) => {
      state.profileState.friends = action.payload;
    },
    resetProfile: (state, action) => {
      return initialState;
    },
  },
});

export const { setProfileInfo, resetProfile, setFriendState } = profileSlice.actions;

export const getProfileState = (state) => state.profile.profileState;

export default profileSlice.reducer;
