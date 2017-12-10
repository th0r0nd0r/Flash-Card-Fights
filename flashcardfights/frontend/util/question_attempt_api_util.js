export const fetchQuestionAttempt = (questionId, id) =>
  $.ajax({
    method: "GET",
    url: `api/questions/${questionId}/question_attempts/${id}`,
    err: () => console.log("Error fetching quiz")
  });

export const createQuestionAttempt = (questionId, attempt) =>
  $.ajax({
    method: "POST",
    url: `api/questions/${questionId}//question_attempts`,
    data: attempt
  });

export const deleteQuestionAttempt = (questionId, id) =>
  $.ajax({
    method: "DELETE",
    url: `api/questions/${questionId}/question_attempts/${id}`
  });
