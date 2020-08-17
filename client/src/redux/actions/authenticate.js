import {
  REGISTER_IN_PROGRESS,
  REGISTER_COMPLETED,
  REGISTER_FAILED,
  LOGIN_IN_PROGRESS,
  LOGIN_FAILED,
  LOGIN_COMPLETED,
  USER_LOGGED_IN,
  USER_NOT_LOGGED_IN,
} from "../actionTypes";
import api from "../../API";

// REGISTER USERS

export const registerInProgress = () => {
  return {
    type: REGISTER_IN_PROGRESS,
  };
};

export const registerFailed = () => {
  return {
    type: REGISTER_FAILED,
    payload: { message: "Invalid username/password combination..." },
  };
};

export const registerCompleted = (email, username) => {
  return {
    type: REGISTER_COMPLETED,
    payload: { email, username },
  };
};

export const registerUser = (email, username, password) => {
  return async (dispatch) => {
    dispatch(registerInProgress());
    const user = { email, username, password };
    const res = await api.post("/register", user);
    if (res.status === 200) {
      const token = res.data.token;
      const { email, username } = res.data.user;
      localStorage.setItem("token", token);
      dispatch(registerCompleted(email, username));
    } else {
      dispatch(registerFailed());
    }
  };
};

// LOGIN USERS
export const loginInProgress = () => {
  return {
    type: LOGIN_IN_PROGRESS,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
    payload: { message: "Invalid username/password combination..." },
  };
};

export const loginCompleted = (email, username) => {
  return {
    type: LOGIN_COMPLETED,
    payload: { email, username },
  };
};

export const getUser = (username, password) => {
  return async (dispatch) => {
    try {
      dispatch(loginInProgress());
      const user = { username, password };
      const res = await api.post("/register/login", user);
      if (res.status === 200) {
        const token = res.data.token;
        const { email, username } = res.data.user;
        localStorage.setItem("token", token);
        dispatch(loginCompleted(email, username));
      }
    } catch (e) {
      dispatch(loginFailed());
    }
  };
};

export const userLoggedIn = (token) => {
  // localStorage.setItem("token", token);
  return {
    type: USER_LOGGED_IN,
  };
};

export const userNotLoggedIn = () => {
  localStorage.removeItem("token");
  return {
    type: USER_NOT_LOGGED_IN,
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
      }
      const res = await api.get("/exercises", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(res);
      if (res.status === 200) {
        dispatch(userLoggedIn(token));
      }
    } catch (e) {
      console.log(e);
      dispatch(userNotLoggedIn());
    }
  };
};
