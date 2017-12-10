export const fetchQuestionAttempt = (questionId, id) =>
  $.ajax({
    method: "GET",
    url: `api/questions/${questionId}/question_attempts/${id}`,
    err: () => console.log("Error fetching quiz")
  });

export const createQuestionAttempt = question_attempt =>
  $.ajax({
    method: "POST",
    url: `api/questions/${question_attempt.questionId}/question_attempts`,
    data: {question_attempt}
  });

export const deleteQuestionAttempt = (questionId, id) =>
  $.ajax({
    method: "DELETE",
    url: `api/questions/${questionId}/question_attempts/${id}`
  });
