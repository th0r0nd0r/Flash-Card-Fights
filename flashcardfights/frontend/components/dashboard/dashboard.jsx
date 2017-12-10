import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    this.props.getCourses();
    this.props.getSubjects();
  }
  
  render() {
    return (
      <div className="dash">
        <h2>DASHBOARD</h2>
        <div className="my-courses">
          <h3>My Courses</h3>
          <div className="course-list">
            <ul>
              {Object.keys(this.props.courses).map((course_indx) => {
                let courseCardClassName = `course-card-${course_indx % 4}`;
                return(
                <div>
                    <li className={courseCardClassName}>{this.props.courses[course_indx].title}</li>
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
                  <li>{this.props.subjects[subject_indx].title}</li>
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
