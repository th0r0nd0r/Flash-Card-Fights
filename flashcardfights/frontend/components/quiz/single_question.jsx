import React from 'react';
import QuestionAnswer from './question_answer';

class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: ""
    }
    this.handleCorrectSubmit = this.handleCorrectSubmit.bind(this);
    this.handleIncorrectSubmit = this.handleIncorrectSubmit.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
  }

  componentWillMount() {
    console.log('question number is ', this.props.questionNum);
  }

  handleCorrectSubmit() {
    const finish_time = Date.now()
    const seconds = (finish_time - this.state.start_time) / 1000;
    const score = (20 - seconds) * 5
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

  handleIncorrectSubmit() {
    const finish_time = Date.now()
    const seconds = (finish_time - this.state.start_time) / 1000;
    const score = 0
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
      <div className="answers">
        { answers.map((answer, idx) => <QuestionAnswer key={idx}
                                                       answer={answer}
                                                       handleCorrectSubmit={this.handleCorrectSubmit}
                                                       handleIncorrectSubmit={this.handleIncorrectSubmit}/>) }
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
