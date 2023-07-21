import React, { useEffect, useState } from "react";
import { RiLinkedinLine, RiGithubLine } from "react-icons/ri";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [theme, Settheme] = useState("light");
  const { isAuthorized, user } = useSelector((state) => state.user);
  useEffect(() => {
    const HandleTheme = () => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
    HandleTheme();
  }, [theme]);
  const HandleClick = () => {
    theme === "light" ? Settheme("dark") : Settheme("light");
  };
  return (
    <header className="w-full h-[70px] border-b-2 border-black shadow-lg bg-light dark:bg-dark dark:text-white dark:shadow-white">
      <div className="w-full h-full flex items-center justify-between lg:px-24 px-4">
        <Link to="/" className=" font-ph text-3xl">
          NotesBook
        </Link>
        <div className=" text-lg flex items-center lg:gap-2 gap-1 font-roboto">
          <button className="w-8 h-8 border-2 border-black rounded-lg flex items-center justify-center bg-dark  text-white dark:bg-white dark:text-black ">
            <RiLinkedinLine />
          </button>
          <button className="w-8 h-8 border-2 border-black  rounded-lg flex items-center justify-center bg-dark  text-white dark:bg-white dark:text-black ">
            <RiGithubLine />
          </button>
          {isAuthorized && (
            <Link
              to="/account"
              className="flex items-center border-2 border-black rounded-lg lg:px-4 px-2  w-auto h-auto dark:bg-white bg-black text-white dark:text-black"
            >
              {user.name}
            </Link>
          )}
          <button
            className="flex max-w-max items-center border-2 border-black rounded-lg bg-dark  text-white dark:bg-white dark:text-black"
            onClick={() => {
              HandleClick();
            }}
          >
            <span className="lg:px-4 px-2">
              {theme === "light" ? "dark" : "light"}
            </span>{" "}
            {theme === "light" ? (
              <IoMoonOutline className="mr-2" />
            ) : (
              <IoSunnyOutline className="mr-2" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
