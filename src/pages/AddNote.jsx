import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../store/NoteSlice";
const AddNote = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    const tag = tags.split(",");
    dispatch(addNote(title, desc, tag));
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 1500);
  };
  return (
    <article className="w-full lg:h-[90%] h-[92%] dark:bg-black">
      <div className="w-full h-full flex items-center justify-center lg:px-24 px-4 py-8 gap-20">
        <div className="lg:w-2/3 w-full h-full border-2 lg:px-16 px-4 py-8 rounded-xl dark:bg-dark dark:text-white">
          <div className="w-full font-ph text-5xl">
            <h1 className="text-center">Add Note</h1>
          </div>
          <form
            className="py-8 w-full font-barlow lg:text-xl text-lg flex items-center flex-col gap-4"
            onSubmit={(e) => {
              HandleSubmit(e);
            }}
          >
            <div className="w-full h-12 flex items-center">
              <h1 className="w-1/5 h-full flex items-center justify-start">
                Title:
              </h1>
              <input
                className="w-4/5 px-8 font-ph h-full focus:outline-text border-2 rounded-lg"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="w-full flex items-start justify-center">
              <h1 className="w-1/5 flex items-center justify-start">Desc:</h1>
              <textarea
                name="desc"
                className="w-4/5 focus:outline-text font-ph px-8 py-2 border-2 rounded-lg"
                rows="5"
                value={desc}
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="w-full h-12 flex items-center">
              <h1 className="w-1/5 h-full flex items-center justify-start">
                Tags:
              </h1>
              <input
                className="w-4/5 px-8 font-ph h-full focus:outline-text border-2 rounded-lg"
                type="text"
                value={tags}
                onChange={(e) => {
                  setTags(e.target.value);
                }}
              />
            </div>
            <div className="w-full h-12 flex items-center justify-center mt-8">
              <button className="w-1/3 h-full border-2 dark:text-black dark:hover:text-white border-text transition-colors duration-200 bg-text hover:bg-transparent">
                Add Note
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3 h-full lg:block hidden rounded-xl overflow-hidden">
          <img src="/idea.png" className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </article>
  );
};

export default AddNote;
