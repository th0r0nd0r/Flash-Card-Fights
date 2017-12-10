import * as APIUtil from "../util/QuizAttempt_api_util";

export const RECEIVE_QUIZ_ATTEMPTS = "RECEIVE_QUIZ_ATTEMPTS";
export const RECEIVE_QUIZ_ATTEMPT = "RECEIVE_QUIZ_ATTEMPT";
export const RECEIVE_QUIZ_ATTEMPT_ERRORS = "RECEIVE_QUIZ_ATTEMPT_ERRORS";

export const receiveQuizAttempts = quizAttempts => ({
  type: RECEIVE_QUIZ_ATTEMPTS,
  quizAttempts
});

export const receiveQuizAttempt = quizAttempt => ({
  type: RECEIVE_QUIZ_ATTEMPT,
  quizAttempt
});

export const receiveErrors = errors => ({
  type: RECEIVE_QUIZ_ATTEMPT_ERRORS,
  errors
});

export const getQuizAttempts = filters => dispatch =>
  APIUtil.fetchQuizAttempts(filters).then(
    quizs => dispatch(receiveQuizAttempts(quizzes)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getQuizAttempt = id => dispatch =>
  APIUtil.fetchQuizAttempt(id).then(
    quiz => dispatch(receiveQuizAttempt(quiz)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createQuizAttempt = quizId => dispatch =>
  APIUtil.createQuizAttempt(quizId).then(
    newQuiz => {
      dispatch(receiveQuizAttempt(newQuiz));
      if (newQuiz) {
        return newQuiz;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const deleteQuizAttempt = id => dispatch => APIUtil.deletequizAttempt(id);
