import { RECEIVE_QUIZ_ATTEMPT, RECEIVE_QUIZ_ATTEMPTS } from "../actions/quiz_actions";
import merge from "lodash/merge";

const quizAttemptsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUIZ_ATTEMPTS:
      return action.quizzes;
    case RECEIVE_QUIZ_ATTEMPT:
      const newQuizAttempt = { [action.quiz.id]: action.quiz };
      return merge({}, state, newQuizAttempt);
    default:
      return state;
  }
};

export default quizAttemptsReducer;
