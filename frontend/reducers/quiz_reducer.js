
import { RECEIVE_QUIZ, RECEIVE_QUIZZES } from "../actions/quiz_actions";
import merge from "lodash/merge";

const quizReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_QUIZ:
      const newQuiz = { [action.quiz.id]: action.quiz };
      return merge({}, state, newQuiz);
    default:
      return state;
  }
};

export default quizReducer;
