import React from 'react';

class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>{this.props.answer.body}</p>
      </div>
    );
  }
}

export default QuestionAnswer;
