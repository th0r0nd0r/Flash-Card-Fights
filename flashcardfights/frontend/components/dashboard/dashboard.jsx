import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.subjectClick = this.subjectClick.bind(this);
    this.handleCourseClick = this.handleCourseClick.bind(this);
    this.state = {
      allCourses: {},
      allQuizzes: {},
      courses: {},
      filters: {},
      quizzes: {}
    };
  }

  componentDidMount() {
    this.props.getCourses();
    this.props.getSubjects();
    this.props.getQuizzes();
  }

  componentWillReceiveProps(props) {
    this.setState({ allCourses: props.courses, courses: props.courses, allQuizzes: props.quizzes.quizzes, quizzes: props.quizzes.quizzes });
  }

  componentWillUnmount() {
    this.setState({ courses: [] });
  }

  handleCourseClick(e) {
    const id = e.target.dataset.id;
    this.props.history.push(`/course/${id}`);
  }

  subjectClick(e) {
    e.preventDefault();
    if (e.target.classList.contains("tags-active")) {
      e.target.classList.remove("tags-active");
      let newFilters = {};
      let counter = 1;
      Object.keys(this.state.filters).map((filter_indx) => {
        if (this.state.filters[filter_indx] !== e.target.dataset.subject) {
          newFilters[counter] = this.state.filters[filter_indx];
          counter ++;
        }
      });
      let filteredCourses = {};
      let counter2 = 1;
      Object.keys(this.state.allCourses).map((course_idx) => {
        Object.values(this.state.allCourses[course_idx].subjects).map((x) => {
          if (Object.values(newFilters).includes(x.title) && !Object.keys(filteredCourses).includes(course_idx)) {
            filteredCourses[course_idx] = this.state.allCourses[course_idx];
            counter2++;
          }
        });
      });

      let filteredQuizzes = {};
      let counter3 = 1;
      Object.keys(this.state.allQuizzes).map((quiz_idx) => {
        Object.values(this.state.allQuizzes[quiz_idx].subjects).map((x) => {
          if (Object.values(newFilters).includes(x.title) && !Object.keys(filteredQuizzes).includes(quiz_idx)) {
            filteredQuizzes[quiz_idx] = this.state.allQuizzes[quiz_idx];
            counter3++;
          }
        });
      });

      if (Object.keys(newFilters).length === 0) {
        this.setState({ courses: this.state.allCourses });
        this.setState({ filters: newFilters });
        this.setState({ quizzes: this.state.allQuizzes });
      } else {
        this.setState({filters: newFilters});
        this.setState({ courses: filteredCourses });
        this.setState({ quizzes: filteredQuizzes });
      }
    } else {
      e.target.classList.add("tags-active");
      let filteredCourses = {};
      const filter = e.target.dataset.subject;
      const newFilters = {};
      let counter2 = 1;
      Object.keys(this.state.filters).map((filter_indx) => {
        newFilters[counter2] = this.state.filters[filter_indx];
        counter2++;
      });
      newFilters[counter2] = filter;
      this.setState({ filters: newFilters });
      let counter = 1;
      Object.keys(this.state.allCourses).map((course_idx) => {
        Object.values(this.state.allCourses[course_idx].subjects).map((x) => {
          if (Object.values(newFilters).includes(x.title) && !Object.keys(filteredCourses).includes(course_idx)) {
            filteredCourses[course_idx] = this.state.allCourses[course_idx];
            counter ++;
          }
        });
      });

      let filteredQuizzes = {};
      let counter3 = 1;
      Object.keys(this.state.allQuizzes).map((quiz_idx) => {
        Object.values(this.state.allQuizzes[quiz_idx].subjects).map((x) => {
          if (Object.values(newFilters).includes(x.title) && !Object.keys(filteredQuizzes).includes(quiz_idx)) {
            filteredQuizzes[quiz_idx] = this.state.allQuizzes[quiz_idx];
            counter3++;
          }
        });
      });

      console.log("FILTERED COURSES", filteredCourses);
      this.setState({ courses: filteredCourses });
      this.setState({ quizzes: filteredQuizzes });
    }
    console.log("state", this.state.filters);
  }
  
  render() {
    console.log("STATE", this.state);
    return (
      <div className="dash">
        <h2>DASHBOARD</h2>
        <div className="my-courses">
          <h3>My Courses</h3>
          <div className="course-or-quiz-list">
            <ul>
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
              {Object.keys(this.state.courses).map((course_indx) => {
                let courseCardClassName = `course-or-quiz-card-${course_indx % 4}`;
                return(
                <div>
                    <Link to={`course/${course_indx}`} >
                      <li className={courseCardClassName}>{this.state.courses[course_indx].title}</li>
                    </Link>
                    <div className="course-or-quiz-divider"></div>
                </div>
                );
              }
            )}
              </CSSTransitionGroup>
            </ul>
          </div>
        </div>
        <div className="tags_and_quizzes">
          <div className="tags">
            <h3>Tags</h3>
            <ul>
              {Object.keys(this.props.subjects).map((subject_indx) => {
                return (
                  <div>
                    <li onClick={this.subjectClick} data-subject={`${this.props.subjects[subject_indx].title}`}>{this.props.subjects[subject_indx].title}</li>
                    <div className="tag-divider"></div>
                  </div>);
              }
              )}
            </ul>
          </div>
          <div className="quizzes">
              <h3>Quizzes</h3>
              <ul>
                {Object.keys(this.state.quizzes).map((quiz_indx) => {
                  return (
                    <div>
                      <Link to={`quiz/${this.state.quizzes[quiz_indx].id}`} >
                      <li>{this.state.quizzes[quiz_indx].name}</li>
                      </Link>
                      <div className="tag-divider"></div>
                    </div>);
                }
                )}
              </ul>
          </div>
        </div>

      </div>);
  }
}
export default Dashboard;
