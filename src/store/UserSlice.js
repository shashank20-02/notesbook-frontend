import { createSlice } from "@reduxjs/toolkit";
import { UserInstance } from "../utils/Axios";
import { success, error } from "../utils/Toasts";
export const STATUS = Object.freeze({
  SUCCESS: "success",
  ERROR: "error",
  IDLE: "idle",
  LOADING: "loading",
});

const initialState = {
  user: {},
  status: STATUS.IDLE,
  isAuthorized: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setAuth(state, action) {
      state.isAuthorized = action.payload;
    },
    cleanUp(state, action) {
      state.user = {};
      state.status = STATUS.IDLE;
      state.isAuthorized = false;
    },
  },
});

export default UserSlice.reducer;
export const { setUser, setStatus, setAuth, cleanUp } = UserSlice.actions;

export function RegisterUser(name, email, password, confirmPassword) {
  return async function FetchRegisterUser(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await UserInstance.post(
        "/register",
        { name, email, password, confirmPassword },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
      dispatch(setStatus(STATUS.SUCCESS));
      success("User Registered Successfully!!");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      dispatch(setAuth(false));
      error(err.message);
    }
  };
}

export function loginUser(email, password) {
  return async function fetchLoginUser(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await UserInstance.post(
        "/login",
        { email, password },
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
      dispatch(setStatus(STATUS.SUCCESS));
      success("User Logged In Successfully!!");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      dispatch(setAuth(false));
      error(err.message);
    }
  };
}

export function FetchUser() {
  return async function fetchUserDetails(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await UserInstance.get("/me", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });
      dispatch(setUser(response.data.user));
      dispatch(setAuth(true));
      dispatch(setStatus(STATUS.SUCCESS));
      success("User Logged In Successfully!!");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      dispatch(setAuth(false));
    }
  };
}

export function updateUser(name, email) {
  return async function fetchUpdateUser(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await UserInstance.put(
        "/update",
        { name, email },
        {
          withCredentials: true,
        }
      );
      dispatch(setUser(response.data.user));
      dispatch(setStatus(STATUS.SUCCESS));
      success("User Updated Successfully");
    } catch (err) {
      dispatch(setStatus(false));
      error(err.message);
    }
  };
}

export function logoutUser() {
  return async function fetchLogoutUser(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      await UserInstance.delete("/logout", { withCredentials: true });
      dispatch(setUser({}));
      dispatch(setStatus(STATUS.SUCCESS));
      dispatch(setAuth(false));
      success("User Logged Out Successfully!");
    } catch (err) {
      dispatch(setStatus(STATUS.ERROR));
      error(err.message);
    }
  };
}
