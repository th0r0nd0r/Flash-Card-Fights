import React from 'react';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("I'M AN ANSWER: ", this.props.answer);
    if (this.props.answer.is_correct) {
      return(
        <div>
          <p>{this.props.answer.body}</p>
          <button onClick={this.props.handleCorrectSubmit}>Select this answer</button>
        </div>
      );
    } else {
      return(
        <div>
          <p>{this.props.answer.body}</p>
          <button onClick={this.props.handleIncorrectSubmit}>Select this answer</button>
        </div>
      );
    }
  }
}

export default QuestionAnswer;
