export const fetchQuizAttempt = (quizId, id) =>
  $.ajax({
    method: "GET",
    url: `api/quizzes/${quizId}/quiz_attempts/${id}`,
    err: () => console.log("Error fetching quiz")
  });

export const createQuizAttempt = (quizId, attempt) =>
  $.ajax({
    method: "POST",
    url: `api/quizzes/${quizId}/quiz_attempts`,
    data: attempt
  });

export const deleteQuizAttempt = (quizId, id) =>
  $.ajax({
    method: "DELETE",
    url: `api/quizzes/${quizId}/quiz_attempts/${id}`
  });
