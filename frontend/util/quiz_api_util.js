export const fetchQuizzes = data =>
  $.ajax({
    method: "GET",
    url: "api/quizzes",
    data,
    err: () => console.log("Error fetching quizzes")
  });

export const fetchQuiz = id =>
  $.ajax({
    method: "GET",
    url: `api/quizzes/${id}`,
    err: () => console.log("Error fetching quiz")
  });

export const createQuiz = quiz =>
  $.ajax({
    method: "POST",
    url: "api/quizzes",
    data: quiz
  });

export const updateQuiz = quiz =>
  $.ajax({
    method: "PATCH",
    url: `api/quizzes/${quiz.id}`,
    data: quiz
  });

export const deleteQuiz = id =>
  $.ajax({
    method: "DELETE",
    url: `api/quizzes/${id}`
  });
