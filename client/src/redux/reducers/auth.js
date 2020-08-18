import {
  REGISTER_IN_PROGRESS,
  REGISTER_COMPLETED,
  REGISTER_FAILED,
  LOGIN_IN_PROGRESS,
  LOGIN_COMPLETED,
  LOGIN_FAILED,
  USER_LOGGED_IN,
  USER_NOT_LOGGED_IN,
  USER_LOGOUT,
  GOAL_IN_PROGRESS,
  GOAL_SAVED,
  GOAL_FAILED,
} from "../actionTypes";

const initialState = {
  user: {
    email: null,
    username: null,
    goal: null,
  },
  isLoggedIn: false,
  error: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_IN_PROGRESS:
      return { ...state, loading: true };

    case REGISTER_COMPLETED:
      return {
        ...state,
        user: {
          email: action.payload.email,
          username: action.payload.username,
        },
        isLoggedIn: true,
        loading: false,
      };

    case REGISTER_FAILED:
      return { ...state, error: action.payload.message, loading: false };

    case LOGIN_IN_PROGRESS:
      return { ...state, loading: true };

    case LOGIN_COMPLETED:
      return {
        ...state,
        user: {
          email: action.payload.email,
          username: action.payload.username,
          goal: action.payload.goal,
        },
        isLoggedIn: true,
        loading: false,
      };

    case LOGIN_FAILED:
      return { ...state, error: action.payload.message, loading: false };

    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          email: action.payload.email,
          username: action.payload.username,
          goal: action.payload.goal,
        },
      };

    case USER_NOT_LOGGED_IN:
      return { ...state, isLoggedIn: false };

    case USER_LOGOUT:
      return { ...state, isLoggedIn: false };

    case GOAL_IN_PROGRESS:
      return { ...state, loading: true };

    case GOAL_SAVED:
      return {
        ...state,
        loading: false,
        user: {
          email: state.user.email,
          username: state.user.username,
          goal: action.payload.goal,
        },
      };

    case GOAL_FAILED:
      return { ...state, loading: false, error: "Unable to save User's goal" };

    default:
      return state;
  }
};

export default authReducer;
