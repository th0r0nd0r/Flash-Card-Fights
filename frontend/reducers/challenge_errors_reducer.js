import {
  RECEIVE_CHALLENGE_ERRORS,
  RECEIVE_CHALLENGE
} from "../actions/course_actions";

const challengeErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CHALLENGE_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default challengeErrorsReducer;
