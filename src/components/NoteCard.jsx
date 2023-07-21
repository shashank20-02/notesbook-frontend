import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
const NoteCard = ({ title, desc, tags, id }) => {
  const options = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };
  const colors = {
    1: "bg-one",
    2: "bg-two",
    3: "bg-three",
    4: "bg-four",
    5: "bg-five",
    6: "bg-six",
  };
  const key1 = Math.floor(Math.random(1) * 6 + 1);
  return (
    <div className="w-full h-full shadow-xl rounded-2xl box-border text-black">
      <div className="w-full h-1/2 rounded-t-2xl box-border overflow-hidden">
        <img
          src={options[key1]}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div
        className={`w-full h-1/2 ${colors[key1]} rounded-b-2xl overflow-hidden px-6 py-4`}
      >
        <div className="w-full flex items-center justify-end">
          <Link to={`/read/${id}`} className="font-ph text-2xl w-2/3">
            <h1 className="">{title}</h1>
          </Link>
          <div className="font-ph text-xl w-1/3 flex justify-end items-center">
            <Link to={`/edit/${id}`} className="mr-2 font-ph text-xl">
              <AiOutlineEdit />
            </Link>
          </div>
        </div>
        <h1 className="font-ph text-xl truncate">{desc}</h1>
        <p className="font-ph text-md truncate flex items-center gap-2">
          {tags &&
            tags.map((item, i) => (
              <span className="border-2 border-black px-2 rounded-xl" key={i}>
                {item}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
};

export default NoteCard;
