import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="dash">
        <h2>DASHBOARD</h2>
        <div className="my-courses">
          <h3>My Courses</h3>
          <div className="course-list">
            <ul>
              <li>Course1</li>
              <div className="course-divider"></div>
              <li>Course2</li>
              <div className="course-divider"></div>
              <li>Course3</li>
            </ul>
          </div>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <ul>
            <li>Math</li>
            <li>Science</li>
            <li>English</li>
            <li>Rockclimbing</li>
          </ul>
        </div>

      </div>);
  }
}
export default Dashboard;
