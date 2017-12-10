import React from 'react';
import SingleQuestion from './single_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props: ", this.props)
    this.state = {
      // keys: Object.values(this.props.quiz.questions),
      quiz: null,
      question: 0
    };
    this.incrementQuestionCounter = this.incrementQuestionCounter.bind(this);
  }

  incrementQuestionCounter() {
    this.setState({ question:this.state.question+1 });
  }


  componentDidMount() {
    const quizId = Number(this.props.match.params.quiz_id);
    this.props.fetchQuiz(quizId)
      .then(response => this.setState(response.quiz));
  }

  renderQuestion() {
    return(
      <SingleQuestion question={this.props.quiz.questions[this.state.question]}
                      incrementQuestionCounter={this.incrementQuestionCounter}/>
    );
  }

  render() {
    console.log("STATE: ", this.state);
    console.log("PROPS: ", this.props);
    return(
      <div className="quiz">
        <h1>THIS IS THE QUIZ COMPONENT</h1>
        <div className="single-question">
          {/* {this.renderQuestion()} */}
        </div>
      </div>
    );
  }
}


export default Quiz;
