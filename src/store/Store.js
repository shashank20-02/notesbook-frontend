import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import NotesReducer from "./NotesSlice";
import NoteReducer from "./NoteSlice";
const store = configureStore({
  reducer: {
    user: UserReducer,
    notes: NotesReducer,
    note: NoteReducer,
  },
});

export default store;
