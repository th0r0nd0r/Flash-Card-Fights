import React from 'react';
import QuestionAnswer from './question_answer';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
  }

  handleSubmit() {
    // do some action stuff here like dispatch
    // action to create question attempt and .then
    this.props.incrementQuestionCounter();
  }

  renderAnswers() {
    let answers = Object.values(this.props.question.answers);
    console.log(answers);
    return(
      <div>
        { answers.map((answer, idx) => <QuestionAnswer key={idx} answer={answer} handleSubmit={this.handleSubmit}/>) }
      </div>
    );
  }

  render() {
    console.log("SINGLE QUESTION PROPS: ", this.props);
    return(
      <div>
        <h1>{this.props.question.body}</h1>
        {this.renderAnswers()}
      </div>
    );
  }
}

export default SingleQuestion;
