import { RECEIVE_QUIZ, RECEIVE_QUIZ_ERRORS } from "../actions/quiz_actions";

const QuizErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUIZ_ERRORS:
      if (action.errors) {
        return action.errors;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default QuizErrorsReducer;
