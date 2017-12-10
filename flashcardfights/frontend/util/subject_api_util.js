export const fetchSubjects = data =>
  $.ajax({
    method: "GET",
    url: "api/subjects",
    data,
    err: () => console.log("Error fetching subjects")
  });