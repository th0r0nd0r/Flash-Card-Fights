import React from 'react';
import QuestionAnswer from './question_answer';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // do some action stuff here like dispatch
    // action to create question attempt and .then
    this.props.incrementQuestionCounter();
  }

  renderAnswers() {
    let answers = Object.values(this.props.question.answers).map(answer => {
      <QuestionAnswer answer={answer} handleSubmit={this.handleSubmit}/>
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
