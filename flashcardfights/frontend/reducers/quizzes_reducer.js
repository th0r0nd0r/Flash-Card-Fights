import { combineReducers } from "redux";
import questions from "./questions_reducer";
import quizAttempts from './quiz_attempts_reducer';

import { RECEIVE_QUIZ, RECEIVE_QUIZZES } from "../actions/quiz_actions";
import merge from "lodash/merge";

const quizzesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUIZZES:
      return action.quizzes;
    case RECEIVE_QUIZ:
      const newQuiz = { [action.quiz.id]: action.quiz };
      return merge({}, state, newQuiz);
    default:
      return state;
  }
};

export default combineReducers({
  quizzes: quizzesReducer,
  quizAttempts,
  questions
});