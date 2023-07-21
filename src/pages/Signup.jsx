import React, { useState } from "react";
import rocket from "../assets/rocket.svg";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineKey, AiOutlineUser } from "react-icons/ai";
import { RegisterUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(RegisterUser(name, email, password, cpassword));
    navigate("/");
  };
  return (
    <article className="w-full h-[92%] lg:px-0 lg:py-0 py-8 px-4 dark:bg-black dark:text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-3/5 w-full lg:h-3/4 h-full border-2 rounded-lg shadow-2xl bg-light dark:bg-dark dark:text-white border-black py-4">
          <div className="w-full h-full flex items-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-2/5 w-full lg:h-full h-1/5 flex items-center flex-col">
              <img
                src={rocket}
                className="lg:w-2/3 w-1/3 h-auto object-contain lg:py-8 py-4"
                alt=""
              />
              <h1 className=" font-ph text-[25px] lg:mt-8 mt-2">
                Already Have an Account <br />
                <Link to="/login" className="flex items-center justify-center">
                  <span className="text-text">Login Here</span>
                </Link>
              </h1>
            </div>
            <div className="lg:w-3/5 w-full h-full lg:py-2 py-24">
              <h1 className="w-full text-center font-ph text-4xl">
                Register to NoteBook
              </h1>
              <form
                className="w-full h-full px-4 flex items-start flex-col lg:gap-4 gap-4 lg:mt-12 mt-8 dark:text-black"
                onSubmit={(e) => {
                  HandleSubmit(e);
                }}
              >
                <div className="w-full h-12 flex items-center relative">
                  <div className=" h-full flex items-center justify-start font-barlow text-lg absolute">
                    <span className="px-4 flex items-center">
                      <AiOutlineUser className="mr-2" /> Name
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <input
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      name="name"
                      className="w-full h-full pl-32 pr-4 focus:outline-none font-ph text-lg rounded-lg"
                    />
                  </div>
                </div>
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
                        setpassword(e.target.value);
                      }}
                      className="w-full h-full pl-32 pr-4 focus:outline-none font-ph text-lg rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full h-12 flex items-center relative">
                  <div className=" h-full flex items-center justify-start font-barlow text-lg absolute">
                    <span className="px-4 flex items-center">
                      <AiOutlineKey className="mr-2" /> C-Password
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <input
                      value={cpassword}
                      onChange={(e) => {
                        setcpassword(e.target.value);
                      }}
                      type="password"
                      name="password"
                      className="w-full h-full pl-36 pr-4 focus:outline-none font-ph text-lg rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full h-12 flex items-center justify-center lg:mt-8 mt-4 dark:text-white">
                  <button className="w-2/5 h-full bg-text border-text border-2 transition-colors duration-200 hover:bg-transparent font-ph text-xl">
                    Register
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

export default Signup;
