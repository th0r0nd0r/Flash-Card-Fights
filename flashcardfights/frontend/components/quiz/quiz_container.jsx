import {connect} from 'react-redux';
import Quiz from './quiz';

const mapStateToProps = (state, ownProps) => ({
  quiz: state.entities.quiz
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
