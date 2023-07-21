import React, { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FetchAllNotes, cleanUp, STATUS } from "../store/NotesSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
const Notes = () => {
  const dispatch = useDispatch();
  const { notes, status } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(FetchAllNotes());
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);
  return (
    <article className="w-full h-full dark:bg-black dark:text-white">
      {status === STATUS.LOADING ? (
        <Loading />
      ) : (
        <div className="w-full h-full lg:px-24 pt-4 py-4 overflow-x-scroll">
          <div className="w-full h-12 mb-4">
            <h1 className="font-barlow text-4xl text-center">Your Notes</h1>
          </div>
          <div className="w-full lg:h-[83%] h-[85%] overflow-x-scroll lg:p-4 p-2">
            <div className="w-full h-full grid lg:grid-cols-4 grid-cols-1 gap-x-8 lg:gap-y-12 gap-y-8">
              {notes &&
                notes.map((item, i) => (
                  <div className="w-full lg:h-64 h-80" key={i}>
                    <NoteCard
                      title={item.title}
                      desc={item.desc}
                      tags={item.tags}
                      id={item._id}
                    />
                  </div>
                ))}
            </div>
          </div>
          <Link
            to="/add"
            className="w-[3.5rem] h-[3.5rem] rounded-full bg-text absolute bottom-4 right-8 flex items-center justify-center"
          >
            <IoAddOutline className="font-ph text-5xl" />
          </Link>
        </div>
      )}
    </article>
  );
};

export default Notes;
