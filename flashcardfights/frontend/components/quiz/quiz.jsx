import React from 'react';
import SingleQuestion from './single_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: Object.values(this.props.quiz.questions)
      question: 0
    }
  }

  renderQuestion() {
    return(
      <SingleQuestion question={this.props.quiz.questions[this.state.question]}/>
    );
  }

  render() {
    return(
      {this.renderQuestion()}
    );
  }
}

export default Quiz;
