import React, { useState } from "react";
import { useSelector } from "react-redux";
import rocket from "../assets/rocket.svg";
import { AiOutlineUser } from "react-icons/ai";
import { updateUser } from "../store/UserSlice";
import { useDispatch } from "react-redux";
const UpdateUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email));
  };
  return (
    <article className="w-full h-[92%] dark:bg-black dark:text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-3/5 w-full lg:h-3/4 h-full border-2 rounded-lg shadow-2xl bg-light dark:bg-dark border-black lg:px-8 py-4">
          <div className="w-full h-full flex items-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-2/5 w-full h-full  flex items-center justify-center flex-col gap-4 lg:-order-last order-last">
              <img
                src={rocket}
                className="lg:w-2/3 w-1/3 h-auto object-contain lg:py-8 py-4 hidden lg:block"
                alt=""
              />
            </div>
            <div className="lg:w-3/5 w-full h-full lg:py-8 lg:px-20 py-8">
              <div className="w-full h-8 text-center">
                <h1 className="font-ph text-4xl">Update Your Account</h1>
              </div>
              <form
                className="w-full py-8 px-4 flex items-center gap-4 flex-col dark:text-black"
                onSubmit={(e) => {
                  HandleSubmit(e);
                }}
              >
                <div className="w-24 h-24 border-2 dark:border-white border-black rounded-full flex items-center justify-center">
                  {user.avatar.url === "sample url" ? (
                    <AiOutlineUser className="text-5xl font-ph dark:text-white" />
                  ) : (
                    <img
                      src=""
                      className="w-full h-full object-cover"
                      alt="/"
                    />
                  )}
                </div>
                <div className="w-full h-12 font-barlow flex items-center gap-2 my-2 text-2xl">
                  <h1 className="text-xl w-1/5 dark:text-white">Name:</h1>
                  <input
                    type="text"
                    className="w-4/5 px-4 h-full font-ph border-2 border-black focus:outline-none rounded-md"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full h-12 font-barlow flex items-center gap-2 text-2xl">
                  <h1 className="text-xl w-1/5 dark:text-white">Email: </h1>
                  <input
                    type="text"
                    className="w-4/5 px-4 h-full font-ph border-2 border-black focus:outline-none rounded-md"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full h-12 font-barlow text-xl">
                  <button className="w-full h-full bg-text border-2 transition-colors duration-200 dark:hover:text-white hover:bg-transparent border-text">
                    Update!
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

export default UpdateUser;
