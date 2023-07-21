import Routing1 from "./routes/Routing1";
import Routing2 from "./routes/Routing2";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./pages/Loading";
import { cleanUp, FetchUser, STATUS } from "./store/UserSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUser());
    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);
  const { status, isAuthorized } = useSelector((state) => state.user);
  return status === STATUS.LOADING ? (
    <Loading />
  ) : (
    <div className="App">
      {isAuthorized === true ? <Routing2 /> : <Routing1 />}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
      />
    </div>
  );
}

export default App;
