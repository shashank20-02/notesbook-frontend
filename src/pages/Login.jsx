import React, { useState } from "react";
import rocket from "../assets/rocket.svg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/UserSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    setTimeout(() => {
      navigate("/");
    }, 250);
  };
  return (
    <article className="w-full h-[92%] lg:px-0 lg:py-0 py-8 px-4 dark:bg-black dark:text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-3/5 w-full lg:h-3/4 h-full border-2 rounded-lg shadow-2xl bg-light dark:bg-dark border-black lg:px-8 py-4">
          <div className="w-full h-full flex items-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-2/5 w-full lg:h-full h-1/5 flex items-center flex-col">
              <img
                src={rocket}
                className="lg:w-2/3 w-1/3 h-auto object-contain lg:py-8 py-4"
                alt=""
              />
              <h1 className=" font-ph text-[25px] lg:mt-8 mt-2">
                Don't Have an Account <br />
                <Link className="flex items-center justify-center" to="/signup">
                  <span className="text-text">Register Here</span>
                </Link>
              </h1>
            </div>
            <div className="lg:w-3/5 w-full h-4/5 lg:py-8 py-24">
              <h1 className="w-full text-center font-ph text-4xl">
                Login to NoteBook
              </h1>
              <form
                className="w-full h-full px-4 flex items-start flex-col lg:gap-8 gap-4 lg:mt-12 mt-8  dark:text-black"
                onSubmit={(e) => {
                  HandleSubmit(e);
                }}
              >
                <div className="w-full h-12 flex items-center relative">
                  <div className=" h-full flex items-center justify-start font-barlow text-lg absolute">
                    <span className="px-4 flex items-center">
                      <AiOutlineMail className="mr-2" /> Email
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="w-full h-full pl-32 pr-4 focus:outline-none font-ph text-lg rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full h-12 flex items-center relative">
                  <div className=" h-full flex items-center justify-start font-barlow text-lg absolute">
                    <span className="px-4 flex items-center">
                      <AiOutlineKey className="mr-2" /> Password
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="w-full h-full pl-32 pr-4 focus:outline-none font-ph text-lg rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full h-12 flex items-center justify-center lg:mt-12 mt-4 dark:text-white text-black">
                  <button className="w-2/5 h-full bg-text border-text border-2 transition-colors duration-200 hover:bg-transparent font-ph text-xl">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Login;
