import { createSlice } from "@reduxjs/toolkit";
import { NoteInstance } from "../utils/Axios";
import { success, error } from "../utils/Toasts";
export const STATUS = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const initialState = {
  note: {},
  status: STATUS.IDLE,
};

const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNote(state, action) {
      state.note = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    cleanUpNote(state, action) {
      state.note = action.payload.note;
      state.status = action.payload.status;
    },
  },
});

export default NoteSlice.reducer;
export const { setNote, setStatus, cleanUpNote } = NoteSlice.actions;

export function readNote(id) {
  return async function fetchreadNote(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await NoteInstance.get(`/read/${id}`, {
        withCredentials: true,
      });
      dispatch(setNote(response.data.note));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
    }
  };
}

export function addNote(title, desc, tags) {
  return async function fetchAddNote(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await NoteInstance.post(
        "/create",
        { title, desc, tags },
        { withCredentials: true }
      );
      dispatch(setNote(response.data.note));
      dispatch(setStatus(STATUS.SUCCESS));
      success("Note Added Successfully");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
    }
  };
}

export function editNote(title, desc, tags, id) {
  return async function fetchEditNote(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await NoteInstance.put(
        `/update/${id}`,
        { title, desc, tags },
        { withCredentials: true }
      );
      dispatch(setNote(response.data.note));
      dispatch(setStatus(STATUS.SUCCESS));
      success("Note Edited Successfully!");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
    }
  };
}

export function deleteNote(id) {
  return async function fetchDeleteNote(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      await NoteInstance.delete(`/delete/${id}`, { withCredentials: true });
      dispatch(setStatus(STATUS.SUCCESS));
      success("Note deleted Successfully");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
      console.log(err);
    }
  };
}
