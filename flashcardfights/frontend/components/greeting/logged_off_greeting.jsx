import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="splash">
        <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_2522/v1512863717/study_tszv05.jpg"/>
      </div>);
  }
}
export default Greeting;
