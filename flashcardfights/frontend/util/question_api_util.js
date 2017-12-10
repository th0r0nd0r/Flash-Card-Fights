export const fetchQuestions = data =>
  $.ajax({
    method: "GET",
    url: "api/questions",
    data,
    err: () => console.log("Error fetching questions")
  });

export const fetchQuestion = id =>
  $.ajax({
    method: "GET",
    url: `api/questions/${id}`,
    err: () => console.log("Error fetching question")
  });

export const createQuestion = question =>
  $.ajax({
    method: "POST",
    url: "api/questions",
    data: question
  });

export const updateQuestion = question =>
  $.ajax({
    method: "PATCH",
    url: `api/questions/${question.id}`,
    data: question
  });

export const deleteQuestion = id =>
  $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  });
