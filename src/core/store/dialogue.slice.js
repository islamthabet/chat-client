import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dialogueState: {
    show: false,
    type: '',
    title: '',
    content: '',
    onAccept: () => {
      return;
    },
    onReject: () => {
      return;
    },
    width: '80vw',
    height: '80vh',
  },
};

const dialogueSlice = createSlice({
  name: 'dialogue',
  initialState,
  reducers: {
    openDialogue: (state, action) => {
      state.dialogueState = { ...action.payload };
    },
    closeDialogue: (state, action) => {
      return initialState;
    },
  },
});

export const { openDialogue, closeDialogue } = dialogueSlice.actions;

export const getDialogueState = (state) => state.dialogue.dialogueState;

export default dialogueSlice.reducer;
