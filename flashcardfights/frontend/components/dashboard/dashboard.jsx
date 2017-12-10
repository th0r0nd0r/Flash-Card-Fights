import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.subjectClick = this.subjectClick.bind(this);
    this.state = {
      allCourses: {},
      courses: {},
      filters: {}
    };
  }

  componentDidMount() {
    this.props.getCourses();
    this.props.getSubjects();
  }

  componentWillReceiveProps(props) {
    this.setState({ allCourses: props.courses, courses: props.courses });
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
            filteredCourses[counter2] = this.state.allCourses[course_idx];
            counter2++;
          }
        });
      });
      console.log(newFilters);
      if (Object.keys(newFilters).length === 0) {
        this.setState({ courses: this.state.allCourses });
        this.setState({ filters: newFilters });
      } else {
        this.setState({filters: newFilters});
        this.setState({ courses: filteredCourses });
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
            filteredCourses[counter] = this.state.allCourses[course_idx];
            counter ++;
          }
        });
      });
      console.log("FILTERED COURSES", filteredCourses);
      this.setState({ courses: filteredCourses });
    }
    console.log("state", this.state.filters);
  }
  
  render() {
    return (
      <div className="dash">
        <h2>DASHBOARD</h2>
        <div className="my-courses">
          <h3>My Courses</h3>
          <div className="course-list">
            <ul>
              {Object.keys(this.state.courses).map((course_indx) => {
                let courseCardClassName = `course-card-${course_indx % 4}`;
                return(
                <div>
                    <li className={courseCardClassName}>{this.state.courses[course_indx].title}</li>
                  <div className="course-divider"></div>
                </div>);
              }
              )}
            </ul>
          </div>
        </div>
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

      </div>);
  }
}
export default Dashboard;
