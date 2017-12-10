import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.subjectClick = this.subjectClick.bind(this);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    this.props.getCourses();
    this.props.getSubjects();
  }

  componentWillReceiveProps(props) {
    this.setState({ courses: props.courses });
  }

  subjectClick(e) {
    e.preventDefault();
    console.log(e.target.classList);
    if (e.target.classList.contains("tags-active")) {
      e.target.classList.remove("tags-active");
    } else {
      e.target.classList.add("tags-active");
      let filteredCourses = {};
      const filter = e.target.dataset.subject;
      let counter = 1;
      Object.keys(this.state.courses).map((course_idx) => {
        Object.values(this.state.courses[course_idx].subjects).map((x) => {
          if (x.title === filter) {
            filteredCourses[counter] = this.state.courses[course_idx];
            counter ++;
          }
        });
      });
      this.setState({ courses: filteredCourses });
    }
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
