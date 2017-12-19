import React from 'react';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("I'M AN ANSWER: ", this.props.answer);
    if (this.props.answer.is_correct) {
      return(
        <div className="indiv-question">
          <button onClick={this.props.handleCorrectSubmit}>{this.props.answer.body}</button>
        </div>
      );
    } else {
      return(
        <div className="indiv-question">
          <button onClick={this.props.handleIncorrectSubmit}>{this.props.answer.body}</button>
        </div>
      );
    }
  }
}

export default QuestionAnswer;
