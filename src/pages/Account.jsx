import React from "react";
import rocket from "../assets/rocket.svg";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../store/UserSlice";
const Account = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <article className="w-full h-[92%] dark:bg-black dark:text-white">
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-3/5 w-full lg:h-3/4 h-full border-2 rounded-lg shadow-2xl bg-light dark:bg-dark border-black lg:px-8 py-4">
          <div className="w-full h-full flex items-center lg:flex-row flex-col gap-8">
            <div className=" lg:w-2/5 w-full h-full  flex items-center flex-col gap-4 lg:-order-last order-last">
              <img
                src={rocket}
                className="lg:w-2/3 w-1/3 h-auto object-contain lg:py-8 py-4 hidden lg:block"
                alt=""
              />
              <div className="w-2/3 flex flex-col items-center gap-4 dark:text-black">
                <Link
                  to="/update"
                  className="w-full h-12 flex items-center justify-center border-2 border-text bg-text transition-colors duration-200 hover:bg-transparent dark:hover:text-white"
                >
                  Update User
                </Link>
                <button
                  onClick={() => {
                    dispatch(logoutUser());
                    setTimeout(() => {
                      navigate("/");
                    }, 250);
                  }}
                  className="w-full h-12 border-2 border-text bg-text transition-colors duration-200 hover:bg-transparent dark:hover:text-white"
                >
                  Logout User
                </button>
              </div>
            </div>
            <div className="lg:w-3/5 w-full h-full lg:py-8 lg:px-24 py-8">
              <div className="w-full h-8 text-center">
                <h1 className="font-ph text-4xl">Your Account</h1>
              </div>
              <div className="w-full py-8 px-4 flex items-center gap-4 flex-col">
                <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center">
                  {user.avatar.url === "sample url" ? (
                    <AiOutlineUser className="text-5xl font-ph" />
                  ) : (
                    <img
                      src=""
                      className="w-full h-full object-cover"
                      alt="/"
                    />
                  )}
                </div>
                <div className="w-full font-barlow text-2xl">
                  <h1>
                    Name: <span className="font-ph">{user.name}</span>
                  </h1>
                </div>
                <div className="w-full font-barlow text-2xl">
                  <h1>
                    Email: <span className="font-ph">{user.email}</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Account;
