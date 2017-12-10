import React from 'react';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("I'M AN ANSWER: ", this.props.answer);
    return(
      <div>
        <p>{this.props.answer.body}</p>
      </div>
    );
  }
}

export default QuestionAnswer;
