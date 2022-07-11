import {configureStore} from '@reduxjs/toolkit';
import dialogueSlice from './dialogue.slice';
import loadingSlice from './loading.slice';
import profileSlice from './profile.slice';

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    dialogue: dialogueSlice,
    profile: profileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
