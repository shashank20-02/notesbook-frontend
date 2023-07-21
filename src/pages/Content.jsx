import { Link } from "react-router-dom";
const Content = () => {
  return (
    <article className="w-full h-[91%] overflow-hidden">
      <div className="w-full h-full lg:px-24 px-4 py-8 lg:py-12 dark:bg-black dark:text-white">
        <div className="w-full h-full lg:grid grid-cols-3 gap-2">
          <div className="lg:col-span-2 w-full h-full">
            <div className="w-full h-full lg:pl-32 lg:pr-28 lg:py-16 flex flex-col gap-4 justify-center">
              <h1 className="font-barlow text-4xl font-medium">
                A Simple NoteTaking React App
              </h1>
              <p className="font-barlow text-2xl">
                Certain emotions just take you to the notes - being furious,
                heroic, sad, erotic, when rain comes.
              </p>
              <p className="font-ph text-xl">~Jeff Buckley</p>
              <div className="w-full h-12 flex items-center gap-4 font-ph text-xl">
                <Link
                  to="/login"
                  className="h-full px-12 py-2 border-2 bg-text border-text transition duration-200 hover:bg-transparent"
                >
                  Login!
                </Link>
                <Link
                  to="/signup"
                  className="h-full px-12 py-2 border-2 bg-text border-text transition duration-200 hover:bg-transparent"
                >
                  Sign Up!
                </Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden lg:block hidden">
            <img
              src="/idea.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Content;
