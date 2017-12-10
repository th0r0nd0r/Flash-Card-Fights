import * as APIUtil from "../util/course_api_util";

export const RECEIVE_COURSES = "RECEIVE_courseS";
export const RECEIVE_COURSE = "RECEIVE_course";
export const RECEIVE_COURSE_ERRORS = "RECEIVE_COURSE_ERRORS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

export const receiveCourses = courses => ({
  type: RECEIVE_COURSES,
  courses
});

export const receiveCourse = course => ({
  type: RECEIVE_COURSE,
  course
});

export const receiveErrors = errors => ({
  type: RECEIVE_COURSE_ERRORS,
  errors
});

export const getCourses = filters => dispatch =>
  APIUtil.fetchcourses(filters).then(
    courses => dispatch(receiveCourses(courses)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const getCourse = id => dispatch =>
  APIUtil.fetchcourse(id).then(
    course => dispatch(receiveCourse(course)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const createCourse = course => dispatch =>
  APIUtil.createcourse(course).then(
    newCourse => {
      dispatch(receiveCourse(newCourse));
      if (newCourse) {
        return newCourse;
      }
    },
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const updateCourse = course => dispatch =>
  APIUtil.updatecourse(course)
    .then(updated => dispatch(receiveCourse(updated)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)));

export const deleteCourse = id => dispatch => APIUtil.deletecourse(id);
