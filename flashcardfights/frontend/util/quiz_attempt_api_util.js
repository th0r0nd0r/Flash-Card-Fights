export const fetchQuizAttempt = (quizId, id) =>
  $.ajax({
    method: "GET",
    url: `api/quizzes/${quizId}/quiz_attempts/${id}`,
    err: () => console.log("Error fetching quiz")
  });

export const createQuizAttempt = (quiz_attempt) =>
  $.ajax({
    method: "POST",
    url: `api/quizzes/${quiz_attempt.quizId}//quiz_attempts`,
    data: {quiz_attempt}
  });

export const deleteQuizAttempt = (quizId, id) =>
  $.ajax({
    method: "DELETE",
    url: `api/quizzes/${quizId}/quiz_attempts/${id}`
  });
