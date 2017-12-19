export const fetchCourses = data =>
  $.ajax({
    method: "GET",
    url: "api/courses",
    data,
    err: () => console.log("Error fetching courses")
  });

export const fetchCourse = id =>
  $.ajax({
    method: "GET",
    url: `api/courses/${id}`,
    err: () => console.log("Error fetching course")
  });

export const createCourse = course =>
  $.ajax({
    method: "POST",
    url: "api/courses",
    data: course
  });

export const updateCourse = course =>
  $.ajax({
    method: "PATCH",
    url: `api/courses/${course.id}`,
    data: course
  });

export const deleteCourse = id =>
  $.ajax({
    method: "DELETE",
    url: `api/courses/${id}`
  });
