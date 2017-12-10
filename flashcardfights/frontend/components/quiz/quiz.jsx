import React from 'react';
import SingleQuestion from './single_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props: ", this.props)
    this.state = {
      // keys: Object.values(this.props.quiz.questions),
      questions: [],
      current: 0
    };
    this.incrementQuestionCounter = this.incrementQuestionCounter.bind(this);
  }

  incrementQuestionCounter() {
    this.setState({ current: this.state.current + 1 });
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
                        incrementQuestionCounter={this.incrementQuestionCounter}/>
      );
    } else {
      return (<div></div>);
    }
  }

  render() {
    console.log("STATE: ", this.state);
    console.log("PROPS: ", this.props);
    const quiz = Object.values(this.props.quiz)[0];
    if (quiz) {
      return(
        <div className="quiz">
          <h1>{quiz.name}</h1>
          <div className="single-question">
            {this.renderQuestion()}
          </div>
        </div>
      );
    } else {
      return (<div>LOADING...</div>);
    }
  }
}


export default Quiz;
