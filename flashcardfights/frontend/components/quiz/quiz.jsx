import React from 'react';
import SingleQuestion from './single_question';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: Object.values(this.props.quiz.questions),
      question: 0
    }
    this.incrementQuestionCounter = this.incrementQuestionCounter.bind(this);
  }

  incrementQuestionCounter() {
    this.setState({question:this.state.question+1});
  }

  
  componentWillMount() {
    this.props.getQuiz(this.props.match.params.quizId)
      .then((quiz) => {this.setState({quiz: quiz});});
  }

  renderQuestion() {
    return(
      <SingleQuestion question={this.props.quiz.questions[this.state.question]}
                      incrementQuestionCounter={this.incrementQuestionCounter}/>
    );
  }

  render() {
    return(
      <div className="quiz">
        <div className="single-question">
          {this.renderQuestion()}
        </div>
      </div>
    );
  }
}


export default Quiz;
