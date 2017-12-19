import * as APIUtil from "../util/Quiz_api_util";

export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const RECEIVE_QUIZ = "RECEIVE_QUIZ";
export const RECEIVE_QUIZ_ERRORS = "RECEIVE_QUIZ_ERRORS";

export const receiveQuizzes = quizzes => ({
  type: RECEIVE_QUIZZES,
  quizzes
});

export const receiveQuiz = quiz => ({
  type: RECEIVE_QUIZ,
  quiz
});

export const receiveErrors = errors => ({
  type: RECEIVE_QUIZ_ERRORS,
  errors
});


export const getQuizzes = filters => dispatch =>
  APIUtil.fetchQuizzes(filters).then(
    quizzes => dispatch(receiveQuizzes(quizzes)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getQuiz = id => dispatch => 
  APIUtil.fetchQuiz(id).then(
    quiz => dispatch(receiveQuiz(quiz)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createQuiz = quiz => dispatch =>
  APIUtil.createQuiz(quiz).then(
    newQuiz => {
      dispatch(receiveQuiz(newQuiz));
      if (newQuiz) {
        return newQuiz;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateQuiz = quiz => dispatch =>
  APIUtil.updateQuiz(quiz)
    .then(updated => dispatch(receiveQuiz(updated)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const deleteQuiz = id => dispatch => APIUtil.deleteQuiz(id);
