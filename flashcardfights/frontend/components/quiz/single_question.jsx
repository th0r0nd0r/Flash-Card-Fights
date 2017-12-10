import React from 'react';
import QuestionAnswer from './question_answer';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
  }

  componentWillMount() {
    console.log('question number is ', this.props.questionNum);
  }

  handleSubmit() {
    const finish_time = Date.now()
    const score = finish_time - this.state.start_time
    const attempt = {
      score: score,
      question_id: this.props.question.id,
      user_id: this.props.userId
    }
    this.props.recordAttemptScore(score);
    this.props.createQuestionAttempt(attempt).then(() =>
      this.props.incrementQuestionCounter()
    );
  }

  componentDidMount() {
    this.setState({start_time: Date.now()});
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
