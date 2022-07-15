import {configureStore} from '@reduxjs/toolkit';
import dialogueSlice from './dialogue.slice';
import loadingSlice from './loading.slice';
import profileSlice from './profile.slice';
import activeSlideSlice from './activeSlide.slice';
import activeChatSlice from './activeChat.slice';
import friendsSlice from './friends.slice';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    dialogue: dialogueSlice,
    profile: profileSlice,
    friends: friendsSlice,
    activeSlide: activeSlideSlice,
    activeChat: activeChatSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
