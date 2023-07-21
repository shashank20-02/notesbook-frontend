import axios from "axios";

export const UserInstance = axios.create({
  baseURL: "https://notesbook-server.onrender.com/v1/user",
});

export const NoteInstance = axios.create({
  baseURL: "https://notesbook-server.onrender.com/v1/note",
});
