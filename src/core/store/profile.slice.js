import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  profileState: {},
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileInfo: (state, action) => {
      state.profileState = {...action.payload};
    },
    resetProfile: (state, action) => {
      return initialState;
    },
  },
});

export const {setProfileInfo, resetProfile} = profileSlice.actions;

export const getProfileState = (state) => state.profile.profileState;

export default profileSlice.reducer;
