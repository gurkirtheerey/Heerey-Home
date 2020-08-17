// import { INCREMENT_COUNT } from "../actionTypes";
// const initialState = 0;

// const initialSetup = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNT:
//       return state + 1;

//     default:
//       return state;
//   }
// };

// export default initialSetup;

import { combineReducers } from "redux";
import authReducer from "./auth";
const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
