import { combineReducers } from "redux";
import questionsReducer from "./questions_reducer";
import quizAttemptsReducer from './quiz_attempts_reducer';
import quiz from "./quiz_reducer";
// import challenge from "./challenge_reducer";

import { RECEIVE_QUIZ, RECEIVE_QUIZZES } from "../actions/quiz_actions";
import merge from "lodash/merge";

const quizzesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case RECEIVE_QUIZ:
      console.log(action);
      const newQuiz = { [action.quiz.id]: action.quiz };
      return merge({}, state, newQuiz);
    default:
      return state;
  }
};

export default combineReducers({
  quizzes: quizzesReducer,
  quizAttempts: quizAttemptsReducer,
  questions: questionsReducer,
  // challenge
});