import { RECEIVE_QUESTION, RECEIVE_QUESTIONS } from "../actions/question_actions";
import merge from "lodash/merge";

const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    case RECEIVE_QUESTION:
      const newQuestion = { [action.question.id]: action.question };
      return merge({}, state, newQuestion);
    default:
      return state;
  }
};

export default questionsReducer;
