import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { cleanUpNote, deleteNote, readNote, STATUS } from "../store/NoteSlice";
import Loading from "./Loading";
const ReadNote = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(readNote(id));
    return () => {
      dispatch(cleanUpNote({ note: {}, status: STATUS.IDLE }));
    };
  }, [dispatch, id]);
  const HandleClick = () => {
    dispatch(deleteNote(id));
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  const { note, status } = useSelector((state) => state.note);
  return status === STATUS.LOADING || status === STATUS.IDLE ? (
    <Loading />
  ) : (
    <article className="w-full lg:h-[90%] h-[92%] dark:bg-black">
      <div className="w-full h-full flex items-center justify-center lg:px-24 px-4 py-8 gap-20">
        <div className="lg:w-2/3 w-full h-full border-2 lg:px-16 px-4 py-8 rounded-xl dark:bg-dark dark:text-white relative">
          <button className="absolute right-8 top-8 w-12 h-12 flex items-center justify-center rounded-full border-black border-2 bg-text">
            <AiOutlineDelete
              className="text-2xl"
              onClick={() => {
                HandleClick();
              }}
            />
          </button>
          <div className="w-full font-ph text-5xl">
            <h1 className="text-center">Note</h1>
          </div>
          <div className="py-8 w-full font-barlow lg:text-xl text-lg flex items-center flex-col gap-4 dark:text-black">
            <div className="w-full h-12 flex items-center dark:text-white">
              <h1 className="w-1/5 h-full flex items-center justify-start">
                Title:
              </h1>
              <p className="font-ph text-xl w-full ">{note.title}</p>
            </div>
            <div className="w-full flex items-start justify-center dark:text-white">
              <h1 className="w-1/5 flex items-center justify-start">Desc:</h1>
              <p className="font-ph text-xl w-full text-justify lg:max-h-72 max-h-96 overflow-x-scroll">
                {note.desc}
              </p>
            </div>
            <div className="w-full h-12 flex items-center dark:text-white">
              <h1 className="w-1/5 h-full flex items-center justify-start dark:text-white">
                Tags:
              </h1>
              <p className="font-ph text-xl dark:text-white">
                {note.tags.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-md border-2 dark:border-white border-black font-ph mr-2"
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full lg:block hidden rounded-xl overflow-hidden">
          <img src="./idea.png" className="w-full h-full object-cover" alt="" />
        </div>
      </div>
    </article>
  );
};

export default ReadNote;
