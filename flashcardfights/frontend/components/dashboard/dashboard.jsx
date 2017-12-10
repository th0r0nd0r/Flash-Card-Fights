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

  }
  
  render() {
    console.log(this.props.courses);
    return (
      <div className="dash">
        <h2>DASHBOARD</h2>
        <div className="my-courses">
          <h3>My Courses</h3>
          <div className="course-list">
            <ul>
              {Object.keys(this.props.courses).map((course_indx) => {
                return(
                <div>
                  <li>{this.props.courses[course_indx].title}</li>
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
            <li>Math</li>
            <div className="tag-divider"></div>
            <li>Science</li>
            <div className="tag-divider"></div>
            <li>English</li>
            <div className="tag-divider"></div>
            <li>Rockclimbing</li>
          </ul>
        </div>

      </div>);
  }
}
export default Dashboard;
