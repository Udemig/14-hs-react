import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteValues } from "../../types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = {
  notes: [],
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteValues>) => {
      const newNote: Note = {
        id: v4(),
        ...action.payload,
      };

      state.notes.push(newNote);
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      const index = state.notes.findIndex((note) => note.id === action.payload);

      state.notes.splice(index, 1);
    },

    updateNote: (
      state,
      action: PayloadAction<{ id: string; values: NoteValues }>
    ) => {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      state.notes[index] = { id: action.payload.id, ...action.payload.values };
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
