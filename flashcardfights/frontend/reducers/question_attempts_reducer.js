import { RECEIVE_QUESTION_ATTEMPT, RECEIVE_QUESTION_ATTEMPTS } from "../actions/question_actions";
import merge from "lodash/merge";

const questionAttemptsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUESTION_ATTEMPTS:
      return action.questions;
    case RECEIVE_QUESTION_ATTEMPT:
      const newQuestionAttempt = { [action.question.id]: action.question };
      return merge({}, state, newQuestionAttempt);
    default:
      return state;
  }
};

export default questionAttemptsReducer;
