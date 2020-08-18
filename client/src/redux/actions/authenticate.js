import {
  REGISTER_IN_PROGRESS,
  REGISTER_COMPLETED,
  REGISTER_FAILED,
  LOGIN_IN_PROGRESS,
  LOGIN_FAILED,
  LOGIN_COMPLETED,
  USER_LOGGED_IN,
  USER_NOT_LOGGED_IN,
  GOAL_FAILED,
  GOAL_SAVED,
  GOAL_IN_PROGRESS,
} from "../actionTypes";
import api from "../../API";
import { toast } from "react-toastify";

// REGISTER USERS

export const registerInProgress = () => {
  return {
    type: REGISTER_IN_PROGRESS,
  };
};

export const registerFailed = () => {
  toast.error("Credentials must meet expectations...", {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  });
  return {
    type: REGISTER_FAILED,
    payload: { message: "Credentials must meet expectations..." },
  };
};

export const registerCompleted = (email, username) => {
  toast.success("Welcome!");
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
  toast.error("Invalid Credentials...");
  return {
    type: LOGIN_FAILED,
    payload: { message: "Invalid username/password combination..." },
  };
};

export const loginCompleted = (email, username, goal) => {
  toast.success("Logged in!", {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  });
  return {
    type: LOGIN_COMPLETED,
    payload: { email, username, goal },
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
        const { email, username, goal } = res.data.user;
        localStorage.setItem("token", token);
        dispatch(loginCompleted(email, username, goal));
      }
    } catch (e) {
      dispatch(loginFailed());
    }
  };
};

export const userLoggedIn = (token, email, username, goal) => {
  // localStorage.setItem("token", token);
  return {
    type: USER_LOGGED_IN,
    payload: { email, username, goal },
  };
};

export const userNotLoggedIn = () => {
  localStorage.removeItem("token");
  return {
    type: USER_NOT_LOGGED_IN,
  };
};

export const logoutUser = () => {
  localStorage.removeItem("token");
  toast.success("Successfully logged out!", {
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
  });
  return {
    type: USER_NOT_LOGGED_IN,
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    try {
      let token = localStorage.getItem("token");
      if (token) {
        localStorage.setItem("token", token);
      }
      const res = await api.get("/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data) {
        let { email, username, goal } = res.data;
        if (res.status === 200) {
          dispatch(userLoggedIn(token, email, username, goal));
        }
      }
    } catch (e) {
      dispatch(userNotLoggedIn());
    }
  };
};

export const goalFailed = () => {
  toast.error("There was an error saving the user's goal...", {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  });
  return {
    type: GOAL_FAILED,
  };
};

export const goalSaved = (goal) => {
  toast.success("Goal Saved!", {
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
  });
  return {
    type: GOAL_SAVED,
    payload: { goal },
  };
};

export const goalInProgress = () => {
  return {
    type: GOAL_IN_PROGRESS,
  };
};

export const submitGoal = (goal) => {
  return async (dispatch) => {
    try {
      dispatch(goalInProgress());
      let token = localStorage.getItem("token");
      if (token) {
        await api.post(
          "/exercises/setgoal",
          { goal },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(goalSaved(goal));
      }
    } catch (e) {
      dispatch(goalFailed());
    }
  };
};
