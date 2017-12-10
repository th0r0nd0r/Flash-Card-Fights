import React from 'react';
import SingleQuestion from './single_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props: ", this.props)
    this.state = {
      // keys: Object.values(this.props.quiz.questions),
      questions: [],
      current: -1,
      attempts: []
    };
    this.incrementQuestionCounter = this.incrementQuestionCounter.bind(this);
    this.recordAttemptScore = this.recordAttemptScore.bind(this);
  }

  incrementQuestionCounter() {
    this.setState({ current: this.state.current + 1 });
  }

  recordAttemptScore(score) {
    let arr = this.state.attempts;
    arr.push(score);
    if(arr.length === this.state.questions.length) {
      this.props.createQuizAttempt(this.props.quiz);
    }
    this.setState({
      attempts: arr
      }
    );
  }

  componentWillMount() {
    this.setState({current:0});
  }

  componentDidMount() {
    const quizId = Number(this.props.match.params.quiz_id);
    this.props.fetchQuiz(quizId)
      .then(response => this.setState({
        questions: Object.values(response.quiz.questions)
      }));
  }

  renderQuestion() {
    const questions = this.state.questions;
    console.log("QUESTIONS: ", questions);
    if (questions.length !== 0) {
      return(
        <SingleQuestion question={questions[this.state.current]}
                        incrementQuestionCounter={this.incrementQuestionCounter}
                        createQuestionAttempt={this.props.createQuestionAttempt}
                        userId={this.props.currentUser}
                        recordAttemptScore={this.recordAttemptScore}/>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    console.log('current is ', this.state.current);
    console.log('questions length is ', this.state.questions.length);
    const quiz = Object.values(this.props.quiz)[0];
    if (quiz) {
      if (this.state.current !== this.state.questions.length) {
        return(
          <div className="quiz">
            <h1>{quiz.name}</h1>
            <div className="quiz-divider"></div>
              <div className="single-question">
                {this.renderQuestion()}
              </div>
            </div>
          );
      } else {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log('object values of attemps is ', Object.values(this.state.attempts));
        return(
          <div className="quiz">
            <h1>{quiz.name}</h1>
              <div>
                Congratulations, you completed the quiz. Your score was {this.state.attempts.reduce(reducer, 0) / this.state.questions.length}
              </div>
          </div>
        )
      }
    } else {
      return (<div>LOADING...</div>);
    }
  }
}


export default Quiz;
