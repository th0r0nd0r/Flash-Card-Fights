import React from 'react';
import QuestionAnswer from './question_answer';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAnswers() {
    let answers = Object.values(this.props.question.answers).map(answer => {
      <QuestionAnswer answer={answer}/>
    });
  }

  render() {
    return(
      <div>
        <h1>{this.props.question.body}</h1>
        {this.renderAnswers()}
      </div>
    );
  }
}

export default SingleQuestion;
