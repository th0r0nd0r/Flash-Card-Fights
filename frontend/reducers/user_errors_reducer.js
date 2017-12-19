import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS
} from "../actions/course_actions";

const userErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default userErrorsReducer;
