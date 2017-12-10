import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.course_id);
    const id = Number(this.props.match.params.course_id);
    this.props.getCourse(id)
      .then(response => this.setState(response.course));
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.course_id !== this.props.match.params.course_id) {
      console.log("I'm here");
      console.log(nextProps.match.params.course_id)
      const id = Number(nextProps.match.params.course_id);
      this.props.getCourse(id)
        .then(response => this.setState(response.course));
      // const currentCourse = Object.values(nextProps.course)[0];
      // this.setState({ course: currentCourse });
    }
  }

  componentWillUnmount() {
    this.setState({ course: null });
  }

  render() {
    console.log("STATE: ", this.state.course);
    console.log("PROPS: ", this.props.course);
    const course = Object.values(this.props.course)[0]; //this.state.course;
    if (course) {
      console.log("course quizzes array", Object.values(course.quizzes));
      return (
        <div className="dash">
          <h2>{course.title}</h2>
          <div className="my-courses">
            <h3>Course Quizzes</h3>
            <div className="course-or-quiz-list">
              <ul>
                {Object.values(course.quizzes).map((quiz, idx) => {
                  let quizCardClassName = `course-or-quiz-card-${idx % 4}`;
                  console.log("QUIZ: ",quiz);
                  return (
                    <div>
                      <li className={quizCardClassName}>{quiz.name}</li>
                      <div className="course-or-quiz-divider"></div>
                    </div>);
                }
                )}
              </ul>
            </div>
          </div>
        </div>);
    } else {
      return (
        <div></div>
      );
    }
  }
}
export default CoursePage;
