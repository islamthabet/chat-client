import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rooms: [],
};

const roomsSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomsState: (state, action) => {
      state.rooms = [...action.payload];
    },
    resetRoomsState: () => initialState,
  },
});

export const { setRoomsState, resetRoomsState } = roomsSlice.actions;

export const getRoomsState = (state) => state.room.rooms;

export default roomsSlice.reducer;
