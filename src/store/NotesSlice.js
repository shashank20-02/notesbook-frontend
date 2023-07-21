import { createSlice } from "@reduxjs/toolkit";
import { NoteInstance } from "../utils/Axios";
import { error } from "../utils/Toasts";
export const STATUS = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const initialState = {
  notes: [],
  status: STATUS.IDLE,
};

const NotesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes(state, action) {
      state.notes = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    cleanUp(state, action) {
      state.notes = [];
      state.status = STATUS.IDLE;
    },
  },
});

export default NotesSlice.reducer;
export const { setNotes, setStatus, cleanUp } = NotesSlice.actions;

export function FetchAllNotes() {
  return async function fetchNotes(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await NoteInstance.get("/get", {
        withCredentials: true,
      });
      dispatch(setNotes(response.data.notes));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (err) {
      console.log(err);
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
    }
  };
}
