import { configureStore } from '@reduxjs/toolkit';
import dialogueSlice from './dialogue.slice';
import loadingSlice from './loading.slice';
import profileSlice from './profile.slice';
import activeSlideSlice from './activeSlide.slice';
import activeChatSlice from './activeChat.slice';
import roomSlice from './room.slice';
import callSlice from './call.slice';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    dialogue: dialogueSlice,
    profile: profileSlice,
    activeSlide: activeSlideSlice,
    activeChat: activeChatSlice,
    room: roomSlice,
    call: callSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
